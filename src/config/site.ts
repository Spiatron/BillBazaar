export type SiteConfig = typeof siteConfig;
import { SiGooglehome } from "react-icons/si";
import { FaFire } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa6";
import { FaInfoCircle } from "react-icons/fa";
import { RiContactsFill } from "react-icons/ri";
import { BsReceiptCutoff } from "react-icons/bs";

export const siteConfig = {
  name: "Bill Bazar",
  description: "Sab Bills Ek Hi Jagah.",
  navItems: [
    {
      label: "Home",
      href: "/",
      Icon: SiGooglehome,
    },
    {
      label: "light Bills",
      href: "/light",
      Icon: FaRegLightbulb,
    },
    {
      label: "Gas Bills",
      href: "/gas",
      Icon: FaFire,
    },
    {
      label: "About",
      href: "/about",
      Icon: FaInfoCircle,
    },
    {
      label: "Contact Us",
      href: "/ContactUs",
      Icon: RiContactsFill,
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/nextui-org/nextui",
    twitter: "https://twitter.com/getnextui",
    docs: "https://nextui.org",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/Spiatron",
  },
};
