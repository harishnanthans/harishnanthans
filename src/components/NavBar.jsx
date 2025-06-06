import React from "react"
import './NavBar.scss'

export default function NavBar() {
  return <nav className="navbar_container">
      <div className="navbar_home">
        <a>{'<'}harish nanthan{'>'}</a>
      </div>
      <div className="navbar_links">
        <a>[home]</a>
        <a>[work]</a>
        <a>[about]</a>
      </div>
    </nav>
}
