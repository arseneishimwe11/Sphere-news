import { useState } from "react";

const ToggleSwitch = () => {
    const [val, setVal] = useState(0);
    return (
        <div className="w-[65px] h-[35px] border border-solid p-[2px] rounded-md" style={val === 0 ? {backgroundColor: 'black'} : {backgroundColor: 'gray'}}>
            <div className="relative flex flex-row justify-between h-full items-center cursor-pointer" onClick={() => setVal(1-val)}>
                <p className="w-1/2 text-[13px] text-white text-center">On</p>
                <p className="w-1/2 m-auto text-white text-center">Off</p>
                <div
                    className="rounded-md absolute bg-white w-1/2 text-[13px] h-full  transition-all duration-300"
                    style={{marginLeft: `${50 * val}%` }}
                ></div>
            </div>
        </div>
    );
}

export default ToggleSwitch;