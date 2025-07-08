import Breadcrumb from "@/component/Breadcrumb";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export default async function Faculty() {


    let memberlist = [];
   
   
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            memberlist = res.memberlist;
            console.log(typeof memberlist[0].facebook);
            
        }

    } catch (error) {
       console.log(error);
     }

    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="Meet our Team Members" />

            {/* Start Teachers Area */}
            <div className="advisor-area pt-100 pb-70">
                <div className="container">
                    <div className="row g-3">
                        {memberlist.map((member, i) => (
                            <div className="col-md-6 col-12" key={i}>
                                <div className="single-advisor-box">
                                    <div className="row align-items-center">
                                        <div className="col-lg-4 col-md-4">
                                            <div className="advisor-image">
                                              <img width={390} height={400} src={`/members/${process.env.NEXT_PUBLIC_IMAGE_URL}/${member.image}`} alt="image" />
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
                                                  {  member.twitter && <li>
                                                        <Link href={ member.twitter} className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faTwitter} />
                                                        </Link>
                                                    </li>}
                                                   { member.instagram && <li>
                                                        <Link href={ member.instagram} className="d-block" target="_blank">
                                                            <FontAwesomeIcon icon={faInstagram} />
                                                        </Link>
                                                    </li>}
                                                   { member.linkedin &&<li>
                                                        <Link href={ member.linkedin} className="d-block" target="_blank">
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
                </div>
            </div>
            {/* End Teachers Area */}
        </>
    )
}