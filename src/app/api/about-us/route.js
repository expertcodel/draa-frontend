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

       
        const memberlist = await connection.query(`SELECT id,name,\`rank\`,image,linkedin,instagram,twitter,facebook,slug,education FROM members WHERE status=1  ORDER BY id ASC LIMIT 12`)
      
        const aboutdetail = await connection.query(`SELECT id,body FROM dynamic_pages WHERE slug='about' AND status=1 LIMIT 1`)
        const aboutdata = aboutdetail[0][0]
        let contentBase64 = null;

        if (aboutdata && aboutdata.body) {
            contentBase64 = aboutdata.body.toString('base64'); // convert blob to base64
        }

         return NextResponse.json({
            status: true, aboutdata: {
             
                about: contentBase64 // embed base64 inside blogdetail
            },
            memberlist: memberlist[0]
        });

      
        

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
        const memberdata = memberdetail[0][0]

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