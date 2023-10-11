import React ,{useState,useEffect}from 'react'

const FilterDiv = ({showFilterDiv,filteredData ,setFilteredData}) => {
    const [data,setData] = useState([])

    const [category,setCategory] = useState(5)
    const [price,setPrice] = useState(10000)
    
  // FETCH DATA FOR LATEST TRENDING DIV
  const fetchData = async() => {
    try {
      var response = await fetch('https://api.escuelajs.co/api/v1/categories')
      response = await response.json()
      setData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
        e.preventDefault()
        let url = `https://api.escuelajs.co/api/v1/products/?price_min=0&price_max=${price}&categoryId=${category}`
        try {
                var response = await fetch(url)
                response = await response.json()
                console.log(response)
                setFilteredData(response)
        } catch (error) {
                console.log(error)
        }

  }

  useEffect(() => {
    fetchData()

  },[filteredData])

  return (
    <div className={`${showFilterDiv?"":"hidden"} min-w-[20%]`}> 
        <form className='font-sans text-sm capitalize' onSubmit={handleSubmit}>

            {/* FILTER BY CATEGORY */}
            <div className='border-b mt-[1%]'>
                <p className='uppercase font-bold'>Categories</p>
                {
                data.map((item,index) => {
                        if (index < 9) {
                        return ( <div className='flex gap-2 my-[2%] mx-[2%]'>
                                        <input key={index} type='checkbox' name="category" value={item.name} onChange={() => setCategory(item.id)}/>
                                        <p>{item.name}</p>
                                </div>)
                        }
                    }
                )
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

            <button className='flex font-serif rounded-lg border p-[2%] m-[1%] my-[4%] w-full justify-center bg-gray-300' type='submit'>
                <p>Filter</p>
            </button>
        </form>
    </div>
  )
}

export default FilterDiv