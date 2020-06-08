import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

export default class Stack1 extends React.Component {
    render() {
        return(
            <View  style={style.content}>
                <Text>Stack1</Text>
                <Button
                    title='GoTo Stack2'
                    onPress={() => this.props.navigation.navigate('Stack2')}
                />
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