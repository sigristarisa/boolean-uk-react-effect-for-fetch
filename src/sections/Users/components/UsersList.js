import { useEffect, useState } from "react";
import UsersListItem from "./UsersListItem";

const UsersList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        setUserData(users.results);
      });
  }, []);

  return (
    <ul className="users-list">
      {userData.map((user, index) => (
        <UsersListItem key={index} user={user} />
      ))}
    </ul>
  );
};

export default UsersList;
