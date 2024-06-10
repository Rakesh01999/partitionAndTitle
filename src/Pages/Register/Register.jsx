import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Helmet } from "react-helmet-async";
import { updateProfile } from "firebase/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext } from "../providers/AuthProvider";
import { TextField, Button, Typography, Box, Container } from "@mui/material";
import bgRegister from '../../../src/assets/images/bgReg.jpg'
import { data } from "autoprefixer";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

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
        const photo = e.target.photo.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');
        setSuccess('');

        if (password.length < 6) {
            setRegisterError('Password should be at least 6 characters or longer');
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            setRegisterError('Your password should have at least one upper case characters.')
            return;
        }
        else if (!/[a-z]/.test(password)) {
            setRegisterError('Your password should have at least one lower case characters.')
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
                    displayName: name,
                    photoURL: photo
                })
                .then(() => {
                    console.log('user profile info update')
                    // create user entry in the database
                    const userInfo = {
                        name: name,
                        email: email
                    }
                    console.log(userInfo);
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                console.log('user added to the database');
                                // reset();
                                Swal.fire({
                                    position: "top-end",
                                    icon: "success",
                                    title: "User created successfully",
                                    showConfirmButton: false,
                                    timer: 1500
                                });
                                navigate('/');
                            }
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
        // <div className="bg-cover bg-center min-h-screen" style={{ backgroundImage: "url('path/to/your/background-image.jpg')" }}>
        <div className="bg-cover bg-center" style={{ backgroundImage: "url('../../../src/assets/images/bgReg.jpg')" }}>
            <Helmet>
                <title>Register</title>
            </Helmet>
            <Container maxWidth="sm">
                <Box mt={8} p={4} bgcolor="white" boxShadow={3} borderRadius={0}>
                    <Typography variant="h4" align="center" gutterBottom>
                        <span className="text-blue-500 font-bold animate__animated animate__fadeInDown">Register now!</span>
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
                        <TextField
                            label="Photo URL"
                            name="photo"
                            required
                            fullWidth
                            margin="normal"
                        />
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
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            fullWidth
                            className="mt-4 h-12 bg-blue-600 hover:bg-blue-700"

                        >
                            <span className="text-lg">Register</span>
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
                            <Link to="/login" className="text-blue-500 font-bold">
                                Login
                            </Link>
                        </Typography>
                    </div>
                    <Typography variant="body1" align="center">
                        Go back to{" "}
                        <Link to="/" className="text-blue-500 font-bold">
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