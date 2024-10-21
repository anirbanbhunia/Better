import React from 'react'
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

function AboutUs() {

    const timelineData = [
        {
          year: "2014",
          content: "After Vishal Garg's first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all."
        },
        {
          year: "2015",
          content: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!)."
        },
        {
          year: "2016",
          content: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors."
        },
        {
          year: "2017",
          content: "Better Mortgage expands to new markets and continues its rapid growth."
        },
        {
            year: "2018",
            content: "Better Mortgage partners with Ally Bank to build Ally powered by Better."
          },
          {
            year: "2019",
            content: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers."
          },
          {
            year: "2021",
            content: "Better acquires Trussle — The UK’s most innovative online mortgage broker."
          },
          {
            year: "2022",
            content: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online."
          },
          {
            year: "2023",
            content: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.Better Mortgage launches the fully digital 3-day HELOC².Better Mortgage launches One Day Verified Approval Letter."
          },
          {
            year: "Today",
            content: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers."
          },
      ];

  return (
    <div>
        <NavBar/>
        <section className='h-[100vh] bg-white flex flex-col items-center justify-center text-center gap-8'>
            <h3 className='text-3xl text-green-800 font-semibold'>Our mission</h3>
            <h1 className='text-5xl font-semibold leading-[60px]'>We’re making homeownership simpler, faster — <br /> and most importantly, more accessible for all <br /> Americans.</h1>
        </section>
        <section className='h-[100vh] bg-white flex pt-40'>
            <div className='w-[50%] ml-40 flex flex-col items-start gap-5'>
                <h1 className='text-3xl font-semibold'>The status quo is broken</h1>
                <p className='text-gray-500'>The traditional processes around homeownership are opaque <br /> and stressful. Fees aren’t transparent and some are simply <br /> outrageous in size. Traditional mortgage lending is rife with <br /> unnecessary fees and slow, painful processes. It’s a system set <br /> up to benefit insiders — not you. Better.com CEO, Vishal Garg, <br /> set out to change that.</p>
                <button className='bg-green-700 px-8 py-4 text-white font-semibold rounded-lg text-lg'>Read Vishal's story</button>
            </div>
            <div>
                <iframe width="460" height="400" src="https://www.youtube.com/embed/1KjYlLBM9j4?si=qxmzCjzjwTqEShjK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" controls="0" modestbranding="1" rel="0" allowfullscreen></iframe>
            </div>
        </section>
        <section className='h-[50vh] text-white'>
            <div className='ml-40 mr-40 flex flex-col justify-center'>
                <h1 className='text-5xl font-bold mt-20 mb-12'>How we’re changing things</h1>
                <p className='mb-5'>Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion. Yet home <br />finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are <br />misaligned with consumers’.</p>
                <p>That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more <br /> efficient, and humans to help make it friendly and enjoyable.</p>
            </div>
        </section>
        <section className='h-[50vh] bg-white flex flex-col items-center justify-center gap-24'>
            <h1 className='text-4xl font-semibold'>Backed by</h1>
            <div className='flex items-center w-screen justify-around'>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-bold'>logo</span>
                <span className='text-3xl font-bold'>logo</span>
            </div>
        </section>
        <section className="bg-white">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-10">Company Timeline</h2>
                <div className="relative border-l border-gray-200 pb-10 mt-16">
                    {timelineData.map((item, index) => (
                    <div key={index} className="pb-10 ml-6">
                        <span className="flex items-center justify-center px-4 py-2 bg-green-600 rounded-full -left-8 absolute">
                        <span className="text-white font-bold">{item.year}</span>
                        </span>
                        <div className="bg-gray-100 rounded-lg shadow-md p-6 ml-10">
                        <p className="text-gray-700">{item.content}</p>
                        </div>
                    </div>
                    ))}
                    <button className='bg-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-800 ml-16'>Get started</button>
                </div>
            </div>
        </section>
        <Footer/>
    </div>
  )
}

export default AboutUs