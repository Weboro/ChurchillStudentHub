"use client";
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
const forms = [
    {
        title: 'Sexual Assault & Harassment Report',
        link: 'https://zfrmz.com.au/Vj5JjMTkc8KLrYOdkEpq',
        icon: 'https://cdn-icons-png.flaticon.com/128/5069/5069091.png', // Replace with your Flaticon path
    },
    {
        title: 'Student Grievance Form',
        link: 'https://zfrmz.com.au/HWanNqH4bYLWRd9ghNW6',
        icon: 'https://cdn-icons-png.flaticon.com/128/5069/5069061.png',
    },
    {
        title: 'Special Consideration Application',
        link: 'https://zfrmz.com.au/6wWbnFsJOkSrWe9rVMbs',
        icon: 'https://cdn-icons-png.flaticon.com/128/3916/3916596.png',
    },
    {
        title: 'Payment Plan Form',
        link: 'https://zfrmz.com.au/CaS3QBzTw3l18bsh3jPG',
        icon: 'https://cdn-icons-png.flaticon.com/128/3916/3916663.png',
    },
    {
        title: 'Change of Course',
        link: 'https://zfrmz.com.au/X9AZvkNqzDFBpBES0ivh',
        icon: 'https://cdn-icons-png.flaticon.com/128/3914/3914251.png',
    },
    {
        title: 'Student Document Request Form',
        link: 'https://zfrmz.com.au/L7XYZzwaAnKGCIt9Qfyb',
        icon: 'https://cdn-icons-png.flaticon.com/128/3914/3914193.png',
    },
];
const page = () => {
    const pathname = usePathname();
    useEffect(() => {
        if (pathname === '/studentkiosk') {
            document.querySelector('.header')?.classList.add('hidden');
            document.querySelector('.footer-top')?.classList.add('hidden');
            document.querySelector('.footer-bottom')?.classList.add('hidden');
        } else {
            document.querySelector('.header')?.classList.remove('hidden');
            document.querySelector('.footer-top')?.classList.remove('hidden');
            document.querySelector('.footer-bottom')?.classList.remove('hidden');
        }
    }, [pathname]);
    return (
        <>
            <div className="container mx-auto py-10">
                <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                    {forms.map((form, idx) => (
                        <a
                            key={idx}
                            href={form.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white shadow-md rounded-xl p-4 text-center hover:shadow-lg transition"
                        >
                            <img
                                src={form.icon}
                                alt={form.title}
                                className="mx-auto h-12 w-12 mb-3 fill-aus"
                            />
                            <p className="text-sm font-semibold">{form.title}</p>
                        </a>
                    ))}
                </div>
            </div>

        </>
    );
};
export default page;