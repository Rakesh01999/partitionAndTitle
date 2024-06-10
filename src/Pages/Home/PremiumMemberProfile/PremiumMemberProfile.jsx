import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import BiodataCard from '../../../Components/BiodataCard/BiodataCard';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import PremiumProfileCard from '../../../Components/PremiumProfileCard/PremiumProfileCard';

const PremiumMemberProfile = () => {
    const axiosSecure = useAxiosSecure();
    const [premiumRequest, setPremiumRequest] = useState([]);
    const [sortOrder, setSortOrder] = useState('ascending');

    useEffect(() => {
        const fetchPremiumRequests = async () => {
            try {
                const response = await axiosSecure.get('/premiumRequests');
                setPremiumRequest(response.data);
            } catch (error) {
                console.error('Error fetching premiumRequests :', error);
            }
        };

        fetchPremiumRequests();
    }, []);

    // Filter to get only premium users
    const premiumUsers = premiumRequest.filter(user => user.userType === "premium");

    // Sort users based on age and selected order
    // const sortedPremiumUsers = premiumUsers.sort((a, b) => {
    //     if (sortOrder === 'ascending') {
    //         return a.biodata.Age - b.biodata.Age;
    //     } else {
    //         return b.biodata.Age - a.biodata.Age;
    //     }
    // }).slice(0, 6);

    const handleSortOrderChange = (event) => {
        // setSortOrder(event.target.value);
    };

    return (
        <div>
            <SectionTitle
                subHeading={"Find Here"}
                heading={"Premium Member Profile"}>
            </SectionTitle>
            <div className='flex items-center justify-center'>
                <FormControl variant="outlined" className="w-48 mb-4">
                    <InputLabel>Sort by Age</InputLabel>
                    <Select
                        value={sortOrder}
                        onChange={handleSortOrderChange}
                        label="Sort by Age"
                    >
                        <MenuItem value="ascending">Ascending</MenuItem>
                        <MenuItem value="descending">Descending</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='px-4 py-8 bg-opacity-10 rounded-3xl flex flex-col items-center gap-6 mb-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {/* {sortedPremiumUsers.map((profile, index) => ( */}
                    {premiumUsers.map((profile, index) => (
                        // <BiodataCard key={index} biodata={profile.biodata} />
                        // <BiodataCard key={index} biodata={profile} />
                        <PremiumProfileCard key={index} biodata={profile} />
                    ))}
                </div>
            </div>
        </div >
    );
};

export default PremiumMemberProfile;
