import React, { Component } from "react";
import Menu from "./MenuComponent";
import DishDetail from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";
import Contact from "./ContactComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { Routes, Route, Navigate } from "react-router-dom";

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }
 


  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }
  const DishWithId = () => {
    const {dishId} = useParams();
    return(
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(dishId,10))[0]} 
          comments={this.state.comments.filter((comment) => comment.dishId === parseInt(dishId,10))} />
    );
  };


  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
        <Routes>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" Component={() => <Menu dishes={this.state.dishes} />} />
          <Route to="/home" element={<Navigate to="/Menu" />} />
          <Route exact path="/contactus" Component={Contact} />
          <Route path='/menu/:dishId' component={DishWithId} />
        </Routes>
        <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        <Footer />
      </div>
    );
  }
}

export default Main;
