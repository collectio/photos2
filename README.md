# Collectio Photo

https://photos.collectio.jp/

## 開発

```
npm install  
npm start
```

----

FireStore emulator
```
npm run firestore
```

FireStoreのルールのデプロイ
```
npm run rule
```

### CloudStorageにCORSを設定する

web share apiでシェアするために、画像を取得する際にCORSが必須

https://firebase.google.com/docs/storage/web/download-files?hl=ja#cors_configuration

```
gsutil cors set cors.json gs://collectio-photo-2233e.appspot.com
```