import React from "react";
import "./whatGPT3.css";
import {Feature} from "../../components";

 const whatGPT3=()=>{
    return(
    <div className="gpt3__whatgpt3 section__margin" id="whpt3">
       <div className="gpt3__whatgpt3-feature">
            <Feature title="What is GPT-3?" text=" Lorem ipsum doloam aperiam qquatur."></Feature>
       </div>
       <div className="gpt3__whatgpt3-heading">
            <h1 className="gradient__text">The Posibilities are beyond your Imagination</h1>
            <p>Explore The Library</p>
       </div>
       <div className="gpt3__whatgpt3-container">
            <Feature title="Chatbots" text=" Lorem ipsum dolor sit amet, Totam, consequatur."></Feature>
            <Feature title="KnowLedgebase" text=" Lorem ipsum dolor sit amet,uam  consequatur."></Feature>
            <Feature title="Education" text=" Lorem ipsum dolor sit asam nihil reiciendis? Totam, consequatur."></Feature>
       </div>
    </div>)
 }

 export default whatGPT3;