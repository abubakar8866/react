import People from "./people";
import Home from "./home";
import Car from "./car";
import State from "./states";
import Navbar from "./Navbar";
import { Provider } from "react-redux";
import store from "./store";
import Axios from "./axios";
import Cart from "./cart";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import ThemeProvider from "./use";
import Crud from "./crud";

function people(name, rollno, city, course, university) {
  this.name = name;
  this.rollno = rollno;
  this.city = city;
  this.course = course;
  this.university = university;
}

function App() {
  let name = "Abubakar";
  let c = { name: "BMW", color: "black" };
  let p1 = new people("Abubakar", 12, "Ahmedabad", "MCA", "GLS");

  return (
    <Provider store={store}>
      <ThemeProvider>
        <Router>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home n={name} />} />
            <Route path="/car" element={<Car car={c} />} />
            <Route path="/people" element={<People p={p1} />} />
            <Route path="/state" element={<State />} />
            <Route path="/crud" element={<Crud />} />
            <Route path="/axios" element={<Axios />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;