import { Image } from '../ReduxToolkit/booksSlice';
import classes from './../types/Book.module.css'
import { MyButton } from './UI/MyButton/MyButton';

interface BookProps {
    id: string;
    author: string[],
    title: string,
    genres: string[];
    img: Image;
    children: React.ReactNode;
}

const Book:React.FC<BookProps> = ({img,author,title}) => {
    return (
        <div className={classes.bookContainer}>
            <div className={classes.imageContainer}>
                {img.thumbnail ? <a href="#"><img className={classes.image} src={img.thumbnail} alt="Картинка не прогрузилась"></img></a> : <a href="#"><img className={classes.image} src='/pictures/cat.jpeg' alt="Картинка не прогрузилась"></img></a>}
            </div>
            <div className={classes.bodyContainer}>
                <div className={classes.titleContainer}>
                    <a href="#">{title}</a>
                </div>
                <div className={classes.authorContainer}>
                    <a href="#">{author}</a>
                </div>
            </div>
            <div className='items-end'><MyButton>Хочу почитать</MyButton></div>
        </div>
    )
}

export default Book;