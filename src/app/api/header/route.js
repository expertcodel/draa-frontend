import { NextResponse } from "next/server";
import { connectTodb } from "../../../utils/database";
export async function GET() {


    const connection = connectTodb();
  
    try {

        const data=await Promise.all([connection.query(`SELECT course_categories.slug,course_categories.name , COUNT(*) AS count FROM courses JOIN course_categories on course_categories.id=courses.course_category_id  GROUP BY courses.course_category_id`),connection.query(`SELECT name AS label , slug AS href , id from book_categories where status=1 order by serial_number limit 6`),connection.query(`SELECT title , slug  , id from courses where status=1 order by serial_number limit 6`)])
        return NextResponse.json({ status: true, courselist: data[0][0],booklist:data[1][0] });

    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}






// SELECT `course_categories`.`name` , COUNT(*) AS count FROM `courses` JOIN `course_categories` on `course_categories`.`id`=`courses`.`course_category_id`  GROUP BY `courses`.`course_category_id`