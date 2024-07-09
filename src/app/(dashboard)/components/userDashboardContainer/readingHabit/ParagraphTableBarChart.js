'use client';
// import ReactApexChart from "react-apexcharts";
import dynamic from "next/dynamic";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ParagraphTableBarChart = () => {
    const totalSeries = {
        series: [{
            name: 'Left  9',
            data: [44, 55, 57, 56, 61, 58, 63]
        }, {
            name: 'Center  12',
            data: [76, 85, 40, 98, 87, 69, 91]
        }, {
            name: 'Right  7',
            data: [35, 41, 36, 26, 45, 48, 52]
        }],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                },
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '55%',
                    endingShape: 'rounded',
                    columnWidth: '60%',
                    // borderRadius: 5
                },
            },
            dataLabels: {
                enabled: false
            },
                // stroke: {
                //     show: true,
                //     width: 2,
                //     colors: ['transparent']
                // },
            xaxis: {
                categories: ['Jan 1', 'Jan 2', 'Jan 3', 'Jan 4', 'Jan 5', 'Jan 6', 'Jan 7'],
            },
            yaxis: {
                tickAmount: 3,
                labels: {
                    formatter: (val) => { return val + '%' },
                },
            },
            fill: {
                opacity: 1
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val;
                    }
                }
            },
            legend: {
                position: 'top',
                horizontalAlign: 'left',
                fontSize: '16px',
                markers: {
                    width: 14,
                    height: 14,
                },
            },
            colors: ['#425993', '#4BBBEB', '#F7881C'],
            stroke: {
                colors: ["transparent"],
                width: 10
              }
        }
    };
    return (
        <div id="chart" className="mt-4">
            <ApexChart
                options={totalSeries.options}
                series={totalSeries.series}
                type="bar"
                height={350}
            />
        </div>
    );
}

export default ParagraphTableBarChart;