import Profile from "../Profile/Profile";
import React from "react";
import Navbar from "../Navbar/Navbar";
import AboutMe from "../AboutMe/AboutMe";

export default function Home() {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main>
        <Profile />
        <AboutMe />
      </main>
    </React.Fragment>
  );
}
