import { z } from "zod";

export const applicationSchema = z.object({
  companyName: z.string().min(2).max(100),
  roleTitle: z.string().min(2).max(100),
  jobUrl: z.union([z.string().url(), z.literal("")]).optional(),
  location: z.string().max(100).optional(),
  salaryMin: z.coerce.number().int().nonnegative().optional(),
  salaryMax: z.coerce.number().int().nonnegative().optional(),
  jobType: z
    .enum(["FULL_TIME", "PART_TIME", "INTERNSHIP", "CONTRACT", "TEMPORARY"])
    .optional(),
  status: z
    .enum([
      "SAVED",
      "APPLIED",
      "OA",
      "INTERVIEW",
      "FINAL_ROUND",
      "OFFER",
      "REJECTED",
      "ARCHIVED",
    ])
    .default("SAVED"),
  description: z.string().max(2000).optional(),
  reminderDate: z.union([z.string().datetime(), z.literal("")]).optional(),
});