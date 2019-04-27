import React from 'react';
import { ListItem, FlatList} from 'react-native-elements';

const list = [
    {
      name: 'Amy Farha',
      subtitle: 'Vice President'
    },
    {
      name: 'Chris Jackson',
      subtitle: 'Vice Chairman'
    },
  ]

export default class EventGrid extends React.Component{


  keyExtractor = (item, index) => index.toString()

  renderItem = ({ item }) => (
    <ListItem
      title={item.name}
      subtitle={item.subtitle}
    />
  )

    render(){
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
        />
      )
    }

   

}

// export default EventGrid;