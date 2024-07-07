function Home() {
  return (
    <div className="">

      <section className="flex justify-center py-12 bg-beige text-center">
        <div className="flex flex-col justify-between gap-y-7">
          <h2 className="text-5xl font-medium">Kiwis Helping Kiwis</h2>
          <p className="text-xl ">Providing resources and support to communities in New Zealand that have been affected by disasters. </p>
        </div>
      </section>
      <section>
        <img src="/house.jpg" />
      </section>

      <section className="bg-beige py-16 text-center text-2xl">
        <p>
          We are here to help community's recover and get the necessities they need.
        </p>
        <p>
          If you can help or need it,
          <br />
          Get in touch.
        </p>
      </section>
    </div >
  );
}

export default Home;