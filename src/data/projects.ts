export type Project = {
  name: string
  category: string
  description: string
  summary: string
  stack: string[]
  github: string
  demo?: string
  image?: string
  imageAlt: string
  accent: string
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: 'SmartSearch',
    category: 'Full-stack search platform',
    summary:
      'Search and discovery platform for structured information, with baseline text search, Atlas Search, fuzzy matching and analytics.',
    description:
      'Full-stack search and discovery platform featuring baseline MongoDB text search, Atlas Search, fuzzy matching, autocomplete, filtering, facets and analytics.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas Search'],
    github: 'https://github.com/TariqH19/smartsearch',
    demo: 'https://smartsearch-frontend.vercel.app/',
    image: 'https://image-upload-example2.s3.eu-west-1.amazonaws.com/smartsearch.jpg',
    imageAlt: 'SmartSearch product interface and search experience',
    accent: 'smartsearch',
    featured: true,
  },
  {
    name: 'PayBridge',
    category: 'Single-merchant commerce platform',
    summary:
      'Commerce workflow covering catalogues, carts, order creation, Stripe Checkout and reconciliation for a payment experience.',
    description:
      'Single-merchant commerce and payment application covering product catalogues, carts, order creation, Stripe Checkout, signed webhooks, payment reconciliation, refunds and operational analytics.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB Atlas', 'Stripe'],
    github: 'https://github.com/TariqH19/paybridge',
    demo: 'https://paybridgefrontend-nine.vercel.app/',
    image: 'https://image-upload-example2.s3.eu-west-1.amazonaws.com/paybridge.jpg',
    imageAlt: 'PayBridge checkout and commerce dashboard',
    accent: 'paybridge',
    featured: true,
  },
  {
    name: 'PayPal Integration Work',
    category: 'Payment integration demonstrations',
    summary:
      'Practical integration work around payment workflows, implementation patterns and technical troubleshooting for real-world use cases.',
    description:
      'Practical payment API integrations and demonstrations, covering payment workflows, integration patterns and technical implementation.',
    stack: ['Node.js', 'Express', 'EJS', 'PayPal APIs', 'Braintree'],
    github: 'https://github.com/TariqH19/advanced-integration',
    demo: 'https://advanced-integration.vercel.app/',
    image: 'https://image-upload-example2.s3.eu-west-1.amazonaws.com/ppint.jpg',
    imageAlt: 'PayPal integration work diagram and payment flow overview',
    accent: 'paypal',
    featured: true,
  },
  {
    name: 'Image Classification',
    category: 'Machine learning / CNN',
    summary:
      'Convolutional neural network project for classifying Tom and Jerry images from a Kaggle dataset.',
    description:
      'A convolutional neural network project for classifying Tom and Jerry images using a Kaggle dataset.',
    stack: ['Python', 'Jupyter Notebook', 'CNN', 'Kaggle dataset'],
    github: 'https://github.com/TariqH19/image_classification',
    image: 'https://tariq-horan.vercel.app/static/media/t%26j.83a3639e472374f87cf1.png',
    imageAlt: 'Tom and Jerry image classification dataset preview',
    accent: 'classification',
  },
  {
    name: 'Diabetes Prediction',
    category: 'Machine learning / prediction',
    summary:
      'Logistic regression model for predicting diabetes outcomes from a structured dataset.',
    description:
      'A machine learning project using logistic regression to predict diabetes outcomes from a dataset.',
    stack: ['Python', 'Jupyter Notebook', 'Logistic Regression'],
    github: 'https://github.com/TariqH19/diabetes_lg',
    image: 'https://tariq-horan.vercel.app/static/media/diabetes.454874c277b6ada09610.png',
    imageAlt: 'Diabetes prediction model result and data summary',
    accent: 'diabetes',
  },
  {
    name: 'Spatial Data Analysis',
    category: 'Spatial visualisation',
    summary:
      'A spatial data visualisation project exploring holiday patterns across Ireland using interactive maps and analysis.',
    description:
      'A spatial data visualisation project exploring holiday patterns across Ireland.',
    stack: ['Tableau', 'Data Visualisation', 'Spatial Analysis'],
    github: 'https://github.com/TariqH19/dataViz',
    image: 'https://tariq-horan.vercel.app/static/media/spatial.4e56dff8aeeb6a93e14b.png',
    imageAlt: 'Spatial holiday pattern analysis for Ireland',
    accent: 'spatial',
  },
]
