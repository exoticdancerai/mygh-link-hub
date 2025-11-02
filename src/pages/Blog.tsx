import { SocialLinks } from "@/components/SocialLinks";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Card } from "@/components/ui/card";

const Blog = () => {
  const posts = [
    {
      title: "Introducing Anthem250: A New Era of Digital Patriotism",
      date: "January 15, 2025",
      excerpt: "We're excited to announce Anthem250, the first-ever National Anthem NFT project commemorating America's 250th anniversary.",
      image: "https://images.unsplash.com/photo-1531981209690-438e0eb3b917?w=800&h=400&fit=crop",
    },
    {
      title: "Why Solana? Our Technology Choice Explained",
      date: "January 10, 2025",
      excerpt: "Learn why we chose Solana blockchain for Anthem250 and how it benefits our community.",
      image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=400&fit=crop",
    },
    {
      title: "Meet Hannah Magnelli: The Voice Behind Anthem250",
      date: "January 5, 2025",
      excerpt: "Get to know the talented artist whose beautiful rendition of The Star-Spangled Banner is at the heart of our project.",
      image: "https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=800&h=400&fit=crop",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SocialLinks />
      <Navbar />
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center">Blog</h1>
            
            <p className="text-xl text-muted-foreground mb-12 text-center">
              Latest updates and insights from the Anthem250 team
            </p>
            
            <div className="space-y-8">
              {posts.map((post, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-48 md:h-full object-cover"
                      />
                    </div>
                    <div className="p-6 md:w-2/3">
                      <p className="text-sm text-muted-foreground mb-2">{post.date}</p>
                      <h2 className="text-2xl font-bold mb-3">{post.title}</h2>
                      <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                      <a href="#" className="text-primary font-semibold hover:underline">
                        Read more →
                      </a>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
