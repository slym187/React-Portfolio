import Header from './components/Header';
import Project from './components/Project';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main id="content">
                <section id="about-me">
                    <h2>About Me</h2>
                    <img src="/src/assets/avatar.jpg" alt="Developer Photo" className="avatar" />
                    <p>Short bio about the developer goes here.</p>
                </section>
                <section id="portfolio">
                    <h2>Portfolio</h2>
                    <div className="projects">
                        <Project
                            title="Project 1"
                            imageUrl="/src/assets/project1.jpg"
                            deployedUrl="https://deployed-link.com"
                            repoUrl="https://github.com/repository-link"
                        />
                        {/* Repeat <Project /> for other projects */}
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
                    <a href="/src/assets/resume.pdf" download>Download Resume</a>
                    <ul>
                        <li>Proficiency 1</li>
                        <li>Proficiency 2</li>
                        {/* Add more proficiencies */}
                    </ul>
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;
