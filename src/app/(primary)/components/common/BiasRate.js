import { useState, useContext } from "react";
import { MainContext } from "../../layout";

export const BiasRate = (props) => {

    const { left, center, right } = props;

    const { isMobile } = useContext(MainContext);

    const findShowVal = () => {
        let maxVal = Math.max(left, center, right);
        if (maxVal === left) {
            return [Math.round(left * 100 / (left + center + right)), 'Left', (left + center + right)];
        } else if (maxVal === center) {
            return [Math.round(center * 100 / (left + center + right)), 'Center', (left + center + right)];
        } else {
            return [Math.round(right * 100 / (left + center + right)), 'Right', (left + center + right)];
        }
    }

    if (!isMobile) {
        return (
            <div className="flex flex-col gap-1">
                <p className="text-[12px]">{`${findShowVal()[0]}% ${findShowVal()[1]} Coverage: ${findShowVal()[2]}sources`}</p>
                <div className="flex flex-row w-full min-h-[8px]">
                    <div style={{ width: `${Math.round(left * 100 / (left + center + right))}%`, backgroundColor: '#224A85' }}></div>
                    <div style={{ width: `${Math.round(center * 100 / (left + center + right))}%`, backgroundColor: '#50B8EA' }}></div>
                    <div style={{ width: `${Math.round(right * 100 / (left + center + right))}%`, backgroundColor: '#F8881A' }}></div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row w-[40%] min-h-[8px]">
                    <div style={{ width: `${Math.round(left * 100 / (left + center + right))}%`, backgroundColor: '#224A85' }}></div>
                    <div style={{ width: `${Math.round(center * 100 / (left + center + right))}%`, backgroundColor: '#50B8EA' }}></div>
                    <div style={{ width: `${Math.round(right * 100 / (left + center + right))}%`, backgroundColor: '#F8881A' }}></div>
                </div>
                <p className="text-[12px]">{`${findShowVal()[0]}% ${findShowVal()[1]} Coverage: ${findShowVal()[2]}sources`}</p>
            </div>
        )
    }
}