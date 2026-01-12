export const ModernFertilityShowcase = () => {
  return (
    <div className="h-[390vh] mb-[-200vh]">
      <div className="sticky top-[-70vh]">
        <div className="lg:grid col-span-4 lg:grid-cols-12 gap-x-4 px-1">
          <div className="col-span-12 xl:col-span-10 md:col-start-1 2xl:col-start-2">
            <div className="flex flex-col gap-1 w-full">
              <div className="flex flex-wrap lg:flex-nowrap gap-1 w-full">
                <div className="bg-[#E7E7E7] py-18 lg:py-10 lg:px-4 flex items-center justify-center w-full lg:w-[65%]">
                  <img
                    src="/actual/ipad-mf-prenatals-pdp.png"
                    className="lg:max-w-[95%] w-full"
                  />
                </div>
                <div className="bg-[#E7E7E7] py-18 lg:px-4 flex items-center justify-center w-full lg:w-[35%]">
                  <img
                    src="/actual/phone-mf-checkout.png"
                    className="max-w-[332px] w-full"
                  />
                </div>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap gap-1 w-full">
                <div className="bg-[#E7E7E7] py-18 lg:px-4 flex items-center justify-center w-full lg:w-[35%]">
                  <img
                    src="/actual/phone-mf-dashboard-plan-tasks.png"
                    className="max-w-[332px] w-full"
                  />
                </div>
                <div className="bg-[#E7E7E7] py-18 lg:py-10 lg:px-4 flex items-center justify-center w-full lg:w-[65%]">
                  <img
                    src="/actual/ipad-mf-dashboard-home.png"
                    className="lg:max-w-[95%] w-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
