import MainPage from "./components/MainPage";
import axios from 'axios'

const App = () => {

  const getBooks = async () => {
    const response = await axios.get('/api/books?amount=10')
    console.log(response)
    return response 
  }

  return (
    <div className="flex justify-center">
      {/* <button onClick={getBooks}>TRY</button> */}
      <MainPage></MainPage>
    </div>
  );
}

export default App;
