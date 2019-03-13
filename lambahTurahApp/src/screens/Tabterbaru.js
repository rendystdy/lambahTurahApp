import React, { Component } from 'react';
import { StyleSheet, FlatList, Text, Image, ScrollView } from 'react-native';
import { Container, List, Fab, Icon, View, ListItem, Tab, Tabs, Header } from 'native-base';
import { Tile } from 'react-native-elements';

import { connect } from 'react-redux';
import { getNews } from '../publics/redux/actions/news';

class TabTerbaru extends Component {

    componentDidMount() {
        this.getDataNews();
        // alert(this.props.news.data)
    }

    getDataNews = async () => {
        await this.props.dispatch(getNews());
    }

    renderItem = ({ item, index }) => (
        <ListItem onPress={() => this.props.navigation.navigate('Details', {
            id: item.id
        })}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image_url }} />
            <View>
                <Text>{item.title}</Text>
                <Text>{item.description}</Text>
                <Text>{item.author}</Text>
            </View>
        </ListItem>
    )

    _keyExtractor = (item, index) => item.id.toString();

    render() {
        // alert(JSON.stringify(this.props.news.data))
        return (
            <Container>
                <List>
                    <Tile
                        imageSrc={require('../../assets/icon.png')}
                        title="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores dolore exercitationem"
                        featured
                        caption="Some Caption Text"
                        imageContainerStyle={{ height: 200 }}
                        contentContainerStyle={{ height: 200 }}
                        ContainerStyle={{ height: 200 }}
                        height={200}
                    >
                        <View
                            style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' }}
                        >
                            <Text>Caption</Text>
                            <Text>Caption</Text>
                        </View>
                    </Tile>
                    <FlatList
                        data={this.props.news.data}
                        keyExtractor={this._keyExtractor}
                        renderItem={this.renderItem}
                        refreshing={this.props.news.isLoading}
                        onRefresh={this.getDataNews}
                    />
                </List>
            </Container >
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news
})

export default connect(mapStateToProps)(TabTerbaru)

const styles = StyleSheet.create({

})