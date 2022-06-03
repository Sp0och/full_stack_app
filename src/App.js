import {Header, Video, Headline,Image } from './components/top.js'
import Footer from './components/footer.js'
import Placeholder from './components/placeholder.js'
import ShoppingList from './components/list.js'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './css/index.css'
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
                        <ShoppingList/>
                        <Footer/>
                        </>
                    }/>
                </Routes>
            </>
        </Router>
    )
}

export default App;