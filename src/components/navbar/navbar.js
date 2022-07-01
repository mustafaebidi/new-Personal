
import { Fragment, useCallback, useEffect, useState } from "react"
import ToggleHeader from "../toggleHeader/toggleHeader"
import "./navbar.css"

const click = new Audio('../../../audio/Mouse Click 01.mp3');



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



    const checkReachSection=(section)=>{
        if(window.pageYOffset >= section.offsetTop && window.pageYOffset < (section.getBoundingClientRect().height + section.offsetTop)){
            return true

        }
        return false

    }

    const handleScroll=useCallback(()=>{
        const sections=document.querySelectorAll("#root > section")

        sections.forEach((section,index) => {
            if (checkReachSection(section)) {
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
                    <ul className={` ${stateOfUi === "show" ? "active" :"" }`}>
                        
                        {navLinks.map((item,index)=>{
                            return(
                                <li key={index} className={`${activeLink === index ? "active" :"" }`} onClick={()=>{
                                    click.play()
                                    setActiveLink(index)}}><a href={`#${item.href}`}><i className={`fa-solid ${item.icon}`}></i></a></li>
                            )
                        })}
                    </ul>
                </div>
            </div>
            
        </Fragment>

    )

}

export default Navbar