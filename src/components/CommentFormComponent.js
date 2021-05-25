import {Component} from "react";
import {Button, Modal, ModalHeader, ModalBody, Label, Row, Col} from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => (val) && (val.length >= len);

class CommentForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            isModalOpen: false
        };
        this.toggleModal = this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(values){
        console.log("Current State is: " + JSON.stringify(values));
        alert("Current State is: " + JSON.stringify(values));
    }

    toggleModal(){
        this.setState({
            isModalOpen: !this.state.isModalOpen
        })
    }


    render(){
        return(
            <>
                <div>
                    <Button outline onClick={this.toggleModal}><span className="fa fa-pencil fa-md"> Submit Comment</span></Button>
                </div>
                

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} > 
                    <ModalHeader>
                        Submit Comment                        
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleSubmit(values)} >
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="rating">Rating</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.select model=".rating" name="rating" id="rating" className="form-control">
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="yourname">Your Name</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.text model=".yourname" id="yourname" name="yourname" placeholder="Your Name" 
                                        className="form-control" validators= {{required, minLength: minLength(3), maxLength: maxLength(15)}} />
                                    <Errors className="text-danger" model=".yourname" show="touched" 
                                        messages={{
                                            required: 'Required',
                                            minLength: 'Must be greater than 2 characters',
                                            maxLength: 'Must be 15 characters or less',
                                        }}
                                    />                     
                                </Col>
                            </Row>
                            <Row className="form-group">
                                <Col md={12}>
                                    <Label htmlFor="comment">Comment</Label>
                                </Col>
                                <Col md={12}>
                                    <Control.textarea model=".textarea" type="textarea" id="comment" name="comment" rows="6" className="form-control" />
                                </Col>
                            </Row>
                            <Button type="submit" value="submit" className="primary">Submit</Button>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>


        );
    }
}

export default CommentForm;