import React, { Component } from "react";

export default function SimpleCard(props) {


    let title = props.title ?? 'Titulo';
    let subtitle = props.subtitle ?? 'Subititulo';
    let color = props.color ?? "#FFFFFF";
    let fontColor = props.fontColor ?? "#000000";
    let done = props.done ?? 0;
    let componentClasses = props.componentClasses ?? "flex justify-center items-center w-full";
    let containerClasses = props.containerClasses ?? "curved-box ";
    let titleClasses = props.titleClasses ?? "font-bold text-2xl";
    let subtitleClasses = props.subtitleClasses ?? "text-xs";
    let dataContainerClasses = props.dataClasses ?? "";
    let dataClasses = props.dataClasses ?? "";
    let data = props.data ?? null;

    return (
        <div className={componentClasses}>
            <div className={containerClasses} style={{ backgroundColor: color, color: fontColor }}>
                <h2 className={titleClasses}>{title}</h2>
                <h5 className={subtitleClasses}>{subtitle}</h5>
                <div className={dataContainerClasses}>
                    <span className={dataClasses}>{data}</span>
                </div>
            </div>
        </div>
    )

}