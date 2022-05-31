import {Header, Video, Headline,Image } from './components/top.js'
import Footer from './components/footer.js'
import Placeholder from './components/placeholder.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './css/index.css'
function App(){
    return(
        <Router>
            <>
                <Header />
                <div className='content'>
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <div className='main'>
                        <Image/>
                        <Headline/>
                        <Placeholder/>
                        </div>
                        <Footer/>
                        </>
                    }/>
                    <Route exact path='/about' element={
                        <>
                        <div className='main'>
                        <Video/>
                        <Headline/>
                        <Placeholder/>
                        <Footer/>
                        </div>
                        </>
                    }/>
                </Routes>
                </div>
            </>
        </Router>
    )
}

export default App;