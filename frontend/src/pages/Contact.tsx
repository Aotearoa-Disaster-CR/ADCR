import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <div className="bg-beige h-full flex flex-col justify-evenly items-center">
      <section className="flex justify-center text-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">Contact Us</h2>
          <p>
            If you want to help or need it, get in touch.
            <br />
            We are here help communities and get the necessities they need.
          </p>
        </div>
      </section>

      <section className="flex justify-evenly gap-x-16">
        <ContactForm />
        <div className="bg-neutral-50 p-8 rounded-md">
          Or Email &nbsp;
          <a className="link" href="mailto:enquiries@adcr.co.nz">
            enquiries@adcr.co.nz
          </a>
        </div>

      </section>


    </div>
  );
}

export default Contact;