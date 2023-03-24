import { View } from "react-native";
import { useSelector } from "react-redux";

const SecondScreen=()=>{

    const data=useSelector(state => state.question)
    console.log(data);

    return(
        <View>

        </View>
    )
}

export default SecondScreen;