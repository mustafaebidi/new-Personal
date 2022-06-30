
import { Fragment, useCallback, useEffect, useState } from "react"
import ToggleHeader from "../toggleHeader/toggleHeader"
import "./navbar.css"




const navLinks=[
    {
        href:"home",
        icon:"fa-house-chimney"
    },
    {
        href:"about",
        icon:"fa-user-large"
    },
    {   
        href:"skills",
        icon:"fa-book-open-reader"
    },
    {
        href:"works",
        icon:"fa-briefcase"

    },
    {
        href:"contact",
        icon:"fa-address-book"
    }
]

const Navbar=()=>{
    const [stateOfUi,setToggle]=useState("hide")
    const [activeLink,setActiveLink]=useState(0)




    const handleScroll=useCallback(()=>{
        const sections=document.querySelectorAll("#root > section")

        sections.forEach((element,index) => {
            if (window.pageYOffset >= element.offsetTop && window.pageYOffset < (element.getBoundingClientRect().height + element.offsetTop)) {
                setActiveLink(index)
            }

        });


    },[])


    useEffect(()=>{

        window.addEventListener('scroll',handleScroll)

        return()=>{
            window.removeEventListener('scroll', handleScroll);
        }

    },[handleScroll])

    return(
        <Fragment>
            <ToggleHeader setToggle={setToggle} stateOfUi={stateOfUi}/>
            <div className="nav">
                <div className="container">
                    <div className="logo">Mustafa</div>
                    <div className="mode"></div>
                    <ul className={` ${stateOfUi === "show" ? "active" :"" }`}>
                        
                        {navLinks.map((item,index)=>{
                            return(
                                <li key={index} className={`${activeLink === index ? "active" :"" }`} onClick={()=>setActiveLink(index)}><a href={`#${item.href}`}><i class={`fa-solid ${item.icon}`}></i></a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </Fragment>

    )

}

export default Navbar