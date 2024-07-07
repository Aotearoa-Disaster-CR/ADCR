import { Link } from "react-router-dom";

function About() {
  return (
    <div className="">

      <section className="flex justify-center py-12 bg-beige text-center">
        <div className="flex flex-col justify-between gap-y-7 w-2/3">
          <h2 className="text-4xl font-bold">About us</h2>
          <p className="text-xl ">We're a Kiwi family based in Thames and Auckland.
            <br />
            <br />
            We personally have been affected by natural disasters, and some of our children have lost everything and can relate to how hard it can be dealing with the aftermath.</p>
        </div>
      </section >

      <section className="px-10 py-6">
        Following the severe impact of Cyclone Gabrielle on Hawkes Bay and Wairoa, we organized, collected, and drove down donations to the affected communities before we started ADCR. We just wanted to get on the ground and help. We started ADCR because we believe that by using business connections as well as support from individuals more Kiwi's can receive help when they need it the most.
        <br />
        <br />
        Currently, ADCR is structured as a business; this choice was to be able to get more traction and help communities affected by Cyclone Gabriel faster rather than waiting to jump through all the hoops. We plan on becoming charitable trust or non-profit later in time.
        <br />
        <br />
        In saying that, we probably have the worst business model you’ll see. Everyone is working on donated time, including weekends, kids are being dragged everywhere for pick up and deliveries, there is no income, and we are only losing money paying for transportation and resources that are needed that we can’t source from donations.
        <br />
        <br />
        We are applying for funding to help with transportation and sourcing costs. There’s no corporate cut, and we are planning to use 100% of the funding we receive to directly benefit the groups affected by natural disasters. (Dad also wants a ginger slice, so that'll be his yearly "wage").
        <br />
        <br />
        We are not asking you to donate to us rather than groups and hubs on the ground. If possible, please donate to them first. Our goal is to get these groups what they need and are missing from the current donations they are receiving.
        <br />
        <br />
        We want ADCR to be a place where Kiwis who are struggling from disasters have their basic needs listened to and be able to source those resources from the generosity of other New Zealanders.
      </section>


      <section className="bg-beige py-16 flex flex-col gap-8 items-center ">
        <div className="text-wrap w-1/2 flex flex-col gap-8">
          <p>
            It's important to recognize that disasters can have long-lasting effects on communities despite the media attention fading.
            <br />
            <br />
            Recovery efforts may need to continue for months or even years.
            <br />
            <br />
            As such, we will work to establish long-term relationships with the affected communities and develop strategies for ongoing support to transition back to pre-event life.
          </p>
          <h3 className="text-2xl text-center   font-bold">
            If you can help or need it,
            <br />
            Get in touch.
          </h3>
        </div>
        <Link to="/contact" className="btn btn-primary text-neutral-50 w-fit">
          Contact Us
        </Link>
      </section>


    </div >
  );
}

export default About;