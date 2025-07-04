"use server"
import nodemailer from 'nodemailer'
import { NextResponse } from 'next/server'
import { contact_queryModel } from '../../models/contact_query.model'
import { generateEmailHeader } from '../../../utils/emailHeader.js'
import { generateEmailFooter } from '../../../utils/emailFooter.js'
import { generateWelcomeContent } from '../../../utils/emailContent.js'

const transport = nodemailer.createTransport({

  service: 'gmail',
  auth: {

    user: "rohitkumarchau656@gmail.com",
    pass: "pihc knoi rbca lrif"

  }
})



const sendMail = async (name, email, number, inquiries) => {

  const config = {

    from: { name: "draa.in", address: 'rohitkumarchau656@gmail.com' },
    to: email,
    subject: "Thankyou for contacting draa.in",
    html: `<!doctype html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Welcome Emailer</title>
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
                                                    ${generateWelcomeContent(name)}
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



const sendMailtoReciever = async (name, email, number, country, inquiries) => {

  const config = {

    from: email,
    to: 'rohitkumarchau656@gmail.com',
    subject: `inquiry from ${name}`,
    html: `<div style="/* justify-content: center; */font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;max-width:600px;display:block;margin:0 auto;padding:20px;/* display: flex; *//* align-items: center; */"><div class="adM">
                                            </div><table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;border-radius:3px;margin:0;border:none">
                                                <tbody><tr style="font-family:'Roboto',sans-serif;font-size:14px;margin:0">
                                                    <td style="font-family:'Roboto',sans-serif;box-sizing:border-box;color:#495057;font-size:14px;vertical-align:top;margin:0;padding:30px;border-radius:7px;background-color:#fff" valign="top">
                                                        
                                                      <table width="100%" cellpadding="0" cellspacing="0"   style="font-family:'Roboto',sans-serif;box-sizing:border-box; font-size:14px;margin:0">
                                                            <tbody>
                                                             ${generateEmailHeader()}
                                                            <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                                <td style="font-family:'Roboto',sans-serif;box-sizing:border-box;line-height:1.5;font-size:24px;vertical-align:top;margin:0;padding:0 0 10px;text-align:center;font-weight:500" valign="top">
                                                                   Inquiry From ${name.charAt(0).toUpperCase() + name.slice(1, name.length)}
                                                                </td>
                                                            </tr>
                                                            <tr style="align-items: center;font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0;display: flex;/* align-content: center; */">
                                                                <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left" valign="top">
                                                                  
                                                                  <table width="100%" cellpadding="0" cellspacing="0" style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left; white-space: nowrap;" valign="top">Name :</td>  
                                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left" valign="top">
                                                                        ${name}
                                                                      </td>
                                                                    </tr>
                                                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                                     <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left; white-space: nowrap;" valign="top">Phone Number :</td>  
                                                                      <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left" valign="top">
                                                                      ${number}
                                                                      </td>
                                                                    </tr>
                                                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left; white-space: nowrap;" valign="top">Email :</td>  
                                                                      <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left" valign="top">
                                                                      ${email}
                                                                      </td>
                                                                    </tr>
                                                                    <tr style="font-family:'Roboto',sans-serif;box-sizing:border-box;font-size:14px;margin:0">
                                                                    <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left; white-space: nowrap;" valign="top">Message :</td>  
                                                                      <td style="font-family:'Roboto',sans-serif;color:#878a99;line-height:1.5;box-sizing:border-box;font-size:15px;vertical-align:top;margin:0;padding:0 0 24px;text-align:left" valign="top">
                                                                      ${inquiries}
                                                                      </td>
                                                                    </tr>
                                                                  </table>

                                                                </td>
                                                            </tr>
                                                           

                                                             ${generateEmailFooter()}
                                                        </tbody></table>
                                                    </td>
                                                </tr>
                                            </tbody></table><div class="yj6qo"></div><div class="adL">
                                           
                                        </div></div>`
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
  const { name, email, contact_number, details, address } = await request.json();
  const response = await sendMail(name, email, contact_number, details);
  const response1 = await sendMailtoReciever(name, email, contact_number, address, details);
  const inquirymodel = contact_queryModel();


  if (!response) {
    return NextResponse.json({ status: false, message: "Please send again!" });
  }

  if (!response1) {
    return NextResponse.json({ status: false, message: "Please send again!" });
  }


  if (!inquirymodel) {
    return NextResponse.json({ status: false, message: "database error occured!" });
  }

  try {

    await inquirymodel.create({
      name, email, contact_number, details, address, created_at: new Date()
    })
    return NextResponse.json({ status: true, message: "successfully sent!" });

  } catch (error) {

    console.log(error);
    return NextResponse.json({ status: false, message: "some error occured!" });

  }

}