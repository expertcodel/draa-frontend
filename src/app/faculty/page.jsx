import Faculty from "../../component/Faculty";

export default async function Page() {


    let memberlist = [];
    let totalItems;

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/faculty/?page=1`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            memberlist = res.memberlist;
            totalItems = Math.ceil(res.totalItems / 12);
           
           
        }

    } catch (error) {
        console.log(error);
    }

    return (
        < Faculty memberlist={memberlist} totalItems={totalItems} />
    )
}