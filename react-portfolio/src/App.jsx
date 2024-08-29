
import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';
import './styles.css';
import rubyPhoto from './assets/rubyphoto.jpg';
import leappe from './assets/leappe.png'; // Correctly import the image
import notetaker from './assets/notetaker.png'; // 
import ept from './assets/ept.png'; 
import tb from './assets/tb.png'; 
import mfb from './assets/mfb.png'; 
import wd from './assets/wd.png';

const App = () => {
    return (
        <div>
            <Header />
            <main id="content">
                <section id="about-me">
                    <h2>About Me</h2>
                    {/* Use the imported rubyPhoto variable */}
                    <img src={rubyPhoto} alt="Developer Photo" className="avatar" />
                    <p>Hello! I am Ruby, a dedicated and enthusiastic tech enthusiast based in Austin, Texas. I began my tech journey in March 2024, driven by a passion for learning and a desire to advance my skills in this ever-evolving field. As a 33-year-old mother of three, I balance my time between family and pursuing my ambitions in technology. I am excited to continue growing my expertise and look forward to the opportunities ahead as I advance my career in tech.</p>
                </section>
                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <div className="projects">
                        <Project
                            title="Project 1"
                            image={leappe}  // Use the imported leappe variable
                            deployedUrl="https://soyylo.github.io/Le-Appetite/"
                            repoUrl="https://github.com/SoyYLo/Le-Appetite.git"
                        />
                         <Project
                            title="Note Taker App"
                            image={notetaker}
                            deployedUrl="https://slym187.github.io/Note-Taker/"
                            repoUrl="https://github.com/slym187/Note-Taker.git"
                        />
                        <Project
                            title="Employee Payroll Tracker"
                            image={ept}
                            deployedUrl="https://slym187.github.io/Employee-Payroll-Tracker/"
                            repoUrl="https://github.com/slym187/Employee-Payroll-Tracker.git"
                        />
                        <Project
                            title="Task Board"
                            image={tb}
                            deployedUrl="https://slym187.github.io/Task-Board/"
                            repoUrl="https://github.com/slym187/Task-Board.git4"
                        />
                        <Project
                            title="My First Blog Application"
                            image={mfb}
                            deployedUrl="https://slym187.github.io/My-First-Blog/"
                            repoUrl="https://github.com/slym187/My-First-Blog.git"
                        />
                        <Project
                            title="Weather Dashboard"
                            image={wd}
                            deployedUrl="https://slym187.github.io/Weather-Dashboard/"
                            repoUrl="https://github.com/slym187/Weather-Dashboard.git"
                        />
                    </div>
                </section>
                <section id="contact">
                    <h2>Contact</h2>
                    <form>
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />
                        <label htmlFor="email">Email:</label>
                        <input type="email" id="email" name="email" required />
                        <label htmlFor="message">Message:</label>
                        <textarea id="message" name="message" required></textarea>
                        <button type="submit">Send</button>
                    </form>
                </section>
                <section id="resume">
                    <h2>Resume</h2>
                    <a href="./assets/RubyHillResume1.docx" download>Download Resume</a>
                    <ul>
                        <li>Front-End Development: Skilled in building responsive and user-friendly web interfaces using HTML, CSS, and JavaScript, with experience in modern frameworks like React. Proficient in creating visually appealing and interactive applications that enhance the user experience.</li>
                        <li>Version Control with Git: Proficient in using Git for version control and collaboration on projects. Experienced in managing codebases, branching, merging, and contributing to projects on GitHub, ensuring organized and efficient project workflows.</li>
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
