async function loadHtmlFile(url, targetId = 'target') {
    try {
        console.log('开始加载:', url);
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP错误! 状态码: ${response.status}`);
        
        const htmlContent = await response.text();
        const targetElement = document.getElementById(targetId);
        if (!targetElement) throw new Error(`目标元素 #${targetId} 不存在`);
        
        targetElement.innerHTML = htmlContent;
        console.log(`成功加载: ${url}`);
        return true;
    } catch (error) {
        console.error('加载文件失败:', error);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.innerHTML = `
                <div class="error-message">
                    <p>导航栏加载失败</p>
                    <p class="error-details">${error.message}</p>
                </div>
            `;
        }
        return false;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM已加载');
    const targetElement = document.getElementById('target');
    console.log('target元素:', targetElement);
    
    const navbarUrl = 'https://raw.githubusercontent.com/ruanzhaodong/JAVA-Knowledge-point/main/JAVA/导航栏(JAVA公共区域).html';
    loadHtmlFile(navbarUrl);
});
