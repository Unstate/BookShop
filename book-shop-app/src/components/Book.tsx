interface BookProps {
    id: number;
    author: string,
    title: string,
    genres: string[];
    children: React.ReactNode;
}

const Book:React.FC<BookProps> = ({id,author,title,genres}) => {
    return (
        <div className="w-[300px] h-[450px] m-[20px] border-[3px] border-cyan-500">
            <div className="flex justify-center">
                <a href="#"><img className="w-[300px]" src='/pictures/cat.jpeg' alt="Картинка не прогрузилась"></img></a>
            </div>
            <div className=" mt-[20px]">
                <div className="mb-[5px] flex justify-center">
                    <a href="#">{title}</a>
                </div>
                <div className="flex justify-center">
                    <a href="#">{author}</a>
                </div>
            </div>
            <div>
                <button className=" flex m-auto my-[15px] px-[80px] border boreder-[2px] border-red-500 rounded-lg">Прочитать</button>
            </div>
        </div>
    )
}

export default Book;