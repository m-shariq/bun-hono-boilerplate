import { z } from "zod";

export const tokenValidator = z.object({
  token: z.string(),
});

export default tokenValidator;
