import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/home";
import PokeDetails from "../screens/pokeDetails";

const screens = {
    Home: {
        screen: Home,
        navigationOptions: {
            title: 'Pokédex - by Rafael Ramos'
        }
    },
    PokeDetails: {
        screen: PokeDetails,
        navigationOptions: {
            title: 'Detalhes do pokémon'
        }
    }

}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions:{
        headerTintColor: '#222',
        headerStyle: { backgroundColor: 'red'}
    }
});

export default createAppContainer(HomeStack);
