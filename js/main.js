document.addEventListener('DOMContentLoaded', () => {
    // 标签页切换逻辑
    const tabBtns = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.content-section');

    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // 振动反馈 (如果设备支持)
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }

            // 移除所有的 active 类
            tabBtns.forEach(b => b.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));

            // 为当前点击的按钮和对应的 section 添加 active 类
            btn.classList.add('active');
            const targetId = btn.getAttribute('data-target');
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');
            
            // 重新触发进场动画
            const animatedElements = targetSection.querySelectorAll('.animate-up');
            animatedElements.forEach(el => {
                el.style.animation = 'none';
                el.offsetHeight; /* trigger reflow */
                el.style.animation = null; 
            });
        });
    });

    // 简单的模拟动态哈希更新
    const hashElement = document.querySelector('.hash');
    if (hashElement) {
        setInterval(() => {
            const characters = 'abcdef0123456789';
            let newHash = '0x';
            for (let i = 0; i < 4; i++) {
                newHash += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            newHash += '...';
            for (let i = 0; i < 4; i++) {
                newHash += characters.charAt(Math.floor(Math.random() * characters.length));
            }
            hashElement.textContent = newHash;
        }, 5000); // 每5秒更新一次模拟区块链心跳
    }

    console.log("💎 智信溯源平台 - 高级版 JS 已加载");
});
