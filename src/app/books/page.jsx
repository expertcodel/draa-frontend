import Books from '../../component/Books'
import { headers } from 'next/headers'
export default async function Page() {

    let booklist = [];
    let totalItems;
    let total;

    const headersList = await headers();
    const path = headersList.get('x-pathname');


    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/books/?page=1&name=&book_category=${path}&sort=${-1}`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            booklist = res.booklist;
            total = res.totalItems;
            totalItems = Math.ceil(res.totalItems / 12);
        }

    } catch (error) {

        console.log(error);


    }

    return (
        <Books booklist={booklist} totalItems={totalItems} total={total} book_category={path} />
    )
}