import LockOutlined from "@mui/icons-material/LockOutlined";
import SelectButton from "../common/selectButton/SelectButton";

const SetWidgetVisibility = () => {
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>Widget Visibility</p>
                <p className='text-[14px] text-[gray]'>Toggle Story Page widget visibility</p>
            </div>
            <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[600] mb-3'>
                        Select Widget&nbsp;&nbsp;&nbsp;
                        <span><LockOutlined fontSize="15" /></span>
                    </p>
                    <div className='flex flex-col xl:flex-row gap-4'>
                        <div className="flex flex-col md:flex-row gap-4">
                            <SelectButton content="Coverage Details" />
                            <SelectButton content="Bias Distribution" />
                            <SelectButton content="Factuality" />
                        </div>
                        <div className="flex flex-col md:flex-row gap-4">
                            <SelectButton content="Ownership" />
                            <SelectButton content="Country" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetWidgetVisibility;