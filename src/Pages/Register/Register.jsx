import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProvider";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const [registerError, setRegisterError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const axiosPublic = useAxiosPublic();

    const handleRegister = e => {
        e.preventDefault();
        const name = e.target.name.value;
        // const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case character.')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case character.')
            return;
        }
        else if (!/[!@#$%^&*()_+=[\]{};':"\\|,.<>/?]+/.test(password)) {
            setRegisterError('Your password should have at least one special character.');
            return;
        }

        createUser(email, password)
            .then(result => {
                setSuccess('User Created Successfully.');
                toast.success('User Created Successfully.')
                const loggedUser = result.user;
                updateProfile(result.user, {
                    displayName: name
                    // photoURL: photo
                })
                    .then(() => {
                        console.log('user profile info update')
                        const userInfo = {
                            name: name,
                            email: email
                        }
                        console.log(userInfo);
                        axiosPublic.post('/users', userInfo)
                            .then(res => {
                                if (res.data.insertedId) {
                                    console.log('user added to the database');
                                    Swal.fire({
                                        position: "top-end",
                                        icon: "success",
                                        title: "User created successfully",
                                        showConfirmButton: false,
                                        timer: 1500
                                    });
                                }
                                navigate('/');
                            })

                    })
                    .catch(error => console.log(error))
            })
            .catch(error => {
                console.error(error);
                setRegisterError(error.message);
            })
    }

    return (
        <div className="relative min-h-screen">
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('../../../src/assets/images/bgReg0.jpeg')" }}>
            </div>

            <div className="absolute inset-0 bg-black opacity-50"></div>

            <Container maxWidth="sm" className="relative z-10">
                <Box mt={8} p={4} bgcolor="white" boxShadow={3} borderRadius={0}>
                    <Typography variant="h4" align="center" gutterBottom>
                        <span className="text-orange-500 font-bold animate__animated animate__fadeInDown">Register Now !</span>
                    </Typography>
                    <form onSubmit={handleRegister}>
                        <TextField
                            label="Name"
                            name="name"
                            required
                            fullWidth
                            margin="normal"
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            required
                            fullWidth
                            margin="normal"
                        />
                        {/* <TextField
                            label="Photo URL"
                            name="photo"
                            required
                            fullWidth
                            margin="normal"
                        /> */}
                        <TextField
                            label="Password"
                            name="password"
                            type={showPassword ? "text" : "password"}
                            required
                            fullWidth
                            margin="normal"
                            InputProps={{
                                endAdornment: (
                                    <span
                                        className="cursor-pointer"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? <FaEye /> : <FaEyeSlash />}
                                    </span>
                                ),
                            }}
                        />
                        {/* <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="mt-4 h-12 bg-orange-400 hover:bg-orange-500"

                        >
                            <span className="text-lg">Register</span>
                        </Button> */}

                        <Button
                            type="submit"
                            variant="contained"
                            fullWidth
                            className="mt-4 h-12 bg-orange-300 hover:bg-orange-800"
                            sx={{
                                backgroundColor: 'orange', // Sets the background color to orange
                                '&:hover': {
                                    backgroundColor: 'darkorange', // Sets the hover color to a darker shade of orange
                                },
                            }}
                        >
                            <span className="text-lg text-black">Register</span>
                        </Button>


                    </form>

                    {registerError && (
                        <Typography variant="body1" color="error" align="center" className="mt-4">
                            {registerError}
                        </Typography>
                    )}
                    {success && (
                        <Typography variant="body1" color="success" align="center" className="mt-4">
                            {success}
                        </Typography>
                    )}

                    <div className="my-4">
                        <Typography variant="body1" align="center" className="mt-4">
                            Already have an account? Please{" "}
                            <Link to="/login" className="text-orange-600 font-bold">
                                Login
                            </Link>
                        </Typography>
                    </div>
                    <Typography variant="body1" align="center">
                        Go back to{" "}
                        <Link to="/" className="text-orange-500 font-bold">
                            Home
                        </Link>
                    </Typography>
                </Box>
            </Container>

            <ToastContainer />
        </div>
    );
};

export default Register;
