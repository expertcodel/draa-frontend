import { NextResponse } from "next/server";
import { bookModel } from "../../models/book.model";

export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const path = input.get('path');
    const page = input.get('page');
    const bookmodel = bookModel();
    try {

        if (path === '/') {

            const booklist = await bookmodel.findAll({ limit: 4, attributes: [`id`, `description`, `title`, `image`, `publish_date`, `author`], order: [['created_at', 'DESC']] });
            return NextResponse.json({ status: true, booklist });

        }
        else {

            const { rows, count } = await bookmodel.findAndCountAll({ offset: (page - 1) * 9, limit: 9, attributes: [`id`, `description`, `title`, `image`, `publish_date`, `author`, `slug`], order: [['serial_number', 'ASC']] });
            return NextResponse.json({ status: true, booklist: rows, totalItems: count });

        }


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}


export async function POST(request) {

    const { slug } = await request.json();
    const bookmodel = bookModel();
    try {


        const bookdetail = await bookmodel.findOne({
            where: { slug },
            attributes: [
                `id`, `description`, `title`, `home_image`, `publish_date`, `author`, 'slug', 'meta_description', 'meta_keywords',
                'seo_title'
            ]
        });

        const booklist = await bookmodel.findAll({ order: [['created_at', 'DESC']], limit: 3, attributes: ['id', 'image', 'publish_date', 'title', 'slug'] });

        // let contentBase64 = null;

        // if (bookdetail && bookdetail.content) {
        //     contentBase64 = bookdetail.content.toString('base64'); // convert blob to base64
        // }

        return NextResponse.json({
            status: true,
            bookdetail,
            booklist
        });


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}