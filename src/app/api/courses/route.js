import { NextResponse } from "next/server";
import { courseModel } from "../../models/course.model";
import { course_categoryModel } from "../../../app/models/course_category.model";
import { connectTodb } from '../../../utils/database';
import { Op } from "sequelize";
export async function GET(request) {

  const input = new URL(request.url).searchParams;
  const name = input.get('name');
  const page = input.get('page');
  const course_name = input.get('course_name');
  const sort = input.get('sort');
  const coursemodel = courseModel();
  const categorymodel = course_categoryModel();



  try {

    if (course_name === 'null') {
      const { rows, count } = await coursemodel.findAndCountAll({ where: { status: 1, [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: (page - 1) * 12, limit: 12, attributes: ['id', 'image', 'slug', 'title', 'sub_title'], order: sort === "1" ? [['created_at', 'DESC']] : sort === "0" ? [['created_at', 'ASC']] : [['serial_number', 'ASC']], });
      return NextResponse.json({ status: true, courselist: rows, totalItems: count });
    }
    else {

      const { id } = await categorymodel.findOne({ where: { slug: course_name }, attributes: ['id'] })
      const { rows, count } = await coursemodel.findAndCountAll({ where: { course_category_id: id, status: 1, [Op.or]: { title: { [Op.like]: `%${name}%` } } }, offset: (page - 1) * 12, limit: 12, attributes: ['id', 'image', 'slug', 'title', 'sub_title'], order: sort === "1" ? [['created_at', 'DESC']] : sort === "0" ? [['created_at', 'ASC']] : [['serial_number', 'ASC']], });
      return NextResponse.json({ status: true, courselist: rows, totalItems: count });

    }



  } catch (error) {

    console.log(error, "error");
    return NextResponse.json({ status: false, message: "some error occured" });

  }
}


export async function POST(request) {

  const { slug } = await request.json();
  const coursemodel = courseModel();
  const connection = connectTodb();
  const categorymodel = course_categoryModel();
  try {


    const { id, course_category_id } = await coursemodel.findOne({
      where: { slug },
      attributes: [
        'id', 'course_category_id'
      ]
    });

    const { name } = await categorymodel.findOne({ where: { id: course_category_id }, attributes: ['name'] })
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
LEFT JOIN course_prospectuses ON courses.id = course_prospectuses.course_id
LEFT JOIN course_faqs ON courses.id = course_faqs.course_id
LEFT JOIN course_reviews ON courses.id = course_reviews.course_id
LEFT JOIN course_instructors ON courses.id = course_instructors.course_id

WHERE courses.id = ${id}
GROUP BY courses.id,
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
  course_prospectuses.body_three

`, [id]);

    const row = { ...rows[0] };
    let intstructors = [];
    if (rows[0].instructors && rows[0].instructors.length > 0) {

      const member_id = JSON.parse(rows[0].instructors).map((id) => parseInt(id.member_id))
      const ids = JSON.stringify(member_id).substr(1, JSON.stringify(member_id).length - 2);
      intstructors = await connection.query(`SELECT id,name,rank,image,facebook,twitter,linkedin,instagram FROM members where id in(${ids})`)

    }

    return NextResponse.json({ status: true, coursedetail: { row, faqs: JSON.parse(rows[0].faqs), reviews: JSON.parse(rows[0].reviews), intstructor: intstructors.length > 0 ? intstructors[0] : intstructors, category: name } });


  } catch (error) {

    console.log(error, "error");
    return NextResponse.json({ status: false, message: "some error occured" });

  }
}