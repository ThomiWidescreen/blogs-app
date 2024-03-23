import { getOne } from '@/api/posts'
import PostDetail from '@/components/posts/PostDetail'
import React from 'react'

export default async function IndividualPost({ params }: { params: { id: string } }) {
  const data = await getOne(params.id)
  return (
    <PostDetail data={data} />
  )
}
