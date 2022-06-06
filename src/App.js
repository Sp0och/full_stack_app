import {Header, Video, Headline,Image } from './components/Top.js'
import Footer from './components/Footer.js'
import Placeholder from './components/Placeholder.js'
import List from './components/List.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
function App(){
    return(
        <Router>
            <>
                <Header />
                <Routes>
                    <Route exact path="/" element={
                        <>
                        <Image/>
                        <Headline/>
                        <Placeholder/>
                        <Footer/>
                        </>
                    }/>
                    <Route exact path='/about' element={
                        <>
                        <Video/>
                        <Headline/>
                        <Placeholder/>
                        <Footer/>
                        </>
                    }/>
                    <Route exact path='/github' element={
                        <>
                        <Video/>
                        <Headline/>
                        <Placeholder/>
                        <Footer/>
                        </>
                    }/>
                    <Route exact path='/linkedin' element={
                        <>
                        <Video/>
                        <Headline/>
                        <Placeholder/>
                        <Footer/>
                        </>
                    }/>
                    <Route exact path='/list' element={
                        <>
                        <List/>
                        <Footer/>
                        </>
                    }/>
                </Routes>
            </>
        </Router>
    )
}

export default App;