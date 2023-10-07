import './App.css';
import card_one from '../src/assets/images/png/card-1-img.png'
import card_two from '../src/assets/images/png/card-2.png'
import card_three from '../src/assets/images/png/card-3.png'
import card_four from '../src/assets/images/png/card-4.png'
import bigimg from '../src/assets/images/png/big-img.png'
function App() {
  return (
    <>
      <section className=' d-flex align-center'>
        <div className='container'>
          <h2 className='section-heading'>
            Featured Product
          </h2>
          <div className='row justify-center'>
            <div className='col-xl-5 mb-4 mb-xl-4 col-10 position-relative'>
              <img src={bigimg} alt='' className='w-100 h-100 big-img' />
              <p className='position-absolute big-img-text'>Explore More Product  </p>
            </div>
            <div className='col-xl-7 col-12'>
              <div className='row'>
                <div className='col-md-6 col-12 mb-4'>
              <div className='card_one h-100'>
                    <img src={card_one} alt='' className='w-100 br-radius-15' />
                    <p className='text-property pt-4'>Concetti Di-Lusso ALESANDRDO Luxury
                        Turkish Spa Towels and ganic Bamboo
                      Robes 12 PC set
                    </p>
                    <div className='d-flex align-center justify-between pt-4'>
                      <p className='big_value'>$169.99</p>
                      <p className='small-value'>$199.99</p>
                      <button className='butn'>ADD CART</button>
                    </div>
              </div>

                </div>
                 <div className='col-md-6 col-12 mb-4'>
                  <div className='card_one h-100'>
                    <div className='bg-white br-radius-15'>
                      <img src={card_two} alt='' className='w-100 ' />
                      </div>
                    <p className='text-property pt-4 pb-4'>
                      Concetti Di-Lusso CAPPY Organic
                        Turkish Cotton - Set of 4 in Gift Box

                    </p>
                    <div className='d-flex align-center justify-between pt-4'>
                      <p className='big_value'>$59.99</p>
                      <p className='small-value'>$199.99</p>
                      <button className='butn'>ADD CART</button>
                    </div>
                 </div>

                </div>
             <div className='col-md-6 col-12 mb-4 mb-md-0 '>
                  <div className='card_one h-100'>
                    <div className='bg-white br-radius-15'>
                      <img src={card_three} alt='' className='w-100' />
                      </div>
                    <p className='text-property pt-4'>Concetti Di-Lusso Luxury 100% Turkish
                      Bamboo Shawl Spa Robe in Premium
                            Gift Box
                    </p>
                    <div className='d-flex align-center justify-between pt-4'>
                      <p className='big_value'>$159.99</p>
                      <p className='small-value'>$199.99</p>
                      <button className='butn'>ADD CART</button>
                    </div>
                </div>

              </div>
               <div className='col-md-6 col-12'>
                  <div className='card_one h-100'>
                    <img src={card_four} alt='' className='w-100 br-radius-15' />
                    <p className='text-property pt-4'>Concetti Di-Lusso ANNA Luxury 100% 
                          Turkish Organic Cotton VIP Spa 
                              Robe/Towels 10 PC Set 
                    </p>
                    <div className='d-flex align-center justify-between pt-4'>
                      <p className='big_value'>$59.99</p>
                      <p className='small-value'>$199.99</p>
                      <button className='butn'>ADD CART</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
