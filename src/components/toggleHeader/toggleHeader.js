
import ReactDOM from 'react-dom';
import "./toggleHeader.css"
const toggleHeader=document.getElementById("toggle-header")

const elementsToggle=[
    {
        jop:"show",
        element:"eye-slash"

    },
    {
        jop:"hide",
        element:"eye"
    }
]

const ToggleHeader=({setToggle,stateOfUi})=>{


    const handleToggle=()=>{
        setToggle((state)=>{
            if(state === "show"){
                return "hide"
            }
            else{
                return "show"
            }
        })
        
    }

    let toggle=(
        <div className='main-toggle' onClick={handleToggle}>
            {elementsToggle.map((element,inedx)=>{
                return(
                    <i key={inedx} className={`fa-solid fa-${element.element} ${element.jop} ${stateOfUi === element.jop ?"active" :"" }`}></i>
                )
            })}
        </div>
    )
    return(
        ReactDOM.createPortal(toggle,toggleHeader)
    )
}

export default ToggleHeader