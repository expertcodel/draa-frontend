import BlogDetail from "../../../component/BlogDetail";
export default async function Page({ params }) {

    const { slug } = await params;
    let blogDetail = [];
    let  decodedHtml;
    let blogList;
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/blogs`, {

            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({ slug })
        })

        const res = await response.json();
        if (res.status) {
            blogDetail = res.blogdetail;
            blogList=res.bloglist;
            const mimeType = 'text/html';
            const base64 = blogDetail.content;
            const src = `data:${mimeType};base64,${base64}`;
            const spiltted = src.split(',')[1];        
            decodedHtml = atob(spiltted);

        }

    } catch (error) {

        console.log(error);
    }


    return (

        <BlogDetail blogDetail={blogDetail} contentData={decodedHtml} blogList={blogList}/>
    );
}
