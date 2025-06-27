import { NextResponse } from "next/server";
import { bookModel } from "../../models/book.model";
import { blogModel } from "../../models/blog.model";
import { testimonialModel } from "../../models/testimonial.model";
import { course_categoryModel } from '../../models/course_category.model'
import { courseModel } from "../../models/course.model";

export async function GET() {


    const bookmodel = bookModel();
    const blogmodel = blogModel();
    const testimonial = testimonialModel();
    const category = course_categoryModel();
    const course = courseModel();
    try {


        const data = await Promise.all([blogmodel.findAll({ limit: 3, attributes: [`id`, `language_id`, `bcategory_id`, `title`, `slug`, `main_image`, `publish_date`, `author`, `serial_number`, `created_at`, `updated_at`], order: [['created_at', 'DESC']] }), bookmodel.findAll({ limit: 4, attributes: [`id`, `description`, `title`, `image`, `publish_date`, `author`], order: [['created_at', 'DESC']] }), testimonial.findAll({ limit: 5, attributes: ['id', 'image', 'name', 'rank', 'comment'], order: [['serial_number', 'ASC']] }), category.findAll({ where: { status: 1 }, order: [['serial_number', 'ASC']], attributes: ['id', 'name', 'slug'] }), course.findAll({ limit: 15, where: { status: 1 }, order: [['serial_number', 'ASC']], attributes: ['id', 'image', 'slug', 'title', 'sub_title'] })]);

        return NextResponse.json({ status: true, bloglist: data[0], booklist: data[1], testimoniallist: data[2], category: data[3], courselist: data[4] });

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}