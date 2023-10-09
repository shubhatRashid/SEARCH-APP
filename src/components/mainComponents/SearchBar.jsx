import React from 'react'

const SearchBar = () => {
  return (
    <div>
      <form className='w-screen flex justify-center'>
        <div className='rounded-xl w-[60%] flex justify-center items-center bg-white p-[0.5%]'>
            <input type="text" className=' p-[1%] pl-[3%] w-[100%] text-xl font-serif outline-none' placeholder='Search...'/>
            <lord-icon
                src="https://cdn.lordicon.com/zniqnylq.json"
                trigger="click"
                colors="primary:#4be1ec,secondary:#cb5eee"
                style={{width:"40px",height:"40px",backgroundColor:"white",paddingRight:"7%"}}>
            </lord-icon>
        </div>
      </form>
    </div>
  )
}

export default SearchBar