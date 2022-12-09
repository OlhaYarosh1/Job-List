import JobListPage from './JobListPage/JobListPage';
import DetailedPage from './DetailedPage/DetailedPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import { useState } from 'react';

function App() {

    const [myId, setMyId] = useState();

    const mySetData = (jobId) => {
        setMyId(jobId);
    }

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<JobListPage mySetData={mySetData}/>}/>
                    <Route path={'/DetailedPage'} element={<DetailedPage myId={myId}/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
