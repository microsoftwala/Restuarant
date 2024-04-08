import { connectToDb } from "@utils/database";
import Order from "@models/order";
export const dynamic = "force-dynamic";
export const GET=async(request)=>{

    try{
        await connectToDb();
        const items=await Order.find({})
      
        return new Response(JSON.stringify(items),{
            status:200
        })
    }catch(error)
    {
        return new Response("Failed to fetch Menu Items",{status:500})
    }
}