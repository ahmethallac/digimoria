import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const videos = [
  { id: "fF7OOjsOb0A" },
  { id: "luCNAgnGX-s" },
  { id: "H8vAskJQLDc" },
  { id: "YVBpkkKyL5o" },
];

const srcdocTemplate = (id: string) => `
<style>
  *{padding:0;margin:0;overflow:hidden}
  html,body{height:100%;background:#000}
  img{position:absolute;width:100%;top:0;bottom:0;margin:auto}
  .play{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:68px;height:48px;background:rgba(0,0,0,.7);border-radius:14px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .2s}
  .play:hover{background:red}
  .play svg{fill:#fff;width:24px;height:24px}
</style>
<a href="https://www.youtube.com/embed/${id}?autoplay=1">
  <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg" alt="Video thumbnail">
  <div class="play"><svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></div>
</a>`;

const TestimonialVideosSection = () => {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="relative py-16 md:py-24">
      <div ref={ref} className={`reveal ${revealed ? "revealed" : ""} relative z-10`}>
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-4xl font-bold font-display">
            <span className="bg-gradient-to-r from-primary to-neon-blue bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>
          <p className="text-sm text-muted-foreground mt-2 max-w-md mx-auto">
            Real results from real businesses using DigiMoria
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {videos.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              animate={revealed ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 * i, duration: 0.5 }}
              className="group glass-strong rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300"
              style={{ boxShadow: "0 0 30px hsla(270, 80%, 55%, 0.06)" }}
            >
              <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
                <iframe
                  className="absolute inset-0 w-full h-full"
                  loading="lazy"
                  srcDoc={srcdocTemplate(video.id)}
                  title={`Client review ${i + 1}`}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialVideosSection;
