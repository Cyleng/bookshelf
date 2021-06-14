import React from 'react';

const ShelfPage=({books, moveShelf})=>{
    return(
        <div className="app">
        <div className="list-books">
          <div className="list-books-title"><h1>MITTReads</h1></div>
          <div className="list-books-content">
            <div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Currently Reading</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book)=>{
                        if (book.state==="currentlyReading"){
                            return (
                                <li key={book.id}>
                                <div className="book">
                                  <div className="book-top">
                                    <div
                                      className="book-cover"
                                      style={{
                                        width: "128px",
                                        height: "193px",
                                        backgroundImage: `url(${book.imageLinks===undefined?"":book.imageLinks.thumbnail})`
                                      }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                      <select onChange={(e)=>{moveShelf(e, book.id)}}>
                                        <option value="move" disabled="">Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{book.title}</div>
                                  <div className="book-authors">{book.authors}</div>
                                </div>
                              </li>
                            )
                        }
                    })}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Want To Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                    {books.map((book)=>{
                        if (book.state==="wantToRead"){
                            return (
                                <li key={book.id}>
                                <div className="book">
                                  <div className="book-top">
                                    <div
                                      className="book-cover"
                                      style={{
                                        width: "128px",
                                        height: "193px",
                                        backgroundImage: `url(${book.imageLinks===undefined?"":book.imageLinks.thumbnail})`
                                      }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                      <select onChange={(e)=>{moveShelf(e, book.id)}}>
                                        <option value="move" disabled="">Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{book.title}</div>
                                  <div className="book-authors">{book.authors}</div>
                                </div>
                              </li>   
                            )
                        }
                    })}
                  </ol>
                </div>
              </div>
              <div className="bookshelf">
                <h2 className="bookshelf-title">Read</h2>
                <div className="bookshelf-books">
                  <ol className="books-grid">
                  {books.map((book)=>{
                        if (book.state==="read"){
                            return (
                                <li key={book.id}>
                                <div className="book">
                                  <div className="book-top">
                                    <div
                                      className="book-cover"
                                      style={{
                                        width: "128px",
                                        height: "193px",
                                        backgroundImage: `url(${book.imageLinks===undefined?"":book.imageLinks.thumbnail})`
                                      }}
                                    ></div>
                                    <div className="book-shelf-changer">
                                      <select onChange={(e)=>{moveShelf(e, book.id)}}>
                                        <option value="move" disabled="">Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                                      </select>
                                    </div>
                                  </div>
                                  <div className="book-title">{book.title}</div>
                                  <div className="book-authors">{book.authors.join(', ')}</div>
                                </div>
                              </li>       
                            )
                        }
                    })}                      
                  </ol>
                </div>
              </div>
            </div>
          </div>
          <div className="open-search"><a href="/search">Add a book</a></div>
        </div>
      </div>
    )
};

export default ShelfPage;