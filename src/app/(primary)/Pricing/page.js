'use client'
import { useState } from "react";
import { PricingCardComponent } from "@/app/(dashboard)/components/common/pricingTag/PricingComponent"
import { Grid } from "@mui/material";

const AdvertiseComponent = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} md={6} lg={3}>
                <div className="min-h-[500px] border border-1 border-[red]"></div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div className="min-h-[500px] border border-1 border-[red]"></div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div className="min-h-[500px] border border-1 border-[red]"></div>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
                <div className="min-h-[500px] border border-1 border-[red]"></div>
            </Grid>
        </Grid>
    )
}

export default function PricingPageContainer () {
    const [currentPlan, setCurrentPlan] = useState(2);

    return (
        <div className='laptop-extrapage-bodycontainer'>
            <div className='componentcontainer'>
                <div className="w-full py-[72px] px-4">
                    <div className="w-full md:w-[50%] mx-auto text-center text-black">
                        <p className="text-[32px] font-bold">Sphere Pricing</p>
                        <p className="text-[20px]">Pay as you go, scale instantly, or upgrade anytime for advanced features and capabilities.</p>
                    </div>
                    <PricingCardComponent 
                        currentPlan={currentPlan}
                        setCurrentPlan={setCurrentPlan}
                    />
                    <div className="my-12">
                        <AdvertiseComponent />
                    </div>
                </div>
            </div>
        </div>
    )
}