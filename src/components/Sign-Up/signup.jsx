import * as requestAPI from '../../api/api'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css'
import landingpagesimg from '../../assets/image/LandingPage.png'
import imgbinar from '../../assets/image/logo.png'

const SignUp = () => {
    const [username , setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)
    const [signUp, setSignUp] = useState('')
    const navigate = useNavigate()


    const handleUsername = (e) => {
        setUsername(e.target.value)
        setSignUp('')
    }
    
    const handleEmail = (e) => {
        setEmail(e.target.value)
        setSignUp('')
    }
    
    const handlePassword = (e) => {
        setPassword(e.target.value)
        setSignUp('')
    }
    
    const handleLogin = async () => {
        const bodyPayload = {
            role: username,
            email: email,
            password: password,
        }
        console.log(bodyPayload)

        setLoading(true)

        try {
            const res = await requestAPI.signUp(bodyPayload)
            console.log(res)

            setSignUp(res)
            setLoading(false)

            alert('Registrasi Berhasil')

            setTimeout(() => {
                navigate('/signin')
            }, 1000);
        } catch (error) {
            console.log(error)
            setSignUp(error)
        }
    }
    return (
        <div className='container-fluid signup-wrapper'>
            <div className="row">
                <div className='col-lg-6 col-md-12 col-sm-12 signup-left'>
                    <div>
                        <img src={imgbinar} width={100} alt="" />
                        <h1 className='mt-4 fs-4 fw-bolder'>Sign Up</h1>
                        {signUp.length ? (<h1>{signUp}</h1>) : null}
                        <p className='label-signup'>Name*</p>
                        <input className='input-signup' placeholder='Nama Lengkap' type="text" onChange={handleUsername} />
                        <p className='label-signup'>Email*</p>
                        <input className='input-signup' placeholder='Contoh: abcde@gmail.com' type="email" onChange={handleEmail} />
                        <p className='label-signup'>Create Password*</p>
                        <input className='input-signup' placeholder='6+ karakter' type="password" onChange={handlePassword} />
                    </div>
                        <button className='btn-signup' onClick={handleLogin} disabled={loading}>{loading ? 'Loading...' : 'Sign Up'}</button>
                        <p className='mt-4 text-center'>Already have an account? <a className='fw-bold' href="/signin">Sign In here</a></p>
                </div>
                <div className='col-lg-6 col-md-12 col-sm-12 signup-right'>
                    <h1 className='signup-text-bcr'>Binar Car Rental</h1>
                    <img className='img-signup' src={landingpagesimg} alt="landingpagesimage" />
                </div>
            </div>
        </div>
    );
}

export default SignUp;