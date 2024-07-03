const isProd = process.env.NODE_ENV === "production"

module.exports = {
  inputDir: "./svg",
  outputDir: "./dist",
  fontTypes: ["woff"],
  assetTypes: ["css", "html"],
  fontsUrl: `${isProd ? "/fonts" : ""}`,
  name: "icons",
  // prefix: 'ui',
  formatOptions: {
    getIconId: ({ basename }) => [basename].join("_"),
  },
}
