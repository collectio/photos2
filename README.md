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

## Android Google loginでerror10

keystoreのsha1を登録していても、error10でログインできない

https://github.com/collectio/photos2/blob/58425c71ea8f63c890ffa2ac75cd11fcf22667bb/src/App.tsx#L404-L405

この設定が必要だった。

https://github.com/collectio/photos2/blob/05d0c452d339e2ec9d94e149c6092383ee014bce/firebaseConfig.json#L9

設定場所がconfigと分離していて非常に厄介だったので、firebaseConfig内にまとめた。

https://stackoverflow.com/questions/50507877/where-do-i-get-the-web-client-secret-in-firebase-google-login-for-android

google-service.jsonのclient_type: 3のclient_idが必要だった。