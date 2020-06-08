import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Tab2 extends React.Component {
    render() {
        return(
            <View  style={style.content}>
                <Text>Tab2</Text>
            </View>
        );
    }
}

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});