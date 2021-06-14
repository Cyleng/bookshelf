import React from 'react';

const SearchPage=({results, search, moveShelf})=>{

    return(
        <div className="app">
        <div className="search-books">
          <div className="search-books-bar">
            <a className="close-search" href="/">Close</a>
            <div className="search-books-input-wrapper">
              <input type="text" placeholder="Search by title or author" onChange={search} />
            </div>
          </div>
          <div className="search-books-results">
            <div className="results-quantity">Your search returned 10 results.</div>
            <ol className="books-grid">
                {results.map((result)=>{
                    if(result){
                        return (
                            <li key={result.id}>
                            <div className="book">
                              <div className="book-top">
                                <div
                                  className="book-cover"
                                  style={{
                                    width: "128px",
                                    height: "193px",
                                    backgroundImage: `url(${result.imageLinks===undefined?"":result.imageLinks.thumbnail})`
                                  }}
                                ></div>
                                <div className="book-shelf-changer">
                                  <select onChange={(e)=>{moveShelf(e, result.id)}}>
                                    <option value="move" disabled="">Move to...</option>
                                    <option value="currentlyReading">Currently Reading</option>
                                    <option value="wantToRead">Want to Read</option>
                                    <option value="read">Read</option>
                                    <option value="none">None</option>
                                  </select>
                                </div>
                              </div>
                              <div className="book-title">{result.title}</div>
                              <div className="book-authors">{result.authors}</div>
                            </div>
                          </li>                        
                        )
                    }else {
                        return (<></>)
                    }
                    
                })}

            </ol>
          </div>
        </div>
      </div>
    )
};

export default SearchPage;