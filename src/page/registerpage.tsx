import '../asset/style.css';
import { Link } from 'react-router-dom';
import AnimatedPage from '../component/animatedpage';

const Register = () => {
    return (
        <div className="main-page">
            <div className="custom-shape-divider-top-1709165903">
                {/* SVG for top shape */}
            </div>
            <div className="custom-shape-divider-bottom-1709164904">
                {/* SVG for bottom shape */}
            </div>
            <AnimatedPage>
                <div className='login-container'>
                    <header>Register</header>
                    <form action="">
                        <div>
                            <input type="email" id="email" name="email" className='login email' placeholder='Email' required />
                        </div>
                        <div>
                            <input type="text" id="username" name="username" className='login username' placeholder='Username' required />
                        </div>
                        <div>
                            <input type="password" id="password" name="password" className='login password' placeholder='Password' required />
                        </div>
                        <div>
                            <input type="password" id="confirmPassword" name="confirmPassword" className='login confirmPassword' placeholder='Confirm Password' required />
                        </div>
                        <div>
                            <label className="checkbox-label">
                                <input type="checkbox" id="agreeTerms" name="agreeTerms" required />
                                <span className="checkbox-text">I agree to the terms and conditions</span>
                            </label>
                        </div>
                        <div>
                            <label className="checkbox-label">
                                <input type="checkbox" id="acceptNewsletter" name="acceptNewsletter" />
                                <span className="checkbox-text">I accept to receive newsletters</span>
                            </label>
                        </div>
                        <button type='button' className='button button-log'>REGISTER</button>
                    </form>
                </div>
                <Link to='/' className='button button-back'>BACK</Link>
            </AnimatedPage>
        </div>
    );
}

export default Register;