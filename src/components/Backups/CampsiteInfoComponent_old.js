import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Control, Label } from 'react-redux-form';
//import DirectoryComponent from './DirectoryComponent';

class CommentForm extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
         isModalOpen: false
      };
    this.toggleModal = this.toggleModal.bind(this);

    }


    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleSubmit(values) {
        console.log('Current state is: ' + JSON.stringify(values));
        alert('Current state is: ' + JSON.stringify(values));
       // event.preventDefault();
    }

    render() { 
        return (
            <div>
            <Button boolean="outline" onClick={this.toggleModal}><i className="fa fa-pencil fa-lg" />Submit Comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
            <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <LocalForm>
                        <div className="form-control">
                            <div className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                <Control.select model=".rating" id="rating" name="rating">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </Control.select>
                            </div>
                            <div className="form-group">
                            
                                <Control.text model=".author" id="author" />
                            </div>
                            <div className="form-group">
                                <Control.textarea model=".text" id="text" name="text"
                                                        rows="6"
                                                        className="form-control"
                                                    />
                            </div>
                        </div>
                    </LocalForm>
                </ModalBody>
            </Modal>
            </div>
          );
    }
}
 


function RenderCampsite({campsite})  {

    return(
        <div className="col-md-5 m-1">
            <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
        </div>
    )

}
function RenderComments({comments}) {
    if(comments) {
        return (
           <div  className="col-md-5 m-1">
               <h4>Comments</h4>
               {comments.map(comment => {
                    return ( 
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}{","} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </div>

               );
               } )};
               <CommentForm />
            </div> 
        );
      }      
    
    }
    


    //campsite state passed from DirectoryComponent and is converted to props in this classed

    function CampsiteInfo(props) {
        if (props.campsite) {
            return (
                <div className="container">
                    <div className="row">
                        <RenderCampsite campsite={props.campsite} />
                        <RenderComments comments={props.comments} />
                    </div>
                </div>
            );
    }
    return <div />;
}




export default CampsiteInfo;