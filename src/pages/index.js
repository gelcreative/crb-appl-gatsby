import React from "react"
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
import iconYouTube from '../images/iconYoutube.png'
import iconTwitter from '../images/iconTwitter.png'
import iconFacebook from '../images/iconFacebook.png'
import iconInstagram from '../images/iconInstagram.png'
import iconMartini from '../images/iconMartini.png'
import headerLogo from '../images/curbappeal-logo.png'


const partners = [
    { logo: grillicious, link: '#' },
    { logo: oliveoilco, link: '#' },
    { logo: homestead, link: '#' },
    { logo: ripejuice, link: '#' },
    { logo: jadore, link: '#' }
]
const chefs2 = [
    { name: "Amanda Rider", img: commongoodlogo, link: '#', blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan." },
    { name: "Sarah Jones", img: dunlopstlogo, link: '#', blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan." },
    { name: "Randy Feltis", img: groovytuesdayslogo, link: '#', blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan." },
    { name: "Kevin Isherwood", img: paintershalllogo, link: '#', blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan." },
    { name: "Painter's Hall", img: thefarmhouselogo, link: '#', blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan." },
]


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`Curb Appeal`, `Downtown Barrie`, `Dining Event`, `Outdoor Dining Event`]} />
    <article>
      <section id="section1" style={{ height: '400px', backgroundColor: '#DCDCDC', backgroundImage: `url(${wallbg})` }}>
        <div className="container">
          <div className="column">
            <img src={headerLogo} alt="Curb Appeal Logo" />
          </div>
        </div>
      </section>
      <section id="promoVideo" style={{ height: '378px', background: 'transparent', marginTop: '-189px', padding: '0' }}>
        <div className="container">
          <iframe width="672" height="378" src="https://www.youtube.com/embed/tEKA6Cdspw0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
        </div>
      </section>
      <section id="section2" style={{ height: '500px', backgroundColor: '#fff', backgroundImage: `url(${spicebg})`, backgroundSize: 'initial', backgroundPosition:'right center' }}>
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
              <p><strong>Along the sparkling shores of Kempenfelt Bay at our beautiful Heritage Park</strong></p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="section3" style={{ height: '500px', backgroundColor: '#D3D3D3', backgroundImage: `url(${cuttingboardbg})` }}>
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
            return <div className="column chef-column">
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
      <section id="section5" style={{ height: '500px', backgroundColor: '#A9A9A9', backgroundImage: `url(${platterbg})` }}>
        <div className="container">
          <h3 className="centered white">with</h3>           
        </div>
        <div className="container center container-partners">
              {Object.keys(partners).map(function(key) {
                
                return <div className="column">  
                          <a href={partners[key]['link']}><img src={partners[key]['logo']} alt="logo" /></a>
                      </div>
                })

                }
            </div>
      </section>
      <section id="section6" style={{ height: '500px', backgroundColor: '#fff' }}>
        <div className="container">
          <h3>Sponsors</h3>
          
        </div>
      </section>
      <section id="section7" style={{ height: '500px', backgroundColor: '#808080', backgroundImage: `url(${marblebg})`}}>
        <div className="container">
          <div className="column left-justify white">
            <h2>Past Events</h2>
            <h2>#BARRIECURBAPPEAL</h2>
            <div className="socialIcons">
              <a href="facebook.com"><img src={iconFacebook} alt="Facebook icon" /></a>
              <a href="twitter.com"><img src={iconTwitter} alt="Twitter icon" /></a>
              <a href="instagram.com"><img src={iconInstagram} alt="Instagram icon" /></a>
              <a href="youtube.com"><img src={iconYouTube} alt="YouTube icon" /></a>
            </div>
            <strong>@BARRIECURBAPPEAL</strong>
          </div>
          <div className="column">
            <iframe width="448" height="252" src="https://www.youtube.com/embed/tEKA6Cdspw0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <iframe width="448" height="252" src="https://www.youtube.com/embed/BktyzM3hRSM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>            
          </div>
          <div className="column white">
            THUMBNAILS
          </div>          
        </div>
      </section>
      <PreFooter />
    </article>
  </Layout>
)

export default IndexPage
