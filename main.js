//HTMLの要素を取得する
const btn = document.getElementById('btn');
const setupDiv = document.querySelector('.setup');
const errorDiv = document.querySelector('.error');
const punchlineDiv = document.querySelector('.punchline');

//ボタンクリック時の動作設定
btn.addEventListener('click', async () => {
    // 表示を初期化
    setupDiv.innerText = "読み込み中...";
    punchlineDiv.innerText = "";

    try {
        // API（エンドポイント）からデータを取得
        //***************************************************************************ジョークAPI*******************************************
        const response = await fetch('https://official-joke-api.appspot.com/jokes/random');
        const data = await response.json();
        //****************************************************************************************************************************** */ */

        //***************************************************************************Gemini_API**************************************** */
        

        // 取得したデータをHTMLの各クラスに表示
        setupDiv.innerText = data.setup;
        punchlineDiv.innerText = data.punchline;

    } catch (error) {
        error.innerText = "データの取得に失敗しました。";
        console.error("Error:", error);
    }
});