import {PortableText} from '@portabletext/react'
import {getPost} from '@/sanity/sanity-utils'
import Link from 'next/link'
import Image from 'next/image'

export default async function BlogPostPage() {
  const post = await getPost()

  const {title, _createdAt, body, mainImage} = post
  const imageUrl = mainImage.asset.url

  if (!post) {
    return (
      <div className="flex justify-center items-center min-h-screen py-9">
        <main className="container p-4 bg-white rounded-md shadow-md">
          <h1 className="text-2xl font-bold mb-4">No post found</h1>
          <Link href="/blog/" className="text-blue-500 hover:text-blue-700">
            ← Back to posts
          </Link>
        </main>
      </div>
    )
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-9">
      <main className="container p-6 bg-white rounded-lg shadow-lg max-w-3xl">
        <Link href="/blog/" className="text-blue-500 hover:text-blue-700 text-sm mb-6 inline-block">
          ← Back to posts
        </Link>
        <h1 className="text-4xl font-bold text-gray-900">{title}</h1>

        {/* Mostra l'immagine solo se esiste */}
        {imageUrl && (
          <div className="mb-6">
            <Image
              src={imageUrl}
              alt="Post image"
              width={600} // Definisci le dimensioni dell'immagine
              height={400} // Definisci le dimensioni dell'immagine
              className="object-cover rounded-lg w-full"
            />
          </div>
        )}

        <p className="text-sm text-gray-500 my-2">Published on {new Date(_createdAt).toLocaleDateString()}</p>

        <div className="mt-6 text-gray-700 leading-relaxed">
          <PortableText value={body} />
        </div>
      </main>
    </div>
  )
}
