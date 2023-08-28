function theme() {
const htmlElement = document.querySelector('.principal');
const dataThemeValue = htmlElement.dataset.theme;

if (dataThemeValue =="light") {htmlElement.setAttribute('data-theme', 'dark');} 
else {htmlElement.setAttribute('data-theme', 'light');}
};


function googleTranslateElementInit() {
    new google.translate.TranslateElement({
            pageLanguage: 'en',
            includedLanguages: 'es,en',
            layout: google.translate.TranslateElement.InlineLayout.SIMPLE},

         'google_translate_element');
  }

