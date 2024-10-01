import React from 'react'
import './Navbar.css'
import { motion } from "framer-motion"
const Navbar = () => {
  const icon = {
    hidden: {
      opacity: 0,
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  };
  return (
    <div className='navbar1 container-fluid d-flex justify-content-around'>
      <nav className='navbar  w-50 p-0 m-0 w-100 text-center'>
        <ul className='nav d-flex justify-content-around w-100'>
          <li className='nav-item  w-100 d-flex justify-content-center'>
            <div className="containers ">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="item"
              >
                <motion.path
                  d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l96 0 0 320-96 0c-17.7 0-32 14.3-32 32s14.3 32 32 32l256 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-96 0 0-320 96 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L160 32 32 32z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] }
                  }}
                />
              </motion.svg>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="item"
              >
                <motion.path
                  d="M64 32C28.7 32 0 60.7 0 96L0 256 0 416c0 35.3 28.7 64 64 64l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 416l0-128 160 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 224 64 96l224 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L64 32z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </motion.svg>
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 320 512"
                className="item"
              >
                <motion.path
                  d="M32 32C14.3 32 0 46.3 0 64S14.3 96 32 96l128 0 0 352c0 17.7 14.3 32 32 32s32-14.3 32-32l0-352 128 0c17.7 0 32-14.3 32-32s-14.3-32-32-32L192 32 32 32z"
                  variants={icon}
                  initial="hidden"
                  animate="visible"
                  transition={{
                    default: { duration: 2, ease: "easeInOut" },
                    fill: { duration: 2, ease: [1, 0, 0.8, 1] },
                  }}
                />
              </motion.svg>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  )
}




export default Navbar

