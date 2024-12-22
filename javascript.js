// Dinamik içerik değiştirme fonksiyonu
function showContent(option) {
    const content = document.getElementById('content');

    if (option === 'videos') {
        content.innerHTML = `
            <h2>Oyun Videoları</h2>
            <p>Burada Marvel: Contest of Champions, PUBG Mobile gibi oyunlara ait videolar bulabilirsiniz.</p>
            <ul>
                <li>Video 1: <a href="https://youtube.com">Link</a></li>
                <li>Video 2: <a href="https://youtube.com">Link</a></li>
            </ul>
        `;
    } else if (option === 'descriptions') {
        content.innerHTML = `
            <h2>Oyun Açıklamaları</h2>
            <p>Popüler oyunlar hakkında açıklamalar ve rehberler:</p>
            <ul>
                <li>Marvel: Contest of Champions - Karakter Rehberi</li>
                <li>PUBG Mobile - Harita Taktikleri</li>
            </ul>
        `;
    } else if (option === 'meet') {
        content.innerHTML = `
            <h2>Tanışma Platformu</h2>
            <p>Oyuncularla tanış, sohbet et ve eğlenceli bir ortamda vakit geçir.</p>
        `;
    } else if (option === 'team') {
        content.innerHTML = `
            <h2>Ekip Platformu</h2>
            <p>Kendi takımını kur, diğer oyuncularla iş birliği yap ve turnuvalara katıl.</p>
        `;
    } else {
        content.innerHTML = '<p>İçerik görmek için yukarıdaki seçeneklerden birine tıklayın.</p>';
    }
}
