import { AboutPreview } from './components/AboutPreview'
import { FeaturedWork } from './components/FeaturedWork'
import { Hero } from './components/Hero'
import { SiteFooter } from './components/SiteFooter'
import { SiteHeader } from './components/SiteHeader'
import { projects } from './data/projects'

function App() {
  return (
    <div className="page-shell">
      <SiteHeader />

      <main>
        <Hero />
        <FeaturedWork projects={projects} />
        <AboutPreview />
      </main>

      <SiteFooter />
    </div>
  )
}

export default App
