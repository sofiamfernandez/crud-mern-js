import './App.css';

//Components
import { UsersList } from './components/UsersList';
import { AddUser } from './components/AddUser';
import { EditUser } from './components/EditUser';

//Routing
import {BrowserRouter, Routes, Route} from 'react-router-dom';

//React Bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">MERN CRUD</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="create">Create user</Nav.Link>
           
          </Nav>
        </Container>
      </Navbar>

      <BrowserRouter >
        <Routes>
          <Route path='/' element={<UsersList />} exact> </Route>
          <Route path='/create' element={<AddUser />} exact> </Route>
          <Route path='/edit/:userid' element={<EditUser />} exact> </Route>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
