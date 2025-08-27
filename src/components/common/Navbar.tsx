import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const sections = ["home", "about", "skills", "projects", "contacts"];

    const handleScroll = () => {
      const scrollY = window.scrollY;
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const offsetTop = el.offsetTop;
          const offsetHeight = el.offsetHeight;
          if (
            scrollY >= offsetTop - 100 &&
            scrollY < offsetTop + offsetHeight - 100
          ) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id: string) =>
    `relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-green-400 after:bottom-0 after:left-0 after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      activeSection === id
        ? "text-green-400 drop-shadow-[0_0_6px_#22c55e]"
        : "text-gray-300"
    }`;

  return (
    <header className="fixed text-nowrap py-4 bg-transparent md:bg-black/35 z-50 font-header md:backdrop-blur-sm top-5 left-1/2 -translate-x-1/2 max-w-6xl rounded-full px-4 w-fit mx-auto">
      <div className="flex items-center justify-between px-6 md:justify-center">
        <nav
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-x-8 font-header text-sm md:justify-center`}
        >
          <a href="#home" className={linkClass("home")} onClick={toggleMenu}>
            HOME
          </a>
          <a href="#about" className={linkClass("about")} onClick={toggleMenu}>
            ABOUT ME
          </a>
          <a
            href="#skills"
            className={linkClass("skills")}
            onClick={toggleMenu}
          >
            SKILLS
          </a>
          <a
            href="#projects"
            className={linkClass("projects")}
            onClick={toggleMenu}
          >
            PROJECTS
          </a>
          <a
            href="#contacts"
            className={linkClass("contacts")}
            onClick={toggleMenu}
          >
            CONTACT ME
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
