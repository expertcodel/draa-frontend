import Courses from '../../component/Courses'
import { headers } from 'next/headers'
export default async function Page() {

    let courselist = [];
    let totalItems;
    let total;
  
    const headersList = await headers();
    const path = headersList.get('x-pathname');
  
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/courses/?page=1&name=&course_name=${path}`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            courselist = res.courselist;
            total = res.totalItems;
            totalItems = Math.ceil(res.totalItems / 12);
        }

    } catch (error) {

        console.log(error);


    }

    return (
        <Courses courselist={courselist} totalItems={totalItems} total={total} course_name={path} />
    )
}