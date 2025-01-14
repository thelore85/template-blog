import {apiVersion, dataset, projectId} from '../sanity/env'
import {createClient, groq} from 'next-sanity'

// Crea un'istanza condivisa del client Sanity
const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true, // Usa la CDN per query più veloci in ambienti di produzione
})

export async function getPosts() {
  const posts = await client.fetch(
    groq`*[_type == "post"]{
      _id,
      _createdAt,
      title,
      body,
      mainImage { asset -> { url }, alt },
      "slug": slug.current
    }`,
  )
  return posts
}

export async function getPost() {
  return await client.fetch(
    groq`*[_type == "post"][0]{
      title,
      _createdAt,
      body,
      mainImage { asset -> { url }, alt },
      "slug": slug.current
    }`,
  )
}
export async function getPage() {
  return await client.fetch(
    groq`
    *[_type == "page"][0]{
      title,
      _createdAt,
      body,
      "slug": slug.current,
      components[] -> {
        _type,
        title,
        subtitle,
        image { asset -> { url } },
        button1 { label, url },
        button2 { label, url },
        sectionTitle,
        sectionSubtitle,
        serviceCards[] {
          title,
          description,
          image { asset -> { url } }
        }
      }
    }`,
  )
}
