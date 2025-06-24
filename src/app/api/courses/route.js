import { NextResponse } from "next/server";
import { courseModel } from "../../models/course.model";
import { Op } from "sequelize";
export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const name = input.get('name');
    const page = input.get('page');
    const coursemodel = courseModel();
    try {


        const { rows, count } = await coursemodel.findAndCountAll({ where: { status:1, [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: name === "" ? (page - 1) * 12 : 0, limit: 12, attributes: ['id', 'image', 'slug', 'title', 'sub_title'], order: [['serial_number', 'ASC']], });
        return NextResponse.json({ status: true, courselist: rows, totalItems: count });




    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}


export async function POST(request) {

    const { slug } = await request.json();
    const coursemodel = courseModel();
    try {


        const coursedetail = await coursemodel.findOne({
            where: { slug },
            attributes: [
                'id', 'language_id', 'bcategory_id', 'title', 'slug', 'main_image',
                'publish_date', 'meta_description', 'meta_keywords',
                'seo_title', 'author', 'content', 'serial_number'
            ]
        });

        const courselist = await coursemodel.findAll({ order: [['created_at', 'DESC']], limit: 3, attributes: ['id', 'main_image', 'publish_date', 'title', 'slug'] });

        let contentBase64 = null;

        if (coursedetail && coursedetail.content) {
            contentBase64 = coursedetail.content.toString('base64'); // convert blob to base64
        }

        return NextResponse.json({
            status: true,
            coursedetail: {
                ...coursedetail.toJSON(),
                content: contentBase64 // embed base64 inside coursedetail
            },
            courselist
        });


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}