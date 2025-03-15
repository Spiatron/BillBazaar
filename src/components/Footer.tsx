import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="w-full flex items-center justify-center py-3">
    <Link
      className="flex items-center gap-1 text-current"
      to={{ pathname: "https://heroui.com" }}
      target="_blank"
      rel="noopener noreferrer"
      title="heroui.com homepage"
    >
      <span className="text-default-600">Powered by</span>
      <p className="text-primary">HeroUI</p>
    </Link>
  </footer>
  )
}

export default Footer