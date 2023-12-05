import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import ScrollToTopLink from './ScrollToTop'

const Header = () => {
	const [openMenu, setOpenMenu] = useState(false)

	return (
		<nav>
			<Link to="/" className="title">
				<img
					src="https://cdn-icons-png.flaticon.com/512/7870/7870706.png"
					style={{ height: '50px', width: '50px', borderRadius: '5px' }}
					alt=" &#8634;"
					onClick={() => window.scrollTo(0, 0)}
				></img>
				<span className="ms-3 " onClick={() => window.scrollTo(0, 0)}>
					Placement Chatbot
				</span>
			</Link>
			<div
				className="menu"
				onClick={() => {
					setOpenMenu(!openMenu)
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<ul
				className={openMenu ? 'open' : ''}
				style={{ marginRight: '8px' }}
				onClick={() => {
					setOpenMenu(false)
				}}
			>
				</ul>
		</nav>
	)
}

export default Header
