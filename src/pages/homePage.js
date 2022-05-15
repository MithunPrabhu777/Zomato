import React, { useEffect, useState } from "react";
import "../styles/homePage.css";
import { restaurants } from "../data/restaurant";

const HomePage = () => {
  const [restorantInfo, setRestorantInfo] = useState(restaurants);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setRestorantInfo(restorantInfo);
  }, [search]);

  console.log(restorantInfo);

  //   const handleSearch = (e) => {
  //     setSearch(e.target.value);
  //     let updatedRestaurant = restorantInfo.filter((restaurant) => {
  //       return restaurant.info.name.startsWith(search);
  //     });

  //     setRestorantInfo(updatedRestaurant);

  //     console.log(updatedRestaurant);
  //   };

  return (
    <div className="container">
      <header className="header">
        <h2 className="header_name">zomato</h2>
        <input
          name="Search"
          className="header_search"
          value={search}
          //   onChange={(e) => handleSearch(e)}
        ></input>
      </header>

      <div className="content">
        <div className="tab">
          <ul></ul>
        </div>
        <div className="card_container">
          {restorantInfo.map((restaurant) => (
            <div className="card">
              <div className="card_img">
                <img
                  src={restaurant.info.image.url}
                  alt="Avatar"
                  style={{ width: "100%" }}
                />
              </div>

              {/* <div className="card_description">
                <h4>
                  <b>helli</b>
                </h4>
                <p>helli</p>
              </div> */}
            </div>
          ))}
          {/* <div className="card">
            <div className="card_img">
              <img
                src="https://static.toiimg.com/photo/77630680.cms?imgsize=780095"
                alt="Avatar"
                style={{ width: "100%" }}
              />
            </div>
            <div className="card_description">
              <h4>
                <b>helli</b>
              </h4>
              <p>helli</p>
            </div>
          </div> */}
        </div>
      </div>

      {/* <footer className="footer">Footer</footer> */}
    </div>
  );
};

export default HomePage;
