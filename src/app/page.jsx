import Home from "../component/Home";


export default async function Page() {

    let blogList = [];
    let bookList = [];
    let testimoniallist = [];
    let category = [];
    let courselist = [];
    let testSerieslist = [];
    let sliderlist = [];
    let decodedHtml;
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/home`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            blogList = res.bloglist;
            bookList = res.booklist;
            testimoniallist = res.testimoniallist;
            category = res.category;
            courselist = res.courselist;
            testSerieslist = res.testserieslist
            sliderlist = res.sliderlist
            const mimeType = 'text/html';
            const base64 = res.about;
            const src = `data:${mimeType};base64,${base64}`;
            const spiltted = src.split(',')[1];
            decodedHtml = atob(spiltted);

        }

    } catch (error) {

        console.log(error);


    }



    return (
        <Home blogList={blogList} bookList={bookList} testimoniallist={testimoniallist} category={category} courselist={courselist} testSerieslist={testSerieslist} sliderlist={sliderlist} aboutDetail={decodedHtml}/>
    );
}
