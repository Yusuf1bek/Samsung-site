import React from 'react'
import "./hero.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper/modules';
import picture1 from "../../assets/images/image.png"
import picture2 from "../../assets/images/create-work.png"
import picture3 from "../../assets/images/epic-image.png"
import picture4 from "../../assets/images/epic-new.png"
import picture5 from "../../assets/images/our-idea.png"
import picture6 from "../../assets/images/upgrade.png"


const Hero = () => {
  return (
    <>
    <div className='container'>
    <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <h1 className='hero-title'>55 years of innovation a week wonder</h1>
                    <p>Celebrate Samsungs 55th anniversary with our newest products</p>
                    <button className='btn-more'>Learn more</button>
                    <button className='btn-shop'>Shop now</button>
                </div>
                <img src={picture1} alt="" width={550} height={360}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p>Save up to $1,400</p>
                    <h1 className='hero-title'>Our brightest idea</h1>
                    <p>Save $1,400 off an 85" Class Samsung Neo QLED 4K QN85D and experience the brightness of Quantum Matrix with Mini LEDs. Enjoy savings during Samsung Week to celebrate our 55th anniversary.</p>
                    <button className='btn-buy'>Buy now</button>
                </div>
                <img src={picture5} alt="" width={550} height={360}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p>Save up to $1,650+</p>
                    <h1 className='hero-title'>Unleash epic new possibilities</h1>
                    <p>Get up to $1,200 trade-in credit toward Galaxy Z Fold6. Plus, get $360 off select colors and 30% off Galaxy Watch Ultra.</p>
                    <button className='btn-buy'>Buy now</button>
                </div>
                <img src={picture4} alt="" width={550} height={360}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p>Save up to $1,050+</p>
                    <h1 className='hero-title'>Epic savings, your way</h1>
                    <p>Get up to $750 instant trade-in or up to $275 without trade-in towards Galaxy S24 Ultra. Plus, get double the storage on us and up to 30% off Galaxy Watch Ultra with purchase.</p>
                    <button className='btn-buy'>Buy now</button>
                </div>
                <img src={picture3} alt="" width={550} height={360}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p>Save up to $1,100</p>
                    <h1 className='hero-title'>Upgrade to the perfect</h1>
                    <p>Get up to $900 off select laundary sets. Plus, receive $200 Samsung credit and more</p>
                    <button className='btn-buy'>Buy now</button>
                </div>
                <img src={picture6} alt="" width={550} height={360}/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='hero-wrapper'>
                <div className='hero-content'>
                    <p>Save up to $1,000+</p>
                    <h1 className='hero-title'>Create your best work like a pro</h1>
                    <p>Get up to $800 instant trade-in credit toward Galaxy Tab S10. Plus, enjoy 50% off Book Cover Keyboard Slim</p>
                    <button className='btn-buy'>Buy now</button>
                </div>
                <img src={picture2} alt="" width={345} height={230} />
            </div>
        </SwiperSlide>
      </Swiper>
    </div>
    </>
  )
}

export default Hero