import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  image: string;
  published_at: string;
  read_time: string;
  slug: string;
}

const Blog: React.FC = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const { data, error } = await supabase
          .from('blog_posts')
          .select('id, title, slug, excerpt, category, image, read_time, published_at')
          .eq('published', true)
          .order('published_at', { ascending: false })
          .limit(4);

        if (error) throw error;

        setBlogPosts(data || []);
      } catch (err) {
        console.error('Error fetching blog posts:', err);
        setError('Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  if (loading) {
    return (
      <section id="blog" className="py-24 bg-[#161929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Latest Articles
            </h2>
          </div>
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center gap-4">
              <div className="w-12 h-12 border-4 border-indigo-500/30 border-t-indigo-500 rounded-full animate-spin" />
              <p className="text-gray-400">Loading articles...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="blog" className="py-24 bg-[#161929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Latest Articles
            </h2>
          </div>
          <div className="text-center py-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {error}
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (blogPosts.length === 0) {
    return (
      <section id="blog" className="py-24 bg-[#161929]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
              Blog
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
              Latest Articles
            </h2>
          </div>
          <div className="text-center py-20">
            <p className="text-gray-400">No articles published yet. Check back soon!</p>
          </div>
        </div>
      </section>
    );
  }

  const featuredPost = blogPosts[0];
  const otherPosts = blogPosts.slice(1);

  return (
    <section id="blog" className="py-24 bg-[#161929]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-medium rounded-full mb-4">
            Blog
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Latest Articles
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and insights on web development, design, and technology.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Featured Post */}
          <a
            href={`/blog/${featuredPost.slug}`}
            className="group relative bg-[#1e2340] rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1e2340] via-[#1e2340]/50 to-transparent" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="px-3 py-1 bg-indigo-600/90 text-white text-xs font-medium rounded-full">
                  {featuredPost.category}
                </span>
                <span className="text-gray-400 text-sm">{formatDate(featuredPost.published_at)}</span>
                <span className="text-gray-400 text-sm">{featuredPost.read_time}</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                {featuredPost.title}
              </h3>
              <p className="text-gray-300 line-clamp-2">{featuredPost.excerpt}</p>
              <div className="flex items-center gap-2 mt-4 text-indigo-400 font-medium">
                Read Article
                <svg
                  className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </a>

          {/* Other Posts */}
          <div className="space-y-6">
            {otherPosts.map((post) => (
              <a
                key={post.id}
                href={`/blog/${post.slug}`}
                className="group flex gap-6 bg-[#1e2340] rounded-2xl p-4 hover:bg-[#232848] transition-all duration-300"
              >
                <div className="flex-shrink-0 w-32 h-24 sm:w-40 sm:h-28 rounded-xl overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="px-2 py-0.5 bg-indigo-500/10 text-indigo-400 text-xs font-medium rounded">
                      {post.category}
                    </span>
                    <span className="text-gray-500 text-xs">{post.read_time}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-indigo-400 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-400 text-sm line-clamp-2 hidden sm:block">
                    {post.excerpt}
                  </p>
                  <span className="text-gray-500 text-xs mt-2 block">{formatDate(post.published_at)}</span>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <a
            href="/blog"
            className="group inline-flex items-center gap-2 px-8 py-4 border border-gray-600 hover:border-indigo-500 text-white font-semibold rounded-xl transition-all duration-300 hover:bg-indigo-500/10"
          >
            View All Articles
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
