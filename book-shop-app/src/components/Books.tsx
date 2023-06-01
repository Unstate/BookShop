import { useEffect } from 'react'
import Book from './Book'
import classes from './../types/Books.module.css'
import { useAppDispatch, useAppSelector } from '../hooks/redux'
import { fetchBooks } from '../ReduxToolkit/actionCreator'

const Books = () => {

    const dispatch = useAppDispatch()
    const { books } = useAppSelector(state => state.booksReducer)

    useEffect(() => {
        dispatch(fetchBooks())
    }, [])

    return (
        <div className={classes.booksContainer}>
            {books.map(book =>
                <Book
                    key={book.id}
                    id={book.id}
                    author={book.authors}
                    title={book.title}
                    img = {book.img}
                    genres={book.genre}>{book.title}</Book>)}
        </div>
    )
}

export default Books