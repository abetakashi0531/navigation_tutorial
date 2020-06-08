import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

// export defaultは指定がなければ読み込まれるコンポーネント
// {}を使わずにimport（ファイル名）するとdefaultのみが表示される
// {}はファイルのものを特定してコンポーネントを使用したいとき
// asは左辺のコンポーネントを右辺という名前で使用する
export default class Single1 extends React.Component {
    render() {
        return(
            // 表示内容を記述
            <View  style={style.content}>
                <Text>Single1</Text>
            </View>
        );
    }
}

// export defaultを使わない場合
// export default Single1;

const style = StyleSheet.create({
    content: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});