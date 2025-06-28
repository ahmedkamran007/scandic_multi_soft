import React from "react";

const LandingPage = () => {
  return (
    <div className="font-sans antialiased text-gray-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm fixed w-full z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img 
    src="images/scandic-logo.jpg" 
    alt="Scandic MultiSoft Logo"
    className="h-10 w-auto" // Adjust height as needed
  />
              </div>
            </div>
            <div className="hidden md:ml-6 md:flex md:items-center md:space-x-8">
              <a
                href="#services"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-gray-900 hover:text-indigo-600 px-3 py-2 text-sm font-medium"
              >
                Contact
              </a>
              <a
                href="#contact"
                className="ml-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white gradient-bg shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started
              </a>
            </div>
            <div className="-mr-2 flex items-center md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {/* Hero Section */}
<div className="relative bg-white overflow-hidden pt-24">
  <div className="max-w-7xl mx-auto">
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
      <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 lg:mt-16 lg:px-8 xl:mt-20">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Enterprise-Grade</span>
            <span className="block text-indigo-600">Software Solutions</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Transforming Your Vision Into Reality.
          </p>
          <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
            <div className="rounded-md shadow">
              <a
                href="#contact"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white gradient-bg hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
              >
                Get a Free Consultation
              </a>
            </div>
            <div className="mt-3 sm:mt-0 sm:ml-3">
              <a
                href="#services"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
              >
                Our Services
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
  <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
    <div className="h-full w-full flex items-center justify-center">
      <img
        src="https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&auto=format&fit=crop&w=2850&q=80"
        alt="Developer working late night"
        className="h-auto w-full max-w-full object-contain"
      />
    </div>
  </div>
</div>

      {/* The rest of the sections (Stats, Services, Testimonials, Contact, Footer) are next */}

      {/* Stats Section */}
      <div className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { label: "Years Experience", value: "5+" },
              { label: "Support Available", value: "24/7" },
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-white py-6 px-6 rounded-lg shadow text-center"
              >
                <div className="text-4xl font-bold text-indigo-600">
                  {stat.value}
                </div>
                <div className="text-gray-600 mt-2">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div id="services" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Services
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Java Development Expertise
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
              Comprehensive Java solutions tailored to your business
              requirements
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "laptop-code",
                title: "Custom Web App Development",
                text: "Tailored Java-based web applications to automate your business workflows.",
              },
              {
                icon: "server",
                title: "Enterprise Backend Development",
                text: "Scalable and secure Spring Boot backends for web and mobile applications.",
              },
              {
                icon: "shopping-cart",
                title: "eCommerce Platform Development",
                text: "Java backend with modern React/Angular frontend for online store platforms.",
              },
              {
                icon: "calendar-alt",
                title: "Booking & Scheduling Systems",
                text: "Appointment systems tailored for salons, clinics, gyms, and services.",
              },
              {
                icon: "project-diagram",
                title: "Java API & Microservice Architecture",
                text: "REST APIs and microservices built with Spring Boot for performance.",
              },
              {
                icon: "database",
                title: "Database Integration & Optimization",
                text: "MySQL, PostgreSQL, and Oracle integration with performance tuning.",
              },
              {
                icon: "sync-alt",
                title: "Legacy System Modernization",
                text: "Upgrade legacy Java systems to Java 17 and modern frameworks.",
              },
              {
                icon: "cloud-upload-alt",
                title: "Java DevOps & Deployment",
                text: "Docker, CI/CD, cloud deployment on Railway, AWS, or Render.",
              },
              {
                icon: "rocket",
                title: "MVP & Startup Prototype Development",
                text: "Fast-track MVPs using Java & React — ready to demo to investors.",
              },
              {
                icon: "chess",
                title: "System Architecture Consultation",
                text: "Advice on secure and scalable architecture for long-term success.",
              },
              {
                icon: "robot",
                title: "SmartSupport – Mini SaaS Helpdesk with AI",
                text: "Manage support tickets with AI-powered OpenAI replies for fast support.",
              },
            ].map((service, i) => (
              <div
                key={i}
                className="service-card bg-white p-6 rounded-lg shadow-md transition duration-300 ease-in-out"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <i className={`fas fa-${service.icon} text-xl`}></i>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">{service.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* About Section */}
<div id="about" className="bg-gray-50 py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        About Us
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Empowering Businesses Through Technology
      </p>
      <p className="mt-4 max-w-3xl text-xl text-gray-500 mx-auto">
        Scandic MultiSoft is a newly founded software development studio committed to delivering innovative, scalable, and efficient technology solutions. We specialize in crafting full-stack enterprise applications, modern APIs, and startup-ready MVPs that help businesses of all sizes grow with confidence.
      </p>
    </div>
    
    <div className="mt-12 max-w-3xl mx-auto text-left">
      <h3 className="text-lg leading-6 font-medium text-gray-900">
        Our Mission
      </h3>
      <p className="mt-2 text-base text-gray-600">
        To simplify software development for growing companies by delivering tailored digital products that align perfectly with their operational needs. Whether you're a startup building your first prototype or an established firm modernizing legacy systems — we’ve got you covered.
        <br /><br />
        <span className="font-medium text-gray-800">— Ahmed Kamran, Founder of Scandic MultiSoft</span>
      </p>
    </div>
  </div>
</div>

{/* Template Demos Section */}
<div className="bg-white py-16">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12">
      <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
        Template Demos
      </h2>
      <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
        Ready-to-Use Templates
      </p>
      <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
        Professionally designed templates for various industries
      </p>
    </div>
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      {/* Restaurant Template */}
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
        <div className="h-40 bg-cover bg-center rounded-md flex items-end p-4" 
             style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}>
          <h3 className="text-white text-xl font-bold">Restaurant</h3>
        </div>
        <div className="mt-4">
          <p className="text-gray-600 mb-3">Complete restaurant template with menu, booking system, and gallery</p>
          <div className="flex justify-between items-center">
            <div className="flex">
              <i className="fas fa-utensils text-indigo-600 mr-2"></i>
              <span className="text-sm text-gray-500">Food Business</span>
            </div>
            <button 
              onClick={() => window.open('/templates/restaurant.html', '_blank')}
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm"
            >
              View Demo
            </button>
          </div>
        </div>
      </div>

      {/* Other template like rent a car placeholders -  */}
      
<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
  <div className="h-40 bg-cover bg-center rounded-md flex items-end p-4" 
       style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1502877338535-766e1452684a?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}>
    <h3 className="text-white text-xl font-bold">Rent a Car</h3>
  </div>
  <div className="mt-4">
    <p className="text-gray-600 mb-3">Complete car rental template with vehicle listings, booking system, and availability calendar</p>
    <div className="flex justify-between items-center">
      <div className="flex">
        <i className="fas fa-car text-indigo-600 mr-2"></i>
        <span className="text-sm text-gray-500">Automotive</span>
      </div>
      <button 
        onClick={() => window.open('/templates/car-rental.html', '_blank')}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm"
      >
        View Demo
      </button>
    </div>
  </div>
</div>

      
      <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
  <div className="h-40 bg-cover bg-center rounded-md flex items-end p-4" 
       style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}>
    <h3 className="text-white text-xl font-bold">Beauty Salon</h3>
  </div>
  <div className="mt-4">
    <p className="text-gray-600 mb-3">Complete salon template with services, booking system, and gallery</p>
    <div className="flex justify-between items-center">
      <div className="flex">
        <i className="fas fa-scissors text-indigo-600 mr-2"></i>
        <span className="text-sm text-gray-500">Salon</span>
      </div>
      <button 
        onClick={() => window.open('/templates/salon.html', '_blank')}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm"
      >
        View Demo
      </button>
    </div>
  </div>
</div>
      
      
<div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
  <div className="h-40 bg-cover bg-center rounded-md flex items-end p-4" 
       style={{ backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80)' }}>
    <h3 className="text-white text-xl font-bold">Fashion Store</h3>
  </div>
  <div className="mt-4">
    <p className="text-gray-600 mb-3">Complete eCommerce template with product listings, cart system, and checkout</p>
    <div className="flex justify-between items-center">
      <div className="flex">
        <i className="fas fa-shopping-bag text-indigo-600 mr-2"></i>
        <span className="text-sm text-gray-500">Online Retail</span>
      </div>
      <button 
        onClick={() => window.open('/templates/ecommerce.html', '_blank')}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition text-sm"
      >
        View Demo
      </button>
    </div>
  </div>
</div>

    </div>
  </div>
</div>




      {/* Testimonials Section */}
      <div className="gradient-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-base text-indigo-200 font-semibold tracking-wide uppercase">
              Client Testimonials
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Trusted by Businesses
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                img: "/images/mash.jpg",
                name: "Mash ",
                title: "Founder, Buyunik.dk",
                quote:
                  "Scandic MultiSoft built a professional, high-quality website that elevated our brand.",
              },
              {
                img: "/images/kisa.jpg",
                name: "Shahzad",
                title: "Butik Owner, Kisa Marked",
                quote:
                  "Our webshop built with Java and React handles many orders seamlessly...",
              },
              {
                img: "/images/lego.jpg",
                name: "Your Name",
                title: "Founder, Your Business Name",
                quote:
                  "Scandic MultiSoft delivered outstanding results — professional, reliable, and impactful. The next success story could be yours!",
              },
            ].map((t, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <img
                    className="h-12 w-12 rounded-full"
                    src={t.img}
                    alt={t.name}
                  />
                  <div className="ml-4">
                    <h4 className="text-lg font-medium text-gray-900">
                      {t.name}
                    </h4>
                    <p className="text-indigo-600">{t.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{t.quote}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* Contact Form */}
      <div id="contact" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">
              Contact Us
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Let's Build Something Great
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Get in touch to discuss your project requirements
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto lg:max-w-none">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Form submission is not connected yet.");
              }}
              className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 bg-gray-50 p-8 rounded-xl shadow-lg"
            >
              <div className="sm:col-span-2">
                <label
                  htmlFor="fullName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name *
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md input-focus"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email *
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md input-focus"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700"
                >
                  Subject
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md input-focus"
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message *
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md input-focus"
                  ></textarea>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white gradient-bg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition duration-150 ease-in-out"
                >
                  Send Message <i className="fas fa-paper-plane ml-2"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-white text-lg font-semibold">Scandic MultiSoft</h3>
              <p className="mt-4 text-gray-400">
                Enterprise-grade Java development services for businesses of all sizes.
              </p>
              <div className="mt-4 flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-twitter text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <i className="fab fa-github text-xl"></i>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Services</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white">Web Development</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Backend Systems</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">eCommerce</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">API Development</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white text-sm font-semibold tracking-wider uppercase">Company</h3>
              <ul className="mt-4 space-y-4">
                <li><a href="#" className="text-gray-400 hover:text-white">About</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-700 pt-8 flex justify-between">
            <p className="text-gray-400 text-sm">&copy; 2023 Scandic MultiSoft. All rights reserved.</p>
             <p className="text-gray-400 text-sm">Delta Park 10, Vallensbæk Strand</p>
             <p className="text-gray-400 text-sm">ahmed.kamran@hotmail.dk</p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
