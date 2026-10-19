// Logo asset variants (one per theme)
import logoDark from "../assets/logo-dark.svg";
import logoLight from "../assets/logo-light.svg";

// Renders the logo that matches the given theme.
// Props: theme ("dark" or anything else for light), className (currently unused)
export default function Logo({ theme, className }) {
  // Dark theme: use the dark logo variant
  if (theme === "dark") {
    return (
      <>
        <img className={className} src={logoDark} alt="Dark theme logo" />
      </>
    );
  }

  // Default: light logo variant
  return (
    <>
      <img className={className} src={logoLight} alt="Light theme logo" />
    </>
  );
}
