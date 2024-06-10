import React, { useState, useEffect } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const AdminHome = () => {
    const axiosSecure = useAxiosSecure();
    const [biodataStats, setBiodataStats] = useState(null);
    const [revenue, setRevenue] = useState(0);

    useEffect(() => {
        const fetchBiodataStats = async () => {
            try {
                const response = await axiosSecure.get('/biodata-stats');
                // const response = await axiosSecure.get('/counters');;
                setBiodataStats(response.data);
            } catch (error) {
                console.error('Error fetching biodata stats:', error);
            }
        };


        fetchBiodataStats();
    }, []);

    console.log(biodataStats);

    // Define colors for the pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // Data for the pie chart
    const pieChartData = [
        { name: 'Male Biodata', value: biodataStats?.maleBiodata || 0 },
        { name: 'Female Biodata', value: biodataStats?.femaleBiodata || 0 },
        { name: 'Premium Biodata', value: biodataStats?.premiumBiodata || 0 },
        { name: 'Total Biodata', value: biodataStats?.totalBiodata || 0 }
        ];
        
        
    // const revenue = { name: 'contact Request Biodata', value: biodataStats?.contactReqBiodata || 0 },
    const rev = (biodataStats?.contactReqBiodata) * 5 ;
    // console.log(pieChartData);

    return (
        <div>
            <h2>Welcome to Admin Dashboard</h2>
            <div>
                <h3>Biodata Statistics</h3>
                <PieChart width={400} height={400}>
                    <Pie
                        data={pieChartData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                    >
                        {pieChartData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
            <div>
                <h3>Total Revenue from Biodata Contact Request Payment</h3>
                {/* <p>${revenue}</p> */}
                <p>${rev}</p>
            </div>
        </div>
    );
};

export default AdminHome;
