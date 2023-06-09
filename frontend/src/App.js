import './App.css';
import React, {useEffect, useState} from 'react';
import HomepageContainer from './Containers/HomepageContainer';
import BookListContainer from './Containers/BookListContainer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import { getBooks } from './helpers/BookService';
import BookItem from './Components/BookItem';
import LoginContainer from './Containers/LoginContainer';
import RegisterContainer from './Containers/RegisterContainer';
import ProfileContainer from './Containers/ProfileContainer';



function App() {

  	const [books, setBooks] = useState([]);
    const [password, setPassword] = useState("");
		const [email, setEmail] = useState("");
		const [users, setUsers] = useState([]);
		const [user, setUser] = useState([]);

		useEffect(() => {
			fetchBooks();
		}, []);

		const fetchBooks = () => {
			getBooks()
				.then((res) => res.json())
				.then((data) => setBooks(data));
			console.log(books);
		};

    const logOutUser = () => {
      setUser(null)
    }


  return (
    <div className="App">
  <Router>
    <Routes>
      <Route path ="/" element={<LoginContainer setUser={setUser} setEmail={setEmail} user={user} setUsers={setUsers} setPassword={setPassword} users={users} password={password} email={email}/>}/>
      <Route path="/register" element ={<RegisterContainer />} />
      <Route path="/home" element = {<HomepageContainer user={user}/>} />
      <Route path = "/books" element={<BookListContainer books={books} user={user}/>}/>
      <Route path="/profile" element={<ProfileContainer user={user} logOutUser={logOutUser} setUser={setUser}/>} />
    </Routes>
  </Router>
    </div>
  );
}

export default App;
