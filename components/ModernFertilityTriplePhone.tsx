import ImagePhoneBg from '@/public/actual/showcase-mf-home-bg.png'

export const ModernFertilityTriplePhone = () => {
  return (
    <div className="mx-auto max-w-site relative">
      <div className="absolute top-0 left-0 h-[1150px] w-full">
        <div
          className="w-full h-full bg-center bg-contain bg-no-repeat top-0 left-0 z-10 max-w-[1158px] mx-auto"
          style={{ backgroundImage: `url(${ImagePhoneBg.src})` }}
        />
      </div>
      <div className="z-20 relative">
        <h2 className="text-center max-w-[1150px] mx-auto font-medium text-[clamp(36px,6.5vw,100px)] leading-none font-heading">
          A responsive website, <br />
          built from the ground up.
        </h2>

        <div className="pb-10 lg:pb-20" />

        <div className="w-[298px] mx-auto">
          <img
            src="/actual/phone-mf-home-v2.png"
            className="mx-auto w-full relative z-20"
          />
        </div>
      </div>
    </div>
  )
}
