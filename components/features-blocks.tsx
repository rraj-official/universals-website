import Image from 'next/image'
const stats = [
  { name: 'Projects', value: '3' },
  { name: 'Hours of experience', value: '300+' },
  { name: 'Hours per week', value: '40' },
  { name: 'Loyalty', value: 'Unlimited' },
]
export default function FeaturesBlocks() {
  return (
    <section className="relative">

      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none" aria-hidden="true"></div>
      <div className="absolute left-0 right-0 bottom-0 m-auto w-px p-px h-20 bg-gray-200 transform translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Our Portfolio</h2>
            <p className="text-xl text-gray-600">Here are some of our recent projects</p>
          </div>

          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">

            {/* 1st item */}
            <div className="relative flex flex-col items-center h-full p-6 bg-white rounded shadow-xl">
              <Image className="md:max-w-parent mx-auto rounded" src="http://universalgroupindia.org/assets/images/portfolio/nabbana.jpg" width={500} height="462" alt="Features bg" />
              <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">Nabanna - Office of West Bengal C.M
              </h4>
              <p className="text-gray-600 text-center">WEST BENGAL</p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 h-full bg-white rounded shadow-xl">
              <Image className="md:max-w-parent mx-auto rounded" src="http://universalgroupindia.org/assets/images/1580053962universaSites_fortune.jpg" width={500} height="462" alt="Features bg" />
              <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">ITC Fortune
              </h4>
              <p className="text-gray-600 text-center">DURGAPUR</p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 h-full bg-white rounded shadow-xl">
              <Image className="md:max-w-parent mx-auto rounded" src="http://universalgroupindia.org/assets/images/1580053948universaSites_bb.jpg" width={500} height="462" alt="Features bg" />
              <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">G-Centere Mall
              </h4>
              <p className="text-gray-600 text-center">KOLKATA</p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 h-full bg-white rounded shadow-xl">
              <Image className="md:max-w-parent mx-auto rounded" src="http://universalgroupindia.org/assets/images/portfolio/nabbana.jpg" width={500} height="462" alt="Features bg" />
              <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">Nabanna - Office of West Bengal C.M
              </h4>
              <p className="text-gray-600 text-center">WEST BENGAL</p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 h-full bg-white rounded shadow-xl">
              <Image className="md:max-w-parent mx-auto rounded" src="http://universalgroupindia.org/assets/images/portfolio/nabbana.jpg" width={500} height="462" alt="Features bg" />
              <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">Nabanna - Office of West Bengal C.M
              </h4>
              <p className="text-gray-600 text-center">WEST BENGAL</p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 h-full bg-white rounded shadow-xl">
              <Image className="md:max-w-parent mx-auto rounded" src="http://universalgroupindia.org/assets/images/portfolio/nabbana.jpg" width={500} height="462" alt="Features bg" />
              <h4 className="text-xl font-bold text-center leading-snug tracking-tight mb-1">Nabanna - Office of West Bengal C.M
              </h4>
              <p className="text-gray-600 text-center">WEST BENGAL</p>
            </div>
            <div>
              {/* <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div key={stat.name} className="flex flex-col-reverse">
                    <dt className=" text-2xl leading-7 text-theme-color py-2">{stat.name}</dt>
                    <dd className="text-4xl  leading-9 tracking-normal text-white">{stat.value}</dd>
                  </div>
                ))}
              </dl> */}
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}