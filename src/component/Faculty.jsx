"use client"
import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { faAngleDoubleLeft, faAngleDoubleRight, faAngleRight, faBarsStaggered, faBookBookmark, faCartShopping, faHeart, faPeopleGroup, faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Faculty({ memberlist, totalItems }) {


    const [memberList, setMemberlist] = useState(memberlist);
    const [button, setButton] = useState(totalItems);
    const [idx, setIdx] = useState(1);
    const pagination = async (idx) => {

        if (idx > 0 && idx <= button) {
            const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty/?page=${idx}`);
            setIdx(idx);
            const res = await response.json();
            if (res.status) {
                setMemberlist(res.memberlist);
            }
        }
    }


    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Meet our Team Members" />

            {/* Start Teachers Area */}
            <div className="advisor-area pt-100 pb-70">
                <div className="container">
                    <div className="row g-3">
                        {memberList.map((member, i) => (
                            <div className="col-md-6 col-12" key={i}>
                                <div className="single-advisor-box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="advisor-image">
                                                <img width={390} height={400} src={`${process.env.NEXT_PUBLIC_IMAGE_URL}/members/${member.image}`} alt="image" />
                                                {/* <Image width={230} height={340} src="/images/advisor/img1.jpg" alt="image" /> */}
                                            </div>
                                        </div>
                                        <div className="col-lg-8 col-md-8">
                                            <div className="advisor-content">
                                                <h3>
                                                    <Link href={`/faculty/${member.slug}`}>{member.name}</Link>
                                                </h3>
                                                <span className="sub-title">{member.rank}</span>
                                                <p>
                                                    {member.education}
                                                </p>
                                                <ul className="social-link">
                                                    {member.facebook && <li>
                                                        <Link href={member.facebook} className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faFacebook} />
                                                        </Link>
                                                    </li>}
                                                    {member.twitter && <li>
                                                        <Link href={member.twitter} className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faTwitter} />
                                                        </Link>
                                                    </li>}
                                                    {member.instagram && <li>
                                                        <Link href={member.instagram} className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faInstagram} />
                                                        </Link>
                                                    </li>}
                                                    {member.linkedin && <li>
                                                        <Link href={member.linkedin} className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faLinkedin} />
                                                        </Link>
                                                    </li>}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    {button > 1 && <div className="col-lg-12 col-md-12">
                        <div className="pagination-area text-center">
                            <button className="prev page-numbers" onClick={() => pagination(idx - 1)} style={{ border: 'none' }}>
                                <FontAwesomeIcon icon={faAngleDoubleLeft} />
                            </button>
                            {Array.from({ length: button }, (_, i) => <span className={idx === i + 1 ? "page-numbers current" : "page-numbers"} aria-current="page" key={i} onClick={() => pagination(i + 1)} style={{ cursor: 'pointer' }}>
                                {i + 1}
                            </span>)}


                            <button className="next page-numbers" onClick={() => pagination(idx + 1)} style={{ border: 'none' }}>
                                <FontAwesomeIcon icon={faAngleDoubleRight} />
                            </button>
                        </div>
                    </div>}
                </div>
            </div>
            {/* End Teachers Area */}
        </>
    )
}