/* eslint-disable no-unused-vars */
import Header from "./components/header";
import Cards from "./components/cards";

import ContactUS from "./components/contactUS";
import Course from "./components/course";

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
      <Course />
      <Cards />
      <ContactUS />
      <a href="tel:+998909298801">
        <div className="w-[70px] fixed right-5 bottom-[50px] z-[999] group">
          <img
            src="/free_phone.png"
            alt=""
            className="w-full animate-bounce group-hover:animate-bounce transition duration-300 ease-in-out"
          />
        </div>
      </a>
    </>
  );
}

export default App;
