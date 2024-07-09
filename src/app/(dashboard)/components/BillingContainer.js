'use client'

import { useRef, useState } from "react";
import { CountryField, StateField, VisitorAPIComponents } from "react-country-state-fields";
import { Divider, IconButton } from "@mui/material";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from "@mui/material/TextField";
import CloseIcon from '@mui/icons-material/Close';
import InvoiceTable from "./billingContainer/InvoiceTable";
import Link from "next/link";
import SearchableDropdown from "./common/searchableDropdown/SearchableDropdown";
import { animals } from "./common/searchableDropdown/data/animals";
import "./common/searchableDropdown/styles.css";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const BillingContainer = () => {
    const [country, setCountry] = useState({ code: "", label: "" }); // the selected country
    const [state, setState] = useState({ code: "", label: "" }); // the selected state
    const visitorApiPrjectId = ""; // assign your project ID here

    const [openMethod, setOpenMethod] = useState(false);
    const handleOpenMethod = () => setOpenMethod(true);
    const handleCloseMethod = () => setOpenMethod(false);

    const [openInvoice, setOpenInvoice] = useState(false);
    const handleOpenInvoice = () => setOpenInvoice(true);
    const handleCloseInvoice = () => setOpenInvoice(false);

    const [countryValue, setCountryValue] = useState("");
    const [stateValue, setStateValue] = useState("");
    return (
        <div className="flex flex-col">
            <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
                <div className='w-full sm:w-[30%]'>
                    <p className='text-[17px] font-[600] my-4'>Billing Address</p>
                    <p className='text-[14px] text-[gray]'>Enter your billing address</p>
                </div>
                <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl items-center'>
                    <form>
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
                        <div className="m-6">
                            <p className='text-[16px] font-[600] mb-3'>
                                City
                            </p>
                            <input
                                placeholder="City"
                                className="border border-solid rounded-xl w-full p-3"
                            />
                        </div>
                        <div className="m-6">
                            <p className='text-[16px] font-[600] mb-3'>
                                Street Address Line 1
                            </p>
                            <input
                                placeholder="Street Address Line 1"
                                className="border border-solid rounded-xl w-full p-3"
                            />
                        </div>
                        <div className="m-6">
                            <p className='text-[16px] font-[600] mb-3'>
                                Street Address Line 2
                            </p>
                            <input
                                placeholder="Street Address Line 2"
                                className="border border-solid rounded-xl w-full p-3"
                            />
                        </div>
                        <div className="m-6">
                            <p className='text-[16px] font-[600] mb-3'>
                                Zip
                            </p>
                            <input
                                placeholder="Zip Code"
                                className="border border-solid rounded-xl w-full p-3"
                            />
                        </div>
                    </form>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
                <div className='w-full sm:w-[30%]'>
                    <p className='text-[17px] font-[600] my-4'>Subscription</p>
                    <p className='text-[14px] text-[gray]'>Manage your current plan details, or switch plans.</p>
                </div>
                <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl'>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
                        <div className="flex flex-row items-center flex-1">
                            {/* <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                    <GoogleIcon />
                </div> */}
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Growth Annual(annually) </p>
                                <p className='text-[15px] text-[gray]'>89.00 / month</p>
                            </div>
                        </div>
                        <div>
                            <Link href="/PricingPlan">
                                <Button variant="outlined" color="inherit" className="px-4 py-2 text-[17px] font-[600]" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth: '1px', borderColor: '#FFF', borderRadius: '7px' }}>All plans <ChevronRightIcon /></Button>
                            </Link>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-8">
                        <div className="flex flex-row items-center flex-1">
                            {/* <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                    <FacebookIcon />
                </div> */}
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Next billing date</p>
                                <p className='text-[15px] text-[gray]'>December 13,2023 50 day left in current billing cycle</p>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" color="inherit" className="px-4 py-2 text-[17px] font-[600]" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth: '1px', borderColor: '#FFF', borderRadius: '7px' }} onClick={handleOpenInvoice}>Past Invoices <ChevronRightIcon /></Button>
                        </div>
                    </div>
                    <div>
                        <Modal
                            open={openInvoice}
                            onClose={handleCloseInvoice}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className="rounded-xl">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-row justify-between items-center">
                                        <p className="font-[600] text-[20px]">Purchase History</p>
                                        <IconButton onClick={() => setOpenInvoice(false)}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <InvoiceTable />
                                </div>
                            </Box>
                        </Modal>
                    </div>
                    <Divider />
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-8">
                        <div className="flex flex-row items-center flex-1">
                            {/* <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                    <TwitterIcon />
                </div> */}
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Payment method</p>
                                <p className='text-[15px] text-[gray]'>4692</p>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" color="inherit" className="px-4 py-2 text-[17px] font-[600]" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth: '1px', borderColor: '#FFF', borderRadius: '7px' }} onClick={handleOpenMethod}>Edit payment method <ChevronRightIcon /></Button>
                        </div>
                    </div>
                    <div>
                        <Modal
                            open={openMethod}
                            onClose={handleCloseMethod}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style} className="rounded-xl">
                                <div className="flex flex-col gap-6">
                                    <div className="flex flex-row justify-between items-center">
                                        <p className="font-[600] text-[20px]">Edit Billing</p>
                                        <IconButton onClick={handleCloseMethod}>
                                            <CloseIcon />
                                        </IconButton>
                                    </div>
                                    <div className="flex flex-row justify-between">
                                        <TextField id="outlined-basic" label="First Name" variant="outlined" className="w-[50%]" defaultValue="First Name" />
                                        <TextField id="outlined-basic" label="Last Name" variant="outlined" className="w-[43%]" defaultValue="Last Name" />
                                    </div>
                                    <div>
                                        <TextField id="outlined-basic" label="Select Country" variant="outlined" className="w-full" defaultValue="Select Country" />
                                    </div>
                                    <div className="w-full">
                                        <TextField id="outlined-basic" label="Address1 (optional)" variant="outlined" className="w-full" defaultValue="Address1 (optional)" />
                                    </div>
                                    <div className="w-full">
                                        <TextField id="outlined-basic" label="Address2 (optional)" variant="outlined" className="w-full"
                                            defaultValue="Address2 (optional)" />
                                    </div>
                                    <div className="w-full flex flex-row justify-between">
                                        <TextField id="outlined-basic" label="City" variant="outlined" className="w-[50%]"
                                            defaultValue="City" />
                                        <TextField id="outlined-basic" label="State" variant="outlined"
                                            className="w-[43%]"
                                            defaultValue="State" />
                                    </div>
                                    <div className="w-full">
                                        <TextField id="outlined-basic" label="Postal or ZIP Code" variant="outlined" className="w-full"
                                            defaultValue="Postal or ZIP Code" />
                                    </div>
                                    <div className="flex flex-row m-4 items-center">
                                        <button className="absolute text-white right-[50px] bg-[#1AA9A8] py-2 px-4 rounded-lg">Save</button>
                                    </div>
                                </div>
                            </Box>
                        </Modal>
                    </div>
                    <Divider />
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-8">
                        <p className='text-[15px] text-[gray]'>Your free trial ends on Mon, December 5th 2023</p>
                    </div>
                    <Divider />
                    <div className="mt-8 flex flex-row justify-between">
                        <Button variant="outlined" color="inherit" style={{ fontSize: '17px', textTransform: 'none', backgroundColor: "#FFF", borderWidth: '1px', borderColor: '#FFF', borderRadius: '7px' }}>Cancel Trial</Button>
                        <Button variant="contained" className="px-4 py-2 text-[15px] font-bold" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px' }}>Upgrade Plan</Button>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default BillingContainer;