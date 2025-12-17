import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import NotFound from './components/NotFound';
import { Container, Toolbar } from '@mui/material';
// import Projects from './components/Project';

function App() {
  return (
    <>
      <Navbar />
      <Toolbar />
      <Container maxWidth="lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/projects" element={<Projects />} /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Container>
    </>
  )
}
export default App