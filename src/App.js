import React from "react";
import ReactDOM from "react-dom/client";

import userData from "./data.json";
import UserCard from "./UserCard";

function App() {
  const userCompArr = [];

  for (const user in userData) {
    console.log(userData[user].Name);
    const name = userData[user].Name;
    const email = userData[user].Email;
    const avatar = userData[user].Avatar;

    userCompArr.push(<UserCard key={user} name={name} email={email} avatar={avatar} />);
  }
  console.log(userCompArr)
{/* <UserCard name="Jed" email="jed@workbit.io" avatar="" />
      <UserCard name="Jed" email="jed@workbit.io" avatar="" /> */}
  const User1 = () => (
    <>
      {userCompArr.forEach(user => user)}
    </>
  );

  return (
    <div>
      <h2>Seasons of the year</h2>
      <ul>{userCompArr}</ul>
    </div>
  );
  //console.log(json);
}

export default App;
