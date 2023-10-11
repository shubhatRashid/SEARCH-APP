import React, { useEffect,useState } from 'react'
import ProductCard from '../../components/subComponents/ProductCard'
import FilterDiv from '../../components/subComponents/FilterDiv'

const SearchResult = ({searchData}) => {

  return (
    <div className='bg-white p-[2%]'>
        <p className='text-4xl font-sans'>Search Results</p>
        <div className='flex py-[2%]'>

            {/* FILTER DIV */}
            <FilterDiv />

            {/* PRODUCTS DIV */}
            <div className='grid grid-cols-5 grid-flow-row gap-5'>
             { searchData.map((product) => (
                <ProductCard key={product.id} details= {product} />
              ))}
            </div>
        </div>
        
    </div>
  )
}

export default SearchResult