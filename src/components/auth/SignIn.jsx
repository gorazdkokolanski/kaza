import React from 'react'

const SignIn = () => {
    return (
        <>
            <div className="container w-100">
                <div className="left-section" style={{backgroundImage: "url(assets/img/sign-up-img.png)",backgroundSize: "cover",backgroundPosition: "center"}}>
                    <div className="logo">
                        <img src="assets/img/image-footer-logo.png" width="150px" />
                    </div>



                    <h2 className="tagline">Swap your place, explore the world</h2>
                </div>

                <div className="right-section">
                    <a href="index.html" className="look-around">
                        <img src="assets/img/sign-up-remove.png" width="29.84px" />
                    </a>

                    <div className="form-container">
                        <h1>Sign In</h1>

                        <form>

                            <div className="form-group">
                                <label for="email">Email</label>
                                <input type="email" id="email" placeholder="Add your email" />
                            </div>

                            <div className="form-group">
                                <label for="password"> Password</label>
                                <div className="password-input-container">
                                    <input type="password" id="password" placeholder="Password" />
                                    <button type="button" id="toggle-password">
                                        <i data-lucide="eye"></i>
                                    </button>
                                </div>
                            </div>


                            <div className="form-forgot">
                                <a href="forgot-pass.html"><img src="assets/img/forgot-password.png" width="24px" />  Forgot your password?</a>
                            </div>
                            <button type="submit" className="create-account-btn">Sign In</button>
                            <div className="dont-acc">
                                <p>Don't have an account? <a href="sign-up.html"><img src="assets/img/register-icon.png" width="24px" /> Register</a></p>
                            </div>

                        </form>
                    </div>
                </div>
            </div>



        </>
    )
}

export default SignIn