import React from 'react'
import "./Style.css"

export default function Slider() {
  return (
<div>
<div class="container">
  {/* <h2>Carousel Example</h2>   */}
  <div id="myCarousel" class="carousel slide" data-ride="carousel">
   
    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>
    <div className="carousel-inner">
      <div className="item active">
      
        <img className="" src="./images/banner2.jpg" alt="logo"/>
      </div>

      <div className="item">
      <img className="" src="./images/banner4.jpg" alt="logo"/>
      </div>
    
      <div className="item">
      <img className="" src="./images/banner3.jpg" alt="logo"/>

      </div>
    </div>

    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
      <span className="glyphicon glyphicon-chevron-left"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="right carousel-control" href="#myCarousel" data-slide="next">
      <span className="glyphicon glyphicon-chevron-right"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
</div>
  )
}
