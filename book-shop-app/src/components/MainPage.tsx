import Books from "./Books";
import FilterBar from "./FilterBar";
import Header from "./Header";
import classes from "./../types/MainPage.module.css"

const MainPage = () => {

    return (
        <div className={classes.appWrapper}>
            <Header></Header>
            <div className={classes.mainContentContainer}>
                <FilterBar></FilterBar>
                <Books></Books>
            </div>
        </div>
    )
}

export default MainPage;