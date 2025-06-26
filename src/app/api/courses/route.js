import { NextResponse } from "next/server";
import { courseModel } from "../../models/course.model";
import { connectTodb } from '../../../utils/database';
import { Op } from "sequelize";
export async function GET(request) {

    const input = new URL(request.url).searchParams;
    const name = input.get('name');
    const page = input.get('page');
    const coursemodel = courseModel();
    try {


        const { rows, count } = await coursemodel.findAndCountAll({ where: { status: 1, [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: name === "" ? (page - 1) * 12 : 0, limit: 12, attributes: ['id', 'image', 'slug', 'title', 'sub_title'], order: [['serial_number', 'ASC']], });
        return NextResponse.json({ status: true, courselist: rows, totalItems: count });




    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}


export async function POST(request) {

    const { slug } = await request.json();
    const coursemodel = courseModel();
    const connection = connectTodb();
    try {


        const { id } = await coursemodel.findOne({
            where: { slug },
            attributes: [
                'id'
            ]
        });

        // const coursedetail=await connection.query(`SELECT courses.title,courses.sub_title,courses.video_id,courses.image,courses.price_level_1,courses.price_level_2,courses.price_level_3,courses.course_outline,courses.case_studies,courses.seo_title,courses.meta_keywords,courses.meta_description, course_prospectuses.level_one,course_prospectuses.level_two,course_prospectuses.level_three,course_prospectuses.body_one,course_prospectuses.body_two,course_prospectuses.body_three,course_prospectuses.prospectus_image,JSON_ARRAYAGG(JSON_OBJECT('question',course_faqs.question,'answer',course_faqs.answer)) AS faqs FROM courses JOIN course_prospectuses ON courses.id=course_prospectuses.course_id JOIN course_faqs ON courses.id=course_faqs.course_id where courses.id=${id}  GROUP BY courses.id`)
        const [rows] = await connection.query(`
 SELECT 
  courses.id,
  courses.title,
  courses.sub_title,
  courses.video_id,
  courses.image,
  courses.price_level_1,
  courses.price_level_2,
  courses.price_level_3,
  courses.course_outline,
  courses.case_studies,
  courses.mode_of_study,
  courses.seo_title,
  courses.meta_keywords,
  courses.meta_description,
  course_prospectuses.prospectus_image,
  course_prospectuses.level_one,
  course_prospectuses.level_two,
  course_prospectuses.level_three,
  course_prospectuses.body_one,
  course_prospectuses.body_two,
  course_prospectuses.body_three,
  course_prospectuses.prospectus_image,

  CONCAT('[', GROUP_CONCAT(DISTINCT
    CONCAT(
      '{',
      '"question":', JSON_QUOTE(course_faqs.question), ',',
      '"answer":', JSON_QUOTE(course_faqs.answer),
      '}'
    )
  ), ']') AS faqs,

  CONCAT('[', GROUP_CONCAT(DISTINCT
    CONCAT(
      '{',
      '"name":', JSON_QUOTE(course_reviews.student_name), ',',
      '"rating":', course_reviews.star, ',',
      '"comment":', JSON_QUOTE(course_reviews.review),
      '}'
    )
  ), ']') AS reviews,

  CONCAT('[', GROUP_CONCAT(DISTINCT
    CONCAT(
      '{',
      '"member_id":', JSON_QUOTE(course_instructors.member_id),
      '}'
    )
  ), ']') AS instructors

FROM courses
JOIN course_prospectuses ON courses.id = course_prospectuses.course_id
LEFT JOIN course_faqs ON courses.id = course_faqs.course_id
LEFT JOIN course_reviews ON courses.id = course_reviews.course_id
LEFT JOIN course_instructors ON courses.id = course_instructors.course_id

WHERE courses.id = ${id}
GROUP BY courses.id;

`, [id]);

        const row = { ...rows[0] };
        const member_id=JSON.parse(rows[0].instructors).map((id)=>parseInt(id.member_id))
        const ids=JSON.stringify(member_id).substr(1,JSON.stringify(member_id).length-2);
        const intstructors=await connection.query(`SELECT id,name,rank,image,facebook,twitter,linkedin,instagram FROM members where id in(${ids})`)
        return NextResponse.json({ status: true, coursedetail: { row, faqs: JSON.parse(rows[0].faqs),reviews: JSON.parse(rows[0].reviews),intstructor:intstructors[0]}});


    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}