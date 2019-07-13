module.exports = {
  title: "BSidesVarazdin",
  description:
    "BSidesVarazdin is a vendor neutral technical information security symposium in Croatia.",
  head: [
    [
      "meta",
      {
        keywords:
          "bsides, security, cybersecurity, tech, it, symposium, croatia, varazdin",
      },
    ],
    [
      "meta",
      {
        name: "theme-color",
        content: "#222629",
      },
    ],
    ["meta", { property: "og:type", content: "website" }],
    [
      "meta",
      {
        property: "og:image",
        content: "https://www.bsidesvarazdin.hr/static/img/logo.png",
      },
    ],
    ["meta", { property: "og:image:type", content: "image/png" }],
    ["meta", { property: "og:image:width", content: "1200" }],
    ["meta", { property: "og:image:height", content: "754" }],
    ["meta", { property: "og:url", content: "https://www.bsidesvarazdin.hr" }],
    ["meta", { property: "og:title", content: "BSidesVarazdin" }],
    [
      "meta",
      {
        property: "og:description",
        content:
          "BSidesVarazdin is a vendor neutral technical information security symposium in Croatia.",
      },
    ],
    ["meta", { property: "og:locale", content: "en_us" }],
    [
      "link",
      { rel: "icon", type: "image/png", href: "/static/img/favicon.png" },
    ],
  ],
  scss: {
    data: `@import "@theme/styles/global.scss";`,
  },
};
