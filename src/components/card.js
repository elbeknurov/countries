import { useEffect, useState } from "react";
import "./count.css";

const Card = () => {
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/all`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(data);
      });
  }, []);
  const [Card, setCard] = useState([]);
  return (
    <div className="cards  ">
      {Card.map((item) => {
        return (
          <div className="card" key={Math.random() + 1}>
            <div className="img">
              <img
                className="imgg"
                src={item.flags.svg}
                alt="icon"
                width={100}
              />
              <img
                width={100}
                className="imgg"
                src={item.coatOfArms.svg}
                alt="icon"
              />
            </div>
            <div className="div_title">
              <h1 className="title">{item.name.common}</h1>
              <p className="capital">{item.capital}</p>
              <p className="region">{item.region}</p>
              <p className="languages">{}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Card;
