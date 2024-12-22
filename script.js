// 短縮URLボタンの動作
document.getElementById('shorten-btn').addEventListener('click', function () {
    const originalUrl = document.getElementById('original-url').value.trim();

    if (!originalUrl) {
        alert('有効なURLを入力してください。');
        return;
    }

    // 短縮URLの擬似生成（ランダムなIDを付与）
    const randomId = Math.random().toString(36).substring(7);
    const shortenedUrl = `${window.location.origin}/` + randomId;

    // 表示
    const shortenedUrlElement = document.getElementById('shortened-url');
    shortenedUrlElement.href = shortenedUrl;
    shortenedUrlElement.textContent = shortenedUrl;

    document.getElementById('shortened-url-container').style.display = 'block';
});
