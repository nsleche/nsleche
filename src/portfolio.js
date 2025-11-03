const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Smith',
  role: 'Front End Engineer',
  picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',

  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const apps = [
  {
    name: 'Newness',
    description: 'Newness is a dedicated space for beauty experts to educate and engage with their supporters through live ticketed master classe events',
    screenshot: 'newness_screenshot.png',
    icon: 'newness_icon.png'
  },
]

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Newness',
    description:
      'Newness is a dedicated space for beauty experts to educate and engage with their supporters through live ticketed master classe events',
    stack: [],
    // sourceCode: 'https://github.com',
    // livePreview: 'https://github.com',
    image: 'newness_screenshot.png',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
    image: 'https://github.githubassets.com/assets/GitHub-Logo-ee398b662d42.png',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Swift',
  'Objective-C',
  'UIKit',
  'SwiftUI',
  'TypeScript',
  'React',
  'Git',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'antonioalvesdev@gmail.com',
}

export { header, about, projects, skills, contact }
