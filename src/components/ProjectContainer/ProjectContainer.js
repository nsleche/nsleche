import { useContext } from 'react'
import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'
import { ThemeContext } from '../../contexts/theme'
import './ProjectContainer.css'

const ProjectContainer = ({ project }) => {
  const [{ themeName }] = useContext(ThemeContext)

  const getImageSrc = () => {
    if (!project.image) return null
    
    if (project.image.startsWith("http")) {
      return project.image
    }

    // Use dark mode image if theme is dark and it exists
    if (themeName === 'dark' && project.dark_mode_image) {
      return `${process.env.PUBLIC_URL}/images/${project.dark_mode_image}`
    }

    return `${process.env.PUBLIC_URL}/images/${project.image}`
  }

  return (
    <div className='project'>
      {project.image && (
        <img
          src={getImageSrc()}
          alt={`${project.name} screenshot`}
          style={{ width: '100%', objectFit: 'cover' }}
        />
      )}

    <h3>{project.name}</h3>

    <p className='project__description'>{project.description}</p>
    {project.stack && (
      <ul className='project__stack'>
        {project.stack.map((item) => (
          <li key={uniqid()} className='project__stack-item'>
            {item}
          </li>
        ))}
      </ul>
    )}

    {project.sourceCode && (
      <a
        href={project.sourceCode}
        aria-label='source code'
        className='link link--icon'
      >
        <GitHubIcon />
      </a>
    )}

    {project.livePreview && (
      <a
        href={project.livePreview}
        aria-label='live preview'
        className='link link--icon'
      >
        <LaunchIcon />
      </a>
    )}
    </div>
  )
}

export default ProjectContainer
