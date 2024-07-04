const NEXT_PUBLIC_CHURCHILL_URL = process.env.NEXT_PUBLIC_CHURCHILL_URL;
import { FaPhoneAlt, FaUser } from "react-icons/fa";
import { IoLibrary } from "react-icons/io5";

export const topInfoData = [
  {
    title: "Find Agent",
    redirect: `${NEXT_PUBLIC_CHURCHILL_URL}/find-agent`,
    icon: <FaUser />,
  },
  {
    title: "Library",
    redirect: "https://churchill.softlinkhosting.com.au",
    icon: <IoLibrary />,
  },
  {
    title: "Contact Us",
    redirect: `${NEXT_PUBLIC_CHURCHILL_URL}/contact-us`,
    icon: <FaPhoneAlt />,
  },
];
