import React, { useState } from "react";
import TreeComponent from "./TreeComponent";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFolder, faFile } from '@fortawesome/free-solid-svg-icons';
import "./TreeNodeComponent.css";

function TreeNodeComponent({ node }) {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = node.childrens ? true : false;


    const handleVisibility = function (e) {
        setChildVisiblity((v) => !v);
    };


    return (
        <li className="d-tree-node">
            <div className="d-flex" onClick={(e) => handleVisibility(e)}>
                {hasChild && (node.childrens.length > 0) && (
                    <div
                        className={`d-inline d-tree-toggler ${hasChild && childVisible  ? "active" : ""
                            }`}
                    >
                    </div>
                )}

                <div className="col d-tree-head">
                    <span className="d-inline-block mx-1">
                    {(node.type === "folder") && (<FontAwesomeIcon icon={faFolder} />)}
                    {(node.type === "text") && (<FontAwesomeIcon icon={faFile} />)}
                    </span>
                    {node.name}
                </div>
            </div>

            {hasChild && childVisible && (node.childrens.length > 0) && (
                <div className="d-tree-content">
                    <ul className="d-flex d-tree-container flex-column">
                        <TreeComponent data={node.childrens} />
                    </ul>
                </div>
            )}
        </li>
    );
}

export default TreeNodeComponent;