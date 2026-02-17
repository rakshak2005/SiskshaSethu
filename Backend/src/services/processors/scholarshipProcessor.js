import Scholarship from "../../models/scholarship.js";

export const processScholarships = async (data) => {
  for (let item of data) {
    await Scholarship.updateOne(
      { applyUrl: item.applyUrl },
      { $set: item },
      { upsert: true }
    );
  }
};
