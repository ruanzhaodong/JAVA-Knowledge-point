// - 导航栏加载脚本
async function loadHtmlFile(url, targetId = 'target') {
    try {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`HTTP错误! 状态码: ${response.status}`);
        
        const htmlContent = await response.text();
        document.getElementById(targetId).innerHTML = htmlContent;
        
        console.log(`成功加载: ${url}`);
        return true;
    } catch (error) {
        console.error('加载文件失败:', error);
        // 显示错误信息
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

// 加载导航栏
document.addEventListener('DOMContentLoaded', function() {
    // 使用GitHub原始文件URL（raw.githubusercontent.com）
    const navbarUrl = 'https://raw.githubusercontent.com/ruanzhaodong/JAVA-Knowledge-point/main/JAVA/导航栏(JAVA公共区域).html';
    
    // 加载导航栏到默认ID为"target"的元素
    loadHtmlFile(navbarUrl);
    
    // 可选：添加加载状态提示
    const targetElement = document.getElementById('target');
    if (targetElement) {
        targetElement.innerHTML = '<div class="loading"></div>';
    }
});
