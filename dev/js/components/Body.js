import React from "react";

export default class Body extends React.Component {
    render() {
        return (
            <div>
                <div className="square">
                    <div className="line-top"></div>
                    <div className="line-right"></div>
                    <div className="line-bottom"></div>
                    <div className="line-left"></div>
                    <div className="black-mask"></div>
                    <div className="text">
                        <p>Fitness is Personal</p>
                    </div>
                </div>
            </div>
        );
    }
}
