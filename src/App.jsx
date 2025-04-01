import { Suspense, useEffect, useState } from "react";
import "./App.css";
import Users from "./Users";
import Search from "./Search";

const url = "https://jsonplaceholder.typicode.com/users";
function App() {
  const [searchText, setSearchText] = useState("");
  const [users, setUsers]=useState([]);

  useEffect(()=>{
    const fetchData = async()=>{
      const res= await fetch(url);
      const data= await res.json();
      setUsers(data)
    }
    fetchData()
  },[])
  

  return (
    <>
      <h1 className="heading-one">Suspense use</h1>
      <Search searchText={searchText} setSearchText={setSearchText}></Search>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Users users={users} searchText={searchText}></Users>
      </Suspense>
    </>
  );
}

export default App;
