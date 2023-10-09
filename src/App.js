import React from "react";
import {Header,SearchBar,SearchResult,Suggestion,Footer} from "./components/mainComponents"
function App() {
  return (
    <div>
      <Header />
      <SearchBar />
      <Suggestion />
      <SearchResult />
      <Footer />
    </div>
  );
}

export default App;
