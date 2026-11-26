export type Work = {
  slug: string;
  name: string;
  kind: string;
  year: string;
  /** One line for the card. */
  summary: string;
  context: string;
  action: string[];
  result: string;
  stack: string[];
  github?: string;
  live?: string;
};

export const work: Work[] = [
  {
    slug: "taxitap",
    name: "TaxiTap",
    kind: "Capstone, team",
    year: "2025",
    summary: "A mobile app for South African minibus taxi commuters, built as the final-year capstone.",
    context:
      "TaxiTap was the University of Pretoria final-year capstone (COS 301): a team-built mobile app in React Native and Expo with a TypeScript backend on Convex.",
    action: [
      "Built proximity alerts that include an estimated time of arrival.",
      "Overhauled the alert system.",
      "Built a badge service.",
      "Built a multi-leg journey preview.",
      "Wrote automated tests in Jest, ran load and performance tests with k6 and JMeter, and wrote Python test scripts.",
      "Wrote project documents, and worked in Git with shared responsibility for delivery.",
    ],
    result:
      "Commuters see when a taxi is close and how long it will take, and can preview a journey with more than one leg before they set off.",
    stack: ["React Native", "Expo", "TypeScript", "Convex", "Jest", "k6", "JMeter"],
    github: "https://github.com/COS301-SE-2025/TaxiTap.git",
  },
  {
    slug: "jse-portfolio-tracker",
    name: "JSE Portfolio Tracker",
    kind: "Personal project",
    year: "2026",
    summary: "A Flask web app that tracks share portfolios with live JSE prices.",
    context:
      "I wanted a simple, locally stored view of selected Johannesburg Stock Exchange shares and the trades I make in them, priced with real market data from the yfinance API.",
    action: [
      "Designed a four-table relational database: portfolios, transactions, price history and sectors.",
      "Built create, read, update and delete routes for transactions, with input validation and a check that stops a sale from exceeding the shares held.",
      "Calculated holdings, average cost, gain or loss, and sector diversification.",
      "Fixed JSE prices being quoted in cents instead of rand.",
      "Wrote automated tests with pytest and set up a CI/CD workflow that runs them on every change.",
    ],
    result:
      "A working tracker for holdings, value and portfolio composition over time, with tests that run on every push.",
    stack: ["Python", "Flask", "SQLite", "yfinance", "pytest", "CI/CD"],
    github: "https://github.com/unathi3/jse-portfolio-tracker",
  },
  {
    slug: "bst-lesson-app",
    name: "BST Lesson App",
    kind: "Honours, team",
    year: "2026",
    summary: "A pre-lecture app that teaches binary search trees to first-time learners.",
    context:
      "For COS 750 (Honours), a four-person coding team built an app that teaches binary search trees to second-year students with no prior knowledge, through five lessons and a final test. I owned the visualiser and accessibility.",
    action: [
      "Built the tree drawing and the animation player that steps through each operation.",
      "Built screen-reader support, keyboard use and the settings.",
      "Built the lesson and final-test screens.",
      "Fixed the narration so playback waits for each caption.",
      "Wrote the accessibility requirements in the software engineering document, and co-presented the live demo.",
    ],
    result:
      "A lesson app that works by keyboard and screen reader, with click alternatives to dragging, reduced motion, and colour never the only signal.",
    stack: ["TypeScript", "Vitest", "Accessibility (a11y)"],
  },
];

export const getWork = (slug: string) => work.find((w) => w.slug === slug);
