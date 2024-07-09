import { useState } from "react";

const SelectButton = (props) => {
    const { content } = props;
    const [isSelected, setIsSelected] = useState(false);
    const selected = () => {
        setIsSelected(!isSelected);
    };
    return (
        <button onClick={selected} 
            className={`${isSelected ? 'bg-gray-100' : 'bg-white'} border border-solid rounded-md`}
        >
            <p className="px-4 py-2 text-[13px]">
                {content}
            </p>
        </button>
    );
}

export default SelectButton;