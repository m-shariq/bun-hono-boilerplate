import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { prettyJSON } from "hono/pretty-json";

import api from "./apis";

const app = new Hono();

// enable cors and logger for all routes
app.use("*", logger());
app.use("*", prettyJSON());
app.use("/api/*", cors());

app.get("/", (c) => c.text("Hello Vyro!"));
app.route("/api/v1", api);

export default app;
