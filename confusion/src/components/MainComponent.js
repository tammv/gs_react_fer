import DishDetail from "./DishesComponent";
import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/Dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render() {
    const HomePage = () => {
      return <Home />;
    };

    return (
      <Router>
        <div>
          <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<HomePage />} />
            <Route
              path="/menu"
              element={<Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />}
            />
            <Route path="/menu/:dishId" element={<DishDetail dishes={this.state.dishes} />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default Main;
