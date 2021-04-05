import { StatusBar } from "expo-status-bar";
import { v4 as uuidv4 } from "uuid";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  SafeAreaView,
  TouchableHighlight,
  TextInput,
  Alert,
} from "react-native";
import CountDown from "react-native-countdown-component";

import Header from "./components/Header";
import DeleteItem from "./components/deleteItem";
import AddItem from "./components/addItem";

export default function App() {
  const [todos, setData] = useState([
    {
      id: "1",
      title: "Trade",
    },
    {
      id: "2",
      title: "Pharm",
    },
    {
      id: "3",
      title: "Coding",
    },
    {
      id: "4",
      title: "Music",
    },
  ]);
  // console.log(todos[0]['title'])
  // console.log(todos.length)
  //todos.lenght+1

  const [test, setTest] = useState("clock...");

  const pressHandler = (id) => {
    setData((prevTodos) => {
      return prevTodos.filter((todo) => todo.id != id);
    });
  };

  const sumbitHandler = (text) => {
    console.log("handler pressed");
    setData((prevTodos) => {
      return [{ title: text, id: Math.random().toString() }, ...prevTodos];
    });
  };

  // const renderItem = ({ item }) => <Item title={item.title} />;

  function GetValue() {
    // var myarray= new Array("item1","item2","item3");
    // var random = myarray[Math.floor(Math.random() * myarray.length)];

    var random = todos[Math.floor(Math.random() * todos.length)]["title"];
    console.log(random);
    // random = 'hello'
    alert(random);
    mojo();
    // setData(random)
    // setData((prevTodos) => {
    // //return [{ title: random }];
    // return [prevTodos.filter((todos) => todos.title == random), ...prevTodos]
    // })
    setData((prevTodos) => {
      return prevTodos.filter((todo) => todo.title != random);
    });
  
  
  }
  function mojo() {
    setTimeout(() => {
      setTest(
        <CountDown
          until={15}
          onFinish={() => alert("finished")}
          onPress={() => alert("hello")}
          size={20}
        />
      );
    }, 3000);
  }

  const refreshPage = () => {
    // console.log({label})
    // setTest("hi");
    setTest("");
    // setData(todos);
    setData((prevTodos) => {
    return [...prevTodos];
    })
    //     return [prevTodos.filter((todos) => todo.id != id)
    //   ,...prevTodos]
  
      
    // })
    
  };

  // console.log(sumbitHandler)
  return (
    <View style={styles.container}>
      {/* <View style={styles.head}> </View> */}
      <Header />
      <Text>{test}</Text>
      <View>
      <TouchableHighlight
          style={{
            height: 40,
            width: 160,

            borderRadius: 10,
            backgroundColor: "tomato",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
          }}
        >
        {/* <Text>{test}</Text> */}
        <Button onPress={refreshPage} title="Refresh" />
        </TouchableHighlight>
      </View>
      <View style={styles.content}>
        <AddItem submitHandler={sumbitHandler} />

        <View style={styles.list}>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <DeleteItem item={item} pressHandler={pressHandler} />
            )}
            keyExtractor={(item) => item.id}
          />
        </View>
      </View>
      <View style={styles.rando}>
        <TouchableHighlight
          style={{
            height: 40,
            width: 160,

            borderRadius: 10,
            backgroundColor: "tomato",
            marginLeft: 50,
            marginRight: 50,
            marginTop: 20,
          }}
        >
          <Button onPress={GetValue} title="Press Me" color="black"></Button>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    
    flexDirection: "column",
    backgroundColor: "#00ffff",
    alignItems: "center",
    justifyContent: "center",
  },

  content: {
    flex: 4,
    backgroundColor: "pink",
    marginTop: 10,
    marginBottom: 10,

    marginVertical: 1,
    marginHorizontal: 1,
  },
  list: {
   flex:1,
    backgroundColor: "white",
    width: 400,
    height: 500,

    marginTop: 1,

    marginBottom: 1,
  },
  refresh: {
    marginTop: 10,
    marginBottom: 6,

    marginVertical: 10,
    marginHorizontal: 16,
  },
  head: {},
  rando: {
    flex: 1,

    paddingTop: 100,
    marginBottom: 6,
  },
});
