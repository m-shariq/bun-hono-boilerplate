import { Context } from "hono";

import { Response, Token } from "@/interface";

export const fun = async (c: Context): Promise<Response> => {
  const query: Token = c.get("validatedQuery");
  return { result: query };
};

export default fun;
