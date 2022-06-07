import "../css/Header.css";
import Logo from "../images/huddlenepal.png";

export default function Header() {
  const btn = document.getElementById("menu-btn");
  const nav = document.getElementById("menu");

  // btn.addEventListener("click", function () {
  //   nav.classList.toggle("flex");
  //   nav.classList.toggle("hidden");
  // });

  return (
    <div className="header--container">
      <header>
        <nav>
          <img src={Logo} alt="" className="header--logo" />

          <ul className="nav--menu">
            <li>Home</li>
            <li>Pricing</li>
            <li>About</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>

          <div className="nav--toggler" id="menu-btn">
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </nav>

        <ul className="mobile--menu hidden" id="menu">
          <li>Home</li>
          <li>Pricing</li>
          <li>About</li>
          <li>Blogs</li>
          <li>Contact</li>
        </ul>
      </header>
    </div>
  );
}
