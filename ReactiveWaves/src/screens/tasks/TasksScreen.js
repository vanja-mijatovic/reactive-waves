import {Button, Text, View} from "react-native";

const TasksScreen = () => {
    return (
        <View>
            <Text>Welcome to the Tasks screen!</Text>
            <Button title="Click here!"
                    onPress={() => alert('Button clicked!')}/>
        </View>
    )
}
export default TasksScreen;
