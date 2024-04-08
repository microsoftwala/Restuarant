import mongoose, {Schema,model,models} from "mongoose";


const MenuSchema=new Schema({

    creator:{
        type:Schema.Types.ObjectId,
        ref:'User',
    },
    itemname:{
        type:String,
        required:[true,'Item Name is required']
    },
    itemprice:{
        type:String,
        required:[true,'Price is required']
    },
    available:{
        type:Boolean
    },
    category:{
        type:String,
        required:[true,'Category is Required']
    },
    imageurl:{
        type:String,
        required:[true,'Item link is Required']
    },
    popularity:{
        type:Number,
        validate: {
            validator: Number.isInteger,
            message: '{VALUE} is not an integer value!'
        }

    }
});

const Menu=models.Menu || model('Menu',MenuSchema)

export default Menu