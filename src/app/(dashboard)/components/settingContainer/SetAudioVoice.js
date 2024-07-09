import LockOutlined from "@mui/icons-material/LockOutlined";
import CustomSelect from "../common/dropdown/Dropdown";
import SelectButton from "../common/selectButton/SelectButton";
import { list } from "../common/dropdown/data";
import { useState } from "react";

const SetAudioVoice = () => {
    const [options] = useState(list);
    const [val, setVal] = useState("");
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>Audio Voice</p>
                <p className='text-[14px] text-[gray]'>Select which voice you'd like to hear to when listening to an article</p>
            </div>
            <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[600] mb-3 pt-4'>
                    Select Voice&nbsp;&nbsp;&nbsp;
                        <span><LockOutlined fontSize="15" /></span>
                    </p>
                    <CustomSelect
                        value={val}
                        onChange={setVal}
                        options={options}
                        placeholder="Voice #1"
                        radius="lg"
                    />
                </div>
                <div>
                    <p className='text-[16px] font-[600] mb-3 pt-4'>
                    Audio Language&nbsp;&nbsp;&nbsp;
                        <span><LockOutlined fontSize="15" /></span>
                    </p>
                    <CustomSelect
                        value={val}
                        onChange={setVal}
                        options={options}
                        placeholder="English"
                        radius="lg"
                    />
                </div>
                <div>
                    <p className='text-[16px] font-[600] mb-3 pt-4'>
                    Playback Speed&nbsp;&nbsp;&nbsp;
                        <span><LockOutlined fontSize="15" /></span>
                    </p>
                    <SelectButton content="&nbsp;&nbsp;1.0x&nbsp;&nbsp;" />
                </div>
            </div>
        </div>
    );
}

export default SetAudioVoice;