// console.log("Hello via Bun!");

import { serve } from "bun";

const server = serve({
  port: 4000,
  fetch(req) {
    return new Response("Hello, Bun with TypeScript!");
  },
});

console.log(`Server running at http://localhost:${server.port}`);