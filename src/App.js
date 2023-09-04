import { Routes, Route } from 'react-router-dom';
import Nav from './components/Navigation';
import Home from './pages/Home';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
