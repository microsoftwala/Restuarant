import React from 'react'
import { motion } from "framer-motion"
import { red } from '@mui/material/colors'
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Person3Icon from '@mui/icons-material/Person3';
import PhoneForwardedIcon from '@mui/icons-material/PhoneForwarded';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

const Item = ({ data }) => {
  return (
    <>
      <div className='w-full flex flex-row justify-between font-kal lg:pl-10 lg:pr-10 md:text-lg'>
      <p>{data.quantity}  &nbsp;&nbsp;x</p>
      
        <p>{data.itemName}</p>
        

      </div>
    </>
  )
}


const Dial = () => {

  return (
    <div className='flex flex-row cursor-pointer'>
      <div>
        <PhoneForwardedIcon style={{ color: "green", fontSize: 24 }} />
      </div>
      <a className='font-anta' href="tel:+91746284292">+91746284292</a>
    </div>
  )

}

const Name=()=>{

  return (
    <div className='flex flex-row'>
       <p className='font-kal mb-3 font-medium text-lg md:text-2xl'>Items</p>
       <div className='mr-3 mt-1'>
       <LocalOfferIcon/>
       </div>
    </div>
  )
}



const OrderItem = ({ order, handleFinish, handleDeliver }) => {



  return (
    <motion.div className='m-5 p-5 w-full bg-slate-50 rounded-2xl flex flex-col border-black border-2 border-t-8 border-l-8 rounded-bl-2xl shadow-2xl'
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.3 }
      }}
    >
      <div className='flex flex-row justify-between'>
        <p className='font-fred text-xl'><span className='font-bold text-xl lg:text-2xl'>Order: # </span>{order._id.slice(-6)}</p>
        <div>
          {!order.finish ? <CheckCircleIcon style={{ color: "green" }} /> : <Dial />}
        </div>
      </div>
      <p className='font-fred font-medium text-xl w-full flex justify-center items-center m-5'><span className='m-0 md:m-3'><Person3Icon style={{ fontSize: 48, color: "orangered" }} /></span>{order.name}</p>
      <div className='flex flex-col md:flex-row justify-around w-full p-2'>
        <div className='w-full md-w-7/12 flex flex-col sm:flex-row'>
       
          <div className='w-full sm:w-1/2 md:w-11/12 flex flex-col justify-center items-center rounded-3xl border-2 border-solid border-black p-5 bg-black text-white mb-3 sm:mb-0'>
            
            <Name/>
            {(order.itemDetails).map((data) => (
              <Item
                data={data}
              />
            ))}
          </div>
          <div className='w-full sm:w-1/2 md:w-11/12 flex flex-col justify-center items-center ml-2 sm:ml-6 md:ml-10 border-2 rounded-3xl border-black font-fred'>
              <p className='text-lg md:text-3xl font-extrabold h-1/6 mt-4'>Comments</p>
              <p className='h-5/6 mt-3 text-lg'>{order.comment}</p>
            
          </div>
        </div>
        <div className='w-full md:w-5/12 flex xs:flex-row md:flex-col lg:flex-row justify-between item-center font-fred font-bold mt-7 m-3'>
          <motion.button 
          onClick={handleFinish} 
          className={`${order.finish?'bg-green-500':'bg-gray-300'} w-1/3 md:w-11/12 lg:w-1/3 rounded-xl h-24 m-1`}
          whileHover={{
            borderRadius:"100px",
            transition:{duration:0.3}
          }}
          disabled={!order.finish}
          >Finished</motion.button>

          <motion.button 
          onClick={handleDeliver} 
          className='bg-green-500 w-1/3 md:w-11/12 lg:w-1/3 rounded-xl h-24 m-1'
          whileHover={{
            borderRadius:"100px",
            transition:{duration:0.3}
          }}
          >Delivered</motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default OrderItem