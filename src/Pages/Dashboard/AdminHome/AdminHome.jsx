import React, { useState, useEffect, useContext } from 'react';
import { PieChart, Pie, Legend, Tooltip, Cell } from 'recharts';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
// import { Typography } from '@mui/material';
import { Card, CardContent, Typography } from '@mui/material';
import { AuthContext } from '../../providers/AuthProvider';

const AdminHome = () => {
    const {user} = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [biodataStats, setBiodataStats] = useState(null);

    useEffect(() => {
        const fetchBiodataStats = async () => {
            try {
                const response = await axiosSecure.get('/biodata-stats');
                setBiodataStats(response.data);
            } catch (error) {
                console.error('Error fetching biodata stats:', error);
            }
        };

        fetchBiodataStats();
    }, []);

    // Define colors for the pie chart
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

    // Data for the pie chart
    const pieChartData = [
        { name: 'Male Biodata', value: biodataStats?.maleBiodata || 0 },
        { name: 'Female Biodata', value: biodataStats?.femaleBiodata || 0 },
        { name: 'Premium Biodata', value: biodataStats?.premiumBiodata || 0 },
        { name: 'Total Biodata', value: biodataStats?.totalBiodata || 0 }
    ];

    const rev = (biodataStats?.contactReqBiodata) * 5;

    return (
        <div className="p-4 flex flex-col items-center">
            <Typography variant="h4" className="mb-4">Welcome to Admin Dashboard</Typography>
            <Typography variant="h4" className="mb-4"> Admin : {user?.displayName}</Typography>
            <Card className="w-full max-w-lg mb-4">
                <CardContent>
                    <Typography variant="h5" className="text-center mb-4">Biodata Statistics</Typography>
                    <div className="flex justify-center">
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
                </CardContent>
            </Card>
            <Card className="w-full max-w-lg">
                <CardContent>
                    <Typography variant="h5" className="text-center mb-4">
                        Total Revenue from Biodata Contact Request Payment
                    </Typography>
                    <Typography variant="h6" className="text-center">${rev}</Typography>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminHome;
