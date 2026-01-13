import { Billboard } from './Billboard'
import { ExhibitPages } from './ExhibitPages'
import ImageShowcaseDoctor800w from '@/public/actual/showcase-doctor_800w.jpg'
import ImageShowcaseDoctor1200w from '@/public/actual/showcase-doctor_1200w.jpg'
import ImageShowcaseDoctor1800w from '@/public/actual/showcase-doctor_1800w.jpg'
import ImageShowcaseDoctor2400w from '@/public/actual/showcase-doctor_2400w.jpg'
import ImageShowcaseDoctor3000w from '@/public/actual/showcase-doctor_3000w.jpg'

export const OpalShowcase = () => {
  return (
    <div>
      {/* <div className="bg-[#eaeaea] z-10 relative"> */}
      <div className="max-w-site mx-auto z-10 relative xl:-mt-40">
        {/* <div className="px-4"> */}
        <Billboard textSize="lg">
          <p className="copy-largest">
            I've since worked on <br />
            many parts of Opal.
          </p>
        </Billboard>
        {/* </div> */}

        {/* <div class="absolute -z-10 top-0 left-0 h-full w-full bg-neutral-200"><div class="absolute inset-0 bg-primary-500 bg-[size:20px_20px] opacity-20 blur-[100px]"></div></div>  */}

        <ExhibitPages />

        <div className="pt-20 lg:pt-50" />
        {/* <div className="pt-20 lg:pt-40" /> */}

        {/* <div className="pb-20 lg:pb-30" /> */}
        <div className="grid grid-cols-12 gap-x-4 px-4">
          <div className="max-xl:order-2 col-span-12 xl:col-span-3 xl:col-start-2">
            <div className="max-xl:max-w-[350px] lg:mx-0 mx-auto w-full">
              <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
                MOBILE NAVIGATION
              </p>
              <div className="pb-4" />
              <video autoPlay muted loop className="object-cover size-full">
                <source
                  src="/final-compressed/mobile-nav.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
          <div className="col-span-12 xl:col-span-7">
            <p className="text-[14px] uppercase leading-[1.2] font-heading font-700 tracking-wide">
              FIRMWARE UPDATER
            </p>
            <div className="pb-4" />

            <img
              src={ImageShowcaseDoctor1200w.src}
              srcSet={`${ImageShowcaseDoctor800w.src} 800w, ${ImageShowcaseDoctor1200w.src} 1200w, ${ImageShowcaseDoctor1800w.src} 1800w, ${ImageShowcaseDoctor2400w.src} 2400w, ${ImageShowcaseDoctor3000w.src} 3000w`}
              sizes="(max-width: 1024) 100vw, 1000px"
              loading="lazy"
            />
            <div className="pb-4" />

            <p className="font-body font-500 text-[16px] leading-[26px] -tracking-[0.4px] text-[#757575] max-w-[500px] pb-4">
              Dr. Opal is a web based tool created to help users update their
              Tadpole firmware. I built out the UI and collaborated with device
              engineers to interface it with the Tadpole.
            </p>
            <div className="pb-40" />
          </div>
        </div>
      </div>
      <div className="pb-20 xl:pb-40" />
    </div>
  )
}
