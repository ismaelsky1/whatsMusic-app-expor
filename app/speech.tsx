
// import Voice, {
//     SpeechRecognizedEvent,
//     SpeechResultsEvent,
//     SpeechErrorEvent,
// } from "@react-native-voice/voice";
import { Button, Layout, Text } from "@ui-kitten/components";

import { useState } from 'react';
import { StyleSheet } from "react-native";

type State = {
    recognized?: string;
    pitch?: string;
    error?: string;
    end?: string;
    started?: boolean;
    results?: string[];
    partialResults?: string[];
};

const SpeechCard = ({ textListening, }: any) => {

    const [state, setState] = useState<State>({
        recognized: "",
        pitch: "",
        error: "",
        end: "",
        started: false,
        results: [],
        partialResults: [],
    });


    // const componentWillUnmount = () => {
    //     Voice.destroy().then(Voice.removeAllListeners);
    // }

    // const onSpeechStart = (e: any) => {
    //     console.log("onSpeechStart: ", e);
    //     setState({
    //         started: true,
    //     });
    // };

    // const onSpeechRecognized = (e: SpeechRecognizedEvent) => {
    //     console.log("onSpeechRecognized: ", e);
    //     setState({
    //         recognized: "√",
    //     });
    // };
    // const onSpeechEnd = (e: any) => {
    //     console.log("onSpeechEnd: ", e);
    //     setState({
    //         end: "√",
    //         started: false,
    //     });
    //     // this.props.onSpeechEnd(state.results);  //AQUI
    // };

    // const onSpeechError = (e: SpeechErrorEvent) => {
    //     console.log("onSpeechError: ", e);
    //     setState({
    //         error: JSON.stringify(e.error),
    //     });
    // };
    // const onSpeechResults = (e: SpeechResultsEvent) => {
    //     console.log("onSpeechResults: ", e);
    //     setState({
    //         results: e.value!,
    //     });
    // };
    // const onSpeechPartialResults = (e: SpeechResultsEvent) => {
    //     console.log("onSpeechPartialResults: ", e);
    //     setState({
    //         partialResults: e.value!,
    //     });
    // };
    // const onSpeechVolumeChanged = (e: any) => {
    //     console.log("onSpeechVolumeChanged: ", e);
    //     setState({
    //         pitch: e.value,
    //     });
    // };
    // const _startRecognizing = async () => {
    //     setState({
    //         recognized: "",
    //         pitch: "",
    //         error: "",
    //         started: false,
    //         results: [],
    //         partialResults: [],
    //         end: "",
    //     });
    //     try {
    //         await Voice.start("en-US");
    //         // this.props.onSpeechStart(); //AQUI

    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    // const _stopRecognizing = async () => {
    //     try {
    //         await Voice.stop();
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    // const _cancelRecognizing = async () => {
    //     try {
    //         await Voice.cancel();
    //     } catch (e) {
    //         console.error(e);
    //     }
    // };
    // const _destroyRecognizer = async () => {
    //     try {
    //         await Voice.destroy();
    //     } catch (e) {
    //         console.error(e);
    //     }
    //     setState({
    //         recognized: "",
    //         pitch: "",
    //         error: "",
    //         started: false,
    //         results: [],
    //         partialResults: [],
    //         end: "",
    //     });
    // };

    return (<>
        <Layout
            style={styles.showTexto}
            level='4'
        >
            <Text>
                {textListening}
            </Text>
        </Layout>

        <Layout
            style={styles.footer}
            level='4'
        >
            <Layout
                style={styles.space}
                level='4'
            >
                {/* <Button onPress={_startRecognizing} >Ouvir</Button>
                <Button onPress={_startRecognizing} >Pausar</Button> */}
                <Button >Ouvir</Button>
                <Button>Pausar</Button>
                <Button
                    status="info"
                >
                    Recarregar
                </Button>
            </Layout>
        </Layout>
    </>)
}

const styles = StyleSheet.create({

    space: {
        display: 'flex',
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 5
    },
    showTexto: {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
    },
    footer: {
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        width: 32,
        height: 32,
    }
});


export default SpeechCard;