import React from "react"
import Header from "./components/common/header/Header"
import "./App.css"
import Homepages from "./components/home/Homepages"
import Footer from "./components/common/footer/Footer"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import SinglePage from "./components/singlePage/SinglePage"
import Culture from "./components/culture/Culture"
import Boxed from "./components/boxed/Boxed"
import Memes from "./components/memes/Memes"
import Politycs from "./components/politycs/Politycs"
import Sports from "./components/sports/Sports"
import Reviews from "./components/reviews/reviews"
import NewsPage from "./components/singlePage/NewsPage"


const App = () => {
    return ( <
        >
        <
        Router >
        <
        Header / >
        <
        Switch >
        <
        Route exact path = '/'
        component = { Homepages }
        />   <
        Route path = '/singlepage/:id'
        exact component = { SinglePage }
        /> <
        Route path = '/NewsPage/:id'
        exact component = { NewsPage }
        /> <
        Route exact path = '/culture'
        component = { Culture }
        /> <
        Route exact path = '/boxed'
        component = { Boxed }
        /> <
        Route exact path = '/memes'
        component = { Memes }
        />  <
        Route exact path = '/politycs'
        component = { Politycs }
        />  <
        Route exact path = '/sports'
        component = { Sports }
        /> <
        Route exact path = '/reviews'
        component = { Reviews }
        />  <
        /Switch>  <
        Footer / >
        <
        /Router> <
        />
    )
}

export default App