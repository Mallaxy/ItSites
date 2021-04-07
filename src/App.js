import './App.css';
import MainPageContainer from "./components/MainPage/MainPageContainer";
import {HeaderContainer} from "./components/Header/HeaderContainer";

function App() {
    return (
        <div className='wrapper'>
            <div className='container'>
                <div className='main'>
                    <HeaderContainer/>
                    <div className='page'>
                        <MainPageContainer/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
