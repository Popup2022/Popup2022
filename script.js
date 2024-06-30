document.addEventListener('DOMContentLoaded', (event) => {
    var escapeButton = document.querySelector('.escape-button');
    escapeButton.addEventListener('mouseenter', function() {
        // 计算按钮新位置的边界
        var maxX = window.innerWidth - this.offsetWidth;
        var maxY = window.innerHeight - this.offsetHeight;

        // 生成随机位置
        var newX = Math.random() * maxX;
        var newY = Math.random() * maxY;

        // 应用新位置，确保按钮在可视区域内
        this.style.transform = 'translate(' + newX + 'px, ' + newY + 'px)';
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    var messageInput = document.querySelector('.message-input');
    var warningMessage = document.getElementById('warning-message');

    // 监听输入事件
    messageInput.addEventListener('input', function() {
        // 检查输入长度是否超过4个字符
        if (this.value.length > 4) {
            // 隐藏输入框
            this.style.display = 'none';
            // 显示警告信息
            warningMessage.style.display = 'block';
        }
    });
});