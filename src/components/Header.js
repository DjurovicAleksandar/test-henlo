import React from 'react'
import DarkmodeToggle from './DarkmodeToggle'
import Container from './UI/Container'
import Link from '@/resolvers/Link'
import nav from '@/settings/main.json'

export default function Header() {
  return (
    <header className="flex h-16 bg-[#EEF6FF] px-5  text-black dark:border-zinc-800 dark:bg-[#EEF6FF] dark:text-white sm:px-[7.8rem]">
      <Container className="m-auto flex items-center justify-between gap-20">
        <Link
          to="/"
          className="boder-4 border border-black p-2 text-2xl font-bold text-black"
        >
          DR ZAC
        </Link>
        <div className="flex items-center gap-8 ">
          <nav className="flex gap-4 font-medium uppercase text-black">
            {nav.nav.map((item, i) => (
              <Link to={item.permalink} key={i}>
                {item.name}
              </Link>
            ))}
          </nav>
          <button className="rounded-md bg-blue-500 px-6 py-[0.7rem]">
            Book a consultation
          </button>
          <div className="ml-6 flex items-center border-l border-slate-200 pl-6 dark:border-zinc-800">
            <DarkmodeToggle />
          </div>
        </div>
      </Container>
    </header>
  )
}
