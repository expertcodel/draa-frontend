import { NextResponse } from "next/server";
import { connectTodb } from "../../../utils/database";
export async function GET() {

    const connection = connectTodb();
    try {


        const countrylist = await connection.query(`SELECT id,name AS  label,name AS value FROM countries`);
        return NextResponse.json({ status: true, countrylist: countrylist[0] });




    } catch (error) {

        console.log(error, "error");
        return NextResponse.json({ status: false, message: "some error occured" });

    }
}