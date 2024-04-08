import { connectToDb } from "@utils/database";
import Order from "@models/order";
const nodemailer = require('nodemailer');

//Pactch(Update)

export const PATCH=async(request,{params})=>{
    const {finish}=await request.json();

    try{
        await connectToDb();

        const existingItem=await Order.findById(params.id);

        if(!existingItem)
        return new Response("Item not found",{status:404})

        existingItem.finish=finish;
        
        //To mail
        console.log(existingItem.customerInfo)
        // Create a transporter object using the default SMTP transport
            const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: 'aniket.gupta20033@gmail.com', // Your Gmail email address
                pass: 'auecfvgfpnaoyshs' // Your Gmail password
            }
            });

            // Define email options
            const mailOptions = {
            from: 'aniket.gupta20033@gmail.com', // Sender address
            to: 'aniket.gupta20033@gmail.com', // List of recipients
            subject: 'Test Email', // Subject line
            text: 'This is a test email.' // Plain text body
            };
            
            // Send email
            transporter.sendMail(mailOptions, function(error, info) {
            if (error) {
                console.error('Error occurred:', error);
            } else {
                console.log('Email sent:', info.response);
            }
            });
        
    
            

        await existingItem.save();
        return new Response(JSON.stringify(existingItem),{status:200});
    }catch(error)
    {
        return new Response("Failed to update the availability item",{status:500})
    }
}




//Delete()
export const DELETE=async(request,{params})=>{

    try{
        await connectToDb();

        await Order.findByIdAndDelete(params.id);

        return new Response("Item Deleted Successfully",{status:200});

    }catch(error)
    {
        return new Response("Failed to delete",{status:500})
    }
}