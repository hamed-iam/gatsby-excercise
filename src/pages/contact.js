import React from "react"
import Layout from "../components/Layout"
const Contact = () => {
  return (
    <Layout>
      <main className="page">
        <section className="contact-page">
          <article className="contact-info">
            <h3>Want to get in touch?</h3>
            <p>
              I'm baby listicle synth dreamcatcher taxidermy. Craft beer tacos
              fanny pack, direct trade twee chillwave photo booth blue bottle
              woke plaid bushwick four dollar toast squid art party. Pok pok
              kombucha scenester 90's shabby chic.
            </p>
            <p>
              Intelligentsia distillery viral kickstarter. Pitchfork unicorn
              lomo ethical williamsburg cred. Raw denim thundercats cliche,
              green juice beard sustainable taxidermy aesthetic vexillologist.
            </p>
            <p>Whatever four dollar toast bushwick disrupt keytar pug.</p>
          </article>
          <article>
            <form className="form contact-form">
              <div className="form-row">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
              </div>
              <div className="form-row">
                <label htmlFor="name">Email</label>
                <input type="email" name="email" id="email" />
              </div>
              <div className="form-row">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message"></textarea>
              </div>
              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </article>
        </section>
      </main>
    </Layout>
  )
}

export default Contact
