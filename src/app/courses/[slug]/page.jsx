import CoursePage from "../../../component/CoursePage";

export default async function Page({ params }) {


    const { slug } = await params;
    let courseDetail = {};
    let faqs = [];
    let reviews = []
    let instructor = []
    let category;
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses`, {

            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({ slug })
        })

        const res = await response.json();
        if (res.status) {
            courseDetail = res.coursedetail.row;
            faqs = res.coursedetail.faqs;
            reviews = res.coursedetail.reviews;
            instructor = res.coursedetail.intstructor;
            category=res.coursedetail.category
        }

    } catch (error) {

        console.log(error);
    }






    return (
        <CoursePage courseDetail={courseDetail} faqs={faqs} reviews={reviews} instructor={instructor} category={category}/>
    );
}
