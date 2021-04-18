import React from 'react'

const Header = () => {
    return (
        <div className='jumbotran '>
            <div className='img-fluid header-img position-relative'>
                <img src="https://cdn.wolt.com/frontpage-assets/hero-images/6_Saturday.jpg" alt='#'/>
                <div className='position-absolute adress header-heading'>
                    <h2>Real Love of your life is your food not wife</h2>
                
                <form className='form-inline w-100'>
                    <fieldset>
                        <legend>Enter your street address</legend>
                        <input type="Text" class="form-control " placeholder="Enter Your Address" id="address"/>
                        <button type="submit" class="btn btn-success">Delivery</button>
                        <span className='mr-3'>OR</span>
                        <button type="submit" class="btn btn-success">Pickup</button>
                    </fieldset>
                </form>
                </div>
            </div>
            
        </div>
    )
}

export default Header
