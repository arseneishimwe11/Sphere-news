import LockOutlined from "@mui/icons-material/LockOutlined";
import CustomSelect from "../common/dropdown/Dropdown";
import { list } from "../common/dropdown/data";
import { useState } from "react";

const SetGeneral = () => {
    const [options] = useState(list);
    const [langVal, setLangVal] = useState("");
    const [summaryVal, setSummaryVal] = useState("");
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>General</p>
                <p className='text-[14px] text-[gray]'>Manage your unique experience</p>
            </div>
            <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[600] mb-3'>
                        Language&nbsp;&nbsp;&nbsp;
                        <span><LockOutlined fontSize="15" /></span>
                    </p>
                    <CustomSelect
                        value={langVal}
                        onChange={setLangVal}
                        options={options}
                        placeholder="English"
                        radius="lg"
                        zIndex={true}
                    />
                </div>
                <div className="mt-6">
                    <p className='text-[18px] font-[600] mb-3'>
                        Summary Length
                    </p>
                    <p className='text-[14px] text-[gray] mb-3'>
                        Select how long the summary should be
                    </p>
                    <CustomSelect
                        value={summaryVal}
                        onChange={setSummaryVal}
                        options={options}
                        placeholder="Medium (default)"
                        radius="lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default SetGeneral;