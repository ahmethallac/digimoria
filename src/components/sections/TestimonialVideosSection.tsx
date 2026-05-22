import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const videos = [
  {
    id: "fF7OOjsOb0A",
  },
  {
    id: "luCNAgnGX-s",
  },
  {
    id: "H8vAskJQLDc",
  },
  {
    id: "YVBpkkKyL5o",
  },
];

const srcdocTemplate = (id: string) => `
<style>
  *{padding:0;margin:0;overflow:hidden}
  html,body{height:100%;background:#08050f}
  img{position:absolute;width:100%;height:100%;object-fit:cover;filter:saturate(1.05) contrast(1.05);opacity:.9}
  .shade{position:absolute;inset:0;background:linear-gradient(135deg,rgba(10,6,19,.35),rgba(139,45,242,.2))}
  .play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:68px;height:68px;background:rgba(139,45,242,.9);border:1px solid rgba(255,255,255,.25);border-radius:999px;cursor:pointer;display:flex;align-items:center;justify-content:center;box-shadow:0 0 34px rgba(139,45,242,.55)}
  .play svg{fill:#fff;width:25px;height:25px;margin-left:4px}
</style>
<a href="https://www.youtube.com/embed/${id}?autoplay=1">
  <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Video thumbnail">
  <div class="shade"></div>
  <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
</a>`;

const TestimonialVideosSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative w-full overflow-hidden bg-[#0a0613] py-14 text-white md:py-20">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(139,45,242,0.13)_0%,_transparent_58%)]" />
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10 w-full px-4 lg:px-8`}>
        <div className="mx-auto grid w-full max-w-[1480px] grid-cols-1 gap-5 md:grid-cols-2">
          {videos.map((video, index) => (
            <motion.article
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.12, duration: 0.5 }}
              className="group overflow-hidden rounded-3xl border border-white/10 bg-white/[0.045] shadow-[0_24px_70px_rgba(0,0,0,0.24)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <iframe
                  className="absolute inset-0 h-full w-full"
                  loading="lazy"
                  srcDoc={srcdocTemplate(video.id)}
                  title={`Client review ${index + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
                <div className="pointer-events-none absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/45 px-3 py-1.5 text-xs text-white backdrop-blur">
                  <Play className="size-3" aria-hidden="true" />
                  Client Review
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideosSection;
