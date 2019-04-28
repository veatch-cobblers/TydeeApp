import { ListItem, } from 'react-native-elements'
import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native'

const list = [
  {
    name: "Amy's Beach Cleanup",
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'South Las Vegas Boulevard, Las Vegas',
    distance: '0.1 miles'
  },
  {
    name: "Chris's Beach Cleanup",
    // avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'South Las Vegas Boulevard, Las Vegas',
    distance: '0.1 miles'
  },{
    name: "Jamie's Habitat Clean",
    subtitle: 'North Las Vegas Boulevard, Las Vegas',
    distance: '3.2 miles'
  },
  {
    name: "Don's summer clean",
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'North Las Vegas Boulevard, Las Vegas',
    distance: '3.2 miles'
  },{
    name: "Sarah's Help Clean",
    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
    subtitle: 'East Las Vegas Boulevard, Las Vegas',
    distance: '5.2 miles'
  },
  
 
]

export default class EventGrid extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      list: list,
    }
  }
  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => {
    let result = <ListItem
      title={item.name}
      subtitle={item.subtitle}
      style={list_styles.row}
      leftAvatar={{
        source: item.avatar_url && { uri: item.avatar_url },
        title: item.name[0]
      }}
      badge={{ value: item.distance, textStyle: { color: 'white' }, containerStyle: { marginTop: -20 } }}
      
    />
    return result

  }

  addEvent = ({event}) => {
    console.log("INSIDE ADD EVENT")
    const list_items = this.state.list.slice();
    list_items.unshift({name: 'Test TestLast',
    subtitle: 'Vice President',
    distance: '5.1 miles'})
    this.setState({
      list: list_items
    })
  }
  
  render () {
    // if(this.props.eventName != null || this.props.fulllocation != null){
    //   console.log("INSIDE THE CONDITION CHECK");
    //   this.addEvent({name: this.props.eventName,
    //   location: this.props.fulllocation,
    //   distance: '0.0 miles'})
    // }
    return (
      <FlatList
        keyExtractor={this.keyExtractor}
        data={this.state.list}
        renderItem={this.renderItem}
      />
    )
  }
}

const list_styles = StyleSheet.create({
  row: {
    elevation: 1,
    borderRadius: 2,
    backgroundColor: 'white',
    flex: 1,
    flexDirection: 'row',  // main axis
    justifyContent: 'flex-start', // main axis
    alignItems: 'center', // cross axis
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 18,
    paddingRight: 16,
    marginLeft: 14,
    marginRight: 14,
    marginTop: 0,
    marginBottom: 6,
  }

})