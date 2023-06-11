function translateLanguage(language) {
    var languageElements = document.querySelectorAll('[language]');
  
    languageElements.forEach(function(element) {
      var selectedLanguage = element.getAttribute('language');
      
      var translations = {
        'english': {
          'English': 'English',
          'Português': 'Portuguese',
          'Español': 'Spanish',
          'Français': 'French',
          'Русский': 'Russian',
          '日本語': 'Japanese'
        },
        'portuguese': {
          'English': 'Inglês',
          'Português': 'Português',
          'Español': 'Espanhol',
          'Français': 'Francês',
          'Русский': 'Russo',
          '日本語': 'Japonês'
        },
        'spanish': {
          'English': 'Inglés',
          'Português': 'Portugués',
          'Español': 'Español',
          'Français': 'Francés',
          'Русский': 'Ruso',
          '日本語': 'Japonés'
        },
        'french': {
          'English': 'Anglais',
          'Português': 'Portugais',
          'Español': 'Espagnol',
          'Français': 'Français',
          'Русский': 'Russe',
          '日本語': 'Japonais'
        },
        'russian': {
          'English': 'Английский',
          'Português': 'Португальский',
          'Español': 'Испанский',
          'Français': 'Французский',
          'Русский': 'Русский',
          '日本語': 'Японский'
        },
        'japanese': {
          'English': '英語',
          'Português': 'ポルトガル語',
          'Español': 'スペイン語',
          'Français': 'フランス語',
          'Русский': 'ロシア語',
          '日本語': '日本語'
        }
      };
  
      if (translations[language] && translations[language][selectedLanguage]) {
        element.textContent = translations[language][selectedLanguage];
      }
    });
  }
  
  var languageLinks = document.querySelectorAll('[language]');
  languageLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      var selectedLanguage = link.getAttribute('language');
      translateLanguage(selectedLanguage);
    });
  });

// but it not working its only private it worked with EJS and express.js, im sorry