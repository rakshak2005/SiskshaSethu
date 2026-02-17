import axios from "axios";
import * as cheerio from "cheerio";

export const fetchFreshersworldInternships = async () => {
  try {
    const { data } = await axios.get(
      "https://www.freshersworld.com/jobs/category/internship-job-vacancies",
      {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/145 Safari/537.36",
        },
      }
    );

    const $ = cheerio.load(data);
    const internships = [];

    $(".job-container, .job-listing, .job-wrapper").each((i, el) => {
      const title = $(el).find("h3, h2").first().text().trim();
      const company = $(el).find(".company-name").text().trim();

      const relativeUrl = $(el).find("a").attr("href");

      // ✅ Skip if no link
      if (!relativeUrl) return;

      // ✅ Handle absolute + relative links properly
      const applyUrl = relativeUrl.startsWith("http")
        ? relativeUrl
        : "https://www.freshersworld.com" + relativeUrl;

      // ✅ Skip if no title
      if (!title) return;

      internships.push({
        title,
        company: company || "Freshersworld Employer",
        source: "FRESHERSWORLD",
        applyUrl,
        location: "",
        duration: "",
        stipend: "",
        deadline: null,
      });
    });

    console.log("Freshersworld fetched (valid):", internships.length);

    return internships;
  } catch (err) {
    console.error("Freshersworld Fetch Error:", err.message);
    return [];
  }
};
