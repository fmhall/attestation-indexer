import { ponder } from "../generated";

ponder.on("Proxy:AdminChanged", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("Proxy:Upgraded", async ({ event, context }) => {
  console.log(event.params);
});

ponder.on("Proxy:AttestationCreated", async ({ event, context }) => {
  // console.log(event.params);
  await context.entities.Attestation.insert(
    `${event.block.number}-${event.params.creator}-${event.params.about}-${event.params.key.toString()}-${event.params.val.toString()}`,
    {
      creator: event.params.creator,
      about: event.params.about,
      key: event.params.key.toString(),
      val: event.params.val.toString(),
      timestamp: event.block.timestamp,
    }
  );
});