/* eslint-disable no-unused-vars */
import Header from "./components/header"
import Cards from "./components/cards"

import ContactUS from "./components/contactUS"

function App() {
  // const [theme, setTheme] = useState('light');


  // useEffect(() => {
  //   const savedTheme = localStorage.getItem('theme');
  //   if (savedTheme) {
  //     setTheme(savedTheme);
  //     document.documentElement.classList.add(savedTheme);
  //   }
  // }, []);


  return (
    <>
        <Header />
        <Cards />
        {/* <WhySelected /> */}
        {/* <SecondSwiper /> */}
        {/* <Teachers /> */}
        <ContactUS />
    </>
  )
}

export default App