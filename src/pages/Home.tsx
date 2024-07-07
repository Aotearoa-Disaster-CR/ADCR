function Home() {
  return (
    <div className="">

      <section className="flex justify-center py-12 bg-beige text-center">
        <div className="flex flex-col justify-between gap-y-7 w-2/3">
          <h2 className="text-5xl font-bold">Kiwis Helping Kiwis</h2>
          <p className="text-xl ">Providing resources and support to communities in New Zealand that have been affected by disasters. </p>
        </div>
      </section>
      <section>
        <img src="/house.jpg" />
      </section>

      <section className="bg-beige py-16 flex flex-col gap-8 items-center ">
        <div className="text-wrap text-center text-2xl font-bold w-2/3">
          <h3>
            We are here to help community's recover and get the necessities they need.
            <br />
            <br />
            If you can help or need it,
            <br />
            Get in touch.
          </h3>
        </div>
        <button className="btn btn-primary text-neutral-50 w-fit">Contact Us</button>
      </section>
    </div >
  );
}

export default Home;