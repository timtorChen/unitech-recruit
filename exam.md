# 前端基本考題

**✏️️ 以下個人回答，僅供參考**

### 請條列「一般 Function」與「Arrow Function」的差異

1. 語法差異。一般函式寫起來冗長；箭頭函式省略了 `function` 這個關鍵字，在傳遞參數時也有更簡便的寫法。

2. 函式內 `this` 關鍵字表示的對象不一樣。在建立一般函式時，函式內部同時會建立自己的 `this`；而在建立箭頭函式時，函式內的 `this` 會指向環境外部的 `this`。使用箭頭函式會使得物件導向程式的易讀性更高。


3. 箭頭函式不能做為建構式。也就是你不能透過 `new` 關鍵字搭配箭頭函式來建立物件。

4. 箭頭函式內沒有 `arguments` 關鍵字。

**參考資料**
- [MDN](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Functions/Arrow_functions)
- [Stackoverflow](https://stackoverflow.com/questions/34361379/are-arrow-functions-and-functions-equivalent-exchangeable)


### 請問當你在瀏覽器的網址列輸入「google.com」按下 Enter 後，會發生什麼事？(請盡量描述你覺得做爲一個前端開發者所需要的知識點)

1. 瀏覽器使用 HTTP GET 方法，附帶預設的 Header 和 Cookie 向 google.com 發送請求。

2. 請求的回應為一個 html 檔案，及另一列的 Cookies 用來追蹤使用者的偏好

3. 瀏覽器開始解析 html 檔案和內部的 css 和 javascript，接著渲染到螢幕上。

4. 處理完內部資源後，瀏覽器開始載入 html 檔案內描述的外部資源 js、css、圖片、影片等等

**參考資料**
- [Github repo](https://github.com/skyline75489/what-happens-when-zh_CN#http)

### setInterval 為什麼時間上不精確？ 

因為 js 在設計上為 single Thread，也就是同一時間只能做一件事，其他要做的事情只能依序排隊。更細部原因可歸因於，在執行順序上有分為同步和異步任務，優先順序為先執行同步任務，再執行異步任務，而異步任務中又依優先分為 microtask 和 macrotask。回到問題，假設你呼叫 setInterval 希望他在 1000 毫秒過後執行某個 callback 函式，在 1000 毫秒後執行 callback 的動作，被放到異步任務的列隊中，但是前方可能還有不少更優先的同步或異步任務。事實上，你要在時間上精確的控制某個程式的執行是不可能的，因此與其談精確，不如談可接受的時間誤差範圍是多少。

**參考資料**
- [kuro blog](https://kuro.tw/posts/2019/02/23/%E8%AB%87%E8%AB%87-JavaScript-%E7%9A%84-setTimeout-%E8%88%87-setInterval/)
- [github issue](https://github.com/YvetteLau/Step-By-Step/issues/21)
- [amosricky95 medium](https://medium.com/@amosricky95/ricky%E7%AD%86%E8%A8%98-javascript-%E7%9A%84-event-loop-c17a0a49d6e4)

### 請描述什麼是 XSS 
Cross-site scripting (XSS)，中文翻譯為跨網站腳本。最簡單的例子你可以想像有個留言板，它會將你所輸入的留言顯示並儲存在網頁上，那麼如果我在留言區輸入 `<script>alert('總統府宣佈，明天放假')</script>` 會發成甚麼事呢？例子中所提到的是儲存型 XSS；其他還有反射型 XSS，透過在 url 中的參數中放入惡意程式，使用者沒有注意到而點進這種連結，攻擊者就能透過該網頁執行任何他想要做的事，例如竊取使用者輸入的身份認證，傳送到攻擊者的主機上等等。
