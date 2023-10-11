import React ,{useState,useEffect}from 'react'

const FilterDiv = ({showFilterDiv,filteredData ,setFilteredData}) => {
    const [data,setData] = useState([])

    const [category,setCategory] = useState([])
    const [price,setPrice] = useState()
    const [rating,setRating] = useState()
    
  // FETCH DATA FOR LATEST TRENDING DIV
  const fetchData = async() => {
    try {
      var response = await fetch('https://fakestoreapi.com/products/categories')
      response = await response.json()
      setData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
        e.preventDefault()

        let newData = filteredData.filter((item) => {
                return category.includes(item.category) 
                })

        setFilteredData(newData)
        setCategory([])
        setPrice()
        setRating()
  }

  useEffect(() => {
    fetchData()

  },[filteredData])

  return (
    <div className={`${showFilterDiv?"":"hidden"} w-[30%]`}> 
        <form className='font-sans text-sm capitalize' onSubmit={handleSubmit}>

            {/* FILTER BY CATEGORY */}
            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>Categories</p>
                {
                data.map((item,index) => (
                    <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input key={index} type='checkbox' name="category" value={item} onChange={() => setCategory([...category,item])}/>
                        <p>{item}</p>
                    </div>
                ))
            }
            </div>

            {/* FILTER BY PRICE */}
            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>price</p>
                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "price" value="100" onChange={(e) => setPrice(e.target.value)}/>
                        <p>{`under 100`}</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "price" value="500" onChange={(e) => setPrice(e.target.value)} />
                        <p>{`under 500`}</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "price" value="1000" onChange={(e) => setPrice(e.target.value)}/>
                        <p>{`under 1000`}</p>
                </div>
            </div>

            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>Rating</p>
                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="5" onChange={(e) => setRating(e.target.value)}/>
                        <p className='text-lg text-yellow-500 text-lg text-lg'>★★★★★</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="4" onChange={(e) => setRating(e.target.value)}/>
                        <p className='text-lg text-yellow-500'>★★★★☆</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="3" onChange={(e) => setRating(e.target.value)}/>
                        <p className='text-lg text-yellow-500'>★★★☆☆</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="2" onChange={(e) => setRating(e.target.value)}/>
                        <p className='text-lg text-yellow-500'>★★☆☆☆</p>
                </div>

                <div className='flex gap-2 my-[2%] mx-[2%]'>
                        <input type='checkbox' name= "star" value="1" onChange={(e) => setRating(e.target.value)}/>
                        <p className='text-lg text-yellow-500'>★☆☆☆☆</p>
                </div>
            </div>
            <button className='flex font-serif rounded-lg border p-[2%] m-[1%] my-[4%] w-full justify-center bg-gray-300' type='submit'>
                <p>Filter</p>
            </button>
        </form>
    </div>
  )
}

export default FilterDiv