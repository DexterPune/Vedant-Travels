
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Vashitopunecab() {



    const cardData =
    {
        keyword: 'Vashi to Pune Cab ',
        heading: 'Vedant Travels: Vashi to Pune Cab',
        headingDescription: 'Vedant Travels offers reliable and affordable cab services from Vashi to Pune. Whether you are traveling for business, leisure, or with family, we provide a range of vehicles including sedans, SUVs, and luxury cars. Our fleet is well-maintained, and our professional drivers ensure a smooth, safe, and comfortable journey.',

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
            "name": "Vashi to Pune Cab",
            "description": "Vedant Travels offers reliable and comfortable taxi services from Vashi to Pune. Whether you're traveling for business, leisure, or family visits, our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a smooth and stress-free journey."
        },
        {
            "name": "Vashi to Pune Taxi Fare",
            "description": "Looking for affordable and transparent taxi fares from Vashi to Pune? Vedant Travels offers competitive rates with no hidden charges. Choose from our fleet of Sedans, Ertiga, and Innova for a comfortable and timely journey."
        },
        {
            "name": "Vashi to Pune Taxi Service",
            "description": "For a dependable taxi service from Vashi to Pune, choose Vedant Travels. We provide various vehicle options like Sedans, Ertiga, and Innova, ensuring a smooth and enjoyable ride with experienced drivers."
        },
        {
            "name": "Vashi to Pune One Day Cab",
            "description": "Looking for a one-day taxi service from Vashi to Pune? Vedant Travels offers hassle-free one-day cab services. Choose from vehicles like Sedans, Ertiga, and Innova, and enjoy a comfortable, timely, and affordable ride."
        },
        {
            "name": "Vashi to Pune Round Trip Cab",
            "description": "Vedant Travels provides convenient and affordable round-trip taxi services from Vashi to Pune. With various vehicle options such as Innova, Ertiga, and Sedans, enjoy a round-trip journey with professional drivers at competitive fares."
        },
        {
            "name": "Vashi to Pune Ertiga Cab",
            "description": "For a spacious and comfortable ride from Vashi to Pune, Vedant Travels offers Ertiga cabs. This vehicle is perfect for medium-sized groups or families, providing a comfortable and affordable option for your journey."
        },
        {
            "name": "Vashi to Pimpri Chinchwad Cab",
            "description": "Travel from Vashi to Pimpri Chinchwad with Vedant Travels for a comfortable and affordable ride. Our fleet includes Sedans, Ertiga, and Innova, ensuring you travel with ease and in comfort."
        },
        {
            "name": "Vashi to Wanowrie Cab",
            "description": "Choose Vedant Travels for a smooth and comfortable ride from Vashi to Wanowrie. Our fleet of well-maintained vehicles like Sedans, Ertiga, and Innova ensures you travel in comfort and style."
        },
        {
            "name": "Vashi to Pune Sedan Cab",
            "description": "Looking for a Sedan taxi from Vashi to Pune? Vedant Travels offers comfortable and affordable Sedan services, ensuring a smooth and enjoyable ride with experienced drivers."
        },
        {
            "name": "Vashi to Pune Innova Crysta",
            "description": "For a luxurious and comfortable ride from Vashi to Pune, choose Vedant Travels' Innova Crysta. With ample space and a smooth ride, the Innova Crysta offers a premium travel experience."
        },
        {
            "name": "Vashi to Aundh Cab",
            "description": "Travel from Vashi to Aundh with Vedant Travels for a reliable and affordable taxi service. Our fleet includes various vehicles such as Sedans, Ertiga, and Innova, ensuring a comfortable and timely journey."
        },
        {
            "name": "Cab Service in Vashi",
            "description": "Vedant Travels offers reliable and efficient cab services in Vashi. Whether you need a local ride or are traveling to Pune, our fleet of well-maintained vehicles and experienced drivers ensure a smooth and timely journey."
        },
        {
            "name": "Vashi to Pune Station Cab Service",
            "description": "Need a taxi from Vashi to Pune Station? Vedant Travels provides reliable cab services at competitive rates. Our fleet includes Sedans, Ertiga, and Innova, ensuring a smooth, safe, and timely journey to the station."
        }
    ],


  "tableData": [
    ["Vashi to Pune Cab", "Vashi to Pune Taxi Fare"],
    ["Vashi to Pune Taxi Service", "Vashi to Pune One Day Cab"],
    ["Vashi to Pune Round Trip Cab", "Vashi to Pune Ertiga Cab"],
    ["Vashi to Pimpri Chinchwad Cab", "Vashi to Wanowrie Cab"],
    ["Vashi to Pune Sedan Cab", "Vashi to Pune Innova Crysta"],
    ["Vashi to Aundh Cab", "Cab Service in Vashi"],
    ["Vashi to Pune Station Cabs Service", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality. Whether you're traveling from Vashi to Pune for business or leisure, we ensure timely pickups and drop-offs so that you can have a stress-free and on-time journey."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a wide variety of well-maintained vehicles for your Vashi to Pune journey. Our fleet includes sedans, SUVs, and luxury cars, all equipped with modern amenities, air conditioning, and ample space for a comfortable and enjoyable ride."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced drivers are familiar with the Vashi to Pune route and are dedicated to providing you with a safe, smooth, and pleasant journey. They are professional, courteous, and committed to making your trip as enjoyable as possible."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for the Vashi to Pune cab service. Our pricing structure is clear, with no hidden charges, so you can enjoy an affordable journey without any surprises."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and equipped with the latest safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure a secure and comfortable journey from Vashi to Pune."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need a cab during the day or late at night, Vedant Travels is available 24/7 for your Vashi to Pune travel needs. Our customer service team is always ready to assist you with your bookings, ensuring a hassle-free experience."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking a cab from Vashi to Pune is easy with Vedant Travels. You can book through our website or mobile app, or simply contact our customer service team for assistance in making your booking."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "We offer flexible travel packages to suit your specific needs. Whether you're traveling for business, leisure, or any special occasion, we can tailor the trip to meet your requirements and ensure a smooth journey from Vashi to Pune."
    }
  ]
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a cab from Vashi to Pune?',
            answer: 'You can easily book a cab from Vashi to Pune online via our website or mobile app. Alternatively, you can reach out to our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for the Vashi to Pune journey?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and premium cars, all designed to ensure a comfortable and pleasant travel experience.',
        },
        {
            id: 3,
            question: 'What payment options are available for my Vashi to Pune cab?',
            answer: 'We accept various payment options, including cash, credit/debit cards, and online payments via our mobile app, making it convenient for you to settle the fare.',
        },
        {
            id: 4,
            question: 'Can I book a round-trip cab from Vashi to Pune?',
            answer: 'Yes, we offer round-trip services. Simply provide your return details during the booking process, and we will handle the rest for you.',
        },
        {
            id: 5,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring full transparency.',
        },
        {
            id: 6,
            question: 'Can I use the Vashi to Pune cab for sightseeing?',
            answer: 'Yes, we offer sightseeing services as part of your Vashi to Pune journey. Let us know your preferred spots, and we can tailor your trip accordingly.',
        },
        {
            id: 7,
            question: 'What is the luggage allowance for the cab from Vashi to Pune?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please inform us during the booking process, and we will make necessary arrangements.',
        },
        {
            id: 8,
            question: 'Is Vedant Travels available for corporate travel from Vashi to Pune?',
            answer: 'Yes, we offer corporate travel services for business trips, meetings, and conferences. We can customize the travel package to meet your company\'s needs.',
        },
        {
            id: 9,
            question: 'Why should I choose Vedant Travels for my Vashi to Pune journey?',
            answer: 'Vedant Travels offers reliable service, professional drivers, affordable rates, and well-maintained vehicles. We ensure a safe, smooth, and enjoyable ride for all our customers traveling from Vashi to Pune.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sandeep Joshi",
            title: "Business Traveler",
            quote: "I had a very smooth experience traveling from Vashi to Pune with Vedant Travels. The driver was courteous, the vehicle was clean, and the ride was comfortable. Highly recommended!",
            rating: 5,
        },
        {
            name: "Ms. Anjali Kapoor",
            title: "Frequent Traveler",
            quote: "I frequently travel from Vashi to Pune for business meetings, and I always choose Vedant Travels. Their service is consistently reliable, and the drivers are professional. I trust them for all my travel needs!",
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
            place: "./images/keyword/1.jpg",
            text: "Pune to Mumbai Cab",
        },
        {
            place: "./images/keyword/2.jpg",
            text: "Pune to Mumbai Airport Cab",
        },
        {
            place: "./images/keyword/3.jpg",
            text: "Pune to Mumbai International Airport Cab",
        },
        {
            place: "./images/keyword/4.jpg",
            text: "Pune to Mumbai One Way Cab",
        },
        {
            place: "./images/keyword/5.jpg",
            text: "Pune Mumbai Car Hire",
        },
        {
            place: "./images/keyword/6.jpg",
            text: "  Pune to Mumbai Taxi Fare ",
        },
        {
            place: "./images/keyword/7.jpg",
            text: "Pune to Mumbai Online Cab Booking",
        },

        {
            place: "./images/keyword/8.jpg",
            text: " Pimpri Chinchwad to Mumbai Cab",
        },

        {
            place: "./images/keyword/9.jpg",
            text: "Baner to Mumbai Cabs",
        },
        {
            place: "./images/keyword/10.jpg",
            text: "Hinjewadi to Mumbai Cab",
        },

        {
            place: "./images/keyword/11.jpg",
            text: "Pimple Saudagar to Mumbai Cab Service",
        },
        {
            place: "./images/keyword/12.jpg",
            text: "Wakad to Mumbai Cab",
        },

        {
            place: "./images/keyword/13.jpg",
            text: "Hadapsar to Mumbai Cab",
        },

        {
            place: "./images/keyword/14.jpg",
            text: "Kalyani Nagar to Mumbai Taxi",
        },
        {
            place: "./images/keyword/15.jpg",
            text: "Koregaon Park to Mumbai Cab",
        },
        {
            place: "./images/keyword/16.jpg",
            text: " Kothrud to Mumbai Cab",
        },
        {
            place: "./images/keyword/17.jpg",
            text: "Kharadi to Mumbai Cab",
        },
        {
            place: "./images/keyword/18.jpg",
            text: "Shivajinagar to Mumbai Cab",
        },
        {
            place: "./images/keyword/19.jpg",
            text: "Pune to Mumbai Ertiga Cab",
        },
        {
            place: "./images/keyword/20.jpg",
            text: " Pune to Mumbai Innova Crysta Cab",
        },
        
        {
            place: "./images/keyword/22.jpg",
            text: "Kondhwa to Mumbai Cab",
        },
        {
            place: "./images/keyword/23.jpg",
            text: "Viman Nagar to Mumbai Cabs",
        },
        {
            place: "./images/keyword/24.jpg",
            text: "Katraj to Mumbai Cab Service",
        },
        {
            place: "./images/keyword/25.jpg",
            text: " Pune Station to Mumbai Cabs Service",
        },
        {
            place: "./images/keyword/26.jpg",
            text: "Boat Club Road to Mumbai Cab ",
        },
        {
            place: "./images/keyword/27.jpg",
            text: " Vishrantwadi to Mumbai Cab",
        },
    ];


    const images = [
        { src: "./images/ourfleet/1.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/5.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/2.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/3.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/4.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/7.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/8.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/9.jpg", alt: "Image 1" },
        { src: "./images/ourfleet/6.jpg", alt: "Image 1" },

    ];


    const jsonData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Vashi to Pune Cab Service | Vedant Travels",
        "description": "Book your Vashi to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable and affordable taxi service for your journey from Vashi to Pune, Pimpri Chinchwad, Wanowrie, Aundh, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "210"
        }
      };
      
     
      


    return (
        <div>
           
           <Helmet>
        <title>Vashi to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Vashi to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Affordable and reliable taxi service for your journey from Vashi to Pune, Pimpri Chinchwad, Wanowrie, Aundh, and more." />
        <meta name="keywords" content="Vashi to Pune Cab, Vashi to Pune Taxi Fare, Vashi to Pune One Way Cab, Vashi to Pune Round Trip Cab, Vashi to Pune Ertiga Cab, Vashi to Pimpri Chinchwad Cab, Vashi to Wanowrie Cab, Vashi to Pune Sedan Cab, Vashi to Pune Innova Crysta, Vashi to Aundh Cab, Cab Service in Vashi, Vashi to Pune Station Cab Service" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/vashi-to-pune-cab-service" />
        <script type="application/ld+json">
          {JSON.stringify(jsonData)}
        </script>
      </Helmet>
            <div
                className="site-breadcrumb"
                style={{ background: 'url(./img/breadcrumb/01.jpg)' }}
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
                            <img src='./images/keyword/9.jpg' alt='img' />
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

export default Vashitopunecab;