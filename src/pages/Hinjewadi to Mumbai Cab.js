
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Hinjewaditomumbaicab() {



    const cardData =
    {
        keyword: 'Hinjewadi to Mumbai Cab   ',
        heading: 'Vedant Travels: Hinjewadi to Mumbai Cab   ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Hinjewadi to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

"topPlaces": [
        {
            "title": "Gateway of India",
            "description": "One of Mumbai’s most iconic landmarks, built in 1924 to commemorate the visit of King George V and Queen Mary. Overlooking the Arabian Sea, this magnificent structure is a favorite among tourists for sightseeing and photography. You can also take a ferry from here to visit Elephanta Caves."
        },
        {
            "title": "Marine Drive",
            "description": "Also known as the Queen’s Necklace, Marine Drive is a 3.6 km-long boulevard along the coastline of Mumbai. It’s the perfect spot for an evening stroll, enjoying the sea breeze, or watching the sunset. At night, the streetlights form a stunning arc that resembles a necklace, making it one of the most picturesque locations in Mumbai."
        },
        {
            "title": "Elephanta Caves",
            "description": "A UNESCO World Heritage Site, the Elephanta Caves are located on Elephanta Island and feature ancient rock-cut temples dedicated to Lord Shiva. The caves date back to the 5th–7th centuries and are known for their intricate sculptures and carvings. A ferry ride from the Gateway of India takes you to this historical site, offering a blend of nature, history, and spirituality."
        },
        {
            "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
            "description": "A masterpiece of Victorian Gothic architecture, CSMT is not just a railway station but a UNESCO-listed historic site. The station, formerly known as Victoria Terminus, features grand turrets, stained glass windows, and intricate stone carvings, showcasing the colonial-era grandeur of Mumbai."
        },
        {
            "title": "Siddhivinayak Temple",
            "description": "One of the most revered Hindu temples in Mumbai, Siddhivinayak Temple is dedicated to Lord Ganesha. Thousands of devotees visit the temple daily to seek blessings, including Bollywood celebrities and politicians. The temple’s beautiful architecture and spiritual ambiance make it a must-visit."
        },
        {
            "title": "Juhu Beach",
            "description": "Juhu Beach is among the most famous beaches in Mumbai, known for its lively atmosphere and delicious street food. Whether you want to relax by the sea, take a camel ride, or try local delicacies like pav bhaji, vada pav, and bhel puri, this beach has something for everyone. It's also a popular spot for catching a mesmerizing sunset."
        },
        {
            "title": "Colaba Causeway",
            "description": "If you love shopping, Colaba Causeway is the place to be. This bustling street market is filled with stalls selling jewelry, handicrafts, clothes, antiques, and souvenirs. Besides shopping, you can also explore the charming cafés and restaurants in the area, such as Leopold Café, a historic eatery loved by tourists."
        },
        {
            "title": "Haji Ali Dargah",
            "description": "Situated on a small islet off the coast of Worli, Haji Ali Dargah is a significant religious and architectural landmark in Mumbai. This Indo-Islamic shrine is dedicated to the Sufi saint Haji Ali and is accessible via a narrow causeway that gets submerged during high tide. The dargah’s serene atmosphere and breathtaking views make it a must-visit destination."
        },
        {
            "title": "Bandra-Worli Sea Link",
            "description": "An architectural marvel, the Bandra-Worli Sea Link is an eight-lane bridge that connects South Mumbai to the suburbs. The cable-stayed bridge offers spectacular views of the Arabian Sea and Mumbai’s skyline, especially when illuminated at night. It significantly reduces travel time between Bandra and Worli, making it a vital part of Mumbai’s infrastructure."
        },
        {
            "title": "Bollywood Film City",
            "description": "Mumbai is the heart of the Indian film industry, and Film City in Goregaon offers visitors a chance to witness Bollywood magic up close. With multiple studios, sets, and backdrops, Film City is where countless Bollywood movies and TV shows are filmed. Guided tours provide an exclusive behind-the-scenes look at Mumbai’s thriving cinema industry, making it a must-visit for movie buffs."
        }
    ],


"services": [
    {
        "name": "Hinjewadi to Borivali Taxi",
        "description": "Traveling from Hinjewadi to Borivali? Vedant Travels offers reliable and comfortable taxi services for this route. Book your ride for a smooth journey at affordable prices."
    },
    {
        "name": "Hinjewadi to Santacruz Taxi",
        "description": "For a hassle-free ride from Hinjewadi to Santacruz, choose Vedant Travels. We provide well-maintained vehicles and professional drivers, ensuring a comfortable journey."
    },
    {
        "name": "Hinjewadi to Andheri Taxi",
        "description": "Need a cab from Hinjewadi to Andheri? Vedant Travels offers reliable and affordable taxi services for this route. Whether you're traveling for business or leisure, our drivers ensure a smooth ride."
    },
    {
        "name": "Hinjewadi to Mumbai Airport Taxi",
        "description": "Book a convenient and affordable taxi service from Hinjewadi to Mumbai Airport with Vedant Travels. We ensure timely arrivals and a comfortable journey to catch your flight without any stress."
    },
    {
        "name": "Hinjewadi to International Airport Cab",
        "description": "For a reliable ride to Mumbai International Airport from Hinjewadi, Vedant Travels offers professional and affordable airport taxi services. Travel comfortably with us for a stress-free airport experience."
    },
    {
        "name": "Hinjewadi to Airport Fare",
        "description": "Looking for affordable taxi fares from Hinjewadi to Mumbai Airport? Vedant Travels provides transparent pricing with no hidden charges, ensuring you know exactly what you’re paying for your ride."
    },
    {
        "name": "Hinjewadi to Mumbai Drop Taxi Fare",
        "description": "Whether you’re traveling to Mumbai for business or leisure, Vedant Travels provides competitive taxi fares for a one-way drop from Hinjewadi to Mumbai. Book your ride online for easy and fast service."
    },
    {
        "name": "Hinjewadi to Mumbai Central Taxi Fare",
        "description": "Planning to travel from Hinjewadi to Mumbai Central? Vedant Travels offers comfortable taxi services at competitive fares, ensuring you reach your destination smoothly and on time."
    },
    {
        "name": "Hinjewadi to Goregaon Taxi Fare",
        "description": "Need a taxi from Hinjewadi to Goregaon? Vedant Travels provides affordable and reliable cab services. Book your ride for a comfortable and timely journey."
    },
    {
        "name": "Hinjewadi to Dadar Cab Service",
        "description": "For a smooth and convenient ride from Hinjewadi to Dadar, choose Vedant Travels. Our cab service ensures a pleasant experience, with professional drivers and well-maintained vehicles."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "For reliable transportation from Pune to Mumbai Airport, Vedant Travels offers affordable, timely, and comfortable taxi services. Book with us for a seamless airport experience."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Traveling with family or a group? Choose the Ertiga cab for your Pune to Mumbai journey. Spacious and cost-effective, the Ertiga is perfect for a comfortable ride."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "Looking for a luxurious and spacious ride? Book an Innova cab for your Pune to Mumbai journey with Vedant Travels. We offer premium travel at competitive prices."
    },
    {
        "name": "Hinjewadi to Mumbai Airport Cab Charges",
        "description": "Get the best taxi rates for your journey from Hinjewadi to Mumbai Airport with Vedant Travels. Our transparent pricing ensures no hidden fees or surprises—just great service at the right price."
    },
    {
        "name": "Hinjewadi to Andheri Cabs",
        "description": "Need a reliable cab from Hinjewadi to Andheri? Vedant Travels offers dependable and affordable taxi services, ensuring a smooth ride to your destination."
    },
    {
        "name": "Hinjewadi to Dadar Cab",
        "description": "For a seamless journey from Hinjewadi to Dadar, book your cab with Vedant Travels. Our experienced drivers will get you there comfortably and on time."
    },
    {
        "name": "Hinjewadi to Borivali Cabs",
        "description": "Book a reliable cab from Hinjewadi to Borivali with Vedant Travels. We provide well-maintained vehicles and professional drivers for a smooth and timely ride."
    },
    {
        "name": "Hinjewadi to Thane Cab Fare",
        "description": "Traveling from Hinjewadi to Thane? Vedant Travels offers affordable cab services at competitive fares. Our drivers ensure a smooth ride to your destination."
    },
    {
        "name": "Hinjewadi to Virar Cab Fare",
        "description": "For a comfortable and affordable ride from Hinjewadi to Virar, Vedant Travels offers reliable taxi services. Book your ride online and enjoy a stress-free journey."
    },
    {
        "name": "Hinjewadi to Mumbai Ertiga Cab Fare",
        "description": "Looking for an Ertiga cab from Hinjewadi to Mumbai? Vedant Travels offers affordable and comfortable rides with competitive fares. Perfect for group or family travel."
    },
    {
        "name": "Hinjewadi to Mumbai Innova Cab Fare",
        "description": "Book an Innova cab for your journey from Hinjewadi to Mumbai. Our pricing is competitive, ensuring you get comfort and luxury at an affordable price."
    },
    {
        "name": "7-Seater Innova on Rent in Pune",
        "description": "Need a 7-seater Innova for your journey? Vedant Travels offers Innova rentals in Pune, perfect for family trips or group travel. Enjoy extra space and comfort for your ride."
    },
    {
        "name": "Innova Crysta Per Km Rate Pune",
        "description": "Vedant Travels offers competitive per-kilometer rates for the premium Innova Crysta. Ideal for a luxurious and comfortable journey, whether it’s a one-way trip or round-trip."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909. We offer affordable, reliable, and comfortable taxi services from Hinjewadi to Mumbai and other routes."
    }
],


   "tableData": [
    ["Hinjewadi To Borivali Taxi", "Hinjewadi To Santacruz Taxi"],
    ["Hinjewadi To Andheri Taxi", "Hinjewadi To Mumbai Airport Taxi"],
    ["hinjewadi to international airport cab", "hinjewadi to airport fare"],
    ["hinjewadi to mumbai drop taxi fare", "hinjewadi to mumbai central taxi fare"],
    ["hinjewadi to goregaon taxi fare", "hinjewadi to dadar cab service"],
    ["pune to mumbai airport cab", "pune to mumbai ertiga cab"],
    ["Pune to Mumbai Innova Cab", "hinjewadi to mumbai airport cab charges"],
    ["hinjewadi to andheri cabs", "hinjewadi to dadar cab"],
    ["hinjewadi to borivali cabs"]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we understand the importance of time, especially when traveling from Hinjewadi to Mumbai. Whether it’s a business meeting or a personal trip, our drivers ensure punctual pickups and timely drop-offs to make your journey seamless."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We offer a range of well-maintained, comfortable, and spacious vehicles for your journey from Hinjewadi to Mumbai. Our cabs are equipped with air conditioning, comfortable seating, and ample legroom for a relaxing ride."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are experienced, well-trained, and familiar with the best routes between Hinjewadi and Mumbai. They ensure a safe, smooth, and efficient journey, avoiding unnecessary delays and traffic."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive rates for your Hinjewadi to Mumbai cab journey. We believe in full transparency, with no hidden charges or surprises. Our pricing is clear, so you know exactly what you’re paying for."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure a secure and comfortable ride throughout the journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need an early morning ride or a late-night return, Vedant Travels is available 24/7 for your convenience. You can book a cab at any time and travel hassle-free from Hinjewadi to Mumbai."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Hinjewadi to Mumbai cab is simple and quick. Use our easy-to-navigate website or mobile app to book your cab online. Alternatively, our customer service team is always available to help with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you are traveling for business or leisure, we offer personalized travel packages to suit your needs. Let us know your preferences, and we’ll customize the trip to ensure you have the best experience possible."
    }
]

    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Hinjewadi to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced in long-distance travel, including the Hinjewadi to Mumbai route. They are well-trained to handle the journey safely and efficiently.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Hinjewadi to Mumbai travel?',
            answer: 'We offer a range of vehicles including sedans, SUVs, and luxury cars. All vehicles are spacious, comfortable, and well-maintained to provide you with the best travel experience.',
        },
        {
            id: 4,
            question: 'How do I pay for my Hinjewadi to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment through our app, making it easy and convenient to settle your fare.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Hinjewadi to Mumbai?',
            answer: 'Yes, you can book a round-trip cab for Hinjewadi to Mumbai. Simply provide your return details during booking, and we will arrange the return journey for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you during the booking process. We aim for complete transparency with no hidden costs.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer sightseeing packages in Mumbai. Explore popular attractions such as Gateway of India, Marine Drive, and more with a dedicated driver after your trip from Hinjewadi to Mumbai.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Hinjewadi to Mumbai cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific needs, please inform us when booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Hinjewadi and Mumbai?',
            answer: 'Yes, we offer corporate travel services, including airport transfers, business meetings, and team outings. Contact us for customized packages that suit your company\'s requirements.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Hinjewadi to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, affordable, and comfortable travel options with professional drivers, well-maintained vehicles, and a focus on customer satisfaction. We prioritize safety and timely service, ensuring a pleasant and stress-free journey.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sanjay Deshmukh",
            title: "Customer",
            quote: "The trip from Hinjewadi to Mumbai with Vedant Travels was smooth and hassle-free. The vehicle was comfortable, and the driver was professional. I highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Kulkarni",
            title: "Customer",
            quote: "We hired a cab with Vedant Travels for a business trip from Hinjewadi to Mumbai, and everything was perfect. The booking was easy, the driver was punctual, and the ride was comfortable. Great service!",
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
        "name": "Hinjewadi to Mumbai Cab | Vedant Travels",
        "description": "Book your Hinjewadi to Mumbai cab with Vedant Travels for affordable, reliable, and professional taxi services. Choose from Innova Crysta, Ertiga, Swift Dzire, and Sedans for one-way trips, airport drops, or round trips. Get hassle-free travel with us.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.6",
          "ratingCount": "1200"
        }
      };


    return (
        <div>
           
           <Helmet>
        <title>Hinjewadi to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Hinjewadi to Mumbai cab with Vedant Travels. We provide affordable and reliable taxi services for one-way trips, airport drops, and round trips with vehicles like Innova Crysta, Ertiga, and Swift Dzire." />
        <meta name="keywords" content="Hinjewadi to Borivali Taxi, Hinjewadi to Santacruz Taxi, Hinjewadi to Andheri Taxi, Hinjewadi to Mumbai Airport Taxi, hinjewadi to international airport cab, hinjewadi to airport fare, hinjewadi to mumbai drop taxi fare, hinjewadi to mumbai central taxi fare, hinjewadi to goregaon taxi fare, hinjewadi to dadar cab service, pune to mumbai airport cab, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, hinjewadi to mumbai airport cab charges, hinjewadi to andheri cabs, hinjewadi to dadar cab, hinjewadi to borivali cabs, hinjewadi to thane cab fare, hinjewadi to virar cab fare, hinjewadi to mumbai ertiga cab fare, hinjewadi to mumbai innova cab fare, 7 seater innova on rent in pune, innova crysta per km rate pune, Hinjewadi to mumbai Vedant Travels, Cab service in pune, Pune to Mumbai airport cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/hinjewadi-to-mumbai-cab" />
        <script type="application/ld+json">
          {JSON.stringify(jsonData)}
        </script>
      </Helmet>
      
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
                            <img src='./images/keyword/10.jpg' alt='img' />
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

export default Hinjewaditomumbaicab;