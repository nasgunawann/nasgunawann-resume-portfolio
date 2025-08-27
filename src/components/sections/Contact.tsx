import Background from "@assets/images/bg3.png";

export default function Contact() {
  return (
    <section
      className="relative overflow-hidden px-6 py-24 md:px-12 lg:px-24 text-white flex flex-col items-center gap-10 z-10"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundSize: " cover",
        backgroundPosition: "center",
      }}
    >
      <h2 className="text-4xl md:text-5xl font-extrabold text-yellow-400 drop-shadow-[0_0_12px_#ffdf20] text-center">
        LET'S BUILD SOMETHING COOL!
      </h2>

      <p className="text-white/80 text-lg max-w-2xl text-center leading-relaxed">
        Have an idea in mind, need a website, or just want to collaborate? I’m
        open to freelance projects, creative partnerships, and new
        opportunities. Let’s make it happen together.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 mt-4 text-center">
        <a
          href="mailto:nasgunawann@gmail.com?subject=Let’s Work Together"
          className="inline-block bg-yellow-400 text-black font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all duration-300 drop-shadow-[0_0_8px_#ffdf20] hover:scale-105"
        >
          Contact Me
        </a>
        <a
          href="mailto:nasgunawann@gmail.com"
          className="inline-block border border-yellow-400 text-yellow-400 font-semibold px-8 py-4 rounded-full hover:bg-yellow-400/20 transition-all duration-300"
        >
          Get My Resume
        </a>
      </div>

      <div className=" flex flex-wrap justify-center gap-6 text-white/60 text-m">
        <a
          href="https://github.com/nasgunawann"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-200"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/nasgunawan"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-yellow-300 transition duration-200"
        >
          LinkedIn
        </a>
        <a
          href="https://instagram.com/nasgunawann"
          className="hover:text-yellow-300 transition duration-200"
        >
          Instagram
        </a>
      </div>

      <span className="mt-6 text-m text-white/50">
        Available for freelance & collaborations
      </span>
    </section>
  );
}
