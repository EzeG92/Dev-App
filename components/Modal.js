import { StyleSheet, Text, View, Pressable, Modal as NewModal } from 'react-native'

const Modal = (props) => {
    const {isVisible, actionDeleteItem, setModal}= props;
    return (
        <NewModal
            animationType="fade"
            transparent={true}
            visible={isVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.background}>
                    <Text style={{color: 'white'}}>Quieres eliminar este item? </Text>
                    <Pressable
                        onPress={() => actionDeleteItem()}
                        style={styles.button}
                    >
                    <Text style={styles.buttonText}>SI</Text>
                    </Pressable>

                    <Pressable
                        onPress={() => setModal(!isVisible)}
                        style={styles.buttonNo}
                    >
                    <Text style={styles.buttonTextNo}>NO</Text>
                    </Pressable>
                </View>
            </View>
        </NewModal>
    )
}

export default Modal

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 50,
    },

    background: {
        backgroundColor: '#457B9D',
        borderRadius: 15,
        paddingHorizontal: 10,
        paddingVertical: 10,
    },

    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#E63946',
        marginTop: 10,
    },

    buttonNo: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        backgroundColor: '#1D3557',
        marginTop: 10,
    },

    buttonText: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    },

    buttonTextNo: {
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white'
    }


})