import nodemailer from "nodemailer";

// Indeholder default msg, men det er muligt at videregive en anden msg.
export async function sendAutoMail(contact={email:"email", name:"Anonymous", subject:"", text:""}){

    const defaultText = "Your mail is notified and we will reply as soon as possible"
    const defaultSubject = "AUTO-Reply - Thanks for your mail"

    try {
        
        // Generate test SMTP service account from ethereal.email
        // Only needed if you don't have a real mail account for testing
        let testAccount = await nodemailer.createTestAccount();
        
        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: testAccount.user, // generated ethereal user          ---- kan ændres til env. variable hvis rigtig account haves
                pass: testAccount.pass, // generated ethereal password      ---- kan ændres til env. variable hvis rigtig account haves
            },
        });
        
        // send mail with defined transport object
        let info = await transporter.sendMail({
            from: 'My first Nodemailer" <First_Mailer@mail.com>', // sender address
            to: contact.email, // list of receivers
            subject: defaultSubject, // Subject line
            text: `Hello ${contact.name}\n \n ${contact.text || defaultText} \n \n have a great day!`, // plain text body
        });
        
        console.log("Message sent: %s", info.messageId);
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        
        // Preview only available when sending through an Ethereal account
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
        return `Email sent`
        
    } catch (error) {
        console.log(error)
        return error;
    }
}