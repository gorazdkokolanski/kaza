import React from 'react'

const ResetPassword = () => {
    return (
        <>

            <div className="container w-100">
                <div className="left-section"
                    style={{backgroundImage: "url(assets/img/sign-up-img.png)",backgroundSize: "cover", backgroundPosition: "center"}}>
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
                        <h1>Set new password</h1>
                        <p style={{ opacity: 0.5 }}>Must be at least 8 characters</p>

                        <form>


                            <div className="form-group text-center">
                                <label for="password"> New Password</label>
                                <div className="password-input-container">
                                    <input type="password" id="password" placeholder="New Password" value="***********"
                                        style={{textAlign:"center"}}/>
                                    <button type="button" id="toggle-password">
                                        <i data-lucide="eye"></i>
                                    </button>
                                </div>
                            </div>
                            <div className="form-group text-center">
                                <label for="password"> Confirm New Password</label>
                                <div className="password-input-container">
                                    <input type="password" id="password" placeholder="Confirm New Password" value="***********"
                                        style={{textAlign:"center"}} />
                                    <button type="button" id="toggle-password">
                                        <i data-lucide="eye"></i>
                                    </button>
                                </div>
                            </div>
                            <button className="create-account-btn" id="submitBtn">Reset Password</button>


                        </form>
                    </div>
                </div>
            </div>
            <div id="popupModal" className="modal hidden">
                <div className="modal-content">
                    <button className="close-btn" onclick="closeModal()">  <img src="assets/img/sign-up-remove.png" width="29.84px" /></button>
                    <h2>Password has been reset</h2>
                    <p>Now You Can Sign In</p>
                    <button className="signin-btn"><a href="sign-in.html">Sign In</a>
                    </button>
                </div>
            </div>

        </>
    )
}

export default ResetPassword