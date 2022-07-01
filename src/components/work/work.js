
import "./work.css"


const works=[

        {
            src:"snake",
            title:"snake",
            type:"game",
            link:{
                live:"https://snaakee-gaame.netlify.app",
                github:"https://github.com/mustafaebidi/Snake-Game"
            }
        },

        {
            src:"quiz",
            title:"quiz",
            type:"app",
            link:{
                live:"https://quiz-app-5app.netlify.app",
                github:"https://github.com/mustafaebidi/Quiz-App"
            }
        },

        {
            src:"digimedia",
            title:"DigiMedia",
            type:"Website",
            link:{
                live:"https://websitee-js.netlify.app",
                github:"https://github.com/mustafaebidi/Website-js-css-html"
            }
        }
        ,
        {
            src:"XO",
            title:"XO",
            type:"game",
            link:{
                live:"https://xo-game-game1.netlify.app/",
                github:"https://github.com/mustafaebidi/XO-Game"
            }
        },
        {
            src:"anlog",
            title:"anlog",
            type:"app",
            link:{
                live:"https://anlog.netlify.app",
                github:"https://github.com/mustafaebidi/Anlog/tree/main"
            }
        },
        {
            src:"store-management",
            title:"store management",
            type:"app",
            link:{
                
                live:"https://s-tote-management.netlify.app",
                github:"https://github.com/mustafaebidi/Sore-Management"
            }
        },

        {
            src:"todo-list",
            title:"ToDo List",
            type:"app",
            link:{
                live:"https://to-do-list-project-two.netlify.app",
                github:"https://github.com/mustafaebidi/ToDoList"
            }
        },


        
        {
            src:"e-commerce",
            title:"E-commerce",
            type:"app",
            link:{
                live:"https://shopping-card12.netlify.app",
                github:"https://github.com/mustafaebidi/modern_shopingcart"
            }
        }
        ,
        
        {
            src:"memory-game",
            title:"Memory Game",
            type:"Game",
            link:{
                live:"https://1-memory-game-1.netlify.app",
                github:"https://github.com/mustafaebidi/memory-game-"
            }
            
        }
        ,
        {
            src:"shopping-card",
            title:"Shopping Card",
            type:"app",
            link:{
                live:"https://shoppingg-cardd.netlify.app",
                github:"https://github.com/mustafaebidi/memory-game-"
            }
            
        }

        ,
        {
            src:"الصفا",
            title:"الصفا",
            type:"Website",
            link:{
                live:"https://safa-website.netlify.app",
                github:"https://github.com/mustafaebidi/Safa-website"
            }
        }

        ,

        {
            src:"speed-writing",
            title:"Writing Speed",
            type:"Game",
            link:{
                live:"https://sspeed-tttest.netlify.app",
                github:"https://github.com/mustafaebidi/writing_speed_test"
            }
        },

        {
            src:"calc-writing",
            title:"Calc Writing Speed",
            type:"app",
            link:{
                live:"https://calc-speed.netlify.app",
                github:"https://github.com/mustafaebidi/Calculate-Write-Speed"
            }
        }
    ]



const Work=()=>{

    return(
        <section className="works" id="works">
            <h2 className="sec-title">Work</h2>
            <div className="container-fluid">
                {works.map((work,index)=>{
                    return(
                        <div className="box" key={index}>
                            <div className="img-con">
                                <img src={`../../../images/${work.src}.webp`} alt=""/>
                            </div>
                            <div className="source">

                                <a className="github" href={`${work.link.github}`}>
                                    <i className="fa-brands fa-github"></i>
                                </a>

                                <a className="live" href={`${work.link.live}`}>
                                <i className="fa-solid fa-eye"></i>
                            </a>
                            </div>
                        </div>
                    )

                })}
            </div>
        </section>
    )



}

export default Work;