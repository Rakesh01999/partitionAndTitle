import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent, CardMedia, Typography, Modal, Box } from '@mui/material';
import { AuthContext } from '../../Pages/providers/AuthProvider';
// import { AuthContext } from '../../../context/AuthContext'; // Import your AuthContext

const PremiumProfileCard = ({ biodata }) => {
    const { name, BiodataId, ProfileImage, BiodataType, Age, PermanentDivision, Occupation, _id } = biodata;
    const [open, setOpen] = useState(false);
    const navigate = useNavigate(); // Use useNavigate for navigation
    const {  user } = useContext(AuthContext); // Get the login status from context

    // console.log(isLoggedIn);

    const handleOpen = () => {
        // if (!isLoggedIn) {
        if (!user) {
            navigate('/login'); // Redirect to login page if not logged in
        } else {
            setOpen(true);
        }
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Card className="hover:shadow-2xl transition duration-300 ease-in-out p-4 hover:bg-blue-200" sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="200"
                    image={ProfileImage}
                    title={name}
                    style={{ objectFit: 'contain', height: '200px' }} // Ensure the whole image is shown
                />
                <CardContent className="flex flex-col items-center gap-2">
                    <Typography variant="h5" component="div">
                        {name}
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        BiodataId: {BiodataId}
                    </Typography>
                    <Typography variant="body1" color="textPrimary">
                        {PermanentDivision}
                    </Typography>
                    <Typography variant="body1" color="blue">
                        {BiodataType}
                    </Typography>
                    <Typography variant="body1">
                        {Occupation}
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                        Age: {Age}
                    </Typography>
                    <Button
                        onClick={handleOpen}
                        variant="contained"
                        color="primary"
                        className="mt-4 w-full"
                    >
                        View Profile
                    </Button>
                </CardContent>
            </Card>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    sx={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: 600, // Make modal larger
                        bgcolor: 'background.paper',
                        borderRadius: '10px',
                        boxShadow: 24,
                        p: 4,
                        outline: 'none',
                    }}
                >
                    <Typography id="modal-modal-title" variant="h4" component="h2" gutterBottom>
                        {name}'s Profile
                    </Typography>
                    <CardMedia
                        component="img"
                        alt={name}
                        height="250"
                        image={ProfileImage}
                        title={name}
                        sx={{
                            objectFit: 'cover',
                            borderRadius: '10px',
                            mb: 2,
                        }}
                    />
                    <Typography id="modal-modal-description" variant="body1" gutterBottom>
                        <strong>BiodataId:</strong> {BiodataId}<br />
                        <strong>Permanent Division:</strong> {PermanentDivision}<br />
                        <strong>Biodata Type:</strong> {BiodataType}<br />
                        <strong>Occupation:</strong> {Occupation}<br />
                        <strong>Age:</strong> {Age}
                    </Typography>
                    <Button
                        onClick={handleClose}
                        variant="contained"
                        color="secondary"
                        sx={{ mt: 2 }}
                        fullWidth
                    >
                        Close
                    </Button>
                </Box>
            </Modal>
        </>
    );
};

export default PremiumProfileCard;
