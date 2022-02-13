import axios from "axios";
import { useState, useEffect } from 'react';
import { BASE_URL, HEROES_URL, POPULATE } from "./utils/api";

const App = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
    .get(BASE_URL + HEROES_URL + POPULATE)
    .then(response => setData(response.data.data));
  }, []);


  return (
    <>
    <h1>AFK Arena Encyclopedia</h1>
    <div className="cards-container grid">
        {data.length > 0
          ? data.map((hero, idx) => {
              return <div className="hero-card" key={idx}>{hero.attributes.hero_name}</div>;
            })
          : null}
      </div>
    </>
  );
};

export default App;
