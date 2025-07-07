"use client";

import React, { useEffect, useState } from "react";
import classNames from "classnames";
import navItems from "@/data/navItems.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Image from "next/image";

export default function Header({ courselist, booklist, courses, testseries }) {

    const [isSticky, setIsSticky] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState({});
    const [isMobileView, setIsMobileView] = useState(false);
    const [hideDropdown, setHideDropdown] = useState(false);


    // Handle scroll and resize
    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 120);
        const handleResize = () => {
            const isMobile = window.innerWidth < 1199;
            setIsMobileView(isMobile);

            if (!isMobile) {
                setIsMobileMenuOpen(false);
                setDropdownOpen({});
            }
        };


        // Initial run
        handleResize();

        window.addEventListener("scroll", handleScroll);
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen((prev) => {
            const newState = !prev;
            // Close all dropdowns when closing mobile menu
            if (!newState) {
                setDropdownOpen({});
            }
            return newState;
        });
    };


    const toggleDropdown = (key) => {
        setDropdownOpen((prev) => {
            const isCurrentlyOpen = !!prev[key];

            // Get the parent path (or "" if top-level)
            const parentPath = key.includes("/")
                ? key.substring(0, key.lastIndexOf("/"))
                : "";

            const newState = Object.fromEntries(
                Object.entries(prev).filter(([k]) => {
                    // Keep keys that are not siblings of the current key
                    const kParent = k.includes("/")
                        ? k.substring(0, k.lastIndexOf("/"))
                        : "";
                    return kParent !== parentPath;
                })
            );

            // Toggle current key
            if (!isCurrentlyOpen) {
                newState[key] = true;
            }

            return newState;
        });
    };

    const handleLinkClick = () => {
        if (isMobileView) {
            setDropdownOpen({});
            setIsMobileMenuOpen(false);
        } else {
            setHideDropdown(true); // temporarily hide dropdown
            setTimeout(() => setHideDropdown(false), 500); // reset after 500ms
        }
    };



    const renderNavItem = (item, parentPath = "") => {
        const hasChildren = item.children && item.children.length > 0;
        const isMegaMenu = item.megamenu;

        // Generate unique key for each dropdown path
        const key = `${parentPath}/${item.label.toLowerCase().replace(/\s+/g, "-")}`;
        const isOpen = dropdownOpen[key];

        const handleClick = (e) => {
            if ((hasChildren || isMegaMenu) && isMobileView) {
                e.preventDefault();
                toggleDropdown(key);
            }
        };

        return (
            <li
                key={key}
                className={classNames("nav-item", {
                    megamenu: isMegaMenu,
                })}
            >
                {item.href ? (
                    <Link href={item.href} className="nav-link" onClick={(e) => {
                        handleClick(e);
                        handleLinkClick();
                    }}>
                        {item.label} {(hasChildren || isMegaMenu) && (<FontAwesomeIcon icon={faAngleDown} />)}
                    </Link>
                ) : (
                    <span className="nav-link" role="button" tabIndex={0} onClick={handleClick}>
                        {item.label} {(hasChildren || isMegaMenu) && (<FontAwesomeIcon icon={faAngleDown} />)}
                    </span>
                )}


                {isMegaMenu && (
                    <ul
                        className={classNames("dropdown-menu", {
                            show: isOpen || !isMobileView,
                            "hide-dropdown": hideDropdown && !isMobileView,
                        })}
                    >
                        <li className="nav-item">
                            <div className="container">
                                {/* <div className="row">
                                    {courses?.map((column, colIdx) => (
                                        <div className="col" key={`column-${colIdx}`}>
                                            <ul className="megamenu-submenu">
                                                {JSON.parse(column.courses).map((link, linkIdx) => (
                                                    <li key={`link-${colIdx}-${linkIdx}`}>
                                                        <Link href={`/courses/${link.slug}`} onClick={handleLinkClick}>{link.title}</Link>
                                                    </li>

                                                ))}
                                            </ul>
                                        </div>
                                    ))}
                                </div> */}
                                <div className="row m-0">
                                    {courselist.map((widget, idx) => (
                                        <div
                                            key={`widget-${idx}`}
                                            className="col-12 p-0"
                                        >
                                            <div className="single-category-widget border-0 m-0 p-0">
                                                <div className="icon">
                                                    {/* <i className={`bx ${widget.icon}`} /> */}
                                                </div>
                                                <h3>{widget.name}</h3>
                                                <span className="sub-title">
                                                    {widget.count} Courses
                                                </span>
                                                <Link href={`/courses/?course_name=${widget.slug}`} className="link-btn" onClick={handleLinkClick} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </ul>
                )}

                {hasChildren && !isMegaMenu && (
                    <ul
                        className={classNames("dropdown-menu", {
                            show: isOpen || !isMobileView,
                            "hide-dropdown": hideDropdown && !isMobileView,
                        })}
                    >
                        {item.label === 'About' ? item.children.map((child) => renderNavItem(child, key)) : item.label === 'Books' ? booklist.map((child) =>
                            renderNavItem(
                                { ...child, href: `/books/?book_category=${child.href}` },
                                key
                            )
                        ) : testseries.map((child) =>
                            renderNavItem(
                                { ...child, href: `/test-series/${child.href}` },
                                key
                            )
                        )}
                    </ul>
                )}
            </li>
        );
    };



    return (
        <header className={classNames("navbar-area customHeader", { "is-sticky": isSticky })}>
            <div className="elearniv-nav transition-all duration-300">
                <div className="container">
                    <nav className="navbar navbar-light">
                        <Link className="navbar-brand" href="/">
                            <Image width={90} height={80} src="/images/logo.png" alt="logo" />
                        </Link>
                        <div className={classNames("showMobileSec", { show: isMobileMenuOpen, })}>
                            <Link href="/login" className="default-btn">
                                <FontAwesomeIcon icon={faUser} /> Login
                                <span />
                            </Link>
                            <button className="mobile-toggle" onClick={toggleMobileMenu}>
                                <span className="bar" />
                                <span className="bar" />
                                <span className="bar" />
                            </button>
                        </div>

                        <div className={classNames("collapse navbar-collapse", { show: isMobileMenuOpen, })}>
                            <ul className="navbar-nav">
                                {navItems.map((item) => renderNavItem(item))}
                            </ul>

                            <div className="others-option">
                                {/* <div className="option-item">
                                    <div className="cart-btn">
                                        <a href="cart.html">
                                            <FontAwesomeIcon icon={faShoppingCart} />
                                            <span>3</span>
                                        </a>
                                    </div>
                                </div> */}
                                <div className="option-item">
                                    <Link href="/login" className="default-btn">
                                        <FontAwesomeIcon icon={faUser} /> Login
                                        <span />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    );
}
