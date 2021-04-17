import { useEffect, useState } from "react";
import S3 from '../../../../utils/S3';

// //Optional Import
// import { uploadFile } from 'react-s3';


const useRecorder = () => {
    const [audioURL, setAudioURL] = useState("");
    const [isRecording, setIsRecording] = useState(false);
    const [recorder, setRecorder] = useState(null);
    const [memo, setMemo] = useState();



    const user = localStorage.getItem('userId')

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
            setMemo(e.data)
            saveRecording(e.data,user)
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

    const saveRecording = (memo,user) => {
        S3.uploadMemo(memo, user);
    };

    localStorage.setItem('voice', audioURL);
    return [audioURL, isRecording, startRecording, stopRecording, saveRecording];
};

async function requestRecorder() {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    return new MediaRecorder(stream);
}
export default useRecorder;