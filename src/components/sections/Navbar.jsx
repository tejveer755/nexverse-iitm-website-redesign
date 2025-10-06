'use client'

import { Menu, X, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Animation variants
  const overlayVariants = {
    closed: {
      x: '100%',
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    },
    open: {
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 400,
        damping: 40
      }
    }
  }

  const menuItemVariants = {
    closed: {
      x: 50,
      opacity: 0
    },
    open: {
      x: 0,
      opacity: 1
    }
  }

  const containerVariants = {
    closed: {
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1
      }
    }
  }

  const socialVariants = {
    closed: {
      y: 50,
      opacity: 0
    },
    open: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.8
      }
    }
  }

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/' },
    { name: 'Events', href: '/' },
    { name: 'Connect Us', href: '/' }
  ]

  return (
    <>
      {/* Main Navbar */}
      <div 
        className='w-full fixed top-0 mt-2 left-1/2 -translate-x-1/2 z-50 px-7 py-2 bg-zinc-950/60  backdrop-blur-lg mx-auto max-w-[95%] rounded-4xl  flex justify-between items-center '
      >
        <motion.div 
          className="flex items-center"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Link href="/">
            <Image 
              src='/logo1.png' 
              width={100} 
              height={100} 
              alt="Logo"
              className="cursor-pointer"
            />
          </Link>
        </motion.div>

        {/* Menu Icon - click to open navbar */}
        <motion.button 
          onClick={toggleMenu}
          className="p-3  rounded-xl transition-colors duration-200 relative overflow-hidden"
          aria-label="Toggle menu"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <motion.div
            animate={isMenuOpen ? { rotate: 180 } : { rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Menu className="w-6 h-6 text-gray-50" />
          </motion.div>
        </motion.button>
      </div>

      {/* Full Page Overlay Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="fixed inset-0 z-[100] bg-gradient-to-br from-zinc-900 to-black text-white"
            variants={overlayVariants}
            initial="closed"
            animate="open"
            exit="closed"
          >
            
            {/* Header with Logo and Close Button */}
            <motion.div 
              className="flex justify-between items-center p-5"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <motion.div 
                className=" flex items-center justify-center "
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              >
                <Image 
              src='/logo1.png' 
              width={100} 
              height={100} 
              alt="Logo"
            />
              </motion.div>
              
              <motion.button 
                onClick={toggleMenu}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors duration-200"
                aria-label="Close menu"
                whileHover={{ scale: 1.1,  }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="w-8 h-8 text-white" />
              </motion.button>
            </motion.div>

            {/* Menu Content */}
            <div className="flex flex-col md:pt-0 pt-12  px-12  max-w-4xl mx-auto h-full">
              
              {/* Navigation Links */}
              <motion.nav 
                className="space-y-8 mb-16"
                variants={containerVariants}
                initial="closed"
                animate="open"
              >
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    variants={menuItemVariants}
                    whileHover={{ 
                      x: 20,
                      transition: { type: 'spring', stiffness: 300 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link 
                      href={item.href}
                      className="block text-6xl md:text-8xl font-bold text-white/90 hover:text-white transition-all duration-500 cursor-pointer"
                      onClick={toggleMenu}
                    >
                      <motion.span
                        // whileHover={{
                        //   textShadow: '0px 0px 8px rgb(255,255,255,0.8)'
                        // }}
                      >
                        {item.name}
                      </motion.span>
                    </Link>
                  </motion.div>
                ))}
              </motion.nav>

              {/* Bottom Section */}
              <motion.div 
                className="absolute bottom-8 left-12 right-12 flex flex-col md:flex-row justify-end items-start md:items-center space-y-8 md:space-y-0"
                variants={socialVariants}
                initial="closed"
                animate="open"
              >
                
                {/* Social Media Icons */}
                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, staggerChildren: 0.1 }}
                >
                  {[
                    { Icon: Instagram, label: 'Instagram', href: '#' },
                    { Icon: Linkedin, label: 'LinkedIn', href: '#' },
                  ].map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-white/30 transition-colors duration-200"
                      aria-label={social.label}
                      whileHover={{ 
                        scale: 1.2, 
                        rotate: 360,
                        backgroundColor: 'rgba(255,255,255,0.3)'
                      }}
                      whileTap={{ scale: 0.8 }}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 + index * 0.1 }}
                    >
                      <social.Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </motion.div>

              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </>
  )
}

export default Navbar