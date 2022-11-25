import JobListPage from './JobListPage/JobListPage';
import DetailedPage from './DetailedPage/DetailedPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<JobListPage/>}/>
                <Route path='/DetailedPage' element={<DetailedPage/>}/>


        
        </Routes>
        </Router>
    );
}

export default App;
