import Scholarship from "../../models/scholarship.js";

export const expireOldScholarships = async () => {
  const today = new Date();

  await Scholarship.updateMany(
    { deadline: { $lt: today } },
    { $set: { status: "expired" } }
  );
};
