import { credibleCards } from "@/data/credible";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Padding } from "maplibre-gl";
const colorArr=["#8bf0ba","#94f0f1","#c2dde6","#acb7ae","#DCC7AA","#f9c5bd","#acddde","#caf1de","#E9FF80","#96C2DB","#E5EDF1","#EFFAFD","#106EBE","#0FFCBE","#178582","#1D63FF","#FFCE32","#A0006D"];

export default function Credible() {
  return (  
    <section className="blog-area fix">
        {credibleCards.map((card, index) => (
      <div
        className={`blog-wrap style1 space-top pb-425 margin${card.contentAlign}`}
        style={{ background: "url(/assets/img/credible/image"+(index+1)+".png) no-repeat center center fixed",borderTop:"5px solid",borderColor:colorArr[index], backgroundSize: 'cover'}}
      >
        <div className={`container margin${card.tagAlign}`}>
          <div className={`title-area mx-auto blog-card border${card.tagAlign}`} style={{backgroundColor:colorArr[index],opacity:"0.7"
          }}>
            <h2
              className="title mb-50 wow fadeInUp align"
              style={{color:"black"}}
              data-wow-delay=".3s"
              style={{textAlign:"center"}}
            >
              {'"'}{card.tagline} {'"'}
            </h2>
          </div>
          <div className="blog-card-wrap style1">
           
              <div
                className={`blog-card style1 img-shine wow fadeInUp  border${card.contentAlign}`}
                data-wow-delay={card.delay}
                key={index}
              >               
                <div className="blog-card-body">
                  <h3 className="blog-title style1" 
                  // style={{textAlign: card.contentAlign}}
                  >
                  {card.title}
                  </h3>
                  <h5 className="blog-text style1">
                  {card.description}
                  </h5>
                  <div className="btn-wrapper" Padding= "0 0 50px 0">
                    <Link scroll={false} href={`/blog-details/${card.id}`}>
                      Read More
                      <Image
                        alt="icon"
                        width="16"
                        height="16"
                        src="/assets/img/icon/arrowIconDark.png"
                      />
                    </Link>
                  </div>
                  {/* <div className="calendar">
                    <div className="date">{card.date}</div>
                    <div className="month">{card.month}</div>
                  </div> */}
                </div>
              </div>
        
          </div>
        </div>
      </div>
      
        ))}

<div className="hero-sub-title">
 <h2
 className="title2" style={{width:"60%",marginLeft:"20%",marginRight:"20%",fontSize:"40px",color:"b",lineHeight:"2",textAlign:"center",marginBottom:"50px",marginTop:"50px",fontWeight:"600",textTransform:"capitalize"}}
 data-ani="slideindown"
 data-ani-delay="0.2s"
>
 {"Experience the Power of Innovation in Action"}
</h2>
</div>
    </section>
      
  );
}
