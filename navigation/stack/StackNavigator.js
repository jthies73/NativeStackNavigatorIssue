import React from 'react';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import ShowcaseScreen from "../../screens/ShowcaseScreen";

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{header: () => null}}>

            <Stack.Screen name="stackShowcase" component={ShowcaseScreen}/>

        </Stack.Navigator>
    )
}

export default StackNavigator;
