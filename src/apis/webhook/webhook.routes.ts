import { Hono } from "hono";

import { queryValidator } from "@/commons/validators";

import { fun } from "./webhook.controller";
import { tokenValidator } from "./webhook.validator";

const webhook = new Hono();

webhook.get("/", queryValidator(tokenValidator), async (c) => {
  const res = await fun(c);
  return c.json(res);
});

export default webhook;
