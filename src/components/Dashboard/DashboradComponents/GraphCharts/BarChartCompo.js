import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import textConversion from '../../../../utilities/textConversion';
// const data = [
//     {
//         name: 'Page h',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page p',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page /',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page A',
//         uv: 4000,
//         pv: 2400,
//         amt: 2400,
//     },
//     {
//         name: 'Page B',
//         uv: 3000,
//         pv: 1398,
//         amt: 2210,
//     },
//     {
//         name: 'Page C',
//         uv: 2000,
//         pv: 9800,
//         amt: 2290,
//     },
//     {
//         name: 'Page D',
//         uv: 2780,
//         pv: 3908,
//         amt: 2000,
//     },
//     {
//         name: 'Page E',
//         uv: 1890,
//         pv: 4800,
//         amt: 2181,
//     },
//     {
//         name: 'Page F',
//         uv: 2390,
//         pv: 3800,
//         amt: 2500,
//     },
//     {
//         name: 'Page G',
//         uv: 3490,
//         pv: 4300,
//         amt: 2100,
//     },
// ]; 
const BarChartCompo = ({ data: preData }) => {
    const data = preData.map((single, i) => {
        return {
            ...single,
            name: `${textConversion(single.department, 5)}_${i}`
        }
    })
    const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
            const { department, institute, section, shift, totalUserUsing } = payload[0].payload
            console.log({ active, payload, })
            return (
                <div className=" backdrop-blur-md bg-white/[.6] p-4">
                    <p className="desc">{institute}</p>
                    <p className="desc">{department}</p>
                    <p className="desc">{section}</p>
                    <p className="desc">{shift}</p>
                    <p className="label">{`Using : ${totalUserUsing}`}</p>
                </div>
            );
        }

        return null;
    };
    return (
        <div className='h-[300px]'>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                    barSize={10}
                >
                    <XAxis axisLine={false} tickLine={false} dataKey='name' scale="point"

                        padding={{ left: 20, right: 20 }} />
                    <YAxis axisLine={false} tickLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Legend />
                    <CartesianGrid strokeDasharray="3" vertical={false} />
                    <Bar
                        radius={[5, 5, 0, 0]}
                        dataKey="totalUserUsing" name='Routine Using status' fill="#5946ad" />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default BarChartCompo;