import React, { useState } from 'react'
import { Text, ScrollView, View } from 'react-native'
import { StyleSheet } from 'react-native';
import { fontSize } from '../../../global';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Button from '../../../component/button'
import { KnowledgeItemPost, KnowledgeItemGet, KnowledgeLikePost, KnowledgeUnlikePost } from '../../../interface/knowledge'
import { KnowledgeItemService, KnowledgeLikeService, KnowledgeUnlikeService } from '../../../services/knowledge'
import { convertTimestamp } from '../../../global'
import { getUsername } from '../../../storage/global'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../../strings/Knowledge/Item'
import { useTheme } from '../../../theme'
import Small from '../../../component/small'

const Knowledge_Item = ({ navigation, route }) => {

  const theme = useTheme()

  const [username] = useState(getUsername())
  const [article, setArticle] = useState<KnowledgeItemGet>()
  const [like, setLike] = useState(strings.like)
  const [likeIcon, setLikeIcon] = useState('thumb-up')

  useFocusEffect(
    React.useCallback(() => {
      const payload: KnowledgeItemPost = {
        item: route.params[0].id,
        username: username
      }
      KnowledgeItemService(payload)
      .then((data: any) => {
        setArticle(data)
        if (data?.user_like === true) {
          setLike(strings.unlike)
          setLikeIcon('thumb-down') 
        }
      })
    }, [])
  )

  const [likes, setLikes] = useState(route.params[0].likes)

  const tickLike = async () => {
    if (like === strings.like) {
      const payload: KnowledgeLikePost = {
        article: route.params[0].id,
        username: username
      }
      const result = KnowledgeLikeService(payload)
      if (await result) {
        setLikes(parseInt(likes)+1)
        setLike(strings.unlike)
        setLikeIcon('thumb-down')
      }
    } else {
      const payload: KnowledgeUnlikePost = {
        article: route.params[0].id,
        username: username
      }
      const result = KnowledgeUnlikeService(payload)
      if (await result) {
        setLikes(parseInt(likes)-1)
        setLike(strings.like)
        setLikeIcon('thumb-up')
      }
    }
  }


  return (
    <>
      <ScrollView>
        <Text style={[style.title, {color: theme.colors.secondary}]}>{route.params[0].title}</Text>
        {
          article?.created_on !== undefined && article?.created_on !== null ? (
            <Text style={[style.subtitle, {color: theme.colors.helpText}]}>{strings.publishedOn} {convertTimestamp(article?.created_on)} by {article?.author}</Text>
          ): null
        }
        { article?.updated_on !== undefined && article?.updated_on !== null && article?.updated_on !== '' ? (
          <Text style={[style.subtitle, {color: theme.colors.helpText}]}>{strings.lastUpdated} {convertTimestamp(article?.updated_on)}</Text>
        ): null }
        <View style={style.body_container}>
          <Text style={[style.body, {color: theme.colors.secondary}]}>{article?.body}</Text>
        </View>
        <View style={style.horizontal_layout}>
          <TouchableOpacity onPress={tickLike}>
            <View style={style.like_btn}>
              <Icon
                name={likeIcon}
                style={[style.icon, {color: theme.colors.helpText}]}
              />
              <Small text={like} color={theme.colors.secondary} />
            </View>
          </TouchableOpacity>
          <Small text={likes + ' ' + strings.likes} color={theme.colors.secondary} />
        </View>
      </ScrollView>

      { route.params !== null && route.params !== undefined ? (
        <Button title={`${strings.comments} (${route.params[0].comments})`}
        color={theme.colors.primary} bgColor={theme.colors.secondary}
        marginTop={20} marginBottom={10}
        onPress={() => navigation.navigate('Knowledge_Comment', route.params[0])} />
      ): null}
      {
        article?.created_by.trim() === username.trim() && route.params !== null && route.params !== undefined ? (
          <Button title={strings.update} color={theme.colors.primary} bgColor={theme.colors.secondary} 
          marginTop={20} marginBottom={20}
          onPress={() => navigation.navigate('Knowledge_Update', [article, route.params[0], route.params[1]])} />
        ) : null
      }
    </>
  )
}

export default Knowledge_Item

const style = StyleSheet.create({
  title: {
      fontSize: fontSize(1.2),
      marginBottom: 20
  },
  subtitle: {
      fontSize: fontSize(0.6),
  },
  body_container: {
      borderRadius: 20,
      backgroundColor: "#F0F0F0",
      padding: 20,
      marginVertical: 20
  },
  body: {
      fontSize: fontSize(0.7)
  },
  horizontal_layout: {
      flexDirection: 'row',
      alignItems: 'center',
  },
  like_btn: {
      flexDirection: 'row',
      alignItems: 'center',
      marginEnd: 10,
      borderRadius: 15,
      backgroundColor: '#F0F0F0',
      paddingHorizontal: 15,
      paddingVertical: 10
  },
  icon: {
      fontSize: fontSize(0.9),
      marginEnd: 5
  },
})
