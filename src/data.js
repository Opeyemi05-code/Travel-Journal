import fujiImg from "./assets/Mt fuji.jpeg"
import sydneyImg from "./assets/Sydney_Australia.jpg"
import geirangerfjord from "./assets/Geirangerfjord.jpeg"
import eiffelTower from "./assets/Eiffel Tower.jpeg"
import grandCanyon from "./assets/Grand Canyon.jpeg"
import locationIcon from "./assets/location-logo-removebg-preview.png"

export default [
  {
    id: 1,
    img: fujiImg,
    alt: "Mount Fuji",
    title: "Mount Fuji",
    location: locationIcon,
    country: "Japan",
    googleMapsLink: "https://goo.gl/maps/1DGM5WrWnATgkSNB8",
    dates: "12 Jan, 2021 - 24 Jan, 2021",
    description: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters. It's the single most popular tourist site in Japan."
  },
  {
    id: 2,
    img: sydneyImg,
    alt: "Sydney Opera House",
    title: "Sydney Opera House",
    location: locationIcon,
    country: "Australia",
    googleMapsLink: "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2127218,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12ae665e892fdd:0x3133f8d75a1ac251!8m2!3d-33.8567844!4d151.2152967!16zL20vMDZfbm0?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    dates: "27 May, 2021 - 8 Jun, 2021",
    description: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. It is one of the 20th century's most famous and distinctive buildings."
  },
  {
    id: 3,
    img: geirangerfjord,
    alt: "Geirangerfjord",
    title: "Geirangerfjord",
    location: locationIcon,
    country: "Norway",
    googleMapsLink: "https://www.google.com/maps/place/Geirangerfjord/@62.1047507,6.9098289,11z/data=!3m1!4b1!4m6!3m5!1s0x46169d427b268c51:0xb8c99540dcc397fe!8m2!3d62.101506!4d7.0940817!16zL20vMDZ4eXFi?entry=ttu&g_ep=EgoyMDI1MDkwOS4wIKXMDSoASAFQAw%3D%3D",
    dates: "01 Oct, 2021 - 18 Nov, 2021",
    description: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is a UNESCO World Heritage Site."
  },
  {
  id: 4,
  img: eiffelTower,
  alt: "Eiffel Tower",
  title: "Eiffel Tower",
  location: locationIcon,
  country: "France",
  googleMapsLink: "https://goo.gl/maps/4BXGSW2cuTbRg6Tv8",
  dates: "10 Mar, 2022 - 20 Mar, 2022",
  description: "The Eiffel Tower is an iconic landmark of Paris, France, attracting millions of visitors yearly due to its architectural beauty and panoramic views."
},
{
  id: 5,
  img: grandCanyon,
  alt: "Grand Canyon",
  title: "Grand Canyon",
  location: locationIcon,
  country: "USA",
  googleMapsLink: "https://goo.gl/maps/9EHoS3ZC6GCyfDUV9",
  dates: "15 Jul, 2022 - 25 Jul, 2022",
  description: "Grand Canyon is a breathtaking natural wonder located in Arizona, USA, famous for its vast size and intricate landscape carved by the Colorado River."
}
]