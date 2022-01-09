import React, { useState, useEffect } from "react";
// import styled from "styled-components";
import Data from "./data.json";
import "./Card.css";
function Card() {
  const [likes, setlikes] = useState(109);
  var count;
  const incNum = (incNum) => {
    setlikes((prevState) => prevState + incNum);
  };

  useEffect(() => {
    window.localStorage.setItem("likes", likes);
  }, [likes]);
   window.onload = function () {
    UserViews();
  };

  function UserViews() {
    fetch("https://api.countapi.xyz/update/project.com/8wq/?amount=1")
      .then((res) => res.json())
      .then((res) => {
        document.getElementById("count").innerHTML = res.value;
      });
  }

  return (
    <div>
      <div class='Cards'>
        <div class='CardUserContent'>
          {Data.map((post) => {
            return (
              <>
                <img class='CardImage' src={post.img} alt=""></img>
                <div class='CardUserDetails'>
                  <p class='CardUserName'> {post.name}</p>
                  <p class='CardDescription'>
                    {post.content}
                    <br></br>
                    1d | SanFrancisco
                  </p>

                  <p class='CardTimePlace'></p>
                </div>
                
              </>
            
            );
          })}
          </div> 
        <div class='CardContent'>
          <p class='CardTitle'>The concept of Research: A cross-cultural study</p>
          <p class='CardContentdesc'>
            Oxford Nanopore has pulled in $100m from investor in the
            Asia-pacific region, as it complete a funding round that values the
            fast-grouwing UK biotechnology company at $1.5bn.
          </p>
        </div>
        <div class='CardInteraction'>
         <div class='CardCount'>
             <div id="count">0</div> Views | {likes} Likes | 22 Comments | 7 Shares
         </div> 
          <div class='CardBottom'>
             <button class='CardLike' onClick={() => incNum(1)}>Like</button>
             <button class='CardComment'  onClick={'getIputValue();','placeholder',() => incNum(1)}>Comment</button> 
           <button class='CardShare' onClick={() => incNum(1)}>Share</button>
         </div> 
        </div>
      </div>
    </div>
  );
}

export default Card;
