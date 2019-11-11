/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button,
    Left,
    Right,
    Body,
    Icon,
    Text
} from 'native-base';

const App = () => {
    return (
        <Container>
            <Header>
                <Left>
                    <Button transparent>
                        <Icon name="menu" />
                    </Button>
                </Left>
                <Body>
                    <Title>Header</Title>
                </Body>
                <Right />
            </Header>
            <Content>
                <Text>This is Content Section</Text>
            </Content>
            <Footer>
                <FooterTab>
                    <Button full>
                        <Text>Footer</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
    );
};

export default App;
