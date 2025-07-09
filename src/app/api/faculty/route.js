import { NextResponse } from "next/server";
import { connectTodb } from '../../../utils/database';
export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const page = parseInt(input.get('page'));
     const connection = connectTodb();
   
    if (!connection) {
        return NextResponse.json({ status: false, message: "database error occured" });
    }

    try {

        const [totalItems]=await connection.query(`SELECT COUNT(*) AS total from members`);
        const memberlist = await connection.query(`SELECT id,name,\`rank\`,image,linkedin,instagram,twitter,facebook,slug,education FROM members WHERE status=1  ORDER BY id ASC LIMIT 12 OFFSET ${(page-1)*12}`)
        return NextResponse.json({ status: true, memberlist: memberlist[0],totalItems:totalItems[0].total});

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}

export async function POST(request) {

    const { slug } = await request.json();
    const connection = connectTodb();
    if (!connection) {
        return NextResponse.json({ status: false, message: "database error occured" });
    }

    try {
        const memberdetail = await connection.query(`SELECT id,name,\`rank\`,image,linkedin,instagram,twitter,facebook,slug,about,email FROM members WHERE slug='${slug}' AND status=1 LIMIT 1`)
        const memberdata=memberdetail[0][0]
   
        let contentBase64 = null;

        if (memberdata && memberdata.about) {
            contentBase64 = memberdata.about.toString('base64'); // convert blob to base64
        }

       

        return NextResponse.json({
            status: true, memberdata: {
                ...memberdata,
                about: contentBase64 // embed base64 inside blogdetail
            }
        });

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}