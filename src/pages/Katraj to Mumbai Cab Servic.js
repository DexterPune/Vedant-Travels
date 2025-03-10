
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Katrajtomumbaicabservice() {



    const cardData =
    {
        keyword: 'Katraj to Mumbai Cab Service   ',
        heading: 'Vedant Travels: Katraj to Mumbai Cab Service  ',
        headingDescription: 'Vedant Travels offers reliable, affordable, and transparent taxi fares for Katraj to Mumbai travel, ensuring a smooth and comfortable journey. We offer various cab options, including sedans, SUVs, and premium vehicles, to meet your needs and budget. Our prices are competitive with no hidden charges, so you can enjoy a worry-free ride.',

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
        "name": "Katraj to Mumbai Airport Cab Fare",
        "description": "For an affordable and reliable ride from Katraj to Mumbai Airport, Vedant Travels offers competitive fares. We ensure a smooth and comfortable journey with no hidden charges."
    },
    {
        "name": "Katraj to Mumbai Navi Mumbai Cab",
        "description": "Travel from Katraj to Navi Mumbai with ease. Vedant Travels provides comfortable and reliable cab services for your journey, ensuring you reach your destination on time."
    },
    {
        "name": "Ambegaon Pune to Mumbai Cab",
        "description": "Looking for a convenient ride from Ambegaon Pune to Mumbai? Vedant Travels offers professional and timely cab services for a comfortable journey."
    },
    {
        "name": "Ambegaon Budruk to Mumbai Airport Cab",
        "description": "For a timely and comfortable airport transfer, book a cab from Ambegaon Budruk to Mumbai Airport with Vedant Travels. We provide reliable services to ensure you don’t miss your flight."
    },
    {
        "name": "Dhayari to Mumbai Cab",
        "description": "Traveling from Dhayari to Mumbai? Choose Vedant Travels for a reliable and comfortable ride, making your journey as smooth and enjoyable as possible."
    },
    {
        "name": "Mukund Nagar to Mumbai Cab",
        "description": "Get a comfortable ride from Mukund Nagar to Mumbai with Vedant Travels. Our experienced drivers ensure you have a safe and timely journey."
    },
    {
        "name": "Parvati to Mumbai Cab",
        "description": "For your journey from Parvati to Mumbai, Vedant Travels provides safe and reliable cab services. Whether it’s for business or leisure, we make sure your trip is smooth and stress-free."
    },
    {
        "name": "Sinhagad Road to Mumbai Cabs",
        "description": "For a convenient and timely ride from Sinhagad Road to Mumbai, choose Vedant Travels. Our cab services are designed to offer comfort and reliability for your trip."
    },
    {
        "name": "Katraj to Mumbai One Way Cab",
        "description": "For a one-way journey from Katraj to Mumbai, Vedant Travels provides affordable and reliable one-way cab services. Enjoy a comfortable trip with no hassle."
    },
    {
        "name": "Dhayari to Mumbai Taxi Service",
        "description": "Book a taxi from Dhayari to Mumbai with Vedant Travels for a reliable, smooth, and stress-free ride. Our cabs are well-maintained and our drivers are professional."
    },
    {
        "name": "Cab Service in Katraj",
        "description": "For all your travel needs in Katraj, Vedant Travels offers premium cab services. Whether you need a local ride or an outstation trip, we ensure comfort, safety, and reliability."
    },
    {
        "name": "Online Cab Booking in Katraj",
        "description": "Booking a cab in Katraj has never been easier. With Vedant Travels, you can book a ride online with just a few clicks. Enjoy a smooth, comfortable, and affordable ride."
    },
    {
        "name": "Book Safe & Reliable Cabs in Katraj",
        "description": "Vedant Travels offers safe and reliable cabs for all your travel needs in Katraj. Book with us for a hassle-free journey and excellent customer service."
    },
    {
        "name": "Innova Crysta on Rent in Katraj Pune",
        "description": "For a premium travel experience, hire an Innova Crysta in Katraj Pune with Vedant Travels. The Innova Crysta offers comfort, ample space, and luxury for your journey."
    },
    {
        "name": "Ertiga on Rent in Katraj",
        "description": "Looking for a spacious and comfortable vehicle? Rent an Ertiga from Vedant Travels in Katraj for a smooth and pleasant ride with family or a small group."
    },
    {
        "name": "Sedan Car on Rent in Katraj",
        "description": "For a comfortable and affordable option, rent a sedan car from Vedant Travels in Katraj. Our sedans are ideal for city travel, offering a smooth and efficient ride."
    },
    {
        "name": "Katraj to Mumbai Airport Cabs",
        "description": "Need a ride from Katraj to Mumbai Airport? Vedant Travels offers comfortable and reliable cab services, ensuring you arrive at the airport on time and stress-free."
    },
    {
        "name": "Katraj to Dadar Cabs",
        "description": "Traveling from Katraj to Dadar? Book a cab with Vedant Travels for a safe and reliable ride to one of Mumbai’s busiest areas. We ensure a smooth and timely journey."
    },
    {
        "name": "Cab Service in Pune",
        "description": "For all your transportation needs in Pune, Vedant Travels provides top-notch cab services, whether you're traveling locally or going on a long-distance trip. Our fleet of vehicles and professional drivers ensure your journey is smooth and stress-free."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "For a reliable and affordable ride from Pune to Mumbai Airport, book a cab with Vedant Travels. Our experienced drivers ensure a smooth ride, helping you get to your flight on time."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "Looking for a comfortable and affordable ride from Pune to Mumbai? Vedant Travels offers a variety of vehicles, including sedans, SUVs, and luxury options, to suit your travel needs."
    },
    {
        "name": "Contact Information",
        "description": "For bookings or inquiries, contact Vedant Travels at +91 8208126878. We ensure a safe, comfortable, and enjoyable travel experience, no matter your destination."
    }
],


"tableData": [
    ["Katraj to Mumbai Airport Cab Fare", "Katraj to Mumbai Navi Mumbai Cab"],
    ["Ambegaon Pune to Mumbai Cab", "Ambegaon Budruk to Mumbai Airport Cab"],
    ["Dhayari to Mumbai Cab", "Mukund Nagar to Mumbai Cab"],
    ["Parvati to Mumbai Cab", "Sinhagad Road to Mumbai Cabs"],
    ["Katraj to Mumbai One Way Cab", "Dhayari to Mumbai Taxi Service"],
    ["Cab Service in Katraj", "Online Cab Booking in Katraj"],
    ["Book Safe & Reliable Cabs in Katraj", "Innova Crysta on Rent in Katraj Pune"],
    ["Ertiga on Rent in Katraj", "Sedan Car on Rent in Katraj"],
    ["Katraj to Mumbai Airport Cabs", "Katraj to Dadar Cabs"],
    ["Cab Service in Pune", "Pune to Mumbai Airport Cab"],
    ["Pune Mumbai Cab", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we prioritize your time. Our drivers ensure punctual pickups and timely drop-offs for your Katraj to Mumbai journey. Whether you're traveling for work or pleasure, expect a seamless and efficient experience every time."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Our Katraj to Mumbai Cab Service offers a range of vehicles, including sedans, SUVs, and premium cars. All our vehicles are designed for comfort with air conditioning, ample legroom, and spacious interiors, making your long-distance ride a relaxing experience."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are well-trained, experienced, and knowledgeable about the best routes from Katraj to Mumbai. They ensure that you have a smooth, safe, and timely journey, taking care of your needs throughout the ride."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and affordable pricing for Katraj to Mumbai cab services. There are no hidden charges, and our transparent pricing ensures you know exactly what you are paying for without any surprises."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure you have a secure and comfortable journey."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it's an early morning departure or a late-night return, Vedant Travels is available round-the-clock to cater to your travel needs. You can book a cab at any time, and our customer service team will be ready to assist you."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Katraj to Mumbai Cab Service is simple and quick. You can book a cab via our website, mobile app, or by contacting our customer service team for personalized assistance."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We offer flexible and customized travel packages to suit your preferences. Whether you're traveling for business, leisure, or an event, we can tailor your Katraj to Mumbai journey to meet your specific needs."
    }
  ]




    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Katraj to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced and familiar with the Katraj to Mumbai route. They ensure a smooth, timely, and safe journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Katraj to Mumbai travel?',
            answer: 'We offer various types of vehicles, including sedans, SUVs, and premium cars. All our vehicles are comfortable, spacious, and well-maintained to ensure a pleasant ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Katraj to Mumbai cab rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payment through our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Katraj to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking process, and we will ensure your journey is taken care of.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated upfront during the booking process, ensuring full transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Katraj to Mumbai trip, you can explore iconic attractions like the Gateway of India, Marine Drive, and more.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Katraj to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please let us know during the booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Katraj and Mumbai?',
            answer: 'Yes, we provide corporate travel services for business meetings, events, and more. We can customize your travel package to suit your company\'s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Katraj to Mumbai journey?',
            answer: 'Vedant Travels is known for its reliable, safe, and comfortable service. With professional drivers, transparent pricing, and a commitment to your satisfaction, we ensure a smooth and enjoyable Katraj to Mumbai journey.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Manoj Gupta",
            title: "Customer",
            quote: "I had a fantastic experience traveling from Katraj to Mumbai with Vedant Travels. The driver was professional, the car was clean and comfortable, and the entire journey was smooth. I highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Meera Deshpande",
            title: "Customer",
            quote: "Our family traveled from Katraj to Mumbai using Vedant Travels. The vehicle was spacious, the driver was courteous, and the ride was incredibly comfortable. We will definitely use them again in the future.",
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


    const jsonData = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": "Katraj to Mumbai Cab Service | Vedant Travels",
        "description": "Book your Katraj to Mumbai Cab with Vedant Travels for a comfortable and reliable journey. Offering one-way trips, airport transfers, and round trips with Ertiga, Innova, and other models.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "850"
        }
      };
      
    
      


    return (
        <div>
           
           <Helmet>
        <title>Katraj to Mumbai Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Katraj to Mumbai Cab with Vedant Travels for a smooth and safe ride. Affordable rates for airport transfers, one-way trips, and round trips. Reliable and comfortable service." />
        <meta name="keywords" content="Katraj to Mumbai Airport Cab Fare, Katraj to Mumbai Navi Mumbai Cab, Ambegaon Pune to Mumbai Cab, Ambegaon Budruk to Mumbai Airport Cab, Dhayari to Mumbai Cab, Mukund Nagar to Mumbai Cab, Parvati to Mumbai Cab, Sinhagad Road to Mumbai Cabs, Katraj to Mumbai One Way Cab, Dhayari to Mumbai Taxi Service, Cab Service in Katraj, Online Cab Booking in Katraj, Book Safe & Reliable Cabs in Katraj, Innova Crysta on Rent in Katraj Pune, Ertiga on Rent in Katraj, Sedan Car on Rent in Katraj, Katraj to Mumbai Airport Cabs, Katraj to Dadar Cabs, Pune to Mumbai Airport Cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/katraj-to-mumbai-cab-service" />
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
                            <img src='/images/keyword/24.jpg' alt='img' />
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

export default Katrajtomumbaicabservice;