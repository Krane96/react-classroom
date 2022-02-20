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
              return <div className="hero-card" key={idx}>
                        <img src={hero.attributes.img_url} alt="hero img"></img>
                        <h2>{hero.attributes.hero_name}</h2>
                        <div className="hero_buttons">
                          <a href="/">Items</a>
                          <a href="/">{"Tier " + hero.attributes.Tier}</a>
                        </div>
                        <span id={"factionColor" + hero.attributes.faction}>{hero.attributes.faction}</span>
                        <p>{hero.attributes.description}</p>
                        <div className="read_more">
                        <a className="more_button" href="/" style={{background:"none"}}>More Info &#8594;</a>
                        </div>
              </div>;
            })
          : null}
      </div>
    </>
  );
};

export default App;
