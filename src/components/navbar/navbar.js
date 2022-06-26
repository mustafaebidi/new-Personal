
import { Fragment, useState } from "react"
import ToggleHeader from "../toggleHeader/toggleHeader"
import "./navbar.css"


const Navbar=()=>{
    const [stateOfUi,setToggle]=useState("hide")

    return(
        <Fragment>
            <ToggleHeader setToggle={setToggle} stateOfUi={stateOfUi}/>
            <div className="nav">
                <div className="container">
                    <div className="logo">Mustafa</div>
                    <div className="mode"></div>
                    <ul className={` ${stateOfUi === "show" ? "active" :"" }`}>
                        <li><a href="#d"><i class="fa-solid fa-house-chimney"></i></a></li>
                        <li><a href="#e"><i class="fa-solid fa-user-large"></i></a></li>
                        <li><a href="#e"><i class="fa-solid fa-book-open-reader"></i></a></li>
                        <li><a href="#f"><i class="fa-solid fa-briefcase"></i></a></li>
                        <li><a href="#f"><i class="fa-solid fa-address-book"></i></a></li>
                    </ul>
                </div>
            </div>
            
        </Fragment>

    )

}

export default Navbar