import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="h-screen flex flex-col ">
      <Header />

      <main className="flex-1  overflow-auto">
        <Outlet />
        
      </main>
    </div>
  );
}

export default Layout;
