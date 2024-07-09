import {
    CoverageDetail,
    BiasDistribution
} from "../Widgets";

const CoverageStatusBar = (props) => {

    const { data, qty } = props;

    return (
        <div className="my-4">
            <div className="flex flex-row w-full h-[12px]">
                <div className="h-full bg-[#003E6E]" style={{ width: `${data['local'] * 100 / qty}%` }} />
                <div className="h-full bg-[#4FBAE9]" style={{ width: `${data['national'] * 100 / qty}%` }} />
                <div className="h-full bg-[#F9871A]" style={{ width: `${data['international'] * 100 / qty}%` }} />
            </div>
            <div className="flex flex-row justify-between text-[12px] my-4">
                <div className="flex flex-row items-center">
                    <div className="w-[8px] h-[8px] bg-[#003E6E] rounded-full"></div>
                    <p>{Math.round(data['local'] * 100 / qty)}% Local Coverage</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-[8px] h-[8px] bg-[#4FBAE9] rounded-full"></div>
                    <p>{Math.round(data['national'] * 100 / qty)}% National Coverage</p>
                </div>
                <div className="flex flex-row items-center">
                    <div className="w-[8px] h-[8px] bg-[#F9871A] rounded-full"></div>
                    <p>{Math.round(data['international'] * 100 / qty)}% International Coverage</p>
                </div>
            </div>
        </div>
    )
}

const Card1 = () => {

    const LocationItem = () => {
        return (
            <div className="flex flex-col items-center text-center">
                <img
                    src="img/icons/source/BBC.png"
                />
                <span>Center</span>
                <p className="text-[10px]">1268 recent stories</p>
            </div>
        )
    }

    return (
        <div className="flex flex-col gap-1 w-full p-4 bg-[#fff] text-[#000] text-[12px] rounded-lg">
            <p className="text-[16px] font-bold">Media Bias Breakdown</p>
            <p>How is the media covering David Willams?</p>
            <p>David Willams often is covered by Right Media Sources</p>
            <p className="flex flex-row w-full my-2 text-white text-[10px] text-center gap-1">
                <span className="h-full bg-[#003E6E]" style={{ width: '24%' }}>24%</span>
                <span className="h-full bg-[#4FBAE9]" style={{ width: '22%' }}>22%</span>
                <span className="h-full bg-[#F9871A]" style={{ width: '56%' }}>56%</span>
            </p>
            <p>Covered Most by:</p>
            <div className="flex flex-row justify-between">
                <LocationItem />
                <LocationItem />
                <LocationItem />
                <LocationItem />
            </div>
        </div>
    )
}

export const Metrics = () => {
    return (
        <div className="flex flex-wrap py-2">
            <div className="w-full md:w-[60%] p-2 text-[#000]">
                <div className="w-full">
                    <div className="flex flex-row items-center gap-2">
                        <img
                            src="/img/avatar/5.svg"
                            className="w-[40px] rounded-full"
                        />
                        <p className="text-[18px] font-bold">News About Devid Willams</p>
                    </div>
                    <p className="my-2">
                        Ungewollten Wörter stehen. Viele der Generatoren im Internet neigen dazu, vorge fertigte Stücke zu wied erholen - was es nötig machte einen richtigen Generator zu entwickeln. Ungewollten Wörter stehen. Viele der Generatoren im Internet neige Ungewollten Wörter stehen. Viele der Gener atoren im Internet neigen dazu, vorge fertigte Stücke zu wieder.
                    </p>
                </div>
                <div className="flex flex-col gap-2 my-8 py-4 border-t border-t-2 border-[#AED2E9]">
                    <p className="font-bold">Locations of Coverage About Devid Willams</p>
                    <p className="text-[12px]">Based on <b>963</b> recent stories</p>
                    <CoverageStatusBar
                        qty={963}
                        data={{ "local": 121, "national": 251, "international": '591' }}
                    />
                </div>
            </div>
            <div className="flex flex-col gap-2 w-full md:w-[40%] p-2">
                <Card1 />
                <Card1 />
            </div>
        </div>
    )
}


// Mobile Metric Tab Content

export const MobileMetricsTabContent = () => {
    return (
        <>
            <div className="w-full p-[1px] bg-gradient-to-b from-[#F7AF64] to-[#6FC2E3] rounded-xl">
                <div className="flex flex-col gap-4 p-4 pb-8 bg-[rgb(238,243,243)] rounded-xl">
                    <CoverageDetail />
                </div>
            </div>
            <div className="w-full mt-4 p-[1px] bg-gradient-to-b from-[#F7AF64] to-[#6FC2E3] rounded-xl">
                <div className="flex flex-col gap-4 p-4 pb-8 bg-[rgb(238,243,243)] rounded-xl">
                    <BiasDistribution hasUntrackedBias/>
                </div>
            </div>
        </>
    )
}