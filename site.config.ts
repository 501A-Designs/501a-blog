export const config = {
  siteMeta: {
    title: "501A Blog",
    teamName: "501A Designs",
    description: "A blog site that contains all of my blog articles posted in different platforms",
  },
  siteRoot:
    process.env.NODE_ENV === "production"
      ? "https://team-blog-hub.vercel.app"
      : "http://localhost:3000",
  headerLinks: [
    {
      title: "Personal Site",
      href: "https://501a.netlify.app/",
    },
    // {
    //   title: "About",
    //   href: "/about",
    // },
    {
      title: "GitHub",
      href: "https://github.com/501A-Designs/501a-blog",
    },
  ],
};
