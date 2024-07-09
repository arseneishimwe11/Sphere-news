'use client'

import { useState } from "react";
import { useFormInput } from "./useFormInput";
import { CountryField, StateField, VisitorAPIComponents } from "react-country-state-fields";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchableDropdown from "../common/searchableDropdown/SearchableDropdown";
import { animals } from "../common/searchableDropdown/data/animals";
import "../common/searchableDropdown/styles.css";

const AccountDetail = () => {
    const firstNameProps = useFormInput();
    const lastNameProps = useFormInput();
    const onSubmit = (e) => {
        e.preventDefault();
    }
    const [country, setCountry] = useState({ code: "", label: "" }); // the selected country
    const [state, setState] = useState({ code: "", label: "" }); // the selected state
    const visitorApiPrjectId = ""; // assign your project ID here

    const [countryValue, setCountryValue] = useState("");
    const [stateValue, setStateValue] = useState("");

    const [selectedImage, setSelectedImage] = useState(null);

    const [change, setChange] = useState(false);
    return (
        <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
            <div className='w-full sm:w-[30%]'>
                <p className='text-[17px] font-[600] my-4'>Details</p>
                <p className='text-[14px] text-[gray]'>Edit your account information, here</p>
            </div>
            <div className='w-full sm:w-[70%] border border-solid p-2 rounded-2xl items-center'>
                <form>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            First Name
                        </p>
                        <input
                            placeholder="First Name"
                            className="border border-solid rounded-xl w-full p-3"
                            {...firstNameProps}
                            value={firstNameProps.value}
                        />
                    </div>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            Last Name
                        </p>
                        <input
                            placeholder="Last Name"
                            className="border border-solid rounded-xl w-full p-3"
                            {...lastNameProps}
                            value={lastNameProps.value}
                        />
                    </div>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            Username
                        </p>
                        <input
                            placeholder="UserABC"
                            className="border border-solid rounded-xl w-full p-3"
                            disabled
                        />
                    </div>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            Email
                        </p>
                        <div className="flex relative items-center">
                            <input
                                value="abc@gmail.com"
                                className="border border-solid rounded-xl w-full p-3"
                                disabled={!change}
                            />
                            <p className="absolute right-5 cursor-pointer" onClick={() => setChange(!change)}><strong>{change ? 'Save' : 'Change Email'}</strong></p>
                        </div>
                    </div>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            AccountID
                        </p>
                        <input
                            placeholder="12345678899"
                            className="border border-solid rounded-xl w-full p-3"
                            disabled
                        />
                    </div>
                    {/* <VisitorAPIComponents projectId={visitorApiPrjectId} handleCountryChange={(countryObj) => setCountry(countryObj)} handleStateChange={(stateObj) => setState(stateObj)}>
                        <div className="flex flex-col m-6">
                            <label className='text-[16px] font-[600] mb-3'>Country</label>
                            <CountryField label="(None Specified)"></CountryField>
                        </div>
                        <div className="flex flex-col m-6">
                            <label className='text-[16px] font-[600] mb-3'>State</label>
                            <StateField label="(None Specified)"></StateField>
                        </div>
                    </VisitorAPIComponents> */}
                    {/* <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            Country
                        </p>
                        <div className="flex relative items-center">
                            <input
                                placeholder="(None Specified)"
                                className="border border-solid rounded-xl w-full p-3"
                            />
                            <KeyboardArrowDownIcon className="absolute right-5 cursor-pointer" />
                        </div>
                    </div>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            State
                        </p>
                        <div className="flex relative items-center">
                            <input
                                placeholder="(None Specified)"
                                className="border border-solid rounded-xl w-full p-3"
                            />
                            <KeyboardArrowDownIcon className="absolute right-5 cursor-pointer" />
                        </div>
                    </div> */}
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            Country
                        </p>
                        <SearchableDropdown
                            options={animals}
                            label="name"
                            id="id"
                            selectedVal={countryValue}
                            handleChange={(val) => setCountryValue(val)}
                        />
                    </div>
                    <div className="m-6">
                        <p className='text-[16px] font-[600] mb-3'>
                            State
                        </p>
                        <SearchableDropdown
                            options={animals}
                            label="name"
                            id="id"
                            selectedVal={stateValue}
                            handleChange={(val) => setStateValue(val)}
                        />
                    </div>
                    <div className="m-6 border border-solid rounded-xl py-7 px-4">
                        <p className='text-[16px] font-[600] ml-8 mb-5'>
                            Avatar
                        </p>
                        <div className="flex flex-col sm:flex-row items-center ml-3">
                            <img 
                                className="mr-6 w-[100px] rounded-full"
                                src={selectedImage ? URL.createObjectURL(selectedImage) : "img/icons/source/BBC.png"}
                            />
                            <div>
                                <p className="font-[600] text-[#65676B] my-2"><span className="font-[500] text-gray-500 text-[15px]">Recommended dimensions of </span>100x100</p>
                                <input
                                    type="file"
                                    id="avatar"
                                    name="avatar"
                                    accept="image/*"
                                    className="text-[#000] font-[600] cursor-pointer hidden"
                                    onChange={(event) => {
                                        console.log(event.target.files[0]);
                                        setSelectedImage(event.target.files[0]);
                                    }}
                                />
                                <label for="avatar" className="font-[600] cursor-pointer">Upload Avatar</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AccountDetail;