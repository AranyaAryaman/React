import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component{
    
    render(){

        if(this.props.showDish == null){
            return(
                <div><p>Hi</p></div>
            )
        }

        else{

            var currDish = this.props.showDish;
            var currCommentList = currDish.comments;
            const allComments = currCommentList.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p> {comment.comment} </p> 
                        <p> -- {comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
                        <br />
                    </div>
                );
            });

            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <Card>
                                <CardImg width="100%" src={this.props.showDish.image} alt={this.props.showDish.name} />
                                <CardBody>
                                    <CardTitle>{this.props.showDish.name}</CardTitle>
                                    <CardText>{this.props.showDish.description}</CardText>
                                </CardBody>
                            </Card>
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <h4> Comments </h4>
                            <ul class="list-unstyled">
                                {allComments}
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }

        
    }
}

export default Dishdetail;