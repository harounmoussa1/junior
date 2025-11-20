import { Outlet } from "react-router"
import NavBar from "./components/navbar/NavBar"
import Footer from "./components/navbar/Footer"

export default function Layout() {
  return (
    <>
      <NavBar />
      <main className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
