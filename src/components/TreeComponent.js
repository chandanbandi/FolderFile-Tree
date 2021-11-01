import React from "react";
import TreeNodeComponent from "./TreeNodeComponent";
import "./TreeComponent.css";

const TreeComponent = (props) => {
    const data = props.data;
    return (
        <div className="d-tree">
            <ul className="d-flex d-tree-container flex-column">
                {data.map((tree) => (
                    <TreeNodeComponent node={tree} />
                ))}
            </ul>
        </div>
    );
};


export default TreeComponent;