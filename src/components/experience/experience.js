

import "./experience.css"

const skills=[
    {
        skills: ["Html","BootStarp","Css","JavaScript","Git","React"],
        title:"Front End Experience"
    }
    ,
    {
        skills:["Python","Data Structures","Sql","C++"],
        title:"Other Skills"
    }
]

const Experience=()=>{
    return(
        <section className="skills" id="skills">
            <h2 className="sec-title">Experience</h2>

            <div className="container">
                {skills.map((skill,indx)=>{

                    return(
                        <div key={(indx+8)*50} className="box">
                            <h3>{skill.title}</h3>
                            <div className="skill-container">
                                
                                {skill.skills.map((oneSkill,index)=>{
                                    return(
                    
                                            <div key={index} className="skils-info">
                                                <i class="fa-solid fa-certificate"></i>
                                                <div>{oneSkill}</div>  
                                            </div>                                        
                                        
 
                                    )
                                })}                       
                            </div>

                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Experience