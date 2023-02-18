import React from "react";
import "./header.css";
import people from "../../assets/people.png";
import ai from "../../assets/ai.png";


 const Header=()=>{
    return(
    <div className="gpt3__header section__padding" id="home">
       <div className="gpt3__header-content">
            <h1 className="gradient__text">
                Let's Built Something amazing  with GPT-3 OpenIA
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus repudiandae dolorum recusandae, accusantium quis optio aliquam magnam a mollitia doloremque culpa consectetur, dolores quam nisi neque! Tempore, culpa? Saepe, explicabo?</p>
            
            <div className="gpt3__header-content__input">
                <input type="email"  placeholder="Your Email Address"/>
                <button type="button">Get Started</button>
            </div>
            
            <div className="gpt3__header-content__people">
                <img src={people} alt="people" />
                <p>1.600  people requested access a visit in las 24 hours</p>
            </div>
            
       </div>
            <div className="gpt3__header-image">
                <img src={ai} alt="ai"  />
            </div>
    </div>)
 }

 export default Header;