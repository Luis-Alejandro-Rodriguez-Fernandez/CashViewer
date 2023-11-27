import React, { Component } from "react";

class SimpleCard extends Component {
    constructor(props) {
        super(props);

        this.title = props.title ?? 'Titulo';
        this.subtitle = props.subtitle ?? 'Subititulo';
        this.color = props.color ?? "#FFFFFF";
        this.fontColor = props.fontColor ?? "#000000";
        this.done = props.done ?? 0;
        this.componentClasses = props.componentClasses ?? "flex justify-center items-center w-full";
        this.containerClasses = props.containerClasses ?? "curved-box ";
        this.dataClasses = props.dataClasses ?? "curved-box ";
        this.data = props.data ?? null;

    }

    render() {
        return (
        <div className={this.componentClasses}>
            <div className={this.containerClasses} style={{backgroundColor: this.color, color: this.fontColor}}>
                <h2 className="font-bold text-2xl">{this.title}</h2>
                <h5 className="text-xs">{this.subtitle}</h5>
                <div>
                    <span className="">{this.data}</span>
                </div>
            </div>
        </div>
        )
    }
}

export default SimpleCard;