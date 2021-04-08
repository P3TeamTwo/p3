import { useEffect, useState } from "react";
import ReactS3 from "react-s3";


// //Optional Import
// import { uploadFile } from 'react-s3';

const config = {
    bucketName: 'voice-note',
    dirName: 'memos',
    region: 'ca-central-1',
    accessKeyId: 'AKIAWNFFL3CWKUZWFZ5L',
    secretAccessKey: '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',
}

const useRecorder = () => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);



    useEffect(() => {

        if (recorder === null) {
            if (isRecording) {
                requestRecorder().then(setRecorder, console.error);
            }
            return;
        }

        // Manage recorder state.
        if (isRecording) {
            recorder.start();
        } else {
            recorder.stop();
        }


        // Obtain the audio when ready.
        const handleData = e => {
            setAudioURL(URL.createObjectURL(e.data));
            ReactS3.upload(e.data, config)
                .then(data => console.log(data))
                .catch(err => console.error(err))
        };

        recorder.addEventListener("dataavailable", handleData);
        return () => recorder.removeEventListener("dataavailable", handleData);
    }, [recorder, isRecording]);

    const startRecording = () => {
        setIsRecording(true);
    };

    const stopRecording = () => {
        setIsRecording(false);
    };
    localStorage.setItem('voice', audioURL);
    return [audioURL, isRecording, startRecording, stopRecording];
};

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
export default useRecorder;