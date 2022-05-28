import React from "react";
import "./ok.css";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
// import Nav from "react-bootsrap/Nav";
import Button from 'react-bootstrap/Button';

const handlechange=async(category)=>{
  await axios(""),{
  
}


const Header=()=>{
    return(
        <>
       <Navbar expand="lg" variant="light" bg="light" >
  <Container>
    <Navbar.Brand className="heading" href="#">Live Spaces
    <p className="head">All NFT'S on Cyber either belong to or were minted by their space creator.</p></Navbar.Brand>
  
  </Container>
</Navbar>
<div>
<button className="btns" onClick={()=>handleChange("24 hour")}>24th Treding</button>
<button className="btns" onClick={()=>handleChange("Lowestrange")}>Latest</button>
<button className="btns" onClick={()=>handleChange("png")}>View</button>
<button className="btns" onClick={()=>handleChange("latest")}>New</button>
<button className="btns" onClick={()=>handleChange("name")}>Fast</button>
<button className="btns" onClick={()=>handleChange("24 hour")}>Quick</button>
<button className="btns" onClick={()=>handleChange("png")}>Early</button>
</div>


      </>
    )
}

export default Header;