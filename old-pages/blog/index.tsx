import { PostList } from '@/components/PostList'
import { BlogHero } from '@/features/blog/Hero'
import { Footer } from '@/features/site/footer/Footer'
import { PostMeta } from '@/types/index'
import { easeOutExpo } from '@/utils/animation'
import { getAllPostMetaInternal } from '@/utils/post'
import { animate } from 'motion/react'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { useEffect } from 'react'

interface Props {
  posts: PostMeta[]
}

const Blog: NextPage<Props> = ({ posts }) => {
  useEffect(() => {
    let delay = 0.4

    animate(
      '.selector-title',
      { y: ['110%', '0%'], opacity: [0, 1] },
      // { y: [12, 0], opacity: [0, 1] },
      { delay: delay, duration: 1.2, ease: easeOutExpo },
      // { delay: delay, duration: 1, ease: easeOutExpo },
    )

    animate(
      '.selector-lead',
      { y: ['110%', '0%'], opacity: [0, 1] },
      // { y: [12, 0], opacity: [0, 1] },
      { delay: (delay += 0.0), duration: 1.4, ease: easeOutExpo },
      // { delay: (delay += 0.06), duration: 1, ease: easeOutExpo },
    )

    delay = 0.1

    // animate(
    //   '.selector-border',
    //   {
    //     scaleY: [0, 1],
    //   },
    //   {
    //     duration: 1.2,
    //     ease: [0.64, 0, 0.78, 0],
    //     // duration: 2.2,
    //     // ease: [0.33, 1, 0.68, 1],
    //     // duration: 5,
    //     // ease: easeOutExpo,
    //     delay: (delay += 0),
    //   },
    // )

    // animate(
    //   '.selector-text',
    //   {
    //     y: ['110%', '0%'],
    //     // y: [100, 0],
    //   },
    //   {
    //     duration: 1,
    //     // duration: 0.7,
    //     ease: easeOutExpo,
    //     delay: stagger(0.05, { startDelay: (delay += 0.8) }),
    //     // delay: () => {}
    //   },
    // )
    // animate(
    //   '.selector-text',
    //   {
    //     opacity: [12, 0],
    //   },
    //   {
    //     duration: 0.7,
    //     // ease: easeOutExpo,
    //     delay: stagger(0.06, { startDelay: 1, }),
    //     // delay: () => {}
    //   },
    // )
  }, [])

  return (
    <div>
      <Head>
        <title>Blog | Anthony Koch</title>
      </Head>

      <BlogHero />

      <main>
        <div className="absolute top-0 left-0 z-10 w-full">
          <div className="max-w-[800px] mx-auto">
            {/* <BillboardGrid> */}
            <div className="px-4 pt-40 xl:pt-52">
              <h1 className="selector-title will-change-transform setup-fade-in text-[22px] font-600 font-display text-primary-500 pb-4 tracking-[2.5px] leading-none">
                My Writings
              </h1>
              <p className="selector-lead will-change-transform setup-fade-in font-body font-500 text-white/90 xl:text-[16px] text-[16px]">
                These are my various writings, mostly on topics surrounding
                front-end development.
              </p>
            </div>
          </div>
        </div>

        <div className="z-10 relative">
          <div className="max-w-site mx-auto">
            <section>
              <div className="max-w-[800px] mx-auto">
                <div className="relative pt-10 lg:pt-20 pb-20 lg:pb-30 min-h-[max(50lvh,800px)]">
                  <div>
                    <p className="ml-[141px] lg:ml-[170px] text-[14px] font-600 pl-4 font-display tracking-wider pb-2">
                      Most Recent
                    </p>
                  </div>
                  <div className="selector-border absolute left-[140px] lg:left-[170px] top-0 h-full w-px bg-[#e6e6e6] origin-top"></div>
                  <PostList posts={posts} />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const posts = await getAllPostMetaInternal()

  return {
    props: {
      posts: posts as any,
    },
  }
}

export default Blog
