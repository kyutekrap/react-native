import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { ReportingService } from '../../services/reporting'
import { ReportingIndexPost, ReportingAnalytics, ReportingLoveDoctor } from '../../interface/reporting'
import { getUsername } from '../../storage/global'
import { currentDate, fontSize } from '../../global'
import Title from '../../component/title'
import strings from '../../strings/Reporting'
import { useTheme } from '../../theme'
import Small from '../../component/small'


const Reporting = () => {

  const theme = useTheme()

  const [username] = useState(getUsername())

  const date = currentDate()

  useEffect(() => {
    const payload: ReportingIndexPost = {
      username: username
    }
    reportingPush(payload)
  }, [username])

  const [overview, setOverview] = useState<string>('')
  const [ldoc, setLdoc] = useState<ReportingLoveDoctor>()
  const [analytics, setAnalytics] = useState<ReportingAnalytics[]>([])
  const reportingPush = (payload: ReportingIndexPost) => {
    ReportingService(payload)
    .then((data: any) => {
      setOverview(data[1])
      setLdoc(data[0])
      setAnalytics(data[2].reverse())
    })
  }

  const calculateHeight = (value: number) => {
    const maxHeight = fontSize(7)
    let maxValue = 0
    analytics.forEach((row) => {
      const biggerValue = Math.max(row.lead, row.oppo)
      maxValue = Math.max(biggerValue, maxValue)
    })
    const factor = maxValue !== 0 ? parseFloat((maxHeight / maxValue).toFixed(5)) : 0
    return Math.round(value * factor)
  }

  const barChart = analytics !== null && analytics !== undefined && analytics.length > 0 ? (
    analytics.map((row, index) => (
      <View key={index} style={style.chart_pair}>
        <View>
          <Text style={[style.chart_txt, {color: theme.colors.secondary}]}>{row.oppo}</Text>
          <View style={[style.bar, style.oppo_bar, { minHeight: 10, height: calculateHeight(row.oppo) }]} />
        </View>
        <View>
          <Text style={[style.chart_txt, {color: theme.colors.secondary}]}>{row.lead}</Text>
          <View style={[style.bar, style.lead_bar, { minHeight: 10, height: calculateHeight(row.lead) }]} />
        </View>
      </View>
    ))
  ) : null

  return (
    <ScrollView>
      <Title title={strings.reporting} />
      <Small text={strings.date} color={theme.colors.secondary} />
      <View style={style.divider} />
      <Text style={style.small_title}>{strings.overview}</Text>
      <Text style={[style.overview, {color: theme.colors.secondary}]}>{overview}</Text>
      <Text style={style.small_title}>{strings.analytics}</Text>
      <View style={style.chart_container}>

      {barChart}

      </View>
      <Text style={style.small_title}>{strings.finalGrade}: {ldoc?.grade}</Text>
      <Text style={[style.overview, {color: theme.colors.secondary}]}>{ldoc?.message}</Text>
    </ScrollView>
  )
}

export default Reporting

const style = StyleSheet.create({
  divider: {
      width: "100%",
      height: 1,
      backgroundColor: '#EAEAEA',
      marginVertical: 20
  },
  small_title: {
      fontSize: fontSize(0.7),
      fontWeight: '600',
  },
  overview: {
      fontSize: fontSize(0.7),
      marginBottom: 40,
      marginTop: 20
  },
  chart_container: {
      flexDirection: 'row',
      justifyContent: 'space-evenly',
      marginBottom: 40,
      marginTop: 20
  },
  chart_pair: {
      marginHorizontal: 10,
      flexDirection: 'row'
  },
  chart_txt: {
      fontSize: fontSize(0.6),
      textAlign: 'center',
      flex: 1,
      textAlignVertical: 'bottom'
  },
  bar: {
      width: fontSize(2),
      marginHorizontal: 5,
      borderRadius: 10
  },
  oppo_bar: {
      backgroundColor: '#27296d'
  },
  lead_bar: {
      backgroundColor: '#a393eb'
  },
})
