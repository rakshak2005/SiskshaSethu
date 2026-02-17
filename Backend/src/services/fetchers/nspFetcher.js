import axios from "axios";
import * as cheerio from "cheerio";

export const fetchNSPScholarships = async () => {
  try {
    const { data } = await axios.get("https://scholarships.gov.in/", {
      headers: {
        "User-Agent": "Mozilla/5.0"
      }
    });

    const $ = cheerio.load(data);
    const scholarships = [];


    $("a").each((i, el) => {
      const title = $(el).text().trim();
      const link = $(el).attr("href");

      if (
        title.toLowerCase().includes("scholarship") &&
        link &&
        link.startsWith("http")
      ) {
        scholarships.push({
          title,
          provider: "National Scholarship Portal",
          source: "NSP",
          applyUrl: link,
          eligibility: null,
          amount: null,
          deadline: null
        });
      }
    });

    console.log("NSP fetched:", scholarships.length);
    return scholarships;

  } catch (error) {
    console.error("NSP Fetch Error:", error.message);
    return [];
  }
};
