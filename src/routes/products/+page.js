import { getProducts } from '@lib/get-products'

export const load = async () => {
  return {
    products: getProducts().map(post => post.metadata),
  }
}
