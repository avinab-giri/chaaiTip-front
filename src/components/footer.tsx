import React from 'react'
const Footer = () => {
  const currentYear = new Date().getFullYear(); 
  const year = (currentYear == 2025) ? currentYear : `2025 - ${currentYear}`;
  return (
    <footer className='container mx-auto px-2 py-10 flex items-center justify-between flex-wrap'>
      <p>© {year} <a href={process.env.NEXT_PUBLIC_SITE_URL}>{process.env.NEXT_PUBLIC_BRAND_NAME}</a>. Made in Odisha, India</p>

      <ul className='flex items-center gap-5'>
        <li><a className='font-medium hover:font-bold transition-all duration-200' href="/about">About</a></li>
        <li><a className='font-medium hover:font-bold transition-all duration-200' href="/privacy-policy">Privacy</a></li>
        <li><a className='font-medium hover:font-bold transition-all duration-200' href="/terms">Terms</a></li>
      </ul>

      <ul className='flex items-center gap-5'>
        <li><a className='cursor-pointer font-medium hover:font-bold transition-all' href={process.env.NEXT_PUBLIC_TW_LINK} target='_blank'>Tw</a></li>
        <li><a className='cursor-pointer font-medium hover:font-bold transition-all' href={process.env.NEXT_PUBLIC_IN_LINK} target='_blank'>In</a></li>
        <li><a className='cursor-pointer font-medium hover:font-bold transition-all' href={process.env.NEXT_PUBLIC_YO_LINK} target='_blank'>Yo</a></li>
        <li><a className='cursor-pointer font-medium hover:font-bold transition-all' href={process.env.NEXT_PUBLIC_LI_LINK} target='_blank'>Li</a></li>
      </ul>

    </footer>
  )
}

export default Footer