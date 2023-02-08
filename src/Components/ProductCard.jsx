/* import clothe from "../Assets/Clothing.jpg" */
import earring from "../Assets/DiamondEarrings.svg"
import naira from "../Assets/naira.svg"
import Verve from "../Assets/Verve.svg"
import Visa from "../Assets/Visa.svg"
import Paypal from "../Assets/Paypal.svg"

function ProductCard() {
  return (
    <>
      <div className=" flex flex-col ml-5.25 mr-6.25 md:mr-0 md:flex-row">
        <div className=" mr-13">
            <div className=" flex w-138.75 md:w-154.75 h-105 bg-primary text-black rounded-2.5 mb-26">
                {/* <img src= {clothe} alt="Diamond Earring" />  */}
                <div><img className="ml-14 mt-14.75" src= {earring} alt="Earring" /></div>
                <div className="mt-28.25 ml-12.5">
                  <p className="mb-7 font-Roboto text-9 leading-10.5">Diamond Stud</p>
                  <p className=" font-Inter text-4 leading-4.75">Quantity: 01</p>
                  <div className="mt-6">
                  <img className="inline" src= {naira} alt="Naira icon" />
                  <span className="text-6 leading-7.25 opacity-30">100,000</span>
                  </div>
                </div>
            </div>

            <div>
              <div className=" w-138.75 md:w-154.75 h-171.25 bg-primary flex rounded-2.5">
                  <div className="ml-11.5  text-justify mt-12">
                  <p className=" font-Roboto text-9 leading-10.5 mb-13.25">Delivery Information</p>
                  <div className=" font-Inter text-6 leading-7.25">
                    <div className="mb-8.25">Name :</div>
                    <div className="mb-10.75">Address :</div>
                    <div className="mb-10.5">City :</div>
                    <div className="mb-13.75">Zip Code :</div>
                    <div className="mb-13.75">Mobile :</div>
                    <div>Email :</div>
                  </div>
                  </div>

                  <div><button className=" w-50.75 h-14.5 bg-nude-like text-dark-green rounded-2.5 ml-3 mr-7.75 mt-8.75">Edit Information</button></div>

              </div>

              
              
            </div>
        </div>

        <div className=" bg-primary w-138.75 h-303.75 rounded-2.5 mt-14 md:mt-0">
          <div className="ml-11 mt-7">
            <p className="font-Roboto text-9 leading-10.5 mb-9.25">Order Summary</p>
            <div className="border-b w-117 border-line-color border-solid mb-7.75"></div>
            <input className="rounded-1.25 w-79.25 mb-7.75 h-9 pl-9 font-Roboto font-normal text-3.75 leading-4" type="number" placeholder="Enter coupon code..." />
            <button className="bg-dark-green text-cream-like w-32 h-9 outline-none hover:bg-blue-700 text-white py-2 px-4 rounded-1.25 font-normal font-Roboto text-3.75 leading-4">
              Apply coupon
            </button>
            <div className="border-b w-117 mb-7.25 border-line-color border-solid"></div>
          </div>

          <div className="text-justify ml-11">
          <p className="text-6 leading-7.25 font-Roboto mb-5">Payment Details</p>
          <div className="border-b w-117 border-line-color border-solid mb-6"></div>

          <div>
            <div className="mb-3.5 font-Roboto">
            <label>
              <input className="mr-3" type="radio" />
              Cash on Delivery
            </label>
            </div>

            <div className="mb-3.5 font-Roboto">
            <label>
              <input className="mr-3" type="radio" />
              Intel.store Card
            </label>
            </div>

            <div className="mb-3.5 font-Roboto">
            <label>
              <input className="mr-3" type="radio" />
              Paypal
            </label>
            </div>

            <div className="mb-3.5 font-Roboto">
            <label>
              <input className="mr-3" type="radio" />
              Credit or Debit card
            </label>
            </div>
          </div>
          </div>

          <div className="mt-9 mb-9 flex ml-19.5 space-x-6">
            <div>
              <img src= {Verve} alt="Verve logo" />
            </div>

            <div>
              <img src= {Visa} alt="Visa logo" />
            </div>

            <div>
              <img src= {Paypal} alt="Paypal logo" />
            </div>
          </div>

          <div className="text-justify ml-17.75">
            <div>
              <label className="form-label font-Roboto">Email *</label>
              <div>
                <input className="mt-4 mb-4 w-101 h-9 rounded-1.25 font-Roboto font-normal text-black" type="Email" placeholder="Type here...." />
              </div>
            </div>

            <div>
              <label className="form-label font-Roboto">Card Holder Name *</label>
              <div>
                <input className="mt-4 mb-4 w-101 h-9 rounded-1.25 font-Roboto font-normal text-black" type="Text" placeholder="Type here...." />
              </div>
            </div>

            <div className="flex">
              <div>
                <label className="form-label font-Roboto">Pin *</label>
                <div>
                  <input className="mt-4 mb-4 w-33.25 h-9 rounded-1.25 font-Roboto font-normal text-black"  Password="Text" placeholder="****" />
                </div>
              </div>

              <div className="ml-39.5">
              <label className="form-label w-28.25 h-9 font-Roboto">CVV *</label>
              <div className="">
                <input className="mt-4 mb-4 w-28.25 h-9 rounded-1.25 pl-3 font-Roboto font-normal text-black" type="Password" placeholder="***" />
              </div>
              </div>
            </div>

            <div>
              <input className="mt-4 ml-9 w-67.25 h-10 pl-17 text-4 leading-4.75 rounded-1.25 font-Roboto font-normal text-dark-green" type="text" placeholder="Confirm payment"  />
            </div>
          </div>
        </div>

      </div>

      <div>
        <input className="w-64 h-17.75 bg-nude-like text-center font-Inter text-xl rounded-2.5 mt-63.5" type="text" placeholder="Continue Shopping"/>
      </div>
    </>
  )
}

export default ProductCard
