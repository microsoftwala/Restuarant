import CustomerMain from "@components/CustomerMain";
import { connectToDb } from "@utils/database";
import Menumodel from "@models/menu";
export const dynamic = "force-dynamic";
async function getItem() {
  try {
    await connectToDb();

    // Fetch items sorted by popularity in descending order
    const items = await Menumodel.find({})
      .populate("creator")
      .sort({ popularity: 1 });

    return items;
  } catch (error) {
    console.log(error);
  }
}


const page = async() => {
  
  const menuitems = await getItem();


 
  

  return (
   <CustomerMain menuitems={menuitems}/>
  );
};

export default page;
