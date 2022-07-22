import { Member } from "@src/types";

export const members: Member[] = [
  {
    id: "501a",
    name: "501A",
    role: "Developer",
    bio: "I like design and frontend development",
    avatarSrc: "https://avatars.githubusercontent.com/u/71879545?v=4",
    sources: [
      "https://zenn.dev/501a/feed",
      "https://dev.to/feed/501a/",
      "https://note.com/501a/rss",
    ],
    includeUrlRegex: "zenn.dev|dev.to|note.com",
    twitterUsername: "Design501A",
    githubUsername: "501A-Designs",
    websiteUrl: "https://501a.netlify.app",
  },
];
