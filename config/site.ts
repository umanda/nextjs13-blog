export interface SiteConfig {
  siteName: string;
  description: string;
  currentlyAt: string;
  socialLinks: {
    twitter: string;
    youtube: string;
    github: string;
    linkedin: string;
    instagram: string;
    facebook: string;
  };
  rightsText: string;
  creatorText: string;
}

const siteConfig: SiteConfig = {
  siteName: "Explorer",
  description:
    "A minimal and lovely travel blog which shares experiences and citiest around the world!",
  currentlyAt: "Colombo",
  socialLinks: {
    twitter: "https://twitter.com/umandajayo",
    youtube: "https://youtube.com/@umanda",
    github: "https://github.com/umanda",
    linkedin: "https://linkedin.com/in/umanda",
    instagram: "https://instagram.com/umandajayo",
    facebook: "https://facebook.com/umandajayo",
  },
  rightsText: "All rights are reserved | Copyright",
  creatorText: "Created with ❤️ by",
};

export default siteConfig;
