
import './App.css';
import LanguageDropdown from './components/language-dropdown';
import { useTranslation } from "react-i18next"
import i18next from "i18next"

function App() {

  const { t } = useTranslation();

  const handleLanguage = (e) => {
    // const selectedLanguage = e.target.value;
    // console.log('Selected language:', selectedLanguage);
    // i18next.changeLanguage(e.target.value)

    const selectedLanguage = e.target.value;

    i18next.changeLanguage(selectedLanguage);
    localStorage.setItem('selectedLanguage', selectedLanguage); // Save the selected language to localStorage
  }
  return (
    <div className="App">
      <LanguageDropdown handleLanguage={(e) => handleLanguage(e)} />
      <p>{t('Home')} the best {t('school')}</p>
    </div>
  );
}

export default App;
