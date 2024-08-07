const productInfo = [
    "Watermelon Orbitz is packed with refreshing flavor and hydration benefits. It helps keep you cool and energized throughout the day.",
    "Kiwi Orbitz is rich in vitamin C and antioxidants, promoting overall health and boosting your immune system.",
    "Peach Orbitz offers a sweet and juicy taste, providing a perfect balance of flavor and health benefits like improved digestion."
];

document.addEventListener('DOMContentLoaded', () => {
    const infoButtons = document.querySelectorAll('.info-button');
    const productInfoDiv = document.getElementById('product-info');
    const infoText = document.getElementById('info-text');
    const closeInfo = document.getElementById('close-info');

    infoButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productIndex = button.getAttribute('data-product');
            infoText.textContent = productInfo[productIndex];
            productInfoDiv.classList.remove('hidden');
        });
    });

    closeInfo.addEventListener('click', () => {
        productInfoDiv.classList.add('hidden');
    });

    productInfoDiv.addEventListener('click', (e) => {
        if (e.target === productInfoDiv) {
            productInfoDiv.classList.add('hidden');
        }
    });
});
