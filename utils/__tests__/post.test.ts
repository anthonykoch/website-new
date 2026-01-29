import { expect } from 'vitest'
import { getPostDate, getPostSlug } from '../post'

describe('post utils', () => {
  describe('getPostDate', () => {
    it('retrieves post date from a filename', () => {
      const date = getPostDate(
        'public/posts/2026-01-28-why-is-nothing-animated-like-this/index.md',
      )
      expect(date).toEqual('2026-01-28')

      expect(getPostDate('/path/to/2030-02-12-my-post/index.md')).toEqual(
        '2030-02-12',
      )
    })

    it('works with deeply nested paths', () => {
      expect(
        getPostDate('/cats/dogs/blog/2020-12-31-wow-cats/index.md'),
      ).toEqual('2020-12-31')
    })
  })

  describe('getPostSlug', () => {
    it('retrieves post slug from a filename', () => {
      expect(
        getPostSlug(
          'public/posts/2026-01-28-why-is-nothing-animated-like-this/index.md',
        ),
      ).toEqual('why-is-nothing-animated-like-this')
    })

    it('returns empty title when slug is empty', () => {
      expect(
        getPostSlug(
          'public/posts/2026-01-28-/index.md',
        ),
      ).toEqual('')
    })
  })

  // describe('getPostsFilenames', () => {

  // })
})
