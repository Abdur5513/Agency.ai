import React, { useEffect } from 'react'
import assets from '../assets/assets'

function ThemeToggleBtn({ theme, setTheme }) {
    useEffect(() => {
        const preferDarkMode = window.matchMedia ('(prefers-color-scheme: dark)').matches;
        setTheme(theme || (preferDarkMode ? 'dark' : 'light'));
    }, [])
   useEffect(() => {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }
  localStorage.setItem('theme', theme)
}, [theme])

  return (
    <button className='cursor-pointer'>
      {theme === 'dark' ? (
        <img
          onClick={() => setTheme('light')}
          src={assets.sun_icon}
          alt="Light mode"
          className='size-8.5 p-1.5 border border-gray-500 rounded-full'
        />
      ) : (
        <img
          onClick={() => setTheme('dark')}
          src={assets.moon_icon}
          alt="Dark mode"
          className='size-8.5 p-1.5 border border-gray-500 rounded-full'
        />
      )}
    </button>
  )
}

export default ThemeToggleBtn
