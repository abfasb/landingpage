import React from 'react'
import '../index.css'
import Logo from '../images/Logo.png';
import Globe from '../images/Globe.png';
import Office from '../images/Office.png';

function Home(props) {
  return (
    <div id='main-homee'>
        <div className='main-navigation'>
            <nav className='navigation'>
                
        <img src= {Logo} alt="Logo of RR" />
                <a href="#main-home">Home</a>
                <a href={`#${props.name}`}>Services</a>
                <a href={`#${props.name}`}>Portfolio</a>
                <a href={`#${props.name}`}>About Us</a>
                <a href={`#${props.name}`}>Testimonials</a>

                <button className='contact-us'>Contact Us</button>
            </nav>
        </div>
        <div id='main-home'>
            <div className='cntr-content'>
                <img src={Globe} alt="background-image" />
            <h1>Welcome To <span>RR</span> Technology</h1>
            <p>Are you facing difficulties with your website?
Do you have a website but lack traffic?
No need to worry.</p>
        <button className='started'>Get Started</button>
            </div>
        </div>
        <div className='bottom-home'>
            <div className='semi-bottom-home'>
                <div className='heading'>
                    <h3 className='h3'>Thank You For your Interest In Us!</h3>
                    <div className='second'>
                   <h3>Founded over 7 years ago, RR Technologies is now the main <span className='web1'>Web Design</span> and <span className='web2'>Web Development</span> agency in Bangladesh.</h3>
                    </div>
                </div>
                <p>Technology and business fused together can bear fruitful results talking in terms of business flourishment and success. And this is what exactly we aim to deliver to our esteemed clients, offering our mix of reliability, capability, and longevity to get your website blossoming. We at RR Technologies excel in the area of digital marketing, web software, web development, web designing, and other web solutions that you may consider availing for your website growth.</p>
                <div className='second-home'>
                   <div>
                   <h1>hello</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, ea?</p>
                    </div> 
                    <div>
                        <img src={Office} alt="" className='second-img'/>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Home
