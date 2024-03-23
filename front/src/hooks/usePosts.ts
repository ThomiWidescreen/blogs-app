import { getAll } from "@/api/posts"
import { Post } from "@/global.types"
import { useEffect, useState } from "react"

export const usePosts = () => {
  const [posts, setPosts] = useState<Post[]>()
  const [totalPages, setTotalPages] = useState<number>()
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [lastPage, setLastPage] = useState(1)
  useEffect(() => {
    setIsLoading(true)
    getAll(lastPage,5).then(newPosts => {      
        setPosts([...posts || [], ...newPosts.posts])
        setTotalPages(newPosts.totalPages)
        setIsLoading(false)
    })
  }, [lastPage])

  //This use effect handle all the scroll-reveal logic
  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 20) {
        if(!isLoading && lastPage !== totalPages) {
          setLastPage(lastPage + 1)
        }
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, lastPage, totalPages]);

  return {posts, isLoading}
}