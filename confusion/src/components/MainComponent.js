// import { Navbar, NavbarBrand } from "reactstrap";
import DishDetail from "./DishesComponent";

import React, { Component } from "react";
import Menu from "./MenuComponent";
import { DISHES } from "../shared/Dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import { Routes, Route, Navigate } from "react-router-dom";

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
      <div>
        <Header />
        <Routes>
          <Route path="/home" Component={HomePage} />
          <Route
            exact
            path="/menu"
            element={
              <Menu
                dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)}
              />
            }
          />
          <Route path="/home" element={<Navigate to="/Menu"></Navigate>} />
        </Routes>
        <Footer />
      </div>
    );
  }

  // render() {
  //   return (
  //     <div>
  //       <div className="header">
  //         <Header />
  //       </div>
  //       <Menu
  //         dishes={this.state.dishes}
  //         onClick={(dishId) => this.onDishSelect(dishId)}
  //       />
  //       <DishDetail
  //         dish={
  //           this.state.dishes.filter(
  //             (dish) => dish.id === this.state.selectedDish
  //           )[0]
  //         }
  //       />
  //       <Footer />
  //     </div>
  //   );
  // }
}

export default Main;
