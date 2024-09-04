import { useState } from "react";
import { Container } from "react-bootstrap";
import Header from "./components/Header";
import Search from "./components/Search";
import Sorting from "./components/Sorting";
import CardContainer from "./components/CardContainer";
// We are renaming the data, to avoid confussions with the variable data where it can keep the change of state
// const [data, setData] = useState(initialData);
import {data as initialData} from "./helper/data";
import "./App.css";


function App() {
  const [search, setSearch] = useState("");
  // search and data are created here, the parent, because we will use in more than 1 child component
  //    - search -> Search and CardContainer(to render these filtered info in the card container)
  //    - data -> Sorting and CardContainer
  // It is better to rename, because I want to use data keywords. If I don't rename, it will be collapsed
  const [data, setData] = useState(initialData);

  return ( 
  <Container className="text-center mt-4">
    <Header />
    <div className="d-flex justify-content-between align-items-center mt-3">
      <Search search={search} setSearch={setSearch}/>
      <Sorting data={data} setData={setData} />
    </div>
    <CardContainer search={search} data={data} />
  </Container>);
}

export default App;
