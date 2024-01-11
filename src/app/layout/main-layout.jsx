
function MainLayout({children}){
  return (
    <div>
      <h1>menu</h1>
      <div>
        {children}
      </div>
      <h1>footer</h1>
    </div>
  )
}

export default MainLayout;