import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import { BsCloudArrowUpFill } from "react-icons/bs";

export const ImageUploadPreview = () => {

    const [image, setImage] = useState(false);
    const [fileName, setFileName] = useState("No selected file");

    const fileChangeHandler = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
        setFileName(e.target.files[0].name);
    };


    return (
        <div className="flex flex-col items-center">
            <h1>Image Preview</h1>
            <div>
                {image ? (
                    <div className="flex flex-col items-center">
                        <span>
                            <FaTimes
                                onClick={() => {
                                    setFileName("No selected file");
                                    setImage(null);
                                }}
                            />
                        </span>
                        <img
                            src={image}
                            alt={fileName}
                           
                            onClick={() => document.querySelector(".input-field").click()}
                        />
                        <p>{fileName}</p>
                    </div>
                ) : (
                    <div
                        className="flex flex-col items-center"
                        onClick={() => document.querySelector(".input-field").click()}
                    >
                        <BsCloudArrowUpFill size={100} />
                        <p className="file-name">Choose a file to upload</p>
                    </div>
                )}
                <input
                    type="file"
                    hidden
                    className="input-field"
                    onChange={fileChangeHandler}
                />
            </div>
        </div>
    );
} 