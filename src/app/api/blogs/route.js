import { NextResponse } from "next/server";
import { blogModel } from "../../models/blog.model";
import { connectTodb } from "../../../utils/database";


const random=(total)=>{

    return Math.floor((Math.random()*total+1));
}


export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const page = input.get('page');
    const category = input.get('category');
    const blogmodel = blogModel();
    
    try {

        if (category !== 'null') {

            const { rows, count } = await blogmodel.findAndCountAll({ where:{bcategory_id:category},offset: (page - 1) * 9, limit: 9, attributes: [`id`, `language_id`, `bcategory_id`, `title`, `slug`, `main_image`, `publish_date`, `author`, `serial_number`, `created_at`, `updated_at`], order: [['serial_number', 'ASC']] });
            return NextResponse.json({ status: true, bloglist: rows, totalItems: count });

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
    const connection = connectTodb();

    try {


        const blogdetail = await blogmodel.findOne({
            where: { slug },
            attributes: [
                'id', 'language_id', 'bcategory_id', 'title', 'slug', 'main_image',
                'publish_date', 'meta_description', 'meta_keywords',
                'seo_title', 'author', 'content', 'serial_number'
            ]
        });

        const {count}=await blogmodel.findAndCountAll({attributes:['id']});
        
        const bloglist = await blogmodel.findAll({ offset: count > 3 ? random(count - 3) : 0,order: [['created_at', 'DESC']], limit: 3, attributes: ['id', 'main_image', 'publish_date', 'title', 'slug'] });

        const categorylist = await connection.query(`SELECT bcategories.id,bcategories.name,COUNT(*) AS count FROM blogs INNER JOIN bcategories ON blogs.bcategory_id=bcategories.id GROUP BY bcategory_id ORDER BY bcategories.serial_number ASC`)


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
            bloglist,
            categorylist: categorylist[0]
        });


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}