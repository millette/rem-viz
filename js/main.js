import vegaEmbed from "vega-embed"

vegaEmbed("#vis", "spec.json")
  .then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
  })
  .catch(console.error)
