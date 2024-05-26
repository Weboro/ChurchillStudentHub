import { PiCourtBasketballBold, PiGenderIntersexBold } from "react-icons/pi";
import { RiExchangeDollarFill, RiRefund2Fill } from "react-icons/ri";
import { TbCreditCardRefund } from "react-icons/tb";

export const navItems = [
  {
    title: "Home",
    slug: "/",
    link: "",
    Catagories: [],
  },
  {
    title: "How to guide",
    slug: "how-to-guide",
    link: "",
    Catagories: [
      {
        menuTitle:
          "1. How to install Office 365 Apps in Personal laptop using student Account?",
        slug: "how-to-install-Office-365-apps-in-personal-laptop-using-student-account",
        link: "",
        CatagoriesItem: {
          title:'How to install Office 365 Apps in Personal laptop using student Account?',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle:
          "2. How to install Office 365 Apps in macbook using student Account?",
        slug: "how-to-install-Office-365-apps-in-macbook-using-student-account",
        link: "",
        CatagoriesItem: {
          title:'How to install Office 365 Apps in macbook using student Account?',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "3. How to Create USI (Unique Student Identifier) ID ?",
        slug: "how-to-create-USI-ID",
        link: "",
        CatagoriesItem: {
          title:'How to Create USI (Unique Student Identifier) ID ?',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "4.  How to Login to Canvas and Basic functions?",
        slug: "how-to-login-to-canvas-and-basic-functions",
        link: "",
        CatagoriesItem: {
          title:'How to Login to Canvas and Basic functions?',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "5. More Guides",
        slug: "more-guides",
        link: "",
        CatagoriesItem: {
          title:'More Guides',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
    ],
  },
  {
    title: "Policies",
    link: "",
    slug: "policies",
    Catagories: [
      {
        menuTitle: "Student Code of Conduct",
        slug: "student-code-of-conduct",
        link: "",
        CatagoriesItem: {
          title:'Student Code of Conduct',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "Credit Policy",
        slug: "credit-policy",
        link: "",
        CatagoriesItem: {
          title:'Credit Policy',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "Assesment Policy",
        slug: "assesment-policy",
        link: "",
        CatagoriesItem: {
          title:'Assesment Policy',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "Sexual Assault and Sexual",
        slug: "sexual-assault-and-sexual",
        link: "",        
        CatagoriesItem: {
          title:'Sexual Assault and Sexual',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
      {
        menuTitle: "Harrasment Policy",
        slug: "harrasment-policy",
        link: "",
        CatagoriesItem: {
          title:'Harrasment Policy',
          image:'/assets/hero-image.png',
          description:
            "Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct Student Code of Conduct ",
        },
      },
    ],
  },
  // {
  //   title: "Enrollment",
  //   link: "",
  //   slug: "contact-us",
  //   Catagories: [
  //     {
  //       menuTitle: "-New Students ",
  //       slug: "new-students",
  //       link: "",
  //     },
  //     {
  //       menuTitle: "-Onoing Students",
  //       slug: "onoing-students",
  //       link: "",
  //     },
  //   ],
  // },
  {
    title: "Request Form",
    link: "",
    slug: "request-form",
    Catagories: [
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Refund Request",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "refund-request",
        link: "",
        image:'/assets/hero-image.png',
      },
      {
        icon: <RiRefund2Fill />,
        menuTitle: "Apply For Special Consideration",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "apply-for-special-consideration",
        link: "",
        image:'/assets/hero-image.png',
      },
      {
        icon: <PiCourtBasketballBold />,
        menuTitle: "Course Change",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "course-change",
        link: "",
        image:'/assets/hero-image.png',
      },
      {
        icon: <RiExchangeDollarFill />,
        menuTitle: "Apply For Payment Plan",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "apply-for-payment-plan",
        link: "",
        image:'/assets/hero-image.png',
      },
      {
        icon: <PiGenderIntersexBold />,
        menuTitle: "Sexual Harrasment Report",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "sexual-harrasment-report",
        link: "",
        image:'/assets/hero-image.png',
      },
      {
        icon: <TbCreditCardRefund />,
        menuTitle: "Credit Transfer",
        subTitle: "Access your timetable, results, trimester invoices.",
        slug: "credit-transfer",
        link: "",
        image:'/assets/hero-image.png',
      },
    ],
  },
];
