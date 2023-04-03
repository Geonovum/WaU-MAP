let respecConfig = {
  // preProcess: [loadYamlLang],
  useLogo: true,
  useLabel: true,
  //default voor Geonovum is cc-by, eventueel is het mogelijk een andere licentie (cc0 of cc-by-nd) hier te kiezen voor het document.
  // license: "cc-by",
  specStatus: "WV",
  specType: "ST",
  pubDomain: "wau",
  shortName: "WaU-MAP",
  publishDate: "2023-04-03",
  //eventueel is het mogelijk een versienummer mee te geven, maar bij Geonovum werken we standaard alleen met datum als onderdeel van de permanente URI.
  //publishVersion: "0.0.2",
  //previousVersion: "0.0.1",
  // previousPublishDate: "2014-05-01",
  previousMaturity: "EO",
  title: "WaU IMX Model Mapping",
  editors:
    [
      {
        name: "Paul Janssen",
        company: "Geonovum",
        companyURL: "https://www.geonovum.nl",
      }
    ],
  authors:
    [
      {
        name: "Pano Maria",
        company: "Skemu",
        companyURL: "https://www.skemu.com",
      }
    ],
  //neem hier de URL van de github repository op waar het respec document in staat
  github: "https://github.com/Geonovum/WaU-MAP",


  // Create PDF and link to file in header (optional):
  alternateFormats: [
      {
          label: "pdf",
          uri: "template.pdf",
      },
  ],
};