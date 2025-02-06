import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Textform from './components/TextForm.jsx'; 

function App() {
    const [mode, setmode] = useState('light');

    const togglemode = () => {
        if (mode === 'light') {
            setmode('dark'); 
            document.body.style.backgroundColor ='grey'
        } else {
            setmode('light'); 
            document.body.style.backgroundColor ='white'
        }
    };

    return (
        <Router>
            <Navbar title="TextUtils" aboutText ="Default About Text" mode={mode} togglemode={togglemode} />
            <div className="container my-3">
                <Routes>
                    <Route path="/" exact element={<Textform mode={mode}/>} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
