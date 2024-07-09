import './Dropzone.css';

const handleFiles = (files) =>{

}

const validateFile = (file) => {
    const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/x-icon'];
    if (validTypes.indexOf(file.type) === -1) {
        return false;
    }
    return true;
}
const Dropzone = () => {
    const dragOver = (e) => {
        e.preventDefault();
    }
    
    const dragEnter = (e) => {
        e.preventDefault();
    }
    
    const dragLeave = (e) => {
        e.preventDefault();
    }
    
    const fileDrop = (e) => {
        e.preventDefault();
        const files = e.dataTransfer.files;
        console.log(files);
        if (files.length) {
            handleFiles(files);
        }
    }
    return (
        <div className="container">
            <div className="drop-container"
                onDragOver={dragOver}
                onDragLeave={dragLeave}
                onDragEnter={dragEnter}
                onDrop={fileDrop}
            >
                <div className="drop-message">
                    <div className="upload-icon">watatata</div>
                    Drag & Drop files here or click to upload
                </div>
            </div>
        </div>
    )
}

export default Dropzone;