import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


class DishDetail extends Component
{

    render()
    {
        const comments = this.props.selectedDish.comments.map((com) =>
        {
            return (
                <div key={com.id}>
                    <p>  {com.comment}</p>
                    <p>-- {com.author}</p>
                </div>
  )
        });

        return (


            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.selectedDish.image} alt={this.props.selectedDish.name} />
                        <CardBody>
                            <CardTitle>{this.props.selectedDish.name}</CardTitle>
                            <CardText>{this.props.selectedDish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <h3>Comments</h3>
                    {comments}
                </div>
            </div>
        )
    }
}


export default DishDetail;