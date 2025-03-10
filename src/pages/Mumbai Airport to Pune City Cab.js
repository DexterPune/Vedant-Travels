
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Mumbaiairporttopunecitycab() {



    const cardData =
    {
        keyword: 'Mumbai Airport to Pune City Cab ',
        heading: 'Vedant Travels: Mumbai Airport to Pune City Cab ',
        headingDescription: 'Vedant Travels offers convenient, reliable, and comfortable taxi services for your journey from Mumbai Airport to Pune City. Whether you are traveling for business, leisure, or a family trip, we provide a variety of vehicles, including sedans, SUVs, and premium cabs, ensuring a smooth and hassle-free experience. Our transparent pricing with no hidden charges guarantees a stress-free journey.',

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
        "name": "Mumbai Airport to Kothrud Cab",
        "description": "Traveling from Mumbai Airport to Kothrud? Vedant Travels offers reliable and comfortable cab services. Our fleet includes vehicles like Innova, Ertiga, and Sedans, ensuring a smooth and hassle-free journey to Kothrud."
    },
    {
        "name": "Mumbai Airport to Kondhwa Cab",
        "description": "Need a taxi from Mumbai Airport to Kondhwa? Vedant Travels provides efficient and affordable taxi services. Choose from our range of vehicles, including Innova, Ertiga, and Sedans, for a comfortable and timely ride."
    },
    {
        "name": "Mumbai Airport to Koregaon Park Cab",
        "description": "For a smooth and reliable ride from Mumbai Airport to Koregaon Park, book a taxi with Vedant Travels. We offer various vehicle options such as Innova, Ertiga, and Sedans to ensure a comfortable and safe journey."
    },
    {
        "name": "Mumbai Airport to Viman Nagar Cab",
        "description": "Traveling from Mumbai Airport to Viman Nagar? Vedant Travels offers affordable and reliable cab services. Our fleet includes well-maintained vehicles like Innova, Ertiga, and Sedans for your comfort and convenience."
    },
    {
        "name": "Mumbai Airport to Baner Taxi Fare",
        "description": "The Mumbai Airport to Baner taxi fare with Vedant Travels is transparent and competitive. Our fleet of vehicles, including Innova, Ertiga, and Sedans, ensures a comfortable and timely ride at an affordable price."
    },
    {
        "name": "Mumbai Airport to Aundh Cab Fare",
        "description": "Vedant Travels offers reasonable and transparent taxi fares from Mumbai Airport to Aundh. Choose from a variety of vehicles like Innova, Ertiga, and Sedans for a smooth and comfortable ride."
    },
    {
        "name": "Mumbai Airport to Kharadi Taxi",
        "description": "Looking for a taxi from Mumbai Airport to Kharadi? Vedant Travels offers a reliable and affordable taxi service with well-maintained vehicles, including Innova, Ertiga, and Sedans, for a smooth and safe journey."
    },
    {
        "name": "Mumbai Airport to Wagholi Cab Service",
        "description": "Traveling to Wagholi from Mumbai Airport? Vedant Travels offers convenient and comfortable cab services for your journey. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, to reach your destination smoothly."
    },
    {
        "name": "Mumbai Airport to Magarpatta Cab Service",
        "description": "Book a taxi from Mumbai Airport to Magarpatta with Vedant Travels for a safe and reliable ride. Our fleet includes vehicles like Innova, Ertiga, and Sedans, ensuring a comfortable journey to Magarpatta."
    },
    {
        "name": "Mumbai Airport Cab Service",
        "description": "Need a taxi service from Mumbai Airport? Vedant Travels provides reliable and punctual cab services with a fleet of vehicles including Innova, Ertiga, and Sedans for your comfort and convenience."
    },
    {
        "name": "Mumbai Airport Car Rental",
        "description": "Rent a car at Mumbai Airport with Vedant Travels for a hassle-free and comfortable journey. Our well-maintained vehicles, including Innova, Ertiga, and Sedans, are available for rental to suit your travel needs."
    },
    {
        "name": "Mumbai Airport Transfer",
        "description": "Vedant Travels offers convenient Mumbai Airport transfers, ensuring a smooth ride to your destination. Our fleet includes a variety of vehicles like Innova, Ertiga, and Sedans, driven by professional drivers for your comfort."
    },
    {
        "name": "Airport Taxi Mumbai",
        "description": "Book an airport taxi with Vedant Travels for a reliable and comfortable ride. Our fleet includes vehicles such as Innova, Ertiga, and Sedans, ensuring a safe and punctual transfer to or from Mumbai Airport."
    },
    {
        "name": "Mumbai Airport Taxi",
        "description": "Vedant Travels provides excellent taxi services to and from Mumbai Airport. Choose from a variety of vehicles like Innova, Ertiga, and Sedans, for a smooth and comfortable journey to your destination."
    },
    {
        "name": "Mumbai Airport Taxi Booking",
        "description": "Book your taxi in advance with Vedant Travels for a smooth and stress-free journey to or from Mumbai Airport. Our fleet includes well-maintained vehicles, ensuring your comfort and safety."
    },
    {
        "name": "Car Hire Mumbai Airport",
        "description": "Vedant Travels offers car hire services at Mumbai Airport for those seeking comfort and convenience. Choose from our range of vehicles, including Innova, Ertiga, and Sedans, for your journey."
    },
    {
        "name": "Mumbai to Shirdi Taxi Service",
        "description": "Traveling from Mumbai to Shirdi? Vedant Travels offers reliable and comfortable taxi services for this route. Our fleet includes vehicles like Innova, Ertiga, and Sedans for a smooth and timely ride."
    },
    {
        "name": "Airport Cabs Mumbai",
        "description": "Vedant Travels offers dependable airport cabs in Mumbai. Our fleet includes a variety of vehicles like Innova, Ertiga, and Sedans to ensure a comfortable and safe ride to your destination."
    },
    {
        "name": "Cab from Pune to Mumbai Airport",
        "description": "Need a taxi from Pune to Mumbai Airport? Vedant Travels provides reliable and affordable taxi services with well-maintained vehicles like Innova, Ertiga, and Sedans for a smooth and timely journey."
    },
    {
        "name": "Mumbai Airport Taxi Service",
        "description": "Vedant Travels offers excellent Mumbai Airport taxi services for a comfortable and hassle-free experience. Choose from a variety of vehicles like Innova, Ertiga, and Sedans to suit your travel needs."
    },
    {
        "name": "Taxi from Pune to Mumbai Airport",
        "description": "Book a taxi from Pune to Mumbai Airport with Vedant Travels for a smooth and punctual ride. We offer vehicles like Innova, Ertiga, and Sedans to ensure a comfortable journey."
    },
    {
        "name": "Prepaid Taxi Mumbai Airport",
        "description": "For a hassle-free experience, book a prepaid taxi from Mumbai Airport with Vedant Travels. Our services include a variety of vehicles like Innova, Ertiga, and Sedans to provide comfort and convenience at a fixed fare."
    }
],


"tableData": [
    ["Mumbai Airport to Kothrud Cab", "Mumbai Airport to Kondhwa Cab"],
    ["Mumbai Airport to Koregaon Park Cab", "Mumbai Airport to Viman Nagar Cab"],
    ["Mumbai Airport to Baner Taxi Fare", "Mumbai Airport to Aundh Cab Fare"],
    ["Mumbai Airport to Kharadi Taxi", "Mumbai Airport to Wagholi Cab Service"],
    ["Mumbai Airport to Magarpatta Cab Service", "Mumbai Airport Cab Service"],
    ["Mumbai Airport Car Rental", "Mumbai Airport Transfer"],
    ["Airport Taxi Mumbai", "Mumbai Airport Taxi"],
    ["Car Hire Mumbai Airport", "Mumbai to Shirdi Taxi Service"],
    ["Airport Cabs Mumbai", "Cab from Pune to Mumbai Airport"],
    ["Mumbai Airport Taxi Service", "Taxi from Pune to Mumbai Airport"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality, especially when you’re arriving at Mumbai Airport. Our drivers ensure timely pickups and drop-offs for your Mumbai Airport to Pune City Cab ride, so you never miss an important meeting or event."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a wide range of comfortable and spacious vehicles for your Mumbai Airport to Pune City Cab journey. From sedans to SUVs and premium cars, our fleet is designed to provide maximum comfort with air conditioning, ample legroom, and plush seating, making your ride as relaxing as possible."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are highly experienced and professional, especially in handling airport transfers. They are familiar with the best routes from Mumbai Airport to Pune City, ensuring that you reach your destination safely and efficiently."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive pricing for your Mumbai Airport to Pune City Cab with no hidden charges. We maintain transparency in all our pricing, so you can be sure you are getting the best value for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are regularly serviced and equipped with modern safety features, including airbags, seat belts, and GPS tracking. Our professional drivers follow strict safety protocols to ensure a secure and comfortable ride from Mumbai Airport to Pune City."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether your flight arrives early in the morning or late at night, Vedant Travels is available around the clock. We offer 24/7 service for your Mumbai Airport to Pune City Cab needs. Book your ride at any time, and our customer service team will be ready to assist."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Mumbai Airport to Pune City Cab is simple and hassle-free. You can easily book online through our website or mobile app, or reach out to our customer service team for any assistance. We make the process smooth, ensuring a quick and easy booking experience."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business, leisure, or attending an event, we offer customized travel packages for your Mumbai Airport to Pune City ride. Share your preferences, and we’ll tailor the journey to suit your needs and ensure a comfortable trip."
    }
  ]





    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai Airport to Pune City cab with Vedant Travels?',
            answer: 'You can book your Mumbai Airport to Pune City Cab easily through our website or mobile app. Alternatively, you can call our customer service team for personalized assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced and well-versed with long-distance routes like Mumbai Airport to Pune City, ensuring a smooth, safe, and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai Airport to Pune City travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars, all well-maintained and designed for your comfort during the journey from Mumbai Airport to Pune City.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai Airport to Pune City cab rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payments through our app, providing you with flexibility and convenience.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Mumbai Airport to Pune City cab?',
            answer: 'Yes, you can easily book a round-trip cab. Provide your return details when booking, and we’ll take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting time or detours will be communicated to you upfront, ensuring complete transparency in our pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune after your Mumbai Airport to Pune City drop-off. Explore popular tourist spots like Shaniwar Wada, Aga Khan Palace, and others with our professional drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai Airport to Pune City cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have extra luggage or any special requirements, let us know at the time of booking, and we will ensure everything is arranged for your comfort.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Mumbai Airport and Pune City?',
            answer: 'Yes, we offer corporate travel services, including airport transfers for business meetings, events, and conferences. We can tailor our service to meet your company’s needs for seamless travel.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai Airport to Pune City journey?',
            answer: 'Vedant Travels is known for its reliable, safe, and comfortable travel services. With experienced drivers, a well-maintained fleet, affordable pricing, and 24/7 availability, we ensure a smooth and enjoyable journey from Mumbai Airport to Pune City.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Ramesh Patel",
            title: "Business Traveler",
            quote: "I used Vedant Travels for my Mumbai Airport to Pune City transfer, and it was a wonderful experience. The driver was on time, the car was comfortable, and the ride was smooth. I highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Deshmukh",
            title: "Family Traveler",
            quote: "I had a great experience with Vedant Travels. The cab from Mumbai Airport to Pune City was clean, and the driver was very professional. The trip was comfortable, and I will definitely use their services again.",
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
        "name": "Mumbai Airport to Pune City Cab | Vedant Travels",
        "description": "Book your Mumbai Airport to Pune City cab with Vedant Travels. Offering reliable and comfortable rides to locations like Kothrud, Kondhwa, Koregaon Park, Viman Nagar, Baner, Aundh, and more. Enjoy one-way and round-trip services in Innova, Ertiga, and Sedan at affordable prices.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "350"
        }
      };
      
    


    return (
        <div>
           
           <Helmet>
        <title>Mumbai Airport to Pune City Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Mumbai Airport to Pune City cab with Vedant Travels. Enjoy one-way, round-trip, and airport transfer services to locations like Kothrud, Kondhwa, Koregaon Park, Viman Nagar, Baner, and more, in vehicles like Innova, Ertiga, and Sedan." />
        <meta name="keywords" content="Mumbai Airport to Kothrud Cab, Mumbai Airport to Kondhwa Cab, Mumbai Airport to Koregaon Park Cab, Mumbai Airport to Viman Nagar Cab, Mumbai Airport to Baner Taxi Fare, Mumbai Airport to Aundh Cab Fare, Mumbai Airport to Kharadi Taxi, Mumbai Airport to Wagholi Cab Service, Mumbai Airport to Magarpatta Cab Service, Mumbai Airport Cab Service, Mumbai Airport Car Rental, Mumbai Airport Transfer, Airport Taxi Mumbai, Mumbai Airport Taxi, Mumbai Airport Taxi Booking, Car Hire Mumbai Airport, Mumbai to Shirdi Taxi Service, Airport Cabs Mumbai, Taxi from Pune to Mumbai Airport, Prepaid Taxi Mumbai Airport" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-airport-to-pune-city-cab" />
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
                            <img src='/images/keyword/40.jpg' alt='img' />
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

export default Mumbaiairporttopunecitycab;