
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Bandratopunecab() {



    const cardData =
    {
        keyword: 'Bandra to Pune Cab ',
        heading: 'Vedant Travels: Bandra to Pune Cab ',
        headingDescription: 'Vedant Travels offers affordable, reliable, and convenient taxi services for travel from Bandra to Pune. Our fleet includes various vehicle options, from sedans to SUVs and premium cabs, catering to your preferences and budget. With competitive pricing, no hidden charges, and professional drivers, you can enjoy a smooth, hassle-free ride to Pune.',

        top: 'Top Places to Visit in Pune with Vedant Travels',

        "topPlaces": [
            {
                "title": "Shaniwar Wada",
                "description": "A historical fortification in the heart of Pune, Shaniwar Wada is a significant landmark showcasing Maratha architecture and history. The fort offers insight into the grandeur of the Peshwa Empire, and its light-and-sound show is a must-see in the evenings."
            },
            {
                "title": "Aga Khan Palace",
                "description": "Built in 1892, the Aga Khan Palace is a magnificent piece of architecture with historical significance. It is famous for its role in the Indian freedom struggle and for housing Mahatma Gandhi and his associates during their imprisonment. The palace is a serene spot to learn about India’s freedom movement."
            },
            {
                "title": "Sinhagad Fort",
                "description": "Located about 35 km from Pune, Sinhagad Fort is a popular trekking destination offering panoramic views of the surrounding region. Rich in history, the fort played a crucial role in the Maratha Empire and is now a popular site for picnics and adventure lovers."
            },
            {
                "title": "Osho Ashram",
                "description": "Located in Koregaon Park, the Osho Ashram is an internationally renowned meditation center that offers a peaceful and rejuvenating environment. Visitors can indulge in meditation, yoga, and spiritual practices under the guidance of experienced masters."
            },
            {
                "title": "Raja Dinkar Kelkar Museum",
                "description": "The Raja Dinkar Kelkar Museum houses a vast collection of artifacts from India’s rich cultural history. The museum includes sculptures, paintings, musical instruments, and everyday items that provide insight into traditional Indian art and culture."
            },
            {
                "title": "Pune Okayama Friendship Garden (Pu La Deshpande Garden)",
                "description": "A beautiful Japanese-style garden located on the banks of the Mula-Mutha River, this garden is perfect for a peaceful stroll. With beautiful landscapes, flower beds, and ponds, it provides a serene environment away from the hustle and bustle of the city."
            },
            {
                "title": "Pashan Lake",
                "description": "Pashan Lake is a popular spot for nature lovers and birdwatchers. The lake is surrounded by lush greenery, making it an ideal place for picnics, leisurely walks, and photography. It is especially beautiful during the monsoon season."
            },
            {
                "title": "Bund Garden",
                "description": "Bund Garden is a beautiful riverside park in Pune, offering peaceful surroundings for a walk or picnic. The garden has boating facilities and is perfect for a relaxing afternoon with family and friends."
            },
            {
                "title": "Saras Baug",
                "description": "Saras Baug is a popular garden in Pune that offers a relaxing escape with scenic views. The garden has a temple dedicated to Lord Ganesha, making it an important religious and cultural landmark in the city."
            },
            {
                "title": "Fergusson College",
                "description": "One of the oldest and most prestigious colleges in Pune, Fergusson College is also a historic building with beautiful architecture. It’s a great spot to visit for those interested in history, architecture, and the educational landscape of Pune."
            }
        ],

"services": [
    {
        "name": "Bandra Terminus to Pune Cab",
        "description": "Traveling from Bandra Terminus to Pune is made easy with Vedant Travels. We offer comfortable and reliable cab services to suit all your needs, whether you're heading for a business trip, leisure, or a family visit. Our fleet includes premium options like Innova, Ertiga, and Sedans for a smooth and relaxing journey."
    },
    {
        "name": "Bandra Terminus to Pune Taxi Fare",
        "description": "The Bandra Terminus to Pune Taxi Fare with Vedant Travels is affordable and competitive. Whether you're traveling for a one-way trip or a round trip, we provide transparent pricing with no hidden costs. Our taxi services ensure comfort and reliability, offering vehicles like the Innova Crysta for those seeking extra space and luxury."
    },
    {
        "name": "Bandra to Pune Taxi",
        "description": "Planning to travel from Bandra to Pune? Vedant Travels offers a variety of vehicles for a comfortable journey, including Innova, Ertiga, and other premium taxis. Whether you're traveling solo or with family, our fleet accommodates all group sizes. Choose us for a seamless, stress-free ride from Bandra to Pune."
    },
    {
        "name": "Bandra to Pune Taxi Fare",
        "description": "The Bandra to Pune Taxi Fare with Vedant Travels is designed to be affordable while maintaining the highest standards of comfort and service. We offer upfront quotes with no hidden charges, ensuring that your travel experience is both transparent and cost-effective."
    },
    {
        "name": "Bandra to Pune One Way Taxi",
        "description": "For a one-way taxi from Bandra to Pune, Vedant Travels offers flexible options. Whether for business or leisure, choose from a range of vehicles like the Innova Crysta and Ertiga for a convenient, comfortable, and cost-effective ride."
    },
    {
        "name": "Taxi from Bandra Terminus to Pune",
        "description": "Book a taxi from Bandra Terminus to Pune with Vedant Travels for a smooth and comfortable ride. Our taxis come equipped with air conditioning, spacious seating, and professional drivers to ensure a safe and relaxing journey."
    },
    {
        "name": "Bandra to Pune Drop Taxi",
        "description": "For a Bandra to Pune Drop Taxi, Vedant Travels offers reliable one-way drop services. Choose from vehicles like Innova or Ertiga, with professional drivers ensuring a timely and comfortable journey."
    },
    {
        "name": "Bandra to Pune Innova Taxi Fare",
        "description": "The Bandra to Pune Innova Taxi Fare with Vedant Travels offers an ideal balance between luxury and affordability. The Innova is perfect for those looking for ample space and comfort during the journey."
    },
    {
        "name": "Bandra to Pune Ertiga Car Fare",
        "description": "For a more affordable yet comfortable option, the Bandra to Pune Ertiga Car Fare is a great choice. The Ertiga provides ample space for families or medium-sized groups, while keeping your travel costs reasonable."
    },
    {
        "name": "Bandra to Pune Round Trip Cab Booking",
        "description": "Need a round-trip cab from Bandra to Pune? Vedant Travels offers convenient and reliable round-trip cab booking. Our professional drivers ensure timely and comfortable service throughout your journey."
    },
    {
        "name": "Mumbai to Pune Taxi Fare",
        "description": "Vedant Travels offers reliable and affordable taxi services from Mumbai to Pune. Our fares are transparent, and we provide a variety of vehicle options like Sedans, Innova, and Ertiga to suit your needs."
    },
    {
        "name": "Mumbai to Pune Car Rental",
        "description": "Vedant Travels provides car rental services from Mumbai to Pune, offering professional drivers and a variety of vehicles to ensure a comfortable and hassle-free journey."
    },
    {
        "name": "Bandra Kurla Complex to Pune Cab",
        "description": "For those traveling from Bandra Kurla Complex to Pune, Vedant Travels offers top-notch cab services. Choose from vehicles like Innova, Ertiga, or Sedans for a comfortable ride."
    },
    {
        "name": "Bandra Kurla Complex to Pune Cab Fare",
        "description": "The Bandra Kurla Complex to Pune Cab Fare with Vedant Travels is competitive and transparent, ensuring great value for your money. Our fleet of vehicles accommodates different budgets and group sizes."
    },
    {
        "name": "Bandra Terminus to Pune Cab",
        "description": "Looking for a Bandra Terminus to Pune Cab? Vedant Travels provides comfortable and efficient taxi services, ensuring a smooth ride with professional drivers who know the best routes for a timely journey."
    },
    {
        "name": "Best Cab Service Mumbai to Pune",
        "description": "Vedant Travels offers the best cab service from Mumbai to Pune. With a well-maintained fleet, experienced drivers, and punctual service, your journey will be comfortable and enjoyable."
    },
    {
        "name": "Cab Service in Bandra Mumbai",
        "description": "For cab service in Bandra Mumbai, Vedant Travels offers reliable, punctual, and comfortable transportation. Whether you're traveling to Pune or within Mumbai, we ensure the best service at competitive prices."
    },
    {
        "name": "Bandra to Pune Innova Crysta Cab",
        "description": "Looking for an Innova Crysta for your journey from Bandra to Pune? Vedant Travels offers this luxurious vehicle for a comfortable and premium travel experience."
    },
    {
        "name": "Bandra to Pune Ertiga Cab",
        "description": "The Bandra to Pune Ertiga Cab service is ideal for small groups or families. With ample space and a smooth ride, it's a great option for a comfortable and affordable journey."
    },
    {
        "name": "Bandra to Pimpri Chinchwad Cab",
        "description": "For those traveling from Bandra to Pimpri Chinchwad, Vedant Travels offers affordable and reliable taxi services, with a variety of vehicle options for your comfort."
    }
],


"tableData": [
    ["Bandra Terminus to Pune Cab", "Bandra Terminus to Pune Taxi Fare"],
    ["Bandra to Pune Taxi", "Bandra to Pune Taxi Fare"],
    ["Bandra to Pune One Way Taxi", "Taxi from Bandra Terminus to Pune"],
    ["Bandra to Pune Drop Taxi", "Bandra to Pune Innova Taxi Fare"],
    ["Bandra to Pune Ertiga Car Fare", "Bandra to Pune Round Trip Cab Booking"],
    ["Mumbai to Pune Taxi Fare", "Mumbai to Pune Car Rental"],
    ["Bandra Kurla Complex to Pune Cab", "Bandra Kurla Complex to Pune Cab Fare"],
    ["Bandra Terminus to Pune Cab", "Best Cab Service Mumbai to Pune"],
    ["Cab Service in Bandra Mumbai", "Bandra to Pune Innova Crysta Cab"],
    ["Bandra to Pune Ertiga Cab", "Bandra to Pimpri Chinchwad Cab"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality. Whether you’re traveling from Bandra to Pune for a business meeting, vacation, or family trip, we ensure that your cab arrives on time for a seamless experience and smooth ride."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a fleet of comfortable, well-maintained, and spacious vehicles for your Bandra to Pune Cab journey. Choose from sedans, SUVs, or premium cars, all designed with ample legroom, air conditioning, and comfortable seating to ensure a relaxed journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are professional, courteous, and experienced, ensuring your safety and comfort throughout your Bandra to Pune ride. They are well-versed in the best routes and handle the journey with expertise to ensure a smooth, efficient trip."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for your Bandra to Pune Cab. We value honesty and ensure no hidden charges. You’ll get upfront pricing that reflects the value you’re getting for the trip."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features, including seat belts, airbags, and GPS tracking. Our drivers follow strict safety protocols to ensure your journey from Bandra to Pune is both secure and stress-free."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "No matter when you need to travel, Vedant Travels is available 24/7. You can book your Bandra to Pune Cab at any time, and our customer service team will assist you promptly to make sure your trip goes smoothly."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Bandra to Pune Cab is simple and convenient. You can book online via our website or mobile app, or contact our customer service team for any assistance. We make the entire process fast and easy for you."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business, leisure, or other purposes, we offer customized travel packages for your Bandra to Pune journey. Let us know your preferences, and we’ll design a trip that suits your needs."
    }
  ]








    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Bandra to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Bandra to Pune Cab through our website or mobile app. Alternatively, you can reach out to our customer service team for personalized assistance.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are highly skilled and experienced with long-distance routes like Bandra to Pune. They ensure your ride is safe, smooth, and efficient.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Bandra to Pune travel?',
            answer: 'We offer a range of vehicles, including sedans, SUVs, and premium cars. All our vehicles are spacious, comfortable, and well-maintained for a pleasant journey.',
        },
        {
            id: 4,
            question: 'How do I pay for my Bandra to Pune cab rental?',
            answer: 'We accept various payment methods, including cash, credit/debit cards, and online payment options via our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Bandra to Pune cab?',
            answer: 'Yes, you can easily book a round-trip cab. Just provide your return details during the booking, and we’ll make the necessary arrangements for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting or detours will be communicated upfront. We believe in complete transparency in our pricing structure.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune after your Bandra to Pune trip. Explore famous landmarks like Shaniwar Wada, Aga Khan Palace, and more with one of our trusted drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Bandra to Pune cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have more luggage or specific needs, kindly inform us at the time of booking, and we’ll ensure your requirements are met.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Bandra and Pune?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other corporate events. We can customize travel packages according to your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Bandra to Pune journey?',
            answer: 'Vedant Travels is known for reliable service, professional drivers, competitive pricing, and well-maintained vehicles. We ensure that your Bandra to Pune journey is comfortable, safe, and hassle-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Amit Gupta",
            title: "Business Traveler",
            quote: "I had a business trip from Bandra to Pune and chose Vedant Travels. The driver was punctual, the vehicle was clean and comfortable, and the journey was smooth. Great service, highly recommended!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Kapoor",
            title: "Family Traveler",
            quote: "Our family traveled from Bandra to Pune with Vedant Travels. The driver was friendly and professional, and the car was spacious and well-maintained. We had a very comfortable ride and will definitely use their services again.",
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
        "name": "Bandra to Pune Cab | Vedant Travels",
        "description": "Book your Bandra to Pune Cab with Vedant Travels. Offering reliable taxi services including one-way trips, round trips, and airport transfers in Innova, Ertiga, and Sedan models for a smooth journey.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "520"
        }
      };
      
      
      


    return (
        <div>
           <Helmet>
        <title>Bandra to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Bandra to Pune Cab with Vedant Travels. Reliable one-way and round-trip taxi services offering Innova, Ertiga, and Sedan models for a smooth, comfortable journey. Affordable and safe." />
        <meta name="keywords" content="Bandra to Pune Cab, Bandra Terminus to Pune Cab, Bandra to Pune Taxi, Bandra to Pune Taxi Fare, Bandra to Pune One Way Taxi, Taxi from Bandra Terminus to Pune, Bandra to Pune Drop Taxi, Bandra to Pune Innova Taxi Fare, Bandra to Pune Ertiga Car Fare, Bandra to Pune Round Trip Cab Booking, Mumbai to Pune Taxi Fare, Mumbai to Pune Car Rental, Bandra Kurla Complex to Pune Cab, Bandra Terminus to Pune Cab, Best Cab Service Mumbai to Pune, Cab Service in Bandra Mumbai, Bandra to Pune Innova Crysta Cab, Bandra to Pune Ertiga Cab, Bandra to Pimpri Chinchwad Cab" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/bandra-to-pune-cab" />
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
                            <img src='./images/keyword/34.jpg' alt='img' />
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

export default Bandratopunecab;