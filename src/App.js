import './App.css';
import {Header} from "./components/Header/Header";
import MainPageContainer from "./components/MainPage/MainPageContainer";

function App() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='main'>
                    <Header/>
                    <div className='page'>
                        <MainPageContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
