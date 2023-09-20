import { serve } from "bun";

import app from "./app";
import "./paths";

serve({
  port: 8000,
  fetch: app.fetch,
});
