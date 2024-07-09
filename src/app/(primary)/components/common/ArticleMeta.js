import CheckCircleIcon from "@mui/icons-material/CheckCircle";

export const ArticleMeta = (props) => {
    return (
        <div className="flex gap-2">
            <div className="flex gap-2 text-[12px] items-center rounded-md border border-1 border-[#F9871A] px-1">
                <img
                    src="/img/icons/coin.png"
                    className="w-[16px]"
                />
                <p>500</p>
            </div>
            <p className="text-black text-[12px]">
                <CheckCircleIcon sx={{ fontSize: "12px" }} />
                <span> Elon Musk</span>
            </p>
            <p className="text-black text-[12px]">
                <CheckCircleIcon sx={{ fontSize: "12px" }} />
                <span> Tesla</span>
            </p>
        </div>
    )
}