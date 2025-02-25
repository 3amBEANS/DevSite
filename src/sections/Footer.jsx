import React from 'react';

const Footer = () => {
  return (
    <section className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
        <div className="text-white-500 flex gap-2">
            <p>Terms & Conditions</p>
            <p>|</p>
            <p>Privacy Policy</p>
        </div>

        <div className="flex gap-3">
            <div className='social-icon flex justify-center items-center w-10 h-10 rounded-full bg-gray-800'>
                <a href="https://github.com/3amBEANS" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/github.svg" alt="github" className='w-6 h-6' />
                </a>
            </div>
            {/* <div className='social-icon flex justify-center items-center w-10 h-10 rounded-full bg-gray-800'>
                <a href="https://twitter.com/your-twitter-username" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/twitter.svg" alt="twitter" className='w-6 h-6' />
                </a>
            </div> */}
            
            <div className='social-icon flex justify-center items-center w-10 h-10 rounded-full bg-gray-800'>
                <a href="https://www.instagram.com/aiden.ha_acc/" target="_blank" rel="noopener noreferrer">
                    <img src="/assets/instagram.svg" alt="instagram" className='w-6 h-6' />
                </a>
            </div>
        </div>

        <p className='text-white-500'>© Aiden. All rights reserved. </p>
    </section>
  );
};

export default Footer;