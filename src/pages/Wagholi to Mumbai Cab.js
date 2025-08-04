
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Wagholitomumbaicabs() {



    const cardData =
    {
        keyword: 'Wagholi to Mumbai Cab',
        heading: 'Vedant Travels: Wagholi to Mumbai Cab',
        headingDescription: 'Vedant Travels offers reliable, affordable, and transparent taxi services for Wagholi to Mumbai travel, ensuring a smooth and comfortable journey. We provide a variety of cab options to match your preferences and budget, from sedans to SUVs and premium vehicles. With competitive pricing and no hidden charges, you can enjoy a hassle-free ride to Mumbai.',

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
        "name": "Wagholi to Mumbai Cab Price",
        "description": "For a comfortable and affordable ride from Wagholi to Mumbai, Vedant Travels offers competitive pricing. We ensure a smooth and timely journey with professional drivers, catering to your travel needs."
    },
    {
        "name": "Wagholi to Mumbai Cab",
        "description": "Travel from Wagholi to Mumbai with Vedant Travels for a reliable and comfortable cab service. Our vehicles are well-maintained, ensuring a safe and smooth journey."
    },
    {
        "name": "Wagholi to Mumbai Airport Cab Service",
        "description": "Book a comfortable and timely ride from Wagholi to Mumbai Airport with Vedant Travels. Our airport transfer services ensure you arrive on time for your flight with a hassle-free experience."
    },
    {
        "name": "Mumbai to Wagholi Cab Service",
        "description": "Whether you're traveling from Mumbai to Wagholi for work or leisure, Vedant Travels offers dependable and convenient taxi services. Enjoy a comfortable ride with professional drivers."
    },
    {
        "name": "Kharadi to Mumbai Airport Cab Service",
        "description": "Need a ride from Kharadi to Mumbai Airport? Vedant Travels offers reliable and efficient airport transfer services to ensure timely arrival at your terminal."
    },
    {
        "name": "Kharadi to Mumbai Airport Cab Service Rates",
        "description": "For affordable rates from Kharadi to Mumbai Airport, Vedant Travels provides transparent pricing with no hidden charges. Contact us for an accurate fare quote based on your specific trip."
    },
    {
        "name": "Lohegaon to Mumbai Airport Cab",
        "description": "For a smooth and timely ride from Lohegaon to Mumbai Airport, book your cab with Vedant Travels. Our experienced drivers ensure you reach the airport comfortably and on time."
    },
    {
        "name": "Perne Phata to Mumbai Airport Cab",
        "description": "Travel from Perne Phata to Mumbai Airport with Vedant Travels. We offer reliable and punctual airport transfer services for your convenience."
    },
    {
        "name": "Keshnand to Mumbai Cab Service",
        "description": "For a convenient and affordable ride from Keshnand to Mumbai, Vedant Travels provides comfortable and safe taxi services. Book with us for a stress-free journey."
    },
    {
        "name": "Uruli Kanchan to Mumbai Cabs Service",
        "description": "Travel from Uruli Kanchan to Mumbai with Vedant Travels for a hassle-free ride. Our reliable cabs ensure timely arrival, making your trip comfortable and enjoyable."
    },
    {
        "name": "Mundwa to Mumbai Cabs Service",
        "description": "Looking for a dependable cab service from Mundwa to Mumbai? Vedant Travels offers comfortable rides with professional drivers to ensure a smooth journey to your destination."
    },
    {
        "name": "Manjari to Mumbai Cabs Service",
        "description": "Book your cab from Manjari to Mumbai with Vedant Travels. Whether it’s for business or leisure, we ensure your trip is comfortable, timely, and stress-free."
    },
    {
        "name": "Pune Nagar Road to Mumbai Cabs Service",
        "description": "For a reliable and efficient ride from Pune Nagar Road to Mumbai, Vedant Travels offers affordable and comfortable cabs for a smooth journey."
    },
    {
        "name": "Cab Service in Wagholi",
        "description": "Vedant Travels provides reliable and affordable cab services in Wagholi for both local and outstation trips. Whether you need a ride to Mumbai or within Pune, we ensure a smooth and comfortable experience."
    },
    {
        "name": "Innova Crysta on Rent in Wagholi",
        "description": "Rent an Innova Crysta for your journey from Wagholi. Ideal for families and groups, the Innova Crysta offers a comfortable and luxurious travel experience. Book with Vedant Travels for a premium ride."
    },
    {
        "name": "Ertiga on Rent in Wagholi",
        "description": "Need a spacious and comfortable vehicle? Rent an Ertiga in Wagholi with Vedant Travels. Perfect for small groups or families, the Ertiga ensures a smooth and enjoyable journey."
    },
    {
        "name": "Sedan Cabs on Rent in Wagholi",
        "description": "Rent a sedan for your trip from Wagholi with Vedant Travels. Whether you're traveling for business or leisure, our sedans provide comfort and efficiency for your journey."
    }
],


"tableData": [
    ["Wagholi to Mumbai Cab Price", "Wagholi to Mumbai Cab"],
    ["Wagholi to Mumbai Airport Cab Service", "Mumbai to Wagholi Cab Service"],
    ["Kharadi to Mumbai Airport Cab Service", "Kharadi to Mumbai Airport Cab Service Rates"],
    ["Lohegaon to Mumbai Airport Cab", "Perne Phata to Mumbai Airport Cab"],
    ["Kesnand to Mumbai Cab Service", "Uruli Kanchan to Mumbai Cabs Service"],
    ["Mundwa to Mumbai Cabs Service", "Manjari to Mumbai Cabs Service"],
    ["Pune Nagar Road to Mumbai Cabs Service", "Cab Service in Wagholi"],
    ["Innova Crysta on Rent in Wagholi", "Ertiga on Rent in Wagholi"],
    ["Sedan Cabs on Rent in Wagholi", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how important your time is. Whether you're traveling from Wagholi to Mumbai for a business meeting or a leisure trip, we ensure timely pickups and drop-offs, making sure you reach your destination on schedule, every time."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a fleet of well-maintained, spacious vehicles for your Wagholi to Mumbai Cab ride. Choose from our range of sedans, SUVs, and premium cars that are equipped with comfortable seating, air conditioning, and ample legroom for a relaxing journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced and professional drivers are well-versed with the best routes from Wagholi to Mumbai. They are committed to providing a smooth, safe, and efficient journey, ensuring that your travel experience is as comfortable and stress-free as possible."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive rates for your Wagholi to Mumbai Cab service, with no hidden charges. Our transparent pricing ensures that you know exactly what you're paying for, giving you confidence and peace of mind."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All of our vehicles are equipped with modern safety features such as seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols to ensure that you have a safe, worry-free journey."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it's an early morning pickup or a late-night return, Vedant Travels is available around the clock to accommodate your travel needs. You can book your Wagholi to Mumbai Cab at any time, and our customer service team is ready to assist you whenever necessary."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Wagholi to Mumbai Cab is quick and easy. You can book online via our website or mobile app, or contact our customer service team for assistance. We aim to make the booking process as smooth as possible for you."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We understand that every traveler has unique needs. That's why we offer customized travel packages for your Wagholi to Mumbai trip, ensuring that your journey is tailored to your specific preferences, whether you're traveling for business or leisure."
    }
  ]
    








    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Wagholi to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book your cab through our website or mobile app. Alternatively, our customer service team is available to assist you with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced in handling long-distance routes like Wagholi to Mumbai. They are familiar with the best routes and ensure a safe, smooth, and timely trip.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Wagholi to Mumbai travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All of our vehicles are well-maintained, spacious, and designed for comfort.',
        },
        {
            id: 4,
            question: 'How do I pay for my Wagholi to Mumbai cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, making the payment process convenient and flexible for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Wagholi to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking, and we will handle the rest to make your travel experience seamless.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring full transparency and no hidden costs.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. After your Wagholi to Mumbai journey, you can explore iconic landmarks like the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Wagholi to Mumbai cab?',
            answer: 'Our vehicles are equipped to accommodate standard luggage. If you have more luggage or specific needs, please inform us at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Wagholi and Mumbai?',
            answer: 'Yes, we offer corporate travel services, providing reliable and professional travel options for business meetings, events, and corporate outings. We can tailor packages to meet the specific needs of your company.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Wagholi to Mumbai journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable service. With experienced drivers, well-maintained vehicles, competitive pricing, and 24/7 availability, we ensure a seamless travel experience from Wagholi to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Anil Patil",
            title: "Customer",
            quote: "I had a great experience traveling from Wagholi to Mumbai with Vedant Travels. The driver was professional and courteous, and the vehicle was very comfortable. The journey was smooth, and I would definitely recommend their services.",
            rating: 5,
        },
        {
            name: "Mrs. Meera Deshmukh",
            title: "Customer",
            quote: "We used Vedant Travels for our trip from Wagholi to Mumbai. The cab was spacious, and the driver was friendly and punctual. We had a great experience, and we’ll definitely book again for future trips.",
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
        "name": "Wagholi to Mumbai Cab | Vedant Travels",
        "description": "Book your Wagholi to Mumbai Cab with Vedant Travels for a comfortable, affordable, and reliable ride. We offer one-way trips, airport transfers, and round trips from Wagholi to Mumbai in vehicles like Innova and Ertiga.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "920"
        }
      };
      
     
      

    return (
        <div>
            <Helmet>
        <title>Wagholi to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Wagholi to Mumbai Cab with Vedant Travels. Offering comfortable rides for one-way trips, airport transfers, and round trips. Enjoy a smooth journey in vehicles like Innova and Ertiga." />
        <meta name="keywords" content="Wagholi to Mumbai Cab Price, Wagholi to Mumbai Cab, Wagholi to Mumbai Airport Cab Service, Mumbai to Wagholi Cab Service, Kharadi to Mumbai Airport Cab Service, Kharadi to Mumbai Airport Cab Service Rates, Lohegaon to Mumbai Airport Cab, Perne Phata to Mumbai Airport Cab, Kesnand to Mumbai Cab Service, Uruli Kanchan to Mumbai Cabs Service, Mundwa to Mumbai Cabs Service, Manjari to Mumbai Cabs Service, Pune Nagar Road to Mumbai Cabs Service, Cab Service in Wagholi, Innova Crysta on Rent in Wagholi, Ertiga on Rent in Wagholi, Sedan Cabs on Rent in Wagholi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/wagholi-to-mumbai-cab" />
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
                            <img src='./images/keyword/28.jpg' alt='img' />
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

export default Wagholitomumbaicabs;