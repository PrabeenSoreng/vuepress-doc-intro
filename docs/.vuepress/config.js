module.exports = {
  host: "localhost",
  title: "VuePress",
  description: "My VuePress powered docs",
  themeConfig: {
    nav: [
      { text: "Guide", link: "/guide/" },
      { text: "Google", link: "https://google.com" }
    ],
    sidebar: ["/guide/", "/guide/getting-started"]
  }
};
