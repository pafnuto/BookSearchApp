import React, {useState} from 'react';
import BookCard from './BookCard'
import { BsSearch } from "react-icons/bs";
import axios from 'axios';
import '../App.scss'

const Main = () => {
    const [search,setSearch]=useState("");
    const [data,setData]=useState([]);
    const searchBook=(evt)=>{
        if(evt.key==="Enter")
        {
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDqr0cZNnRrXhDIgZg5bAoCzUt6UGHsYKE'+'&maxResults=20')
            .then(res=>setData(res.data.items))
            .catch(err=>console.log(err))
        }
    }
    return (
        <div>
        <div className="header">
            <div className="row1">
                <h1>Библиотека – это и место работы, и храм мысли, и научно – исследовательский центр, и лаборатория, и музей, и место высоких радостей ума и глаз» (Н. Рерих)</h1>
            </div>
            <div className="row2">
            <h2>Найдите свою книгу:</h2>
                <div className="search">
                <input type="text" placeholder="Введите название книги"
                value={search} onChange={e=>setSearch(e.target.value)}
                onKeyPress={searchBook}/>
                <button><BsSearch /></button>
                </div>
            </div>
        </div>
        <div className="container">
              {<BookCard book={data}/>}  
            </div>
        </div>
    );
};

export default Main;