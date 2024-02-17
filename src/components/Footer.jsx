import React from 'react'
import { Facebook, Taligram, Twiter } from './Icons'

const Footersection = () => {
  return (
    <div id='tokens' className=' bg-footerbg bg-cover bg-center lg:bg-size bg-no-repeat '>
        <div className=' max-w-[1140px] px-3 mx-auto w-full'>
                <div className=' grid md:grid-cols-2 lg:grid-cols-3 pt-0 sm:pt-[50px] md:pt-[145px]'>
                        <div className=' lg:col-span-2 pt-7 sm:pt-10'>
                                <h3 className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[25px] text-[#B4B4B4] max-w-[356px] pb-[20px]'>Nullam viverra natoque amet et sed scelerisque viverra fringilla platea. Ullamcorper.</h3>
                                <div className=' flex items-center gap-3'>
                                        <a className=' duration-300 hover:-translate-y-2 hover:scale-110' href=""><Facebook/></a>
                                        <a className=' duration-300 hover:-translate-y-2 hover:scale-110' href=""><Twiter/></a>
                                        <a className=' duration-300 hover:-translate-y-2 hover:scale-110' href=""><Taligram/></a>
                                </div>
                        </div>
                        
                           <div className=' pt-6 lg:pt-0 flex justify-between'>
                               <ul>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' text-white font-recharge font-bold text-[16px] sm:text-[18px] leading-[21px]' href="">Quick links</a></li>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Home</a></li>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Features</a></li>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Marketplace</a></li>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Tokens</a></li>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">NexChat</a></li>
                                  <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">About</a></li>
                               </ul>
                               <ul>
                                <li className=' pb-[10px] sm:pb-[20px]'><a className=' text-white font-recharge font-bold text-[16px] sm:text-[18px] leading-[21px] ' href="">Information's</a></li>
                                <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Contact</a></li>
                                <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Phone</a></li>
                                <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">terms</a></li>
                                <li className=' pb-[10px] sm:pb-[20px]'><a className=' font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] text-[#B7B9B9] hover:text-white duration-300' href="">Privacy</a></li>

                               </ul>
                           </div>
                        
                </div>
                <hr className=' w-full h-[2px] bg-[#676D6D] mt-5 rounded-[16px] mb-[20px]' />
                <p className=' text-center font-recharge font-bold text-[13px] sm:text-[16px] leading-[19px] pb-[20px] text-[#B4B7B6]'>@Copyright.nexai</p>
        </div>      
    </div>
  )
}

export default Footersection

