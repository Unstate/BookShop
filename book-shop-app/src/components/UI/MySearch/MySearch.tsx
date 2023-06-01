import classes from './MySearch.module.css'

interface MySearch {
}

export const MySearch:React.FC<MySearch> = ({...props}) => {
    return (
        <div className={classes.mySearchContainer}>
            <input {...props} className={classes.mySearch} placeholder='Название книги'></input>
        </div>
    )
}