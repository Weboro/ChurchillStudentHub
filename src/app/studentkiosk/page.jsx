"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const forms = [
    {
        title: "Sexual Assault & Harassment Report",
        link: "https://zfrmz.com.au/Vj5JjMTkc8KLrYOdkEpq",
        icon: "https://cdn-icons-png.flaticon.com/128/5069/5069091.png",
    },
    {
        title: "Student Grievance Form",
        link: "https://zfrmz.com.au/HWanNqH4bYLWRd9ghNW6",
        icon: "https://cdn-icons-png.flaticon.com/128/5069/5069061.png",
    },
    {
        title: "Special Consideration Application",
        link: "https://zfrmz.com.au/6wWbnFsJOkSrWe9rVMbs",
        icon: "https://cdn-icons-png.flaticon.com/128/3916/3916596.png",
    },
    {
        title: "Payment Plan Form",
        link: "https://zfrmz.com.au/CaS3QBzTw3l18bsh3jPG",
        icon: "https://cdn-icons-png.flaticon.com/128/3916/3916663.png",
    },
    {
        title: "Change of Course",
        link: "https://zfrmz.com.au/X9AZvkNqzDFBpBES0ivh",
        icon: "https://cdn-icons-png.flaticon.com/128/3914/3914251.png",
    },
    {
        title: "Student Document Request Form",
        link: "https://zfrmz.com.au/L7XYZzwaAnKGCIt9Qfyb",
        icon: "https://cdn-icons-png.flaticon.com/128/3914/3914193.png",
    },
    {
        title: "Application for Credit",
        link: "https://zfrmz.com.au/Yv1WJqg1kclkGVXSRyKU",
        icon: "https://cdn-icons-png.flaticon.com/128/3916/3916663.png",
    },
    {
        title: "Deferral",
        link: "https://zfrmz.com.au/h2AYLoMcDAZLXZ7OoUle",
        icon: "https://cdn-icons-png.flaticon.com/128/3917/3917134.png",
    },
    {
        title: "Leave of Absence",
        link: "https://zfrmz.com.au/HpBjIJRs3cplcqIb4Ny1",
        icon: "https://cdn-icons-png.flaticon.com/128/11659/11659893.png",
    },
    {
        title: "Refund",
        link: "https://zfrmz.com.au/RXpN4XUu8RZhAhUoWzI3",
        icon: "https://cdn-icons-png.flaticon.com/128/19005/19005088.png",
    },
    {
        title: "IT Support Form",
        link: "https://forms.zoho.com.au/CIHE/form/ITSupportForm",
        icon: "https://cdn-icons-png.flaticon.com/128/12442/12442387.png",
    }
];

const Page = () => {
    const pathname = usePathname();

    useEffect(() => {
        const header = document.querySelector(".header");
        const footerTop = document.querySelector(".footer-top");
        const footerBottom = document.querySelector(".footer-bottom");

        if (pathname === "/studentkiosk") {
            header?.classList.add("hidden");
            footerTop?.classList.add("hidden");
            footerBottom?.classList.add("hidden");
        } else {
            header?.classList.remove("hidden");
            footerTop?.classList.remove("hidden");
            footerBottom?.classList.remove("hidden");
        }
    }, [pathname]);

    return (
        <div>
            <div className="container mx-auto">
                <nav className="bg-white shadow-md rounded-xl p-4 mb-5 flex justify-between items-center">
                    <Image
                        src="/assets/logo-churchill.svg"
                        width={400}
                        height={400}
                        alt="Main Logo"
                        className="object-contain w-[250px] h-auto"
                        priority
                    />
                    <h1 className="text-xl font-bold text-gray-800">Student Kiosk</h1>

                </nav>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {forms.map((form, idx) => (
                        <a
                            key={idx}
                            href={form.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
                        >
                            <Image
                                src={form.icon}
                                alt={form.title}
                                width={48}
                                height={48}
                                className="mx-auto mb-3 fill-aus"
                            />
                            <p className="text-sm font-semibold">{form.title}</p>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Page;