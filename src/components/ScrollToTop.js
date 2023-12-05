import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const ScrollToTopLink = ({ to, children }) => {
	const navigate = useNavigate()

	const handleLinkClick = () => {
		navigate(to)
		window.scrollTo({top:0,behavior:'smooth'})

	}
	//   const isActive = window.location.pathname === to;

	return (
		<NavLink onClick={handleLinkClick} to={to}>
			{children}
		</NavLink>
	)
}

export default ScrollToTopLink
