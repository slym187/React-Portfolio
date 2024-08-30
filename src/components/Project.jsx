import PropTypes from 'prop-types';

const Project = ({ title, image, deployedUrl, repoUrl }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                <img src={image} alt={`${title} Screenshot`} className="project-image" />
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
            </a>
        </div>
    );
};

Project.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    deployedUrl: PropTypes.string.isRequired,
    repoUrl: PropTypes.string.isRequired,
};

export default Project;