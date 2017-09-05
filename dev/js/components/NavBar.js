import React from "react";

export default class NavBar extends React.Component {
  render() {
    return (
      <nav id="primary_nav_wrap">
        {/* <span id="logo"> LOGO</span> */}
        <ul>
          <li className="current-menu-item"><a href="#">Home</a></li>
          <li><a href="#">About Us</a>
            <ul>
              <li><a href="#">Our Story</a></li>
              <li><a href="#">Our Team</a>
                <ul>
                  <li><a href="#">Founders</a></li>
                  <li><a href="#">Teachers</a></li>
                </ul>
              </li>
            </ul>
          </li>
          <li><a href="#">Classes</a>
            <ul>
              <li><a href="#">Strength</a></li>
              <li><a href="#">Cardio</a></li>
              <li><a href="#">Group Classes</a></li>
            </ul>
          </li>
          <li><a href="#">Rates</a>
            {/* <ul>
              <li className="dir"><a href="#">Sub Menu 1</a></li>
              <li className="dir"><a href="#">Sub Menu 2 THIS IS SO LONG IT MIGHT CAUSE AN ISSEUE BUT MAYBE NOT?</a>
                <ul>
                  <li><a href="#">Category 1</a></li>
                  <li><a href="#">Category 2</a></li>
                  <li><a href="#">Category 3</a></li>
                  <li><a href="#">Category 4</a></li>
                  <li><a href="#">Category 5</a></li>
                </ul>
              </li>
              <li><a href="#">Sub Menu 3</a></li>
              <li><a href="#">Sub Menu 4</a></li>
              <li><a href="#">Sub Menu 5</a></li>
            </ul> */}
          </li>
          <li><a href="#">Locations</a></li>
          <li><a href="#">Contact Us</a></li>
        </ul>
        <span><a id='buy' href='#'>BOOK/BUY</a></span>
      </nav>
    );
  }
}
