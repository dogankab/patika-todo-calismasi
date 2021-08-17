import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from "react-native";
import styles from './todo.style'

const todoItem = props => {
    const changeButton=()=>{
       props.itemContent(props.item)
    }
    return (
        <View>
            {props.item.status ?
           <TouchableOpacity  onPress={changeButton}>
                <View style={styles.mainTrue}>
                    <Text style={styles.textTrue}>
                        {props.item.content}
                    </Text>
                </View>
           </TouchableOpacity>
        :
            <View style={styles.mainFalse}>
                <Text style={styles.textFalse}>
                     {props.item.content}
                </Text>
            </View>
        }
        </View>
    );
};

export default todoItem;
