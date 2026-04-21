
const wwiCountries = {
  "France": "Allies",
  "United Kingdom": "Allies",
  "Russia": "Allies",
  "United States of America": "Allies",
  "Italy": "Allies",
  "Belgium": "Allies",
  "Serbia": "Allies",
  "Romania": "Allies",
  "Greece": "Allies",
  "Japan": "Allies",
  "Portugal": "Allies",
  "Montenegro": "Allies",

  "Germany": "Central Powers",
  "Austria - Hungary": "Central Powers",
  "Turkey": "Central Powers",
  "Bulgaria": "Central Powers"
};

var wwi_1914 = {
  "type": "FeatureCollection",
  "features": before_data.features
    .filter(feature => {
      const name =
        feature.properties.ADMIN ||
        feature.properties.name ||
        feature.properties.NAME;

      return wwiCountries[name];
    })
    .map(feature => {
      const name =
        feature.properties.ADMIN ||
        feature.properties.name ||
        feature.properties.NAME;

      return {
        ...feature,
        properties: {
          ...feature.properties,
          side: wwiCountries[name]
        }
      };
    })
};