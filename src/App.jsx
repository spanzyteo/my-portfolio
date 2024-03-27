import { Box, Stack, Typography } from '@mui/material'
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'

function App() {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </Box>
  )
}

export default App
