import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';
import Header from './HeaderComponent';
import Footer from './FooterComponenent';

class Main extends Component
{

    constructor(props)
    {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        };
    }

    onDishSelect(dishId)
    {
        this.setState({ selectedDish: dishId });
    }

    renderDishDetail(selectedDishid)
    {
        if (this.state.selectedDish != null) {
            return (<DishDetail selectedDish={this.state.dishes.filter((dish) => dish.id === selectedDishid)[0]} />
            )

        } else {
            return (<div></div>)
        }
    }

    render()
    {
        return (
            <div>
                 
                <Header/>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                {this.renderDishDetail(this.state.selectedDish)}
                <Footer/>
            </div>
        );
    }
}

export default Main;