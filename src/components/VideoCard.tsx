import { motion } from "framer-motion";
import { Play, X } from "lucide-react";
import { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface VideoCardProps {
  title: string;
  thumbnail: string;
  videoUrl?: string;
  index: number;
}

const VideoCard = ({ title, thumbnail, videoUrl, index }: VideoCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const getEmbedUrl = (url: string) => {
    const youtubeMatch = url.match(/(?:youtube\.com\/(?:watch\?v=|embed\/)|youtu\.be\/)([^&?/]+)/);
    if (youtubeMatch) {
      return `https://www.youtube.com/embed/${youtubeMatch[1]}?autoplay=1&rel=0`;
    }
    return url;
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6, delay: index * 0.15 }}
        className="group relative aspect-video overflow-hidden rounded-sm cursor-pointer"
        onClick={() => videoUrl && setIsOpen(true)}
      >
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/40 transition-all duration-500" />
        
        {/* Play button overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-400">
          <div className="w-16 h-16 rounded-full bg-foreground/20 backdrop-blur-sm flex items-center justify-center border border-foreground/30">
            <Play className="w-6 h-6 text-foreground ml-1" />
          </div>
        </div>
        
        {/* Title at bottom */}
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <p className="text-sm font-medium text-foreground tracking-wide">{title}</p>
        </div>
      </motion.div>

      <Dialog.Root open={isOpen} onOpenChange={setIsOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
          <Dialog.Content className="fixed left-[50%] top-[50%] z-50 w-full max-w-5xl translate-x-[-50%] translate-y-[-50%] p-4 duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] outline-none">
            <div className="relative aspect-video w-full bg-black rounded-lg overflow-hidden shadow-2xl border border-white/10">
              <Dialog.Close className="absolute top-4 right-4 z-50 p-2 bg-black/50 hover:bg-black/70 text-white rounded-full transition-colors backdrop-blur-sm">
                <X className="w-5 h-5" />
              </Dialog.Close>
              {videoUrl && (
                <iframe
                  src={getEmbedUrl(videoUrl)}
                  title={title}
                  className="w-full h-full"
                  style={{ border: "none" }}
                  allow="autoplay; encrypted-media; fullscreen"
                  allowFullScreen
                />
              )}
            </div>
            <div className="mt-4 text-white">
              <Dialog.Title className="text-xl font-medium tracking-wide">{title}</Dialog.Title>
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};

export default VideoCard;
