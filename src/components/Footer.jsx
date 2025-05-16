const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-4">
      <div className="container mx-auto px-6 text-center md:text-left">
        <p className="text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Dubbanaboina Vasu. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer

