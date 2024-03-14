import { useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [error, setError] = useState("");

  const fetchPikachuData = async () => {
    try {
      const rawData = await fetch(
        `https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${searchText}`
      );
      const jsonData = await rawData.json();
      setData(jsonData);
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  // document
  //   .getElementById("searchArea")
  //   .addEventListener("keypress", (e) =>
  //     e.key === "Enter" ? document.getElementById("myBtn").click() : ""
  //   );

  const handleKeyPress = (e) => {
    e.key === "Enter" ? fetchPikachuData() : "";
  };

  console.log(data);

  console.log(searchText);
  // console.log(searchResult);
  return (
    <div className="App">
      <h2>Pokemon Search</h2>
      <div>
        <input
          id="searchArea"
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          onKeyUp={handleKeyPress}
        />
        <button id="myBtn" onClick={fetchPikachuData}>
          Search
        </button>
      </div>
      <div>
        {data && !error ? (
          <div>
            <span>{data.id}</span>
            <span>{data.name}</span>
            <span>{data.height}</span>
            <img src={data.sprites?.front_default} alt="" />
          </div>
        ) : (
          <div>Not found</div>
        )}
      </div>
    </div>
  );
}

export default App;
