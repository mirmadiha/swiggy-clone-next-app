import { FaInstagram, FaTwitter, FaLinkedin, FaFacebook, FaPinterest } from "react-icons/fa";
function Footer(){

  const data = {
  appDownload: {
    title: "For better experience, download the Swiggy app now",
    stores: [
      { name: "Google Play", image: "/images/play_store.avif", alt: "Google Play Store" },
      { name: "App Store", image: "/images/app_store.avif", alt: "Apple App Store" }
    ]
  },
  branding: {
    logo: "/images/swiggy_logo_2.png",
    logoAlt: "Swiggy Logo",
    copyright: "© 2025 Swiggy Limited"
  },
  columns: [
    {
      sections: [
        {
          title: "Company",
          links: [
            { text: "About Us", url: "/about" },
            { text: "Careers", url: "/careers" },
            { text: "Team", url: "/team" },
            { text: "Swiggy One", url: "/swiggy-one" },
            { text: "Swiggy Instamart", url: "/swiggy-instamart" },
            { text: "Swiggy Dineout", url: "/swiggy-dineout" },
            { text: "Swiggy Genie", url: "/swiggy-genie" },
            { text: "Minis", url: "/minis" },
            { text: "Pyng", url: "/pyng" }
          ]
        }
      ]
    },
    {
      sections: [
        {
          title: "Contact Us",
          links: [
            { text: "Help & Support", url: "/support" },
            { text: "Partner with us", url: "/partner" },
            { text: "Ride with us", url: "/ride" }
          ]
        },
        {
          title: "Legal",
          links: [
            { text: "Terms & Conditions", url: "/terms" },
            { text: "Cookie Policy", url: "/cookies" },
            { text: "Privacy Policy", url: "/privacy" },
            { text: "Investor Relations", url: "/investor" }
          ]
        }
      ]
    },

    {
      sections: [
        {
          title: "Available in:",
          links: [
            { text: "Bangalore", url: "/bangalore" },
            { text: "Gurgaon", url: "/gurgaon" },
            { text: "Hyderabad", url: "/hyderabad" },
            { text: "Delhi", url: "/delhi" },
            { text: "Mumbai", url: "/mumbai" },
            { text: "Pune", url: "/pune" },
          ]
        }
      ]
    },

    {
      sections: [
        {
          title: "Life at Swiggy",
          links: [
            { text: "Explore with Swiggy", url: "/explore-with-swiggy" },
            { text: "Swiggy News", url: "/swiggy-news" },
            { text: "Snackables", url: "/snackables" }
          ]
        },

        {
          title: "Social Links",
          links: [
            { text: "LinkedIn", icon: FaLinkedin, url: "https://www.linkedin.com/company/swiggy-in/posts/?feedView=all" },
            { text: "Instagram", icon: FaInstagram, url: "https://instagram.com/swiggyindia" },
            { text: "GitHub", icon: FaFacebook, url: "https://www.facebook.com/swiggy.in/" },
            { text: "Pinterest", icon: FaPinterest, url: "https://in.pinterest.com/swiggyindia/" },
            { text: "Twitter", icon: FaTwitter, url: "https://x.com/Swiggy" }
          ]
        }
      ]
    }
  ]
};


  return (
    <footer className="w-full h-full bg-[#f0f0f5]">
      <div className="max-w-[1200px] mx-auto px-2 pb-[50px] bg-[#f0f0f5] py-8">
        <div className="flex col justify-between items-center mb-20">
          <div className="text-xl font-bold mr-50">{data.appDownload.title}</div>
          <div className="flex col gap-10 items-center">
            {data.appDownload.stores.map((store) => (
              <a
                key={store.name}
                href="#"
                className="transition-transform hover:scale-105"
                aria-label={`Download from ${store.name}`}
              >
                <img
                  className="w-[180px] sm:w-[200px] h-auto"
                  src={store.image}
                  alt={store.alt}
                />
              </a>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Copyright */}
          <div className="flex flex-col col-span-2 md:col-span-1">
            <img
              src={data.branding.logo}
              alt={data.branding.logoAlt}
              className="w-[160px] h-auto mb-4"
            />
            <p className="text-l text-gray-600 font-medium">
              {data.branding.copyright}
            </p>
          </div>
          {data.columns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-8">
              {column.sections.map((section,index) => (
                <div key={section.title} className={index !== column.sections.length - 1 ? "mb-[100px]" : ""}>
                  <h3 className="text-l font-bold text-gray-800 mb-3">
                    {section.title}
                  </h3>
                  <ul className={section.title === "Social Links" ? "flex flex-row  cursor-pointer" : "space-y-4"}>
                    {section.links.map((link) =>
                      "icon" in link ? (
                        <li key={link.text}>
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={link.text}
                            title={link.text}
                            className="p-2 rounded-lg text-gray-600 hover:text-gray-900 transition hover:bg-gray-200 flex items-center justify-center"
                          >
                            <link.icon size={20} />
                          </a>
                        </li>
                      ) : (
                        <li key={link.text}>
                          <a
                            href={link.url}
                            className="text-md text-gray-600 hover:text-gray-900 transition-colors"
                          >
                            {link.text}
                          </a>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;