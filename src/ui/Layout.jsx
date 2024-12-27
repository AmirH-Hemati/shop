import { Outlet } from "react-router-dom";
import Header from "./Header";

function Layout() {
  return (
    <div className="h-screen grid grid-rows-[auto_1fr]">
      <Header />

      <main className="flex-grow  overflow-auto">
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
