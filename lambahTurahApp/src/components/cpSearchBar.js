import React, { Component } from 'react';
import {StyleSheet} from 'react-native';
import { Header, Item, Input, Icon, Button, Text } from 'native-base';

export default class SearchBarExample extends Component {
  render() {
    return (
        <Header transparent style={styles.searchBar} searchBar rounded>
          <Item style={styles.itemSearch}>
            <Icon name="ios-search" />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
    );
  }
}

const styles = StyleSheet.create({
    searchBar: {
        width: 300,
        height: 10,
    },
    itemSearch: {
        backgroundColor: '#f1f1f1'
    }
})