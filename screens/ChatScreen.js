import { GiftedChat } from 'react-native-gifted-chat';
import React from 'react'
import Fire from "../Fire";

export default class ChatScreen extends React.Component {
    state = {
        messages: []
    }

    get user() {
        return {
            _id: Fire.uid,

        }
    }

    componentDidMount() {
        Fire.get(message => this.setState(previous => ({
            messages: GiftedChat.append(previous.messages, message)
        })))
    }

    componentWillUnmount() {
        Fire.off()
    }

    render() {
        const chat = <GiftedChat messages={this.state.messages} onSend={Fire.send} user={this.user}/>
        return(chat)
    }
}
