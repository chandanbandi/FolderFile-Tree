import React from "react";
import TreeComponent from "./TreeComponent";

const treeData = [
    {
        "name": "file 1",
        "type": "text",
        "childrens": []
    },
    {
        "name": "folder 1",
        "type": "folder",
        "childrens": [
            {
                "name": "folder 1 file 1",
                "type": "text",
                "childrens": []
            },
            {
                "name": "folder 1 file 2",
                "type": "text",
                "childrens": []
            },
            {
                "name": "folder 1 folder 1",
                "type": "folder",
                "childrens": [
                    {
                        "name": "folder 1 folder 1 file 1",
                        "type": "text",
                        "childrens": []
                    },
                    {
                        "name": "folder 1 folder 1 file 2",
                        "type": "text",
                        "childrens": []
                    }
                ]
            }
        ]
    },
    {
        "name": "folder 2",
        "type": "folder",
        "childrens": []
    },
    { "name": "image 1", "type": "image" }
];

function TreeViewComponent() {
    return (
        <>
            <div className="container-fluid">
                <h1 className="text-center">Folder/File Tree</h1>
                <div className="mt-3">
                    <div className="row mt-3 d-flex justify-content-center">
                        <div className="col text-left text-dark">
                            <TreeComponent data={treeData} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TreeViewComponent;