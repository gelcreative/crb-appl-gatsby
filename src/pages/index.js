import React, { lazy } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import CustomCountdown from "../components/CustomCountdown"
import CurbAppealLogo from '../components/CurbAppealLogo'
import PreFooter from '../components/PreFooter'
import commongoodlogo from '../images/chefs/common-good-logo.png'
import dunlopstlogo from '../images/chefs/dunlop-street-diner-logo.png'
import groovytuesdayslogo from '../images/chefs/groovy-tuesdays-logo.png'
import paintershalllogo from '../images/chefs/painters-hall-logo.png'
import thefarmhouselogo from '../images/chefs/the-farmhouse-logo.png'
import lazytulip from '../images/chefs/the-lazy-tuplic-white-logo.png'
import wallbg from '../images/wall-background.png'
import spicebg from '../images/spice-background.png'
import cuttingboardbg from '../images/cuttingboard-background.png'
import specklebg from '../images/speckle-background.png'
import platterbg from '../images/platter-background.png'
import marblebg from '../images/marble-background.png'
import grillicious from '../images/partners/Grillicious-Gourtmet-logo-white.png'
import oliveoilco from '../images/partners/BarrieOliveOil-Co-logo-white.png'
import homestead from '../images/partners/Homestead-logo-white.png'
import ripejuice from '../images/partners/RIPE-Juicery-logo-white.png'
import jadore from '../images/partners/Jadore-logo-white.png'
import grilliciousBlack from '../images/partners/Grillicious-Gourtmet-logo-black.png'
import oliveoilcoBlack from '../images/partners/BarrieOliveOil-Co-logo-black.png'
import homesteadBlack from '../images/partners/Homestead-logo-black.png'
import ripejuiceBlack from '../images/partners/RIPE-Juicery-logo-black.png'
import jadoreBlack from '../images/partners/Jadore-logo-black.png'
import iconYouTube from '../images/iconYoutube.png'
import iconTwitter from '../images/iconTwitter.png'
import iconFacebook from '../images/iconFacebook.png'
import iconInstagram from '../images/iconInstagram.png'
import iconMartini from '../images/iconMartini.png'
import headerLogo from '../images/curbappeal-logo.png'
import gallery1 from '../images/gallery/thumbnail-table-decor-curb-appeal-event.jpg'
import gallery2 from '../images/gallery/thumbnail2-chef-curb-appeal-event.jpg'
import gallery3 from '../images/gallery/thumbnail3-homestead-bakery-curb-appeal-event.jpg'
import gallery4 from '../images/gallery/thumbnail4-corn-curb-appeal-event.jpg'
import gallery5 from '../images/gallery/thumbnail5-guest-curb-appeal-event.jpg'
import gallery6 from '../images/gallery/thumbnail6-live-music-curb-appeal-event.jpg'



const partners = [
    { logo: grillicious, link: '#' },
    { logo: oliveoilco, link: '#' },
    { logo: homestead, link: '#' },
    { logo: ripejuice, link: '#' },
    { logo: jadore, link: '#' }
]

const sponsers = [
  { logo: grilliciousBlack, link: '#' },
  { logo: oliveoilcoBlack, link: '#' },
  { logo: homesteadBlack, link: '#' },
  { logo: ripejuiceBlack, link: '#' },
  { logo: jadoreBlack, link: '#' }
]

const chefs2 = [
    { name: "Randy Feltis", img: thefarmhouselogo, link: '#', blurb: "Randy uses only sustainable fish and the freshest meats and vegetables. They are animal lovers and tree huggers. They even grow their own herbs and spices, providing the freshest flavours in every bite." },
    { name: "Amanda Rider", img: dunlopstlogo, link: '#', blurb: "Chef Amanda Rider brings a special flare to the food at the Diner. Locally sourced ingredients, made from scratch, have resulted in an incredible menu that delivers on the promise of great food in a casual atmosphere." },
    { name: "Sarah Jones", img: groovytuesdayslogo, link: '#', blurb: "Groovy Tuesday’s intimate, contemporary eatery offers something different and delicious with every visit. Everything is made from fresh ingredients with love. Feed your heart and soul with homestyle comforts featuring a modern edge." },
    { name: "Michelle Huggins", img: lazytulip, link: '#', blurb: "A soulful breakfast and lunch joint located in downtown Barrie offering healthy food options with a focus on vegetarian and gluten-free foods." },
    { name: "Kevin Isherwood", img: commongoodlogo, link: '#', blurb: "Common Good offers unique selections using fresh, seasonal inspirations. Their community-minded spirit means espresso roasted in Toronto, Ontario small batch liquors and locally-sourced products. Let them introduce you to your new favourite flavours, served by your new favourite baristas." },
]


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Curb Appeal`, `Downtown Barrie`, `Dining Event`, `Outdoor Dining Event`]} />
    <article>
      <section id="section1" className="align-top" style={{ minHeight: '350px', backgroundColor: '#DCDCDC', backgroundImage: `url(${wallbg})` }}>
        <div className="container">
          <div className="column">
            <img src={headerLogo} alt="Curb Appeal Logo" width="150px" />
          </div>
        </div>
      </section>
      <section id="promoVideo" style={{ Height: '378px', background: 'transparent', marginTop: '-149px', padding: '0' }}>
        <div className="container" style={{maxWidth:'672px'}}>
          {/* <div className="videoContainer" style={{maxWidth:'672px', maxHeight:'378px', Width:'672px', Height:'378px'}}> */}
          <div className="videoContainer" style={{position: 'relative', paddingBottom: '56.25%', height: '0', maxWidth: '100%', width:'100%'}}>
            <iframe style={{position: 'absolute',top: '0',left: '0',width: '100%', height: '100%'}} src="https://www.youtube.com/embed/tEKA6Cdspw0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
          </div>
        </div>
      </section>
      <section id="section2" style={{ minHeight: '500px', backgroundColor: '#fff', backgroundImage: `url(${spicebg})`, backgroundSize: 'initial', backgroundPosition:'right center' }}>
        <div className="container center">
          <div className="column">
            <div id="intro">
              <h2><em>AN</em> OUTDOOR DINING EXPERIENCE</h2>
              <h3>5 Courses • 5 Chefs • 1 Amazing Location</h3>
              <p>This event shines the light on a unique pocket of real estate in Barrie's downtown core each year. We've selected some of the city's best chefs to showcase their world-class talents. Each of the five courses is paired with wine or beer to compliment their flavours.</p>
            </div>
            <div>
              <h4 className="black">FRIDAY JUNE 14TH</h4>
              <h5>LOCATION TO BE REVEALED...</h5>
              {/* <p><strong>Along the sparkling shores of Kempenfelt Bay at our beautiful Heritage Park</strong></p> */}
            </div>
          </div>
        </div>
      </section>
      
      <section id="section3" style={{ minHeight: '400px', backgroundColor: '#D3D3D3', backgroundImage: `url(${cuttingboardbg})` }}>
        <div className="container center white">
          <div className="column">
             <CustomCountdown/>
          </div>
        </div>
      </section>
      <section id="section4" style={{ backgroundColor: '#fff' , backgroundImage: `url(${specklebg})`}}>
        <div className="container space-between">
          <div className="column sectionIcon">
            <img src={iconMartini} alt="martini glass icon" />
          </div>          
          <h3>The Chefs</h3>
  
          {Object.keys(chefs2).map(function(key) {
            return <div className="column chef-column" style={{minWidth:'218px'}}>
                    <div className="chef-logo-background">
                      <img src={chefs2[key]['img']} alt="logo" />
                    </div>
                    <h4>{chefs2[key]['name']}</h4>
                    <p>{chefs2[key]['blurb']}</p>
                    <a href={chefs2[key]['link']}>Learn More</a>
                  </div>
            })

            }
          
        </div>
      </section>
      <section id="section5" clasName="align-top" style={{ minHeight: '500px', backgroundColor: '#A9A9A9', backgroundImage: `url(${platterbg})` }}>
        <div className="container">
          <h3 className="centered white">with</h3>                            
            {Object.keys(partners).map(function(key) {
              
              return <div className="column">  
                        <a href={partners[key]['link']}><img src={partners[key]['logo']} alt="logo" /></a>
                    </div>
              })

            }
        </div>
      </section>
      <section id="section6" clasName="align-top" style={{ minHeight: '500px', backgroundColor: '#fff' }}>
        <div className="container">
          <h3>Sponsors</h3>
          <h2> Coming Soon...</h2>
          {/* {Object.keys(sponsers).map(function(key) {
              
              return <div className="column">  
                        <a href={sponsers[key]['link']}><img src={sponsers[key]['logo']} alt="logo" /></a>
                    </div>
              })

            } */}
          
        </div>
      </section>
      <section id="section7" style={{ minHeight: '500px', backgroundColor: '#808080', backgroundImage: `url(${marblebg})`}}>
        <div className="container">
          <div className="column left-justify white">
            <h2>Past Events</h2>
            <h2>#BARRIECURBAPPEAL</h2>
            <div className="socialIcons">
              <a href="https://www.facebook.com/DowntownBarrieBusinessAssociation/" target="_blank"><img src={iconFacebook} alt="Facebook icon" /></a>
              <a href="https://twitter.com/DowntownBarrie" target="_blank"><img src={iconTwitter} alt="Twitter icon" /></a>
              <a href="https://www.instagram.com/downtownbarrie" target="_blank"><img src={iconInstagram} alt="Instagram icon" /></a>
              <a href="https://www.youtube.com/channel/UCA60OYKOo0JmfTM91-yuBbA" target="_blank"><img src={iconYouTube} alt="YouTube icon" /></a>
            </div>
            <strong>@BARRIECURBAPPEAL</strong>
          </div>
          <div className="column">
            <div className="videoContainer" style={{position: 'relative', paddingBottom: '56.25%', height: '0', maxWidth: '100%', width:'100%', marginBottom:'10px'}}>
              <iframe style={{position: 'absolute',top: '0',left: '0',width: '100%', height: '100%'}} src="https://www.youtube.com/embed/BktyzM3hRSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>            
            <div className="videoContainer" style={{position: 'relative', paddingBottom: '56.25%', height: '0', maxWidth: '100%', width:'100%', marginBottom:'10px'}}>
              <iframe style={{position: 'absolute',top: '0',left: '0',width: '100%', height: '100%'}} src="https://www.youtube.com/embed/tEKA6Cdspw0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
            </div>
          </div>
          <div className="column white">
            
            <img src={gallery1} alt="image from past curb appeal event" className="galleryThumbnail" />
            <img src={gallery2} alt="image from past curb appeal event" className="galleryThumbnail" />
            <img src={gallery3} alt="image from past curb appeal event" className="galleryThumbnail" />
            <img src={gallery4} alt="image from past curb appeal event" className="galleryThumbnail" />
            <img src={gallery5} alt="image from past curb appeal event" className="galleryThumbnail" />
            <img src={gallery6} alt="image from past curb appeal event" className="galleryThumbnail" />

          </div>          
        </div>
      </section>
      <PreFooter />
    </article>
  </Layout>
)

export default IndexPage
