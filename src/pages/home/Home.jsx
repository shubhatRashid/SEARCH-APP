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
    var response = await fetch('https://fakestoreapi.com/products')
    response = await response.json()
    setSearchData(response)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(search)
    if (search === " "){
      setFilteredData(searchData)
      return;
    }

    const newData = searchData.filter((item) => {
      console.log(search)
      console.log(item.title)
      return item.title.includes(search)
    })
    setShowResult(true)
    setFilteredData(newData)
  }
  
  useEffect(() => {
    fetchSearchData()
  })
  return (
    <div className="">
      <Header />

      {/* SEARCH BAR AND ITS SUGGESTION DIV */}
      <div className="relative flex justify-center flex-col items-center">
          <SearchBar setFocusInSearch={setFocusInSearch} setSearch = {setSearch} search={search} handleSubmit={handleSubmit}/>
          <Suggestion visibility={focusInSearch}/>
      </div>

      {/* SEARCH RESULT DIV */}
      <div className={`${showResult?"":"hidden"}`}>
          <SearchResult searchData={filteredData}/>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
