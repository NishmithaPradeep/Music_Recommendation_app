import "./styles.css";
import React, { useState } from "react";

const song = {
  Jazz: [
    {
      name: "Clicked on romance",
      rating: "4.4/5"
    },
    {
      name: "Thanks you willie",
      rating: "4.2/5"
    }
  ],

  English: [
    {
      name: "I do by 911",
      rating: "4.4/5"
    },
    {
      name: "Love me like you do ",
      rating: "4.3/5"
    }
  ],

  Rock: [
    {
      name: "Monsters by All time Low",
      rating: "4.1/5"
    },
    {
      name: "Atlas Falls by Shinedown",
      rating: "4.0/5"
    }
  ]
};

export default function App() {
  const [selectedCategory, setCategory] = useState("Jazz");
  function categoryClickHandler(category) {
    setCategory(category);
  }
  return (
    <div className="App">
      <h1> My Music Suggestions 🎼</h1>

      <div>
        {Object.keys(song).map((category) => (
          <button
            onClick={() => categoryClickHandler(category)}
            style={{
              cursor: "pointer",
              background: "grey",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.5rem"
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {song[selectedCategory].map((song) => (
            <li
              key={song.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "30%",
                margin: "1rem auto",
                backgroundColor: "#FFEBCD"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {song.name} </div>
              <div style={{ fontSize: "smaller" }}> {song.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
