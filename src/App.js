import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchPage from './components/SearchPage';
import ShelfPage from './components/ShelfPage';
import { useEffect, useState } from 'react';
import * as BooksAPI from './services/BooksAPI';


function App() {
  const [books, setBooks]=useState([]);
  const [results, setResults]=useState([]);

  useEffect(()=>{
    BooksAPI.getAllBooks().then((data)=>{
      setBooks(data);
    })
  },[])


  const search=(e)=>{
    if(e.target.value){
        BooksAPI.getBooks(e.target.value).then((data)=>{
          setResults(data);
    })
    } else {
      setResults([]);
    }

  }

  const moveShelf=(e, id)=>{
    BooksAPI.updateBooks(id, e.target.value).then(
      BooksAPI.getAllBooks().then((data)=>{
        setBooks(data);
      })
    )

  }

  return (
    <Router>
      <Switch>
        <Route exact path="/">
            <ShelfPage books={books} moveShelf={moveShelf}/>
        </Route>

        <Route path="/search">
            <SearchPage results={results} search={search} moveShelf={moveShelf}/>
        </Route>
      </Switch>

  </Router>
  );
}

export default App;
