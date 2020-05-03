import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import Home from "../components/home";
import Profile from "../components/profile";

const screens = {
    Home: {
        screen: Home
    },
    Profile: {
        screen: Profile
    }
}

const RouteStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: "#fff",
        }
    }
});

export default createAppContainer(RouteStack);