// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <>
      <header>
        <h1>Family Wellness</h1>
        <p>MESSAGE THEARAPY</p>
        <nav>
          <p>HOME</p>
          <p>ABOUT</p>
          <p>SERVICES</p>
          <p>FAQ</p>
          <p>CONTACT</p>
        </nav>
      </header>

      <main>
        <section id="image_section">
          <i class="fa-solid fa-chevron-left"></i>
          <i id="right" class="fa-solid fa-chevron-right"></i>
        </section>

        <section id="contact_about">
          <h1>Think Health. Think Massage.</h1>
          <p>
            We are open 9am to 6pm: Monday through Sunday. If you would like to
            schedule an appointment
            <br />
            with us, please call us at 111-2-3-33434 today!
          </p>
          <div>
            <button>LEARN MORE ABOUT US</button>
            <button>CONTACT US TODAY</button>
          </div>
        </section>

        <section id="paragraph_section">
          <p class="para">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut
          </p>
          <p class="para">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt.
          </p>
          <p class="para">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
          </p>
        </section>

        <hr />

        <section id="address_section">
          <h2>Family Wellness Massage Therapy</h2>
          <p>
            98475 Main Street , Mainland,M112244
            <br />
            Phone: 9843,874,3210
          </p>
        </section>
      </main>

      <footer>
        <p id="copyrights">Copyright 2016. Website.com. All Right Reserved</p>
        <p>Powerd by Website.com</p>
      </footer>
    </>
  );
}

export default App;
