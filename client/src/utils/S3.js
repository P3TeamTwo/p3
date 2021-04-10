import S3FileUpload from 'react-s3';

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
            accessKeyId: 'AKIAWNFFL3CWKUZWFZ5L',
            secretAccessKey: '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',
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
            accessKeyId: 'AKIAWNFFL3CWKUZWFZ5L',
            secretAccessKey: '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',
        }
        S3FileUpload
            .deleteFile(undefined, config)
            .then(data => console.log(data))
            .catch(err => console.error(err))
    },
};