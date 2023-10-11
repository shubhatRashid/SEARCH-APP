import React ,{useState,useEffect}from 'react'

const FilterDiv = ({showFilterDiv}) => {
    const [data,setData] = useState([])

  // FETCH DATA FOR LATEST TRENDING DIV
  const fetchData = async() => {
    try {
      var response = await fetch('https://fakestoreapi.com/products/categories')
      response = await response.json()
      setData(response)
      console.log(response)
    } catch (error) {
      alert(error)
    }
  }

  useEffect(() => {
    fetchData()
  },[])

  return (
    <div className={`${showFilterDiv?"":"hidden"} w-[30%]`}> 
        <form className='font-sans text-sm capitalize'>

            {/* FILTER BY CATEGORY */}
            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>Categories</p>
                {
                data.map((item,index) => (
                    <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input key={index} type='checkbox' name={item} value={item}/>
                        <p>{item}</p>
                    </div>
                ))
            }
            </div>

            {/* FILTER BY PRICE */}
            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>price</p>
                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "500" value="500"/>
                        <p>{`under 500`}</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "1000" value="1000"/>
                        <p>{`under 1000`}</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "1500" value="1500"/>
                        <p>{`under 1500`}</p>
                </div>
            </div>

            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>Rating</p>
                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="1"/>
                        <p className='text-lg text-yellow-500 text-lg text-lg'>★★★★★</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="2"/>
                        <p className='text-lg text-yellow-500'>★★★★☆</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="3"/>
                        <p className='text-lg text-yellow-500'>★★★☆☆</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="4"/>
                        <p className='text-lg text-yellow-500'>★★☆☆☆</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="5"/>
                        <p className='text-lg text-yellow-500'>★☆☆☆☆</p>
                </div>
            </div>
        </form>
    </div>
  )
}

export default FilterDiv