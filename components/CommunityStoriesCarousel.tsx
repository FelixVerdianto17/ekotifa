'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface CommunityStory {
  id: string;
  title: string;
  slug: string;
  publishedDate: string;
  category: string;
  summary: string;
  imageUrl: string;
  sourceName: string;
  sourceUrl: string;
  status: string;
  isActive: boolean;
}

export default function CommunityStoriesCarousel({ stories }: { stories: CommunityStory[] }) {
  return (
    <div className="relative community-stories-carousel w-full">
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={32}
        slidesPerView={1}
        navigation
        watchOverflow={true}
        a11y={{
          prevSlideMessage: 'Previous story',
          nextSlideMessage: 'Next story',
        }}
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          // Tablet
          768: {
            slidesPerView: 2,
            spaceBetween: 32,
          },
          // Desktop
          1024: {
            slidesPerView: 3,
            spaceBetween: 32,
          },
        }}
        className="pb-16"
      >
        {stories.map((story) => (
          <SwiperSlide key={story.id} className="h-auto">
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm border border-zinc-100 transition-all hover:shadow-lg flex flex-col h-full group">
              <div className="relative aspect-[16/10] w-full bg-zinc-100 overflow-hidden">
                <Image
                  src={story.imageUrl || '/images/sections/journey-impact-home.webp'}
                  alt={story.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <time suppressHydrationWarning className="text-[11px] font-bold tracking-widest uppercase text-zinc-400 mb-4 block">
                  {new Date(story.publishedDate).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                </time>
                <h3 className="text-xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-[#F4CA44] transition-colors">
                  {story.title}
                </h3>
                <p className="text-sm text-zinc-600 mb-8 flex-grow line-clamp-4 leading-relaxed">
                  {story.summary}
                </p>
                <div className="flex items-center justify-between pt-5 border-t border-zinc-100 mt-auto">
                  <span className="text-xs font-semibold text-zinc-500">Source: {story.sourceName}</span>
                  <a 
                    href={story.sourceUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[#F4CA44] hover:text-yellow-700 transition-colors flex items-center gap-1.5 group/link"
                  >
                    Read More 
                    <svg className="w-4 h-4 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom styles to override default swiper theme to match premium clean look */}
      <style jsx global>{`
        .community-stories-carousel .swiper-button-next,
        .community-stories-carousel .swiper-button-prev {
          color: #18181b; /* zinc-900 (black) */
          background: #F4CA44; /* Ekotifa Gold */
          width: 48px;
          height: 48px;
          border-radius: 50%;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          transition: all 0.2s ease;
        }
        
        .community-stories-carousel .swiper-button-next:after,
        .community-stories-carousel .swiper-button-prev:after {
          font-size: 18px;
          font-weight: 900;
        }

        .community-stories-carousel .swiper-button-next:hover,
        .community-stories-carousel .swiper-button-prev:hover {
          background: #eab308; /* slightly darker gold on hover */
          transform: scale(1.05);
          box-shadow: 0 6px 20px rgba(0,0,0,0.15);
        }

        .community-stories-carousel .swiper-button-disabled {
          opacity: 0;
          visibility: hidden;
          cursor: not-allowed;
          transition: all 0.3s ease;
        }

        .community-stories-carousel .swiper-pagination-bullet {
          background: #d4d4d8; /* zinc-300 */
          opacity: 1;
        }

        .community-stories-carousel .swiper-pagination-bullet-active {
          background: #F4CA44; /* Ekotifa Gold */
          width: 24px;
          border-radius: 12px;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
