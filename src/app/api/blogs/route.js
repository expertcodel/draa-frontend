import { NextResponse } from "next/server";
import { blogModel } from "../../models/blog.model";

export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const path = input.get('path');
    const page = input.get('page');
    const blogmodel = blogModel();
    try {

        if (path === '/') {

            const bloglist = await blogmodel.findAll({ limit: 3, attributes: [`id`, `language_id`, `bcategory_id`, `title`, `slug`, `main_image`, `publish_date`, `author`, `serial_number`, `created_at`, `updated_at`], order: [['created_at', 'DESC']] });
            return NextResponse.json({ status: true, bloglist });

        }
        else {

            const { rows, count } = await blogmodel.findAndCountAll({ offset: (page - 1) * 9, limit: 9, attributes: [`id`, `language_id`, `bcategory_id`, `title`, `slug`, `main_image`, `publish_date`, `author`, `serial_number`, `created_at`, `updated_at`], order: [['serial_number', 'ASC']] });
            return NextResponse.json({ status: true, bloglist: rows, totalItems: count });

        }


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}


export async function POST(request) {

    const { slug } = await request.json();
    const blogmodel = blogModel();
    try {

        
        const blogdetail = await blogmodel.findOne({
            where: { slug },
            attributes: [
                'id', 'language_id', 'bcategory_id', 'title', 'slug', 'main_image',
                'publish_date', 'meta_description', 'meta_keywords',
                'seo_title', 'author', 'content', 'serial_number'
            ]
        });

        const bloglist=await blogmodel.findAll({order:[['created_at','DESC']],limit:3,attributes:['id','main_image','publish_date','title','slug']});

        let contentBase64 = null;

        if (blogdetail && blogdetail.content) {
            contentBase64 = blogdetail.content.toString('base64'); // convert blob to base64
        }

        return NextResponse.json({
            status: true,
            blogdetail: {
                ...blogdetail.toJSON(),
                content: contentBase64 // embed base64 inside blogdetail
            },
            bloglist
        });


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}