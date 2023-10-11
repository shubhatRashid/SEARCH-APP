import React, { useState } from 'react'

const ProductCard = ({details}) => {
    const hearts = ["❤️","🤍"]
    const [likeColor,setLikeColor] = useState(hearts[1]) 

    // FUNCTION TO CHANGE COLOR OF WISHLIST BUTTON ON CLICK
    const changeColor = () => {
        if (likeColor === hearts[1]){
            setLikeColor(hearts[0])
        }else{
            setLikeColor(hearts[1])
        }
    }

  return (
    <div className=' m-[2%] py-[4%] rounded flex flex-col gap-2 justify-end items-center font-sans bg-white border rounded relative'>
        <div className='absolute top-2 right-2 fill-current '>
           <button onClick={changeColor} >{likeColor}</button>
        </div>

        <img className='bg-white max-h-[200px] min-w-[150px]' src={details.image} />
        <div className='flex w-[100%] justify-start px-[5%]'>
            <p className='text-xs capitalize m-[1%] '>RS {details.title}</p>
        </div>
        
        <div className='flex w-[100%] justify-start px-[5%]'>
            <p className='line-through text-xs capitalize m-[1%] text-gray-400'>RS {details.price + 100}</p>
            <p className='text-xs capitalize m-[1%] font-bold text-sky-400'>RS {details.price}</p>
        </div>

        <div className='flex w-[100%] justify-start px-[5%]'>
            {
                [...Array(Math.floor(details.rating.rate))].map((e, i) => <span className=" text-sm" key={i}>⭐</span>)
            }
            <p className='text-sm'>{`(${details.rating.count})`}</p>    
        </div>
        
        
    </div>
  )
}

export default ProductCard