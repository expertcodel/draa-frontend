
import crypto from "crypto";
import { NextResponse } from "next/server";
import { course_registrationModel } from "../../../models/course_registration.model";
import { book_registrationModel } from "../../../models/book_registration.model";
export async function POST(req) {

    const body = await req.json();
    const course_registrationmodel = course_registrationModel();
    const book_registrationmodel = book_registrationModel();

    const {
        razorpay_order_id,
        razorpay_payment_id,
        razorpay_signature,
        id, path
    } = body;




    const generatedSignature = crypto
        .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

    if (generatedSignature !== razorpay_signature) {
        return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }


    try {
        if (path === '/register-course') {
            await course_registrationmodel.update({ is_paid: 1, updated_at: new Date() }, { where: { id } });
            return NextResponse.json({ status: true });
        }
        else if (path === '/book-checkout') {
            await book_registrationmodel.update({ is_paid: 1, updated_at: new Date() }, { where: { id } });
            return NextResponse.json({ status: true });
        }
    } catch (err) {
        console.log(err, "error");

        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
