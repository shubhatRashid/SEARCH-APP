import React, { useEffect,useState } from 'react'
import ProductCard from '../../components/subComponents/ProductCard'
import FilterDiv from '../../components/subComponents/FilterDiv'
import { Header } from '../../components/mainComponents'

const SearchResult = ({filteredData,setFilteredData,searchData}) => {
const [showFilterDiv,setShowFilterDiv] = useState(false)
  return (
    <div className='bg-white p-[2%] pt-[10%]'>
          <p className='text-4xl font-sans'>Search Results</p>
        
        <div className='flex py-[2%]'>
        
            <button onClick={() => setShowFilterDiv(!showFilterDiv)} className='text-black flex justify-start'>➡️</button>
            {/* FILTER DIV */}
            <FilterDiv showFilterDiv={showFilterDiv} filteredData={filteredData} setFilteredData={setFilteredData}/>

            {/* PRODUCTS DIV */}
            <div className='grid grid-cols-3 lg:grid-cols-5 grid-flow-row gap-5'>
             { filteredData.map((product) => (
                <ProductCard key={product.id} details= {product} />
              ))}
            </div>
        </div>
        
    </div>
  )
}

export default SearchResult