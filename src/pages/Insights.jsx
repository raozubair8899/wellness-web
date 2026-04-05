import { useState, useEffect } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import { useFocus } from '../context/FocusContext'

const dummyArticles = [
  {
    id: 1,
    category: "Neuroscience",
    title: "The Architecture of Deep Work",
    excerpt: "How redesigning your digital environment actually rewires your neural pathways for sustained concentration.",
    content: "When we eliminate distractions, the brain enters a state of 'flow', a period of heightened concentration and reduced self-awareness. Modern interfaces pull us out of this state constantly through notifications and complex visual hierarchies. By applying the principles of digital minimalism, we restore the brain's default, natural state of prolonged, effortless focus.",
    date: "Oct 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 2,
    category: "Productivity",
    title: "Dopamine Fasting in the Modern Era",
    excerpt: "Why the occasional disconnect from high-stimulus technology is essential for long-term creative output.",
    content: "The constant barrage of high-stimulus digital input desensitizes our dopamine receptors. What we call 'boredom' is actually a necessary reset for our neurological baseline. A deliberate disconnect—a dopamine fast—allows our minds to find joy and engagement in complex, slow-reward tasks that we otherwise find tedious.",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 3,
    category: "Design",
    title: "Aesthetics and Cognitive Load",
    excerpt: "Exploring the invisible link between minimalist interfaces and reduced mental fatigue during complex tasks.",
    content: "Every pixel on a screen requires a fraction of cognitive processing power. When interfaces are cluttered, our working memory is taxed before we even begin our actual work. Minimalist design is not just an aesthetic choice; it is an ergonomic necessity for digital tools. Doing less, but better, is the key to preventing user burnout.",
    date: "Sep 15, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507120410856-1f35574c3b45?q=80&w=1000&auto=format&fit=crop"
  },
  {
    id: 4,
    category: "Wellness",
    title: "Cultivating Silent Margins",
    excerpt: "The importance of empty space in your calendar—and how to fiercely protect it against the culture of busy.",
    content: "A life scheduled baseline-to-baseline has no room for serendipity or deep reflection. 'Silent margins' are intentionally unstructured blocks of time where nothing is required of you. These margins act as a buffer against the pervasive culture of performative busyness, becoming the soil in which your best ideas silently take root.",
    date: "Aug 30, 2026",
    readTime: "10 min read",
    image: "https://images.unsplash.com/photo-1447703693928-1cd341271b05?q=80&w=1000&auto=format&fit=crop"
  },
]

export default function Insights() {
  const [activeArticleId, setActiveArticleId] = useState(null)
  const { toggleFocusMode } = useFocus()

  // Lock scroll when article is open
  useEffect(() => {
    if (activeArticleId !== null) {
      document.body.style.overflow = 'hidden'
      // Enter focus mode when reading
      toggleFocusMode()
    } else {
      document.body.style.overflow = 'auto'
      // We don't automatically exit focus mode here to let the user keep it if they want
    }
  }, [activeArticleId])

  const activeArticle = dummyArticles.find(a => a.id === activeArticleId)

  return (
    <div className="pt-32 pb-24 min-h-screen relative">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="mb-20 animate-fade-in-up">
          <p className="text-white/60 text-sm md:text-base uppercase tracking-[0.4em] mb-4 font-medium drop-shadow-md">Insights</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 drop-shadow-lg">
            Thoughts on RestNetd living.
          </h1>
          <p className="text-white/80 text-xl max-w-2xl font-light drop-shadow-md leading-relaxed">
            Curated essays on focus, digital minimalism, and the pursuit of cognitive clarity.
          </p>
        </div>

        {/* Feature Article (First one visually hardcoded for design) */}
        {!activeArticleId && (
          <div 
            onClick={() => setActiveArticleId(dummyArticles[0].id)}
            className="mb-12 group cursor-pointer block animate-fade-in-up" 
            style={{ animationDelay: '100ms' }}
          >
            <div className="bg-white/[0.03] border border-white/10 rounded-[2rem] hover:bg-white/[0.06] transition-all duration-500 relative overflow-hidden flex flex-col md:flex-row shadow-[0_8px_40px_rgba(255,255,255,0.02)] hover:shadow-[0_8px_60px_rgba(255,255,255,0.05)]">
              {/* Image side */}
              <div className="w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                <img 
                  src={dummyArticles[0].image} 
                  alt={dummyArticles[0].title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Content side */}
              <div className="p-8 md:p-14 w-full md:w-3/5 relative">
                <div className="absolute top-0 right-0 p-8 opacity-0 translate-x-4 -translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500">
                  <ArrowUpRight className="w-8 h-8 text-white/50" />
                </div>
                <span className="inline-block px-4 py-1.5 rounded-full border border-white/30 text-white text-xs uppercase tracking-widest mb-6 font-medium">
                  Featured Insight
                </span>
                <h2 className="text-4xl md:text-5xl font-light text-white mb-6 group-hover:text-white/90 transition-colors drop-shadow-md">
                  {dummyArticles[0].title}
                </h2>
                <p className="text-white/70 text-lg md:text-xl max-w-2xl mb-8 leading-relaxed font-light drop-shadow-sm">
                  {dummyArticles[0].excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/60 text-sm font-medium uppercase tracking-widest">
                  <span>{dummyArticles[0].date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/40" />
                  <span>{dummyArticles[0].readTime}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Grid of articles */}
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-500 ${activeArticleId ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          {dummyArticles.slice(1).map((article, idx) => (
            <div 
              key={article.id} 
              onClick={() => setActiveArticleId(article.id)}
              className="group cursor-pointer bg-white/[0.02] border border-white/10 rounded-3xl overflow-hidden hover:-translate-y-2 hover:border-white/30 hover:shadow-[0_8px_40px_rgba(255,255,255,0.05)] transition-all duration-500 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${200 + (idx * 50)}ms` }}
            >
              <div className="h-60 overflow-hidden relative">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                  <span className="text-white/90 text-xs font-semibold uppercase tracking-widest drop-shadow-md">{article.category}</span>
                  <ArrowUpRight className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" />
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-medium text-white mb-4 group-hover:text-white/90 drop-shadow-md leading-snug">{article.title}</h3>
                <p className="text-white/70 text-base leading-relaxed mb-8 font-light flex-grow">
                  {article.excerpt}
                </p>
                <div className="flex items-center gap-4 text-white/50 text-xs font-medium uppercase tracking-widest">
                  <span>{article.date}</span>
                  <span className="w-1 h-1 rounded-full bg-white/30" />
                  <span>{article.readTime}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- Deep Work Distraction-Free Reading View --- */}
      {/* Keeping previous distraction-free code mostly identical, just updating typography for readability */}
      <div 
        className={`fixed inset-0 z-[100] bg-black transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] overflow-y-auto ${
          activeArticleId ? 'translate-y-0 opacity-100 pointer-events-auto' : 'translate-y-[100vh] opacity-0 pointer-events-none'
        }`}
      >
        {activeArticle && (
          <div className="max-w-4xl mx-auto px-6 py-24 min-h-screen flex flex-col items-center">
            
            <button 
              onClick={() => {
                setActiveArticleId(null)
                toggleFocusMode() // Disable focus mode when leaving reading view
              }}
              className="fixed top-8 right-8 z-[110] w-14 h-14 bg-white/10 hover:bg-white/20 border border-white/20 rounded-full flex items-center justify-center text-white hover:text-black transition-all backdrop-blur-md"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Cinematic Article Hero inside Distraction-Free View */}
            <div className="w-full h-[40vh] md:h-[50vh] rounded-3xl mb-16 relative overflow-hidden shadow-2xl">
              <img src={activeArticle.image} alt={activeArticle.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white/40 uppercase tracking-[0.5em] text-sm md:text-base z-10 font-medium">
                  Distraction-Free Mode
                </div>
              </div>
            </div>

            <div className="w-full max-w-3xl px-4 animate-fade-in-up" style={{ animationDelay: '300ms' }}>
              <div className="flex items-center justify-center gap-4 text-white/60 text-sm tracking-widest uppercase mb-10 font-medium">
                <span>{activeArticle.category}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{activeArticle.date}</span>
              </div>
              
              <h1 className="text-5xl md:text-6xl lg:text-[5rem] font-light tracking-tight text-white mb-16 leading-[1.1] text-center drop-shadow-xl">
                {activeArticle.title}
              </h1>

              <div className="w-24 h-px bg-white/30 mx-auto mb-16" />

              <div className="prose prose-invert prose-p:text-white/80 prose-p:font-light prose-p:leading-[2.2] prose-p:text-xl max-w-none">
                <p className="lead text-white text-2xl font-light leading-relaxed mb-10">
                  {activeArticle.excerpt}
                </p>
                <p>
                  {activeArticle.content}
                </p>
                <p>
                  <em>Note: This is a placeholder insight meant to demonstrate the distraction-free "Deep Work" reading mode engineered for the RestNet portfolio. Observe the removal of global site navigation and sidebars.</em>
                </p>
              </div>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}
