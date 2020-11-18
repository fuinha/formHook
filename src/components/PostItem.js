import React, { memo } from 'react'
import { View, Text } from 'react-native'

export  function PostItem({post}) {
    return (
        <View>
            <Text>{post.title}</Text>
        </View>
    )
}

export default memo(PostItem);