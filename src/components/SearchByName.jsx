import { useState, useEffect } from "react";
import UserCard from "./UserCard";

const SearchByName = () => {
  const [userInput, setUserInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleForm = (e) => {
    e.preventDefault();
    searchUsers();
  };

  const url = `https://api.github.com/search/users?q=${userInput}`;

  const searchUsers = async () => {
    try {
      const req = await fetch(url);
      const res = await req.json();
      const data = res;
      setSearchResults(data.items);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    searchUsers();
  }, [userInput]);

  return (
    <>
      <div className="search">
        <form onSubmit={handleForm}>
          <label htmlFor="name">Search by name: </label>
          <input
            onChange={(e) => setUserInput(e.target.value)}
            id="name"
            type="text"
            value={userInput}
          />
        </form>
      </div>
      <div className="userCard">
        {searchResults &&
          searchResults.map((user) => (
            <UserCard
              avatarUrl={user.avatar_url}
              name={user.login}
              profileUrl={user.html_url}
              key={user.id}
              isAdmin={user.site_admin}
              userType={user.type}
            />
          ))}
      </div>
    </>
  );
};

export default SearchByName;
