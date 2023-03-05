# attestation-indexer
GraphQL indexer for the Optimism AttestationStation

The Attestation Indexer is a GraphQL endpoint to quickly query the state of the AttestationStation. You can construct complex queries to find the relationships between attestors, attestees, keys, and values. Literally anything is possible with it. I released the URL early on twitter here: https://twitter.com/0xMasonH/status/1631797590437289986

My hope is that other hackathon projects will build on top of it.

To use the indexer, simply use any GraphQL library and set the endpoint URL to https://attestation-indexer-production.up.railway.app/graphql.

You can also use the hosted interface at the above URL to test it out in a user-friendly way!

Try this sample query:

```
{
  attestations(orderBy: "timestamp", orderDirection: "desc", first: 100) {
    id
    creator
    about
    key
    val
    timestamp
  }
}
```

Then you can hit the API as much as you want. There are no rate limits, and I am covering cloud costs myself, so please act responsibly!
