import { NextResponse } from "next/server";
import { blogModel } from "../../models/blog.model";

export async function GET() {
    const blogmodel = blogModel();
    try {


        const bloglist = await blogmodel.findAll({limit:3,attributes:[`id`, `language_id`, `bcategory_id`, `title`, `slug`, `main_image`,`publish_date`, `author`, `serial_number`, `created_at`, `updated_at`] });
        return NextResponse.json({ status: true, bloglist  });

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}