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
    name: 'Iris',
    description:
      'Iris is your beauty people, your honest takes, your way to stay ahead—wrapped in one app',
    stack: [],
    image: 'iris_screenshot.png',
  },
  {
    name: 'Newness',
    description:
      'Newness is a dedicated space for beauty experts to educate and engage with their supporters through live ticketed master classe events',
    stack: [],
    image: 'newness_screenshot.png',
  },
  {
    name: 'Impulse',
    description:
      'Impulse is a survey app that allows users to earn rewards by answering simple product surveys or feedback questions',
    stack: [],
    image: 'impulse_screenshot.png',
  },
  {
    name: 'Impulse 2',
    description:
      'Impulse is a survey app that allows users to earn rewards by answering simple product surveys or feedback questions',
    stack: [],
    image: 'impulse_screenshot2.png',
  },
  {
    name: 'Brainzones',
    description:
      'BrainZones is an app for educators, filled with strategies grounded in neuroeducational research',
    stack: [],
    image: 'brainzones_screenshot.png',
  },
  {
    name: 'LookFwd',
    description: 'Vacation Countdown App! Post trip countdowns with friends on LookFwd!',
    stack: [],
    image: 'lookfwd_screenshot.png',
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
