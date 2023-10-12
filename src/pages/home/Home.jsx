import React, { useEffect, useState } from "react";
import {Header,Footer} from "../../components/mainComponents"
import SearchBar from "./SearchBar"
import Suggestion from "./Suggestion"
import SearchResult from "./SearchResult";

function Home({focusInSearch,setFocusInSearch}) {
  const [search,setSearch] = useState('')
  const [searchData,setSearchData] = useState([])
  const [filteredData,setFilteredData] = useState([])
  const [showResult,setShowResult] = useState(false)

  // FETCH DATA FOR LATEST TRENDING DIV
  const fetchSearchData = async() => {

    try {
      var response = await fetch('https://api.escuelajs.co/api/v1/products')
      response = await response.json()
      setSearchData(response)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!search){
      setFilteredData(searchData)
    }else{
      try {
        var response = await fetch(`https://api.escuelajs.co/api/v1/products/?title=${search}`)
        response = await response.json()
        setFilteredData(response)
      } catch (error) {
        console.log(error)
      }
    }

    setShowResult(true)
    
  }
  
  useEffect(() => {
    fetchSearchData()
  },[])

  return (
    <div className={`relative flex flex-col justify-center items-center `}>
      <Header showResult={showResult}/>

      {/* SEARCH BAR AND ITS SUGGESTION DIV */}
      <div className={`flex w-[90%] justify-center flex-col items-center absolute ${!showResult?"top-20":"top-3"}`} >
          <SearchBar setFocusInSearch={setFocusInSearch} setSearch = {setSearch} search={search} handleSubmit={handleSubmit} border="border"/>
          <Suggestion visibility={focusInSearch}/>
      </div>

      {/* SEARCH RESULT DIV */}
      <div className={`${showResult?"":"hidden"}`}>
          <SearchResult filteredData={filteredData} setFilteredData={setFilteredData}/>
      </div>
    </div>
  );
}

export default Home;
