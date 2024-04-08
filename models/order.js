import { Schema, model, models } from "mongoose";

const Orderschema = {
  customerInfo: {
    type: String,
    required: [true, "Customer information is required"],
  },
  name:{
    type: String,
    required: [true, "Customer name is required"],
  },
  itemDetails: [
    {
      itemName: {
        type: String,
        required: [true, "Item name is required"],
      },
      quantity: {
        type: String,
        required: [true, "Quantity is required"],
      },
      price: {
        type: String,
        required: [true, "Price is required"],
      },
    },
  ],
  comment:{
    type: String,
    required: [true, "Customer feedback"],
  },
  finish:{
    type:Boolean,
  }
};

const Order = models.Order || model("Order", Orderschema);

export default Order;