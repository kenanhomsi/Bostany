import { XAxis, Tooltip, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { BAS10ChartType } from '../../Types';

const BAS10Chart = ({ data }: { data: BAS10ChartType[] }) => {
    return (
        <ResponsiveContainer >
            <AreaChart data={data}>
                <defs>
                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0.03%" stopColor="#00C1A1" stopOpacity={0.8} />
                        <stop offset="97.99%" stopColor="#00C1A1" stopOpacity={0} />
                    </linearGradient>
                </defs>

                <XAxis dataKey="day" />
                <Tooltip />
                {/* <Legend /> */}
                <Area type="linear" dataKey="Tree" stroke="#00C1A1" strokeWidth={3} fill="url(#colorUv)" />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default BAS10Chart;