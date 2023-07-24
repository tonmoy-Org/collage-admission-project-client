import logo from '../../../assets/logo/logo.png'
import github from '../../../assets/icon/github-logo.png'
import linkedin from '../../../assets/icon/linkedin.png'
import twitter from '../../../assets/icon/twitter.png'
import facebook from '../../../assets/icon/facebook.png'
const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
                <img className='w-72' src={logo} alt="" />
                <p>Lorem ipsum dolor sit amet, consectetur  adipiscing elit,  <br /> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                <div className='flex gap-4 mt-4'>
                    <div className='transform transition duration-300 ease hover:-translate-y-1 hover:scale-95'>
                        <a href="https://github.com/Tonmoy-Org"> <img className='w-6' src={github} alt="" /></a>
                    </div>
                    <div className='transform transition duration-300 ease hover:-translate-y-1 hover:scale-95'>
                        <a href="https://www.linkedin.com/in/md-tanvirhasantonmoy/"> <img className='w-6' src={linkedin} alt="" /></a>
                    </div>
                    <div className='transform transition duration-300 ease hover:-translate-y-1 hover:scale-95'>
                        <a href="https://twitter.com/tonmoyOrg"> <img className='w-6' src={twitter} alt="" /></a>
                    </div>
                    <div className='transform transition duration-300 ease hover:-translate-y-1 hover:scale-95'>
                        <a href="https://www.facebook.com/md.tanvirhasantonmoy.org?mibextid=ZbWKwL"> <img className='w-6' src={facebook} alt="" /></a>
                    </div>
                </div>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;