import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {NavigationContainer} from "@react-navigation/native";
import DrawerNavigator from "../drawer/DrawerNavigator";
import StackNavigator from "../stack/StackNavigator";

const RootStack = createNativeStackNavigator();

export function RootNavigator() {
    return (
        <NavigationContainer>
            <RootStack.Navigator>

                <RootStack.Screen name="drawer" component={DrawerNavigator}/>
                <RootStack.Screen name="stack" component={StackNavigator}/>

            </RootStack.Navigator>
        </NavigationContainer>
    );
}
