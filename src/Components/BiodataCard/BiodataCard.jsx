import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const BiodataCard = ({ biodata }) => {
    const { name, BiodataId, ProfileImage, BiodataType, Age, PermanentDivision, Occupation, _id } = biodata;

    const handleBiodataDetails = () => {
        // Handle biodata details logic
    }

    return (
        // <Card className="max-w-full rounded-lg shadow-2xl mb-5 p-4 flex flex-col items-center">
        <Card className="hover:shadow-2xl transition duration-300 ease-in-out p-4 hover:bg-blue-200" sx={{ backgroundColor: 'ButtonHighlight' }}>
            <CardMedia
                component="img"
                alt="biodata"
                image={ProfileImage}
                className="mt-5 "
                style={{ height: '200px', objectFit: 'cover' }} // Set fixed height and object-fit
            />
            <div className='flex justify-center '>
                <Typography variant="body2" color="textSecondary" className="mt-2 w-1/2 bg-blue-300 text-black text-center ">
                    <span className='md:text-xl'>Age: {Age}</span>
                </Typography>
            </div>
            <CardContent className="flex flex-col items-center gap-2 ">
                <Typography variant="h5" component="div">
                    {name}
                </Typography>
                {/* <Typography variant="body1" color="textSecondary"> */}
                <Typography variant="body1" color="textPrimary">
                    BiodataId: {BiodataId}
                </Typography>
                <Typography variant="body1" color="textPrimary">
                    {PermanentDivision}
                </Typography>
                <Typography variant="body1" color="blue">
                    {BiodataType}
                </Typography>
                <Typography variant="body1" color="">
                    {Occupation}
                </Typography>
                <Link to={`/biodatas/${_id}`} className="w-full">
                    <Button
                        onClick={handleBiodataDetails}
                        variant="contained"
                        color="primary"
                        className="mt-4 w-full"
                    >
                        View Profile
                    </Button>
                </Link>
            </CardContent>
        </Card>
    );
};

export default BiodataCard;
