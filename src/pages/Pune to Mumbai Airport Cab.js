
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punetomumbaiairport() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Airport Cab Service',
        heading: 'Vedant Travels: Pune to Mumbai Airport Cab Service',
        headingDescription: 'Vedant Travels offers a reliable and comfortable cab service from Pune to Mumbai Airport, ensuring a hassle-free travel experience. Whether you are traveling for a flight, business trip, or leisure, our fleet of well-maintained sedans, SUVs, and luxury cars caters to all travel needs. Our professional drivers ensure a safe and smooth journey, and we provide flexible pickup and drop-off options. With 24/7 availability, affordable fares, and an easy online booking system, Vedant Travels makes your Pune to Mumbai Airport travel convenient and stress-free.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

       "topPlaces": [
    {
        "title": "Gateway of India",
        "description": "One of Mumbai’s most iconic landmarks, the Gateway of India was built in 1924 and overlooks the Arabian Sea. It is a must-visit historical site and a popular tourist attraction."
    },
    {
        "title": "Marine Drive",
        "description": "Also known as the Queen’s Necklace, Marine Drive is a beautiful coastal boulevard perfect for a scenic drive, evening strolls, and enjoying the Mumbai skyline."
    },
    {
        "title": "Elephanta Caves",
        "description": "A UNESCO World Heritage Site, these rock-cut caves are located on Elephanta Island and feature stunning sculptures of Lord Shiva dating back to the 5th century."
    },
    {
        "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        "description": "A masterpiece of Victorian Gothic architecture, CSMT is a UNESCO-listed railway station and an important landmark in Mumbai."
    },
    {
        "title": "Siddhivinayak Temple",
        "description": "One of the most revered temples in Mumbai, Siddhivinayak Temple is dedicated to Lord Ganesha and attracts thousands of devotees daily."
    },
    {
        "title": "Juhu Beach",
        "description": "A famous beach in Mumbai, Juhu Beach is perfect for enjoying street food, evening walks, and stunning sunset views over the Arabian Sea."
    },
    {
        "title": "Bandra-Worli Sea Link",
        "description": "This modern engineering marvel connects Bandra and Worli and offers breathtaking views of the city skyline and the sea."
    },
    {
        "title": "Colaba Causeway",
        "description": "A paradise for shoppers, Colaba Causeway is known for its vibrant street shopping, boutiques, cafés, and historic buildings."
    },
    {
        "title": "Haji Ali Dargah",
        "description": "Located on an islet in the Arabian Sea, Haji Ali Dargah is a spiritual and architectural marvel visited by people of all faiths."
    },
    {
        "title": "Film City",
        "description": "The heart of Bollywood, Film City offers guided tours showcasing movie sets, film studios, and a glimpse into the world of Indian cinema."
    }
],


services: [
    {
        "name": "Pune to Mumbai Airport Cab Services by Vedant Travels",
        "description": "Traveling from Pune to Mumbai Airport? Book your ride with Vedant Travels for a comfortable, reliable, and hassle-free journey. Whether you're catching a flight or arriving after your trip, we provide top-quality, well-maintained vehicles to ensure your travel experience is seamless."
    },
    {
        "name": "Pune to Mumbai Airport Cab Fare",
        "description": "Vedant Travels offers affordable and transparent pricing for your trip from Pune to Mumbai Airport. We ensure there are no hidden costs and provide clear, competitive pricing for every journey. Contact us for a custom quote tailored to your travel needs."
    },
    {
        "name": "Pune to Mumbai Airport",
        "description": "Looking for a reliable ride to Mumbai Airport? Choose Vedant Travels for a smooth, timely, and comfortable journey from Pune to the airport. Our fleet of vehicles ensures comfort, and our experienced drivers know the best routes to avoid delays."
    },
    {
        "name": "Pune to Mumbai Taxi Service",
        "description": "Whether you're traveling for business or catching a flight, Vedant Travels provides dependable taxi services from Pune to Mumbai Airport. Enjoy a hassle-free journey with our comfortable vehicles and professional drivers."
    },
    {
        "name": "Pune to Mumbai Airport Cab Price",
        "description": "Vedant Travels ensures affordable pricing for your Pune to Mumbai Airport journey. We offer clear, upfront pricing with no hidden charges, making your travel planning easy and stress-free. Reach out for a quote."
    },
    {
        "name": "Pune Mumbai Airport Car Hire",
        "description": "If you prefer more flexibility, Vedant Travels offers car hire services for your trip from Pune to Mumbai Airport. You can choose from a variety of vehicles based on your needs and preferences."
    },
    {
        "name": "Pune to Mumbai Airport Cab Booking",
        "description": "Booking a cab from Pune to Mumbai Airport is easy with Vedant Travels. Simply call us or book online to secure your ride. We offer flexible booking options to accommodate your schedule."
    },
    {
        "name": "Pune to Mumbai Airport Taxi Fare",
        "description": "We offer competitive and transparent pricing for your taxi ride from Pune to Mumbai Airport. Our rates are clear with no hidden charges, and we ensure you get value for your money. Contact us for a fare estimate."
    },
    {
        "name": "Pune to Mumbai Airport Drop",
        "description": "Choose Vedant Travels for your drop-off service from Pune to Mumbai Airport. Our drivers will ensure you arrive on time, stress-free, and ready for your flight. We take pride in offering timely, comfortable, and professional service."
    },
    {
        "name": "Mumbai to Pune Innova Crysta Cab Booking",
        "description": "For a comfortable and luxurious ride from Mumbai to Pune, book an Innova Crysta with Vedant Travels. This vehicle is perfect for those who want extra comfort and space for a relaxing journey."
    },
    {
        "name": "Pune to Mumbai Cab Round Trip",
        "description": "Vedant Travels also offers round-trip services for your convenience. Whether you're visiting Mumbai for business or leisure, we ensure that your return trip is as comfortable and easy as the ride there."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "The Ertiga is a spacious and comfortable choice for a trip from Pune to Mumbai. If you're traveling with family or a small group, the Ertiga is an affordable yet comfortable option. Book with Vedant Travels for a smooth and enjoyable ride."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "For a premium and comfortable ride, book an Innova cab from Vedant Travels. The Innova is perfect for those who want extra legroom, comfort, and style during their journey to Mumbai."
    },
    {
        "name": "Pune to Mumbai Airport Cab Service",
        "description": "Vedant Travels offers efficient and reliable cab services to Mumbai Airport from Pune. We ensure that you reach the airport on time and enjoy a comfortable ride with our well-maintained vehicles."
    },
    {
        "name": "Pune to Mumbai Airport Cab Fare",
        "description": "We provide affordable and transparent pricing for your Pune to Mumbai Airport ride. Enjoy comfort and reliability at competitive rates. Contact us for your exact fare quote based on the specifics of your trip."
    },
    {
        "name": "Pune to Mumbai Airport Taxi",
        "description": "For a safe, comfortable, and punctual ride to Mumbai Airport, choose Vedant Travels. Our experienced drivers and clean, modern vehicles ensure a smooth, worry-free journey."
    },
    {
        "name": "Pune to Mumbai Airport Innova",
        "description": "Need a more spacious and comfortable ride? Book an Innova for your journey from Pune to Mumbai Airport. The Innova provides extra space and comfort, making it ideal for groups or those who prefer a premium experience."
    },
    {
        "name": "Pune to Mumbai Airport Drop Cab",
        "description": "Vedant Travels offers specialized drop services to Mumbai Airport. Whether you're going to Terminal 1, Terminal 2, or Terminal 3, we will ensure you reach your departure terminal in plenty of time for your flight."
    },
    {
        "name": "Pune to Mumbai Airport Drop Taxi",
        "description": "Choose Vedant Travels for a reliable and comfortable taxi service for your airport drop. We ensure punctuality and convenience, providing a smooth ride to Mumbai Airport."
    },
    {
        "name": "Pune to Mumbai Airport Terminal 2",
        "description": "Traveling to Terminal 2 at Mumbai Airport? Vedant Travels offers dedicated taxi services that ensure you reach your terminal on time. Our experienced drivers are familiar with the best routes to avoid delays."
    },
    {
        "name": "Pune to Mumbai Airport Terminal 1",
        "description": "For a smooth ride to Mumbai Airport Terminal 1, Vedant Travels is your trusted choice. Our drivers are well-versed in the quickest routes and will ensure you reach your terminal comfortably."
    },
    {
        "name": "Pune to Mumbai Airport Terminal 3",
        "description": "Whether you're traveling to Terminal 3 for an international flight or any other purpose, Vedant Travels provides convenient and reliable transport to this terminal. Book your ride with us today for a smooth journey."
    },
    {
        "name": "Pune to Mumbai Vedant Travels",
        "description": "For a comfortable and affordable journey between Pune and Mumbai, choose Vedant Travels. Our fleet of vehicles, professional drivers, and commitment to customer satisfaction ensure your trip is stress-free and enjoyable."
    },
    {
        "name": "Pune to Mumbai Airport Contact Information",
        "description": "Contact Vedant Travels at +91 8177869909 for prompt and efficient Pune to Mumbai airport cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Mumbai airport cab today!"
    }
],


tableData: [
    ["Pune to Mumbai airport cab", "-Pune to Mumbai airport cab fare"],
    ["Pune to Mumbai airport", "-Pune to Mumbai taxi service"],
    ["Pune to Mumbai airport cab price", "-Pune Mumbai airport car hire"],
    ["Pune to Mumbai airport cab booking", "-Pune to Mumbai airport taxi fare"],
    ["Pune to Mumbai airport drop", "-Mumbai to Pune Innova Crysta cab booking"],
    ["Pune to Mumbai Cab round Trip", "-Pune to Mumbai Ertiga cab"],
    ["Pune to Mumbai Innova Cab", "-Pune to Mumbai airport cab service"],
    ["Pune to Mumbai Airport Cab Fare", "-Pune to Mumbai Airport taxi"],
    ["Pune to Mumbai airport innova", "-Pune To Mumbai Airport Drop Cab"],
    ["Pune to Mumbai airport drop taxi", "-Pune to Mumbai airport terminal 2"],
    ["Pune to Mumbai airport terminal 1", "-Pune to Mumbai airport terminal 3"],
    ["Pune to Mumbai Vedant Travels", ""]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality, especially when it comes to catching your flight. Our drivers ensure timely pickups and drop-offs to and from Pune to Mumbai Airport, so you never have to worry about missing your flight."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Travel in comfort with our spacious and well-maintained vehicles. Whether you’re going for a business trip or a vacation, our cars are designed for a smooth and relaxing journey with ample legroom, air conditioning, and comfortable seating."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are trained and experienced in handling airport transfers. They know the quickest routes to Mumbai Airport from Pune, ensuring you reach your destination on time while offering a safe and comfortable ride."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive pricing for airport transfers, with no hidden charges. Our transparent pricing structure ensures you pay exactly what you see, making the entire process clear and straightforward."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, giving you peace of mind during your ride."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Flights can be at any hour, and we are available 24/7 for your convenience. Whether it’s an early morning flight or a late-night arrival, Vedant Travels is always ready to provide airport transfer services between Pune and Mumbai."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking your Pune to Mumbai Airport cab with Vedant Travels is quick and easy. You can book online via our website or mobile app, or simply contact our customer service team for assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer flexible travel packages tailored to your airport transfer needs. Whether it’s a solo trip, a family outing, or corporate travel, we can customize the service to suit your schedule and preferences."
    }
]







    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Pune to Mumbai Airport cab with Vedant Travels?',
            answer: 'You can book your airport transfer online through our website or mobile app. Alternatively, you can call our customer service team to make a booking over the phone.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance airport travel?',
            answer: 'Yes, our drivers are highly trained for airport transfers and long-distance routes, ensuring you reach Mumbai Airport from Pune in a safe, comfortable, and timely manner.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Pune to Mumbai Airport travel?',
            answer: 'We offer a variety of vehicles for your airport transfer needs, including sedans, SUVs, and luxury cars. All our vehicles are spacious and equipped for a comfortable ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Pune to Mumbai Airport cab rental?',
            answer: 'You can choose from multiple payment methods, including cash, credit/debit cards, and online payments through our mobile app, making your payment process quick and easy.',
        },
        {
            id: 5,
            question: 'Can I book a round trip from Pune to Mumbai Airport?',
            answer: 'Yes, you can book a round-trip cab for your Pune to Mumbai Airport transfer. Simply provide your return details at the time of booking, and we’ll handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you upfront, ensuring complete transparency and no hidden costs.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after airport drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai as part of your airport transfer. Visit iconic spots like the Gateway of India, Marine Drive, and more, all while having a trusted driver by your side.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Pune to Mumbai Airport cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, let us know when booking, and we’ll ensure the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Pune and Mumbai Airport?',
            answer: 'Yes, we offer corporate travel services for airport transfers. Whether it’s for business meetings or group travel, we provide reliable and customized solutions for your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for Pune to Mumbai Airport travel?',
            answer: 'Vedant Travels offers reliable, affordable, and comfortable airport transfer services with professional drivers, well-maintained vehicles, and transparent pricing. We ensure a smooth, stress-free journey for all your airport travel needs.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Arvind Patel",
            title: "Customer",
            quote: "I booked a cab for my flight from Pune to Mumbai, and Vedant Travels made sure I reached the airport on time. The driver was courteous, and the car was clean and comfortable. Highly recommend their service!",
            rating: 5,
        },
        {
            name: "Mrs. Ayesha Khan",
            title: "Customer",
            quote: "We had a smooth and stress-free airport transfer with Vedant Travels. The driver was on time and very professional. The ride was comfortable, and we made it to Mumbai Airport without any issues. Fantastic service!",
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
        "name": "Pune to Mumbai Airport Cab Service | Vedant Travels",
        "description": "Book affordable and reliable Pune to Mumbai Airport cab services with Vedant Travels. Choose from a range of vehicles including Innova, Ertiga, and more for your smooth and comfortable journey to Mumbai Airport. Offering the best fares, flexible booking options, and quality services for your airport travel needs.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1800"
        }
      };


    return (
        <div>
           


<Helmet>
  <title>Pune to Mumbai Airport Cab | Vedant Travels | Contact: +91 8177869909</title>
  <meta name="description" content="Get the best Pune to Mumbai Airport cab services with Vedant Travels. Affordable pricing, quality vehicles like Innova, Ertiga, and more for a comfortable journey. Book your Pune to Mumbai Airport taxi now!" />
  <meta name="keywords" content="pune to mumbai airport cab, pune to mumbai airport cab fare, pune to mumbai airport, pune to mumbai taxi service, pune to mumbai airport cab price, pune mumbai airport car hire, pune to mumbai airport cab booking, pune to mumbai airport taxi fare, pune to mumbai airport drop, pune to mumbai airport terminal 2, pune to mumbai airport terminal 1, pune to mumbai airport terminal 3, Pune to Mumbai Vedant Travels" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.vedanttravels.in/pune-to-mumbai-airport-cab" />
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
                            <img src='./images/keyword/2.jpg' alt='img' />
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

export default Punetomumbaiairport;