'use client'

import { usePosts } from '@/hooks/usePosts';
import React from 'react'
import PostEntry from './PostEntry';

export default function AllPosts() {
  const { posts, isLoading } = usePosts()
  return (
    <>
      {posts && <>
        {posts.map((post, index) => {
          return <PostEntry
            data={post}
            extended={(index + 1) % 3 == 0}
            right={(index + 1) % 6 == 0}
            key={post.id}
          />
        }
        )}
      </>}
      {isLoading && <span className="text-white text-2xl text-center w-full block pt-10">Cargando...</span>}
    </>


  );
}