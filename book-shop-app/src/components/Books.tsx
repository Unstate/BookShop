import { useState } from 'react'
import Book from './Book'

const Books = () => {

    const [books, setBooks] = useState([
        {
            id: 1,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 2,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 3,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 4,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 5,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 6,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 7,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 8,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 9,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 10,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 11,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 12,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 13,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 14,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 15,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 16,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 17,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 18,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 19,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 20,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 21,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 22,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 23,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 24,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 25,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 26,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 27,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 28,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 29,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 30,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 31,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 32,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 33,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 34,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 35,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 36,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 37,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 38,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 39,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 40,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 41,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 42,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 43,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 44,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },
        {
            id: 45,
            author: 'ASJIFAISJF',
            title: 'aksfsdfjsdg',
            genres: ['fantasy', 'horror', 'adventure']
        },

    ])


    return (
        <div className="w-[70%] bg-yellow-100 flex flex-wrap space-x-[30px] m-auto">
            {books.map(book =>
                <Book
                    key={book.id}
                    id={book.id}
                    author={book.author}
                    title={book.title}
                    genres={book.genres}>{book.title}</Book>)}
        </div>
    )
}

export default Books