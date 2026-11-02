import "../styles/FAQs.css"

function FAQs() {
  return (
    <section className="faqs" id="faqs">
      <div className="faqsHeader">
        <p className="faqsLabel">FREQUENTLY ASKED QUESTIONS</p>
        <h2>Got Questions?</h2>
        <p className="faqsDescription">
          Here are some answers to help you get started with LaundryDuck.
        </p>
      </div>

    <div className="faqsGrid">
      <article className="faqCard">
        <h3 className="faqQuestion">
          Can I choose which laundry shop will handle my clothes?
        </h3>
        <p className="faqAnswer">
          Yes! You can browse available laundry shops, compare their
          services and prices, and choose the shop that best fits your needs.
        </p>
      </article>

      <article className="faqCard">
        <h3 className="faqQuestion">
          Can I request pickup and delivery, or pick up my laundry myself?
        </h3>
        <p className="faqAnswer">
          LaundryDuck supports convenient laundry options, including
          pickup and delivery and self-pickup, depending on the services
          offered by your chosen shop.
        </p>
      </article>

      <article className="faqCard">
        <h3 className="faqQuestion">
          How will I know when my laundry is ready?
        </h3>
        <p className="faqAnswer">
          You can check your booking status through your LaundryDuck
          account to keep track of your laundry order.
        </p>
      </article>

      <article className="faqCard">
        <h3 className="faqQuestion">
          What happens if some of my clothes are missing or damaged?
        </h3>
        <p className="faqAnswer">
          You can contact the laundry shop or LaundryDuck support to
          report the issue and request assistance.
        </p>
      </article>

      <article className="faqCard">
        <h3 className="faqQuestion">
          Can I cancel or reschedule my laundry booking?
        </h3>
        <p className="faqAnswer">
          Cancellation and rescheduling options may depend on your
          booking status and the laundry shop's policies.
        </p>
      </article>

      <article className="faqCard">
        <h3 className="faqQuestion">
          Are the laundry prices different for each shop?
        </h3>
        <p className="faqAnswer">
          Yes. Each laundry shop may have different service rates.
          You can check the available prices before choosing a shop
          and placing your booking.
        </p>
      </article>
    </div>
    </section>
  )
}

export default FAQs