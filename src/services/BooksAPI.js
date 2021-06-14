const api="http://localhost:5001/books";

export const getBooks = async (keyword) =>{
    if(keyword){
        const response= await fetch(`${api}`);
        const data = await response.json();

        const refineData= await data.filter((book)=>{
            return book.title.toLowerCase().includes(keyword.toLowerCase());
        })
        
        return refineData;
    }
}

export const updateBooks = async (id,option)=>{
    const response = await fetch(`${api}/${id}`, {
        method: 'PATCH',
        headers:{
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({state: option}),
    });

};

export const getAllBooks = async ()=>{
    const response= await fetch (`${api}`);
    return await response.json();
}