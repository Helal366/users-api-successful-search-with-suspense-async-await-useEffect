import { Suspense, useState } from "react";
import "./App.css";
import Users from "./Users";
import Search from "./Search";

const url = "https://jsonplaceholder.typicode.com/users";
const fetchUsers = async()=>{
  const res= await fetch(url);
  return res.json();
}

function App() {
  const [searchText, setSearchText] = useState("");
  const usersPromise=fetchUsers();

  return (
    <>
      <h1 className="heading-one">Suspense use</h1>
      <Search searchText={searchText} setSearchText={setSearchText}></Search>
      <Suspense fallback={<h4>Loading...</h4>}>
        <Users usersPromise={usersPromise} searchText={searchText}></Users>
      </Suspense>
    </>
  );
}

export default App;
