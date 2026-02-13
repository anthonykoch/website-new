
import { useRouter } from 'next/router'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypePrism from 'rehype-prism-plus'
import rehypeSlug from 'rehype-slug'

import { markdownComponents } from '@/components/markdown-components'
import { PostList } from '@/components/PostList'
import { BlogHero, BlogPlaceholder } from '@/features/blog/Hero'
import { Footer } from '@/features/site/footer/Footer'
import { getPostBySlug } from '@/utils/post'
import { MDXRemote, MDXRemoteOptions } from 'next-mdx-remote-client/rsc'
import Link from 'next/link'
import remarkSmartypants from 'remark-smartypants'
import { notFound } from 'next/navigation'

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { asPath } = useRouter()
  const slug = (await params).slug
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const options: MDXRemoteOptions = {
    disableImports: true, // import statements in MDX don't work in pages router
    parseFrontmatter: true,
    scope: post.meta.data ?? {},
    vfileDataIntoScope: 'toc', // the "remark-flexible-toc" plugin produces vfile.data.toc
    mdxOptions: {
      format: 'mdx',
      remarkPlugins: [[remarkSmartypants, {}]],
      rehypePlugins: [
        [
          // [RehypeCode, {}],
          // @ts-ignore
          (rehypePrism, { showLineNumbers: true }),
        ],
        // @ts-ignore
        rehypeSlug,
        [
          // @ts-ignore
          rehypeAutolinkHeadings,
          {
            behavior: ['after'],
          },
        ],
      ] as any,

      // remarkRehypeOptions: format === 'md' ? remarkRehypeOptions : undefined,
    },
  }

  // const mdx = await serialize({
  //   source: post.content,
  //   options: {
  //     scope: post.meta.data,
  //     disableImports: true, // import statements in MDX don't work in pages router
  //     parseFrontmatter: true,
  //     mdxOptions: {
  //       remarkPlugins: [[remarkSmartypants, {}]],
  //       rehypePlugins: [
  //         [
  //           // [RehypeCode, {}],
  //           // @ts-ignore
  //           (rehypePrism, { showLineNumbers: true }),
  //         ],
  //         // @ts-ignore
  //         rehypeSlug,
  //         [
  //           // @ts-ignore
  //           rehypeAutolinkHeadings,
  //           {
  //             behavior: ['after'],
  //           },
  //         ],
  //       ],
  //     },
  //   },
  // })

  return (
    <div>
      <div className="absolute top-0 left-0 w-full">
        <BlogHero />
      </div>

      <BlogPlaceholder className="relative z-10">
        <div className="">
          <header className="px-gutter pt-48 relative">
            <div className="max-w-post xl:max-w-post-wide mx-auto">
              <h1
                className="selector-title setup-fade-in text-left text-[42px] lg:text-[52px] 2xl:text-[64px] leading-[1.1] text-primary-500 font-heading font-800"
                style={{ transform: 'translateY(20px)' }}
              >
                <Link href={asPath} className="text-inherit">
                  {meta.title}
                </Link>
              </h1>
              <p
                className="selector-date setup-fade-in mt-4 text-white/90 font-display tracking-widest font-semibold"
                style={{ transform: 'translateY(12px)' }}
              >
                {meta.humanized.createdAt}
              </p>
            </div>
          </header>
        </div>
      </BlogPlaceholder>

      {/* <div className="lg:pb-20 pb-40"></div> */}

      <main>
        <article id="post">
          <div className="setup-fade-in selector-post">
            <div className="md pt-20 pb-24">
              <MDXRemote
                source={post}
                options={options}
                components={markdownComponents as any}
                // onError={ErrorComponent}
              />

              {/* <MDXRemote {...mdx} components={markdownComponents as any} /> */}
            </div>
          </div>
        </article>

        <div className="bg-white">
          <div className="py-20 px-gutter max-w-3xl mx-auto">
            <h2 className="text-[14px] tracking-wider pb-5 font-display font-600">
              More from the blog
            </h2>
            <PostList posts={posts} activeId={meta.id} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

// export const getStaticPaths = async () => {
//   const metas = await getAllPostMeta()

//   return {
//     paths: metas.map((path) => ({
//       params: {
//         slug: path.slug,
//       },
//     })),

//     fallback: false,
//   }
// }

// export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
//   const { slug } = params as { slug: string }
//   const posts = await getAllPostMeta()

//   return {
//     props: {
//       posts: posts as any,
//       post: post.meta as any,
//       slug,
//     },
//   }
// }
