import React, { Component } from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import { Header, Left, Right, Body, Container, Tabs, Tab, TabHeading, ScrollableTab } from 'native-base'

// import Tabterbaru from '../screens/Tabterbaru'
// import TabBeritaUtama from '../screens/TabBeritaUtama'
// import TabMostCommented from '../screens/TabMostCommented'
// import TabMostPopular from '../screens/TabMostPopular'

class CpHeader extends Component {
    render() {
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
                    <Right/>
                </Header>
                <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 2, borderColor: '#f44248' }} renderTabBar={() => <ScrollableTab />}>
                    <Tab heading={
                        <TabHeading style={{ backgroundColor: '#fff' }}>
                            <Text style={{ fontSize: 14, color: '#f44248', fontWeight: 'bold' }}>Terbaru</Text>
                        </TabHeading>
                    }>
                        <Tabterbaru />
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
            </Container>
        );
    }
}

export default CpHeader;

const styles = StyleSheet.create({
    header: {
        height: 90,
        backgroundColor: '#fff'
    },
    logo: {
        marginTop: 25
    },
    searchBar: {
        width: 300,
        height: 10,
    },
    itemSearch: {
        backgroundColor: '#f1f1f1'
    }
})