import Menu from "../components/menu/menu.component";

function MainLayout({children}){
  return (
    <div>
      <Menu/>
      <div>
        {children}
      </div>
      <h1>footer</h1>
    </div>
  )
}

export default MainLayout;