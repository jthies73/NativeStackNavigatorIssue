import {createDrawerNavigator} from "@react-navigation/drawer";
import ShowcaseScreen from "../../screens/ShowcaseScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{header: () => null, swipeEdgeWidth: 0}}>

            <Drawer.Screen name="drawerShowcase" component={ShowcaseScreen}/>

        </Drawer.Navigator>
    )
}

export default DrawerNavigator;
