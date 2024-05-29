import { Row } from 'react-bootstrap';
import './App.css';
import LogInForm from './components/log-in-form';
import { Route, Routes } from 'react-router-dom';
import LogInUsersRecords from './components/login-users-data';

function App() {
  return (
    <>
      <Row style={{ height: '100vh', backgroundColor: 'gray' }}>
        <Routes>
          <Route path='/' element={<LogInForm />} />
          <Route path='/users-data' element={<LogInUsersRecords />} />
        </Routes>
      </Row>
    </>
  );
}

export default App;
