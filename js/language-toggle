document.addEventListener("DOMContentLoaded", function () {
    const languageToggle = document.getElementById("language-toggle");
    let currentLanguage = 'ro';

    languageToggle.addEventListener("click", function () {
        currentLanguage = currentLanguage === 'ro' ? 'en' : 'ro';
        i18n.changeLanguage(currentLanguage);
        languageToggle.textContent = currentLanguage === 'ro' ? 'EN' : 'RO';
    });

    i18n.on('languageChanged', () => {
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            element.textContent = i18n.t(key);
        });
    });
});
