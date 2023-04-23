import {Button, Text, View} from "react-native";

const HomeScreen = () => {
    return (
        <View>
            <Text>Welcome</Text>
            <Button title="Click here!"
                    onPress={() => alert('Button clicked!')}/>
        </View>
    )
}
export default HomeScreen;
