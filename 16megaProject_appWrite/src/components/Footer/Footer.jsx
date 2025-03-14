import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'
import Container from '../../container/container'

function Footer() {
  return (
    <section className="relative overflow-hidden py-4 bg-gray-900 text-gray-300 border-t border-gray-700">
    <div className="relative z-10 mx-auto max-w-7xl px-4">
      <div className="flex flex-wrap justify-between gap-6">
        <div className="w-full md:w-1/4">
          <div className="mb-2">
            <Logo width="80px" />
          </div>
          <p className="text-sm">&copy; 2025. All Rights Reserved.</p>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="mb-2 text-sm font-semibold uppercase text-gray-400">Company</h3>
          <ul className="space-y-1">
            <li><Link className="hover:text-white" to="/">Features</Link></li>
            <li><Link className="hover:text-white" to="/">Pricing</Link></li>
            <li><Link className="hover:text-white" to="/">Affiliate</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="mb-2 text-sm font-semibold uppercase text-gray-400">Support</h3>
          <ul className="space-y-1">
            <li><Link className="hover:text-white" to="/">Help</Link></li>
            <li><Link className="hover:text-white" to="/">Contact</Link></li>
          </ul>
        </div>
        <div className="w-full md:w-1/5">
          <h3 className="mb-2 text-sm font-semibold uppercase text-gray-400">Legals</h3>
          <ul className="space-y-1">
            <li><Link className="hover:text-white" to="/">Privacy Policy</Link></li>
            <li><Link className="hover:text-white" to="/">Terms & Conditions</Link></li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Footer