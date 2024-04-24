import { useEffect, useState } from 'react'
import './App.css'
import { setApplicationLanguage } from './redux/ApplicationLanguageSlice'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from "js-cookie";
import { useTranslation } from 'react-i18next'
import { setInnerDimentions } from './redux/InnerDimentionSlice'
import PortFolioRoutes from './route/PortFolioRoutes'
import './assets/css/styles.css'

function App() {
  const [count, setCount] = useState(0)

  const dispatch = useDispatch()
  const { t } = useTranslation();
  const { i18n } = useTranslation()

  const myBioLanguage = useSelector((state) => state?.applicationLanguage?.value);
  const myBioTheme = useSelector((state) => state?.currentTheme?.value);

  
  useEffect(() => {
    if (myBioLanguage !== "") {

      Cookies.set("MyBioLanguage", myBioLanguage, { domain: import.meta.env.VITE_APP_COOKIE_DOMAIN, expires: 365 * 5 });
      i18n?.changeLanguage(myBioLanguage)
    }
    if (Cookies.get("MyBioTheme") !== "") {
      Cookies.set("MyBioTheme", "Light", { domain: import.meta.env.VITE_APP_COOKIE_DOMAIN, expires: 365 * 5 });
    }
    document.body.classList = `${myBioLanguage+ ' ' + myBioTheme}` || "en light";

  }, [i18n, myBioLanguage])

  // useEffect(() => {
  //   if (Cookies.get("MyBioTheme") === undefined) {
  //     Cookies.set("MyBioTheme", "Light", { domain: import.meta.env.VITE_APP_COOKIE_DOMAIN, expires: 365 * 5 });
  //   }
  // }, [])

  useEffect(() => {
    if (Cookies.get('MyBioLanguage') != undefined) {
      let lang = Cookies.get('MyBioLanguage')
      dispatch(setApplicationLanguage(lang))
    }


  }, [Cookies])



  const handleResize = () => {
    let data = {
      height: window.innerHeight,
      width: window.innerWidth
    }
    dispatch(setInnerDimentions(data))
  }



  useEffect(() => {
    // Attach event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial calculation on component mount
    handleResize();

    // Detach event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
      <PortFolioRoutes />
  )
}

export default App
