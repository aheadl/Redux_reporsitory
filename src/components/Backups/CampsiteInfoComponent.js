import React, {Component} from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import { LocalForm, Control, Label } from 'react-redux-form';
//import DirectoryComponent from './DirectoryComponent';

class CommentForm extends Component {
//     constructor(props){
//     super(props);
    
    
// }
 
render() { 
     return (  
        <div>
            <p>TEST</p>
            <Button boolean="outline"><i className="fa fa-pencil fa-lg" />Submit Comment</Button>
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
               <h4>Commentsaaaaaa</h4>
               {comments.map(comment => {
                    return ( 
                        <div key={comment.id}>
                            <p>{comment.text}</p>
                            <p>{comment.author}{","} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))} </p>
                        </div>

               );
               } )};

                <CommentForm />
                <p>testing</p>
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