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
    <div className=' m-[2%] p-[4%] rounded flex flex-col gap-2 justify-end items-center font-sans bg-white border rounded relative max-h-[400px]'>
        <div className='absolute top-2 right-2 fill-current '>
           <button onClick={changeColor} >{likeColor}</button>
        </div>

        <img className='bg-white ' src={details.images[0]} />
        <div className='flex w-[100%] justify-start px-[5%]'>
            <p className='text-xs capitalize m-[1%] '>RS {details.title}</p>
        </div>
        
        <div className='flex w-[100%] justify-start px-[5%]'>
            <p className='line-through text-xs capitalize m-[1%] text-gray-400'>RS {details.price + 100}</p>
            <p className='text-xs capitalize m-[1%] font-bold text-sky-400'>RS {details.price}</p>
        </div>

        <div className='flex w-[100%] justify-start px-[5%]'>
            {
                [...Array(Math.floor((Math.random() * 5)+1))].map((e, i) => <span className=" text-sm" key={i}>⭐</span>)
            }
            <p className='text-sm'>{`(${Math.floor(Math.random() * 100)})`}</p>    
        </div> 
        
        
    </div>
  )
}

export default ProductCard