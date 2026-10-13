// The only data the page renders from. To add a project, add one object to a group.
// url: null shows an "In development" badge instead of a link.
// icons: true marks a group whose images are square app icons rather than 1200×750 site screenshots.
export const groups = [
  {
    title: 'Client websites',
    projects: [
      {
        title: 'Rim Cruise',
        url: 'https://rimcruise.co.za',
        description: 'Scenic and sunset boat cruises on Phobane Dam, Eshowe, with online booking and payment.',
        tags: ['Astro', 'Tailwind', 'Firebase', 'Yoco'],
        image: 'assets/projects/rimcruise.webp',
      },
      {
        title: '#DrumsAreMe',
        url: 'https://drumsareme.co.za',
        description: 'Online store for premium hickory drumsticks and audio interfaces.',
        tags: ['TypeScript', 'Firebase'],
        image: 'assets/projects/drumsareme.webp',
      },
      {
        title: 'ROIS Movers',
        url: 'https://rois.co.za',
        description: 'Book, pay for and track truck hire across Gauteng, with driver and customer apps.',
        tags: ['Astro', 'TypeScript', 'Firebase', 'iOS', 'Android'],
        image: 'assets/projects/rois.webp',
      },
      {
        // TODO(Isaac): confirm the live domain runs your build.
        title: 'Clear Lens Optometry',
        url: 'https://www.clearlens.co.za',
        description: 'Website, online booking and practice admin for optometrists in Soweto and Randburg.',
        tags: ['Next.js', 'Firebase'],
        image: 'assets/projects/clearlens.webp',
      },
    ],
  },
  {
    title: 'Mac apps',
    icons: true,
    projects: [
      {
        title: 'Daylight',
        url: 'https://mavhungu2.github.io/daylight-support/',
        description: 'Live day/night world map with city clocks for your Mac desktop, lock screen and screen saver. Runs from the menu bar.',
        tags: ['Swift', 'SwiftUI'],
        image: 'assets/projects/daylight.webp',
      },
      {
        title: 'GitLanes',
        url: null,
        description: 'Native macOS Git client built around the commit graph. Browsing can never change your repo.',
        tags: ['Swift'],
        image: 'assets/projects/gitlanes.webp',
      },
    ],
  },
]
