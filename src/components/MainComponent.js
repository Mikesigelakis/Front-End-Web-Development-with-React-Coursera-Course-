import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';
import { DISHES } from '../shared/dishes';

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
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={(dishId) => this.onDishSelect(dishId)} />
                {this.renderDishDetail(this.state.selectedDish)}
            </div>
        );
    }
}

export default Main;