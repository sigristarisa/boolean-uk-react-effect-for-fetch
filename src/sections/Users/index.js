import { useEffect, useState } from "react";

const UsersSection = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((res) => res.json())
      .then((users) => {
        setUserData(users.results);
      });
  }, []);

  return (
    <section>
      <h2>Users Section</h2>
      <div className="scroll-container">
        <ul className="users-list">
          {userData.map((user, index) => (
            <li className={user.gender === "male" ? "bg-blue" : "bg-pink"}>
              <img src={user.picture.medium} alt="" />
              <h3>
                {user.name.title} {user.name.first} {user.name.last}
              </h3>
              <p>{user.email}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default UsersSection;
