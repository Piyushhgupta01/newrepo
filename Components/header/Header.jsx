
import "./header.css";
//import bbd from "../../assets/chhhaaatboot.gif";
import bbdd from "../../assets/images.jpeg";

export const Header=()=>{
    return(
        <>
  <header className="header">
  <div className="logo-cont">
                    <img src={bbdd} alt = "logo" className="logo-bbd"/>
                    </div>
      <nav className="nav">
          <h1 className="heading">
               HUMAN SUPPORT CHATBOT
          </h1>
      </nav>
</header>
        </>
    )
}