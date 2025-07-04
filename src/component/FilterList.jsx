"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from 'react'
export default function FilterList({ filtered }) {


    const path = usePathname();
    const wrapperRef = useRef(null);
    const [courseList, setcourselist] = useState(filtered)
    useEffect(() => {
       
        setcourselist(filtered)
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setcourselist([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, [filtered]);

    return (
        <div className="relative w-72 mx-auto customListShow" ref={wrapperRef}>


            {courseList.length > 0 && (
                <ul className="absolute ">
                    {courseList.map((item, index) => (
                        <li
                            key={index}
                            style={{listStyle:'none'}}
                        >
                            <Link href={`${path === '/' ? 'courses' : path}/${item.slug}`}>{item.title}</Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

