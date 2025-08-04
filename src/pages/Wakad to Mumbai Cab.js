
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Wakadtomumbaicab() {



    const cardData =
    {
        keyword: 'Wakad to Mumbai Cab ',
        heading: 'Vedant Travels: Wakad to Mumbai Cab',
        headingDescription: 'Vedant Travels offers affordable and transparent taxi fares for Wakad to Mumbai travel, ensuring a cost-effective and comfortable journey. Our pricing is competitive, with no hidden charges, and we provide multiple cab options to suit your budget and preferences.',

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
        "name": "Wakad to Mumbai Cab",
        "description": "Looking for a reliable and comfortable cab from Wakad to Mumbai? Vedant Travels offers top-quality taxi services, ensuring a smooth and stress-free journey for both business and leisure travelers."
    },
    {
        "name": "Wakad to Mumbai Airport Cab",
        "description": "Book a comfortable and timely ride from Wakad to Mumbai Airport with Vedant Travels. Our professional drivers ensure you reach the airport on time for your flight."
    },
    {
        "name": "Wakad to Dadar Cab",
        "description": "Need a taxi from Wakad to Dadar? Vedant Travels offers convenient and affordable rides for a hassle-free experience. Whether for business or leisure, our drivers ensure a smooth ride."
    },
    {
        "name": "Taxi from Wakad to Mumbai International Airport",
        "description": "Traveling from Wakad to Mumbai International Airport? Vedant Travels provides reliable, timely, and comfortable cabs for your airport transfers."
    },
    {
        "name": "Wakad to Mumbai Domestic Airport Cab Fare",
        "description": "For domestic flights, Vedant Travels provides affordable cab services from Wakad to Mumbai Domestic Airport. Our fares are competitive, and we ensure a comfortable ride."
    },
    {
        "name": "Wakad to Mumbai Innova Taxi Fare",
        "description": "Looking for a comfortable ride in an Innova? Book an Innova taxi from Wakad to Mumbai with Vedant Travels. Enjoy extra legroom and comfort for your journey at reasonable fares."
    },
    {
        "name": "Wakad to Borivali Cab",
        "description": "Traveling from Wakad to Borivali? Vedant Travels offers convenient cab services with experienced drivers. Choose from a variety of vehicles for a comfortable ride."
    },
    {
        "name": "Wakad to Mumbai Ertiga Taxi",
        "description": "For a family or group trip from Wakad to Mumbai, book an Ertiga taxi with Vedant Travels. It’s spacious, comfortable, and perfect for your travel needs."
    },
    {
        "name": "Pune to Mumbai Airport Cab",
        "description": "Traveling from Pune to Mumbai Airport? Vedant Travels offers timely, comfortable, and affordable taxi services for all your airport needs."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "For a comfortable and affordable ride from Pune to Mumbai, choose the Ertiga with Vedant Travels. Perfect for families or small groups, the Ertiga ensures a smooth journey."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "For a more premium experience, book an Innova cab with Vedant Travels. Whether you’re traveling alone or with a group, the Innova offers extra comfort and luxury for your journey."
    },
    {
        "name": "Wakad to Mumbai Cab Booking Online",
        "description": "Booking your ride from Wakad to Mumbai is simple with Vedant Travels. You can book online for a seamless and hassle-free experience."
    },
    {
        "name": "Wakad to Mumbai Airport Cab Charges",
        "description": "Our taxi services from Wakad to Mumbai Airport come with transparent and competitive pricing. Get in touch with us for an accurate fare quote."
    },
    {
        "name": "Wakad to Andheri Cab Charges",
        "description": "For your ride from Wakad to Andheri, Vedant Travels offers affordable and reliable cab services. Our experienced drivers ensure a smooth and timely journey."
    },
    {
        "name": "Wakad to Dadar Cabs",
        "description": "Book a convenient and reliable cab from Wakad to Dadar with Vedant Travels. Whether it’s for work or leisure, our taxis are available to suit your needs."
    },
    {
        "name": "Wakad to Navi Mumbai Cabs",
        "description": "Looking for a taxi to Navi Mumbai? Vedant Travels offers affordable and reliable cab services from Wakad to Navi Mumbai for a comfortable journey."
    },
    {
        "name": "Wakad to Navi Mumbai Innova Crysta",
        "description": "For a premium and comfortable ride to Navi Mumbai, book an Innova Crysta with Vedant Travels. Enjoy the luxury and extra space for your trip."
    },
    {
        "name": "Cab Service in Wakad",
        "description": "Looking for a reliable cab service in Wakad? Vedant Travels offers affordable and comfortable taxi services for all your travel needs. Whether you need a ride within the city or to Mumbai, we’ve got you covered."
    },
    {
        "name": "Taxi Service in Wakad, Pune",
        "description": "Vedant Travels provides reliable taxi services in Wakad, Pune. From airport transfers to long-distance travel, we ensure a comfortable and timely ride."
    },
    {
        "name": "Best Car Service in Wakad",
        "description": "For top-quality car services in Wakad, trust Vedant Travels. We offer the best cars, including Innova, Ertiga, and more, to suit your needs."
    },
    {
        "name": "Pune Wakad Innova Crysta on Rent",
        "description": "Rent an Innova Crysta for your journey from Wakad to Mumbai. Enjoy a premium ride with extra comfort and space, ideal for group or family travel."
    },
    {
        "name": "Vedant Travels - Pune Mumbai Cab Service",
        "description": "For a seamless journey from Pune to Mumbai, choose Vedant Travels. We offer comfortable and reliable cabs, including Ertiga, Innova, and more, to suit your travel preferences."
    },
    {
        "name": "Contact Information",
        "description": "For bookings and inquiries, contact Vedant Travels at +91 8177869909. We offer reliable and comfortable taxi services for your journey from Wakad to Mumbai, including airport transfers and local travel."
    }
],


 "tableData": [
    ["wakad to mumbai cab", "wakad to mumbai airport cab"],
    ["wakad dadar cab", "taxi wakad to mumbai international airport"],
    ["wakad to mumbai domestic airport cab fare", "wakad to mumbai innova taxi fare"],
    ["wakad to borivali cab", "wakad to mumbai ertiga taxi"],
    ["pune to mumbai airport cab", "pune to mumbai ertiga cab"],
    ["Pune to Mumbai Innova Cab", "wakad to mumbai cab booking online"],
    ["wakad to mumbai airport cab", "wakad to mumbai airport cab charges"],
    ["wakad to andheri cab charges", "wakad to dadar cabs"],
    ["wakad to Navi Mumbai Cabs", "wakad to navi mumbai innova crysta"],
    ["Cab service in Wakad", "taxi service in wakad pune"],
    ["best car service in wakad", "pune wakad innova crysta on Rent"],
    ["Pune Mumbai Vedant Travels", "Cab service in pune"],
    ["Pune to Mumbai airport cab", "Pune Mumbai Cab"]
],
"whychoose": [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we understand that punctuality is essential, especially when traveling from Wakad to Mumbai. Whether you have a business meeting or a personal trip, our professional drivers ensure timely pickups and drop-offs, making your journey smooth and hassle-free."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "Our fleet of vehicles is designed for comfort and convenience. Whether you prefer a sedan, SUV, or luxury car, all our vehicles come with ample legroom, air conditioning, and comfortable seating to ensure a relaxing ride throughout your journey."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are highly experienced and well-trained, familiar with the best routes between Wakad and Mumbai. They prioritize safety, smooth driving, and ensuring you arrive on time, no matter the traffic conditions."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive prices for your Wakad to Mumbai journey. Our pricing is transparent, with no hidden charges, so you know exactly what to expect when you book your cab."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our top priority. All of our vehicles are equipped with the latest safety features, including airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure your journey is as secure and comfortable as possible."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a cab in the early hours of the morning or late at night, Vedant Travels is available 24/7. We offer flexible booking options, allowing you to travel at your convenience."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a cab for your journey from Wakad to Mumbai is quick and easy. Use our website or mobile app to book online, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "Whether you’re traveling for business or leisure, we offer tailored travel packages to meet your specific needs. Let us know your preferences, and we’ll customize your Wakad to Mumbai trip to make it more enjoyable and stress-free."
    }
]

    








    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Wakad to Mumbai cab with Vedant Travels?',
            answer: 'You can book a cab online via our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all of our drivers are experienced in long-distance travel, including the route from Wakad to Mumbai. They ensure a smooth and safe journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Wakad to Mumbai travel?',
            answer: 'We offer a wide range of vehicles including sedans, SUVs, and luxury cars. All vehicles are well-maintained, comfortable, and spacious.',
        },
        {
            id: 4,
            question: 'How do I pay for my Wakad to Mumbai cab rental?',
            answer: 'We accept multiple payment options including cash, credit/debit cards, and online payment via our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Wakad to Mumbai?',
            answer: 'Yes, you can book a round-trip cab for your convenience. Simply provide your return details when making the booking, and we’ll handle the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you during the booking process, ensuring full transparency.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai. Explore popular landmarks like the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Wakad to Mumbai cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please inform us at the time of booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Wakad and Mumbai?',
            answer: 'Yes, we provide corporate travel services tailored to business needs. Whether it’s a corporate event or business meetings, we can offer customized packages for your company.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Wakad to Mumbai journey?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, affordable pricing, and well-maintained vehicles. We prioritize your comfort, safety, and satisfaction, ensuring a smooth and stress-free journey from Wakad to Mumbai.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Akash Deshmukh",
            title: "Customer",
            quote: "I had an amazing experience with Vedant Travels while traveling from Wakad to Mumbai. The driver was punctual, and the vehicle was clean and comfortable. I’ll definitely use their service again!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Kulkarni",
            title: "Customer",
            quote: "Our family booked a cab with Vedant Travels for a trip from Wakad to Mumbai, and it was a pleasant journey. The driver was courteous and made sure we reached on time. Highly recommended!",
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
        "name": "Wakad to Mumbai Cab | Vedant Travels",
        "description": "Book your Wakad to Mumbai cab with Vedant Travels for a smooth and hassle-free ride. Choose from premium vehicles like Innova Crysta, Ertiga, Swift Dzire, and more for one-way trips, airport transfers, and round trips. Enjoy affordable rates and professional service.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "1250"
        }
      };
      
   
      

    return (
        <div>
              <Helmet>
        <title>Wakad to Mumbai Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Wakad to Mumbai cab with Vedant Travels. We provide reliable and affordable taxi services with options like Innova Crysta, Ertiga, and Swift Dzire. Get airport transfers, one-way trips, and round trips at competitive rates." />
        <meta name="keywords" content="Wakad to Mumbai Cab, wakad to mumbai airport cab, wakad dadar cab, taxi wakad to mumbai international airport, wakad to mumbai domestic airport cab fare, wakad to mumbai innova taxi fare, wakad to borivali cab, wakad to mumbai ertiga taxi, pune to mumbai airport cab, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, wakad to mumbai cab booking online, wakad to mumbai airport cab, wakad to mumbai airport cab charges, wakad to andheri cab charges, wakad to dadar cabs, wakad to Navi Mumbai Cabs, wakad to navi mumbai innova crysta, Cab service in Wakad, taxi service in wakad pune, best car service in wakad, pune wakad innova crysta on Rent, Pune Mumbai Vedant Travels, Cab service in pune, Pune to Mumbai airport cab, Pune Mumbai Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/wakad-to-mumbai-cab" />
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
                            <img src='./images/keyword/12.jpg' alt='img' />
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

export default Wakadtomumbaicab;