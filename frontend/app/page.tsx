import React from 'react';
import Image from 'next/image';
import Layout from './components/Layout';

const experiences = [
  { year: '2017', title: 'Started College at University of South Carolina', description: 'Began my academic journey at the University of South Carolina.' },
  { year: '2019', title: 'Moved to Denver, Colorado', description: 'Relocated to Denver, marking a new chapter in my life and career.' },
  { year: '2019', title: 'Founded Hemp Farm & Whitelabel Solution', description: 'Launched my first major entrepreneurial venture in the hemp industry.' },
  { year: 'Late 2019', title: 'Early Crypto Adopter', description: 'Became an early adopter of numerous blockchain technologies including Ethereum, Solana, and Harmony.' },
  { year: '2021', title: 'Moved to Los Angeles & Started Consulting', description: 'Relocated to LA and began consulting for various cannabis companies while living in Hollywood Hills and Malibu.' },
  { year: 'Early 2021', title: 'Began Angel Investing', description: 'Started investing in promising startups and projects.' },
  { year: 'Early 2023', title: 'Founded Traddoo', description: 'Launched a proprietary trading firm that achieved significant success in its first year.' },
];

export default function Home() {
  return (
    <Layout>
      <section className="min-h-screen flex flex-col justify-center">
        <h1 className="text-6xl font-bold mb-4">Thomas McMahan Faulds</h1>
        <h2 className="text-4xl text-teal mb-4">Founder & Tech Polymath</h2>
        <p className="text-xl mb-8">Full Stack Developer | Angel Investor | Digital Marketing Expert</p>
        <button className="bg-teal text-navy px-6 py-3 rounded-lg text-lg font-semibold hover:bg-opacity-80 transition-colors w-max">
          Get In Touch
        </button>
      </section>

      <section className="min-h-screen" id="about">
        <h2 className="text-3xl font-bold mb-8"><span className="text-teal">01.</span> About</h2>
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-full md:w-1/3">
            <Image
              src="/images/G_swIO4J_400x400.png"
              alt="Thomas McMahan Faulds"
              width={400}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-2/3">
            <p className="mb-4">
              Hello! I&apos;m Thomas, a versatile entrepreneur and tech professional with a passion for innovation and growth. My journey began at 20 when I founded a hemp farm, showcasing my early entrepreneurial spirit. This experience laid the groundwork for my diverse career path.
            </p>
            <p className="mb-4">
              A significant milestone in my career was founding Traddoo, a proprietary trading firm that achieved over 7 figures in revenue in its first year. This success was largely due to my expertise in digital marketing, particularly in social media strategies.
            </p>
            <p className="mb-4">
              Today, I wear multiple hats in the tech ecosystem - from developing cutting-edge web applications to investing in promising startups and providing strategic consultancy. My blend of technical skills, marketing acumen, and business insight allows me to approach challenges from various angles, driving innovation and growth.
            </p>
            <ul className="grid grid-cols-2 gap-2 list-disc list-inside">
              <li>Full Stack Development</li>
              <li>Digital Marketing</li>
              <li>Startup Founding</li>
              <li>Angel Investing</li>
              <li>Social Media Strategy</li>
              <li>Tech Consultancy</li>
              <li>Project Management</li>
              <li>Strategic Planning</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="min-h-screen py-16" id="experience">
        <h2 className="text-3xl font-bold mb-8"><span className="text-teal">02.</span> Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-teal"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className={`flex items-center mb-8 ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
              <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'pl-8'}`}>
                <h3 className="text-xl font-bold">{exp.title}</h3>
                <p className="text-gray-400">{exp.year}</p>
                <p>{exp.description}</p>
              </div>
              <div className="w-2/12 flex justify-center">
                <div className="w-4 h-4 bg-teal rounded-full"></div>
              </div>
              <div className="w-5/12"></div>
            </div>
          ))}
        </div>
      </section>

      <section className="min-h-screen" id="contact">
        <h2 className="text-3xl font-bold mb-8"><span className="text-teal">03.</span> Contact</h2>
        <p className="mb-4">Get in touch with me at:</p>
        <a href="mailto:McMahan@traddoo.com" className="text-teal hover:underline block mb-2">McMahan@traddoo.com</a>
        <p className="mb-2">Find me on GitHub:</p>
        <a href="https://github.com/Traddoo" target="_blank" rel="noopener noreferrer" className="text-teal hover:underline">github.com/Traddoo</a>
      </section>
    </Layout>
  );
}
