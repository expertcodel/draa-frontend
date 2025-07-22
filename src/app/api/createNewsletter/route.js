"use server"
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { newsletterModel } from "../../models/newsletter.model.js";
import { generateEmailHeader } from '../../../utils/emailHeader.js'
import { generateEmailFooter } from '../../../utils/emailFooter.js'
import { emailVerify } from '../../../utils/emailverify.js';
const transport = nodemailer.createTransport({

    service: 'gmail',
    auth: {

        user: "rohitkumarchau656@gmail.com",
        pass: "pihc knoi rbca lrif"

    }
})



const sendMail = async (email) => {

    const config = {

        from: { name: "draa.in", address: "rohitkumarchau656@gmail.com" },
        to: email,
        subject: "Subscription Email from draa.in",
        html: `<!doctype html>
      <html lang="en">
      
      <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <title>Subscription Emailer</title>
      </head>
      
      <body>
          <div style="width:100%;font-family:arial,'helvetica neue',helvetica,sans-serif;padding:0;Margin:0">
              <div style="background-color:#fff">
                  <table cellpadding="0" cellspacing="0"
                      style="border-collapse:collapse;border-spacing:0;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#fff"
                      width="100%">
                      <tbody>
                          <tr>
                              <td style="padding:0;Margin:0" valign="top">
                                  <table cellpadding="0" cellspacing="0"
                                      style="border-collapse:collapse;border-spacing:0;table-layout:fixed!important;width:100%"
                                      align="center">
                                      <tbody>
                                          <tr>
                                              <td style="padding:0;Margin:0;background-color:#f7f7f7" align="center"
                                                  bgcolor="#f7f7f7">
                                                  <table cellpadding="0" cellspacing="0"
                                                      style="border-collapse:collapse;border-spacing:0;background-color:transparent;width:600px"
                                                      align="center">
                                                      <tbody>
                                                          ${generateEmailHeader()}
                                                          ${emailVerify(email)}
                                                      </tbody>
                                                  </table>
                                              </td>
                                          </tr>
                                      </tbody>
                                  </table>
                                  ${generateEmailFooter()}
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
          </div>
      </body>
      
      </html>`
    }

    try {

        await transport.sendMail(config);
        return true;

    } catch (error) {

        console.log(error);
        return false;
    }

}


export async function POST(request) {
    const { email } = await request.json();
    const newslettermodel = await newsletterModel();
    if (!newslettermodel) {
        return NextResponse.json({ status: false, message: "database error occured!" });
    }

    const existedEmail = await newslettermodel.findOne({ where: { email } });
    if (existedEmail) {

        if (existedEmail.status) {

            return NextResponse.json({ status: false, message: "already subscribed!" });
        }


    }

    const response = await sendMail(email);
    if (!response) {
        return NextResponse.json({ status: false, message: "Please send again!" });
    }

    try {


        if (existedEmail) {

            return NextResponse.json({ status: true, message: "You have to verify your email to subscribe us!" });

        }
        else {

            await newslettermodel.create({

                email

            })

            return NextResponse.json({ status: true, message: "successfully sent!" });
        }


    } catch (error) {

        console.log(error);
        return NextResponse.json({ status: false, message: "some error occured!" });
    }


}

export async function GET(request) {
    const input = new URL(request.url).searchParams;
    const email = input.get('email');
    const newslettermodel = await newsletterModel();
    if (newslettermodel) {

        const isExist = await newslettermodel.findOne({ where: { email } });
        if (!isExist) {
            return NextResponse.json({ status: true, message: "Need to subscribe first!" });
        }

        if (isExist.status) {
            return NextResponse.json({ status: true, message: "Already subscribed!" });
        }

        try {


            await newslettermodel.update({
                status: true
            }, { where: { email } })
            return NextResponse.json({ status: true, message: "Successfully subscribed!" });

        } catch (error) {

            console.log(error);
            return NextResponse.json({ status: false, message: "some error occured!" });

        }

    }

    return NextResponse.json({ status: false, message: "database error occured!" });

}

