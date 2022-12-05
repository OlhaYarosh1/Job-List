import JobListPage from './JobListPage/JobListPage';
import DetailedPage from './DetailedPage/DetailedPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import jobsJson from './JobListPage/JobListContainer/jobs.json'

function App() {

    const jobs = jobsJson;
    console.log(jobs[0].id)

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<JobListPage/>}/>
                    <Route path={'/DetailedPage/' + `${jobs[0].id}`} element={<DetailedPage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
