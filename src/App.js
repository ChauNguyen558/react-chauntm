import React from "react";
import "./style.css";

function MastHeadContainer(){
  return(
    <div id="masthead-container" className="flex-box">
      <div id="tab-main"  className="flex-box w70">
        <div id="add-new">
          <button type="button" className="btn btn-sm btn-danger btn-addNew">New</button>
        </div>
        <div id="tab-title">
          <h4>Library Cube</h4>
        </div>
      </div>
      <div id="tab-tools" className="flex-box w10">
        <a href="#" id="btn-your-cart">
          <i className="fa fa-shopping-cart" aria-hidden="true"></i>
        </a>
        <a id="list-apps" >
          <i className="fa fa-list" aria-hidden="true"></i>
        </a>
        <a id="img-account">
          <i className="fa fa-user-circle-o" aria-hidden="true"></i>
        </a>
      </div>
    </div>
  )
}
function HomePageLeft() {
    return(
      <div id="home-page-left">
        <h4>Your category</h4>
        <div className="mb-10">
          <input type="text" className="form-control input-search" placeholder="&#xf002; Type for searching" aria-label="Type for searching" aria-describedby="basic-addon1"/>
        </div>
        <button type="button" className="btn btn-outline-warning" id="btn-addCate">+ Add category</button>
        <div className="list-category mt-10" id="listCategory">
          <ListCategory title="No Category" name1="Lesson 01" name2="Lesson 02" name3="Lesson 03"/>
          <ListCategory title="B1 week 1 04/2020" name1="Lesson 01" name2="Lesson 02" name3="Lesson 03"/>
          <ListCategory title="B1 week 2 04/2020" name1="Lesson 01" name2="Lesson 02" name3="Lesson 03"/>
        </div>
      </div>
    )
}
function ListCategory(props){
  return(
    <div className="display-content">
      <h4 className="display-text">{props.title}</h4>
      <div className="category-item"><a className="item"  href="#">{props.name1}</a></div>
      <div className="category-item"><a className="item"  href="#">{props.name2}</a></div>
      <div className="category-item"><a className="item"  href="#">{props.name3}</a></div>
    </div>
  )
}
function FreeSource(props){
  return(
    <div className="content-item">
      <div className="vid-desc">
        <a href="#" target="_blank">
          <img className="img-vid" src={props.source} alt={props.alt} />
        </a>
        <p className="vid-name pd-10">{props.name}</p>
        <a className="vid-btn-apply item-active mb-10" href="#"><span>GET</span></a>
      </div>
    </div>
    
  )
}
function HomePageRight(){
  return(
    <div id="home-page-right">
      <div id="page-right__tab-header" className="page-right__tab-header mb-10">
        <div className="header-item"><a className="item-active" href="#"><p>Free</p></a></div>
        <div className="header-item"><a href="#"><p>For you</p></a></div>
        <div className="header-item"><a href="#"><p>Most popular</p></a></div>
      </div>
      <div id="page-right-content">
        <div id="seasonalResouce">
          <h4 className="display-text">Seasonal Resources</h4>
          <FreeSource name="Back to school" alt="Back to school" source="https://i.ytimg.com/vi/LZJFr0jVp9I/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDCKfx1CSDE8P5sV_BDnq1nI87qdA" />
          <FreeSource name="Maybay" alt="Maybay" source="https://i.ytimg.com/vi/Dy9ojlR72TM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCMKB6w4wxtWTBztp7Akfpz8ifNfA"/>
          <FreeSource name="Valentine's Day" alt="Valentine's Day" source="https://i.ytimg.com/vi/vi7G4z6D0fM/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCOt71-K-kIgGb5FGzV85lel0cfRg"/>
          <FreeSource name="Poetry Day" alt="Poetry Day" source="https://i.ytimg.com/vi/PbbITRFPI6E/hq720.jpg?sqp=-oaymwEZCNAFEJQDSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBbueAKQ_TmV01P-kibAIllwmng3Q"/>
        </div>
        <div id="PrimaryResouce">
          <h4 className="display-text">Primary Resources</h4>
          <FreeSource name="Back to school"  alt="Back to school" source="https://i.ytimg.com/vi/5R3WdBE1-JM/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAniQk4sqA21u03G97ikI6rvWLKFA"/>
          <FreeSource name="Maybay" alt="Maybay" source="https://i.ytimg.com/vi/gu_GfdJpdsA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBpeNo9JsQ8Jx1Jn_6V5vq3AHkzLw"/>
          <FreeSource name="Valentine's Day" alt="Valentine's Day" source="https://i.ytimg.com/vi/gJ0BSnuX1GA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBkBtS2ibE_jyyyz9yHtWWNLYL5Ow"/>
          <FreeSource name="Poetry Day" alt="Poetry Day" source="https://i.ytimg.com/vi/2USh8OmgiJE/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLA4SudxA0xf26ty35vxVgTpfGSX7Q"/>
        </div>
        <div id="AdultResouce">
          <h4 className="display-text">Adult Resources</h4>
          <FreeSource name="Back to school"  alt="Back to school" source="https://i.ytimg.com/vi/D9tTi-CDjDU/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLDoMr1VY6w3iQdIQR9V_N5cFiFpUQ"/>
          <FreeSource name="Maybay" alt="Maybay" alt="Poetry Day" source="https://i.ytimg.com/vi/8_KWmzLObQ4/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLAozB-LN4iIJz_9T-fuaqgAzKwL0A "/>
          <FreeSource name="Valentine's Day" alt="Valentine's Day" source="https://i.ytimg.com/vi/vvtPJKWUb2g/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD_2ZIRu7Pww1VQPMbiXYJV8MKDIw"/>
          <FreeSource name="Poetry Day" source="https://i.ytimg.com/vi/N5vJSNXPEwA/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD16P2-tv6YY_1z4L_PIxbNbc_c2A"/>
        </div>
      </div>
    </div>
  )
}
  
export default function App(props) {
  return (
    <div className="page-container">
      <MastHeadContainer/>
      <div id="home-container">
        <HomePageLeft/>
        <HomePageRight/>
      </div>
    </div>
  );
}
