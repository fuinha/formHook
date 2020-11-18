import React, { useEffect,useState, memo } from 'react';

import PostItem from './PostItem';


import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Input,
    FlatList,
    TextInput,
  } from 'react-native';
  
export default function PostList() {
    const [posts, setPosts] = useState([]);
    const [newPosts, setNewPosts] = useState('');

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts').then(response =>{
         response.json().then(data => {
            setPosts(data);
         })
        });

    },[]);

    return (
        <View>
            <TextInput
      style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
      onChangeText={(text) => {setNewPosts(text)}}
      value={newPosts}
    />
            <FlatList
        // data={[1,2,3,4,5]}
        data={posts}
        keyExtractor={(post) => String(post.id)}
      
        renderItem={({item: post}) => (
          <PostItem key={post.id} post={post} />
           
        )}
      />

        </View>
    )
}
