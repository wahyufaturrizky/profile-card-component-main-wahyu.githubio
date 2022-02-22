import Card from "components/Card";
import React from "react";
import "./App.css";

function App() {
  return (
    <main className="container-layout">
      <Card
        username="Wahyu Fatur Rizki"
        age="24"
        city="Medan"
        numberFollower="80k"
        numberLike="803k"
        numberPhoto="1.4k"
        labelFollower="Followers"
        labelLike="Likes"
        labelPhoto="Photos"
      />

      <footer>
        <div className="attribution">
          Challenge by{" "}
          <a
            rel="noreferrer"
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
          >
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a
            rel="noreferrer"
            href="https://www.linkedin.com/in/wahyu-fatur-rizky"
            target="_blank"
          >
            Wahyu Fatur Rizki
          </a>
          .
        </div>
      </footer>
    </main>
  );
}

export default App;
