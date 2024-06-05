import React from "react";

import userData from "./data.json";
import UserCard from "./UserCard";
import Header from "./Header";

function App() {
  const userCompArr = [];

  userData.map((user) => {
    const name = user.Name;
    const email = user.Email;
    const avatar = user.Avatar;

    userCompArr.push(
      <UserCard key={user} name={name} email={email} avatar={avatar} />
    );
  });

  return (
    <div className="userspage">
      <Header />
      <div className="userslist">
        <ul className="userspage__userslist">{userCompArr}</ul>
      </div>
    </div>
  );
}

export default App;
