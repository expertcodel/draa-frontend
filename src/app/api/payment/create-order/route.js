
import Razorpay from "razorpay";
import { course_registrationModel } from "../../../models/course_registration.model";

function generate13DigitNumber() {
  const min = 1e12; // 1000000000000
  const max = 9.999999999999e12; // Just under 10 trillion
  return String(Math.floor(Math.random() * (max - min + 1)) + min);
}
export async function POST(req) {
  const { name, phone_number, email, dob, address, city, post_code, country, designation, college_name, gender, amount, level, course_id, mode_of_study } = await req.json();

  const course_registrationmodel = course_registrationModel();

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET,
  });

  const options = {
    amount: amount * 100, // in paise
    currency: "INR",
    receipt: `receipt_${Date.now()}`,
  };

  try {

    const order = await razorpay.orders.create(options);
    const registration = await course_registrationmodel.create({
      name, phone_number, email, dob, address, city, post_code, country, designation, college_name, gender, amount, level, course_id, mode_of_study, currency_code: 'INR', registration_number: generate13DigitNumber(), learning_type: 'course', created_at: new Date()

    })

    console.log(registration, "data");


    return Response.json({ order, id: registration.id });

  } catch (err) {

    console.log(err);

    return new Response(
      JSON.stringify({ error: "Order creation failed", details: err.message }),
      { status: 500 }
    );
  }
}
