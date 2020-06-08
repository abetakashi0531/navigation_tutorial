import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Stack2 extends React.Component {
    render() {
        return(
            <View style={style.content}>
                <Text>Stack2</Text>
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