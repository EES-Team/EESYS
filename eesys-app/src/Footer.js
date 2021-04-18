import React from 'react'
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from './logo.png';

const Footer = () => {
    return (
<div className='container-fluid py-5'>
    <div className='container'>
        {/* <img src={Logo} alt="#"/> */}
        <h1 className='font-italic text-success pb-4'>EatEat</h1>
        <div className="row">
        {/* <h1>EatEat</h1> */}
        <div className="col-4">
            <ul className='footer-list pl-0'>
                <li><h5 className='font-weight-bold'>Last ned appen</h5></li>
                <li><a href="#"><img src="https://static.wolt.com/images/ios-nb-71cf46e4f0a173dd61575a1fe976a1dc.svg" alt="#"/></a></li>
                <li><a href="#"><img className='image' src="https://static.wolt.com/images/android-nb-5e0b5c8ebd0870036aa615b72fbe5916.png" alt="#"/></a></li>
            </ul>
        </div>
        <div class="col-4">
        <ul className='footer-list pl-0'>
                <li><h5 className='font-weight-bold'>La oss gjøre dette sammen</h5></li>
                <li><a href="#">For leveringspatnere</a></li>
                <li><a href="#">for restauranter</a></li>
                <li><a href="#">for butikker</a></li>
                <li><a href="#">For firma</a></li>
                <li><a href="#">jobb</a></li>
                
            </ul>
        </div>
        <div class="col-4">
        <ul className='footer-list pl-0'>
                <li><h5 className='font-weight-bold'>EatEat-Lenker</h5></li>
                <li><a href="#">Kontakt</a></li>
                <li><a href="#">Media</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Blogg</a></li>
                <li><a href="#">Ansvarlighet</a></li>
                <li><a href="#">sikkerhet</a></li>
                <li><a href="#">Om oss</a></li>
                
            </ul>
        </div>
        </div>
        <div class="row">
  <div class="col-4">&#169; EatEat 2021</div>
  <div class="col-4 footer-tc"><a href="#">Tilgjengelighetsærklæring</a> <a href="#">Vilkår og betingelser</a></div>
  <div class="col-4 footer-icons"><a href="#"><FaFacebook /></a><a href="#"><FaInstagram /></a><a href="#"><FaTwitter /></a><a href="#"><FaLinkedin /></a></div>
</div>
    </div>
</div>

)
}

export default Footer
