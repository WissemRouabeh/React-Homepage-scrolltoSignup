import React, { useState, useEffect } from "react";
import Nav from "./component/Nav.js";
import Sections from "./component/Sections.js";
function App() {
  const [scrolled, setscrolled] = useState(false);
  const [pagey, setpagey] = useState(0);

  const whenpos = 350;

  function reply() {
    setpagey(window.pageYOffset);
  }
  useEffect(() => {
    window.addEventListener("scroll", reply);
    pagey > whenpos ? setscrolled(true) : setscrolled(false);
    return () => {
      window.removeEventListener("scroll", reply);
    };
  }, [pagey, scrolled]);
  return (
    <div className="App">
      <Nav
        scrolled={scrolled}
        scrolledhalf={() => {
          return pagey > whenpos / 2;
        }}
      />

      <Sections scrolled={scrolled} />
    </div>
  );
}

export default App;
