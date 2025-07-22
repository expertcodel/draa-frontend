// Email Content Component
export function emailVerify(email) {
    return `
        <tr>
            <td style="padding:0;Margin:0;padding-top:15px;padding-left:40px;padding-right:40px;background-color:#fff"
                align="left" bgcolor="#ffffff">
                <table cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;border-spacing:0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style="padding:0;Margin:0;width:520px"
                                align="center" valign="top">
                                <table cellpadding="0" cellspacing="0"
                                    style="border-collapse:collapse;border-spacing:0"
                                    width="100%" role="presentation">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;Margin:0;padding-bottom:10px"
                                                align="left">
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    Dear ${email},
                                                  
                                                 
                                                  
                                                </p>
                                            </td>
                                        </tr>
                                      
                                        <tr>
                                            <td style="padding:0;Margin:0;padding-bottom:10px"
                                                align="left">
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                 Thank you for subscribing to the newsletter at draa.in! To make sure it's really you, please confirm your subscription by clicking the button below:
                                                    <a href="https://draa.in/?email=${email}"
                                                        style="text-decoration:none;color:#1650e2;font-size:14px"
                                                        target="_blank">verify</a>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>

        <tr>
            <td style="padding:0;Margin:0;padding-left:40px;padding-right:40px;background-color:#fff"
                align="left" bgcolor="#ffffff">
                <table cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;border-spacing:0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style="padding:0;Margin:0;width:520px"
                                align="left">
                                <table cellpadding="0" cellspacing="0"
                                    style="border-collapse:collapse;border-spacing:0"
                                    width="100%" role="presentation">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;Margin:0;padding-top:5px;padding-bottom:10px"
                                                align="left">
                                               
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    <b>Stay informed, stay
                                                        empowered.</b>
                                                </p>
                                                <p
                                                    style="Margin:0;font-family:arial,'helvetica neue',helvetica,sans-serif;line-height:21px;color:#333;font-size:14px">
                                                    <b>– Team
                                                        Draa.in</b>
                                                </p>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>
        <tr>
            <td style="padding:0;Margin:0;padding-left:20px;padding-right:20px;background-color:#fff"
                align="left" bgcolor="#ffffff">
                <table cellpadding="0" cellspacing="0"
                    style="border-collapse:collapse;border-spacing:0"
                    width="100%">
                    <tbody>
                        <tr>
                            <td style="padding:0;Margin:0;width:560px"
                                align="left">
                                <table cellpadding="0" cellspacing="0"
                                    style="border-collapse:collapse;border-spacing:0"
                                    width="100%" role="presentation">
                                    <tbody>
                                        <tr>
                                            <td style="padding:0;Margin:0"
                                                align="center" height="15">
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </td>
        </tr>`;
}