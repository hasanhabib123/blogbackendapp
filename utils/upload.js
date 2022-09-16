import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const storage = new GridFsStorage({
    url : `mongodb://blog-app:habib55555@ac-4w0lr2k-shard-00-00.rqyxxh7.mongodb.net:27017,ac-4w0lr2k-shard-00-01.rqyxxh7.mongodb.net:27017,ac-4w0lr2k-shard-00-02.rqyxxh7.mongodb.net:27017/Blog-app?ssl=true&replicaSet=atlas-6huc4a-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: { useNewUrlParser: true },
    file: (request, file) => {
        const match = ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage}); 