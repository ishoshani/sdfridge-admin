import react, { useState } from 'react';
import logo from './logo.svg';

import './App.css';
import Login from './components/Login/Login';
import { BottomNavigation, BottomNavigationAction, Typography } from '@material-ui/core';
import Fridges from './components/fridges/Fridges';
import Items from './components/items/Items';
import Assignment from './components/assignment/Assignment';

enum Screens{
    FRIDGES,
    ITEMS,
    ASSIGNMENT
}

const App = () => {
    const [token, setToken] = useState<string>();
    const [screen, setScreen] = useState<number>(Screens.FRIDGES);

    if(!token){
        return <Login setToken={setToken}/>
    }
    let component = (<></>)
    switch (screen) {
        case Screens.FRIDGES:
            component = <Fridges />
            break;
        case Screens.ITEMS:
            component = <Items />
            break;
        case Screens.ASSIGNMENT:
            component = <Assignment />
            break;
        default:
            break;
    }

    return (
        <div>
            <Typography> SD Fridge Admin Page</Typography>
            {component}
            <BottomNavigation
            value={screen}
            onChange={(event, newValue) => {setScreen(newValue)}}
            showLabels
            >
                <BottomNavigationAction label="Fridges" value={Screens.FRIDGES} />
                <BottomNavigationAction label="Items" value={Screens.ITEMS} />
                <BottomNavigationAction label="Assign" value={Screens.ASSIGNMENT} />
            </BottomNavigation>
        </div>
        )
}

export default App;
