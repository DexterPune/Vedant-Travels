
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kurlatopunetaxiservice() {



    const cardData =
    {
        keyword: 'Kurla to Pune Taxi Service  ',
        heading: 'Vedant Travels: Kurla to Pune Taxi Service   ',
        headingDescription: 'Vedant Travels offers reliable and comfortable taxi services for your journey from Kurla to Pune. Whether you are traveling for work, leisure, or with family, we have a range of vehicles including sedans, SUVs, and luxury cars to cater to your preferences. Our taxis are well-maintained, and our professional drivers ensure you have a smooth, safe, and comfortable ride.',

        top: 'Top Places to Visit in Pune with Vedant Travels',

       "topPlaces": [
        {
            "title": "Shaniwar Wada",
            "description": "A historic fort that was once the residence of the Peshwa rulers, Shaniwar Wada is a must-visit for history enthusiasts. The fort features impressive Maratha architecture and offers an engaging light-and-sound show that brings its fascinating history to life."
        },
        {
            "title": "Aga Khan Palace",
            "description": "Built in 1892, the Aga Khan Palace is not only a beautiful structure but also a significant historical site. It was used as a prison during the freedom struggle, and Mahatma Gandhi and his associates were held here. The palace is surrounded by lush gardens, providing a peaceful atmosphere for reflection."
        },
        {
            "title": "Sinhagad Fort",
            "description": "Located 35 km from Pune, Sinhagad Fort is a popular destination for trekkers and history lovers. The fort offers stunning views of the surrounding valleys and is known for its role in Maratha history. It’s a great place for those seeking adventure and historical exploration."
        },
        {
            "title": "Osho Ashram",
            "description": "Situated in Koregaon Park, the Osho Ashram is a globally recognized meditation and spiritual retreat center. Visitors can participate in a variety of meditation sessions and spiritual workshops, making it an ideal spot for relaxation and inner peace."
        },
        {
            "title": "Raja Dinkar Kelkar Museum",
            "description": "The Raja Dinkar Kelkar Museum houses a vast collection of Indian artifacts, including sculptures, musical instruments, and daily-use items from different historical periods. It’s a fascinating stop for anyone interested in India’s cultural heritage."
        },
        {
            "title": "Pune Okayama Friendship Garden (Pu La Deshpande Garden)",
            "description": "A beautiful Japanese-inspired garden located in Pune, this garden is perfect for a relaxing stroll. With lush greenery, vibrant flowers, and serene ponds, it offers a peaceful escape from the busy city life."
        },
        {
            "title": "Pashan Lake",
            "description": "Pashan Lake is a serene spot, perfect for nature lovers and birdwatching enthusiasts. Surrounded by lush greenery, it provides a quiet environment for photography, walks, and peaceful reflection."
        },
        {
            "title": "Bund Garden",
            "description": "Bund Garden is a riverside park ideal for a relaxing walk, boating, or picnicking. The tranquil atmosphere and natural beauty make it a lovely spot to unwind and enjoy time with family or friends."
        },
        {
            "title": "Saras Baug",
            "description": "Saras Baug is a popular temple complex in Pune, known for its beautiful Ganesha temple and peaceful gardens. It’s a great place to enjoy a leisurely walk, relax in the gardens, or simply seek spiritual solace."
        },
        {
            "title": "Fergusson College",
            "description": "One of Pune’s oldest and most prestigious educational institutions, Fergusson College is known for its colonial-era architecture and rich academic history. It’s a beautiful campus to explore, showcasing Pune’s educational legacy and architectural beauty."
        }
    ],

    "services": [
        {
            "name": "Kurla to Pune Taxi Service Rates",
            "description": "Vedant Travels offers affordable and competitive taxi service rates for the journey from Kurla to Pune. Whether you're looking for a one-way trip or a round trip, we provide transparent pricing with no hidden charges."
        },
        {
            "name": "Kurla to Pune Taxi Service Number",
            "description": "To book your taxi from Kurla to Pune, simply contact Vedant Travels at [insert contact number]. Our customer service team is available 24/7 to assist with bookings and any inquiries."
        },
        {
            "name": "Kurla to Pune One Way Cab Service",
            "description": "If you're looking for a one-way cab from Kurla to Pune, Vedant Travels offers convenient and comfortable services with various vehicle options, including Innova, Ertiga, and Sedans, ensuring a smooth and safe journey."
        },
        {
            "name": "Kurla to Pimpri Cab Service",
            "description": "Traveling from Kurla to Pimpri Chinchwad? Vedant Travels provides reliable taxi services, ensuring you have a comfortable ride. Our fleet includes a range of vehicles, including premium options like Innova Crysta and Ertiga."
        },
        {
            "name": "Kurla to Pune Station Cab Fare",
            "description": "The taxi fare from Kurla to Pune Station with Vedant Travels is designed to offer the best value for money. We offer a range of vehicles, including Sedans, Ertiga, and Innova, for your convenience and comfort."
        },
        {
            "name": "Kurla to Baner Cab Fare",
            "description": "The Kurla to Baner taxi fare with Vedant Travels is competitive and reasonable. Whether you choose a Sedan, Ertiga, or Innova, you can expect a smooth, comfortable ride with no hidden charges."
        },
        {
            "name": "Kurla to Pune Ertiga Cab Fare",
            "description": "For those seeking a comfortable and affordable ride from Kurla to Pune, the Ertiga offers ample space and a smooth journey. Vedant Travels ensures the best Ertiga taxi fare with transparent pricing."
        },
        {
            "name": "Kurla Station to Pune Taxi Service",
            "description": "Vedant Travels offers efficient taxi services from Kurla Station to Pune. With a fleet of well-maintained vehicles, including Innova, Ertiga, and Sedans, we guarantee a timely and comfortable ride."
        },
        {
            "name": "Kurla Station to Pune Sedan Taxi Service",
            "description": "Travel in comfort with our Sedan taxi service from Kurla Station to Pune. With experienced drivers and a focus on safety and comfort, Vedant Travels ensures a pleasant journey."
        },
        {
            "name": "Kurla to Viman Nagar Taxi",
            "description": "If you're traveling from Kurla to Viman Nagar, Vedant Travels offers reliable and affordable taxi services. Choose from a variety of vehicles to suit your needs, including the Innova, Ertiga, or Sedan."
        },
        {
            "name": "Kurla to Pune Round Trip Cab",
            "description": "For a round trip from Kurla to Pune, Vedant Travels offers flexible and convenient services. Whether you're staying in Pune for a few hours or a couple of days, we ensure you have a comfortable ride both ways."
        }
    ],


    "tableData": [
        ["Kurla to Pune Taxi Service Rates", "Kurla to Pune Taxi Service Number"],
        ["Kurla to Pune One Way Cab Service", "Kurla to Pimpri Cab Service"],
        ["Kurla to Pune Station Cab Fare", "Kurla to Baner Cab Fare"],
        ["Kurla to Pune Ertiga Cab Fare", "Kurla Station to Pune Taxi Service"],
        ["Kurla Station to Pune Sedan Taxi Service", "Kurla to Viman Nagar Taxi"],
        ["Kurla to Pune Round Trip Cab", ""]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand how important punctuality is when traveling. Whether you’re heading to Pune for business or leisure, our Kurla to Pune Taxi Service ensures timely pickups and drop-offs, making your journey smooth and hassle-free."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Choose from our fleet of well-maintained vehicles, including sedans, SUVs, and premium cars for your Kurla to Pune Taxi Service. All vehicles are equipped with air conditioning, comfortable seating, and spacious interiors to ensure a pleasant and relaxing ride."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our experienced drivers are skilled in handling long-distance routes like Kurla to Pune. They are familiar with the best routes and traffic patterns to ensure a safe, smooth, and efficient journey."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels offers competitive pricing for your Kurla to Pune Taxi Service with no hidden charges. You’ll receive an upfront, clear breakdown of pricing, ensuring transparency and value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and come with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols for a secure and worry-free trip."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether it’s an early morning or a late-night trip, Vedant Travels is available 24/7 for your Kurla to Pune Taxi Service. Our customer service team is always ready to assist you with booking and ensure a smooth ride."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking your Kurla to Pune Taxi is quick and easy with Vedant Travels. You can book online via our website or mobile app, or you can contact our customer service team for personalized assistance."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer customized travel packages for your Kurla to Pune Taxi Service. Whether you’re traveling for business, leisure, or family, we’ll tailor the journey to suit your needs and preferences."
        }
      ]
    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Kurla to Pune taxi with Vedant Travels?',
            answer: 'Booking your Kurla to Pune Taxi is simple. You can book online through our website or mobile app, or contact our customer service team for help with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are experienced in handling long-distance routes like Kurla to Pune. They are familiar with the best routes and traffic conditions to ensure a smooth and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Kurla to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars, for your Kurla to Pune Taxi Service. All our vehicles are well-maintained, comfortable, and equipped with the necessary amenities for long-distance travel.',
        },
        {
            id: 4,
            question: 'How do I pay for my Kurla to Pune taxi rental?',
            answer: 'We accept a range of payment options, including cash, credit/debit cards, and online payments via our app, making the payment process easy and convenient for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip taxi from Kurla to Pune?',
            answer: 'Yes, you can book a round-trip taxi for your Kurla to Pune Taxi Service. Simply provide your return details during booking, and we’ll ensure everything is arranged accordingly.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you upfront, ensuring complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a taxi for sightseeing during my Kurla to Pune trip?',
            answer: 'Yes, we offer customizable sightseeing tours as part of your Kurla to Pune Taxi Service. You can explore popular spots along the way with the help of our knowledgeable drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Kurla to Pune taxi?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific requirements, please let us know when booking, and we’ll make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Kurla and Pune?',
            answer: 'Yes, we offer corporate travel services for businesses requiring regular or occasional trips between Kurla and Pune. We can customize our services to meet your company’s specific needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Kurla to Pune trip?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, well-maintained vehicles, and transparent pricing. We guarantee a comfortable, safe, and hassle-free journey for your Kurla to Pune Taxi Service.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Patil",
            title: "Business Traveler",
            quote: "I had a great experience traveling from Kurla to Pune with Vedant Travels. The car was clean, comfortable, and the driver was very friendly. I will definitely choose them again for my future trips!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Deshmukh",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Kurla to Pune, and it was a smooth and pleasant journey. The vehicle was spacious, and the driver was punctual and professional. Highly recommend their service!",
            rating: 5,
        },
    ];
    
    
    
    
    
    








    const contactData = {
        heading: `${cardData.keyword} Contact Number`,
        contactNumbers: [
            "+91 8177869909",

        ],
        email: "booking@vedanttravels.in"
    };


    const Images = [
        {
            place: "/images/keyword/1.jpg",
            text: "Pune to Mumbai Cab",
        },
        {
            place: "/images/keyword/2.jpg",
            text: "Pune to Mumbai Airport Cab",
        },
        {
            place: "/images/keyword/3.jpg",
            text: "Pune to Mumbai International Airport Cab",
        },
        {
            place: "/images/keyword/4.jpg",
            text: "Pune to Mumbai One Way Cab",
        },
        {
            place: "/images/keyword/5.jpg",
            text: "Pune Mumbai Car Hire",
        },
        {
            place: "/images/keyword/6.jpg",
            text: "  Pune to Mumbai Taxi Fare ",
        },
        {
            place: "/images/keyword/7.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },

        {
            place: "/images/keyword/8.jpg",
            text: " Pimpri Chinchwad to Mumbai Cab",
        },

        {
            place: "/images/keyword/9.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "/images/keyword/10.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },

        {
            place: "/images/keyword/11.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/12.jpg",
            text: "Wakad to Mumbai Cab",
        },

        {
            place: "/images/keyword/13.jpg",
            text: "Hadapsar to Mumbai Cab",
        },

        {
            place: "/images/keyword/14.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "/images/keyword/15.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "/images/keyword/16.jpg",
            text: " Kothrud to Mumbai Cab",
        },
        {
            place: "/images/keyword/17.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "/images/keyword/18.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "/images/keyword/19.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "/images/keyword/20.jpg",
            text: " Pune to Mumbai Innova Crysta Cab",
        },
        
        {
            place: "/images/keyword/22.jpg",
            text: "Kondhwa to Mumbai Cab",
        },
        {
            place: "/images/keyword/23.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "/images/keyword/24.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "/images/keyword/25.jpg",
            text: " Pune Station to Mumbai Cabs Service",
        },
        {
            place: "/images/keyword/26.jpg",
            text: "Boat Club Road to Mumbai Cab ",
        },
        {
            place: "/images/keyword/27.jpg",
            text: " Vishrantwadi to Mumbai Cab",
        },
    ];


    const images = [
        { src: "/images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "/images/ourfleet/6.jpg", alt: "Image 1" },

    ];





    return (
        <div>
           

            <div
                className="site-breadcrumb"
                style={{ background: 'url(/img/breadcrumb/01.jpg)' }}
            >
                <div className="container">
                    <h2 className="breadcrumb-title">{cardData.keyword}</h2>

                </div>
            </div>

            <section id="about" className="jarallax text-light">
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className='text-white'>{cardData.keyword}</h1>
                            </div>
                            <div className="clearfix"></div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container-fluid" >
                    <div className="row container-fluid">
                        <div className="col-12 col-md-7 ">
                            <img src='/images/keyword/49.jpg' alt='img' />
                            <h3 className="py-1"
                                style={{
                                    color: '#322E77', // Red color for the title 
                                    textShadow: '5px 5px 10px rgba(255, 255, 255, 0.7)', // Light shadow effect
                                    fontWeight: 'bold'
                                }}


                            >{cardData.heading} </h3><p className='fw-bold '>{cardData.headingDescription}</p>
                            <div className="">
                                <p className='fw-bold py-3 darkcolorrr'>{cardData.top}</p>
                                {cardData.topPlaces.map((place, index) => (
                                    <div key={index} className="">
                                        <div
                                            style={{
                                                cursor: 'pointer',
                                                padding: '10px',
                                                marginBottom: '7px',
                                                borderRadius: '8px',
                                                transition: 'transform 0.2s'
                                            }}

                                        >
                                            <h4 className="mb-1 darkcolorrr">{place.title}</h4>
                                            <p className="mb-0">{place.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    marginBottom: '7px',
                                    borderRadius: '8px', // Optional: rounded corners
                                    transition: 'transform 0.2s' // Optional: smooth scaling effect
                                }}
                            >
                                {cardData.services.map((service, index) => (
                                    <div key={index} className=" my-4">
                                        <h4 className="py-1 darkcolorrr">{service.name}</h4>
                                        <p>{service.description}</p>
                                    </div>
                                ))}
                            </div>

                            <table className="table table-responsive Border-key my-2">
                                <tbody className=' Border-key'>
                                    {cardData.tableData.map((row, rowIndex) => (
                                        <tr className='Border-key ' key={rowIndex}>
                                            {row.map((cell, cellIndex) => (
                                                <td key={cellIndex} className=' Border-key bluecolor fw-bold' >{cell}</td>
                                            ))}
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <h3 className='pt-md-3'>{cardData.keyword + " Rates"}</h3>
                            <BusRatesTable />

                            <div id="why-choose-section"
                                className='px-2'>
                                {cardData.whychoose.map((item, index) => (
                                    <div key={index}>
                                        <h4 className="py-1 whycolor">{item.WhyChooseheading}</h4>
                                        <p>{item.WhyChoosedescription}</p>
                                    </div>
                                ))}
                            </div>


                            <div className="row twm-faq-section-1 m-b30">


                                <div className=" col-md-12 wow fadeInDown" data-wow-delay="0.2">
                                    <div className="twm-faq-info-wrap">

                                        <div className="section-head left">
                                            <h2 className="twm-large-title site-text-dark">FAQS {cardData.keyword} For Vedant Travels</h2>
                                        </div>


                                        <div className="twm-faq-info">
                                            <div className="accordion twm-acdn" id="sf-faq-accordion">


                                                <FAQKeyword faqData={faqData} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <TestimonialKeyword testimonials={testimonials} />

                            <div className='py-4'>

                                <div className="contact-box Borderr">
                                    <h3>{contactData.heading}</h3>
                                    <p className='text-black'>For booking inquiries or any assistance, please feel free to contact us:</p>
                                    <div className="contact-details">
                                        <p><strong className='darkcolor'>Mobile No:</strong></p>
                                        <ul>
                                            {contactData.contactNumbers.map((number, index) => (
                                                <li key={index}>
                                                    <a href={`tel:${number}`} className="contact-link fw-bold fs-5">
                                                        {number}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                        <p><strong className='darkcolor'>Email Id: </strong>
                                            <a href={`mailto:${contactData.email}`} className="contact-link">
                                                {contactData.email}
                                            </a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='col-12 col-md-4' >
                            {Images.map((e) => {
                                return (
                                    <div className="box1">
                                        <a
                                            href="./"
                                            className="d-flex justify-content-around align-items-center"
                                        >
                                            <div className="b1">
                                                <img src={e.place} alt="img" />
                                            </div>
                                            <div className="b2">
                                                {" "}
                                                <a href="./" className='px-3'>{e.text}</a>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}


                            <div className="gallery-container">
                                <h2 className="gallery-title">Our Fleets</h2>
                                <div className="gallery-row d-flex flex-wrap">
                                    {images.map((image, index) => (
                                        <div className="gallery-item col-md-4" key={index}>
                                            <img
                                                src={image.src}
                                                alt={image.alt}
                                                className="gallery-image"

                                            />
                                        </div>
                                    ))}

                                </div>
                            </div>

                            <div className=" rounded p-4 shadow-sm Uni_border "
                                style={{
                                    cursor: 'pointer',
                                    padding: '10px',
                                    border: '3px dotted #006BB7',
                                    marginBottom: '7px',
                                    fontWeight: 'bold',
                                }}

                            >
                                <h4 className="pb-3 pt-3 lead fw-bold text-dark">Contact Information</h4>

                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <div className="Small_border  rounded text-center py-2 " style={{ backgroundColor: '#006BB7' }}>
                                            <h4 className=" lead fw-semibold whitt text-dark">Phone Numbers</h4>
                                            <i className="bi bi-telephone-fill fs-1 mb-2"></i>
                                            <div className=''>
                                                <a href="tel:+918177869909" className="d-block  text-white">+91 8177869909</a>
                                                


                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border rounded text-center">
                                            <i className="bi bi-envelope fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#006BB7' }}>
                                                <h4 className=" fw-semibold lead whitt text-dark">Email</h4>
                                                <a href="mailto:booking@vedanttravels.in" className=" text-white d-block">
                                                    booking@vedanttravels.in
                                                </a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="col-12 mb-3 ">
                                        <div className="Small_border  rounded text-center">
                                            <i className="bi bi-house-fill fs-1 mb-2"></i>
                                            <div className='rounded py-2' style={{ backgroundColor: '#006BB7' }}>
                                                <h4 className=" fw-semibold lead whitt text-dark">Address</h4>
                                                <p className="whit text-white ">
                                                    <i> Vedant Travels <br/>
                                                    S/R No. 66/1. Dhore Patil Farm,<br/>
                                                    Near New  Bharat Bakery,
                                                    New Sangvi <br/>Pimpri-Chinchwad,
                                                    Pune Maharashtra India- 411027.
                                                    </i>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                    </div>
                </div>
            </section>



        </div>
    );
}

export default Kurlatopunetaxiservice;