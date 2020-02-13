import React from "react";
import './Login.css';
import {Redirect} from "react-router-dom";


//React Bootstrap Material Design
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBCard, MDBInput } from 'mdbreact';


class Login extends React.Component{      
constructor(props){
super(props)
let loggedIn = false

this.state={
Usuario:'',
Password:'',
loggedIn   
}    
}

render(){ 
if(this.state.loggedIn){
return <Redirect to="/Galeria"/>    
}        
return (
<MDBContainer className='banner'>
<MDBRow>
<MDBCol md='6'>
<MDBCard
className='card-image'
style={{
backgroundImage:'url(https://i.pinimg.com/564x/9a/0b/cb/9a0bcb48cc034ed95bd89e1065c97e6c--navy-suits-mens-suits.jpg)' ,   
width:'23rem',
}}>
    
<div className='text-white rgba-stylish-strong py-4 px-4 z-depth-4'>
<MDBInput
label='Usuario'
group
type='text'
validate
labelClass='white-text'
value={this.state.Usuario}
onChange={this.updateUsuario.bind(this)}
className="TextColor-One"/>



<MDBInput
label='Password'
group
type='password'
validate 
labelClass='white-text'
value={this.state.Password}
onChange={this.updatePassword.bind(this)}
className="TextColor-Two"
/>


<MDBRow className='d-flex align-items-center mb-4'>
<div className='text-center mb-3 col-md-12'>
<MDBBtn
color='success'
rounded
type='button'
className='btn-block z-depth-1'
onClick={this.Aoi.bind(this)}>
Login
</MDBBtn>

</div>
</MDBRow>
</div>
</MDBCard>
</MDBCol>
</MDBRow>
</MDBContainer>

);
};


updateUsuario(event){
this.setState({
Usuario:event.target.value
}); 
}

updatePassword(event){
this.setState({
Password:event.target.value
}); 
}

Aoi(){
const {Usuario,Password} = this.state 
if(Usuario === 'Admin' && Password === 'Admin1234'){      
console.log('Usuario Correcto');
}else{
alert('Usuario o Password Incorecto Vuelva a Intentarlo');
}
if(Usuario === 'Admin' && Password === 'Admin1234'){
this.setState({loggedIn:true}) 

}
}}

export default Login;



