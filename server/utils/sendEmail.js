import nodemailer from 'nodemailer'

let transportInfo = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
        user: 'xthaprabin125@gmail.com',
        pass: 'blya ocrk jkod ttin'
    }
}

export let sendEmail = async (mailInfo) => {
    try {
        let transporter = nodemailer.createTransport(transportInfo);
        let info = await transporter.sendMail(mailInfo)
    } catch (error) {
        console.log("Error occured ", error);

    }
}

