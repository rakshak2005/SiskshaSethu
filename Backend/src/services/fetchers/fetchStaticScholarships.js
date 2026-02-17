import { scholarships } from "../../data/scholarships.js";

export const fetchStaticScholarships = async () => {
  return scholarships.map(item => ({
    title: item.title,
    provider: item.company || item.source,
    source: item.source,
    applyUrl: item.url,
    eligibility: item.skills,
    amount: item.amount,
    deadline: item.applyBy ? new Date(item.applyBy) : null
  }));
};
