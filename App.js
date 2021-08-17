import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { StyleSheet, Text, View ,SafeAreaView,FlatList,ScrollView} from 'react-native';

import AddItem from "./src/Components/addItem/addItem";
import ListItem from "./src/Components/ListItem/todoItem"
export default function App() {

    const [list,setList]=useState([])
    const [counter,setCounter]=useState(0)

    const onChangeInput=(itemText)=>{
        setList([ {content:itemText,status:true},...list])
        setCounter(counter+1)
    };

    const onChangeStatus=(itemContent)=>{

        const indexNumber=list.findIndex(item => item.content === itemContent.content);
        const updatedList = [...list];
        updatedList[indexNumber].status = !itemContent.status;
        setList(updatedList);
        setCounter(counter-1)
    }

    const renderList=({item})=><ListItem item={item} itemContent={onChangeStatus}/>

  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.counter}>
          <View style={{flex:5}}>
              <Text style={styles.counterText}>Yapılacaklar </Text>
          </View>
          <View>
              <Text style={styles.counterNumber}>{counter} </Text>
          </View>
      </View>
      <View style={styles.listContainer}>
            <FlatList
            keyExtractor={(item,index)=>index.toString()}
            data={list}
            horizontal={false}

            renderItem={renderList}/>
      </View>
      <View>
          <AddItem saveItem={onChangeInput} />
      </View>


    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main:{
      flex:1,
      flexDirection: 'column',
      backgroundColor:'#182021',
      paddingTop:40
  }  ,
  counter:{
      flex: 1,
      flexDirection:'row',
      padding:20,
  },
    listContainer:{
        flex: 10,


    },
  counterText:{

    fontSize:30,
    fontWeight:'bold',
    color:'#d7821d'
    },
    counterNumber:{
        fontSize:30,
        fontWeight:'bold',
        color:'#d7821d'
    },

});
