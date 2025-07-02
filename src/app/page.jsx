import Home from "../component/Home";


export default async function Page() {

    let blogList = [];
    let bookList = [];
    let testimoniallist = [];
    let category = [];
    let courselist = [];
    let testSerieslist = [];
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
            testSerieslist=res.testserieslist
        }

    } catch (error) {

        console.log(error);


    }



    return (
      <Home blogList={blogList} bookList={bookList} testimoniallist={testimoniallist} category={category} courselist={courselist} testSerieslist={testSerieslist}/>
    );
}
