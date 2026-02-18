import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Features } from '@/components/Features';
import { EpisodePreview } from '@/components/EpisodePreview';
import { Footer } from '@/components/Footer';

function App() {
    return (
        <div className="bg-background min-h-screen text-foreground font-lato selection:bg-[#D4AF37]/30">
            <Navbar />
            <main>
                <Hero />
                <div id="features">
                    <Features />
                </div>
                <div id="episode">
                    <EpisodePreview />
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default App
