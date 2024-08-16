const productInfo = [
    "Watermelon Orbitz is packed with refreshing flavor and hydration benefits. It helps keep you cool and energized throughout the day.",
    "Kiwi Orbitz is rich in vitamin C and antioxidants, promoting overall health and boosting your immune system.",
    "Peach Orbitz offers a sweet and juicy taste, providing a perfect balance of flavor and health benefits like improved digestion."
];

const promoDetails = "Enjoy our '2 for 1' special! Buy one Orbitz drink and get another of the same flavor for free. This offer is valid for a limited time only, so don't miss out on doubling your refreshment!";

// More Info button Function
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

// Promo Function
document.addEventListener('DOMContentLoaded', () => {
    const promoButton = document.getElementById('promo-button');
    const promoDetailsDiv = document.getElementById('promo-details');
    const promoText = document.getElementById('promo-text');
    const closePromo = document.getElementById('close-promo');

    promoButton.addEventListener('click', () => {
        promoText.textContent = promoDetails;
        promoDetailsDiv.classList.remove('hidden');
    });

    closePromo.addEventListener('click', () => {
        promoDetailsDiv.classList.add('hidden');
    });

    promoDetailsDiv.addEventListener('click', (e) => {
        if (e.target === promoDetailsDiv) {
            promoDetailsDiv.classList.add('hidden');
        }
    });
});