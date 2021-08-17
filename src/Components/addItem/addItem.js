import React, {Component,useState} from 'react';
import {View, Text, TextInput, TouchableOpacity, SafeAreaView} from "react-native";
import styles from './addItem.style.js'

const addItem = props => {
    const [itemText, setitemText] = useState();
    const saveButton=()=>{
        props.saveItem(itemText);
        setitemText("")

    }
    const saveText=(text)=>{
        setitemText(text)

    }

    return (
        <View style={styles.addGroup}>

            <TextInput value={itemText}  placeholder={"Yapılacak ..."} onChangeText={saveText} placeholderTextColor={'gray'} style={styles.textInput}/>
            <TouchableOpacity onPress={saveButton}>
                <View style={styles.button}><Text style={styles.buttonText}>Kaydet</Text></View>

            </TouchableOpacity>

        </View>
    );
};

export default addItem;
