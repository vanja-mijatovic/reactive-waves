import CreateBottomTabNavigator from "@react-navigation/bottom-tabs/src/navigators/createBottomTabNavigator";
import TasksScreen from "../../screens/tasks/TasksScreen";
import NotesScreen from "../../screens/notes/NotesScreen";
import HomeScreen from "../../screens/general/HomeScreen";

const HomeTab = CreateBottomTabNavigator();

const HomeNavigation = () => {
    return (
        <HomeTab.Navigator initialRouteName={HomeScreen}>
            <HomeTab.Screen name="Tasks" component={TasksScreen}/>
            <HomeTab.Screen name="Notes" component={NotesScreen}/>
        </HomeTab.Navigator>
    )
}
export default HomeNavigation;
