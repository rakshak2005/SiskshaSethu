import axios from "axios";

export const fetchVTUInternships = async (page = 1) => {
  try {
    const { data } = await axios.get(
      `https://vtuapi.internyet.in/api/v1/internships?page=1`,
      {
        headers: {
          Accept: "application/json",
          Origin: "https://vtu.internyet.in",
          Referer: "https://vtu.internyet.in/internships",
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
      }
    );

    const internships = data?.data?.data || [];

    return internships.map((item) => ({
      title: item.title,
      company: item.company?.name || "Unknown",
      source: "VTU",
      applyUrl: `https://vtu.internyet.in/internships/${item.slug}`,
      location: item.workMode || item.location || "",
      duration: item.duration || "",
      stipend: item.stipend || "",
      deadline: item.deadline ? new Date(item.deadline) : null
    }));

  } catch (error) {
    console.error("VTU Fetch Error:", error.message);
    return [];
  }
};
