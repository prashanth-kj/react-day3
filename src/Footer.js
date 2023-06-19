import React from 'react'

function Footer() {
  return (
    <footer className="py-5 bg-dark">
    <div className="container px-4 px-lg-5 mt-5">
      <div className="small text-center text-white-50">
        &copy; Your Website {new Date().getFullYear()}. All Rights Reserved.
      </div>
    </div>
    </footer>
  )
}

export default Footer