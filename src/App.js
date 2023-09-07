import React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <header>
        <div className="header-content">
          <img src="folivermm.jpeg" alt="picture of me" className="profile-image" />
          <div className="header-text">
            <h1>Oliver Magrane</h1>
            <h4>Software Developer</h4>
            <a href="https://github.com/folivermm" target="_blank"><ion-icon name="logo-github"></ion-icon></a>
            <a href="https://www.linkedin.com/in/oliver-magrane-271857261" target="_blank"><ion-icon name="logo-linkedin"></ion-icon></a>
            <a href="mailto:foliverm@gmail.com" target="_blank"><ion-icon name="mail-outline"></ion-icon></a>
          </div>
        </div>
      </header>

      <main>
        {/* Intro */}
        <h2>Hi! I'm Oliver Magrane</h2>
        <hr />

        <p>
          Hi! I'm Oliver. I was born in Venezuela, yet I grew up in San
          Francisco. After graduating from college as a music major I moved
          back to Venezuela to get in touch with my roots and to practice
          my Spanish. I traveled around South America for a couple of
          months and then ended up living in Venezuela for almost five
          years. I played in a big band, taught music lessons, and also
          worked in the microbrewing industry. Eventually, I moved back to
          the States and worked in customer service at a small high end
          bicycle store.
        </p>

        <p>
          I’ve always wanted to work in a science/engineering-related field
          and thought how exciting it would be to make my own websites and
          applications! I decided to enroll in a software engineering program
          and it has been one of the most transformative experiences of my
          life. As grueling and difficult as the journey has been, I’m
          grateful for what I have accomplished and I have fallen in love
          with programming and developing applications. I’m geared up to
          continue growing my programming skills and immersing myself in the
          developer community. It’s so exciting to be starting a new career in
          technology as a software developer!
        </p>

        <p>Software Developer Resourcefulness:</p>
        <ul className="list1">
          <li>Expert researcher and fact-finder.</li>
          <li>Mastery of abstract concepts and logic.</li>
          <li>Knowldege and understanding of programming philosophies and languages.</li>
          <li>Articulateness and literacy; confident technical communicator.</li>
          <li>Ingenious problem-solving and creative engineering.</li>
        </ul>

        <hr />

        {/* About me */}
        <article>
          <h3>About</h3>
          <p>Completing the Thinkful program I’ve developed and deployed
            mobile-first applications while learning new languages and
            frameworks, spending several hours per week collaborating
            with and learning from senior web developers in a mentor-student
            relationship. My specialties are web design/full-stack web
            development.  I have learned industry best practices and software
            development standards with a focus on Javascript, HTML5, CSS3,
            ReactJS, ExpressJS, Node.js, PostgreSQL, RESTful APIs, algorithms
            and data structures.
          </p>
        </article>

        <hr />

        {/* Contact */}
        <footer>
          <h3>Contact</h3>
          <p>Please feel free to contact me or follow me...</p>
          <ol>
            <li><a href="https://github.com/folivermm" target="_blank">GitHub</a></li>
            <li><a href="https://www.linkedin.com/in/oliver-magrane-271857261/" target="_blank">LinkedIn</a></li>
            <li><a href="mailto:foliverm@gmail.com" target="_blank">Email:</a>  foliverm@gmail.com</li>
          </ol>
        </footer>
        <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
        <script nomodule src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js"></script>
      </main>

    </div>
  );
}

export default App;
