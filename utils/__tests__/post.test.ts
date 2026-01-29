import { PostMetaRaw } from '@/types'
import { expect } from 'vitest'
import {
  enrichPostMeta,
  getAllPostMeta,
  getAllPostMetaInternal,
  getPostDate,
  getPostSlug,
} from '../post'

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
      expect(getPostSlug('public/posts/2026-01-28-/index.md')).toEqual('')
    })
  })

  describe('getAllPostMetaInternal', () => {
    it('returns all meta files inside of posts directory with a specific format', async () => {
      const metas = await getAllPostMetaInternal()
      expect(metas.length).toBeGreaterThan(0)

      metas.forEach((meta) => {
        expect(meta.title).toBeTruthy()
        expect(typeof meta.title).toBe('string')

        expect(meta.slug).toBeTruthy()
        expect(typeof meta.slug).toBe('string')
        expect(meta.slug).toBe(meta.slug.toLowerCase())

        expect(meta.humanized.createdAt).toBeTruthy()
        expect(meta.humanized.createdAt).toMatch(/^[A-Z][a-z]+, \d+ \d{4}$/)

        expect(meta.createdAt).toBeTruthy()
        expect(meta.createdAt).toMatch(/\d{4}-\d{2}-\d{2}/)

        expect(meta.filename).toBeTruthy()
        expect(typeof meta.filename).toBe('string')
      })
    })
  })

  describe('getAllPostMeta', () => {
    it('returns meta files without filename', async () => {
      const metas = await getAllPostMeta()
      expect(metas.length).toBeGreaterThan(0)

      metas.forEach((meta) => {
        expect(meta.filename).toBeFalsy()
        expect(meta.filename).toBeUndefined()
      })
    })
  })

  describe('enrichPostMeta', () => {
    it('enriches raw post meta with slug and humanized date', () => {
      const rawMeta: PostMetaRaw = {
        id: 1,
        title: 'My Awesome Post Title',
        createdAt: '2026-01-28T00:00:00.000Z',
        isPublished: true,
        data: { foo: 'bar' },
      }

      const result = enrichPostMeta(rawMeta, {
        filename: '/path/to/posts/2026-01-28-my-awesome-post-title/meta.ts',
      })

      expect(result.filename).toBe(
        '/path/to/posts/2026-01-28-my-awesome-post-title/meta.ts',
      )
      expect(result.slug).toBe('my-awesome-post-title')
      expect(result.humanized.createdAt).toBe('January, 28 2026')
      expect(result.title).toBe('My Awesome Post Title')
      expect(result.createdAt).toBe('2026-01-28T00:00:00.000Z')
      expect(result.isPublished).toBe(true)
      expect(result.data).toEqual({ foo: 'bar' })
    })

    it('handles titles with special characters', () => {
      const rawMeta: PostMetaRaw = {
        id: 2,
        title: 'React & Vue: A Comparison!',
        createdAt: '2025-12-15T00:00:00.000Z',
        data: {},
      }

      const result = enrichPostMeta(rawMeta, {
        filename: '/path/to/posts/meta.ts',
      })

      expect(result.slug).toBe('react-and-vue-a-comparison')
      expect(result.humanized.createdAt).toBe('December, 15 2025')
    })

    it('preserves all original meta properties', () => {
      const rawMeta: PostMetaRaw = {
        id: 3,
        title: 'Test Post',
        createdAt: '2024-03-01T00:00:00.000Z',
        isPublished: false,
        data: { tags: ['test', 'demo'] },
      }

      const result = enrichPostMeta(rawMeta, {
        filename: '/test/meta.ts',
      })

      expect(result.id).toBe(3)
      expect(result.isPublished).toBe(false)
      expect(result.data).toEqual({ tags: ['test', 'demo'] })
    })
  })
})
