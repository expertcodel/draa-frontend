import Blog from '../../component/Blog.jsx'
import { headers } from 'next/headers';
export default async function BlogPage() {

    let bloglist = [];
    let totalItems;

    const headerlist=new headers();
    const category=await headerlist.get('x-pathname');

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/?category=${category}&page=1`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            bloglist = res.bloglist;
            totalItems=Math.ceil(res.totalItems/9);
        }

    } catch (error) {

        console.log(error);


    }




    return (

        <Blog bloglist={bloglist} totalItems={totalItems} category={category}/>
    );
}
