import {getPosts} from '@/sanity/sanity-utils'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import Link from 'next/link'

type Post = {
  _id: string
  title: string
  _createdAt: string
  body: any
  mainImage: {
    asset: {
      url: string
    }
  }
  slug: string
}

export default async function Home() {
  const posts = await getPosts()

  return (
    <div className="justify-center items-start min-h-screen bg-gray-100 py-9 c">
      <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Blog Posts</h1>
      <main className=" container  mx-auto">
        {/* Griglia di Post */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6  mb-4">
          {posts?.length > 0 ? (
            posts.map((post: Post) => (
              <div key={post._id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ease-in-out">
                <div className="p-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-3">{post.title}</h2>
                  <Image src={post.mainImage.asset.url} alt="post-image" width={600} height={400} className="rounded-md w-full mb-2" />
                  <p className="text-sm text-gray-500 mb-4">{new Date(post._createdAt).toLocaleDateString()}</p>
                  <div className="text-gray-700 line-clamp-4">
                    <PortableText value={post.body} />
                  </div>
                </div>

                {/* Link to the individual post */}
                <div className="p-6 pt-2">
                  <Link href={`/blog/${post.slug}`} className="text-blue-500 hover:text-blue-700 font-medium">
                    Leggi di più →
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-gray-500 text-center">No Published Post.</p>
          )}
        </div>
        <div className="">
          <Link href="/" className="text-blue-500 hover:text-blue-700 font-medium">
            Back to Home
          </Link>
        </div>
      </main>
    </div>
  )
}
