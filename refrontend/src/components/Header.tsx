import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X, ChevronDown, Linkedin, Instagram, Mail, Phone } from 'lucide-react'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const [specialitiesOpen, setSpecialitiesOpen] = useState(false)
  const [sidePanelOpen, setSidePanelOpen] = useState(false)

  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F3] shadow-md">
      {/* Top Bar */}
      <div className="bg-[#2F3E2E] text-white py-1.5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <a href="https://www.linkedin.com/company/uplift-placement/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD6F2F] transition">
              <Linkedin size={16} />
            </a>
            <a href="https://www.instagram.com/upliftplacements?igsh=MWVsOTBodjZrOTRqMg==" target="_blank" rel="noopener noreferrer" className="hover:text-[#FD6F2F] transition">
              <Instagram size={16} />
            </a>
            <a href="mailto:upliftplacements@gmail.com" className="hover:text-[#FD6F2F] transition">
              <Mail size={16} />
            </a>
            <a href="tel:+919664361260" className="hover:text-[#FD6F2F] transition">
              <Phone size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="bg-[#FAF8F3]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center">
              <img src="/images/logo-final.png" alt="UpLift Placements" className="h-12 md:h-14 w-auto" />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-10">
              <Link to="/" className="text-[#2F3E2E] hover:text-[#FD6F2F] transition font-semibold text-base tracking-wide">
                Home
              </Link>
              
              {/* Our Services Dropdown */}
              <div className="relative group">
                <button className="text-[#2F3E2E] hover:text-[#FD6F2F] transition font-semibold text-base tracking-wide flex items-center gap-1">
                  Our Services
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/recruitment-interview-process" className="block px-4 py-3 text-gray-700 hover:bg-[#FFEAD1] hover:text-[#FD6F2F] transition">
                    Recruitment & Interview process
                  </Link>
                  <Link to="/it-job-placement" className="block px-4 py-3 text-gray-700 hover:bg-[#FFEAD1] hover:text-[#FD6F2F] transition">
                    IT Job Placement
                  </Link>
                  <Link to="/career-guidance" className="block px-4 py-3 text-gray-700 hover:bg-[#FFEAD1] hover:text-[#FD6F2F] transition">
                    Career Guidance
                  </Link>
                </div>
              </div>

              {/* Specialities Dropdown */}
              <div className="relative group">
                <button className="text-[#2F3E2E] hover:text-[#FD6F2F] transition font-semibold text-base tracking-wide flex items-center gap-1">
                  Specialities
                  <ChevronDown size={16} />
                </button>
                <div className="absolute top-full left-0 mt-2 w-64 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <Link to="/interview-support" className="block px-4 py-3 text-gray-700 hover:bg-[#FFEAD1] hover:text-[#FD6F2F] transition">
                    Interview Support
                  </Link>
                  <Link to="/training" className="block px-4 py-3 text-gray-700 hover:bg-[#FFEAD1] hover:text-[#FD6F2F] transition">
                    Training
                  </Link>
                  <Link to="/staffing" className="block px-4 py-3 text-gray-700 hover:bg-[#FFEAD1] hover:text-[#FD6F2F] transition">
                    Staffing
                  </Link>
                </div>
              </div>

              <Link to="/about" className="text-[#2F3E2E] hover:text-[#FD6F2F] transition font-semibold text-base tracking-wide">
                About Us
              </Link>
              <Link to="/refer-and-earn" className="text-[#2F3E2E] hover:text-[#FD6F2F] transition font-semibold text-base tracking-wide">
                Refer and Earn
              </Link>
              <Link to="/contact" className="text-[#2F3E2E] hover:text-[#FD6F2F] transition font-semibold text-base tracking-wide">
                Contact Us
              </Link>
              
              {/* Hamburger for side panel on desktop */}
              <button onClick={() => setSidePanelOpen(true)} className="text-[#2F3E2E] hover:text-[#FD6F2F] transition">
                <Menu size={28} strokeWidth={2} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="lg:hidden text-[#2F3E2E] z-50 p-2 hover:bg-[#FD6F2F] rounded transition"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div className="lg:hidden mt-2 pb-4 border-t-2 border-[#FD6F2F]">
              <Link to="/" onClick={() => setIsOpen(false)} className="block py-3 px-2 text-[#2F3E2E] hover:text-[#FD6F2F] font-semibold transition">
                Home
              </Link>

              <div>
                <button onClick={() => setServicesOpen(!servicesOpen)} className="w-full text-left py-3 px-2 text-[#2F3E2E] hover:text-[#FD6F2F] font-semibold transition flex items-center justify-between">
                  Our Services
                  <ChevronDown size={16} className={`transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="pl-4 border-l-2 border-[#FD6F2F] ml-2 mb-1">
                    <Link to="/recruitment-interview-process" onClick={() => setIsOpen(false)} className="block py-2 px-2 text-[#515739] hover:text-[#FD6F2F] text-sm transition">
                      Recruitment & Interview process
                    </Link>
                    <Link to="/it-job-placement" onClick={() => setIsOpen(false)} className="block py-2 px-2 text-[#515739] hover:text-[#FD6F2F] text-sm transition">
                      IT Job Placement
                    </Link>
                    <Link to="/career-guidance" onClick={() => setIsOpen(false)} className="block py-2 px-2 text-[#515739] hover:text-[#FD6F2F] text-sm transition">
                      Career Guidance
                    </Link>
                  </div>
                )}
              </div>

              <div>
                <button onClick={() => setSpecialitiesOpen(!specialitiesOpen)} className="w-full text-left py-3 px-2 text-[#2F3E2E] hover:text-[#FD6F2F] font-semibold transition flex items-center justify-between">
                  Specialities
                  <ChevronDown size={16} className={`transition-transform ${specialitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {specialitiesOpen && (
                  <div className="pl-4 border-l-2 border-[#FD6F2F] ml-2 mb-1">
                    <Link to="/interview-support" onClick={() => setIsOpen(false)} className="block py-2 px-2 text-[#515739] hover:text-[#FD6F2F] text-sm transition">
                      Interview Support
                    </Link>
                    <Link to="/training" onClick={() => setIsOpen(false)} className="block py-2 px-2 text-[#515739] hover:text-[#FD6F2F] text-sm transition">
                      Training
                    </Link>
                    <Link to="/staffing" onClick={() => setIsOpen(false)} className="block py-2 px-2 text-[#515739] hover:text-[#FD6F2F] text-sm transition">
                      Staffing
                    </Link>
                  </div>
                )}
              </div>

              <Link to="/about" onClick={() => setIsOpen(false)} className="block py-3 px-2 text-[#2F3E2E] hover:text-[#FD6F2F] font-semibold transition">
                About Us
              </Link>
              <Link to="/refer-and-earn" onClick={() => setIsOpen(false)} className="block py-3 px-2 text-[#2F3E2E] hover:text-[#FD6F2F] font-semibold transition">
                Refer and Earn
              </Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-3 px-2 text-[#2F3E2E] hover:text-[#FD6F2F] font-semibold transition">
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </nav>
    </header>

    {/* Side Panel Overlay */}
    {sidePanelOpen && (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-[60]" onClick={() => setSidePanelOpen(false)}></div>
    )}

    {/* Side Panel */}
    <div className={`fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-[70] transform transition-transform duration-300 ${sidePanelOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <img src="/images/logo-final.png" alt="UpLift Placements" className="h-10 w-auto" />
          <button onClick={() => setSidePanelOpen(false)} className="text-gray-600 hover:text-[#FD6F2F]">
            <X size={24} />
          </button>
        </div>
        
        <div className="space-y-6">
          <div>
            <p className="text-gray-700 text-sm leading-relaxed">
              For the past two-plus years, UpLift Placements LLC is a tech employment firm connecting candidates and clients, facilitating access to job opportunities and the right talent.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-bold text-[#2F3E2E] mb-3">Contacts</h2>
            <h3 className="text-base font-semibold text-[#515739] mb-2">India Office</h3>
            <p className="text-sm text-gray-600 mb-4">
              Plot No. 56, Navrangpura Business Tower,<br />
              Near Ahmedabad One Mall, Navrangpura,<br />
              Ahmedabad – 380009, Gujarat, India
            </p>
            <h3 className="text-base font-semibold text-[#515739] mb-2">US Office</h3>
            <p className="text-sm text-gray-600 mb-4">
              Suite 510, 350 Fifth Avenue,<br />
              New York, NY 10118, United States
            </p>
            <a href="mailto:upliftplacements@gmail.com" className="text-[#FD6F2F] hover:underline text-sm">
              upliftplacements@gmail.com
            </a>
          </div>

          <div className="flex gap-4">
            <a href="https://www.linkedin.com/company/uplift-placement/" target="_blank" rel="noopener noreferrer" className="text-[#515739] hover:text-[#FD6F2F] transition">
              <Linkedin size={24} />
            </a>
            <a href="https://www.instagram.com/upliftplacements?igsh=MWVsOTBodjZrOTRqMg==" target="_blank" rel="noopener noreferrer" className="text-[#515739] hover:text-[#FD6F2F] transition">
              <Instagram size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Header
