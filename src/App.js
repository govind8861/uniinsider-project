import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import React, { lazy, Suspense,useEffect,useState } from 'react';
import { Routes, Route,useLocation } from 'react-router-dom';
import { FidgetSpinner } from 'react-loader-spinner'


const MedicalDisclosure = lazy(() => import('./components/pages/MedicalDisclosure'));



function App() {
	const [loading,setLoading] = useState(false);
  useEffect(()=>{
    setLoading(true);
    setTimeout(()=>{
      setLoading(false);
    },1500)
    
  },[])

	return (
		<>
		<div className="App">
			<Header />
			<Routes>
				<Route path="/" element={<MedicalDisclosure />} />
			</Routes>
			
			<FooterWithConditionalRendering />
		</div>
		</>
	)

}
function FooterWithConditionalRendering() {
	const location = useLocation()

	// Exclude the Footer component from rendering on the MedicalDisclosure page
	if (location.pathname === '/medical') {
		return null
	}

	return <Footer />
}

export default App
