export const dynamic='force-dynamic'

import AboutSection  from "../../component/AboutSection";
import Breadcrumb from "../../component/Breadcrumb";
import ThumbnailCourseAdvisor from  "../../component/ThumbnailCourseAdvisor";

export default async function AboutUs() {

    let memberlist = [];
    let aboutDetail = {};
    let decodedHtml='';

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/about`, {

            method: 'GET',
            cache: 'no-store',

        })

        const res = await response.json();
        if (res.status) {
            memberlist = res.memberlist;
            aboutDetail = res.aboutdata;
            const mimeType = 'text/html';
            const base64 = aboutDetail.about;
            const src = `data:${mimeType};base64,${base64}`;
            const spiltted = src.split(',')[1];
            decodedHtml = atob(spiltted);


        }

    } catch (error) {
        console.log(error);
    }
    return (
        <>
            {/*Breadcrumb*/}
              <head>
                <meta name="keywords" content={ aboutDetail.meta_keywords} />
                <meta name="description" content={ aboutDetail.meta_description} />
                <title>{ aboutDetail.seo_title}</title>
            </head>
            <Breadcrumb title="About Us" />

            <AboutSection aboutDetail={decodedHtml} />

            {/* <TestimonialOdometer /> */}

            {/* Start Advisor Area */}
            <div className="advisor-area bg-f9f9f9 ptb-100">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Instructor</span>
                        <h2>Course Advisor</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                    </div>
                    <ThumbnailCourseAdvisor memberlist={memberlist} />
                </div>
            </div>
            {/* End Advisor Area */}
        </>
    )
}