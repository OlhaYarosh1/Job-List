import JobListPage from './JobListPage/JobListPage';
import DetailedPage from './DetailedPage/DetailedPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import jobsJson from './JobListPage/JobListContainer/jobs.json'

function App() {

    const jobs = jobsJson;

    const getListContent = () => {
        if(jobs) {
            return jobs.map((job, index) => {
                console.log(job.id)
                return (job.id)
            })
        }
    }

    console.log(getListContent())

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<JobListPage/>}/>
                    <Route path={'/DetailedPage/' + `${getListContent()}`} element={<DetailedPage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
