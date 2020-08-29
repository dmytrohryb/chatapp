import firebase from "firebase";

class Fire{
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if(!firebase.apps.length){
            firebase.initializeApp({
                apiKey: "AIzaSyD0-Zbu0ihOQoTxC1E_eJrsEUAoUeF4auQ",
                authDomain: "chatapp-53a87.firebaseapp.com",
                databaseURL: "https://chatapp-53a87.firebaseio.com",
                projectId: "chatapp-53a87",
                storageBucket: "chatapp-53a87.appspot.com",
                messagingSenderId: "318793878406",
                appId: "1:318793878406:web:81cde1a8d0eaff6c667a07",
                measurementId: "G-JNF9G3F8EZ"
            })
        }
    }

    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if(!user) {
                firebase.auth().signInAnonymously()
            }
        })
    }

    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }

            this.db.push(message)
        })
    }

    parse = message => {
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text,
            user
        }
    }

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)))
    }

    off(){
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages")
    }

    get uid(){
        return (firebase.auth().currentUser || {}).uid
    }
}

export default new Fire()
