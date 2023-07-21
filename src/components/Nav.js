

import React from 'react'


const Nav = (props) => {
  return (
    <div>
       <div  className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}  `}>
          <div className="container-fluid">
            <a id="title" className="navbar-brand" href='/'>
              {" "}
              {props.tit}
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a id="home" className="nav-link active" aria-current="page" href='#'>
                  Home
                  </a>
                </li>
                
              </ul>
              <div className="themes">
              <div className="modes d-flex " >
                <div
                  className={`text-${
                    props.mode === "light" ? "dark" : "light"
                  }` }
                >
                  <strong
                    style={{
                    //   marginRight: "50px",
                    }}
                  >
                    Chnage Themes : 
                  </strong>
                </div>
                <div
                  className="primary "
                  onClick={props.rd}
                  style={{
                    height: "20px",
                    width: "20px",
                    margin: "6px",
                    backgroundColor: "#ff00a5",
                    cursor: "pointer",
                    // marginRight:'40px'
                  }}
                ></div>
                <div
                  className="primary "
                  onClick={props.gr}
                  style={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: "green",
                    margin: "6px",
                    cursor: "pointer",
                  }}
                ></div>
                <div
                  className="primary "
                  onClick={props.yl}
                  style={{
                    height: "20px",
                    width: "20px",
                    backgroundColor: "#ffa500",
                    margin: "6px",
                    cursor: "pointer",
                  }}
                ></div>
             
               
            </div>
            <div style={{
                    // marginLeft:'20px'
                 }}
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              }`}
            >
              <input
                className="form-check-input"
                type="checkbox"
                onClick={props.changeMode}
                role="switch"
                id="flexSwitchCheckDefault"
              />
              <label
                className="form-check-label"
                htmlFor="flexSwitchCheckDefault"
              >{`${
                props.mode === "dark" ? "Enable light-Mode" : "Enable Dark-Mode"
              }`}</label>
            </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
  
            }

export default Nav