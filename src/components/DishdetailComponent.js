import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import {Link} from 'react-router-dom';
import CommentForm from './CommentFormComponent';
import {Loading} from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';
 
function RenderDish({myDish}){

    if(myDish == null){
        return(
            <p>Debug-1</p>
        );
    }
    
    else{

        return(
            <div className="col-12 col-md-5 m-1">
                <Card>
                    <CardImg src={baseUrl + myDish.image} alt={myDish.name} />
                    <CardBody>
                        <CardTitle>{myDish.name}</CardTitle>
                        <CardText>{myDish.description}</CardText>
                    </CardBody>
                </Card>                    
             </div>

        );   
   }
}

function RenderComments({comments, addComment, dishId}){
    
    const allComments = comments.map((comment) => {
        return(
            <div key={comment.id}>
                <p> {comment.comment} </p> 
                <p> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
            </div>
        );
    });

    return(
        <div className="col-12 col-md-5 m-1">
            <h4> Comments </h4>
            <ul className="list-unstyled">
                {allComments}
            </ul>
            <CommentForm dishId={dishId} addComment={addComment} />
        </div>
    );

}

const Dishdetail = (props) => {

    if(props.isLoading) {
        return(
            <div className="containter">
                <div className="row">
                    <Loading />
                </div>
            </div>
        );
    }

    else if (props.errMess){
        return(
            <div className="containter">
                <div className="row">
                    <h4> {props.errMess} </h4>
                </div>
            </div>
        );
    }

    else if(props.showDish == null){
        return(
            <div><p>Hi 1st</p></div>
        );
    }

    else if(props.comments == null){
        return(
            <div><p> Hi </p></div>
        );
    }

    else{
    
        return(
            <div className="container">
                 <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem><Link to ='/menu'>Menu</Link></BreadcrumbItem>
                        <BreadcrumbItem active>{props.showDish.name}</BreadcrumbItem>
                    </Breadcrumb>
                    <div className="col-12">
                        <h3>{props.showDish.name}</h3>
                        <hr /> 
                    </div>
                </div>    

                <div className="row">
                    <RenderDish myDish = {props.showDish}></RenderDish>
                    <RenderComments comments = {props.comments} addComment= {props.addComment} dishId= {props.showDish.id} ></RenderComments>                
                </div>
            </div>
        );
    }

}
      
export default Dishdetail;