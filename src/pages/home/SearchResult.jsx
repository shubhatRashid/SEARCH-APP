import React, { useEffect,useState } from 'react'
import ProductCard from '../../components/subComponents/ProductCard'
import FilterDiv from '../../components/subComponents/FilterDiv'
import { Header } from '../../components/mainComponents'

const SearchResult = ({filteredData,setFilteredData,searchData}) => {

  return (
    <div className='bg-white p-[2%] pt-[10%]'>
          <p className='text-4xl font-sans'>Search Results</p>
        
        <div className='flex py-[2%]'>
            {/* FILTER DIV */}
            <FilterDiv filteredData={filteredData} setFilteredData={setFilteredData}/>

            {/* PRODUCTS DIV */}
            <div className='grid grid-cols-2 lg:grid-cols-4 grid-flow-row gap-5'>
             { filteredData.map((product) => (
                <ProductCard key={product.id} details= {product} />
              ))}
            </div>
        </div>
        
    </div>
  )
}

export default SearchResult