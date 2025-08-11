"use client"

import { useState } from "react"

export default function HomePage() {
  const [isBannerClosed, setIsBannerClosed] = useState(false)
  const [isStatusModalOpen, setIsStatusModalOpen] = useState(false)

  const closeBanner = () => {
    setIsBannerClosed(true)
  }

  const goHome = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const showPlaceholderAlert = (message: string) => {
    alert(message)
  }

  const openSupport = () => {
    window.open("https://discord.gg/imperium", "_blank")
  }

  const openAffiliates = () => {
    alert(
      "🎉 Affiliates Program!\n\nEarn 30% commission on every sale!\n\nJoin our Discord and contact @admin to get started.\n\nMinimum payout: £10\nPayment methods: PayPal, Crypto",
    )
  }

  const openStatusModal = () => {
    setIsStatusModalOpen(true)
  }

  const closeStatusModal = () => {
    setIsStatusModalOpen(false)
  }

  const downloadCheat = () => {
    // IMPORTANT: Direct download from a Gofile.io *page* URL (like https://gofile.io/d/iN6bZP)
    // is not possible directly from client-side JavaScript due to browser security (CORS)
    // and the fact that it's an HTML page, not a direct file.
    // For a real download of your specific file, you would need a backend proxy
    // that fetches the file from Gofile.io and streams it to the user.

    // This simulates a direct download of a generic executable file.
    const element = document.createElement("a")
    const fileContent =
      "This is a demo file for your cheat download.\n\nIn a real scenario, this would be the actual executable or archive.\n\nThank you for using Imperium Services!"
    const file = new Blob([fileContent], { type: "application/octet-stream" }) // Use octet-stream for executable
    element.href = URL.createObjectURL(file)
    element.download = "Imperium_Cheat_v1.0.0.exe" // Name of the downloaded file
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)

    alert("✅ Download started!\n\nFile: Imperium_Cheat_v1.0.0.exe\nSize: ~2.5 MB\n\nCheck your downloads folder.")
  }

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-inter">
      {/* Pink Banner */}
      {!isBannerClosed && (
        <div className="relative bg-gradient-to-r from-[#e879f9] to-[#c084fc] text-black text-center py-2 text-sm font-medium flex items-center justify-center">
          <span className="banner-text">Need help? Join our Discord server!</span>
          <button className="absolute right-5 text-lg font-bold" onClick={closeBanner}>
            &times;
          </button>
        </div>
      )}

      {/* Navigation */}
      <nav className="bg-[#0a0a0a] py-5 border-b border-[#1a1a1a]">
        <div className="max-w-[1400px] mx-auto px-10 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer transition-transform duration-200 hover:scale-105"
            onClick={goHome}
          >
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 4L32 12L20 20L8 12L20 4Z" fill="#e879f9" />
              <path d="M8 16L20 24L32 16L20 24L8 16Z" fill="#c084fc" />
              <path d="M8 24L20 32L32 24L20 32L8 24Z" fill="#a855f7" />
            </svg>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-10">
            <a
              href="#"
              className="text-[#666666] hover:text-white text-base font-medium transition-colors duration-300"
              onClick={goHome}
            >
              Home
            </a>
            <a
              href="#"
              className="text-[#666666] hover:text-white text-base font-medium transition-colors duration-300"
              onClick={() =>
                showPlaceholderAlert(
                  'This is a static display. Please use the "Download Now" button for the main action!',
                )
              }
            >
              Products
            </a>
            <a
              href="#"
              className="text-[#666666] hover:text-white text-base font-medium transition-colors duration-300"
              onClick={() =>
                showPlaceholderAlert("Feedback system coming soon! For now, please join our Discord to share feedback.")
              }
            >
              Feedback
            </a>
            <a
              href="#"
              className="text-[#666666] hover:text-white text-base font-medium transition-colors duration-300"
              onClick={openStatusModal}
            >
              Status
            </a>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-5">
            <button
              className="bg-gradient-to-r from-[#e879f9] to-[#c084fc] text-black px-5 py-2 rounded-full text-sm font-semibold transition-transform duration-200 hover:-translate-y-px"
              onClick={openAffiliates}
            >
              Affiliates
            </button>
            <button
              className="text-white text-base font-medium transition-colors duration-300 hover:text-[#e879f9]"
              onClick={() =>
                showPlaceholderAlert(
                  "🔐 Login and registration are not available on this version. This is a direct download site.",
                )
              }
            >
              Login
            </button>
            <button
              className="text-white p-2 transition-colors duration-300 hover:text-[#e879f9]"
              onClick={() =>
                showPlaceholderAlert(
                  '🛒 Shopping cart is not available on this version. Please use the "Download Now" button.',
                )
              }
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-[1400px] mx-auto px-10">
        {/* Action Buttons */}
        <div className="flex justify-center space-x-5 my-10">
          <button
            className="bg-gradient-to-r from-[#e879f9] to-[#c084fc] text-black px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2 transition-transform duration-200 hover:-translate-y-px"
            onClick={downloadCheat}
          >
            <span>Download Now</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7,10 12,15 17,10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </button>
          <button
            className="bg-[#1a1a1a] text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center space-x-2 transition-colors duration-300 hover:bg-[#2a2a2a]"
            onClick={openSupport}
          >
            <span>Support</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
            </svg>
          </button>
        </div>

        {/* Elevate Badge */}
        <div className="flex justify-center my-16">
          <span className="bg-[#1a1a1a] text-white px-4 py-2 rounded-full text-sm font-medium">
            Elevate Your Experience ✨
          </span>
        </div>

        {/* Store Section (Visual only, no interaction) */}
        <section className="text-center mb-20">
          <h1 className="text-6xl font-extrabold text-white mb-5 tracking-tighter">Store</h1>
          <p className="text-lg text-[#666666] leading-relaxed mb-16">
            Browse our curated selection and offers, covering
            <br />
            everything you need.
          </p>

          {/* Products Grid (Static display) */}
          <div className="flex justify-center max-w-[1200px] mx-auto gap-8 flex-wrap">
            {/* Vector Product */}
            <div
              className="bg-[#111111] rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-glow"
              onClick={downloadCheat}
            >
              <div className="absolute top-4 right-4 bg-[#10b981] text-white px-3 py-1.5 rounded-xl text-xs font-semibold flex items-center space-x-1 z-10">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="3" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" />
                </svg>
                <span>Best Seller</span>
              </div>
              <div className="h-52 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#8b5cf6] to-[#6d28d9]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white opacity-80"
                  >
                    <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                    <path d="M12 6L6 12L12 18L18 12L12 6Z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-2xl font-extrabold text-white tracking-wider z-10">
                  VECTOR
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                  <span className="bg-black/30 text-white px-2 py-1 rounded-lg text-[10px] font-semibold uppercase backdrop-blur-sm">
                    External
                  </span>
                  <span className="bg-blue-500/30 text-white px-2 py-1 rounded-lg text-[10px] font-semibold uppercase backdrop-blur-sm">
                    Roblox
                  </span>
                </div>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Vector</h3>
                <div className="text-sm text-[#10b981] mb-4">In Stock</div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-sm text-[#666666]">Price</span>
                  <span className="text-base font-bold text-[#e879f9]">£0.99 - £9.99</span>
                  <span className="text-sm text-[#666666] line-through">£12.99</span>
                </div>
              </div>
              <button
                className="absolute top-1/2 right-5 -translate-y-1/2 bg-[#e879f9] text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={downloadCheat}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Fartsaken Product */}
            <div
              className="bg-[#111111] rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-glow"
              onClick={downloadCheat}
            >
              <div className="h-52 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#a855f7] to-[#7e22ce]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white opacity-80"
                  >
                    <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                    <path d="M12 6L6 12L12 18L18 12L12 6Z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-2xl font-extrabold text-white tracking-wider z-10">
                  FARTSAKEN
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                  <span className="bg-black/30 text-white px-2 py-1 rounded-lg text-[10px] font-semibold uppercase backdrop-blur-sm">
                    External
                  </span>
                  <span className="bg-blue-500/30 text-white px-2 py-1 rounded-lg text-[10px] font-semibold uppercase backdrop-blur-sm">
                    Roblox
                  </span>
                </div>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Fartsaken</h3>
                <div className="text-sm text-[#10b981] mb-4">3 Products</div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-sm text-[#666666]">Price</span>
                  <span className="text-base font-bold text-[#e879f9]">£1.20 - £8.49</span>
                </div>
              </div>
              <button
                className="absolute top-1/2 right-5 -translate-y-1/2 bg-[#e879f9] text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={downloadCheat}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>

            {/* Shadow Product */}
            <div
              className="bg-[#111111] rounded-2xl overflow-hidden relative cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-purple-glow"
              onClick={downloadCheat}
            >
              <div className="h-52 relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#c084fc] to-[#9333ea]">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                  <svg
                    width="80"
                    height="80"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-white opacity-80"
                  >
                    <path d="M12 2L2 12L12 22L22 12L12 2Z" />
                    <path d="M12 6L6 12L12 18L18 12L12 6Z" />
                  </svg>
                </div>
                <div className="absolute bottom-4 left-4 text-2xl font-extrabold text-white tracking-wider z-10">
                  SHADOW
                </div>
                <div className="absolute bottom-4 right-4 flex space-x-2 z-10">
                  <span className="bg-black/30 text-white px-2 py-1 rounded-lg text-[10px] font-semibold uppercase backdrop-blur-sm">
                    External
                  </span>
                  <span className="bg-blue-500/30 text-white px-2 py-1 rounded-lg text-[10px] font-semibold uppercase backdrop-blur-sm">
                    Roblox
                  </span>
                </div>
              </div>
              <div className="p-5 text-left">
                <h3 className="text-xl font-bold text-white mb-2">Shadow</h3>
                <div className="text-sm text-[#10b981] mb-4">In Stock</div>
                <div className="flex items-center space-x-2 flex-wrap">
                  <span className="text-sm text-[#666666]">Price</span>
                  <span className="text-base font-bold text-[#e879f9]">£1.29</span>
                  <span className="text-sm text-[#666666] line-through">£8.99</span>
                </div>
              </div>
              <button
                className="absolute top-1/2 right-5 -translate-y-1/2 bg-[#e879f9] text-black w-10 h-10 rounded-full flex items-center justify-center cursor-pointer transition-transform duration-200 hover:scale-110"
                onClick={downloadCheat}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Status Modal */}
      {isStatusModalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-[#111111] p-8 rounded-2xl border border-[#333333] w-[90%] max-w-md relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-4 right-5 text-[#666666] text-2xl font-bold hover:text-white transition-colors duration-300"
              onClick={closeStatusModal}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold text-white text-center mb-5">System Status</h2>
            <div className="grid gap-4">
              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-[#333333] rounded-lg p-4">
                <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Website</h3>
                  <p className="text-sm text-[#10b981]">Operational</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-[#333333] rounded-lg p-4">
                <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Vector Cheat</h3>
                  <p className="text-sm text-[#10b981]">Undetected</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-[#333333] rounded-lg p-4">
                <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Discord Support</h3>
                  <p className="text-sm text-[#10b981]">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-4 bg-[#0a0a0a] border border-[#333333] rounded-lg p-4">
                <div className="w-3 h-3 rounded-full bg-[#10b981] animate-pulse flex-shrink-0"></div>
                <div>
                  <h3 className="text-base font-semibold text-white mb-1">Download System</h3>
                  <p className="text-sm text-[#10b981]">Operational</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
