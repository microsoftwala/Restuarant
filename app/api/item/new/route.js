import { connectToDb } from "@utils/database";
import Menu from "@models/menu";


export const POST=async(req,res)=>{
    const {userID,itemname,itemprice,available,category,imageurl}=await req.json();

    
    try{
        await connectToDb();

        const popularity=150
        const newItem=new Menu({
            creator:userID,
            itemname,
            itemprice,
            available,
            category,
            imageurl,
            popularity,
        })

        await newItem.save();

        return new Response(JSON.stringify(newItem),{status:201})
    }catch(error){
        return new Response("Failed to create a new Item",{status:500})
    }
}