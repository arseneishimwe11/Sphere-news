'use client'

import { useState } from "react";

import Link from 'next/link';

import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';

const SigninFormComponent = () => {

    const [email, setEmail]                 = useState('');
    const [password, setPassword]           = useState('');
    const [rememberMe, setRememberMe]       = useState(false);
    const [showPassword, setShowPassword]   = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    return (
        <div className="flex flex-col my-4">
            <Box
                component="form"
                sx={{
                    '& > :not(style)': { width: '100%' },
                }}
                noValidate
                autoComplete="off"
                className="flex flex-col gap-2"
            >
                <TextField label="Email address" variant="outlined" className="rounded-xl"/>
                <FormControl variant="outlined" className="rounded-xl">
                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                    <OutlinedInput
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        }
                        label="Password"
                    />
                </FormControl>
                <FormControlLabel control={<Checkbox />} label="Remember me" />
                <Button 
                    variant="contained"
                    type="submit"
                    className="py-3 my-4 bg-black rounded-lg"
                    size="large"
                    sx={{
                        textTransform: 'none'
                    }}
                >
                    Sign in
                </Button>
            </Box>
        </div>
    );
}

export default function Login(props) {
    return(
        <div className="flex flex-col w-full max-w-[400px] mx-auto p-8 rounded-xl bg-white border border-gray-300">
            <img 
                src="img/logo/sphere/logo.svg"
                className="w-1/2"
            />
            <div className="my-4">
                <h4 className="text-xl">Sign in to your account</h4>
                <p className="text-sm text-gray-400">No account? <Link href="/Register" className="text-black underline hover:cursor-pointer">Create one now for free</Link></p>
            </div>
            <SigninFormComponent />
            <div className="flex flex-col">
                <a className="underline hover:cursor-pointer">Forgot your password?</a>
                <a className="underline hover:cursor-pointer">Didn't receive confirmation instructions?</a>
            </div>
            <div className="flex flex-col mt-4">
                <div className="flex flex-row items-center my-4">
                    <div className="flex h-[1px] bg-gray-400 w-full"></div>
                    <div className="mx-2">or</div>
                    <div className="flex h-[1px] bg-gray-400 w-full"></div>
                </div>
                <Button 
                    variant="outlined"
                    sx={{
                        textTransform: 'none',
                        paddingY: '12px',
                        marginY: '6px',
                        color: 'black',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                    }}
                    size="large"
                >
                    <img 
                        src="/img/icons/logo/google.png"
                        className="w-[20px]"
                    />
                    &nbsp;&nbsp;Continue with Google
                </Button>
                <Button 
                    variant="outlined"
                    sx={{
                        textTransform: 'none',
                        paddingY: '12px',
                        marginY: '6px',
                        color: 'black',
                        border: '1px solid #ccc',
                        borderRadius: '8px'
                    }}
                    size="large"
                >
                    <img 
                        src="/img/icons/logo/facebook.png"
                        className="w-[20px]"
                    />
                    &nbsp;&nbsp;Continue with Facebook
                </Button>
            </div>
        </div>
    )
}

