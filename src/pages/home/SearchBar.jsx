import React from 'react'

const SearchBar = ({setFocusInSearch,border,setSearch,handleSubmit,search}) => {
  return (
    <div className='m-[1%]'>
      <form className='w-screen flex justify-center' onSubmit={handleSubmit}>
        <div className={`rounded-xl w-[40%] flex justify-center items-center bg-white p-[0.5%] ${border}`}>
            <input 
                value={search}
                type="text" 
                className=' pl-[2%] w-[100%] text-xl font-serif outline-none' 
                placeholder='Search...' 
                onFocus={() => setFocusInSearch(true)}
                onBlur={() => setFocusInSearch(false)}
                onChange={(e) => setSearch(e.target.value)}
                />
            <button type='submit'>
              <lord-icon
                  src="https://cdn.lordicon.com/zniqnylq.json"
                  trigger="click"
                  colors="primary:#4be1ec,secondary:#cb5eee"
                  style={{width:"40px",height:"40px",backgroundColor:"white"}}>
              </lord-icon>
            </button>
        </div>
      </form>
    </div>
  )
}

export default SearchBar