
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Boatclubaoadtomumbaicab() {



    const cardData =
    {
        keyword: 'Boat Club Road to Mumbai Cab ',
        heading: 'Vedant Travels: Boat Club Road to Mumbai Cab ',
        headingDescription: 'Vedant Travels offers affordable, reliable, and transparent taxi fares for Boat Club Road to Mumbai travel, ensuring a comfortable and hassle-free journey. We provide various cab options, including sedans, SUVs, and premium vehicles, to cater to your preferences and budget. Our pricing is competitive with no hidden charges, allowing you to enjoy a smooth ride without any surprises.',

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
        "name": "Boat Club Road to Mumbai Cab Price",
        "description": "Looking for an affordable cab ride from Boat Club Road to Mumbai? Vedant Travels offers competitive pricing for your journey. Enjoy a comfortable and timely ride without any hidden costs."
    },
    {
        "name": "Boat Club Road to Mumbai Innova Cab",
        "description": "For a spacious and comfortable ride, book an Innova from Boat Club Road to Mumbai with Vedant Travels. Ideal for families or groups, the Innova ensures a smooth and enjoyable journey."
    },
    {
        "name": "Cab Service in Pune, Boat Club Road",
        "description": "For reliable and convenient cab services on Boat Club Road, Pune, Vedant Travels offers professional drivers and well-maintained vehicles for all your transportation needs."
    },
    {
        "name": "Cheapest Cab Service in Pune, Boat Club Road",
        "description": "Looking for budget-friendly taxi options from Boat Club Road? Vedant Travels provides affordable rates without compromising comfort, ensuring a stress-free travel experience."
    },
    {
        "name": "Boat Club Road to Dadar Cab Service",
        "description": "Travel from Boat Club Road to Dadar with Vedant Travels for a comfortable and timely ride. We offer reliable and affordable cab services to Dadar, one of Mumbai's most prominent areas."
    },
    {
        "name": "Sangamwadi to Mumbai Cabs",
        "description": "Book a reliable cab from Sangamwadi to Mumbai with Vedant Travels. Our professional drivers ensure you have a smooth and comfortable ride, no matter your destination in Mumbai."
    },
    {
        "name": "Sangamwadi to Mumbai Airport Cabs",
        "description": "Need a ride from Sangamwadi to Mumbai Airport? Vedant Travels offers timely and efficient airport transfer services, ensuring you reach your flight on time."
    },
    {
        "name": "Best Cab Service Pune to Mumbai",
        "description": "For the best cab service from Pune to Mumbai, Vedant Travels is your go-to choice. Whether you’re traveling for business or leisure, we offer a variety of vehicles to make your journey comfortable and timely."
    },
    {
        "name": "Yerwada to Mumbai Cab Service",
        "description": "Travel comfortably from Yerwada to Mumbai with Vedant Travels. Our reliable cab services ensure a smooth ride, whether you’re going to the airport or exploring the city."
    },
    {
        "name": "Cab Service in Yerwada Pune",
        "description": "For dependable and affordable cab services in Yerwada, Pune, Vedant Travels is here to provide a comfortable ride to your destination. Whether it's a local trip or an airport transfer, we’ve got you covered."
    },
    {
        "name": "Cab Service in Pune",
        "description": "Vedant Travels offers comprehensive cab services across Pune. Whether you're traveling locally or going on an outstation trip, we ensure a smooth and enjoyable experience with professional drivers."
    },
    {
        "name": "Cab Service in Bund Garden Pune",
        "description": "For a reliable taxi ride in and around Bund Garden, Pune, Vedant Travels provides affordable and timely services to meet your travel needs. Book your ride today for a hassle-free experience."
    },
    {
        "name": "Bund Garden to Mumbai Cab",
        "description": "Need a ride from Bund Garden to Mumbai? Vedant Travels offers reliable and comfortable cab services to Mumbai, ensuring a smooth and timely journey to your destination."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Looking for a convenient and comfortable ride from Pune to Mumbai Airport? Vedant Travels offers reliable airport transfer services with professional drivers, ensuring you arrive on time and stress-free."
    },
    {
        "name": "Pune Mumbai Cab",
        "description": "For a comfortable and affordable ride from Pune to Mumbai, choose Vedant Travels. We offer a variety of vehicles, including sedans, SUVs, and luxury options, to suit your travel preferences."
    },
    {
        "name": "Contact Information",
        "description": "For bookings or inquiries, contact Vedant Travels at +91 8208126878. We ensure a smooth, comfortable, and stress-free journey every time."
    }
],


"tableData": [
    ["Boat Club Road to Mumbai Cab Price", "Boat Club Road to Mumbai Innova Cab"],
    ["Cab Service in Pune about Club Road", "Cheapest Cab Service in Pune about Club Road"],
    ["Boat Club Road to Dadar Cab Service", "Sangamwadi to Mumbai Cabs"],
    ["Sangamwadi to Mumbai Airport Cabs", "Best Cab Service Pune to Mumbai"],
    ["Yerwada to Mumbai Cab Service", "Cab Service in Yerwada Pune"],
    ["Cab Service in Pune", "Cab Service in Bund Garden Pune"],
    ["Bund Garden to Mumbai Cab", "Cab Service in Pune"],
    ["Pune to Mumbai Airport Cab", "Pune Mumbai Cab"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand that being on time is crucial when traveling from Boat Club Road to Mumbai. Whether you're heading to a business meeting or a vacation, our drivers ensure punctual pickups and timely drop-offs, making your journey smooth and hassle-free."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Our Boat Club Road to Mumbai Cab service offers a variety of vehicles, including sedans, SUVs, and premium cars. All vehicles are well-maintained, spacious, and equipped with comfortable seating, air conditioning, and ample legroom, ensuring a pleasant and relaxing ride."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our experienced drivers are knowledgeable about the best routes from Boat Club Road to Mumbai, ensuring you avoid traffic and reach your destination efficiently. They are committed to providing a safe, smooth, and pleasant journey from start to finish."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive pricing for your Boat Club Road to Mumbai Cab ride, with no hidden fees or extra charges. Our transparent pricing ensures that you know exactly what you're paying for, giving you peace of mind throughout the booking process."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features like seat belts, airbags, and GPS tracking. Our drivers adhere to strict safety protocols, ensuring that your journey is secure and worry-free."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it’s an early morning trip or a late-night return, Vedant Travels is available 24/7 to cater to your needs. You can book a cab at any time, and our customer service team will assist you promptly, ensuring you get the ride you need when you need it."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Boat Club Road to Mumbai Cab is easy with Vedant Travels. You can book online via our website or mobile app, or you can contact our customer service team for assistance with your booking."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "We offer customized travel packages for your journey from Boat Club Road to Mumbai. Whether you're traveling for business, leisure, or need a special service, we can tailor the ride to suit your requirements."
    }
  ]



    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Boat Club Road to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book a cab through our website or mobile app. Alternatively, you can reach out to our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced in handling long-distance travel, including the route from Boat Club Road to Mumbai. They ensure a smooth, timely, and safe journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Boat Club Road to Mumbai travel?',
            answer: 'We offer various vehicles such as sedans, SUVs, and premium cars. All vehicles are comfortable, well-maintained, and spacious to accommodate your needs.',
        },
        {
            id: 4,
            question: 'How do I pay for my Boat Club Road to Mumbai cab rental?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app, offering you flexibility and convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Boat Club Road to Mumbai?',
            answer: 'Yes, round-trip bookings are available. Simply provide your return details during the booking process, and we’ll make sure your entire trip is organized.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated upfront during the booking process, ensuring complete transparency in pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai after your drop-off. Explore Mumbai’s popular attractions, including the Gateway of India, Marine Drive, and more, with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Boat Club Road to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please inform us at the time of booking, and we will arrange accordingly.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Boat Club Road and Mumbai?',
            answer: 'Yes, we provide corporate travel services, including customized packages for business meetings, events, and corporate outings. We ensure a professional and comfortable experience for your business needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Boat Club Road to Mumbai journey?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, comfortable vehicles, and transparent pricing. We ensure that your Boat Club Road to Mumbai journey is safe, smooth, and enjoyable.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sandeep Iyer",
            title: "Customer",
            quote: "I traveled from Boat Club Road to Mumbai with Vedant Travels, and I had a wonderful experience. The vehicle was very comfortable, and the driver was punctual and friendly. The journey was smooth and stress-free.",
            rating: 5,
        },
        {
            name: "Mrs. Priya Deshmukh",
            title: "Customer",
            quote: "We used Vedant Travels for our trip from Boat Club Road to Mumbai. The car was spacious and well-maintained, and the driver was professional. We had a pleasant and comfortable ride. Highly recommended!",
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
        "name": "Boat Club Road to Mumbai Cab | Vedant Travels",
        "description": "Book your Boat Club Road to Mumbai Cab with Vedant Travels for a comfortable and affordable ride. Offering one-way trips, airport transfers, and round trips. Choose from a variety of vehicles including Innova and other models.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1320"
        }
      };
      
     

    return (
        <div>
            <Helmet>
        <title>Boat Club Road to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Boat Club Road to Mumbai Cab with Vedant Travels. We offer affordable one-way trips, airport transfers, and round trips with reliable vehicles such as Innova and Swift Dzire." />
        <meta name="keywords" content="Boat Club Road to Mumbai Cab Price, Boat Club Road to Mumbai Innova Cab, Cab Service in Pune Boat Club Road, Cheapest Cab Service in Pune Boat Club Road, Boat Club Road to Dadar Cab Service, Sangamwadi to Mumbai Cabs, Sangamwadi to Mumbai Airport Cabs, Best Cab Service Pune to Mumbai, Yerwada to Mumbai Cab Service, Cab Service in Yerwada Pune, Cab Service in Pune, Cab Service in Bund Garden Pune, Bund Garden to Mumbai Cab, Pune to Mumbai Airport Cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/boat-club-road-to-mumbai-cab" />
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
                            <img src='./images/keyword/26.jpg' alt='img' />
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

export default Boatclubaoadtomumbaicab;