import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Media } from 'reactstrap';

class Dishdetail extends Component{
    
    constructor(props){
        super(props);
    }

    renderComments(allComments){
        return(
            <div></div>
        )
    }

    render(){



        if(this.props.showDish == null){
            return(
                <div></div>
            )
        }

        else{

            var currDish = this.props.showDish;
            var currCommentList = currDish.comments;
            const allComments = currCommentList.map((comment) => {
                return(
                    <div key={comment.id}>
                        <p> {comment.comment} </p> 
                        <p> -- {comment.author} , {comment.date}</p>
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

                            {this.renderComments(this.props.showDish.comments)}
                        </div>
                    </div>
                </div>
            );
        }

        
    }
}

export default Dishdetail;