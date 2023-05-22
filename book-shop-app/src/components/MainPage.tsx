import Books from "./Books";
import FilterBar from "./FilterBar";
import Header from "./Header";

const MainPage = () => {

    return (
        <div className="flex flex-col w-[2000px]">
            <Header></Header>
            <div className="flex">
                <FilterBar></FilterBar>
                <Books></Books>
            </div>
        </div>
    )
}

export default MainPage;