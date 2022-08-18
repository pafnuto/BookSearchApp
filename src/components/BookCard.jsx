import React, { useState} from 'react';
import ShowBook from './ShowBook';

const BookCard = ({ book })=> {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();
    return (
//используя данные из api выводим их на страницу       
    <>
       {book.map((item) => {
            let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
            let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
            if  (thumbnail!= undefined && amount !=undefined)        
       {return (
            <>
            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
            <img src={thumbnail} alt="" />
            <div className="bottom">
            <h3 className="title">{item.volumeInfo.title}</h3>
            <p className="amount">&#8381;{amount}</p>
            </div>
            </div>
            </>
            )}
            })        
            }
            <ShowBook show={show} item={bookItem} onClose={()=>setShow(false)}/>        
         </>
    );
};

export default BookCard;        
            

