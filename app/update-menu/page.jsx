import Update from "@components/Update";
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
    <Update menuitems={menuitems}/>
  );
};

export default page;
