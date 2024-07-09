'use client'

import PricingComponent from "../components/common/pricingTag/PricingComponent";
import { useContext } from 'react';
import { UserDashboardContext } from '../layout';

const PricingPlan = () => {
    const content = useContext(UserDashboardContext);

    const setHeaderContent = content.setHeaderContent;
    setHeaderContent('Subscriptions / Billing');

    const setDashboardStyle = content.setDashboardStyle;
    setDashboardStyle(true);
    return (
        <PricingComponent />
    );
}

export default PricingPlan;