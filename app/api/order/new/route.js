import { connectToDb } from "@utils/database";
import Order from "@models/order";
import Menu from "@models/menu";

export const POST = async (req, res) => {
  const { customerId, name, itemDetails, comment, finish } = await req.json();

  try {
    await connectToDb();

    const orderItems = itemDetails.map((item) => ({
      itemName: item.itemName,
      quantity: item.quantity,
      price: item.price,
    }));

    const newOrder = new Order({
      customerInfo: customerId,
      name: name,
      itemDetails: orderItems,
      comment: comment,
      finish: finish,
    });

    // Save the new order
    await newOrder.save();

    
    for (const item of orderItems) {
      
      
      const menuItem = await Menu.findOne({ itemname: item.itemName });
     
      if (menuItem) {
       
        menuItem.popularity = (menuItem.popularity || 0) +item.quantity;
        console.log(menuItem.popularity)
        await menuItem.save();
      }
    }

    return new Response(JSON.stringify(newOrder), { status: 201 });
  } catch (error) {
    return new Response("Failed to take a new Order", { status: 500 });
  }
};
