export default function Footer() {
  return (
    <footer className="w-full py-6 text-center border-t border-neutral-800 bg-neutral-950">
      <a
        href="https://internship-badge.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block hover:opacity-80 transition-opacity"
      >
        <img
          src="https://internship-badge.netlify.app/"
          alt="FlyRank Graduate Badge"
          className="h-10 mx-auto"
        />
      </a>
    </footer>
  );
}
