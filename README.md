# 待辦清單專案 todo-list-sequelize
<br>
練習用 node.js 搭配 express 框架開發網頁，讓使用者新增、瀏覽、修改和刪除待辦事項，以及透過 sequelize 操作 MySQL。

<br>

## 專案功能 - Features
1.  使用者可以註冊帳號
2.  使用者可以輸入帳號密碼登入
3.  使用者可以透過 Facebook 登入
4.  使用者可以瀏覽所有待辦事項
5.  使用者可以新增待辦事項
6.  使用者可勾選待辦事項
7.  使用者可以修改待辦事項內容
8.  使用者可以刪除待辦事項

<br>
## 建置環境 - Environment
<br>

* node.js : ^10.15.0
* express: ^4.17.1
* express-handlebars: ^5.3.3
* express-session: ^1.17.2
* passport: ^0.4.1
* passport-local: ^1.0.0
* passport-facebook: ^3.0.0
* sequelize: ^6.6.5
* MySQL: ^8.0.25


<br>

## 安裝流程 - Installing

<br>

1. 藉由 git clone 將專案下載至本地
```
git clone https://github.com/joeyWuTRKTR/todo-list-sequelize.git
```
2. 進入專案資料夾
```
cd todo-list-sequelize
```
3. 安裝套件
```
npm install
```
4. 引入環境變數

<br>
```
將 .env.example 改為 .env
若使用Facebook登入，請到.env檔案修改FACEBOOK_ID & FACEBOOK_SECRET欄位(使用自己facebook-develope，建立應用程式)
```
<br>

5. 建立資料庫

<br>
打開 MySQL workbench 並連線至本地資料庫，輸入下列指令建立資料庫 

    drop database if exists todo_sequelize;
create database todo_sequelize;
use todo_sequelize;

* 預設資料庫名稱為 todo_sequelize，也可使用其他名稱，並將 config.js 中的 database 改為欲使用的資料庫名稱。

<br>

6. 建立資料庫欄位
```
npx sequelize db:migrate
```
7. 建立種子資料
```
npx sequelize db:seed:all
```

8. 啟動網頁伺服器
```
npm run dev
```
9. 出現下列訊息，表示啟動成功。點選連結開啟網頁
```
App is running on http://localhost:3000
```
10. 測試帳號
```
* 測試帳號：user1@example.com 
* 測試密碼：12345678
```
