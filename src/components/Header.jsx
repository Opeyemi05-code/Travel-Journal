import whiteGlobe from "../assets/white-globe-removebg-preview.png"

export default function Header() {
  return (
    <header className="header">
      <img src={whiteGlobe} alt="globe-icon" />
      <h3>my travel journal.</h3>
    </header>
  )
}