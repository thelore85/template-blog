import {getPosts} from '@/sanity/sanity-utils'
import Link from 'next/link'

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="min-h-screen bg-gray-100 py-9 c">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Home Posts</h1>
      <main className="container rounded-lg bg-white p-4 mx-auto ">
        <div className="p-4 rounded-md border-gray-100 bg-gray-50 border-2 mb-2">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
            {'>'} Go to Blog
          </Link>
        </div>
        <div className="p-4 rounded-md border-gray-100 bg-gray-50 border-2 mb-2">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
            {'>'} Go to Blog
          </Link>
        </div>
        <div className="p-4 rounded-md border-gray-100 bg-gray-50 border-2 mb-2">
          <Link href="/blog" className="text-blue-500 hover:text-blue-700 font-medium">
            {'>'} Go to Blog
          </Link>
        </div>
      </main>
    </div>
  )
}
