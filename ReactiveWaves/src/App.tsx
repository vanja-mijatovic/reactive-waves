import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import HomeNavigation from "./navigation/general/HomeNavigation";

function App(): JSX.Element {
    return (
        <NavigationContainer>
            <HomeNavigation/>
        </NavigationContainer>
    );
}

export default App;
