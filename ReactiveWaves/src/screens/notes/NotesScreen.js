import {Button, Text, View} from "react-native";

const NotesScreen = () => {
    return (
        <View>
            <Text>Welcome to the Notes screen!</Text>
            <Button title="Click here!"
                    onPress={() => alert('Button clicked!')}/>
        </View>
    )
}
export default NotesScreen;
