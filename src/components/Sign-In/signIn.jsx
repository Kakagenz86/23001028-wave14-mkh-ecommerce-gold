import * as requestAPI from '../../api/api'
import { useState } from 'react';
import './style.css'
import { useNavigate } from 'react-router-dom';
import landingpagesimg from '../../assets/image/LandingPage.png'
import imgbinar from '../../assets/image/logo.png'

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [signIn, setSignIn] = useState('')
    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
        setSignIn('')
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSignIn('')
    }

    const handleLogin = async () => {
        const bodyPayload = {
            email: email,
            password: password,
        }
        console.log(bodyPayload)

        setLoading(true)

        try {
            const res = await requestAPI.signIn(bodyPayload)
            console.log(res.data.access_token)
            localStorage.setItem("accessToken", res.data.access_token)

            setSignIn(res.data)
            setLoading(false)

            setTimeout(() => {
                navigate('/')
            }, 1000);

        } catch (error) {
            console.log(error)
            setSignIn(error)
        }
    }

    return (
        <div className='container-fluid signin-wrapper'>
            <div className="row">
                <div className='col-lg-6 col-md-12 col-sm-12 signin-left'>
                    <div>
                        <img src={imgbinar} width={100} alt="" />
                        <h1 className='mt-4 fs-4 fw-bolder'>Welcome Back!</h1>
                        {signIn.length ? (<h1>{signIn}</h1>) : null}
                        <p className='label-signin'>Email</p>
                        <input className='input-signin' placeholder='Contoh: abcde@gmail.com' type="email" onChange={handleEmail} />
                        <p className='label-signin'>Password</p>
                        <input className='input-signin' placeholder='6+ karakter' type="password" onChange={handlePassword} />
                    </div>
                        <button className='btn-signin' onClick={handleLogin} disabled={loading}>{loading ? 'Loading...' : 'Sign In'}</button>
                    <p className='mt-4 text-center'>Don`t have an account? <a className='fw-bold' href="/signup">Sign Up for free</a></p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 signin-right'>
                    <h1 className='signin-text-bcr'>Binar Car Rental</h1>
                    <img className='img-signin' src={landingpagesimg} alt="landingpagesimage" />
                </div>
            </div>
        </div>
    );
}

export default SignIn;