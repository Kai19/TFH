import React from "react";
import Body from "./Body";
// import Header from "./Header";
import NavBar from "./NavBar";
require('../../scss/style.scss');

export default class Layout extends React.Component {
    render() {
        return (
            <div>
                <NavBar />
                <Body />
            </div>
        );
    }
}
