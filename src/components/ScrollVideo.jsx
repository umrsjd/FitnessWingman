import { useEffect, useRef } from 'react';

const ScrollVideo = () => {
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const container = containerRef.current;

    if (!video || !container) return;

    // Ensure video is loaded
    video.load();
    video.pause();

    const handleScroll = () => {
      if (!video || !container) return;

      // Get the container's position relative to viewport
      const rect = container.getBoundingClientRect();
      const { top, height } = rect;
      
      // Calculate scroll progress (0 to 1)
      const viewportHeight = window.innerHeight;
      const scrollProgress = 1 - (top + height) / (viewportHeight + height);
      const progress = Math.max(0, Math.min(1, scrollProgress));

      // Update video time based on scroll progress
      if (video.duration) {
        video.currentTime = progress * video.duration;
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);
    // Initial call to set video position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed top-1/2 right-8 -translate-y-1/2 w-80 h-48 rounded-lg overflow-hidden shadow-lg bg-black z-50"
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        playsInline
        muted
        preload="auto"
      >
        {/* Replace the source with your video URL */}
        <source src="src\assets\b24330e5fb1023702e092bf2cf830f79.mp4" type="video/mp4" />
        
      </video>
    </div>
  );
};

export default ScrollVideo;