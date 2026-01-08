import React, { useState } from 'react';
import { BiLogoGmail } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';
import { IoLogoLinkedin, IoLogoTwitter } from 'react-icons/io5';
import { IoMdMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all required fields');
      return;
    }
    
    // Format the message for WhatsApp
    const whatsappMessage = `*New Contact Form Submission*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Company:* ${formData.company || 'Not provided'}%0A*Message:* ${formData.message}`;
    
    // WhatsApp number
    const phoneNumber = '6304830339';
    
    // Open WhatsApp with pre-filled message
    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, '_blank');
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  return (
    <div className='lg:my-16 lg:px-28 my-8 px-5' id='contact'>
      <h2 className='text-2xl lg:text-4xl text-center'>
        Contact <span className='font-extrabold'>Me</span>
      </h2>

      <div className='flex justify-between items-center mt-8 lg:mt-16 flex-col lg:flex-row gap-8'>
        <div className='lg:w-[40%] w-full'>
          <div className='w-full space-y-3 lg:space-y-5'>
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder='Your name' 
            />
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder='Email' 
            />
            <input 
              className='border-2 px-5 py-3 border-black rounded placeholder:text-[#71717A] text-sm w-full' 
              type="text" 
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder='Company / Recruiter name (optional)' 
            />
            <textarea 
              className='resize-none border-2 px-5 py-3 h-32 border-black placeholder:text-[#71717A] rounded text-sm w-full' 
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder='Message regarding job opportunity, role, or collaboration*'
            ></textarea>

            <div className='flex justify-between gap-3 lg:gap-5 flex-col lg:flex-row'>
              <button
                onClick={handleSubmit}
                className='bg-black justify-center w-full lg:w-auto lg:flex-1 hover:shadow-lg hover:scale-105 transition-all text-white px-3 py-2 rounded flex items-center gap-x-3 font-medium'
              >
                Get In Touch
              </button>

              <div className='flex items-center gap-x-2 lg:gap-x-5 justify-center lg:justify-start'>
                {[
                  { Icon: BiLogoGmail , link: "https://kottusaikumar2003@gmail.com" },
                  { Icon: IoLogoLinkedin, link: "https://www.linkedin.com/in/sai-kumar-10541b269" },
                  { Icon: IoLogoTwitter, link: "https://x.com/433Saikumar" },
                  { Icon: BsGithub, link: "https://github.com/kottusaikumar?tab=repositories" }
                ].map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white p-2 lg:p-3 rounded border-2 border-black hover:bg-black hover:text-white transition-all"
                  >
                    <item.Icon className="w-4 h-4 lg:w-5 lg:h-5" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className='lg:w-1/2 w-full'>
          <div className='font-extrabold text-2xl lg:text-5xl mt-5 lg:mt-0 space-y-1 lg:space-y-3'>
            <h2>Let's <span className='text-white' style={{ WebkitTextStroke: '1px black' }}>talk</span> for</h2>
            <h2>Something special</h2>
          </div>

          <p className='text-[#71717A] text-sm/6 lg:text-base mt-3 lg:mt-6'>Actively seeking opportunities to build intelligent, data-driven, and impactful applications using Data Science, AI/ML, and Full-Stack technologies.</p>
          
          <div className='font-semibold text-sm lg:text-xl flex flex-col mt-6 gap-2 lg:gap-4'>
            <a
              className='flex items-center gap-2 group hover:translate-x-1 transition-all'
              href="mailto:kottusaikumar2003@gmail.com"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-1'>
                <IoMdMail className="w-4 h-4 lg:w-5 lg:h-5" />
              </span>
              kottusaikumar2003@gmail.com
            </a>

            <a
              className='flex items-center gap-2 group hover:translate-x-1 transition-all'
              href="tel:+916304830339"
            >
              <span className='border-2 transition-all border-transparent group-hover:border-black rounded-full p-[5px]'>
                <FaPhone className="w-3 h-3 lg:w-4 lg:h-4" />
              </span>
              +91 6304830339
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}