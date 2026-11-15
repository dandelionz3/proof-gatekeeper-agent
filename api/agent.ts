/**
 * Vercel serverless entry for the Proof Gatekeeper agent.
 * Forwards the raw request to the plain Node http.Server built in
 * src/server.ts (bodyParser disabled so HMAC verification sees the
 * untouched raw body). The repo's README references this file; it was
 * missing from the clone, so it was added here (2026-11-15).
 */
import server from "../src/server";

export const config = {
  api: { bodyParser: false },
};

export default function handler(req: any, res: any): void {
  // http.Server is not callable; invoke its request listener directly.
  server.emit("request", req, res);
}
