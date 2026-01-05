export const BlogHero = () => (
  <div className="w-full h-[500px] bg-[#2b292b] relative">
    <div className="">
      <img
        src="/blog-hero-m.jpg"
        className="md:hidden object-cover object-center size-full absolute"
      />
      <img
        src="/blog-hero-d.jpg"
        className="object-cover lg:object-[90%_0%] xl:object-[90%_35%] 2xl:object-[85%_-200px] size-full absolute opacity-40"
      />
    </div>
  </div>
)
