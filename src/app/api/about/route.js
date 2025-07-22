import { NextResponse } from "next/server";
import { connectTodb } from '../../../utils/database';
export async function GET() {

   
    const connection = connectTodb();

    if (!connection) {
        return NextResponse.json({ status: false, message: "database error occured" });
    }

    try {

       
        const memberlist = await connection.query(`SELECT id,name,\`rank\`,image,linkedin,instagram,twitter,facebook,slug,education FROM members WHERE status=1  ORDER BY id ASC LIMIT 12`)
      
        const aboutdetail = await connection.query(`SELECT id,body,meta_keywords,meta_description,seo_title FROM dynamic_pages WHERE slug='about' AND status=1 LIMIT 1`)
        const aboutdata = aboutdetail[0][0]
        let contentBase64 = null;

        if (aboutdata && aboutdata.body) {
            contentBase64 = aboutdata.body.toString('base64'); // convert blob to base64
        }

         return NextResponse.json({
            status: true, aboutdata: {
                ...aboutdata,
                about: contentBase64 // embed base64 inside blogdetail
            },
            memberlist: memberlist[0]
        });

      
        

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}

