import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
    
     <footer className="site-footer ">
      <div className='container'>
         <div class="line-bg">
                  <img src="assets/img/line-footer.png" />
                </div>
                <div className="footer-links">
                    <img src="assets/img/image-footer-logo.png" alt="KazaSwap logo" className="footer-logo"/>
                    <div className="d-flex justify-content-around gap-100 footer-last-sec3">
                        <Link to="/confidential" className="footer-link">Confidentiality</Link> 
                        <p className='border-btm-footer hide-on-mobile'></p>

                        <Link to="/terms" className="footer-link">Terms of Use</Link>
                    </div>
                    <div className="footer-contact footer-last-sec2">
                        <a href="mailto:community@kazaswap.co" className="contact-email">community@kazaswap.co</a> 
                   
                    </div>
                     <div className="footer-contact footer-last-sec row hide-on-desktop">
                         <p>© 2025 Kaza Swap LLC. All rights reserved.</p>
                    </div>
                </div>
        </div>
     </footer> 
    
    </>
  )
}

export default Footer