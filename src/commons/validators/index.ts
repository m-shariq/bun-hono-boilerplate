/* eslint-disable eslint-comments/disable-enable-pair */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { validator } from "hono/validator";
import { z } from "zod";

export const queryValidator = (schema: z.ZodObject<any, any>) =>
  validator("query", (value, c) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      return c.text("Invalid query params!", 400);
    }
    c.set("validatedQuery", parsed.data);
    return parsed.data;
  });

export const paramsValidator = (schema: z.ZodObject<any, any>) =>
  validator("param", (value, c) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      return c.text("Invalid path params!", 400);
    }
    c.set("validatedParams", parsed.data);
    return parsed.data;
  });

export const bodyValidator = (schema: z.ZodObject<any, any>) =>
  validator("form", (value, c) => {
    const parsed = schema.safeParse(value);
    if (!parsed.success) {
      return c.text("Invalid body!", 400);
    }
    c.set("validatedBody", parsed.data);
    return parsed.data;
  });

export default queryValidator;
