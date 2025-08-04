
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Andheritopunecab() {



    const cardData =
    {
        keyword: 'Andheri to Pune Cab',
        heading: 'Vedant Travels: Andheri to Pune Cab',
        headingDescription: 'Vedant Travels offers reliable, affordable, and transparent taxi services for travel from Andheri to Pune. Our service ensures a comfortable and smooth journey, with a variety of cab options, including sedans, SUVs, and premium vehicles, to cater to your preferences and budget. With competitive pricing and no hidden charges, you can enjoy a stress-free ride to Pune.',

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
        "name": "Andheri to Pune Taxi",
        "description": "Traveling from Andheri to Pune has never been easier with Vedant Travels. We offer comfortable and affordable cab services for all types of travelers, whether you're heading to Pune for business, leisure, or any other purpose. Our fleet of vehicles includes options like Innova, Ertiga, and Sedan to meet your needs. Our professional drivers are well-trained to ensure your journey is smooth and stress-free."
    },
    {
        "name": "Andheri to Pune Round Trip Cab",
        "description": "Planning a Round Trip Cab from Andheri to Pune? Look no further than Vedant Travels for a convenient and cost-effective solution. We provide comfortable round-trip services for individuals and groups, ensuring that you have a relaxing time both ways. Whether you're planning a business trip or a leisure visit, our round-trip cabs offer flexibility, comfort, and safety."
    },
    {
        "name": "Andheri to Pune Innova Crysta",
        "description": "For those seeking a more luxurious and comfortable ride, our Andheri to Pune Innova Crysta service is the perfect choice. The Innova Crysta is known for its spacious interior, smooth ride, and premium comfort, making it ideal for families, small groups, or business travelers."
    },
    {
        "name": "Taxi from Mumbai Andheri to Pune",
        "description": "Need a Taxi from Mumbai Andheri to Pune? Vedant Travels offers reliable taxi services to ensure that you travel comfortably and arrive on time. We provide a variety of vehicles for different group sizes and budgets, with experienced drivers who navigate the best routes for a timely and pleasant journey."
    },
    {
        "name": "Andheri to Pune Ertiga Taxi Fare",
        "description": "If you're looking for an Ertiga taxi from Andheri to Pune, Vedant Travels offers an affordable fare while maintaining high comfort and service standards. The Ertiga is an excellent option for small groups or families, providing ample space for a comfortable ride."
    },
    {
        "name": "Andheri to Hinjewadi Cab Fare",
        "description": "Planning a trip from Andheri to Hinjewadi? Vedant Travels offers competitive cab fare from Andheri to Hinjewadi, ensuring that your travel to this business hub is smooth and affordable."
    },
    {
        "name": "Andheri Airport to Pune Taxi Fare",
        "description": "Need a taxi from Andheri Airport to Pune? Vedant Travels provides a range of taxis to suit your needs, including comfortable, air-conditioned cabs for a stress-free ride. We offer competitive and affordable fares for this route."
    },
    {
        "name": "Mumbai Airport to Baner Cab Fare",
        "description": "Traveling from Mumbai Airport to Baner? Vedant Travels offers reliable and timely cab services with affordable fares. Our drivers ensure punctuality and stress-free airport transfers."
    },
    {
        "name": "One Way Round Trip Cab from Mumbai",
        "description": "For a One Way Round Trip Cab from Mumbai, Vedant Travels is your go-to option. Our one-way round-trip service offers great flexibility, allowing you to book both legs of the journey with ease."
    },
    {
        "name": "Juhu to Pune Cab Service",
        "description": "Need a Juhu to Pune Cab Service? Vedant Travels offers affordable and reliable taxi services for this route. Whether you're heading to Pune for business or leisure, our fleet of cabs guarantees a comfortable journey."
    },
    {
        "name": "Cab Service in Juhu Mumbai",
        "description": "Looking for a Cab Service in Juhu Mumbai? Vedant Travels offers reliable and safe taxi services within Juhu and other parts of Mumbai. Whether you're traveling to the airport, heading to a meeting, or going on a trip, our cabs are available to cater to your travel needs."
    },
    {
        "name": "Juhu to Pune One Way Cab Fare",
        "description": "For the Juhu to Pune One Way Cab Fare, Vedant Travels provides a cost-effective and comfortable solution. Our pricing is transparent with no hidden charges, so you can be sure you're getting the best value for your money."
    },
    {
        "name": "Sakinaka to Pune Cab Service",
        "description": "If you're looking for a Sakinaka to Pune Cab Service, Vedant Travels offers affordable and reliable travel options. Our professional drivers will ensure that you enjoy a comfortable and safe ride."
    },
    {
        "name": "Marol to Pune Cab",
        "description": "For a reliable and timely Cab from Marol to Pune, look no further than Vedant Travels. Our fleet of vehicles ensures a smooth ride, and we offer competitive rates for all our services."
    },
    {
        "name": "Andheri to Pune Cab Innova Crysta",
        "description": "For extra luxury and comfort, choose the Andheri to Pune Cab Innova Crysta service from Vedant Travels. Ideal for family trips or small groups, the Innova Crysta provides ample space and superior comfort."
    },
    {
        "name": "Andheri to Pune Station Cab",
        "description": "Need a Cab from Andheri to Pune Station? Vedant Travels ensures a prompt and reliable service with comfortable vehicles, ensuring you reach Pune Station without any hassle."
    },
    {
        "name": "Cab Service in Andheri",
        "description": "Looking for a reliable Cab Service in Andheri? Vedant Travels offers dependable taxi services within Andheri and to destinations across Mumbai and Pune. Our fleet of vehicles is well-maintained, and our drivers are experienced and professional."
    }
],


"tableData": [
    ["Andheri to Pune Taxi", "Andheri to Pune Round Trip Cab"],
    ["Andheri to Pune Innova Crysta", "Taxi from Mumbai Andheri to Pune"],
    ["Andheri to Pune Ertiga Taxi Fare", "Andheri to Hinjewadi Cab Fare"],
    ["Andheri Airport to Pune Taxi Fare", "Mumbai Airport to Baner Cab Fare"],
    ["One Way Round Trip Cab from Mumbai", "Juhu to Pune Cab Service"],
    ["Cab Service in Juhu Mumbai", "Juhu to Pune One Way Cab Fare"],
    ["Sakinaka to Pune Cab Service", "Marol to Pune Cab"],
    ["Andheri to Pune Cab", "Andheri to Pune Taxi"],
    ["Pune to Andheri Cab", "Andheri to Pune Cab Innova Crysta"],
    ["Andheri to Pune Station Cab", "Cab Service in Andheri"]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how important punctuality is for your travel. Whether you're traveling for business or leisure, we ensure that you’re picked up on time from Andheri and reach Pune without any delays. Our drivers follow efficient routes to make your journey smooth and timely."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We offer a variety of well-maintained, comfortable, and spacious vehicles for your Andheri to Pune Cab ride. Choose from our fleet of sedans, SUVs, and premium cars, all equipped with air conditioning, comfortable seating, and ample legroom to provide you with a relaxing travel experience."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are experienced, courteous, and professional, ensuring that you have a safe and pleasant journey from Andheri to Pune. They are well-versed with the best routes, allowing you to avoid traffic and ensuring a smooth ride."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive pricing for your Andheri to Pune Cab service. We believe in complete transparency, meaning there are no hidden charges. Our pricing is upfront and honest, so you can enjoy your journey without worrying about unexpected costs."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features such as airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols, ensuring that you have a safe and secure journey from Andheri to Pune."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether you need a cab early in the morning or late at night, Vedant Travels is available 24/7. You can book your Andheri to Pune Cab at any time, and our customer service team will assist you promptly to make your travel hassle-free."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Andheri to Pune Cab is quick and simple. You can book online through our website or mobile app, or contact our customer service team for any assistance. We ensure that the process is easy, so you can focus on enjoying your trip."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business, leisure, or any special purpose, we offer customized travel packages for your Andheri to Pune journey. Share your preferences, and we’ll tailor the trip to suit your needs and comfort."
    }
  ]







    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book an Andheri to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Andheri to Pune Cab through our website or mobile app. Alternatively, our customer service team is available to assist you with the booking process.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced in long-distance routes like Andheri to Pune. They know the best routes and ensure that your journey is smooth, safe, and efficient.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Andheri to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All of our vehicles are spacious, comfortable, and well-maintained to ensure a pleasant and comfortable ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Andheri to Pune cab rental?',
            answer: 'We offer multiple payment options, including cash, credit/debit cards, and online payments via our app, so you can pay in whichever way is most convenient for you.',
        },
        {
            id: 5,
            question: 'Can I book a return trip along with my Andheri to Pune cab?',
            answer: 'Yes, you can book a round-trip service. Provide your return details at the time of booking, and we will ensure the entire journey is seamless.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you upfront, so you have complete transparency about the cost.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune. After your Andheri to Pune drop-off, you can visit popular attractions like Shaniwar Wada, Aga Khan Palace, and others with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for an Andheri to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have additional luggage or special requirements, kindly inform us during the booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Andheri and Pune?',
            answer: 'Yes, we offer corporate travel services for business meetings, conferences, and other professional purposes. We can tailor your travel packages to meet your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Andheri to Pune journey?',
            answer: 'Vedant Travels offers reliable, safe, and comfortable travel services. With experienced drivers, well-maintained vehicles, competitive pricing, and 24/7 availability, we ensure that your Andheri to Pune journey is stress-free and enjoyable.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Abhishek Mehta",
            title: "Business Traveler",
            quote: "I traveled from Andheri to Pune with Vedant Travels for a business trip, and it was an excellent experience. The driver was professional, the vehicle was clean and comfortable, and the ride was smooth. Highly recommend this service!",
            rating: 5,
        },
        {
            name: "Mrs. Sonali Desai",
            title: "Family Traveler",
            quote: "We used Vedant Travels for our family trip from Andheri to Pune. The driver was punctual, friendly, and made the whole journey enjoyable. The vehicle was spacious and well-maintained. It was a great experience, and I would definitely book again!",
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
        "name": "Andheri to Pune Cab | Vedant Travels",
        "description": "Book your Andheri to Pune Cab with Vedant Travels. Offering reliable and comfortable taxi services including round trips, one-way journeys, and airport transfers in Innova, Ertiga, and Sedan models.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "456"
        }
      };
      
   
      

    return (
        <div>
              <Helmet>
        <title>Andheri to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Andheri to Pune Cab with Vedant Travels. Reliable one-way and round-trip taxi services for smooth journeys, offering Innova, Ertiga, and Sedan options for airport transfers and city trips." />
        <meta name="keywords" content="Andheri to Pune Taxi, Andheri to Pune Round Trip Cab, Andheri to Pune Innova Crysta, Taxi from Mumbai Andheri to Pune, Andheri to Pune Ertiga Taxi Fare, Andheri to Hinjewadi Cab Fare, Andheri Airport to Pune Taxi Fare, Mumbai Airport to Baner Cab Fare, One Way Round Trip Cab from Mumbai, Juhu to Pune Cab Service, Cab Service in Juhu Mumbai, Juhu to Pune One Way Cab Fare, Sakinaka to Pune Cab Service, Marol to Pune Cab, Andheri to Pune Taxi, Andheri to Pune Cab Innova Crysta, Andheri to Pune Station Cab, Cab Service in Andheri" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/andheri-to-pune-cab" />
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
                            <img src='./images/keyword/33.jpg' alt='img' />
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

export default Andheritopunecab;