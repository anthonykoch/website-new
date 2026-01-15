// @ts-nocheck
{
  /* 
         <div >
             <div className="pb-40" />

            <div className="flex gap-x-4 px-4 max-w-[1400px] mx-auto">
              <div>
                <div className="">
                  <div className="flex justify-end pb-10 pt-4">
                    <p className="font-heading font-500 text-[18px] xl:text-[22px] leading-[1.2] z-10 relative max-w-[320px] xl:max-w-[400px]">
                      The dashboard allowed women to track shipments, view their
                      fertility results, and manage their user account.
                    </p>
                  </div>

                  <img src="/original/exhibit-mf-plan.png" />
                </div>
              </div>
              <div>
                <img src="/original/exhibit-mf-dash-home.png" />
              </div>
            </div>

            <div className="pb-[120px]" />
         </div> */
}

{
  /*           
          <div className="pt-40" />

          <div className="bg-[#99B3F1] h-[480px] flex flex-col items-center justify-end relative">
            <div>
              <img
                src={ImageMScribble.src}
                className="absolute top-0 right-0 w-2/3"
              />

              <img
                src="/original/mf-logo.svg"
                className="max-w-[250px] w-full mx-auto"
              />
              <div className="pb-[120px]" />
            </div>
          </div> */
}

{
  /* <div className="bg-[#99B3F1] h-[360px] flex flex-col items-center justify-end relative">
              <div>
                <img
                  src={ImageMScribble.src}
                  className="absolute top-0 right-0 w-2/3"
                />

                <img
                  src="/original/mf-logo.svg"
                  className="max-w-[250px] w-full mx-auto"
                />
              </div>
            </div>

            <div className="relative bg-[#99B3F1]">
              <img
                src={ImageMFMacbook.src}
                className="w-full max-w-[1000px] mx-auto  relative z-10 "
              />
              <div className="h-[50%] w-full absolute left-0 top-1/2 bg-white" />
            </div> */
}

{
  /* <section>
              <div className="lg:grid grid-cols-12 pb-8 gap-x-4 pt-[100px] px-4">
                <div className="lg:col-span-6 xl:col-span-4 xl:col-start-1 2xl:col-start-2">
                  <h2 className="copy-heading-2 pb-6 max-w-[421px] xl:ml-auto lg:text-right">
                    A responsive website, built from the ground up.
                  </h2>
                </div>
                <div className="lg:col-start-6 xl:col-start-7 2xl:col-start-7 lg:col-span-6 xl:col-span-6 2xl:col-span-5 *:pb-6 copy-body-4 text-[#888787] ">
                  <p>
                    I worked closely with designers to build out the first
                    iteration of Modern Fertility’s website using just simple
                    HTML and CSS. Over time, the tech stack has evolved from the
                    basics to React and styled-components running inside of a
                    Django application.
                  </p>
                </div>
              </div>
            </section> */
}

{
  /*
            <div className="relative bg-[#99B3F1]">
              <img
                src={ImageMFMacbook.src}
                className="w-full max-w-[1000px] mx-auto  relative z-10 "
              />
              <div className="h-[52%] w-full absolute left-0 top-1/2 bg-white" />
            </div>

          */
}

{
  /* <img src="/meme.webp" className="w-full" /> */
}

{
  /* <div className="bg-[#99B3F1] h-[480px] flex flex-col items-center justify-end relative">
              <div>
                <img
                  src={ImageMScribble.src}
                  className="absolute top-0 right-0 w-2/3"
                />

                <img
                  src="/original/mf-logo.svg"
                  className="max-w-[250px] w-full mx-auto"
                />
                <div className="pb-[120px]" />
              </div>
            </div> */
}

const stopResize1 = resize(
  debounce(() => {
    // if (introTitleRef.current) {
    //   console.log(isIntroAnimationFinished.current)
    //   splitLines(introTitleRef.current, {
    //     fixFont: true,
    //     classes: isIntroAnimationFinished.current
    //       ? {}
    //       : { line: 'setup-overflow', word: 'setup-line-down' },
    //   })
    // }
  }, 100),
)

// const { lines } = splitLines(introTitleRef.current, {
//   fixFont: true,
//   classes: { line: 'setup-overflow', word: 'setup-line-down' },
// })

const splitLines = (
  el: HTMLElement,
  {
    fixFont,
    classes,
  }: { fixFont?: boolean; classes?: { line?: string; word?: string } } = {
    classes: {},
  },
): ReturnType<typeof splitText> => {
  const text = splitText(el, {
    lineClass: `split-line ${classes?.line ?? ''}`,
    wordClass: `split-word ${classes?.word ?? ''}`,
  })

  if (fixFont) fixFontSpacing(text.lines)

  return text
}

;<div className="bg-white pb-16 xl:pb-32 pt-[200px]">
  <div className="max-w-[1728px] mx-auto">
    <div className="grid grid-cols-12 gap-x-4 px-4">
      <span className="lg:col-start-2 col-span-12 lg:col-span-10">
        <div id="contact"></div>
        <p>
          <a href="mailto:hello@anthonykoch.com" className="text-black">
            <span className="block  font-500 2xl:text-left text-2xl md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-8xl xl:py-10">
              <span className="text-lg xl:text-[22px] font-400 mb-5 block">
                Let’s collaborate, or just chat.
              </span>
              <span className="font-500 -tracking-wide font-heading">
                hello@anthonykoch.com
              </span>
            </span>
          </a>
        </p>
      </span>
    </div>
  </div>
</div>


  {/* <div className="bg-black pt-10 relative">
            <div
              className=" absolute top-0 left-0 h-full w-full"
              ref={opalLogoRef}
            />
            <div className="relativ">
              <img
                src="/final-compressed/logo-opal-wordmark-b.svg"
                className="max-w-[850px] mx-auto w-full absolute object-cover right-0 top-0 z-10"
              />

              <motion.img
                src="/final-compressed/logo-opal-wordmark.svg"
                className="max-w-[850px] mx-auto w-full absolute object-cover right-0 top-0 z-20"
                style={{ clipPath: clipPathTransform }}
              />
            </div>
          </div> */}





            {/* 
          <div className="bg-black pt-10 relative">
            <div
              className=" absolute top-0 left-0 h-full w-full"
              ref={opalLogoRef}
            />
            <div className="aspect-1609/804 relative">
              <img
                src="/final-compressed/logo-opal-wordmark.svg"
                className="max-w-[1650px] mx-auto w-full absolute object-cover left-0 top-0 z-10"
              />

              <motion.img
                src="/final-compressed/logo-opal-wordmark-orange.svg"
                className="max-w-[1650px] mx-auto w-full absolute object-cover left-0 top-0 z-20"
                style={{ clipPath: clipPathTransform }}
              />
            </div>
          </div> */}



          
          
          
           <section>
          <div
            ref={introBlockRef}
            className="bg-black h-[69vh] w-full z-10 absolute origin-bottom"
          />
          <div className="h-screen bg-[#e6ddc3] relative">
            {/* <BlogBackground> */}
            {/* <BlogImages /> */}
            {/* </BlogBackground> */}
            <div className="bg-linear-to-r from-white/70 to-transparent size-full absolute top-0 left-0 z-20"></div>
            {/* <div className="bg-linear-to-t from-black to-transparent w-full h-1/2 absolute bottom-[29vh] left-0" /> */}

            {/* <div
  class="absolute inset-0 h-full w-full bg-white bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[24px_24px]"
></div> */}

            <div className="absolute z-10 top-0 left-0 h-full w-full bg-neutral-200">
              <div className="absolute inset-0 bg-primary-500 bg-size-[20px_20px] opacity-20 blur-[100px]"></div>
            </div>
            {/* 
            <div className="p-20 bg-black z-20 relative">
              <img
                src="/original/exhibit-tadpole-shop.png"
                className="max-w-full w-full  object-contain top-0 left-0 z-20"
              />
            </div> */}

            {/* <div className="text-black fixed z-20 w-full top-[20vh]"> */}
            {/* #3f4450 */}
            {/* <div className="text-black  fixed z-20 w-full top-[20vh]"> */}
            <div className="text-black mix-blend-difference fixed z-20 w-full top-[20vh]">
              <div className="max-w-site mx-auto relative z-20">
                <div className="grid grid-cols-12 gap-x-4 px-4">
                  <div className="col-span-12 xl:col-span-10 xl:col-start-2 flex flex-col gap-x-4 items-start justify-between">
                    <div>
                      <p className="text-[80px] text-white  font-500 leading-none  font-heading">
                        {/* <p className="text-[80px] text-[#3f4450]  font-500 leading-none  font-heading"> */}
                        I help companies and startups ship pixel-perfect,
                        responsive websites.
                      </p>
                      <div className="pb-10" />
                      <button
                        type="button"
                        className="cursor-pointer shadow-button-2 shadow-black/40 bg-black py-3.5 px-8 inline-block hover:bg-primary-500 transition-colors duration-100 hover:text-black text-[#eee]"
                      >
                        <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                          View my latest work
                        </span>
                      </button>
                      {/* <button
                        type="button"
                        className="cursor-pointer   shadow-button-2  shadow-black/40 bg-black py-3.5 px-8 inline-block hover:bg-primary-invert transition-colors duration-100 hover:text-white text-[#111]"
                      >
                        <span className="font-600 text-[14px] uppercase font-display tracking-widest">
                          View my latest work
                        </span>
                      </button> */}
                    </div>
                  </div>
                </div>
                {/* <img
                  src="/original/logo-opal-wordmark-b.svg"
                  className="w-[800px] max-w-full"
                /> */}

                <div className="grid grid-cols-12 gap-x-4 px-4">
                  <div className="col-span-12 xl:col-span-11 xl:col-start-2 flex flex-col gap-x-4 items-start justify-between">
                    <div className="text-[clamp(24px,calc(55vw*(100/1900)),35px)] font-500  font-heading leading-[1.5] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative">
                      {/* <div className="text-[clamp(24px,calc(55vw*(100/1900)),46px)] font-500  font-heading leading-[1.5] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative"> */}
                      {/* <p className="md:hidden">
                        Anthony Koch is a front-end developer helping companies
                        and startups ship pixel-perfect, responsive websites.
                      </p>
                      <span
                        ref={introTitleRef}
                        style={{ visibility: 'hidden' }}
                        className="hidden md:block max-w-[700px]"
                        // className="hidden md:block max-w-[1000px]"
                      >
                        <span className="setup-overflow">
                          <span className="setup-line-down selector-line">
                            Anthony Koch is a UI developer helping{' '}
                          </span>
                        </span>
                        <span className="setup-overflow">
                          <span className="setup-line-down selector-line">
                            companies and startups ship pixel-perfect,{' '}
                          </span>
                        </span>
                        <span className="setup-overflow">
                          <span className="setup-line-down selector-line">
                            responsive websites.
                          </span>
                        </span>
                      </span>
                      <Looking containerRef={newJobRef} /> */}
                    </div>
                    <div className="relative flex-1 h-full flex flex-col items-start justify-start gap-x-4 gap-y-[100px]">
                      {/* <div className="text-[clamp(24px,calc(55vw*(100/1900)),46px)] font-500  font-heading leading-[1.5] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative"> */}
                      {/* <div className="justify-center flex flex-col justify-start items-start">
                        <div className="text-[clamp(24px,calc(55vw*(100/1900)),35px)] font-500  font-heading leading-[1.5] xl:leading-[1.3] max-w-[1200px] [.split-word]:will-change-[transform,opacity] relative">
                          <p className="md:hidden">
                            Anthony Koch is a front-end developer helping
                            companies and startups ship pixel-perfect,
                            responsive websites.
                          </p>
                          <span
                            ref={introTitleRef}
                            style={{ visibility: 'hidden' }}
                            className="hidden md:block max-w-[700px]"
                            // className="hidden md:block max-w-[1000px]"
                          >
                            <span className="setup-overflow">
                              <span className="setup-line-down selector-line">
                                Anthony Koch is a UI developer helping{' '}
                              </span>
                            </span>
                            <span className="setup-overflow">
                              <span className="setup-line-down selector-line">
                                companies and startups ship pixel-perfect,{' '}
                              </span>
                            </span>
                            <span className="setup-overflow">
                              <span className="setup-line-down selector-line">
                                responsive websites.
                              </span>
                            </span>
                          </span>
                        </div>
                        <div className="pb-10" />
                      </div> */}

                      {/* <img src="/final/logo-opal-wordmark-b.svg" className="w-[200px]"  /> */}
                      {/* <img src="/final/logo-thinkful.png" /> */}
                      {/* <img src="/final/logo-plaid.svg" className="w-[200px]" /> */}
                      {/* <img src="/final/logo-mf.svg" className="w-[200px]"  /> */}
                      {/* <div className="relative flex-1 h-full flex gap-x-4 justify-end"> */}
                      {/* <img
                        src="/final/downloads-mobile.png"
                        // src="/final/opalcamera-home.png"
                        className="w-[300px] shadow-button z-10 absolute translate-y-[100px] translate-x-[100px]"
                      />
                      <img
                        src="/final/card-mf.png"
                        className="w-[300px] shadow-button absolute top-0 left-0"
                      /> */}
                      {/* <img
                        src="/final/downloads-mobile.png"
                        className="w-[300px] shadow-button absolute top-0 left-0"
                        // className="w-[300px] shadow-button absolute top-0 left-0 translate-x-[100px]"
                      /> */}
                      {/* <img src="/final/downloads-mobile.png" className="w-[300px]" /> */}
                      {/* <PostList posts={posts}></PostList> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>










      {/* <motion.div
          initial={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)' }}
          // initial={{
          //   scaleY: 1,
          // }}
          // animate={{
          //   scaleY: 0,
          // }}
          transition={{ ease: easeOutExpo, duration: 1, delay: 3.6 }}
          // style={{
          //   scaleY: [100, 0],
          // }}
          className="fixed size-full z-2000  bg-black inline-block logo-blink-rect  left-1/2 top-1/2 -translate-1/2"
        >
          <svg
            className="w-30"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="logo-blink"
              d="M7.27914 11L4.88914 7.55L3.87914 8.62V11H2.82914V4H3.87914V7.22L6.94914 4H8.25914L5.59914 6.8L8.54914 11H7.27914ZM11.2894 11.08C9.77938 11.08 8.68937 9.99 8.68937 8.48C8.68937 6.97 9.77938 5.88 11.2894 5.88C12.7994 5.88 13.8794 6.97 13.8794 8.48C13.8794 9.99 12.7994 11.08 11.2894 11.08ZM11.2894 10.23C12.2394 10.23 12.8894 9.51 12.8894 8.48C12.8894 7.45 12.2394 6.73 11.2894 6.73C10.3294 6.73 9.67937 7.45 9.67937 8.48C9.67937 9.51 10.3294 10.23 11.2894 10.23Z"
              fill="white"
            />
          </svg>
        </motion.div> */}
      {/*       
       <svg className="w-20 invert-color" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_908_189)">
            <rect width="16" height="16" fill="black" />
            <path
              d="M7.27914 11L4.88914 7.55L3.87914 8.62V11H2.82914V4H3.87914V7.22L6.94914 4H8.25914L5.59914 6.8L8.54914 11H7.27914ZM11.2894 11.08C9.77938 11.08 8.68937 9.99 8.68937 8.48C8.68937 6.97 9.77938 5.88 11.2894 5.88C12.7994 5.88 13.8794 6.97 13.8794 8.48C13.8794 9.99 12.7994 11.08 11.2894 11.08ZM11.2894 10.23C12.2394 10.23 12.8894 9.51 12.8894 8.48C12.8894 7.45 12.2394 6.73 11.2894 6.73C10.3294 6.73 9.67937 7.45 9.67937 8.48C9.67937 9.51 10.3294 10.23 11.2894 10.23Z"
              fill="white"
            />
          </g>
          <defs>
            <clipPath id="clip0_908_189">
              <rect width="16" height="16" fill="white" />
            </clipPath>
          </defs>
        </svg>

         */}

      {/* 
      <div className="fixed z-99999 top-0 left-0 size-full">
        <p className="mt-2  bg-black px-5 py-3 text-white text-[13px] lg:text-[15px] inline-flex items-center">
          <span className="top-[-0.08em] relative text-primary-500 text-[19px] inline-block align-middle mr-0.5 font-500">
            {'>'}
          </span>
          <span ref={testRef} className="inline-block align-middle">
            Currently looking for new opportunities - Jan 2025
          </span>
        </p>
      </div> */}
      {/* <div className=" px-2 pt-3 fixed z-1000 bottom-10 right-10 ">
        <div className="pb-4 font-heading font-600 text-[14px] text-black/70 text-center ">
          Jump to company
        </div>
        <div className="flex flex-col flex-wrap items-center justify-start gap-x-2 gap-y-2 pb-4">
          <div className="hover:shadow-button-2 rounded-[4px] bg-white hover:bg-primary-500 w-full  cursor-pointer h-[50px] flex items-center py-2 w-[90px] justify-center">
            <img
              src="/final/logo-opal-wordmark-b.svg"
              className="w-[calc(55px-20px)]"
            />
          </div>

          <div className="hover:shadow-button-2 rounded-[4px] bg-white hover:bg-primary-500 w-full  cursor-pointer h-[50px] flex items-center py-2 w-[90px] justify-center">
            <img
              src="/original/logo-thinkful.png"
              className="w-[calc(95px-20px)]"
            />
          </div>
          <div className="hover:shadow-button-2 rounded-[4px] bg-white hover:bg-primary-500 w-full  cursor-pointer h-[50px] flex items-center py-2 w-[90px] justify-center">
            <img src="/original/logo-plaid.svg" className="w-[calc(75px-20px)]" />
          </div>
          <div className="hover:shadow-button-2 rounded-[4px] bg-white hover:bg-primary-500 w-full  cursor-pointer h-[50px] flex items-center py-2 w-[90px] justify-center">
            <img src="/original/logo-mf.svg" className="w-[calc(70px-20px)]" />
          </div>
        </div>
      </div> */}



      

        
          


{/*             

            <div className="flex gap-x-10">
              <img
                src="/original/opal-mobile-menu.png"
                // src="/final/exhibit-tadpole-shop-2.png"
                className=" w-[300px] mx-auto object-cover top-0 left-0 z-20"
                // className=" size-full absolute mx-auto object-cover top-0 left-0 z-20"
              />
              <img
                src="/original/mf-home-mobile.png"
                // src="/final/exhibit-tadpole-shop-2.png"
                className=" w-[300px] mx-auto object-cover top-0 left-0 z-20"
                // className=" size-full absolute mx-auto object-cover top-0 left-0 z-20"
              />
            </div> */}


            {/* <div className="w-full z-30 absolute top-0 left-0"> */}
            {/* <div className="px-20 w-full z-30 absolute bottom-0 left-0"> */}
            {/* <img
                src="/original/opal-mobile-menu.png"
                // src="/final/exhibit-tadpole-shop-2.png"
                className=" w-[300px] mx-auto object-cover top-0 left-0 z-20"
                // className=" size-full absolute mx-auto object-cover top-0 left-0 z-20"
              /> */}
            {/* </div> */}
            {/* 
            <div className="p-20 w-full z-20 absolute top-0 left-0 -translate-y-1/2">
              <img
                src="/original/exhibit-tadpole-shop-sm.png"
                className=" w-full mx-auto object-contain top-0 left-0 z-20"
              />
            </div> */}
      