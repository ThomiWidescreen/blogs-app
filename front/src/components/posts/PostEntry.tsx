import { Post } from '@/global.types'
import React from 'react'

function truncate(str: string, n: number) {
  return (str.length > n) ? str.slice(0, n - 2) + '...' : str;
};

interface IBlogEntryProps { extended?: boolean, right: boolean, data: Post }

export default function BlogEntry({ extended = false, right, data }: IBlogEntryProps) {
  return (
    <article className={extended ? `lg:w-2/3 lg: mt-8 bg-white h-96 flex ${right && "lg:ml-auto"}` : "lg:w-1/2 mt-8 h-full bg-white  flex lg:inline-flex"}>
      <div className="w-2/5 xl:w-1/3 object-cover aspect-square bg-gray-200">
        <img alt="Random image" src={`https://source.unsplash.com/640x640/?${data.id}`} className="w-full h-full aspect-square"></img>
      </div>
      <div className={extended ? "lg:p-14 p-5 text-black" : "p-5 w-full text-black"}>
        <span className="font-light">{data.author}</span>
        <h2 className="lg:text-2xl text-xl font-bold text-[#f1a10a]">{data.title}</h2>
        <span className='lg:text-base text-sm'>{truncate(data.content, extended ? 300 : 200)}</span>
        <a className="font-semibold" href={`/${data.id}`}> View more</a>
      </div>
    </article>
  )
}
