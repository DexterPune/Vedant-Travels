
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kharghartopunecab() {



    const cardData =
    {
        keyword: 'Kharghar to Pune Cab ',
        heading: 'Vedant Travels: Kharghar to Pune Cab',
        headingDescription: 'Vedant Travels offers reliable and convenient cab services from Kharghar to Pune. Whether you are traveling solo, with friends, or family, we have a wide range of vehicles to choose from, including sedans, SUVs, and luxury cars. Our fleet is well-maintained, and our professional drivers ensure you have a safe, comfortable, and smooth journey.',

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
            "name": "Kharghar to Pune Taxi",
            "description": "Vedant Travels offers reliable and comfortable taxi services from Kharghar to Pune. Whether you're traveling for business, leisure, or family visits, our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a smooth and stress-free journey."
        },
        {
            "name": "Kharghar to Pune Cab Cost",
            "description": "Looking for the cost of a cab from Kharghar to Pune? Vedant Travels provides affordable and transparent pricing, with no hidden charges. We offer a range of vehicles such as Sedans, Ertiga, and Innova to suit your travel needs."
        },
        {
            "name": "Bandra Kurla Complex to Pune Cab",
            "description": "For a convenient and comfortable ride from Bandra Kurla Complex to Pune, Vedant Travels offers reliable taxi services. Our fleet includes vehicles like Sedans, Ertiga, and Innova, ensuring a smooth journey with professional drivers."
        },
        {
            "name": "Mahim to Pune Cab Fare",
            "description": "The Mahim to Pune cab fare with Vedant Travels is competitive and transparent. We offer various vehicle options like Sedans, Ertiga, and Innova to ensure a comfortable and affordable ride."
        },
        {
            "name": "Kanjurmarg to Pune Cab",
            "description": "Travel from Kanjurmarg to Pune with Vedant Travels for a comfortable and affordable taxi service. Our fleet includes well-maintained vehicles like Sedans, Ertiga, and Innova, ensuring a smooth journey with experienced drivers."
        },
        {
            "name": "Mumbra to Pune Cab Service",
            "description": "Vedant Travels offers reliable and affordable taxi services from Mumbra to Pune. Choose from our fleet of vehicles such as Sedans, Ertiga, and Innova for a safe, timely, and comfortable journey."
        },
        {
            "name": "Vikhroli to Pune Cab Service",
            "description": "For a smooth and convenient ride from Vikhroli to Pune, Vedant Travels offers reliable taxi services. Choose from a variety of vehicles like Sedans, Ertiga, and Innova, ensuring a comfortable and stress-free journey."
        },
        {
            "name": "Kharghar to Pune One Way Cab",
            "description": "Looking for a one-way taxi from Kharghar to Pune? Vedant Travels provides affordable and hassle-free one-way cab services with vehicles like Sedans, Ertiga, and Innova, ensuring a comfortable and convenient journey."
        },
        {
            "name": "Kharghar to Pune Round Trip Cab",
            "description": "For a round-trip taxi from Kharghar to Pune, Vedant Travels offers a reliable and affordable service. Our fleet of vehicles, including Sedans, Ertiga, and Innova, ensures a smooth and timely journey both ways."
        },
        {
            "name": "Kalina to Pune Cab",
            "description": "Travel from Kalina to Pune with Vedant Travels for a comfortable and affordable ride. Our fleet includes well-maintained vehicles like Sedans, Ertiga, and Innova, offering a smooth journey with professional drivers."
        },
        {
            "name": "Cab Service in Kharghar, Mumbai",
            "description": "Vedant Travels offers reliable and efficient cab services in Kharghar, Mumbai. Whether you're traveling locally or to Pune, our fleet of vehicles ensures a smooth and timely journey with experienced drivers."
        },
        {
            "name": "Ertiga Cab in Kharghar, Mumbai",
            "description": "For a comfortable and spacious ride from Kharghar, Mumbai, Vedant Travels offers Ertiga cabs. Perfect for families or medium-sized groups, the Ertiga offers a smooth and affordable journey."
        },
        {
            "name": "Ertiga Taxi Fare in Kharghar",
            "description": "Looking for Ertiga taxi fare in Kharghar? Vedant Travels offers competitive and transparent pricing for Ertiga cabs, ensuring an affordable and comfortable ride for your journey."
        },
        {
            "name": "Innova Cab in Kharghar",
            "description": "For a premium and spacious ride from Kharghar, Mumbai, Vedant Travels offers Innova cabs. Whether you're traveling to Pune or for a local ride, the Innova guarantees a smooth, comfortable, and luxurious journey."
        }
    ],


    "tableData": [
        ["Kharghar to Pune Taxi", "Kharghar to Pune Cab Cost"],
        ["Bandra Kurla Complex to Pune Cab", "Mahim to Pune Cab Fare"],
        ["Kanjurmarg to Pune Cab", "Mumbra to Pune Cab Service"],
        ["Vikhroli to Pune Cab Service", "Kharghar to Pune One Way Cab"],
        ["Kharghar to Pune Round Trip Cab", "Kalina to Pune Cab"],
        ["Cab Service in Kharghar Mumbai", "Ertiga Cab in Kharghar Mumbai"],
        ["Ertiga Taxi Fare in Kharghar", "Innova Cab in Kharghar"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we value your time. Whether you're traveling from Kharghar to Pune for business or leisure, we ensure punctual pickups and drop-offs to make your journey smooth and on time."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "We offer a variety of well-maintained vehicles for your Kharghar to Pune trip, including sedans, SUVs, and luxury cars. Our vehicles come with modern amenities, air conditioning, and ample legroom, ensuring a comfortable ride."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our experienced drivers are familiar with the Kharghar to Pune route and are committed to providing a safe and smooth journey. They are courteous, professional, and skilled at navigating long-distance routes."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels offers competitive, transparent pricing for Kharghar to Pune cab service. We provide clear pricing upfront, ensuring no hidden charges and the best value for your journey."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with the latest safety features like airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to provide you with a secure and worry-free ride from Kharghar to Pune."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether it’s a morning trip or a late-night journey, Vedant Travels is available round the clock for your Kharghar to Pune travel needs. Our customer service team is always ready to assist you with your bookings."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking a cab from Kharghar to Pune is easy with Vedant Travels. You can book online through our website or mobile app, or simply contact our customer service team for assistance with your booking."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer flexible travel packages that can be customized according to your specific needs. Whether you're traveling for business, pleasure, or any other reason, we can tailor the journey to suit your requirements."
        }
      ]
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a cab from Kharghar to Pune?',
            answer: 'You can easily book a cab from Kharghar to Pune via our website or mobile app. Alternatively, you can contact our customer service team to assist with your booking.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for the Kharghar to Pune journey?',
            answer: 'We offer a wide selection of vehicles, including sedans, SUVs, and luxury cars, to ensure your comfort and convenience during the journey.',
        },
        {
            id: 3,
            question: 'What payment options are available for my Kharghar to Pune cab?',
            answer: 'We accept multiple payment methods including cash, credit/debit cards, and online payments via our mobile app, making it easier for you to settle the fare.',
        },
        {
            id: 4,
            question: 'Can I book a round-trip cab from Kharghar to Pune?',
            answer: 'Yes, you can book a round-trip service. Simply provide the return details during your booking, and we will ensure a smooth round-trip journey for you.',
        },
        {
            id: 5,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated clearly before your trip, ensuring complete transparency in our pricing.',
        },
        {
            id: 6,
            question: 'Can I use the Kharghar to Pune cab for sightseeing?',
            answer: 'Yes, we offer sightseeing services as part of your journey. If you\'d like to visit attractions along the way or explore Pune, let us know, and we’ll tailor your trip accordingly.',
        },
        {
            id: 7,
            question: 'What is the luggage allowance for the cab from Kharghar to Pune?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, please inform us during booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 8,
            question: 'Is Vedant Travels available for corporate travel from Kharghar to Pune?',
            answer: 'Yes, we offer corporate travel solutions, whether for business meetings, conferences, or team outings. We can customize the travel package to meet your company\'s needs.',
        },
        {
            id: 9,
            question: 'Why should I choose Vedant Travels for my Kharghar to Pune journey?',
            answer: 'Vedant Travels is known for its reliability, professional drivers, affordable prices, and well-maintained vehicles. We prioritize your safety, comfort, and convenience, ensuring a seamless and enjoyable journey from Kharghar to Pune.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Arvind Kapoor",
            title: "Business Traveler",
            quote: "I recently traveled from Kharghar to Pune with Vedant Travels, and I had an excellent experience. The driver was professional, and the car was clean and comfortable. I’ll definitely use their service again.",
            rating: 5,
        },
        {
            name: "Mrs. Priya Deshmukh",
            title: "Family Traveler",
            quote: "The trip from Kharghar to Pune was smooth and enjoyable. The vehicle was spacious, and the driver knew the route well. I highly recommend Vedant Travels for anyone traveling this route.",
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
        "name": "Kharghar to Pune Cab Service | Vedant Travels",
        "description": "Book your Kharghar to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Affordable and reliable taxi service for your journey from Kharghar to Pune, Bandra Kurla Complex, Mahim, Kanjurmarg, Mumbra, Vikhroli, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.6",
          "ratingCount": "180"
        }
      };
      
      


    return (
        <div>
           
           <Helmet>
        <title>Kharghar to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Kharghar to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Affordable and reliable taxi service for your journey from Kharghar to Pune, Bandra Kurla Complex, Mahim, Kanjurmarg, Mumbra, Vikhroli, and more." />
        <meta name="keywords" content="Kharghar to Pune Cab, Kharghar to Pune Taxi Fare, Kharghar to Pune One Way Cab, Kharghar to Pune Round Trip Cab, Kharghar to Pune Ertiga Cab, Kharghar to Pune Innova Crysta, Kharghar to Pune Sedan Cab, Kharghar to Pune Station Cab, Cab Service in Kharghar Mumbai, Ertiga Cab in Kharghar Mumbai, Innova Taxi in Kharghar" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/kharghar-to-pune-cab-service" />
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
                            <img src='/images/keyword/63.jpg' alt='img' />
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

export default Kharghartopunecab;