import { Hono } from "hono";

import webhook from "./webhook/webhook.routes";

const api = new Hono();

api.route("/webhook", webhook);

export default api;
