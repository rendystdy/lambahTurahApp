import React, { Component } from 'react';
import { Text} from 'react-native';
import { Container, Header, Content } from 'native-base';

class TabMostCommented extends Component {
    
    render() {
        return (
            <Container>
                <Content>
                    <Text>Most Commented</Text>
                </Content>
            </Container>
        );
    }
}

export default TabMostCommented