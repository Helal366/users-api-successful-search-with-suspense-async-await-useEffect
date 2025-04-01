import React, { use } from "react";
import "./Users-module.css";

const Users = ({ fetchUsers, searchText }) => {
  const users = use(fetchUsers);
  console.log(users)
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <>
      <section className="users-section">
        {filteredUsers.map((user, i) => (
          <User key={i} user={user}></User>
        ))}
      </section>
    </>
  );
};

const User = ({ user }) => {
  console.log(user);
  const { id, name, email, address, company } = user;
  const { city, street, suite, zipcode } = address;
  return (
    <article className="card">
      <div>
        <h1>{id}</h1>
        <h4>Name: {name}</h4>
        <p>Company name: {company.name}</p>
        <p>Email: {email}</p>
        <ul>
          <span className="address-span">Address:</span>
          <li>City: {city}</li>
          <li>Street: {street}</li>
          <li>Suite: {suite}</li>
          <li>Zipcode: {zipcode}</li>
        </ul>
      </div>
    </article>
  );
};
export default Users;
