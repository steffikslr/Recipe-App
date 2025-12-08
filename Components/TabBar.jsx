import { Pressable, StyleSheet, Text, View } from 'react-native'
import { Colors } from '../Constants/Colors'

const TabBar = ({activeTab, setActiveTab, tabLabel1, tabLabel2}) => {
  return (
    <View style={styles.tabContainer}>
            <Pressable style={ activeTab == 'tab1' ? [styles.tab, styles.activeTab]: styles.tab} 
            onPress={() => setActiveTab('tab1')}>
              <Text style={activeTab == 'tab1' ? [styles.tabText, styles.activeTabText] : styles.tabText}
              >{tabLabel1}
              </Text>
            </Pressable>
            <Pressable style={ activeTab == 'tab2' ? [styles.tab, styles.activeTab]: styles.tab}  onPress={() => setActiveTab('tab2')}>
              <Text style={activeTab == 'tab2' ? [styles.tabText, styles.activeTabText] : styles.tabText}>
                {tabLabel2}
              </Text>
            </Pressable>

         </View>
  )
}

export default TabBar

const styles = StyleSheet.create({
    tabContainer: {
        backgroundColor: Colors.tabBarContainer,
        width: '100%',
        flexDirection: 'row',
        height: 50,
        justifyContent: 'space-evenly',

    },

    tab: {
        justifyContent: 'center',
        width: '50%',
    },

    activeTab: {
        borderBottomWidth: 2,
        borderBottomColor: Colors.activeTab,
        color: Colors.activeTab,
    },

    tabText: {
        textAlign: 'center',
        fontSize: 15

    },

    activeTabText: {
        color: Colors.activeTab,
        fontWeight: '600'
    },
})