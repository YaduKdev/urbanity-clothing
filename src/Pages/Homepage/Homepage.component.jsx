import React from "react";
import DirectoryMenu from "../../Components/DirectoryMenu/DirectoryMenu.component";
import "./Homepage.styles.scss";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Homepage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <div className="banner-container">
          <Link to="/shop">
            <img
              src={process.env.PUBLIC_URL + "/Images/banner.png"}
              className="banner"
              alt="banner"
            />
          </Link>
        </div>
        <div className="directory-menu-container">
          <DirectoryMenu />
        </div>
      </div>
    );
  }
}

export default Homepage;
