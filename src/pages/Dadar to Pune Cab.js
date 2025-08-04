
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Dadartopunecab() {



    const cardData =
    {
        keyword: 'Dadar to Pune Cab',
        heading: 'Vedant Travels: Dadar to Pune Cab',
        headingDescription: 'Vedant Travels offers reliable, affordable, and transparent taxi services for travel from Dadar to Pune, ensuring a comfortable and hassle-free journey. We provide a wide range of cab options, including sedans, SUVs, and premium vehicles, to suit your preferences and budget. With competitive pricing and no hidden charges, you can enjoy a smooth ride from Dadar to Pune.',

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
        "name": "Dadar to Pune Taxi Charges",
        "description": "Looking for Dadar to Pune Taxi Charges? At Vedant Travels, we provide competitive and transparent rates for your journey from Dadar to Pune. Depending on the vehicle type and your preferences, our fares are designed to ensure you get the best value for a comfortable ride."
    },
    {
        "name": "Dadar to Pune Taxi Service",
        "description": "Our Dadar to Pune Taxi Service is efficient, reliable, and tailored to meet your travel needs. Whether you're traveling for business or leisure, our experienced drivers ensure a smooth and timely journey. Choose from our wide range of vehicles, from sedans to SUVs, based on your requirements."
    },
    {
        "name": "Cab from Dadar to Pune",
        "description": "A Cab from Dadar to Pune with Vedant Travels guarantees comfort and punctuality. Our fleet of well-maintained vehicles ensures a safe and pleasant ride. You can book your cab online or via phone, and we'll ensure a smooth transfer from Dadar to Pune."
    },
    {
        "name": "Dadar Pune Cab Service",
        "description": "Our Dadar Pune Cab Service offers convenient, door-to-door transfers between Dadar and Pune. With a range of vehicles to choose from, including premium options, we cater to all types of travelers. Our service is designed for comfort, ensuring you arrive at your destination stress-free."
    },
    {
        "name": "Dadar Pune Taxi",
        "description": "Vedant Travels provides a dependable Dadar Pune Taxi service. Whether you need a one-way trip or a round trip, our taxi service ensures punctuality and comfort. Our drivers are professional and familiar with the best routes for a smooth and efficient ride."
    },
    {
        "name": "Dadar to Pune Cab Service",
        "description": "Looking for a Dadar to Pune Cab Service that offers affordability and comfort? Vedant Travels offers an array of vehicles to choose from, ensuring that your journey is as smooth as possible. Our service includes reliable drivers and well-maintained vehicles for your safety and convenience."
    },
    {
        "name": "Mumbai to Pune Taxi from Dadar",
        "description": "If you're looking for a Mumbai to Pune Taxi from Dadar, Vedant Travels is the perfect choice. Our services are affordable and reliable, ensuring that you reach Pune from Dadar in comfort and on time. We provide a range of vehicle options to suit your travel preferences."
    },
    {
        "name": "Pune to Dadar Taxi",
        "description": "For those traveling from Pune to Dadar, Vedant Travels offers a reliable taxi service that guarantees comfort and convenience. Our taxis are well-maintained, and our drivers are skilled at navigating the quickest routes, ensuring you have a smooth ride."
    },
    {
        "name": "Taxi from Dadar to Pune",
        "description": "Book a Taxi from Dadar to Pune with Vedant Travels for a fast, safe, and comfortable journey. We understand the importance of punctuality, and our taxi service ensures that you arrive at your destination without any delays."
    },
    {
        "name": "Taxi Fare from Dadar to Pune",
        "description": "Vedant Travels offers a Taxi Fare from Dadar to Pune that is both transparent and competitive. We provide clear pricing with no hidden charges, so you know exactly what to expect. Whether you're traveling solo or with a group, our fares cater to all budgets."
    },
    {
        "name": "Dadar to Pune Innova Cab",
        "description": "For a more spacious and luxurious ride, opt for a Dadar to Pune Innova Cab with Vedant Travels. The Innova is perfect for families or groups, offering ample space and comfort for the entire journey. Our experienced drivers ensure that your ride is smooth and timely."
    },
    {
        "name": "Dadar to Pune Ertiga Cab",
        "description": "The Dadar to Pune Ertiga Cab is an excellent choice for those traveling with family or a small group. With comfortable seating and air-conditioning, the Ertiga ensures a pleasant journey. Book your ride with Vedant Travels for an affordable and hassle-free experience."
    },
    {
        "name": "Dadar to Pune Sedan Cab",
        "description": "If you're traveling solo or with a small group, our Dadar to Pune Sedan Cab service offers comfort and convenience. Choose from a variety of sedan options for a smooth and affordable ride from Dadar to Pune."
    },
    {
        "name": "Dadar to Pune Cab Fare",
        "description": "Looking for Dadar to Pune Cab Fare details? Vedant Travels offers clear and affordable pricing for your journey. The fare is determined by factors such as the vehicle type and distance, but we ensure that all our charges are transparent and fair."
    },
    {
        "name": "Dadar to Pune Taxi Service",
        "description": "Our Dadar to Pune Taxi Service is designed for travelers seeking reliable and safe transportation. Whether you need a one-way trip or a round trip, we offer a variety of vehicles and flexible options to meet your needs."
    },
    {
        "name": "Cab from Dadar to Pune",
        "description": "Book a Cab from Dadar to Pune with Vedant Travels for a stress-free experience. Our experienced drivers know the best routes, ensuring a quick and smooth journey to Pune. We also offer flexible booking options, so you can book your ride with ease."
    },
    {
        "name": "Dadar Pune Taxi",
        "description": "For those looking for a Dadar Pune Taxi, Vedant Travels offers the most convenient service. Our fleet of taxis is well-maintained and driven by skilled drivers, ensuring you have a comfortable ride from Dadar to Pune."
    },
    {
        "name": "Dadar to Pune Innova Crysta",
        "description": "For those seeking luxury and comfort, book a Dadar to Pune Innova Crysta with Vedant Travels. The Innova Crysta offers extra space, luxury, and top-notch comfort, making it an ideal choice for long journeys. Enjoy a premium ride with professional drivers."
    },
    {
        "name": "Dadar to Pune Ertiga Cab Fare",
        "description": "Need to know the Dadar to Pune Ertiga Cab Fare? At Vedant Travels, we offer competitive and transparent pricing. The Ertiga provides excellent comfort at an affordable rate, making it an excellent choice for group travel."
    },
    {
        "name": "Dadar to Pune Sedan Cab Fare",
        "description": "For those booking a Dadar to Pune Sedan Cab, our pricing is designed to offer the best value for your money. Whether you're traveling for business or leisure, we ensure a pleasant and comfortable experience without any surprise charges."
    },
    {
        "name": "Dadar to Pune Station Cab",
        "description": "Need a ride from Dadar to Pune Station? Our taxi services provide quick and reliable transportation, ensuring that you reach your destination on time. We offer a variety of vehicles to suit your comfort and budget."
    },
    {
        "name": "Mumbai to Pune Taxi Fare",
        "description": "For those traveling from Mumbai to Pune, Vedant Travels offers competitive pricing for all types of vehicles, ensuring you get the best service at an affordable rate. Whether you choose a sedan, SUV, or luxury vehicle, we provide fair pricing with no hidden charges."
    }
],


"tableData": [
    ["Dadar to Pune Taxi Charges", "Dadar to Pune Taxi Service"],
    ["Cab from Dadar to Pune", "Dadar Pune Cab Service"],
    ["Dadar Pune Taxi", "Dadar to Pune Cab Service"],
    ["Mumbai to Pune Taxi from Dadar", "Pune to Dadar Taxi"],
    ["Taxi from Dadar to Pune", "Taxi Fare from Dadar to Pune"],
    ["Dadar to Pune Ertiga Cab", "Dadar to Pune Innova Cab"],
    ["Dadar to Pune Sedan Cab", "Dadar to Pune Cab"],
    ["Dadar to Pune Taxi Charges", "Dadar to Pune Taxi Service"],
    ["Cab from Dadar to Pune", ""]
  ],
  "whychoose": [
    {
      "WhyChooseheading": "Reliable and On-Time Service",
      "WhyChoosedescription": "At Vedant Travels, we understand how important punctuality is, especially when you're traveling from Dadar to Pune. Whether it's for a business trip, family outing, or any other purpose, we guarantee timely pickups and drop-offs to make sure you reach your destination without any hassle."
    },
    {
      "WhyChooseheading": "Comfortable and Spacious Vehicles",
      "WhyChoosedescription": "We provide a fleet of well-maintained vehicles for your Dadar to Pune Cab ride. Choose from sedans, SUVs, and premium cars, all equipped with air conditioning, comfortable seating, and ample legroom to ensure you have a relaxing and comfortable journey."
    },
    {
      "WhyChooseheading": "Experienced and Professional Drivers",
      "WhyChoosedescription": "Our drivers are experienced and professional, familiar with the best routes between Dadar and Pune. They ensure that your journey is smooth, safe, and efficient, giving you peace of mind throughout the trip."
    },
    {
      "WhyChooseheading": "Affordable and Transparent Pricing",
      "WhyChoosedescription": "Vedant Travels offers competitive and transparent pricing for your Dadar to Pune Cab service. There are no hidden charges or surprise fees—what you see is what you pay, giving you excellent value for your money."
    },
    {
      "WhyChooseheading": "Safe and Comfortable Journey",
      "WhyChoosedescription": "Your safety is our top priority. All our vehicles are equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers follow strict safety protocols to ensure you have a safe and worry-free journey from Dadar to Pune."
    },
    {
      "WhyChooseheading": "24/7 Availability",
      "WhyChoosedescription": "Whether it’s an early morning trip or a late-night journey, Vedant Travels is available 24/7 to serve your needs. You can book your Dadar to Pune Cab at any time, and our customer service team will assist you promptly."
    },
    {
      "WhyChooseheading": "Hassle-Free Booking Process",
      "WhyChoosedescription": "Booking your Dadar to Pune Cab is quick and easy. You can book online through our website or mobile app, or contact our customer service team for personalized assistance. We aim to make the booking process as seamless as possible for you."
    },
    {
      "WhyChooseheading": "Customized Travel Packages",
      "WhyChoosedescription": "Whether you're traveling for business, leisure, or any other purpose, we offer customized travel packages for your Dadar to Pune journey. Let us know your preferences, and we’ll tailor your trip to suit your needs."
    }
  ]








    }

    const faqData = [
        {
            id: 1,
            question: 'How can I book a Dadar to Pune cab with Vedant Travels?',
            answer: 'You can easily book your Dadar to Pune Cab through our website or mobile app. Alternatively, you can contact our customer service team for any assistance you may need with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are experienced and well-versed with long-distance routes like Dadar to Pune. They ensure a smooth and comfortable journey while prioritizing your safety.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Dadar to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars. All of our vehicles are spacious, comfortable, and well-maintained to ensure a pleasant ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Dadar to Pune cab rental?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payment via our app, making it convenient and flexible for you.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Dadar to Pune?',
            answer: 'Yes, round-trip bookings are available. Simply provide your return details during the booking process, and we’ll arrange the entire journey for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you upfront, ensuring full transparency and no surprises during your journey.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Pune after my drop-off?',
            answer: 'Yes, we offer customized sightseeing tours in Pune. After your Dadar to Pune trip, you can explore popular tourist destinations like Shaniwar Wada, Aga Khan Palace, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Dadar to Pune cab?',
            answer: 'Our vehicles can accommodate standard luggage. If you have more luggage or specific requirements, please inform us during the booking process, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Dadar and Pune?',
            answer: 'Yes, we provide corporate travel services for business meetings, conferences, and other professional events. We can tailor packages to meet your company’s specific needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Dadar to Pune journey?',
            answer: 'Vedant Travels offers reliable, comfortable, and safe travel services. With experienced drivers, well-maintained vehicles, competitive pricing, and 24/7 availability, we ensure a smooth and hassle-free journey from Dadar to Pune.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Sharma",
            title: "Customer",
            quote: "I booked a Dadar to Pune cab with Vedant Travels for a business trip. The driver was punctual, professional, and very courteous. The vehicle was comfortable, and I reached Pune on time. Great service and highly recommended!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Deshmukh",
            title: "Customer",
            quote: "We used Vedant Travels for our family trip from Dadar to Pune. The ride was smooth, and the driver was very friendly. The vehicle was spacious and clean. We had a wonderful experience, and I’ll definitely use their services again.",
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
        "name": "Dadar to Pune Cab | Vedant Travels",
        "description": "Book your Dadar to Pune Cab with Vedant Travels. We offer comfortable, reliable taxi services for your journey, including Innova, Ertiga, and Sedan options. Enjoy a smooth ride at affordable rates, whether for one-way trips, round trips, or airport transfers.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.9",
          "ratingCount": "1025"
        }
      };
      
   
      

    return (
        <div>
              <Helmet>
        <title>Dadar to Pune Cab | Vedant Travels | Contact: +91 8177869909</title>
        <meta name="description" content="Book your Dadar to Pune Cab with Vedant Travels. Affordable, comfortable, and reliable taxi services for one-way trips, round trips, or airport transfers, including Innova, Ertiga, and Sedan options." />
        <meta name="keywords" content="Dadar to Pune Taxi Charges, Dadar to Pune Taxi Service, Cab from Dadar to Pune, Dadar Pune Cab Service, Dadar Pune Taxi, Dadar to Pune Cab Fare, Mumbai to Pune Taxi from Dadar, Dadar to Pune Innova Cab, Dadar to Pune Ertiga Cab, Dadar to Pune Sedan Cab, Dadar to Pune Taxi, Taxi Fare from Dadar to Pune, Dadar to Pune Innova Crysta, Dadar to Pune Ertiga Cab Fare, Dadar to Pune Sedan Cab Fare, Dadar to Pune Station Cab, Mumbai to Pune Taxi Fare" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/dadar-to-pune-cab" />
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
                            <img src='./images/keyword/31.jpg' alt='img' />
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

export default Dadartopunecab;