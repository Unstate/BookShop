import MainPage from "./components/MainPage";
import axios from 'axios'
import classes from './types/App.module.css'
import React from 'react'
import { useSelector } from "react-redux";
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchBooks } from "./ReduxToolkit/actionCreator";

const App = () => {

  return (
    <div className={classes.app}>
      <MainPage></MainPage>
    </div>
  );
}

export default App;
