import AboutSection from "@/component/AboutSection";
import Breadcrumb from "@/component/Breadcrumb";
import TestimonialOdometer from "@/component/TestimonialOdometer";
import ThumbnailCourseAdvisor from "@/component/ThumbnailCourseAdvisor";

export default async function AboutUs() {
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
                    <ThumbnailCourseAdvisor />
                </div>
            </div>
            {/* End Advisor Area */}
        </>
    )
}