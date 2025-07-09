import AboutSection from "@/component/AboutSection";
import Breadcrumb from "@/component/Breadcrumb";
import TestimonialOdometer from "@/component/TestimonialOdometer";
import ThumbnailCourseAdvisor from "@/component/ThumbnailCourseAdvisor";

export default async function AboutUs() {

    let memberlist = [];
    
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty/?page=1`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            memberlist = res.memberlist;
          
        }

    } catch (error) {
        console.log(error);
    }
    return (
        <>
            {/*Breadcrumb*/}
            <Breadcrumb title="About Us" />

            <AboutSection />

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
                    <ThumbnailCourseAdvisor memberlist={memberlist}/>
                </div>
            </div>
            {/* End Advisor Area */}
        </>
    )
}