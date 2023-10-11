import React, { useEffect, useState } from 'react'
import SuggestionCard from '../../components/subComponents/SuggestionCard'

const Suggestion = ({visibility}) => {
  const [popularSearches,setSearches] = useState([])
  const [data,setData] = useState([])

  // FETCH DATA FOR LATEST TRENDING DIV
  const fetchData = async() => {
    var response = await fetch('https://fakestoreapi.com/products?limit=7')
    response = await response.json()
    setData(response)
  }

  // FETCH DATA FOR POPULAR SEARCHES DIV
  const fetchSearches = async() => {
    var response = await fetch('https://fakestoreapi.com/products/categories')
    response = await response.json()
    setSearches(response)
  }


  useEffect(() => {
    fetchData()
    fetchSearches()
  },[])

  return (
    <div className={`${visibility?"flex":"hidden"} flex-col bg-white w-[50%] bg-gray-100 rounded pb-[2%]`}>

        {/* LATEST TRENDS DIV */}
        <div className='flex flex-col m-[2%]'>
          <p className='font-sans text-lg mb-[2%]'>Latest Trends</p>
          <div className='flex mx-[1%] overflow-x-auto'>
              {
                data.map((item,index) => (
                  <SuggestionCard  key={index} source={item.image} category={item.category} />
                ))
              }
          </div>
        </div>

        {/* POPULAR TRENDS DIV */}
        <div className='flex flex-col m-[2%]'>
          <p className='font-sans text-lg mb-[2%]'>Popular Suggestions</p>
          {popularSearches.map((value,index) => (
            <p className="text-sm font-sans capitalize m-[0.5%]" key={index}>{value}</p>
          ))}

        </div>

    </div>
  )
}

export default Suggestion