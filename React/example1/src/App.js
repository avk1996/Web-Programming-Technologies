import { useState } from "react";
import "./App.css";
import About from "./components/About";
import NavBar from "./components/NavBar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  //to access title and AboutMe properties
  const [Mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("Light");
  const [alert, setAlert] = useState(null);

  const ShowAlert = (message, type) => {
    setAlert({
      message: message,
      typ: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  document.title = "Light Text Utils";
  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setTextMode("light");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      document.title = "Dark Text Utils";
      ShowAlert("Dark mode has been enabled", "success");
    } else if (Mode === "dark") {
      setMode("light");
      setTextMode("dark");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "Light Text Utils";
      ShowAlert("Light mode has been enabled", "success");
    }
  };
  return (
    <>
      <Router>
        <NavBar
          title="Text Utils"
          AboutMe="Check Me Out"
          Mode={Mode}
          TextMode={textMode}
          ToggleMode={toggleMode}
        />
        <Alert alert={alert} Mode={Mode} />
        <div className="container">
          <Routes>
            <Route path="/About.js" element={<About aboutTitle="About Me" />} />
            <Route
              path="/"
              element={
                <TextForm heading="Crazy Blogs" Mode={Mode} alert={ShowAlert} />
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
