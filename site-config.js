"use strict"

module.exports = {
  url: "https://example.com",
  title: "Gatsby Blog Starter",
  subtitle:
    "a simple theme for blog.",
  copyright: "© All rights reserved.",
  disqusShortname: "",
  postsPerPage: 10,
  googleAnalyticsId: "",
  useKatex: false,
  menu: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Posts",
      path: "/posts/",
    },
    {
      label: "About",
      path: "/about/",
    },
  ],
  author: {
    name: "John Doe",
    photo: "/photo.jpg",
    bio: "Pellentesque odio nisi, euismod in, pharetra a, ultricies in, diam. Sed arcu.",
    contacts: {
      email: "",
      facebook: "#",
      telegram: "#",
      twitter: "#",
      github: "#",
      rss: "",
      vkontakte: "",
      linkedin: "#",
      instagram: "#",
      line: "",
      gitlab: "",
      weibo: "",
      codepen: "",
      youtube: "",
      soundcloud: "",
      medium: "",
    },
  },
  giscus: {
    repo: "roninro/crispy-bassoon",
    repoId: "R_kgDOGgPnJw",
    category: "Comments",
    categoryId: "DIC_kwDOGgPnJ84CANaJ",
    mapping: "pathname",
    reactionsEnabled: "1",
    emitMetadata: "0",
    theme: "light",
  }
}
