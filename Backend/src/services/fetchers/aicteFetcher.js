import axios from "axios";
import * as cheerio from "cheerio";

const AICTE_URL =
  "https://internship.aicte-india.org/class/class_internship.php";

export const fetchPublicInternships = async (page = 1) => {
  try {
    const formData = new URLSearchParams({
      action: "load_internship",
      location: "all",
      internship_type: "all",
      internship_stipend: "all",
      page: page.toString(),
    });

    const response = await axios.post(AICTE_URL, formData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
      },
    });

    
    const htmlString = response.data?.list;

    if (!htmlString) {
      console.log("AICTE returned empty response");
      return [];
    }

    const $ = cheerio.load(htmlString);
    const internships = [];

    $(".card.internship-item").each((i, el) => {
      const title = $(el).find(".job-title").text().trim();
      const company = $(el).find(".company-name").text().trim();
      const location = $(el).find(".location span").text().trim();
      const duration = $(el).find(".duration span").text().trim();

      const stipend = $(el)
        .find(".job-supplement-attributes .stipend span")
        .first()
        .text()
        .trim();

      const deadline = $(el)
        .find(".apply-by span")
        .text()
        .trim();

      const detailsLink = $(el)
        .find(".btn-wrap a")
        .attr("href");

      const applyUrl = detailsLink
        ? `https://internship.aicte-india.org/${detailsLink}`
        : "";

     
      if (title && company) {
        internships.push({
          title,
          company,
          source: "AICTE",
          applyUrl,
          location,
          duration,
          stipend,
          deadline,
        });
      }
    });

    console.log(`AICTE fetched successfully: ${internships.length}`);

    return internships;

  } catch (error) {
    console.error("AICTE Fetch Error:", error.message);
    return [];
  }
};
