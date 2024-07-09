import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { Divider } from "@mui/material";
import { Button } from "@mui/material";

const SignInAndSecurityContainer = () => {
    return (
        <>
            <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
                <div className='w-full sm:w-[30%]'>
                    <p className='text-[17px] font-[600] my-4'>Password</p>
                    <p className='text-[14px] text-[gray]'>Keep your security secure by changing your password at least every 120 days</p>
                </div>
                <div className='w-full sm:w-[70%] flex flex-col sm:flex-row border border-solid p-8 rounded-2xl items-center gap-4 sm:gap-8'>
                    <div className="flex flex-row items-center flex-1">
                        <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                            <LockOutlinedIcon />
                        </div>
                        <div>
                            <p className='text-[18px] font-[600] mb-3'>Password</p>
                            <p className='text-[15px] text-[gray]'>Last changed October 22nd, 2023 03:10</p>
                        </div>
                    </div>
                    <div>
                        <Button variant="contained" className="px-4 py-2 text-[16px] font-bold mr-4 sm:mr-12" style={{ textTransform: 'none', backgroundColor: "#1F232C", borderRadius: '7px' }}>Change Password</Button>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
                <div className='w-full sm:w-[30%]'>
                    <p className='text-[17px] font-[600] my-4'>Two-factor authontication (2FA)</p>
                    <p className='text-[14px] text-[gray]'>Strengthen your access security by requiring two methods to verify your identity</p>
                </div>
                <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl'>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8">
                        <div className="flex flex-row items-center flex-1">
                            <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                                <LockOutlinedIcon />
                            </div>
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Two-factor authontication (2FA)</p>
                                <p className='text-[15px] text-[gray]'>Secure account via authonticator app or SMS</p>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" color="inherit" className="px-4 py-2 text-[15px] font-bold mr-4 sm:mr-12" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth:'1px', borderColor:'lightgray', borderRadius: '7px' }}>Set up 2FA</Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col sm:flex-row mt-4 sm:mt-12 gap-8'>
                <div className='w-full sm:w-[30%]'>
                    <p className='text-[17px] font-[600] my-4'>Social Accounts</p>
                    <p className='text-[14px] text-[gray]'>Connect your social media accounts to make sign in easier.</p>
                </div>
                <div className='w-full sm:w-[70%] border border-solid p-8 rounded-2xl'>
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mb-8">
                        <div className="flex flex-row items-center flex-1">
                            <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                                <img src="img/icons/logo/google.png" className="min-w-[27px]" width="27px" />
                            </div>
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Google</p>
                                <p className='text-[15px] text-[gray]'>Sign in to Sphere News using Google</p>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" color="inherit" className="px-4 py-2 text-[15px] font-bold mr-4 sm:mr-12" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth:'1px', borderColor:'lightgray', borderRadius: '7px' }}>Connect to Google</Button>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 my-8">
                        <div className="flex flex-row items-center flex-1">
                            <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                                <img src="img/icons/logo/facebook.png" className="min-w-[27px]" width="27px" />
                            </div>
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Facebook</p>
                                <p className='text-[15px] text-[gray]'>Sign in to Sphere News using Facebook</p>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" color="inherit" className="px-4 py-2 text-[15px] font-bold mr-4 sm:mr-12" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth:'1px', borderColor:'lightgray', borderRadius: '7px' }}>Connect to Facebook</Button>
                        </div>
                    </div>
                    <Divider />
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-8">
                        <div className="flex flex-row items-center flex-1">
                            <div className="bg-[#EDEEF0] p-3 rounded-lg mr-6">
                                <img src="img/icons/logo/twitter.png" className="min-w-[27px]" width="27px" />
                            </div>
                            <div>
                                <p className='text-[18px] font-[600] mb-3'>Twitter</p>
                                <p className='text-[15px] text-[gray]'>Sign in to Sphere News using Twitter</p>
                            </div>
                        </div>
                        <div>
                            <Button variant="outlined" color="inherit" className="px-4 py-2 text-[15px] font-bold mr-4 sm:mr-12" style={{ textTransform: 'none', backgroundColor: "#FFF", borderWidth:'1px', borderColor:'lightgray', borderRadius: '7px' }}>Connect to Twitter</Button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SignInAndSecurityContainer;