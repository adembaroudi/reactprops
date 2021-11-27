import React from 'react'
import PropTypes from "prop-types";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card , Button} from 'react-bootstrap'
const Profile = props => {
 const styleObject = {color :"black" ,  marginLeft:"30%"}
    return (
        
        <div style={styleObject}>
                 <Card style={{ width: '25rem' }}>
  {props.children}
  <Card.Body>
    <Card.Title><h1>Full Name : {props.fullName}</h1></Card.Title>
    <Card.Text>
    <h1>Biography : {props.bio}</h1>
            <h1>Profession : {props.profession}</h1>
            <h1>I am {props.age} years old</h1>;
    </Card.Text>
    <Button onClick={()=>props.handleName(props.fullName)} variant="primary">Alert me</Button>
  </Card.Body>
</Card>
        </div>
    )
}

Profile.propTypes = {
    fullName : PropTypes.string,
    bio : PropTypes.string ,
    profession : PropTypes.string,
    handleName : PropTypes.func
}
Profile.defaultProps ={
    age : "29"
}
export default Profile
