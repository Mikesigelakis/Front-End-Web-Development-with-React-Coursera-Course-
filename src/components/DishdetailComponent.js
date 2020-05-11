import React from 'react';
import
{
    Card, CardImg, CardText, CardBody,
    CardTitle, Breadcrumb, BreadcrumbItem
} from 'reactstrap';
import { Link } from 'react-router-dom';




function RenderComments({ comments })
{
    const commentsList = comments.map((com) =>
    {
        return (
            <ul class="list-unstyled" key={com.id}>
                <li>  {com.comment}</li>
                <li>-- {com.author}</li>
                <li>{new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(com.date)))}</li>
            </ul>
        )
    });
    return commentsList;
}

function RenderDish({ dish })
{
    return (
        <div className="col-12 col-md-5 m-1">
            <Card>
                <CardImg top src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        </div>

    )

}

const DishDetail = (props) =>
{

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">

                <RenderDish dish={props.dish} />

                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        </div>
    );

}



export default DishDetail;