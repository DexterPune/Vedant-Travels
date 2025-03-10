
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Bhanduptopunecab() {



    const cardData =
    {
        keyword: 'Bhandup to Pune Cab',
        heading: 'Vedant Travels: Bhandup to Pune Cab  ',
        headingDescription: 'Vedant Travels offers a hassle-free and comfortable cab service for your journey from Bhandup to Pune. Whether you are traveling for business, leisure, or with family, we provide various vehicle options including sedans, SUVs, and luxury cars, ensuring a comfortable and safe ride.',

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
            "name": "Bhandup to Pune Taxi",
            "description": "Vedant Travels offers reliable and comfortable taxi services from Bhandup to Pune. Whether you're traveling for business, leisure, or family visits, our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a smooth and stress-free journey."
        },
        {
            "name": "Bhandup to Pimpri Chinchwad Taxi",
            "description": "For a comfortable and affordable taxi ride from Bhandup to Pimpri Chinchwad, choose Vedant Travels. We provide various vehicle options to suit your needs, ensuring a safe and timely trip with experienced drivers."
        },
        {
            "name": "Bhandup to Pune One Way Cab",
            "description": "If you're looking for a one-way cab from Bhandup to Pune, Vedant Travels offers affordable and hassle-free one-way taxi services. Choose from a variety of vehicles like Innova, Ertiga, and Sedans to make your journey comfortable and convenient."
        },
        {
            "name": "Taxi Service in Bhandup",
            "description": "Vedant Travels offers reliable and punctual taxi services in Bhandup, Mumbai. Whether you need a ride to the airport or a long-distance journey, our experienced drivers and well-maintained vehicles guarantee a smooth and timely ride."
        },
        {
            "name": "Bhandup to Pune Ertiga Taxi Service",
            "description": "Traveling from Bhandup to Pune in comfort with the Ertiga? Vedant Travels offers Ertiga taxis for a smooth and comfortable ride. This spacious vehicle is ideal for medium-sized groups or families seeking a comfortable and affordable option."
        },
        {
            "name": "Bhandup to Pune Innova Crysta Taxi Service",
            "description": "For a luxurious and comfortable ride from Bhandup to Pune, Vedant Travels offers the Innova Crysta. With ample space and a smooth ride, the Innova Crysta ensures a premium travel experience."
        },
        {
            "name": "Bhandup to Pune Station Taxi Fare",
            "description": "If you need a taxi from Bhandup to Pune Station, Vedant Travels offers competitive fares with transparent pricing. We ensure a smooth, safe, and timely journey, with vehicles such as Sedans, Ertiga, and Innova available for your convenience."
        },
        {
            "name": "Bhandup to Koregaon Park Taxi",
            "description": "Travel from Bhandup to Koregaon Park with Vedant Travels for a hassle-free journey. Choose from various vehicles like Innova, Ertiga, and Sedans, ensuring you travel in comfort and style with our reliable drivers."
        },
        {
            "name": "Bhandup to Pune Sedan Taxi Fare",
            "description": "Looking for a Sedan taxi from Bhandup to Pune? Vedant Travels offers competitive fares for Sedans, ensuring you travel comfortably and affordably. Our transparent pricing ensures there are no hidden charges."
        },
        {
            "name": "Bhandup to Baner Pune Taxi",
            "description": "For a reliable and affordable taxi from Bhandup to Baner Pune, Vedant Travels provides dependable service with experienced drivers. Choose from a range of vehicles like Innova, Ertiga, and Sedans for a comfortable journey."
        },
        {
            "name": "Mumbai to Pune Cab Fare",
            "description": "The Mumbai to Pune cab fare with Vedant Travels is competitive and transparent. We offer a variety of vehicle options, including Sedans, Ertiga, and Innova, to suit your budget and comfort preferences."
        },
        {
            "name": "Cab Service in Bhandup",
            "description": "Vedant Travels provides efficient and affordable cab services in Bhandup, Mumbai. Whether you're traveling within Mumbai or to Pune, we guarantee a comfortable and timely journey with our fleet of vehicles and professional drivers."
        },
        {
            "name": "Mumbai to Pune Taxi Fare",
            "description": "The Mumbai to Pune taxi fare with Vedant Travels is affordable and transparent. We offer vehicles like Sedans, Innova, and Ertiga for a comfortable and hassle-free journey."
        },
        {
            "name": "Mumbai to Pune Car Rental",
            "description": "Looking for a car rental for your journey from Mumbai to Pune? Vedant Travels provides well-maintained vehicles for your comfort and convenience, including options like Innova, Ertiga, and Sedans."
        },
        {
            "name": "Mumbai to Pune Cab Charges",
            "description": "Vedant Travels offers affordable and transparent cab charges for the Mumbai to Pune journey. We ensure you get the best value for your money with no hidden charges, offering vehicles like Innova, Ertiga, and Sedans."
        },
        {
            "name": "Mumbai to Pune Cab Fare",
            "description": "The Mumbai to Pune cab fare with Vedant Travels is designed to be affordable while maintaining the highest standards of comfort and service. Enjoy a smooth ride with our professional drivers at a competitive fare."
        },
        {
            "name": "Mumbai to Pune Cab Booking",
            "description": "Book your Mumbai to Pune cab with Vedant Travels for a smooth and reliable journey. Our booking process is easy, and we offer a variety of vehicles like Innova, Ertiga, and Sedans to suit your needs."
        },
        {
            "name": "Cab Service in Mumbai",
            "description": "Vedant Travels offers reliable and punctual cab services across Mumbai. Whether you're traveling locally or on a long-distance journey, we guarantee a safe and comfortable ride with a fleet of well-maintained vehicles."
        },
        {
            "name": "Cab Booking Mumbai",
            "description": "For easy and convenient cab booking in Mumbai, choose Vedant Travels. Our online booking system makes it quick and hassle-free, and we offer a range of vehicles to meet your travel needs."
        },
        {
            "name": "Mumbai Taxi Service",
            "description": "Vedant Travels provides affordable and dependable taxi services across Mumbai. Whether you're heading to the airport, traveling locally, or going on a long journey, our professional drivers ensure a smooth and comfortable ride."
        },
        {
            "name": "Cheapest Cab Service in Mumbai",
            "description": "Looking for the cheapest cab service in Mumbai? Vedant Travels offers competitive fares with no hidden charges. We ensure a comfortable and safe ride while giving you the best value for your money."
        }
    ],


    "tableData": [
    ["Bhandup to Pune Taxi", "Bhandup to Pimpri Chinchwad Taxi"],
    ["Bhandup to Pune One Way Cab", "Taxi Service Bhandup"],
    ["Bhandup to Pune Ertiga Taxi Service", "Bhandup to Pune Innova Crysta Taxi Service"],
    ["Bhandup to Pune Station Taxi Fare", "Bhandup to Koregaon Park Taxi"],
    ["Bhandup to Pune Sedan Taxi Fare", "Bhandup to Baner Pune Taxi"],
    ["Mumbai to Pune Cab Fare", "Cab Service in Bhandup"],
    ["Mumbai to Pune Taxi Fare", "Mumbai to Pune Car Rental"],
    ["Mumbai to Pune Cab Charges", "Mumbai to Pune Cab Fare"],
    ["Mumbai to Pune Cab Booking", "Cab Service in Mumbai"],
    ["Cab Booking Mumbai", "Mumbai Taxi Service"],
    ["Cheapest Cab Service in Mumbai", "Cab Service in Bhandup"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we prioritize punctuality for your Bhandup to Pune Cab. Whether it’s for business, leisure, or a family trip, we ensure timely pickups and drop-offs, so your journey remains hassle-free and on schedule."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "Choose from our wide range of vehicles for your Bhandup to Pune Cab ride, including sedans, SUVs, and premium cars. All vehicles are equipped with air conditioning, comfortable seating, and plenty of legroom for a relaxed journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are skilled and have extensive experience in handling long-distance routes like Bhandup to Pune. They are familiar with the best routes, traffic conditions, and safety measures, ensuring a safe, smooth, and efficient journey."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive pricing for your Bhandup to Pune Cab with no hidden charges. You’ll receive a clear breakdown of the pricing upfront, ensuring transparency and great value for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are well-maintained and come with modern safety features, including airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols to ensure a secure and comfortable trip."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Need a ride at any time of the day or night? Vedant Travels offers 24/7 availability for your Bhandup to Pune Cab. Our customer service team is always ready to assist you and make your booking process easy and efficient."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Bhandup to Pune Cab with Vedant Travels is simple and quick. You can book online via our website or mobile app, or you can contact our customer service team for any assistance with your booking."
    },
    {
      "WhyChooseheading": "Customizable Travel Packages",
      "WhyChoosedescription": "Whether you’re traveling for business, leisure, or family purposes, we offer customizable packages for your Bhandup to Pune Cab. Let us know your preferences, and we’ll tailor the journey to suit your needs."
    }
  ]

    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Bhandup to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Bhandup to Pune Cab online through our website or mobile app. Alternatively, you can reach out to our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are highly experienced in handling long-distance routes like Bhandup to Pune, ensuring a smooth and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Bhandup to Pune travel?',
            answer: 'We offer a variety of vehicles including sedans, SUVs, and premium cars for your Bhandup to Pune Cab journey. All our vehicles are well-maintained and equipped for your comfort.',
        },
        {
            id: 4,
            question: 'How do I pay for my Bhandup to Pune cab rental?',
            answer: 'We accept a range of payment options, including cash, credit/debit cards, and online payments via our app, making the payment process convenient for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Bhandup to Pune?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking process, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront, ensuring transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Bhandup to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours as part of your Bhandup to Pune Cab. Explore famous spots along the way with the help of our experienced drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Bhandup to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please let us know at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Bhandup and Pune?',
            answer: 'Yes, we offer corporate travel services for businesses needing regular or occasional trips between Bhandup and Pune. We can tailor our services to meet your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Bhandup to Pune trip?',
            answer: 'Vedant Travels is known for its reliable service, professional drivers, comfortable vehicles, and transparent pricing. We ensure a smooth, safe, and comfortable journey for your Bhandup to Pune Cab trip.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Sameer Jadhav",
            title: "Business Traveler",
            quote: "I traveled from Bhandup to Pune with Vedant Travels and had a fantastic experience. The driver was very polite, and the car was comfortable. I’ll definitely use their service again!",
            rating: 5,
        },
        {
            name: "Mrs. Swati Deshmukh",
            title: "Family Traveler",
            quote: "We booked a Bhandup to Pune Cab for our family trip, and the experience was wonderful. The vehicle was spacious, clean, and well-maintained, and the driver was friendly and professional. Highly recommend Vedant Travels!",
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
        "name": "Bhandup to Pune Cab Service | Vedant Travels",
        "description": "Book your Bhandup to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Affordable and reliable taxi service for your journey from Bhandup to Pune, Pimpri Chinchwad, Baner, Koregaon Park, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "150"
        }
      };
      
      
      


    return (
        <div>
           <Helmet>
        <title>Bhandup to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Bhandup to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and reliable taxi service from Bhandup to Pune, Pimpri Chinchwad, Baner, Koregaon Park, and more." />
        <meta name="keywords" content="Bhandup to Pune Cab, Bhandup to Pune One Way Cab, Bhandup to Pune Taxi Service, Bhandup to Pune Ertiga, Bhandup to Pune Innova Crysta, Bhandup to Pune Taxi Fare, Bhandup to Pimpri Chinchwad Taxi, Mumbai to Pune Cab Service, Mumbai to Pune Car Rental, Mumbai to Pune Taxi Booking, Mumbai to Pune Cab Charges, Cheapest Cab Service in Mumbai" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/bhandup-to-pune-cab-service" />
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
                            <img src='/images/keyword/47.jpg' alt='img' />
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

export default Bhanduptopunecab;