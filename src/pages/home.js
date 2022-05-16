
import MenuInfo from "../components/menu-info";
import AppHero from "../components/hero";
import AppNavbar from "../components/navbar";
import AboutSection from "../components/about-section";
import HoursSection from "../components/hours-section";
import FollowSection from "../components/follow-section";
import AppFooter from "../components/footer";
import { useRef } from "react";
import { changeTitle } from "../utils";

export default function Home() {

  const followRef = useRef(null);
  const menuRef = useRef(null);
  const hoursRef = useRef(null);
  const aboutRef = useRef(null);

  const refs = {
    followRef, menuRef, hoursRef, aboutRef
  }

  const scrollTo = ( ref ) => {
    ref.current.scrollIntoView();
  }

  changeTitle('Home');

  return (
    <div id="app-home">

      <AppNavbar 
        handlerOnClick={
        { refs , action:scrollTo } 
        }
      />
      
      <AppHero />
      <MenuInfo menuRef={menuRef} />
      <AboutSection aboutRef={aboutRef}/>
      <HoursSection hoursRef={hoursRef} />
      <FollowSection followRef={followRef} /> 

      <AppFooter 
        handlerOnClick={
        { refs , action:scrollTo } 
        }
      />

    </div>
  );
}