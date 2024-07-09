import SmallBarChart from "./smallBarChart/SmallBarChart";

const ParagraphLead = ({content}) => {
    return (
        <div className="flex justify-end mb-4">
            <div className="flex items-center">
                <svg width="12" height="12">
                    <circle cx="6" cy="6" r="5" fill="#00E396" />
                </svg>
                &nbsp;
                <p className="text-[12px] text-[#5D686A]">{content}</p>
                &nbsp;
            </div>
            <SmallBarChart />
        </div>
    );
}

export default ParagraphLead;