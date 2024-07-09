import LockOutlined from "@mui/icons-material/LockOutlined";
import CustomSelect from "../common/dropdown/Dropdown";
import { list } from "../common/dropdown/data";
import { useState } from "react";

const SetTemplateHomepage = () => {
    const [options] = useState(list);
    const [val, setVal] = useState("");
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>Homepage</p>
                <p className='text-[14px] text-[gray]'>Select which page you want to use as the default homepage</p>
            </div>
            <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl items-center'>
                <div>
                    <p className='text-[16px] font-[600] mb-3'>
                        Homepage&nbsp;&nbsp;&nbsp;
                        <span><LockOutlined fontSize="15" /></span>
                    </p>
                    <CustomSelect
                        value={val}
                        onChange={setVal}
                        options={options}
                        placeholder="Show the Template Homepage"
                        radius="lg"
                    />
                </div>
            </div>
        </div>
    );
}

export default SetTemplateHomepage;