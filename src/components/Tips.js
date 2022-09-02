import React from 'react';
import siteData from '../siteData.js';
import "../styles/MainStyleSheet.css";


const TipsSection = () => {

    return (
      <section id="tips">
                 <h1>Hunters Tips</h1>
         <div className="row tips">
            {siteData.tips.map((item)=>{
              return (
              <>
              <div className="tipCard_container">
                <div className="tipCard">
                    <div className="tipCard_img" style={{ backgroundImage: `url('images/tips/${item.image}.jpg')`}}></div>
                      <div className="tipCard_text">
                        <h4>{item.title}</h4>
                        <p>{item.content.slice(0,150)}... <a href={item.url} target="_blank" rel='noopener noreferrer'>(Read more)</a></p>
                      </div> 
                    </div>
                    </div>
                </>
                )
            })}

         </div>

         <h3>Any other question? Contacts us</h3>


      </section>
    );
  }

  export default TipsSection