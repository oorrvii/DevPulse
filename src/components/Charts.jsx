import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'

const COLORS = ['#a78bfa', '#60a5fa', '#f472b6', '#34d399', '#fbbf24', '#f87171']

function Charts({ languageData }) {
    return (
        <div className="rounded-2xl p-6 h-full"
            style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}>
            <h3 className="text-white font-semibold mb-4">Language Breakdown</h3>
            <div className="flex justify-center">
                <PieChart width={360} height={280}>
                    <Pie data={languageData} dataKey="count" nameKey="language" cx="50%" cy="50%" outerRadius={100}>
                        {languageData.map((entry, index) => (
                            <Cell key={index} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip contentStyle={{ backgroundColor: '#1e1b4b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', color: '#fff', fontSize: '12px' }} />
                    <Legend formatter={(value) => <span style={{ color: 'rgba(255,255,255,0.6)', fontSize: '12px' }}>{value}</span>} />
                </PieChart>
            </div>
        </div>
    )
}
export default Charts