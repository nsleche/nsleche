const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://nsleche.github.io/cleanfolio',
  title: 'AA.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Antonio Alves',
  role: 'iOS Engineer',
  // picture: 'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
  picture: "",

  description:
    'I build iOS apps for users and the teams behind them. Since 2016, I\'ve focused on creating great product experiences while ensuring a smooth development process through automation and thoughtful tooling',
  resume: `${process.env.PUBLIC_URL}/Resume.pdf`,
  social: {
    linkedin: 'https://www.linkedin.com/in/antoniodev',
    github: 'https://github.com/nsleche',
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
    dark_mode_image: 'iris_screenshot_dark.png'
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
  // {
  //   name: 'Impulse 2',
  //   description:
  //     'Impulse is a survey app that allows users to earn rewards by answering simple product surveys or feedback questions',
  //   stack: [],
  //   image: 'impulse_screenshot2.png',
  // },
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
    stack: ['CoreLocation', 'MapKit', 'WebSockets'],
    image: 'lookfwd_screenshot.png',
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
