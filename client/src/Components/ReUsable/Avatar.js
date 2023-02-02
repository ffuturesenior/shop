import React from "react";
import img from '../../static/b478a67b9f6bcd4841762c352f9e494e.jpeg'

const Avatar=({isBig})=>{

    return(
        <>
        {isBig?
            <div className="bg-light"  style={{borderRadius:'90px',border:'1px solid black',height:"80px",width:'80px',position:'relative',overflow:'hidden'}}>
                <img style={{position:"absolute",left:"0px",height:"100%",width:"100%",objectFit:"cover"}}  src={require("../../static/b478a67b9f6bcd4841762c352f9e494e.jpeg")} width="300"/>    
            </div>
        :
            <div className="bg-light" style={{borderRadius:'90px',border:'1px solid black',height:"40px",width:'40px',position:'relative',overflow:'hidden'}}>
                <img style={{position:"absolute",left:"0px",height:"100%",width:"100%",objectFit:"cover"}}  src={require("../../static/b478a67b9f6bcd4841762c352f9e494e.jpeg")} width="300"/>
            </div>
        }
            
        </>
        
    )
}

export default Avatar