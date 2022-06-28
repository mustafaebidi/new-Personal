


import "./about.css"

const head=[
    {   
        head:"Experence",
        icon:"stamp",
        info:"1+ Years Working"
    }
    ,
    {
        head:"Completed",
        icon:"clipboard-list",
        info:"12+ project"
        
    }
    ,

    {
        head:"Support",
        icon:"headset",
        info:"24/7"
        
    }
]

const About=()=>{
    return(
        <div className="about" id="about">
            <h2 className="sec-title">About</h2>
            <div className="container">
                <div className="img-con">
                    <img src="../../../images/about.webp" alt=""/>
                </div>

                <div className="info">
                    <div className="head">
                        {head.map(({head,icon,info})=>{
                            return(
                                <div className="box">
                                    <i class={`fa-solid fa-${icon}`}></i>
                                    <h3>{head}</h3>
                                    <p>{info}</p>
                                </div>
                            )
                        })}
                    </div>
                    <p>Frontend Developer,i create Web pages with ui/ux I do my job to the best of my ability 
                    I don't have much experience I promise you that you like my work</p>
                </div>
            </div>
        </div>
    )
}

export default About