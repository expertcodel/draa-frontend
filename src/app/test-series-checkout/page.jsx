import RegisterTestSeries from "../../component/RegisterTestSeries";
export default async function Page() {

    let countrylist = [];

    try {

        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/country`, {

            method: 'GET',
            cache: 'no-store'
        })

        const res = await response.json();
        if (res.status) {
            countrylist = res.countrylist;
           
        }

    } catch (error) {

        console.log(error);


    }


    return (
       <RegisterTestSeries countrylist={countrylist}/>
    );
}