import * as React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="title">
          <Link to="/">Rookie Lee's Blog</Link>
        </div>
      </div>
    </header>
  )
}

export default Header
