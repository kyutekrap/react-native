import React, { useState } from 'react'
import { Text, ScrollView, View, Modal } from 'react-native'
import { StyleSheet } from 'react-native'
import { fontSize } from '../../global'
import { TouchableOpacity } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Button from '../../component/button'
import Title from '../../component/title'
import Subtitle from '../../component/subtitle'
import SimpleMenu from '../../component/simple_menu'
import { KnowledgeIndexGet } from '../../interface/knowledge'
import { KnowledgeMainService } from '../../services/knowledge'
import { useFocusEffect } from '@react-navigation/native'
import strings from '../../strings/Knowledge'
import { useTheme } from '../../theme'
import Small from '../../component/small'


const Knowledge = ({ navigation }) => {

  const theme = useTheme()

  const [options, setOptions] = useState<KnowledgeIndexGet['categories']>()
  const [articles, setArticles] = useState<KnowledgeIndexGet['articles']>()

  useFocusEffect(
    React.useCallback(() => {
      KnowledgeMainService()
      .then((data: any) => {
        setOptions(data[0])
        setArticles(data[1])
      })
    }, [])
  )

  const [catModal, setCatModal] = useState(false)
  const [category, setCategory] = useState("")

  const selectMenuHandler = (item: string) => {
    setCategory(item)
    setCatModal(false)
  };

  return (
    <>
      <ScrollView>
        <Title title={strings.knowledgeBase} />

        {/* <Text style={[style.input, style.ineditable_input]} onPress={()=>setCatModal(true)}>
          { category == "" ? ( "Category" ) : category }
        </Text> */}
        <Text style={[style.small_title, {color: theme.colors.secondary}]}>{strings.allResults}</Text>

        {articles !== null && articles !== undefined && articles.length > 0 ? (
          articles.map((article, index) => (
            <View style={style.card} key={index}>
              <TouchableOpacity onPress={() => navigation.navigate("Knowledge_Item", [article, options])}>
                <View style={style.horizontal_layout}>
                  <View style={[style.icon_container, {marginEnd: 10}]}>
                    <Icon
                      name="thumb-up"
                      style={[style.icon, {color: theme.colors.helpText}]}
                    />
                    <Small color={theme.colors.secondary} text={article.likes.toString()} />
                  </View>
                  <View style={style.icon_container}>
                    <Icon
                      name="comment"
                      style={[style.icon, {color: theme.colors.helpText}]}
                    />
                    <Small color={theme.colors.secondary} text={article.comments.toString()} />
                  </View>
                </View>
                <Text style={style.category_txt}>{strings.category}: {article.category}</Text>
                <Text style={[style.card_title, {color: theme.colors.secondary}]} numberOfLines={1} ellipsizeMode="tail">{article.title}</Text>
                <Text style={[style.card_subtitle, {color: theme.colors.secondary}]} numberOfLines={1} ellipsizeMode="tail">{article.short_desc}</Text>
              </TouchableOpacity>
            </View>
          ))
        ) : (
          null
        )}

      </ScrollView>
      
      { options !== undefined && options !== null ? (
        <Button onPress={() => navigation.navigate('Knowledge_New', options)} title={strings.category} 
        bgColor={theme.colors.secondary} color={theme.colors.primary} marginBottom={20} />
      ): null }
      <Modal visible={catModal} >
        <View style={[style.modal, {backgroundColor: theme.colors.primary}]}>
          <Subtitle subtitle={strings.category} />
          <SimpleMenu data={options} onPress={selectMenuHandler} />
        </View>
      </Modal>
    </>
  )
}

export default Knowledge

const style = StyleSheet.create({
  small_title: {
      fontSize: fontSize(0.6),
      marginBottom: 10,
      fontWeight: '600',
  },
  card: {
      borderRadius: 20,
      backgroundColor: "#F0F0F0",
      padding: 20,
      marginBottom: 10
  },
  horizontal_layout: {
      flexDirection: 'row',
      justifyContent: 'flex-end',
  },
  category_txt: {
      fontWeight: '600',
      fontSize: fontSize(0.6),
      color: "#FF00D6",
      marginBottom: 5
  },
  card_title: {
      fontWeight: '600',
      fontSize: fontSize(0.7)
  },
  card_subtitle: {
      fontSize: fontSize(0.6),
      marginVertical: 10,
  },
  icon_container: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  icon: {
      fontSize: fontSize(0.9),
      marginEnd: 5
  },
  modal: {
      padding: 20,
      overflow: 'scroll'
  },
})
