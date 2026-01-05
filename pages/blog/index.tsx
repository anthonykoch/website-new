import { Footer } from '@/components/app/footer/Footer'
import { PostList } from '@/components/PostList'
import { BlogHero } from '@/features/blog/Hero'
import { SiteNavigation } from '@/features/navigation/SiteNavigation'
import { PostMeta } from '@/types/index'
import { getAllPostMeta } from '@/utils/post'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import superjson from 'superjson'

interface Props {
  posts: PostMeta[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  return (
    <div>
      <Head>
        <title>Blog | Anthony Koch</title>
      </Head>

      <div className="absolute top-0 left-0 w-full z-1000">
        <div className="max-w-site mx-auto">
          <SiteNavigation colorVariant="white" />
          {/* <div className="border-b border-black/5 w-[calc(100wh-16px)]"></div> */}
        </div>
      </div>

      <BlogHero />

      <main>
        <div className="absolute top-0 left-0 z-10 w-full">
          <div className="max-w-[800px] mx-auto">
            {/* <BillboardGrid> */}
            <div className="px-4 pt-40 xl:pt-52">
              <h1 className="text-[22px] font-600 font-display text-primary-500 pb-4 tracking-[2.5px]">
                My Writings
              </h1>
              <p className="font-body font-500 text-white/90 xl:text-[16px] text-[16px]">
                These are my various writings, mostly on topics surrounding
                front-end development.
              </p>
            </div>
          </div>
          {/* </BillboardGrid> */}
        </div>

        <div className="z-10 relative">
          <div className="max-w-site mx-auto">
            <section>
              {/* <div className="pb-30" /> */}
              {/* <div className="grid grid-cols-12 gap-x-4 px-4 "> */}
              {/* <div className="col-span-12 xl:col-span-10 xl:col-start-5 "> */}
              <div className="max-w-[800px] mx-auto">
                <div className="lg:w-[151px] lg:min-w-[151px] border-r border-black/10 h-[100px]"></div>
                <div className="flex">
                  <div className="lg:w-[151px] lg:min-w-[151px] border-r border-black/10"></div>
                  <p className="text-[14px] font-600 pl-3 font-display tracking-wider pb-2">
                    Most Recent
                  </p>
                </div>
                {/* <a
                  href={posts[0].slug}
                  className="flex transition-colors duration-100 text-black hover:bg-primary-500 hover:*:first:border-white hover:shadow-button "
                >
                  <div className="min-w-[151px] transition-colors duration-100 border-r border-black/10 pt-10">
                    <time
                      dateTime={posts[0].created_at}
                      className="text-[13px] italic pl-[11px]"
                    >
                      {posts[0].humanized.created_at}
                    </time>
                  </div>
                  <div className="pl-[11px]">
                    <div className="text-[22px] lg:text-[32px] leading-[1.2] font-heading font-600 py-8">
                      {posts[0].title}
                    </div>
                  </div>
                </a> */}
                <PostList posts={posts.slice(0)} />
                {/* <PostList posts={posts.slice(1)} /> */}
                <div className="w-[151px] border-r border-black/10 h-[150px]"></div>
                {/* </div> */}
                {/* </div> */}
              </div>

              {/* <div className="pb-30" /> */}
            </section>
            {/* <ul
              className={cx('flex flex-wrap', {
                ['by2Remainder1']: posts.length % 2 === 1,
                ['by3Remainder1']: posts.length % 3 === 1,
                ['by3Remainder2']: posts.length % 3 === 2,
              })}
            >
              {posts.map((post, index) => {
                return (
                  <li
                    key={post.id}
                    className={cx(
                      'hover:bg-primary-500',
                      'BlogPostListing__Item',
                    )}
                  >
                    <a
                      href={`/blog/${post.slug}`}
                      className="py-12 xl:py-20 px-gutter-lg xl:px-16 block relative"
                    >
                      <div className="font-body pb-2 uppercase tracking-widest font-700 text-[13px] text-black/50">
                        {post.humanized.created_at} - #{posts.length - index}
                      </div>
                      <div className="text-black/90 text-[24px] leading-[1.2] xl:leading-[1.4] font-heading font-800">
                        <span className="max-w-[200px] ">{post.title}</span>
                      </div>
                    </a>
                  </li>
                )
              })}
            </ul>
            */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPostMeta()

  return {
    props: {
      posts: superjson.serialize(posts).json as any,
    },
  }
}

export default Blog
