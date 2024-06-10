import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography } from '@mui/material';

const BiodataCard = ({ biodata }) => {
    const { name, BiodataId, ProfileImage, BiodataType, Age, PermanentDivision, Occupation, _id } = biodata;

    const handleBiodataDetails = () => {
        // Handle biodata details logic
    }

    return (
        <Card className="max-w-full rounded-lg shadow-2xl mb-5 p-4 flex flex-col items-center">
            <CardMedia
                component="img"
                alt="biodata"
                image={ProfileImage}
                className="mt-5"
                style={{ height: '200px', objectFit: 'cover' }} // Set fixed height and object-fit
            />
            <Typography variant="body2" color="textSecondary" className="mt-2 bg-blue-200 text-black px-2">
                Age: {Age}
            </Typography>
            <CardContent className="flex flex-col items-center gap-2">
                <Typography variant="h6" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    BiodataId: {BiodataId}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {PermanentDivision}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                    {BiodataType}
                </Typography>
                <Typography variant="body2" color="textSecondary">
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
