
import "./home.css"

const Home=()=>{

    return(
        <section className="home" id="home">
            <div className="container">
                <div className="home-data">
                    <div className="intro">
                        <div className="intro">Hello I'm</div>
                        <h1 className="name">Mustafa Ebid</h1>
                        <h3 className="jop_title">Frontend Developer</h3>                   
                    </div>

                    <div class="home_buttom">
                        <a className="download" href="./Mustafa Ebid [Front End] .docx">Download CV</a>
                        <a className="about" href="#about">About Me</a>
                    </div>
                </div>

                <div className="img-con">
                    <img src="../../../images/home.webp" alt="" />
                </div>

                <div class="home-social">
                    <a href="https://www.linkedin.com/in/mustafa-ebid-947b60212/">
                        <i class="fa-brands fa-linkedin-in"></i>
                    </a>

                    <a href="https://github.com/mustafaebidi">
                        <i class="fa-brands fa-github"></i>
                    </a>

                </div>
                <div className="home-scroll">
                    <a href="#e">
                        <i class="fa-solid fa-computer-mouse"></i>
                    </a>
                    <span>Scroll Down</span>
                </div>
            </div>  
        </section>
    )

}
export default Home