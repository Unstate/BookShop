import classes from './../types/Header.module.css'
import { MySearch } from './UI/MySearch/MySearch'

const Header = () => {

    return (
        <>
            <div className={classes.headerContainer}>
                <div className={classes.logo}>
                    <div>
                        <img src='/pictures/logotype.svg'></img>
                    </div>
                    <div>
                        mooduck
                    </div>
                </div>
                <nav className={classes.nav}>
                    <ul className={classes.itemsContainer}>
                        <li className={classes.item}>Акции</li>
                        <li className={classes.item}>Новинки</li>
                        <li className={classes.item}>Бестселлеры</li>
                        <li className={classes.item}>Подборки</li>
                    </ul>
                </nav>
                <MySearch></MySearch>
            </div>  
            <hr></hr>
        </>
    )
}

export default Header