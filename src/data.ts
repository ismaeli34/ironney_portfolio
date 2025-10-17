// Nav type
export type navLinkType = {
  label: string;
  url: string;
};

// Nav
const navLinks = [
  {
    label: 'Services',
    url: '#services',
  },
  {
    label: 'Projects',
    url: '#works',
  },
  {
    label: 'About',
    url: '#about-me-section',
  },
  {
    label: 'Testimonials',
    url: '#testimonials-section',
  },
  {
    label: 'Contact',
    url: '#contact-section',
  },
];
const navbarLinks = [
  {
    label: 'Home',
    url: '#app',
  },
  ...navLinks,
];

const socialLinks = [
  {
    label: 'X',
    url: 'https://x.com/ronysmile34',
  },
  {
    label: 'Telegram',
    url: 'https://web.telegram.org/k/',
  },
  {
    label: 'GitHub',
    url: 'https://github.com/ismaeli34',
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/ronneyismael/',
  },
];

const resourceLinks = [
  {
    label: 'Pillarstack',
      url: ''
      // url: 'https://www.pillarstack.com',
  },
  {
    label: 'Figma Template',
    // url: 'https://www.figma.com/community/file/1328038510191576951/project-starter-template',
      url: '',

  },
];

const heroText =
    "A freelance full-stack developer, building quality solutions since 2023 and learning from every challenge along the way."
const locationPlace = `51°30'57.0"N 7°27'07.0"E`;
const locationCountry = 'Dortmund, Germany';

// cal.com
const dataCalNamespace = '30min';
const dataCalLink = 'brhoom/30min';
const dataCalConfig =
  '{"layout":"month_view", "theme": "dark", "brand": "#8C8C73"}';

export {
  socialLinks,
  resourceLinks,
  heroText,
  locationPlace,
  locationCountry,
  navLinks,
  navbarLinks,
  dataCalNamespace,
  dataCalLink,
  dataCalConfig,
};
