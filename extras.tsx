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

                  <img src="/final/exhibit-mf-plan.png" />
                </div>
              </div>
              <div>
                <img src="/final/exhibit-mf-dash-home.png" />
              </div>
            </div>

            <div className="pb-[120px]" />
         </div> */
}

          {/*           
          <div className="pt-40" />

          <div className="bg-[#99B3F1] h-[480px] flex flex-col items-center justify-end relative">
            <div>
              <img
                src={ImageMScribble.src}
                className="absolute top-0 right-0 w-2/3"
              />

              <img
                src="/final/mf-logo.svg"
                className="max-w-[250px] w-full mx-auto"
              />
              <div className="pb-[120px]" />
            </div>
          </div> */}


{
  /* <div className="bg-[#99B3F1] h-[360px] flex flex-col items-center justify-end relative">
              <div>
                <img
                  src={ImageMScribble.src}
                  className="absolute top-0 right-0 w-2/3"
                />

                <img
                  src="/final/mf-logo.svg"
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


 {/*
            <div className="relative bg-[#99B3F1]">
              <img
                src={ImageMFMacbook.src}
                className="w-full max-w-[1000px] mx-auto  relative z-10 "
              />
              <div className="h-[52%] w-full absolute left-0 top-1/2 bg-white" />
            </div>

          */}


            {/* <img src="/meme.webp" className="w-full" /> */}

            {/* <div className="bg-[#99B3F1] h-[480px] flex flex-col items-center justify-end relative">
              <div>
                <img
                  src={ImageMScribble.src}
                  className="absolute top-0 right-0 w-2/3"
                />

                <img
                  src="/final/mf-logo.svg"
                  className="max-w-[250px] w-full mx-auto"
                />
                <div className="pb-[120px]" />
              </div>
            </div> */}



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
