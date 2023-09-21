import { describe, expect, test } from "bun:test";

import app from "@/app";

describe("Testing Webhook", () => {
  test("GET /api/v1/webhook", async () => {
    const res = await app.request("/api/v1/webhook?token=test");
    expect(res.status).toBe(200);
  });
});
