const Project = ({ title, imageUrl, deployedUrl, repoUrl }) => {
    return (
        <div className="project">
            <h3>{title}</h3>
            <a href={deployedUrl} target="_blank" rel="noopener noreferrer">
                <img src={imageUrl} alt={title} />
            </a>
            <a href={repoUrl} target="_blank" rel="noopener noreferrer">
                GitHub Repository
            </a>
        </div>
    );
};

export default Project;
