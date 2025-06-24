"use client"; 
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; 

const NavigationMenu = ({ toggleMenu }) => {
  const menuRef = useRef(null);
  const pathname = usePathname(); 
  const [activePath, setActivePath] = useState("");
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const [menuItems] = useState([
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "#", dropdown: true, submenu: [
      { name: "Enterprise Architecture", href: "/services/enterprise-architecture" },
      { name: "Datawarehouse Modernization", href: "/services/datawarehouse-modernization" },
      { name: "Data Engineering", href: "/services/data-engineering" },
      { name: "AI/ML", href: "/services/ai-ml" },
      { name: "Cybersecurity", href: "/services/cybersecurity" },
      { name: "Cloud Transformation", href: "/services/cloud-transformation" },
      { name: "DevOps", href: "/services/devops" },
      { name: "CRM", href: "/services/crm" },
      { name: "Adoption Management", href: "/services/adoption-management" },
      { name: "IoT", href: "/services/iot" },
      { name: "API Management", href: "/services/api-management" },
      { name: "Testing", href: "/services/testing" },
    ]},
    { name: "Industries", href: "#", dropdown: true, submenu: [
        { name: "Financial Services", href: "/industries/financial-services" },
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Pharma", href: "/industries/pharma" },
        { name: "Telecom", href: "/industries/telecom" },
        { name: "Retail", href: "/industries/retail" },
        { name: "Industrial", href: "/industries/industrial" },
        { name: "Travel and Hospitality", href: "/industries/travel-hospitality" },
    ]},
    { name: "Products", href: "#", dropdown: true, submenu: [
        { name: "xForm Insights", href: "/products/x-form-insights" },
        { name: "xForm Accelerate", href: "/products/x-form-accelerate" },
    ]},
    { name: "Career", href: "/career" },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" }
  ]);

  // Function to check if the item is active
  const isActive = (href) => {
    return activePath.replace(/\/$/, "") === href.replace(/\/$/, "") ? "current" : "";
  };

  // Dropdown toggle only for mobile
  useEffect(() => {
    if (typeof window === "undefined" || window.innerWidth > 768) return;

    const menuContainer = menuRef.current;
    if (!menuContainer) return;

    const handleClick = (event) => {
      const clickedElement = event.target;
      const dropdownLi = clickedElement.closest(".dropdown");

      if (dropdownLi) {
        const submenu = dropdownLi.querySelector(".submenu");
        if (submenu) {
          submenu.classList.toggle("active");
        }
      }
    };

    menuContainer.addEventListener("click", handleClick);

    return () => {
      menuContainer.removeEventListener("click", handleClick);
    };
  }, []);

  // Toggle dropdown (close others when one opens)
  const toggleDropdown = (index) => {
    setOpenDropdown((prev) => (prev === index ? null : index)); // Close if same, otherwise open new
  };

  const handleLinkClick = (href) => {
    setOpenDropdown(null);
    if (typeof window !== "undefined" && window.innerWidth < 768) {
      toggleMenu();
    }
    router.push(href);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };
  
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  

  return (
    <ul className="navigation clearfix" ref={menuRef}>
      {menuItems.map((item, index) => (
        <li key={index} className={`${item.dropdown ? "dropdown" : ""} ${isActive(item.href)} ${openDropdown === index ? "open" : ""}`}>
          {item.href === "#" ? (
            <span onClick={() => toggleDropdown(index)}>{item.name}</span> // Prevents Link for non-navigational items
          ) : (
            <span role="link" className="cursorPointer" tabIndex={0} onClick={() => handleLinkClick(item.href)}>{item.name}</span>
          )}
          {item.submenu && (
            <ul className={`submenu ${openDropdown === index ? "active" : ""}`}>
              {item.submenu.map((subItem, subIndex) => (
                <li key={subIndex} className={isActive(subItem.href)} onClick={() => toggleDropdown(index)}>
                  <Link href={subItem.href} 
                    onClick={() => {
                      if (typeof window !== "undefined" && window.innerWidth < 992) {
                        toggleMenu();
                      }
                    }}
                  >{subItem.name}</Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default NavigationMenu;
