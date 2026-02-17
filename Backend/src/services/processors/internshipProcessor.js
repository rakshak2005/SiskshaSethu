import Internship from "../../models/internship.js";

export const processInternships = async (data) => {
  for (let item of data) {

    const existing = await Internship.findOne({
      applyUrl: item.applyUrl
    });

    if (!existing) {
      await Internship.create({
        title: item.title,
        company: item.company,
        source: item.source,
        applyUrl: item.applyUrl,
        location: item.location,
        duration: item.duration,
        stipend: item.stipend,
        deadline: item.deadline,
        lastChecked: new Date(),
        status: "active"
      });

      console.log("Inserted:", item.title, "-", item.source);
    }
  }
};
