import Footer from "../components/footer";
import { Header } from "../components/header/header.component";
import Menu from "../components/menu/menu.component";

function MainLayout({children}){
  return (
    <div>
      <Header/>
      <Menu/>
      <div>
        {children}
      </div>
      <Footer/>
    </div>
  )
}

export default MainLayout;