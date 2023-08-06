# heroicli - A CLI for Heroic

##### Why 'heroicli`
because it was one of the options for synoyms of `heroic` or `hero`.


# Config 

heroicli will search ~/.heroicli.yaml or `-c/--config` for a config. The only **required** entry is `heroicli.heroic.url` 

```yaml
heroicli:
  heroic:
    url: http://heroic.local #required
    limits: 5000
    features: 
      - com.spotify.heroic.distributed_aggragations
    
```

`--help` is youi friend
Uses:

`heroicli key-inspect` : Find all `$keys`. Queries the `/metadata/key-suggest` endpoint. 

`heroicli tag-inspect`: Find all values for a specific tag. Queries the `/metadata/tag-value-suggest` endpoint

`heroicli high-cardinality`: Find tags with high cardinality(use `--threshold`). First finds all keys using `key-inspect`, which is used to make smaller queries to `/metadata/tagkey-count` endpoint.



Todo:

`heroicli tag-discovery`: Find all applicable tags/values for a given query 

`heroicli query`: Run a query, print results (datapoints included)


