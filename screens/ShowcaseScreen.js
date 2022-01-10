import {Button, Text, TouchableOpacity, useWindowDimensions, View} from "react-native";
import {ScrollView} from "react-native-gesture-handler";

const ShowcaseScreen = ({navigation}) => {
    let width = useWindowDimensions().width;
    let height = useWindowDimensions().height;

    return (
        <View style={{flex: 1}}>

            {/*buttons*/}
            <View style={{flexDirection: "row", justifyContent: "space-evenly", margin: 10}}>
                <Button title={"switch to drawer"} onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'drawer'}],
                })}/>
                <Button title={"switch to stack"} onPress={() => navigation.reset({
                    index: 0,
                    routes: [{name: 'stack'}],
                })}/>
            </View>

            {/*nested scrollview example*/}
            <ScrollView
                horizontal={true}
                pagingEnabled={true}
                decelerationRate={'fast'}
                showsHorizontalScrollIndicator={false}>

                <View style={{flex: 1, width: width, backgroundColor: "green", justifyContent: "space-between"}}>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 100}}>1</Text>
                        <Text style={{fontSize: 50, textAlign: "center"}}>&lt;-------------------&gt;</Text>
                        <Text style={{fontSize: 20, textAlign: "center", paddingHorizontal: 20}}>you should be able to
                            apply
                            the horizontal scroll to the upper
                            and lower part of the screen independently. However this only works inside the
                            DrawerNavigator</Text>
                    </View>

                    <View style={{width: width}}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled={true}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "lime"
                            }}>
                                <Text style={{fontSize: 50, textAlign: "center"}}>&lt;-------------------&gt;</Text>
                                <Text style={{fontSize: 100, paddingBottom: 100}}>1</Text>
                            </View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "#32CD32"
                            }}><Text style={{fontSize: 100, paddingVertical: 100}}>2</Text></View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "lime"
                            }}><Text style={{fontSize: 100, paddingVertical: 100}}>3</Text></View>

                        </ScrollView>
                    </View>
                </View>
                <View style={{flex: 1, width: width, backgroundColor: "purple", justifyContent: "flex-end"}}>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 100}}>1</Text>
                        <Text style={{fontSize: 50, textAlign: "center"}}>&lt;-------------------&gt;</Text>
                        <Text style={{fontSize: 20, textAlign: "center", paddingHorizontal: 20}}>you should be able to
                            apply
                            the horizontal scroll to the upper
                            and lower part of the screen independently. However this only works inside the
                            DrawerNavigator</Text>
                    </View>

                    <View style={{width: width}}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled={true}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "#9932CC"
                            }}>
                                <Text style={{fontSize: 50, textAlign: "center"}}>&lt;-------------------&gt;</Text>
                                <Text style={{fontSize: 100, paddingBottom: 100}}>1</Text>
                            </View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "#FF00FF"
                            }}><Text style={{fontSize: 100, paddingVertical: 100}}>2</Text></View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "#9932CC"
                            }}><Text style={{fontSize: 100, paddingVertical: 100}}>3</Text></View>

                        </ScrollView>
                    </View>
                </View>
                <View style={{flex: 1, width: width, backgroundColor: "green", justifyContent: "space-between"}}>

                    <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>
                        <Text style={{fontSize: 100}}>1</Text>
                        <Text style={{fontSize: 50, textAlign: "center"}}>&lt;-------------------&gt;</Text>
                        <Text style={{fontSize: 20, textAlign: "center", paddingHorizontal: 20}}>you should be able to
                            apply
                            the horizontal scroll to the upper
                            and lower part of the screen independently. However this only works inside the
                            DrawerNavigator</Text>
                    </View>

                    <View style={{width: width}}>
                        <ScrollView
                            horizontal={true}
                            pagingEnabled={true}
                            decelerationRate={'fast'}
                            showsHorizontalScrollIndicator={false}>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "lime"
                            }}>
                                <Text style={{fontSize: 50, textAlign: "center"}}>&lt;-------------------&gt;</Text>
                                <Text style={{fontSize: 100, paddingBottom: 100}}>1</Text>
                            </View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "#32CD32"
                            }}><Text style={{fontSize: 100, paddingVertical: 100}}>2</Text></View>

                            <View style={{
                                justifyContent: "center",
                                alignItems: "center",
                                width: width,
                                backgroundColor: "lime"
                            }}><Text style={{fontSize: 100, paddingVertical: 100}}>3</Text></View>

                        </ScrollView>
                    </View>
                </View>

            </ScrollView>
        </View>
    )
        ;
}

export default ShowcaseScreen
