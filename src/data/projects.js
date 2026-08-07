// ---------------------------------------------------------------------------
// PROJECTS — edit descriptions, tech stacks, and links here.
// Only THREE projects exist by design. Add links once they're live —
// live demo links only render when githubUrl / liveUrl are non-empty.
// ---------------------------------------------------------------------------

const projects = [
  {
    id: 'transport-risk-analyzer',
    number: '01',
    name: 'Transport Risk Analyzer',
    category: 'SAP / ABAP',
    file: 'transport_request.abap',
    stamp: 'TR_ANALYSIS',
    status: 'STATUS: IN PROGRESS',
    accent: 'smoothie',
    tagline: 'inspect before you transport →',
    blurb:
      'An ABAP-focused prototype for assessing SAP transport requests against configurable risk checks before a planned move across a landscape.',
    idea:
      'Working around SAP transport workflows made me curious about how pre-transport checks could be expressed as code. I built this project to explore that idea and turn familiar SAP change-management concepts into an ABAP-focused development project.',
    build:
      'The project models transport-risk analysis around request metadata and rule-based checks, with the goal of surfacing review points in a clearer, more structured way. It is a portfolio prototype rather than a claim of production SAP deployment.',
    underTheHood:
      'Developed without access to a live SAP system, using open-source ABAP tooling to iterate on the ABAP code locally. The project focuses on the analysis logic and SAP transport concepts while keeping the implementation honest about that environment constraint.',
    techStack: ['ABAP', 'open-abap tooling', 'SAP CTS / Transport Management concepts'],
    learned:
      'Building without a live SAP backend made me separate SAP-specific assumptions from the core logic and think more carefully about how transport-management concepts translate into code.',
    githubUrl: 'https://github.com/InshaZeeshan/abap-transport-risk-analyzer',
    liveUrl: 'https://abap-transport-risk-analyzer.onrender.com/',
  },
  {
    id: 'sap-explain-ai',
    number: '02',
    name: 'SAP Explain AI',
    category: 'SAP × AI',
    file: 'EXPLAIN_MODE.md',
    stamp: 'SAP × AI',
    status: 'EXPLAIN_MODE: ON',
    accent: 'milkshake',
    tagline: 'making SAP make sense ✦',
    blurb:
      'An AI-assisted SAP learning project focused on turning dense SAP technical concepts into clearer, developer-friendly explanations.',
    idea:
      'SAP terminology can be difficult to navigate when you are moving from operations into development. I started SAP Explain AI to explore a more approachable way to understand technical SAP concepts without flattening the important details.',
    build:
      'The project is being shaped as a focused explanation interface for SAP-related technical content. The portfolio intentionally keeps the feature description narrow until each capability is implemented and verified.',
    underTheHood:
      'This project is still in active development. Architecture and integrations are intentionally not overstated here; the repository can document the exact implementation as the build evolves.',
    techStack: ['SAP concepts', 'AI-assisted development'],
    learned:
      'Designing explanations for technical concepts has pushed me to distinguish between memorizing SAP terminology and understanding the relationships behind it.',
    githubUrl: 'https://github.com/InshaZeeshan/sap-explain-ai',
    liveUrl: 'https://sap-explain-ai-frontend.onrender.com/',
  },
  {
    id: 'playsic',
    number: '03',
    name: 'PLAYSIC',
    category: 'Python / API',
    file: 'playlist_generator.py',
    stamp: 'SPOTIFY_API',
    status: 'STATUS: BUILT ✓',
    accent: 'sorbet',
    tagline: "something's playing in here ♫",
    blurb:
      'A Spotify playlist generator built with Python, Flask, and the Spotify API.',
    idea:
      'A love of playlists meeting a want to actually build something with a real third-party API and proper OAuth — rather than another to-do app.',
    build:
      'A Flask app that authenticates with a listener\'s Spotify account and dynamically generates playlists and recommendations through the Spotify API.',
    underTheHood:
      'Flask handles routing and the server-side logic; Spotipy wraps the Spotify Web API for track/audio-feature lookups and playlist creation; OAuth handles the authentication flow so the app can act on a user\'s own Spotify account.',
    techStack: ['Python', 'Flask', 'Spotipy', 'Spotify API', 'OAuth', 'HTML', 'CSS', 'JavaScript'],
    learned:
      'Hands-on experience with OAuth, third-party API integration, Flask routing, and translating API responses into a usable playlist-generation flow.',
    githubUrl: 'https://github.com/InshaZeeshan/Playsic',
    liveUrl: 'https://playsic-6o44.onrender.com',
  },
]

export default projects
