import { useEffect, useState } from "react";
import Nasgun from "@assets/images/nasgun.png";
import Avatar from "@assets/images/avatar.jpg";
import Background from "@assets/images/bg.png";

import Icon from "@assets/images/logo.png";
import ProfileCard from "@common/ProfileCard";
import ParallaxBackground from "@parallax/ParallaxBackground";
import ParallaxObjects from "@components/parallax/ParallaxObjects";
import AnimatedContent from "@hooks/AnimatedContent";

export default function Hero() {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen w-full flex items-center justify-center text-white px-6 relative overflow-hidden md:px-12 lg:px-24"
    >
      {/* Radial gradient background — versi subtle */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, #1e1e1e, #000000)",
        }}
      ></div>

      <ParallaxBackground
        offsetY={offsetY}
        imageUrl={Background}
        speed={0.5}
        opacity={0.15}
      />

      <ParallaxObjects />

      {/* Konten utama */}
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center z-10 md:gap-16 lg:gap-32">
        {/* Profile Card */}
        <AnimatedContent direction="horizontal" reverse={true}>
          <div className="flex-shrink-0 flex justify-center mb-8 md:mb-0">
            <ProfileCard
              name="Nasrullah Gunawan"
              title="Informations System Student"
              handle="nasgunawann"
              status="Online"
              contactText="Contact"
              avatarUrl={Nasgun}
              miniAvatarUrl={Avatar}
              iconUrl={Icon}
              showUserInfo={true}
              enableTilt={true}
              behindGradient="radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.1))"
              innerGradient="radial-gradient(circle at 50% 50%, #3d3d3d, #000000)"
              enableMobileTilt={false}
              onContactClick={() =>
                window.open("https://wa.me/6281265945954", "_blank")
              }
            />
          </div>
        </AnimatedContent>

        {/* Konten teks */}
        <AnimatedContent direction="horizontal">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold mb-4 text-yellow-300 drop-shadow-[0_0_10px_#fdc700] md:drop-shadow-[0_0_20px_#fdc700]">
              HELLO,WORLD!
            </h1>

            <h2 className="text-xl md:text-3xl mb-4 text-white drop-shadow-[0_0_5px_#ffffff] md:drop-shadow-[0_0_5px_#ffffff]">
              I’m <span className="font-bold">Nasrullah Gunawan</span>.
            </h2>

            <p className="text-gray-300 mb-6 md:text-xl">
              Informations System Student | Web Developer | Graphic Designer |
              Freelancer
            </p>

            {/* Sosial media */}
            <div className="flex gap-6 justify-center md:justify-start flex-wrap">
              <AnimatedContent delay={0.2}>
                <a
                  href="https://github.com/Nasgunawann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <i className="hn hn-github text-4xl"></i>
                  Nasgunawann
                </a>
              </AnimatedContent>
              <AnimatedContent delay={0.4}>
                <a
                  href="https://instagram.com/nasgunawann"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <i className="hn hn-instagram text-4xl"></i>
                  @nasgunawann
                </a>
              </AnimatedContent>
              <AnimatedContent delay={0.6}>
                <a
                  href="https://nanasgunung.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-yellow-400"
                >
                  <i className="hn hn-globe text-4xl"></i>
                  nanasgunung.com
                </a>
              </AnimatedContent>
            </div>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
