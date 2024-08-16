import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { FcGoogle } from "react-icons/fc";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import useAuth from '../../hooks/useAuth';
import { Button, Container, TextField } from '@mui/material';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const Login = () => {
  const { googleSignIn } = useAuth();
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const from = location.state?.from?.pathname || "/";

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then(result => {
        Swal.fire({
          title: "User Login Successful.",
          showClass: {
            popup: `animate__animated animate__fadeInUp animate__faster`
          },
          hideClass: {
            popup: `animate__animated animate__fadeOutDown animate__faster`
          }
        });
        navigate(from, { replace: true });
      })
      .catch(error => {
        console.error(error);
        toast.error('Invalid Email/Password');
      });
  }

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(result => {
        const userInfo = {
          email: result.user?.email,
          name: result.user?.displayName
        }
        axiosPublic.post('/users', userInfo)
          .then(() => {
            navigate('/');
          });
      });
  };

  return (
    // <div className="relative min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('../../../src/assets/images/bgReg0.jpeg')" }}>
    <div className="relative min-h-screen bg-cover bg-center">
      <Helmet>
        <title>Login</title>
      </Helmet>

      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: "url('../../../src/assets/images/bgReg0.jpeg')" }}>
      </div>
      <div className="absolute inset-0 bg-black opacity-50"></div>


      <Container maxWidth="sm" className="relative z-10">
        <div className="flex items-center justify-center min-h-screen">
          <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
            <h1 className="text-3xl md:text-5xl font-bold text-orange-600 mb-6 text-center animate__animated animate__fadeInDown">
              Login now!
            </h1>

            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  placeholder="email"
                  required
                  fullWidth
                />
              </div>
              <div className="mb-6">
                <TextField
                  label="Password"
                  type="password"
                  name="password"
                  required
                  placeholder="password"
                  fullWidth
                />
                <div className="text-right">
                  <Link to="#" className="text-orange-500 text-sm">
                    Forgot password?
                  </Link>
                </div>
              </div>
              <Button
                type="submit"
                variant="contained"
                fullWidth
                className="h-11 mb-4"
                sx={{
                  backgroundColor: 'orange', // Sets the background color to orange
                  '&:hover': {
                    backgroundColor: 'darkorange', // Sets the hover color to a darker shade of orange
                  },
                }}
              >
                <span className="text-lg text-black">Login</span>
              </Button>
            </form>

            <p className="text-center text-lg mt-4">
              New to this site? Please{' '}
              <Link to="/register" className="text-orange-600 font-bold">
                Register
              </Link>
            </p>

            <div className="text-center mb-4">
              <span className="text-lg font-semibold">or</span>
            </div>

            {/* <div>
                        <Button
                            onClick={handleGoogleSignIn}
                            variant="outlined"
                            fullWidth
                            
                            startIcon={<FcGoogle />}
                            className="mb-4"
                        >
                            Continue with Google
                        </Button>
                    </div> */}

            <Button
              onClick={handleGoogleSignIn}
              variant="outlined"
              fullWidth
              startIcon={<FcGoogle />}
              className="mb-4"
              sx={{
                color: 'orange', // Set text color to orange
                borderColor: 'orange', // Set border color to orange
                '&:hover': {
                  borderColor: 'darkorange', // Change border color on hover
                  color: 'darkorange', // Change text color on hover
                },
              }}
            >
              Continue with Google
            </Button>


            <p className="text-center text-lg">
              Go back to{' '}
              <Link to="/" className="text-orange-600 font-bold">
                Home
              </Link>
            </p>

          </div>
        </div>
      </Container>

      <ToastContainer />
    </div>
  );
};

export default Login;
