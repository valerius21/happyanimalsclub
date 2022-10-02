import { Facebook, Instagram, Menu, X } from "lucide-preact";
import type { FunctionComponent } from "preact";
import { useState } from "preact/hooks";

const Link: FunctionComponent<{ href: string; isHighlighted?: boolean }> = ({
  href,
  isHighlighted = false,
  children,
}) => (
  <a
    href={href}
    class={`mx-4 my-2 p-4 rounded-lg text-center uppercase ${
      isHighlighted
        ? "text-sand-1 bg-orange-9 font-bold"
        : "text-orange-12 bg-orange-3 font-semibold hover:bg-gray-100 hover:text-gray-900"
    }`}
  >
    {children}
  </a>
);

const Patreon: FunctionComponent = () => (
  <img src="/patreon.png" alt="Patreon" class="h-5 w-5" />
);

const SocialLink: FunctionComponent<{
  href: string;
  name: "instagram" | "facebook" | "patreon";
}> = ({ href, name }) => (
  <a
    rel="prefetch"
    href={href}
    class="bg-orange-4 p-6 rounded-xl"
    target="_blank"
  >
    {name == "instagram" ? (
      <Instagram class="h-5" />
    ) : name == "facebook" ? (
      <Facebook class="h-5" />
    ) : (
      <Patreon />
    )}
  </a>
);

export const MobileNav: FunctionComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const MenuButton = () => (
    <button
      class={`text-orange-12 mx-2 px-4 py-2 text-center hover:bg-orange-4 font-semibold rounded ${
        isOpen ? "bg-orange-5 border-2 border-orange-7" : ""
      }`}
      onClick={toggle}
    >
      {!isOpen ? <Menu class="h-6" /> : <X class="h-6" />}
    </button>
  );

  return (
    <div>
      <MenuButton />
      {isOpen && (
        <nav class="z-99 absolute top-[64px] left-0 h-[calc(100vh-64px)] bg-orange-1 w-screen">
          {/* <hr class="border-1 border-sand-11"></hr> */}
          <div class="flex flex-col" onClick={toggle}>
            <p class="text-start font-semibold text-sand-10 uppercase pl-5 my-5">
              Links
            </p>
            <Link href="/">Home</Link>
            <Link href="/donate" isHighlighted>
              Donate
            </Link>
            <Link href="/about">About</Link>
            <Link href="/faq">F.A.Q.</Link>
            <Link href="/contact">Contact</Link>
            <p class="text-start font-semibold text-sand-10 uppercase pl-5 my-5">
              Socials
            </p>
            <div class="flex flex-row w-full justify-around">
              <SocialLink
                href="https://instagram.com/happyanimalsclub"
                name="instagram"
              />
              <SocialLink
                href="https://www.facebook.com/happy.animals.club.animal.shelter/"
                name="facebook"
              />
              <SocialLink
                href="https://www.patreon.com/happyanimalsclub"
                name="patreon"
              />
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default MobileNav;
