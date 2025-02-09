import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import About from './components/About.jsx';
import Textform from './components/TextForm.jsx';
import Alert from './components/alert.jsx';


function App() {
    const [mode, setmode] = useState('light');
    const [alert, setalert] = useState(null);
    const togglemode = () => {
        if (mode === 'light') {
            setmode('dark');
            document.body.style.backgroundColor = 'grey'
            showalert("dark mode has been enabled","success")
            document.title = "TextUtiles dark-mode"
        } else {
            setmode('light');
            document.body.style.backgroundColor = 'white'
            showalert("light mode has been enabled","success")
            document.title = "TextUtiles light-mode"

        }
    };

    const showalert = (message, type) => {
        setalert({
            msg: message,
            typ: type
        })

        // Automatically remove the alert after 3 seconds
        setTimeout(() => {
            setalert(null);
        }, 3000);
    };


    return (
        <Router>
            <Navbar title="TextUtils" aboutText="Default About Text" mode={mode} togglemode={togglemode} />
            <Alert alert={alert} />
            <div className="container my-3">
                <Routes>
                    <Route path="/" exact element={<Textform mode={mode} showalert={showalert} />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
