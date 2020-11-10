import heroImg1 from '../images/heroImg1.webp'
import heroImg2 from '../images/heroImg3.webp'
import heroImg3 from '../images/heroImg2.jpg'
import blackTile2 from '../images/black-tile-2.webp'

export const HeroBGImgStyle = {
  backgroundImage: `url(${blackTile2})`,
  backgroundSize: '120px '
}

export const heroImages = [
  {
    id: 1, 
    imgUrl: heroImg1, 
    officeName: 'Cyber Sigma', 
    address: '20th Floor, Cyber Sigma, Lawton Ave., Taguig, Metro Manila'
  },
  {
    id: 2, 
    imgUrl: heroImg2, 
    officeName: 'Four NEO', 
    address: '4th Ave. Four/NEO, Bonifacio Global City, Taguig, Metro Manila'
  },
  {
    id: 3, 
    imgUrl: heroImg3, 
    officeName: 'Frabelle Corporate Plaza', 
    address: '18th floor, Frabelle Corporate Plaza, 129 Bautista, Makati, Metro Manila'
  },
]