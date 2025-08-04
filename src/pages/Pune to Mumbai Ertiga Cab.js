
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punetomumbaiertigacab() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Ertiga Cab ',
        heading: 'Vedant Travels: Pune to Mumbai Ertiga Cab ',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Pune to Mumbai Ertiga cab services, ensuring a comfortable and budget-friendly journey. The Ertiga is a perfect choice for travelers seeking spacious and comfortable travel with family or friends. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your needs.',

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
        "name": "Ertiga Per Km Rate in Pune",
        "description": "At Vedant Travels, we offer competitive Ertiga per km rates in Pune. Book our Ertiga cabs for your local travel needs or long-distance trips at the best rates available."
    },
    {
        "name": "Pune to Mumbai Airport Ertiga Cab",
        "description": "Travel in comfort with our Pune to Mumbai Airport Ertiga cab service. Spacious, comfortable, and reliable, the Ertiga is perfect for your journey to Mumbai Airport."
    },
    {
        "name": "Pune to Dadar Ertiga Cab Fare",
        "description": "Book your Pune to Dadar Ertiga cab with Vedant Travels for a comfortable and affordable ride. Our Ertiga cabs provide a smooth journey with well-maintained vehicles."
    },
    {
        "name": "Pune to Andheri Ertiga Taxi Fare",
        "description": "For a seamless trip from Pune to Andheri, our Ertiga taxi service is the perfect choice. Affordable and comfortable, we guarantee a hassle-free ride."
    },
    {
        "name": "Pune to Mumbai One Way Ertiga Taxi Cab",
        "description": "Looking for a one-way ride from Pune to Mumbai? Choose our Ertiga for a comfortable and affordable one-way trip. Reliable service for Mumbai Airport, Andheri, Dadar, or other locations."
    },
    {
        "name": "Ertiga Cab in Pune",
        "description": "For all your travel needs within Pune, book an Ertiga cab with Vedant Travels. Ideal for group travel, family trips, or business travels, our Ertiga cabs are spacious and economical."
    },
    {
        "name": "Ertiga Cab for Mumbai Airport Drop",
        "description": "Need a cab for Mumbai Airport drop? Vedant Travels offers reliable Ertiga cabs for airport transfers from Pune to Mumbai Airport. Book your cab now for timely service."
    },
    {
        "name": "Viman Nagar to Mumbai Cabs",
        "description": "Book a taxi from Viman Nagar to Mumbai with Vedant Travels. Our Ertiga cabs offer a comfortable and affordable journey for your convenience."
    },
    {
        "name": "Wagholi to Mumbai Cab Service",
        "description": "Travel from Wagholi to Mumbai with Vedant Travels in a spacious Ertiga. Enjoy a hassle-free journey with our affordable and reliable cab services."
    },
    {
        "name": "Pune to Borivali Ertiga Cab",
        "description": "Book a comfortable Ertiga cab from Pune to Borivali with Vedant Travels. Spacious, reliable, and perfect for families or groups, we ensure a smooth and safe ride."
    },
    {
        "name": "Pune to Andheri Ertiga Cab",
        "description": "Looking for an Ertiga cab from Pune to Andheri? Our Ertiga cabs offer comfort and convenience, making your journey enjoyable and stress-free."
    },
    {
        "name": "Pune to Dadar Ertiga Cab",
        "description": "Vedant Travels provides Ertiga cabs for travel from Pune to Dadar. Enjoy a comfortable ride with experienced drivers for a smooth journey."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Travel from Pune to Mumbai in comfort with our Ertiga cab services. Whether it’s for a trip to the airport or any other destination in Mumbai, we provide reliable and timely service."
    },
    {
        "name": "Pune to Mumbai 7 Seater Cab",
        "description": "If you're traveling in a group, our 7-seater Ertiga is a perfect choice. Book your Pune to Mumbai 7 Seater Cab with Vedant Travels for a comfortable, safe, and affordable ride."
    },
    {
        "name": "Pune to Mumbai Cab Round Trip",
        "description": "Looking for a round trip from Pune to Mumbai? Book your Ertiga cab with Vedant Travels for an affordable and convenient round trip experience."
    },
    {
        "name": "Pune to Mumbai Airport Ertiga Cab",
        "description": "For a reliable Pune to Mumbai Airport Ertiga cab, choose Vedant Travels. We ensure a comfortable and timely ride to Mumbai Airport for both domestic and international flights."
    },
    {
        "name": "Pune to Mumbai Central Cab",
        "description": "Travel to Mumbai Central from Pune in our Ertiga cabs. Enjoy a comfortable, safe, and affordable ride with Vedant Travels."
    },
    {
        "name": "Ertiga on Rent in Pune",
        "description": "Rent an Ertiga for your local travel or a trip to Mumbai. Vedant Travels offers affordable Ertiga rentals in Pune for both short and long-term requirements."
    },
    {
        "name": "Pune to Mumbai Darshan Ertiga on Rent",
        "description": "Planning a Mumbai Darshan tour? Rent an Ertiga from Vedant Travels for a comfortable and affordable journey to explore the top attractions of Mumbai."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909 or visit our website to book your Ertiga cab for your next trip to Mumbai or for any other journey within Pune."
    }
],


"tableData": [
    ["Ertiga per km Rate in Pune", "Pune to Mumbai Airport Ertiga Cab"],
    ["Pune to Dadar Ertiga Cab Fare", "Pune to Andheri Ertiga Taxi Fare"],
    ["Pune to Mumbai One Way Ertiga Taxi Cab", "Ertiga Cab in Pune"],
    ["Ertiga Cab for Mumbai Airport Drop", "Viman Nagar to Mumbai Cabs"],
    ["Wagholi to Mumbai Cab Service", "Pune to Borivali Ertiga Cab"],
    ["Pune to Andheri Ertiga Cab", "Pune to Dadar Ertiga Cab"],
    ["Pune to Mumbai Ertiga Cab", "Pune to Mumbai 7 Seater Cab"],
    ["Pune to Mumbai Cab Round Trip", "Pune to Mumbai Airport Ertiga Cab"],
    ["Pune to Mumbai Central Cab", "Pune to Mumbai Cab Round Trip"],
    ["Ertiga on Rent in Pune", "Pune to Mumbai Darshan Ertiga on Rent"],
    ["Vedant Travels Pune", "Cab Service in Pune"],
    ["Pune to Mumbai Airport Cab", "Pune Mumbai Cab"]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we value your time. Whether you are traveling for business or leisure, our drivers ensure punctual pickups and drop-offs for your journey from Pune to Mumbai in the comfort of an Ertiga. Expect timely and reliable service every time."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "The Ertiga is the perfect vehicle for your journey from Pune to Mumbai. It offers ample space, comfortable seating, and air conditioning, ensuring a relaxed ride for you and your companions. Whether you're traveling solo or with family, the Ertiga provides the perfect balance of comfort and space."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly skilled and familiar with the Pune to Mumbai route. They ensure your journey is smooth, safe, and efficient. You can trust them to navigate through traffic and take the best routes to ensure timely arrivals."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for the Pune to Mumbai Ertiga Cab. There are no hidden charges, and our pricing structure is clear from the moment you book, ensuring no surprises along the way."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Safety is our top priority. Our Ertiga vehicles are regularly maintained and equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers follow all safety protocols, ensuring you have a worry-free and comfortable trip."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether it’s an early morning departure or a late-night return, Vedant Travels is available 24/7 to serve you. You can book your Pune to Mumbai Ertiga Cab anytime, and our customer service team will assist you promptly."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking an Ertiga Cab for your journey from Pune to Mumbai is quick and easy. Use our website or mobile app to make your reservation, or contact our customer service team if you need personalized assistance with your booking."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you are traveling for business, leisure, or a special occasion, we offer customized travel packages. We can tailor the journey to meet your specific needs, ensuring your trip from Pune to Mumbai is a pleasant one."
    }
]







    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Pune to Mumbai Ertiga cab with Vedant Travels?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can contact our customer service team for assistance with booking your Ertiga Cab.',
        },
        {
            id: 2,
            question: 'Is the Ertiga a comfortable vehicle for long-distance travel?',
            answer: 'Yes, the Ertiga is perfect for long-distance travel. It offers plenty of space, comfortable seating, and air conditioning, making it an ideal choice for the Pune to Mumbai journey.',
        },
        {
            id: 3,
            question: 'What is the seating capacity of the Ertiga?',
            answer: 'The Ertiga comfortably accommodates up to 6 passengers, making it a great option for small groups or families traveling from Pune to Mumbai.',
        },
        {
            id: 4,
            question: 'How do I pay for my Pune to Mumbai Ertiga cab rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payment via our app, ensuring a smooth and convenient transaction.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip Pune to Mumbai Ertiga cab?',
            answer: 'Yes, you can book a round-trip Ertiga Cab. Simply provide the return details when making the booking, and we will handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated upfront at the time of booking, ensuring transparency in pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer sightseeing services in Mumbai. After your Pune to Mumbai journey, you can explore iconic spots like the Gateway of India, Marine Drive, and more with a professional driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Pune to Mumbai Ertiga cab?',
            answer: 'The Ertiga provides ample space for standard luggage. If you have more luggage or specific requirements, please inform us at the time of booking, and we’ll accommodate your needs.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Pune and Mumbai?',
            answer: 'Yes, we provide corporate travel services between Pune and Mumbai. Whether it’s a business meeting or a team outing, our Ertiga Cabs are perfect for corporate trips.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Pune to Mumbai Ertiga journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable services with professional drivers, spacious and well-maintained vehicles, and transparent pricing. Our Ertiga Cabs are perfect for a smooth and enjoyable journey from Pune to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Kiran Deshmukh",
            title: "Customer",
            quote: "We booked the Ertiga Cab from Pune to Mumbai with Vedant Travels, and it was a great experience. The car was spacious, the driver was courteous, and the journey was very comfortable. Highly recommended for family trips!",
            rating: 5,
        },
        {
            name: "Ms. Priya Sharma",
            title: "Customer",
            quote: "I traveled with my colleagues from Pune to Mumbai in an Ertiga with Vedant Travels. The vehicle was well-maintained, and the driver was punctual and professional. A smooth and pleasant journey throughout. Will definitely use their service again.",
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
        "name": "Pune to Mumbai Ertiga Cab | Vedant Travels",
        "description": "Book your Pune to Mumbai Ertiga taxi with Vedant Travels. Offering comfortable rides for airport transfers, one-way trips, and round trips in the Ertiga model, perfect for a smooth journey.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1240"
        }
      };
      
     
      

    return (
        <div>
            <Helmet>
        <title>Pune to Mumbai Ertiga Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Pune to Mumbai Ertiga taxi with Vedant Travels. Comfortable rides for airport transfers, one-way trips, and round trips in Ertiga. Affordable rates for a smooth journey." />
        <meta name="keywords" content="Ertiga per km rate in Pune, Pune to Mumbai Airport Ertiga Cab, Pune to Dadar Ertiga Cab Fare, Pune to Andheri Ertiga Taxi Fare, Pune to Mumbai One Way Ertiga Taxi Cab, Ertiga Cab in Pune, Ertiga Cab for Mumbai Airport Drop, Viman Nagar to Mumbai Cabs, Wagholi to Mumbai Cab Service, Pune to Borivali Ertiga Cab, Pune to Andheri Ertiga Cab, Pune to Dadar Ertiga Cab, Pune to Mumbai Ertiga Cab, Pune to Mumbai 7 Seater Cab, Pune to Mumbai Cab Round Trip, Pune to Mumbai Airport Ertiga Cab, Pune to Mumbai Central Cab, Ertiga on Rent in Pune, Pune to Mumbai Darshan Ertiga on Rent, Vedant Travels Pune, Cab Service in Pune, Pune to Mumbai Airport Cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/pune-to-mumbai-ertiga-cab" />
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
                            <img src='./images/keyword/19.jpg' alt='img' />
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

export default Punetomumbaiertigacab;