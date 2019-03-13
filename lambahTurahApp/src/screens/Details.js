import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Button, Left, Body, Right } from 'native-base';
import { connect } from 'react-redux';
import { getNewsDetail } from '../publics/redux/actions/news';
import { Icon } from 'react-native-elements'

class Details extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            title: '',
            image_url: '',
            description: '',
            author: '',
            video_url: '',
            create_at: '',
        }
    }

    getDetail = async (id) => {
        await this.props.dispatch(getNewsDetail(id));
    }

    async fetchData() {
        const { navigation } = this.props
        const id = await navigation.getParam('id', 'no-id')
        await this.getDetail(id)
        await this.setState({
            id: this.props.news.detail.data.id,
            title: this.props.news.detail.data.title,
            image_url: this.props.news.detail.data.image_url,
            description: this.props.news.detail.data.description,
            author: this.props.news.detail.data.author,
            video_url: this.props.news.detail.data.video_url,
            created_at: this.props.news.detail.data.created_at,
        })
    }

    componentDidMount() {
        this.fetchData()
    }

    render() {
        return (
            <Container>
                <Header style={{ height: 80 }}>
                    <Left>
                        <Button iconLeft transparent style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <Content>
                    <View>
                        <Image style={{ width: null, height: 250 }} source={{ uri: this.state.image_url }} />
                    </View>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>{this.state.title}</Text>
                        <Text style={{ fontSize: 15 }}>{this.state.created_at}</Text>
                        <Text style={{ fontSize: 15 }}>{this.state.description}</Text>
                    </View>
                </Content>
                <Button full onPress={() => this.props.navigation.navigate('Edit', 
                    {
                        id: this.state.id,
                        title : this.state.title,
                        image_url : this.state.image_url,
                        description : this.state.description,
                        author : this.state.author,
                        video_url : this.state.video_url,
                    }
                )}>
                    <Text>Edit</Text>
                    <Icon
                        reverse
                        name='edit'
                        type='fontawesome'
                        color='#517fa4'
                        iconStyle={{fontSize:10}}
                    />
                </Button>
            </Container>
        );
    }
}

const mapStateToProps = (state) => ({
    news: state.news
})

export default connect(mapStateToProps)(Details)