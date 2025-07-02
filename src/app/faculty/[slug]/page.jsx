import FacultyPage from "../../../component/FacultyPage";

export default async function Page({ params }) {


    const { slug } = await params;
    let memberdetail = {};
    let decodedHtml;
    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty`, {

            method: 'POST',
            cache: 'no-store',
            body: JSON.stringify({ slug })
        })

        const res = await response.json();
        if (res.status) {
            memberdetail = res.memberdata;
            const mimeType = 'text/html';
            const base64 = memberdetail.about;
            const src = `data:${mimeType};base64,${base64}`;
            const spiltted = src.split(',')[1];
            decodedHtml = atob(spiltted);

        }

    } catch (error) {

        console.log(error);
    }


    return (
        < FacultyPage memberdetail={memberdetail} about={decodedHtml} />
    );
}
