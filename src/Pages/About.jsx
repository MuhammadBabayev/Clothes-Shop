import React from 'react'
import './styles/AboutStyle.css'
import { FaPeopleGroup } from "react-icons/fa6";
import { CiBookmark } from "react-icons/ci";
import { CiShop } from "react-icons/ci";
import { GrUserWorker } from "react-icons/gr";

const About = () => {
    return (
        <>
            <section className='section12'>
                <div>
                    <p>Explore the Fashion Streets,</p>
                    <p>Find Your Style with Us!</p>
                </div>
            </section>
            <section className='section13'>
                <p>Why We?</p>
                <div className="items">
                    <div>
                        <FaPeopleGroup />
                        <p>1k+ Customers</p>
                    </div>
                    <div>
                        <CiBookmark />
                        <p>50+ Brand Global officers</p>
                    </div>
                    <div>
                        <GrUserWorker />
                        <p>100+ employees</p>
                    </div>
                    <div>
                        <CiShop />
                        <p>70+ shop</p>
                    </div>
                </div>
            </section>
            
            <section className='section14'>
                <p>About Us</p>
                <div className="divs">
                    <div className="up">
                        <div className='myDiv1'>
                            <span>About Our Values:</span>
                            <p>At our clothing store, we uphold a commitment to excellence. We believe in quality over quantity. Our focus is on each customer's experience, ensuring that we provide exceptional service and exceed expectations with every interaction.</p>
                        </div>
                        <div className='items'>
                            <div>
                                <span>AIntegrity:</span>
                                <p>At our clothing store, integrity is fundamental. We adhere to the highest ethical standards, ensuring honesty and transparency in all our interactions. We are committed to meeting and exceeding expectations, building trust with our customers every step of the way.</p>
                            </div>
                            <div>
                                <span>Commitment:</span>
                                <p>Our dedication knows no bounds. We are unwavering in our commitment to our work and our clients, forging strong and enduring relationships based on trust and mutual respect.</p>
                            </div>
                            <div>
                                <span>Passion:</span>
                                <p>Passion drives us forward. It fuels our pursuit of excellence, propelling us to continuously grow, innovate, and deliver exceptional products and services to our customers.</p>
                            </div>
                        </div>
                    </div>
                    <div className="down">
                        <div className='items'>
                            <div>
                                <span>Learning:</span>
                                <p>Continuous improvement is at the core of our ethos. Our team is dedicated to seeking out opportunities for growth and development, constantly expanding their knowledge and honing their skills to better serve our customers.</p>
                            </div>
                            <div>
                                <span>Teamwork:</span>
                                <p>Collaboration is key to our success. Each member of our team excels in working together, leveraging their unique strengths to achieve common goals. We foster a culture of support and camaraderie, where everyone is valued and encouraged to contribute their best.</p>
                            </div>
                        </div>
                        <div className='myDiv1'>
                            <span>Our Goal Statement:</span>
                            <p>At our clothing store, we are driven by action, progress, and ambition. As a dynamic retailer, we have achieved significant milestones, but our hunger for growth and innovation remains insatiable. Are you ready to embark on this journey with us? Get in touch today and let's grow together.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className='section15'>
                <img src="https://www.fastfashionnews.co.uk/wp-content/uploads/2023/08/woman-wearing-fendi-branded-coat-696x464.webp" alt="brand" />
                <div>
                    <span>Our Story</span>
                    <p>In 2015, we set out to celebrate diversity in the fashion industry. By bringing together the unique styles and products of various brands we collaborate with, we aimed to help everyone find their own style. Our mission was to enable fashion enthusiasts to express their individuality and bridge the gap between different brands.</p>
                    <p>Over the years, the products of the brands we collaborate with have won the hearts of fashion lovers. Our customers find unique and original pieces every time they visit, with a variety of options to express their style. We operate with the mission of helping each of our customers find their own style and stand out.</p>
                    <p>Today, the collections of the brands we collaborate with have become favorites among fashion enthusiasts. We not only provide them with a shopping experience but also make their fashion journey more enjoyable by introducing them to different brands and helping them discover new styles.</p>
                </div>
            </section>
        </>
    )
}

export default About