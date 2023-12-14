import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
const Footer = () => {
	const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth', // Adds smooth scrolling animation
        });
      };
    
	return (
		<div className="">
			<footer className="app-footer container-fluid p-5">
				<div className="row">
					<div className="footer-logo col-md-5">
						<Link to='/' style={{textDecoration:'none',color:'white'}} onClick={scrollToTop}>
						<img
					src="https://cdn-icons-png.flaticon.com/512/7870/7870706.png"
					style={{ height: '50px', width: '50px', borderRadius: '5px' }}
					alt=" &#8634;"
					onClick={() => window.scrollTo(0, 0)}
				></img>
			
						<span className="ms-3 h4 " style={{ fontWeight: 'bold' }}>
							Placement Chatbot
						</span>
						</Link>
						</div>
					<hr/>
					<div className="footer-links col-md ">
						<h3>The Company</h3>
						<ul>
							<li>
								{' '}
								<i className="fa fa-chevron-right"></i>&nbsp;
								<Link to="/" onClick={scrollToTop}>Home</Link>
							</li>
							<li>
								{' '}
								<i className="fa fa-chevron-right"></i>&nbsp;
								<Link to="/about" onClick={scrollToTop}>About</Link>
							</li>
							<li>
								{' '}
								<i className="fa fa-chevron-right"></i>&nbsp;
								<Link to="/injury" onClick={scrollToTop}>Terms & Conditions</Link>
							</li>
							<li>
								{' '}
								<i className="fa fa-chevron-right"></i>&nbsp;
								<Link to="/injury" onClick={scrollToTop}>Feedbacks</Link>
							</li>
							<li>
								{' '}
								<i className="fa fa-chevron-right"></i>&nbsp;
								<Link to="/injur" onClick={scrollToTop}> Contact</Link>
							</li>
						</ul>
					</div>
					<hr/>
					<div className="footer-contact col-md">
						<p className="mb-5 h4">Contact Info:</p>
						<p>Email: govindmaurya8699@gmail.com</p>
						<p>City: Jalandhar</p>
						<p>State: Punjab</p>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4"></div>
					<div className="foot col-md-4 mt-4 ">
						<ul>
							<li>
								<i className="fa fa-2x fa-facebook"></i>
							</li>
							<li>
								<i className="fa fa-2x fa-twitter"></i>
							</li>
							<li>
								<i className="fa fa-2x fa-instagram"></i>
							</li>
							<li>
								<i className="fa fa-2x fa-google"></i>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	)
}

export default Footer
