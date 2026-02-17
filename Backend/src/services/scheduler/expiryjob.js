import Internship from "../../models/internship.js";

export const expireOldInternships = async () => {
  const today = new Date();

  await Internship.updateMany(
    { deadline: { $lt: today }, status: "active" },
    { status: "expired" }
  );
};
