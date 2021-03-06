import React from "react";

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <div id="hero">
                    <div id="hero-overlay"></div>
                </div>
                <div className="square">
                    <div className="line-top"></div>
                    <div className="line-right"></div>
                    <div className="line-bottom"></div>
                    <div className="line-left"></div>
                    <div className="black-mask"></div>
                    <div className="text">
                        <p>&ensp; The</p>
                        <p>Fitness</p>
                        <p>&ensp; Hub</p>
                    </div>
                </div>
            </div>
        );
    }
}
