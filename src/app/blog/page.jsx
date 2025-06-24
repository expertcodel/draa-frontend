import Blog from '../../component/Blog.jsx'
export default async function BlogPage() {

    let bloglist = [];
    let totalItems;
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs/?path=/blog&page=1`, {

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

        <Blog bloglist={bloglist} totalItems={totalItems}/>
    );
}
