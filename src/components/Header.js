import "../css/Header.css"
import Logo from "../images/logo.png"

export default function Header() {


    return ( 
        <div className = "header--container" >

        <header>
            <nav>

            <img src={Logo} alt="" className="header--logo"/>

            <ul className="nav--menu">
                <li>Home</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>

               <button className= "btn "  id="menu-btn" >
               <span className="hamburger-top"> </span>
               <span className="hamburger-mid"></span>
               <span className="hamburger-bottom"></span>
               </button>
              

            </nav>

            <ul className="hamburger--menu hidden" id="menu">
                <li>Home</li>
                <li>Pricing</li>
                <li>About</li>
                <li>Blogs</li>
                <li>Contact</li>
            </ul>

        </header>

    
   </div>
    )   
    
    

}