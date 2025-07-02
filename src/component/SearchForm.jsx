"use client"
import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleUp, faBookBookmark, faClockRotateLeft, faDesktop, faGlobe, faHeart, faNoteSticky, faPeopleGroup, faSearch, faTimes, faTimesCircle, faUser, faUserCheck, faUserFriends } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from 'react'
import FilterList from '../component/FilterList.jsx'
export default function SearchForm() {

    const [courseList, setcourselist] = useState([])
    const [name, setName] = useState("");
    const wrapperRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setcourselist([]);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const searching = async (name) => {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=${1}&name=${name}&course_name=null&sort=${1}`);
        setName(name);
        const res = await response.json();
        if (res.status) {
            setcourselist(res.courselist);

        }

    }




    return (
        <form ref={wrapperRef}>
            <label>
                <FontAwesomeIcon icon={faSearch} />
            </label>
            <input type="text" className="input-search" placeholder="What do you want to learn?" onChange={(e) => searching(e.target.value)} value={name} />
            {name !== "" && <FilterList filtered={courseList} />}
        </form>
    )
}
