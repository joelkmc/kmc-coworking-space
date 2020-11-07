import cyberSigma from '../images/cyber-sigma.jpg'
import fourNeo from '../images/four-neo.jpg'
import vcorporate from '../images/vcorp.jpg'
import frabelle from '../images/frabelle.jpg'
import oneGriffinstone from '../images/one-griffinstone.jpg'
import podiumWest from '../images/podium-west.jpg'
import robinsonCyberspace from '../images/robinson-cyberspace.jpg'
import robinsonZeta from '../images/robinson-zeta.jpg'
import rockwellSheridan from '../images/rockwell-sheridan.jpg'
import skyrise4b from '../images/skyrise-4b.jpg'
import smAura from '../images/sm-aura.jpg'
import uptownPlace from '../images/uptown-place-tower2.jpg'

export const buildings = [
  {
    name: "Cyber Sigma",
    img: cyberSigma,
    address: "20th Floor, Cyber Sigma, Lawton Ave.",
    city: "Taguig",
    state: "Metro Manila",
    country: "Philippines",
    description: "One of the most comprehensive shared spaces in the entire country. Located in the largest flexible workspace in the Philippines, this coworking area can seat around 20 employees while allowing each coworker to access the numerous features of the facility. Coworking clients can play in the gaming area, snooze at our napping area/sleeping quarters, grab a bite or relax at our expansive pantry, or just get work done at our ergonomic coworking space.",
  },
  {
    name: "Four NEO",
    img: fourNeo,
    address: "4th Ave. Four/NEO, Bonifacio Global City",
    city: "Taguig",
    state: "Metro Manila",
    country: "Philippines",
    description: "Combining upscale, top-class interiors with modern and fully functional amenities, this flexible workspace is the ideal work environment for companies from different industries with both experienced employees and newcomers alike.",
  },
  {
    name: "V Corporate Centre",
    img: vcorporate,
    address: "5th floor, V Corporate Centre, 125 L.P. Leviste Street, Salcedo Village",
    city: "Makati",
    state: "Metro Manila",
    country: "Philippines",
    description: "Our serviced offices and coworking space in V Corporate Centre feature the most modern office amenities, from biometrics scanners up to our bank-grade data centers. We offer flexible lease terms, allowing you to add seats or move into a private office when you're scaling up. ",
  },
  {
    name: "Frabelle Corporate Plaza",
    img: frabelle,
    address: "18th floor, Frabelle Corporate Plaza, 129 Bautista",
    city: "Makati",
    state: "Metro Manila",
    country: "Philippines",
    description: "Our serviced offices and coworking space in Frabelle Corporate Plaza feature the most modern office amenities, from biometric scanners up to our bank-grade data centers. We offer flexible lease terms, allowing you to add seats or move into a private office when you're scaling up. ",
  },
  {
    name: "One Griffinstone",
    img: oneGriffinstone,
    address: "Filinvest Corp. City, 9th Floor, Commerce Avenue, corner Spectrum Midway, Alabang",
    city: "Muntinlupa",
    state: "Metro Manila",
    country: "Philippines",
    description: "Our first office in Alabang, this facility features large office space with large panoramic window views.",
  },
  {
    name: "Robinsons Cyberscape Gamma",
    img: robinsonCyberspace,
    address: " 15th Floor, Robinsons Cyberscape, Topaz Rd, Ortigas Center",
    city: "Ortigas",
    state: "Metro Manila",
    country: "Philippines",
    servicesAvailable: "Coworking Space",
    description: "Fully-equipped modern amenities in cyberscape Gamma with 24/7 IT support.",
  },
  {
    name: "Robinsons Zeta Tower",
    img: robinsonZeta,
    address: "7th Floor, Robinsons Zeta Tower, C5 Road",
    city: "Quezon City",
    state: "Metro Manila",
    country: "Philippines",
    description: "Boasting tropical design elements reminiscent of beach getaways during summer, our Zeta office is ideal for all employees of all ages.",
  },
  {
    name: "Rockwell Sheridan 1",
    img: rockwellSheridan,
    address: "10th Floor, South Tower Rockwell Business Center, Sheridan",
    city: "Mandaluyong",
    state: "Metro Manila",
    country: "Philippines",
    description: "Featuring multiple open huddles video conferencing and interview areas.",
  },
  {
    name: "Skyrise 4B",
    img: skyrise4b,
    address: "West Geonzon Street",
    city: "Cebu",
    state: "Visayas",
    country: "Philippines",
    description: "KMC is expanding its portfolio of Private Offices and Coworking Spaces for rent in Cebu with two new Flexible Workspace floors at Skyrise 4B",
  },
  {
    name: "Uptown Place Tower 2",
    img: uptownPlace,
    address: "20th floor, Uptown Place Tower 2 11th Dr, Uptown Bonifacio",
    city: "Taguig",
    state: "Metro Manila",
    country: "Philippines",
    description: "Uptown Place Tower 2 is part of Megaworld's 15.4-hectare township development Uptown Bonifacio, located along 11th Ave.",
  },
  {
    name: "SM Aura Office Tower",
    img: smAura,
    address: "11th Floor, SM Aura Business Tower, 26th St., McKinley Parkway",
    city: "Taguig",
    state: "Metro Manila",
    country: "Philippines",
    description: "The SM Aura Premiere Office Tower is a 29-storey dedicated private office and serviced office building with an area of 40,424 square meters.",
  },
  {
    name: "Podium West Tower",
    img: podiumWest,
    address: "26th and 27th Floor, Ortigas Center",
    city: "Mandaluyong",
    state: "Metro Manila",
    country: "Philippines",
    description: "In a very first for KMC, we have partnered with Singaporean-based and internationally renowned design studio, Contrast, to bring a different class of workspace to the Philippines. They have years of design experience, having created and designed some of Singapore's most sought after coworking spaces. Their design process is driven by user experience with the objective of creating human-centric workplace designs that are enabled by technology. At the heart of Contrast's design approach is workplace innovation and with a conscious effort to avoid the conventional or traditional aspects of a workspace.",
  }
]

export const locations = Array.from(new Set(Array.from(buildings, building => building.city)))