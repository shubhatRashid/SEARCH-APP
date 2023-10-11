import React from 'react'

const SuggestionCard = ({source,category}) => {
  return (
    <div className=' m-[2%] p-[1%] rounded flex flex-col gap-5 justify-end items-center font-sans bg-white'>
        <img className='bg-white max-h-[254px] min-w-[165px]' src={source} />
        <p className='text-xs capitalize m-[1%]'>{category}</p>
    </div>
  )
}

export default SuggestionCard