import CustomSelect from "../common/dropdown/Dropdown";
import { list } from "../common/dropdown/data";
import { useState, useMemo } from "react";
import TimezoneSelect, { allTimezones } from 'react-timezone-select';
import spacetime from 'spacetime';

const SetEmailFrequency = () => {
    const [options] = useState(list);
    const [val, setVal] = useState("");

    const [tz, setTz] = useState(
        Intl.DateTimeFormat().resolvedOptions().timeZone
    );
    const [datetime, setDatetime] = useState(spacetime.now());

    useMemo(() => {
        const tzValue = tz.value ?? tz;
        setDatetime(datetime.goto(tzValue));
    }, [tz]);
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>Email Frequency Settings</p>
                <p className='text-[14px] text-[gray]'>Configure how often you'd like to receive eamil new updates</p>
            </div>
            <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl items-center gap-8'>
                <div>
                    <p className='text-[16px] font-[600] mb-3'>
                        Recieve updates every
                    </p>
                    <div className="flex flex-row">
                        <div className="flex flex-col sm:flex-row justify-between flex-1 items-start sm:items-center">
                            <div className="my-3 w-full sm:w-auto">
                                <CustomSelect
                                    value={val}
                                    onChange={setVal}
                                    options={options}
                                    placeholder="15min"
                                    radius="md"
                                />
                            </div>
                            <div className="w-[30px]"></div>
                            <TimezoneSelect
                                value={tz}
                                onChange={setTz}
                                labelStyle="altName"
                                timezones={{
                                    ...allTimezones,
                                    "America/Lima": "Pittsburgh",
                                    "Europe/Berlin": "Frankfurt"
                                }}
                            />
                        </div>
                        <div className="w-[50px] hidden sm:block"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SetEmailFrequency;