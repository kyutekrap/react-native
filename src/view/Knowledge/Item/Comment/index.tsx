import React, { useEffect, useState } from 'react'
import { TextInput, ScrollView, View, Text, Keyboard } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../../../global'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
import { convertTimestamp, validateForm } from '../../../../global'
import { KnowledgeCommentPost, KnowledgeGetCommentsPost, KnowledgeGetCommentsGet, KnowledgeDeleteCommentPost } from '../../../../interface/knowledge';
import { KnowledgeCommentService, KnowledgeDeleteCommentService, KnowledgeGetCommentsService } from '../../../../services/knowledge';
import Small from '../../../../component/small'
import Alert from '../../../../component/alert'
import { getUsername } from '../../../../storage/global'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../../../strings/Knowledge/Item/Comment'
import { useTheme } from '../../../../theme'

const Knowledge_Comment = ({ route }) => {

  const navigation = useNavigation()

  const theme = useTheme() 

  useEffect(() => {
    navigation.setOptions({
      headerTitle: route.params.title,
    });
  }, [navigation])

  const [username] = useState(getUsername())

  const [comments, setComments] = useState<KnowledgeGetCommentsGet[]>([]);

  const [input, setInput] = useState("")

  const commentHandler = () => {
    const payload: KnowledgeCommentPost = {
      content: input,
      username: username,
      item: route.params.id
    }
    if (validateForm(payload)) {
      commentPush(payload)
    }
  }

  const commentPush = async (payload: KnowledgeCommentPost) => {
    const result = KnowledgeCommentService(payload)
    if (await result) {
      setInput("")
      Keyboard.dismiss()
      loadComments()
    }
  }

  const loadComments = () => {
    const payload: KnowledgeGetCommentsPost = {
      item: route.params.id
    }
    KnowledgeGetCommentsService(payload)
    .then((data: any) => {
      setComments(data)
    })
  }

  useFocusEffect(
    React.useCallback(() => {
      loadComments()
    }, [])
  )

  const [deleteDialog, setDeleteDialog] = useState('none')
  const [id, flagId] = useState(0)

  const renderedItems = comments.map((comment, index) => (
    <View key={index}>
      <Small text={comment.author} color={theme.colors.secondary} />
      <View style={style.comment_box}>
        <Text style={[style.comment_body, {color: theme.colors.secondary}]}>{comment.content}</Text>
      </View>
      <View style={style.hbox}>
        { comment.username.trim() === username.trim() ? (
          <>
            <Text style={style.comment_date} onPress={() => {setDeleteDialog('flex'); flagId(comment.id)}}>Delete</Text>
            <Text style={style.comment_date}> | </Text>
          </>
        ) : null }
        <Text style={style.comment_date}>{convertTimestamp(comment.created_on)}</Text>
      </View>
    </View>
  ))

  const deleteHandler = () => {
    const payload: KnowledgeDeleteCommentPost = {
      id: id,
    }
    deletePush(payload)
  }
  const deletePush = async (payload: KnowledgeDeleteCommentPost) => {
    const result = KnowledgeDeleteCommentService(payload)
    if (await result) {
      loadComments()
      setDeleteDialog('none')
    }
  }

  return (
    <>
      <Alert display={deleteDialog} title={strings.deleteThis} 
      onYes={deleteHandler} onNo={() => {setDeleteDialog('none'); flagId(0)}} />

      <ScrollView>
        {renderedItems}
      </ScrollView>
      <View style={[style.input, {borderColor: theme.colors.secondary}]}>
        <TextInput style={[style.text_input, {color: theme.colors.secondary}]} value={input} 
        placeholder={strings.type} placeholderTextColor={theme.colors.helpText}
        maxLength={140} onChangeText={(text: string) => setInput(text)} />

        <TouchableOpacity onPress={commentHandler}>
          <Icon
            name="send-circle"
            size={40}
            color="#5DADE2"
          />
        </TouchableOpacity>
      </View>
    </>
  )
}

export default Knowledge_Comment

const style = StyleSheet.create({
  input: {
      borderWidth: 2,
      marginVertical: 20,
      paddingHorizontal: 10,
      fontSize: fontSize(0.7),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between'
  },
  text_input: {
      flex: 1
  },
  comment_body: {
      fontSize: fontSize(0.7)
  },
  comment_date: {
      color: "#494949",
      alignSelf: 'flex-end',
      fontSize: fontSize(0.5)
  },
  comment_box: {
      borderRadius: 7,
      backgroundColor: "#f0f0f0",
      paddingHorizontal: 10,
      paddingVertical: 20,
      marginVertical: 7
  },
  hbox: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
  },
});