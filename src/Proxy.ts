import { ponder } from "../generated";

ponder.on("Proxy:AdminChanged", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("Proxy:Upgraded", async ({ event, context }) => {
  console.log(event.params);
});
