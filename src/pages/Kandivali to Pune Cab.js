
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Kandivalitopunecab() {



    const cardData =
    {
        keyword: 'Kandivali to Pune Cab ',
        heading: 'Vedant Travels: Kandivali to Pune Cab ',
        headingDescription: 'Vedant Travels offers reliable and comfortable cab services for your journey from Kandivali to Pune. Whether you are traveling for business, leisure, or with family, we provide a variety of vehicles including sedans, SUVs, and premium cabs to suit your needs. With no hidden charges and transparent pricing, we ensure a hassle-free, safe, and enjoyable journey.',

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
            "name": "Kandivali to Pune Cab Fare",
            "description": "Traveling from Kandivali to Pune? Vedant Travels offers affordable and reliable taxi services for your journey. Our transparent pricing ensures no hidden costs, and you can choose from a variety of vehicles, including Innova, Ertiga, and Sedans."
        },
        {
            "name": "Kandivali to Pune Station Cab Fare",
            "description": "The fare for a taxi from Kandivali to Pune Station with Vedant Travels is competitive and transparent. We provide well-maintained vehicles for a smooth, comfortable ride, ensuring you reach your destination on time."
        },
        {
            "name": "Kandivali to Pune Pimpri Chinchwad Cab Fare",
            "description": "Looking for a cab from Kandivali to Pune Pimpri Chinchwad? Vedant Travels offers reliable and affordable taxi services with professional drivers and vehicles like Innova, Ertiga, and Sedans for a smooth journey."
        },
        {
            "name": "Kandivali to Baner Taxi Fare",
            "description": "Need a taxi from Kandivali to Baner? Vedant Travels offers competitive pricing for this route, ensuring a comfortable and timely journey. Choose from a variety of vehicles for your travel needs."
        },
        {
            "name": "Kandivali to Pune by Taxi",
            "description": "Vedant Travels provides reliable and affordable taxi services from Kandivali to Pune. Whether you are traveling solo or with a group, we offer well-maintained vehicles like Innova, Ertiga, and Sedans for a comfortable ride."
        },
        {
            "name": "Kandivali to Pune One Way Taxi Fare",
            "description": "For a one-way taxi from Kandivali to Pune, Vedant Travels offers affordable and reliable services. We ensure you travel in comfort, with competitive pricing and no hidden costs."
        },
        {
            "name": "Kandivali to Pune Kondhwa Taxi",
            "description": "Looking for a taxi to Kondhwa from Kandivali? Vedant Travels provides efficient and comfortable taxi services for a smooth journey, with a fleet that includes Innova, Ertiga, and Sedans."
        },
        {
            "name": "Kandivali to Pune Innova Crysta Cab",
            "description": "Need an Innova Crysta for your journey from Kandivali to Pune? Vedant Travels offers premium Innova Crysta cabs for a luxurious and comfortable ride. Enjoy a smooth journey with professional drivers."
        },
        {
            "name": "Kandivali to Pune Kharadi Cab",
            "description": "Traveling from Kandivali to Kharadi? Vedant Travels offers reliable and affordable taxi services to make your journey comfortable and stress-free. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans."
        },
        {
            "name": "Kandivali to Swargate Cab",
            "description": "Book a cab from Kandivali to Swargate with Vedant Travels for a comfortable and hassle-free ride. Our professional drivers ensure a smooth journey with well-maintained vehicles, ensuring timely arrival."
        },
        {
            "name": "Taxi Service in Kandivali Mumbai",
            "description": "For dependable and affordable taxi services in Kandivali, Mumbai, choose Vedant Travels. Whether you need a ride to Pune or other local destinations, our fleet includes vehicles like Innova, Ertiga, and Sedans to suit your needs."
        },
        {
            "name": "Kandivali to Pune Ertiga Taxi Fare",
            "description": "The fare for a taxi from Kandivali to Pune in an Ertiga with Vedant Travels is competitive and transparent. The Ertiga is perfect for small groups or families, offering comfort and ample space at an affordable price."
        },
        {
            "name": "Mumbai to Pune Taxi Fare",
            "description": "Vedant Travels offers reliable and affordable taxi services from Mumbai to Pune. Our transparent pricing ensures no hidden charges, and we offer various vehicles, including Sedans, Ertiga, and Innova, to meet your needs."
        },
        {
            "name": "Mumbai to Pune Car Rental",
            "description": "Looking for a car rental from Mumbai to Pune? Vedant Travels offers reliable and well-maintained vehicles for your journey. Whether you're traveling for business or leisure, we provide a comfortable and convenient travel experience."
        },
        {
            "name": "Mumbai to Pune Cab Charges",
            "description": "The Mumbai to Pune cab charges with Vedant Travels are competitive and transparent. We offer a range of vehicle options, including Sedans, Ertiga, and Innova, for a comfortable and affordable journey."
        },
        {
            "name": "Mumbai to Pune Cab Fare",
            "description": "The Mumbai to Pune cab fare with Vedant Travels ensures you travel in comfort and style at a reasonable price. We provide upfront pricing with no hidden charges, offering various vehicle options to suit your budget."
        },
        {
            "name": "Mumbai to Pune Cab Booking",
            "description": "Book your Mumbai to Pune cab with Vedant Travels for a comfortable and reliable journey. We provide a range of vehicles, including Sedans, Innova, and Ertiga, to ensure a smooth ride with professional drivers."
        },
        {
            "name": "Cab Service in Mumbai",
            "description": "For reliable and efficient cab service in Mumbai, choose Vedant Travels. Our fleet of well-maintained vehicles and experienced drivers ensure a safe and comfortable ride, whether you’re traveling within the city or to other destinations like Pune."
        },
        {
            "name": "Cab Booking Mumbai",
            "description": "Vedant Travels offers easy and convenient cab booking in Mumbai. Whether you’re traveling locally or to other destinations like Pune, our fleet includes various vehicles to suit your travel needs."
        },
        {
            "name": "Mumbai Taxi Service",
            "description": "Need a taxi in Mumbai? Vedant Travels offers reliable and affordable taxi services throughout the city. Whether you’re traveling for business, leisure, or need a ride to the airport, we ensure a smooth and hassle-free journey."
        },
        {
            "name": "Cheapest Cab Service in Mumbai",
            "description": "Looking for the cheapest cab service in Mumbai? Vedant Travels offers affordable and reliable taxi services with transparent pricing and no hidden charges, ensuring you get the best value for your money."
        },
        {
            "name": "Taxi Service in Kandivali",
            "description": "For taxi services in Kandivali, Mumbai, Vedant Travels provides reliable, punctual, and affordable transportation. Whether you need a ride within the city or to outstation destinations like Pune, we have you covered."
        },
        {
            "name": "Cab Service in Kandivali",
            "description": "Vedant Travels offers dependable and affordable cab services in Kandivali, Mumbai. Choose from our fleet of vehicles for your local or outstation travel needs, and enjoy a comfortable, hassle-free ride."
        },
        {
            "name": "Cab Service in Kharghar",
            "description": "Need a cab in Kharghar? Vedant Travels provides reliable and affordable taxi services in Kharghar, Mumbai. Our fleet includes a variety of vehicles, including Innova, Ertiga, and Sedans, ensuring a comfortable ride every time."
        }
    ],


    "tableData": [
        ["Kandivali to Pune Cab Fare", "Kandivali to Pune Station Cab Fare"],
        ["Kandivali to Pune Pimpri Chinchwad Cab Fare", "Kandivali to Baner Taxi Fare"],
        ["Kandivali to Pune by Taxi", "Kandivali to Pune One Way Taxi Fare"],
        ["Kandivali to Pune Kondhwa Taxi", "Kandivali to Pune Innova Crysta Cab"],
        ["Kandivali to Pune Kharadi Cab", "Kandivali to Swargate Cab"],
        ["Taxi Service in Kandivali Mumbai", "Kandivali to Pune Ertiga Taxi Fare"],
        ["Mumbai to Pune Taxi Fare", "Mumbai to Pune Car Rental"],
        ["Mumbai to Pune Cab Charges", "Mumbai to Pune Cab Fare"],
        ["Mumbai to Pune Cab Booking", "Cab Service in Mumbai"],
        ["Cab Booking Mumbai", "Mumbai Taxi Service"],
        ["Cheapest Cab Service in Mumbai", "Taxi Service in Kandivali"],
        ["Cab Service in Kandivali", "Cab Service in Kharghar"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality for your Kandivali to Pune Cab. Whether you're heading for a business meeting, a family vacation, or a weekend getaway, we ensure timely pickups and drop-offs, so you can rely on us to keep your plans on track."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet includes a variety of vehicles for your Kandivali to Pune Cab journey, including sedans, SUVs, and premium cars. All vehicles are designed for comfort, offering spacious interiors, air conditioning, and ample legroom for a relaxed and smooth journey."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "Our drivers are highly trained and have extensive experience navigating the Kandivali to Pune route. They are familiar with the best routes, traffic patterns, and safety protocols, ensuring a smooth, safe, and efficient trip from start to finish."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We offer competitive pricing for your Kandivali to Pune Cab with no hidden charges. You’ll receive a clear breakdown of the costs upfront, ensuring complete transparency and that you get the best value for your money."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly maintained and equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety standards to ensure a secure and comfortable journey for you."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you need a ride early in the morning or late at night, Vedant Travels is available 24/7 for Kandivali to Pune Cab bookings. Our customer service team is always ready to assist with your booking and ensure a smooth experience."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Vedant Travels makes booking your Kandivali to Pune Cab quick and easy. You can book online via our website or mobile app, or you can reach out to our customer service team for personalized assistance."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "Whether you’re traveling for business, leisure, or with family, we offer customizable packages for your Kandivali to Pune Cab to suit your specific needs and preferences. Let us know your requirements, and we’ll tailor the journey for you."
        }
      ]



    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Kandivali to Pune cab with Vedant Travels?',
            answer: 'You can easily book a Kandivali to Pune Cab through our website or mobile app. Alternatively, our customer service team is available to assist you with your booking and any inquiries.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly experienced in handling long-distance routes like Kandivali to Pune, ensuring a smooth, safe, and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Kandivali to Pune travel?',
            answer: 'We offer a variety of vehicles including sedans, SUVs, and premium cars. All our vehicles are comfortable, well-maintained, and designed for long trips.',
        },
        {
            id: 4,
            question: 'How do I pay for my Kandivali to Pune cab rental?',
            answer: 'We accept multiple payment methods including cash, credit/debit cards, and online payments via our app, providing flexibility and convenience in your payment process.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Kandivali to Pune?',
            answer: 'Yes, you can book a round-trip cab. Simply provide your return details during the booking process, and we will take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront during the booking process, ensuring transparency in pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Kandivali to Pune trip?',
            answer: 'Yes, we offer customized sightseeing tours as part of your Kandivali to Pune trip. Explore popular landmarks and attractions along the way with the help of our experienced drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Kandivali to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or special requirements, please let us know during booking, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Kandivali and Pune?',
            answer: 'Yes, we provide corporate travel services for businesses needing regular or occasional travel between Kandivali and Pune. We can tailor our services to meet your company’s requirements.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Kandivali to Pune trip?',
            answer: 'Vedant Travels is known for its reliable service, experienced drivers, comfortable vehicles, and transparent pricing. We ensure that your Kandivali to Pune Cab journey is smooth, safe, and hassle-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Ankur Shah",
            title: "Business Traveler",
            quote: "I used Vedant Travels for my Kandivali to Pune Cab trip. The driver was courteous, the car was clean and comfortable, and I reached Pune on time. Highly recommend their services!",
            rating: 5,
        },
        {
            name: "Mrs. Sonali Mehta",
            title: "Family Traveler",
            quote: "Our family trip from Kandivali to Pune with Vedant Travels was excellent. The driver was professional and friendly, and the vehicle was spacious and comfortable. We had a wonderful experience!",
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
        "name": "Kandivali to Pune Cab Service | Vedant Travels",
        "description": "Book your Kandivali to Pune taxi with Vedant Travels. Offering one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Reliable and affordable taxi service for your journey from Kandivali to Pune, Pimpri Chinchwad, Baner, Kharadi, Swargate, and more.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "185"
        }
      };
      
    


    return (
        <div>
             <Helmet>
        <title>Kandivali to Pune Cab Service | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Kandivali to Pune taxi with Vedant Travels. Affordable one-way and round-trip cabs, including Innova Crysta, Ertiga, and Sedan. Convenient and reliable taxi service from Kandivali to Pune, Pimpri Chinchwad, Baner, Kharadi, Swargate, and more." />
        <meta name="keywords" content="Kandivali to Pune Cab Service, Kandivali to Pune Station Cab, Kandivali to Pune Pimpri Chinchwad Cab, Kandivali to Baner Taxi Fare, Kandivali to Pune by Taxi, Kandivali to Pune One Way Taxi, Kandivali to Pune Kondhwa Taxi, Kandivali to Pune Innova Crysta Cab, Kandivali to Pune Kharadi Cab, Kandivali to Swargate Cab, Kandivali to Pune Ertiga Taxi Fare, Mumbai to Pune Taxi Fare, Mumbai to Pune Car Rental, Mumbai to Pune Cab Charges, Mumbai to Pune Cab Booking, Cab Service in Kandivali Mumbai, Cheapest Cab Service in Mumbai, Taxi Service in Kandivali" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/kandivali-to-pune-cab-service" />
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
                            <img src='/images/keyword/45.jpg' alt='img' />
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

export default Kandivalitopunecab;