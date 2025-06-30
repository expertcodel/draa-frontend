import BookPage from "../../../component/BookPage";

export default async function Page({ params }) {


    const { slug } = await params;
    let bookDetail = {};
    let booklist = [];

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books`, {

            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({ slug })
        })

        const res = await response.json();
        if (res.status) {
            bookDetail = res.bookdetail;
            booklist = res.booklist;
        }

    } catch (error) {

        console.log(error);
    }


    return (
        < BookPage  bookDetail={bookDetail} bookList={booklist}/>
    );
}
