import React, { useEffect,useState } from 'react'
import ProductCard from '../../components/subComponents/ProductCard'
import FilterDiv from '../../components/subComponents/FilterDiv'

const SearchResult = ({filteredData,setFilteredData,searchData}) => {
const [showFilterDiv,setShowFilterDiv] = useState(true)
  return (
    <div className='bg-white p-[2%]'>
        <p className='text-4xl font-sans'>Search Results</p>
        <div className='flex py-[2%]'>

            {/* FILTER DIV */}
            <FilterDiv showFilterDiv={showFilterDiv} filteredData={filteredData} setFilteredData={setFilteredData}/>

            {/* PRODUCTS DIV */}
            <div className='grid grid-cols-5 grid-flow-row gap-5'>
             { filteredData.map((product) => (
                <ProductCard key={product.id} details= {product} />
              ))}
            </div>
        </div>
        
    </div>
  )
}

export default SearchResult