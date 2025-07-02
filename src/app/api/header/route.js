import { NextResponse } from "next/server";
import { connectTodb } from "../../../utils/database";
export async function GET() {


    const connection = connectTodb();

    try {

        const data = await Promise.all([connection.query(`SELECT course_categories.slug,course_categories.name , COUNT(*) AS count FROM courses JOIN course_categories on course_categories.id=courses.course_category_id  GROUP BY courses.course_category_id LIMIT 5`), connection.query(`SELECT name AS label , slug AS href , id from book_categories where status=1 order by serial_number limit 6`), connection.query(`SELECT course_categories.name AS category_name, course_categories.id AS id, CONCAT('[', GROUP_CONCAT(
      '{',
     
      '"slug":', JSON_QUOTE(courses.slug),',',
      '"title":', JSON_QUOTE(courses.title),
      
      '}' ORDER BY courses.id ASC LIMIT 2
    
  ), ']' ) AS courses FROM course_categories INNER JOIN courses ON course_categories.id=courses.course_category_id  where courses.status=1 GROUP BY course_categories.id ORDER BY course_categories.id ASC LIMIT 5`
        ),connection.query(`SELECT id,title AS label ,slug AS href from courses where status=1 AND course_category_id=11 order by serial_number ASC LIMIT 6`)])
        return NextResponse.json({ status: true, courselist: data[0][0], booklist: data[1][0], courses: data[2][0] , testseries:data[3][0]});

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}






// SELECT `course_categories`.`name` , COUNT(*) AS count FROM `courses` JOIN `course_categories` on `course_categories`.`id`=`courses`.`course_category_id`  GROUP BY `courses`.`course_category_id`

