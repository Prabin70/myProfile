import { sendEmail } from '../../utils/sendEmail.js';
import { email } from '../../utils/constant.js';
import { Webuser } from '../schema/model.js';



export const webUserController = async (req, res, next) => {

    try {
        let data = await Webuser.create(req.body)

        let allData = req.body

        await sendEmail({
            to: allData.email,
            subject: 'Message Received',
            html: `
            <h3>Hello ${allData.name} Thank you for your message</h3 >
            <p>I appreciate your with your message</p>
            <p>If you have any query you can directly message me on facebook and instagram the link is in my portfolio.</p>
            <p>Best Regrds</p>
            <p>Prabin Shrestha</p>
            <h2 style={{"color:green"}}>Full Stack developer</h2>
            ${email}
            `

        })

        await sendEmail({
            to: 'xthaprabin125@gmail.com',
            html: ` ${allData.message} <br>Name: ${allData.name} <br> Email: ${allData.email}`
        })

        res.status(200).json({
            message: 'Message sent successfully',
            data: data
        })




    } catch (error) {

    }
}

