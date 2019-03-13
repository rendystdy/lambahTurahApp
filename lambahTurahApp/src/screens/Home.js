import React, { Component } from 'react';
import { StyleSheet, FlatList, Image, ScrollView, TouchableHighlight } from 'react-native';
import { Container, List, Fab, ListItem, View, Tab, Tabs, Header, Left, Right, Body, TabHeading, ScrollableTab, Item, Input, Icon, Button, Text, H3 } from 'native-base';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import { getNews, deleteNews } from '../publics/redux/actions/news';
import Slideshow from 'react-native-image-slider-show';

// import Tabterbaru from '../screens/Tabterbaru'
import TabBeritaUtama from '../screens/TabBeritaUtama'
import TabMostCommented from '../screens/TabMostCommented'
import TabMostPopular from '../screens/TabMostPopular'

class Home extends Component {

    constructor(props) {
        super(props);

        this.state = {
            position: 1,
            interval: null,
            dataSource: [
                {
                    title: 'Yuhuuu Si om rayain ultah safeea Di ruang tggu pengadilan di kota surabaya.Yg sabar yess om',
                    caption: 'Kamis, 28 Februari 2019',
                    url: require('../../assets/gosip-1.png'),
                }, {
                    title: 'Uhukkkkkkk uhukkkkk. Laaah katanya pacaran habis putus ama seseembaknyaaaahhh Trus udah sayang sayangan?? .',
                    caption: 'Kamis, 28 Februari 2019',
                    url: require('../../assets/gosip-2.png'),
                }, {
                    title: 'Ughhhhh Kenape di emo yess .Ciee Ciee Ciee Ciee',
                    caption: 'Kamis, 28 Februari 2019',
                    url: require('../../assets/gosip-3.png'),
                },
            ],
        };
    }

    componentWillMount() {
        this.setState({
            interval: setInterval(() => {
                this.setState({
                    position: this.state.position === this.state.dataSource.length ? 0 : this.state.position + 1
                });
            }, 3000)
        });
    }

    componentWillUnmount() {
        clearInterval(this.state.interval);
    }

    componentDidMount() {
        this.focusListener = this.props.navigation.addListener('didFocus', async () => {
           await this.getDataNews();

        })
        // alert(this.props.news.data)
    }

    async getDataNews(){
        await this.props.dispatch(getNews());
    }

    async handleDelete(id) {
        await this.props.dispatch(deleteNews(id));
        alert('Data Berhasil Dihapus')
        await this.props.dispatch(getNews())
    }


    renderItem = ({ item, index }) => (

        <ListItem onPress={() => this.props.navigation.navigate('Details', {
            id: item.id
        })}>
            <Image style={{ width: 100, height: 100 }} source={{ uri: item.image_url }} />
            <View style={{ marginLeft: 10, flex: 1, marginTop: 10 }}>
                <H3>{item.title}</H3>
                <Text>{item.author}</Text>
                <Text>{item.created_at}</Text>
            </View>
            <TouchableHighlight><Icon name="trash" style={{ color: '#3d3d3d' }} onPress={() => this.handleDelete(item.id)}></Icon></TouchableHighlight>
        </ListItem>
    )

    _keyExtractor = (item, index) => item.id.toString();


    render() {
        // alert(JSON.stringify(this.props.news.data))
        return (
            <Container>
                <Header style={styles.header} hasTabs>
                    <Left>
                        <Image style={styles.logo} source={require('../../assets/logo-sm.png')}></Image>
                    </Left>
                    <Body>
                        <Header transparent style={styles.searchBar} searchBar rounded>
                            <Item style={styles.itemSearch}>
                                <Icon name="ios-search" />
                                <Input placeholder="Search" />
                            </Item>
                            <Button transparent>
                                <Text>Search</Text>
                            </Button>
                        </Header>
                    </Body>
                    <Right>
                        <Button transparent style={{ marginTop: 10, marginLeft: 10 }} onPress={() => this.props.navigation.navigate('Login')}>
                            <Icon name="person" style={{ color: '#f44248', fontSize: 30 }} />
                        </Button>
                    </Right>
                </Header>
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, borderColor: '#f44248' }} renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 14, color: '#f44248', fontWeight: 'bold' }}>Terbaru</Text>
                        </TabHeading>
                    }>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })}
                            titleStyle={{ fontSize: 20, color: '#fff', fontWeight: 'bold' }}
                            captionStyle={{ color: '#fff' }} />
                        <ScrollView>
                            <List>
                                <FlatList
                                    data={this.props.news.data}
                                    keyExtractor={this._keyExtractor}
                                    renderItem={this.renderItem}
                                    refreshing={this.props.news.isLoading}
                                    onRefresh={this.getDataNews}
                                />
                            </List>
                        </ScrollView>
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 14, color: '#f44248', fontWeight: 'bold' }}>Berita Utama</Text>
                        </TabHeading>
                    }>
                        <TabBeritaUtama />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 14, color: '#f44248', fontWeight: 'bold' }}>Most Popular</Text>
                        </TabHeading>
                    }>
                        <TabMostPopular />
                    </Tab>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 14, color: '#f44248', fontWeight: 'bold' }}>Most Commented</Text>
                        </TabHeading>
                    }>
                        <TabMostCommented />
                    </Tab>
                </Tabs>
                <Fab
                    style={{ backgroundColor: '#000' }}
                    onPress={() => this.props.navigation.navigate('CreateNews')}>
                    <Icon name="ios-add" />
                </Fab>
            </Container >
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news
})

export default connect(mapStateToProps)(withNavigation(Home))

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#fff'
    },
    logo: {
        marginTop: 25
    },
    searchBar: {
        width: 270,
        height: 10,
    },
    itemSearch: {
        backgroundColor: '#f1f1f1'
    }
})