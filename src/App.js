import JobListPage from './JobListPage/JobListPage';
import DetailedPage from './DetailedPage/DetailedPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/index';

function App({ jobId }) {

    return (
        <Provider store={store}>
            <Router>
                <Routes>
                    <Route path='/' element={<JobListPage/>}/>
                    <Route path={'/DetailedPage/'} element={<DetailedPage/>}/>
                </Routes>
            </Router>
        </Provider>
    );
}

export default App;
