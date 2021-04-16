import S3FileUpload from 'react-s3';

// Importing dotenv to be able to use our .env file in react
require('dotenv').config()


export default {

    uploadMemo: (memo, user) => {
        let today = new Date(); 
        // To change date of save to s3 +1 means tommorow
        // today.setDate(new Date().getDate()+1);
        const regex = /[^/]+/g;
        let formatDate = today.toLocaleDateString('fr-CA').match(regex)


        const config = {
            bucketName: 'voice-note',
            dirName: `${formatDate}-${user}`,
            region: 'ca-central-1',
            accessKeyId: "AKIAWNFFL3CWMJN4XUWO",
            secretAccessKey: "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"
        }
        S3FileUpload
            .uploadFile(memo, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    },


    deleteMemo: (memo, user) => {
        const config = {
            bucketName: 'voice-note',
            dirName: `${Date.now()}-${user}`,
            region: 'ca-central-1',
            accessKeyId: 'AKIAWNFFL3CWMJN4XUWO',
            secretAccessKey: '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',
        }
        S3FileUpload
            .deleteFile(undefined, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    },
};