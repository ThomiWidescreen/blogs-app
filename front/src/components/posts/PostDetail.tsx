import { Post } from '@/global.types'
import React from 'react'

interface IBlogEntryProps { data: Post }

export default function PostDetail({ data }: IBlogEntryProps) {
  return (
    <section className="mt-10 inline-block">
      <article className="w-3/4 mx-auto flex flex-col bg-white h-full" >
        <div className="flex">
          <img alt="Random image" src={`https://source.unsplash.com/640x640/?${data.id}`} className="w-1/2 aspect-square"></img>
          <div className="lg:p-7 p-2 text-center flex w-full items-center justify-center flex-col">
            <span className="font-light">{data.author}</span>
            <h2 className="text-lg lg:text-2xl font-bold text-[#f1a10a]">{data.title}</h2>
          </div>
        </div>
        <div className="lg:py-16 py-6 px-12  lg:px-32">
          {data.content}

        </div>
      </article>
    </section>
  )
}
