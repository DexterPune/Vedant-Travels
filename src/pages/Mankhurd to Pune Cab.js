
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mankhurdtopunecab() {



    const cardData =
    {
        keyword: 'Mankhurd to Pune Cab  ',
        heading: 'Vedant Travels: Mankhurd to Pune Cab ',
        headingDescription: 'Vedant Travels offers dependable and comfortable cab services from Mankhurd to Pune. Whether you are traveling solo, with family, or in a group, we provide a wide selection of vehicles, including sedans, SUVs, and luxury cars. Our well-maintained fleet and experienced drivers ensure a smooth and safe journey from Mankhurd to Pune.',

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
            "name": "Mankhurd to Pune Cab Service",
            "description": "Vedant Travels offers reliable and comfortable taxi services from Mankhurd to Pune. Choose from our fleet of vehicles like Innova, Ertiga, and Sedans to ensure a smooth and stress-free journey with professional drivers."
        },
        {
            "name": "Mankhurd to Pimpri Cab",
            "description": "For a comfortable and affordable ride from Mankhurd to Pimpri, Vedant Travels provides dependable taxi services. We offer a range of vehicles like Sedans, Ertiga, and Innova to make your journey smooth and convenient."
        },
        {
            "name": "Mankhurd to Pune One Way Cab",
            "description": "Looking for a one-way taxi from Mankhurd to Pune? Vedant Travels offers affordable and hassle-free one-way cab services, with options like Sedans, Ertiga, and Innova, ensuring a comfortable and convenient journey."
        },
        {
            "name": "Chembur to Pune Car Fare",
            "description": "The car fare for a journey from Chembur to Pune with Vedant Travels is competitive and transparent. We offer a variety of vehicle options, such as Sedans, Ertiga, and Innova, ensuring a comfortable ride at affordable rates."
        },
        {
            "name": "Belapur to Pune by Taxi",
            "description": "Vedant Travels provides reliable and affordable taxi services from Belapur to Pune. Choose from a range of vehicles like Sedans, Ertiga, and Innova for a smooth and safe journey."
        },
        {
            "name": "Belapur to Pune One Way Cab",
            "description": "For a convenient one-way taxi ride from Belapur to Pune, Vedant Travels offers affordable and reliable services. Our fleet includes Sedans, Ertiga, and Innova, ensuring a smooth and hassle-free journey."
        },
        {
            "name": "Belapur to Pimpri Chinchwad Cab",
            "description": "Travel from Belapur to Pimpri Chinchwad with Vedant Travels for a comfortable and affordable ride. We offer various vehicle options like Sedans, Ertiga, and Innova to suit your needs and ensure a timely journey."
        },
        {
            "name": "Belapur to Baner Cab Fare",
            "description": "Looking for an affordable and transparent cab fare from Belapur to Baner? Vedant Travels offers competitive pricing with no hidden charges, ensuring a comfortable and safe journey in vehicles like Sedans, Ertiga, and Innova."
        },
        {
            "name": "Seawoods to Pune Cab Fare",
            "description": "The fare for a taxi from Seawoods to Pune with Vedant Travels is affordable and transparent. Choose from vehicles like Sedans, Ertiga, and Innova for a smooth and comfortable journey at competitive rates."
        },
        {
            "name": "Seawoods to Pune Station Cab",
            "description": "Need a taxi from Seawoods to Pune Station? Vedant Travels provides reliable cab services with a fleet of vehicles including Sedans, Ertiga, and Innova, ensuring a timely and comfortable ride to your destination."
        },
        {
            "name": "Sanpada to Pune Cab Service",
            "description": "For a dependable taxi service from Sanpada to Pune, choose Vedant Travels. We offer various vehicle options such as Sedans, Ertiga, and Innova to ensure a comfortable and hassle-free journey with experienced drivers."
        },
        {
            "name": "Ghansoli to Pune Cab",
            "description": "Vedant Travels offers reliable and affordable taxi services from Ghansoli to Pune. Our fleet of well-maintained vehicles, including Sedans, Ertiga, and Innova, guarantees a smooth and comfortable ride to your destination."
        },
        {
            "name": "Mumbai to Pune Taxi Booking",
            "description": "Booking a taxi from Mumbai to Pune with Vedant Travels is easy and convenient. We offer a variety of vehicles like Sedans, Ertiga, and Innova, ensuring a comfortable and stress-free journey with experienced drivers."
        }
    ],


    "tableData": [
        ["Mankhurd to Pune Cab Service", "Mankhurd to Pimpri Cab"],
        ["Mankhurd to Pune One Way Cab", "Chembur to Pune Car Fare"],
        ["Belapur to Pune by Taxi", "Belapur to Pune One Way Cab"],
        ["Belapur to Pimpri Chinchwad Cab", "Belapur to Baner Cab Fare"],
        ["Seawoods to Pune Cab Fare", "Seawoods to Pune Station Cab"],
        ["Sanpada to Pune Cab Service", "Ghansoli to Pune Cab"],
        ["Mumbai to Pune Taxi Booking", ""]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand the value of your time. Whether you're traveling from Mankhurd to Pune for business or leisure, we ensure punctual pickups and drop-offs to guarantee a timely and hassle-free journey."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "We offer a range of well-maintained vehicles for your Mankhurd to Pune trip, including sedans, SUVs, and premium cars. All our vehicles are equipped with air conditioning, comfortable seating, and ample space for a relaxing ride."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are experienced and familiar with the Mankhurd to Pune route, ensuring a safe, smooth, and comfortable journey. They are skilled in long-distance travel and are dedicated to providing you with the best service."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for Mankhurd to Pune cab service. Our pricing model is clear with no hidden charges, providing you with the best value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with the latest safety features such as airbags, seat belts, and GPS tracking. Our drivers strictly follow safety protocols to ensure a worry-free trip."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Vedant Travels is available 24/7 to cater to your Mankhurd to Pune travel needs. No matter the time of day or night, you can count on us for prompt and reliable service."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking a cab for Mankhurd to Pune is easy with Vedant Travels. You can book your ride online through our website or mobile app, or contact our customer service team for assistance with your booking."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Whether you're traveling for business, leisure, or a special occasion, we offer customizable travel packages. Let us know your preferences, and we’ll tailor your Mankhurd to Pune journey to fit your specific needs."
        }
      ]
    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a cab from Mankhurd to Pune?',
            answer: 'You can easily book a cab online through our website or mobile app. Alternatively, you can reach out to our customer service team to help with your booking.',
        },
        {
            id: 2,
            question: 'What types of vehicles are available for the Mankhurd to Pune journey?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars, to ensure a comfortable and pleasant journey for you.',
        },
        {
            id: 3,
            question: 'What payment options are available for my Mankhurd to Pune cab?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payments via our app, for your convenience.',
        },
        {
            id: 4,
            question: 'Can I book a round-trip cab from Mankhurd to Pune?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during booking, and we will take care of the rest.',
        },
        {
            id: 5,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be clearly communicated to you at the time of booking, ensuring full transparency.',
        },
        {
            id: 6,
            question: 'Can I use the Mankhurd to Pune cab for sightseeing?',
            answer: 'Yes, we offer customized sightseeing tours as part of your journey. Let us know your desired stops, and we will tailor your trip accordingly.',
        },
        {
            id: 7,
            question: 'What is the luggage allowance for the cab from Mankhurd to Pune?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have extra luggage or specific requirements, please inform us during the booking process.',
        },
        {
            id: 8,
            question: 'Is Vedant Travels available for corporate travel from Mankhurd to Pune?',
            answer: 'Yes, we offer corporate travel services for business trips, conferences, and team outings. We can provide customized packages to suit your company\'s needs.',
        },
        {
            id: 9,
            question: 'Why should I choose Vedant Travels for my Mankhurd to Pune journey?',
            answer: 'Vedant Travels provides reliable service, professional drivers, well-maintained vehicles, and affordable prices. We ensure a safe, comfortable, and smooth ride, making us the best choice for your Mankhurd to Pune journey.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Raghav Desai",
            title: "Business Traveler",
            quote: "I traveled from Mankhurd to Pune with Vedant Travels, and it was a seamless experience. The vehicle was comfortable, and the driver was courteous and professional. Highly recommended!",
            rating: 5,
        },
        {
            name: "Ms. Tanya Shah",
            title: "Frequent Traveler",
            quote: "I regularly travel from Mankhurd to Pune for work, and Vedant Travels has always been my go-to choice. Their drivers are punctual and knowledgeable, and the vehicles are always in great condition.",
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
                            <img src='/images/keyword/9.jpg' alt='img' />
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

export default Mankhurdtopunecab;