
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Thanetopunecab() {



    const cardData =
    {
        keyword: 'Thane to Pune Cab   ',
        heading: 'Vedant Travels: Thane to Pune Cab   ',
        headingDescription: 'Vedant Travels provides a comfortable and reliable cab service for your journey from Thane to Pune. Whether you’re traveling for work, leisure, or with family, we offer a variety of vehicles, including sedans, SUVs, and luxury cars to cater to your needs. Our fleet is well-maintained, and our professional drivers ensure you have a safe, smooth, and pleasant travel experience.',

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
            "name": "Thane to Pune Cab",
            "description": "Vedant Travels offers reliable and affordable taxi services from Thane to Pune. Our fleet includes various vehicle options such as Innova, Ertiga, and Sedans, ensuring a comfortable and smooth journey at competitive prices."
        },
        {
            "name": "Thane to Pune Taxi",
            "description": "Looking for a taxi from Thane to Pune? Choose Vedant Travels for a hassle-free ride. Our professional drivers and well-maintained vehicles ensure you have a safe and relaxing journey, whether it’s a one-way or round trip."
        },
        {
            "name": "Thane to Pune Station Cab Fare",
            "description": "Traveling from Thane to Pune Station? Vedant Travels offers competitive pricing for your taxi ride, with no hidden charges. Whether you choose an Innova, Ertiga, or Sedan, enjoy a comfortable and timely ride to Pune Station."
        },
        {
            "name": "Thane to Pune One Way Cab",
            "description": "For a one-way trip from Thane to Pune, Vedant Travels provides reliable taxi services. We offer a range of vehicle options, including Innova, Ertiga, and Sedans, for a smooth and cost-effective journey."
        },
        {
            "name": "Thane to Pune Ertiga Cab",
            "description": "If you're traveling with a small group or family, our Ertiga cabs from Thane to Pune provide comfort and ample space. Enjoy a smooth ride at affordable rates with Vedant Travels’ professional drivers."
        },
        {
            "name": "Thane to Pune One Way Taxi",
            "description": "Vedant Travels offers one-way taxi services from Thane to Pune with convenient booking options. Whether you're traveling solo or in a group, choose from a range of vehicles such as Innova or Ertiga for a comfortable ride."
        },
        {
            "name": "Thane to Pimpri Chinchwad Cab Fare",
            "description": "Traveling from Thane to Pimpri Chinchwad? Vedant Travels offers affordable and transparent pricing for your cab ride, ensuring no hidden charges. Choose from various vehicle options to suit your comfort and budget."
        },
        {
            "name": "Thane to Pune Cab Service",
            "description": "For a stress-free journey from Thane to Pune, Vedant Travels provides top-notch cab services with a fleet of vehicles, including Innova, Ertiga, and Sedans. Our professional drivers ensure your comfort and safety."
        },
        {
            "name": "Thane to Pune Innova Cab Service",
            "description": "Looking for a spacious and luxurious ride from Thane to Pune? Opt for our Innova cabs, perfect for families or groups. Enjoy the comfort, space, and smooth ride that Vedant Travels provides at competitive rates."
        },
        {
            "name": "Mulund to Pune Taxi Fare",
            "description": "Vedant Travels offers affordable and transparent pricing for taxis from Mulund to Pune. Whether you're traveling for business or leisure, our professional drivers and comfortable vehicles ensure a pleasant journey."
        },
        {
            "name": "Mulund to Pune Taxi Fare",
            "description": "For your journey from Mulund to Pune, Vedant Travels offers various vehicle options, including Innova, Ertiga, and Sedans. Enjoy a comfortable ride with no hidden charges, all at competitive fares."
        },
        {
            "name": "Cab Service in Thane",
            "description": "Need a reliable taxi in Thane? Vedant Travels offers prompt and professional taxi services in Thane for all your travel needs. Whether you're traveling to Pune or any other destination, we ensure timely service and a comfortable ride."
        },
        {
            "name": "Thane to Pune Round Trip Cab Service",
            "description": "Vedant Travels offers round-trip cab services for travelers going from Thane to Pune. We provide flexible booking options, ensuring your round-trip journey is convenient and comfortable with timely pick-ups and drop-offs."
        },
        {
            "name": "Thane to Baner Cab Fare",
            "description": "If you're traveling from Thane to Baner, Vedant Travels provides transparent pricing for your cab ride. Our fleet includes a variety of vehicles to meet your comfort and budget requirements, ensuring a smooth journey."
        }
    ],


    "tableData": [
        ["Thane to Pune Cab", "Thane to Pune Taxi"],
        ["Thane to Pune Station Cab Fare", "Thane to Pune One Way Cab"],
        ["Thane to Pune Ertiga Cab", "Thane to Pune One Way Taxi"],
        ["Thane to Pimpri Chinchwad Cab Fare", "Thane to Pune Cab Service"],
        ["Thane to Pune Innova Cab Service", "Mulund to Pune Taxi Fare"],
        ["Mulund to Pune Taxi Fare", "Cab Service in Thane"],
        ["Thane to Pune Round Trip Cab Service", "Thane to Baner Cab Fare"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that punctuality is key, especially for long-distance travel. Whether you're heading from Thane to Pune for business or leisure, we ensure that your journey is comfortable and on time. Our drivers are always prompt and ready to offer you a smooth ride."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet consists of well-maintained vehicles, including sedans, SUVs, and premium cars, to ensure that your journey from Thane to Pune is as comfortable as possible. Enjoy spacious seating, air conditioning, and plenty of legroom, making your ride a relaxing experience."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are highly experienced in long-distance routes, specifically for Thane to Pune. They know the best routes and are skilled in handling various road conditions, ensuring you have a safe and efficient ride."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We offer competitive and transparent pricing for our Thane to Pune Cab Service. There are no hidden charges—just clear, upfront pricing so you know exactly what you're paying for. We provide the best value for your money without any surprises."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced and equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety guidelines, giving you peace of mind throughout your journey."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether it's an early morning departure or a late-night ride, Vedant Travels is available around the clock. You can count on us for reliable Thane to Pune Cab Service at any time of the day or night. Our customer service team is always ready to assist you with booking."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking a Thane to Pune Cab with Vedant Travels is quick and easy. You can book your ride online through our website or mobile app. If you prefer, you can contact our customer service team directly to help with your booking or address any queries."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Whether you’re traveling for business, a family trip, or any special occasion, we offer customizable travel packages for your Thane to Pune Cab journey. Tell us your preferences, and we’ll tailor the experience to suit your needs."
        }
      ]


    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a Thane to Pune cab with Vedant Travels?',
            answer: 'Booking a Thane to Pune Cab is simple. You can do it via our website or mobile app. Alternatively, our customer service team is always available to assist with your booking or any questions you might have.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all of our drivers are well-trained and experienced in handling long-distance routes like Thane to Pune. They ensure that your journey is smooth, safe, and comfortable.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Thane to Pune travel?',
            answer: 'We offer a variety of vehicles including sedans, SUVs, and premium cars for your Thane to Pune Cab Service. All vehicles are spacious, clean, and well-maintained to ensure a comfortable ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Thane to Pune cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, making it easy and convenient for you to pay for your ride.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Thane to Pune?',
            answer: 'Yes, we offer round-trip services for Thane to Pune. Just provide your return details while booking, and we’ll make the necessary arrangements for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated clearly to you upfront when booking. We value transparency in all our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Thane to Pune trip?',
            answer: 'Yes, we offer customized sightseeing options as part of your Thane to Pune Cab journey. Visit popular spots along the way or in Pune, with the help of our experienced drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Thane to Pune cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have excess luggage or special requirements, please let us know while booking, and we’ll arrange for extra space if necessary.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel from Thane to Pune?',
            answer: 'Yes, we provide corporate travel services for businesses traveling from Thane to Pune. Our services are flexible and customizable to suit your business needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Thane to Pune trip?',
            answer: 'Vedant Travels is known for its dependable service, professional drivers, affordable pricing, and well-maintained vehicles. We ensure a safe, comfortable, and pleasant journey from Thane to Pune, with transparent pricing and the best customer service.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Deshmukh",
            title: "Business Traveler",
            quote: "I used Vedant Travels for my trip from Thane to Pune, and it was a wonderful experience. The driver was courteous, and the car was comfortable and clean. The journey was smooth, and I reached on time. I would highly recommend them!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Agarwal",
            title: "Family Traveler",
            quote: "Our family had a great ride from Thane to Pune with Vedant Travels. The vehicle was spacious, the driver was professional, and the whole experience was comfortable. We will definitely use their service again!",
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
        "name": "Thane to Pune Cab Service | Vedant Travels",
        "description": "Book your Thane to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable and affordable taxi service for your journey from Thane to Pune, Pimpri Chinchwad, Hinjewadi, Baner, and more.",
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
        <title>Thane to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Thane to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and reliable taxi service from Thane to Pune, Pimpri Chinchwad, Hinjewadi, Baner, and more." />
        <meta name="keywords" content="Thane to Pune Cab, Thane to Pune Taxi, Thane to Pune Station Cab Fare, Thane to Pune One Way Cab, Thane to Pune Ertiga Cab, Thane to Pune Innova Cab, Thane to Pimpri Chinchwad Cab Fare, Thane to Pune Taxi Service, Thane to Pune Round Trip Cab, Mulund to Pune Taxi Fare, Thane to Baner Cab Fare, Taxi Service in Thane Mumbai, Best Cab Service Thane to Pune" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/thane-to-pune-cab-service" />
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
                            <img src='./images/keyword/53.jpg' alt='img' />
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

export default Thanetopunecab;