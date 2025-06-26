import { NextResponse } from "next/server";
import { courseModel } from "../../models/course.model";


export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const course_category_id = input.get('course_category_id');
    const coursemodel = courseModel();
    try {


        const courselist = await coursemodel.findAll({where:{course_category_id},attributes:['id', 'image', 'slug', 'title', 'sub_title'], order: [['serial_number', 'ASC']],limit:15});
        return NextResponse.json({ status: true, courselist});




    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}