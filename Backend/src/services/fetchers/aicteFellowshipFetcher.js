import axios from "axios";

export const fetchAICTEFellowships = async () => {
  try {
    const response = await axios.get(
      "https://fellowshipapi.aicte.gov.in/api/getActiveSchemes",
      {
        headers: {
          "User-Agent": "Mozilla/5.0",
          "Accept": "application/json",
          "Referer": "https://fellowship.aicte.gov.in/"
        }
      }
    );

    const schemes = response.data.schemes || [];

    const formatted = schemes.map((item) => ({
      title: item.title,
      provider: "AICTE",
      source: "AICTE Fellowship",
      applyUrl: item.link && item.link.startsWith("http")
        ? item.link
        : "https://fellowship.aicte.gov.in/",
      eligibility: item.body,
      amount: extractAmount(item.body),
      deadline: null
    }));

    console.log("AICTE Fellowships fetched:", formatted.length);

    return formatted;

  } catch (error) {
    console.error(
      "AICTE Fellowship fetch error:",
      error.response?.data || error.message
    );
    return [];
  }
};


function extractAmount(text) {
  if (!text) return null;

  const match = text.match(/Rs\.?\s?[\d,]+/i);
  return match ? match[0] : null;
}
