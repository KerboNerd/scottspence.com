import { getProducts } from '@lib/get-products'
import { error } from '@sveltejs/kit'

/**
 * @type {import('@sveltejs/kit').PageLoad}
 */
export const load = async ({ params }) => {
  const { slug } = params
  const post = getProducts().find(post => slug === post.metadata.slug)
  if (!post) {
    throw error(404, 'Product not found')
  }

  return {
    ...post.metadata,
    component: post.component,
  }
}
