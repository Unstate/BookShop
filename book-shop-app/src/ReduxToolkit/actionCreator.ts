import axios from "axios";
import { AppDispatch } from "./store";
import { BooksProps, booksSlice } from "./booksSlice";

export const fetchBooks = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(booksSlice.actions.booksFetching())
        const response = await axios.get<BooksProps[]>('/api/books/')
        console.log(response)
        dispatch(booksSlice.actions.booksFetchingSucces(response.data))
    } catch (error: any) {
        dispatch(booksSlice.actions.booksFetchingError(error.message))
    }
}