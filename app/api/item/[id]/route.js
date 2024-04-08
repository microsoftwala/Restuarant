import { connectToDb } from "@utils/database";
import Menu from "@models/menu";


//Pactch(Update)

export const PATCH=async(request,{params})=>{
    const {available}=await request.json();

    try{
        await connectToDb();

        const existingItem=await Menu.findById(params.id);

        if(!existingItem)
        return new Response("Item not found",{status:404})

        existingItem.available=available;
       

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

        await Menu.findByIdAndDelete(params.id);

        return new Response("Item Deleted Successfully",{status:200});

    }catch(error)
    {
        return new Response("Failed to delete",{status:500})
    }
}