
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punetomumbaicabs() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Cab Service',
        heading: 'Vedant Travels: Pune to Mumbai Cab Service',
        headingDescription: 'Vedant Travels offers a reliable and comfortable cab service from Pune to Mumbai, ensuring a hassle-free travel experience. Whether you are traveling for business, leisure, or an airport transfer, our fleet of well-maintained sedans, SUVs, and luxury cars caters to all travel needs. Our professional drivers ensure a safe and smooth journey, and we provide flexible pickup and drop-off options. With 24/7 availability, affordable fares, and an easy online booking system, Vedant Travels makes your Pune to Mumbai travel convenient and stress-free.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

        topPlaces: [
            {
                "title": "Gateway of India",
                "description": "One of Mumbai’s most iconic landmarks, the Gateway of India was built in 1924 to commemorate the visit of King George V. Located along the Arabian Sea, it serves as a popular tourist spot and a departure point for ferry rides to Elephanta Caves."
            },
            {
                "title": "Marine Drive",
                "description": "Known as the Queen’s Necklace, Marine Drive is a scenic coastal promenade ideal for a relaxing walk, especially in the evening when the city lights up beautifully along the curve of the bay."
            },
            {
                "title": "Elephanta Caves",
                "description": "A UNESCO World Heritage Site, the Elephanta Caves are renowned for their rock-cut temples dedicated to Lord Shiva. Located on Elephanta Island, these ancient caves display exquisite sculptures and carvings."
            },
            {
                "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
                "description": "An architectural masterpiece, this UNESCO-listed railway station blends Victorian Gothic and Indian architectural styles. Its detailed stonework, stained glass windows, and historic significance make it a must-visit attraction."
            },
            {
                "title": "Siddhivinayak Temple",
                "description": "One of Mumbai’s most revered Hindu temples, the Siddhivinayak Temple is dedicated to Lord Ganesha. It attracts thousands of devotees daily and is known for its spiritual significance and stunning architecture."
            },
            {
                "title": "Juhu Beach",
                "description": "A lively beach famous for its street food stalls offering delicacies like pav bhaji, vada pav, and bhel puri. Juhu Beach is an ideal spot to enjoy the sea breeze and experience Mumbai’s vibrant local culture."
            },
            {
                "title": "Colaba Causeway",
                "description": "A shopping paradise, Colaba Causeway is bustling with street stalls selling clothes, jewelry, and antiques. It is also home to historic cafés like Leopold Café, making it a perfect place to explore."
            },
            {
                "title": "Haji Ali Dargah",
                "description": "A beautiful Indo-Islamic shrine, Haji Ali Dargah is located on an islet off the coast of Worli. This spiritual site is known for its stunning architecture and peaceful atmosphere, attracting visitors from all faiths."
            },
            {
                "title": "Bandra-Worli Sea Link",
                "description": "A modern engineering marvel, the Bandra-Worli Sea Link connects South Mumbai to the western suburbs. The bridge offers breathtaking views of the Mumbai skyline, especially in the evening."
            },
            {
                "title": "Bollywood Film City",
                "description": "Experience the magic of Indian cinema at Film City in Goregaon. Guided tours provide an inside look at Bollywood movie sets, studios, and shooting locations, giving visitors a glimpse into the world of filmmaking."
            }
        ],


        services: [
            {
                "name": "Pune Mumbai Cab Services by Vedant Travels",
                "description": "Traveling between Pune and Mumbai? Book your ride with Vedant Travels for a comfortable and reliable journey. Whether you're heading to Mumbai for business, leisure, or a family trip, we provide top-quality, well-maintained vehicles to ensure a smooth and hassle-free ride."
            },
            {
                "name": "Mumbai to Pune Taxi",
                "description": "Experience a seamless ride from Mumbai to Pune with Vedant Travels. Our fleet includes a variety of vehicles like the Ertiga, Innova, and more, making it easy to choose a vehicle that suits your needs, whether you're traveling alone or with a group. With professional drivers and air-conditioned comfort, your journey will be both enjoyable and stress-free."
            },
            {
                "name": "Pune to Mumbai Cheapest Cab",
                "description": "If you're looking for affordable travel options between Pune and Mumbai, Vedant Travels offers competitive rates. We pride ourselves on offering budget-friendly options without compromising on comfort or safety. Get in touch with us for the best pricing available for your trip."
            },
            {
                "name": "Pune to Mumbai Cab Service",
                "description": "Vedant Travels provides reliable and comfortable taxi services from Pune to Mumbai. Our drivers are experienced and committed to delivering a high-quality travel experience, ensuring your ride is smooth and punctual. Book with us for a stress-free journey every time."
            },
            {
                "name": "Pune to Mumbai Cab Fare",
                "description": "We offer transparent and competitive pricing for your Pune to Mumbai journey. Vedant Travels understands the importance of affordability, and we make sure to provide fair pricing with no hidden costs. Contact us for an accurate fare quote, based on the specifics of your trip."
            },
            {
                "name": "Pune Mumbai Taxi Service",
                "description": "Looking for a dependable taxi service from Pune to Mumbai? Vedant Travels is your trusted choice. Whether you’re traveling for business, sightseeing, or any other purpose, our fleet of modern vehicles ensures comfort and reliability. Our services are tailored to suit your specific needs."
            },
            {
                "name": "Pune to Mumbai Cab Booking",
                "description": "Booking a cab for your Pune to Mumbai trip is easy with Vedant Travels. Simply call us or book online to secure your ride. Whether you're traveling for work or leisure, we offer flexible booking options to make your journey hassle-free."
            },
            {
                "name": "Pune Mumbai Cab Rental",
                "description": "Renting a cab from Pune to Mumbai is the perfect choice for those who want flexibility. With Vedant Travels, you can rent a vehicle that suits your preferences, whether you're planning a one-way trip or need to make a round journey. Choose from a variety of vehicles to match the size of your group and the type of experience you're looking for."
            },
            {
                "name": "Pune Mumbai Pune Car Rental",
                "description": "Vedant Travels also offers car rentals for round trips from Pune to Mumbai and back. Our car rental service ensures a hassle-free experience, with experienced drivers who know the best routes for a quick and smooth journey. Make the most of your day with a flexible car rental option."
            },
            {
                "name": "Pune Mumbai Taxi Price",
                "description": "At Vedant Travels, we aim to keep the prices of our Pune to Mumbai taxi service transparent and fair. Whether you're booking a one-way trip or a return journey, we provide competitive pricing without compromising on comfort. Contact us to get a price estimate for your journey."
            },
            {
                "name": "Pune Mumbai Car Rental",
                "description": "Travel in comfort with our car rental services between Pune and Mumbai. We offer a variety of cars, including the popular Ertiga and Innova models, that can accommodate families, friends, and business travelers alike. Renting a car with Vedant Travels ensures a convenient and personalized experience."
            },
            {
                "name": "Pune to Mumbai Ertiga Cab",
                "description": "If you're traveling with family or a small group, consider booking an Ertiga cab with Vedant Travels for your Pune to Mumbai journey. Spacious, comfortable, and perfect for a smooth ride, the Ertiga is a great choice for those seeking a cost-effective yet spacious vehicle."
            },
            {
                "name": "Pune to Mumbai Innova Cab",
                "description": "For a premium and comfortable ride, book an Innova cab with Vedant Travels. The Innova is ideal for those who want extra legroom, enhanced comfort, and a luxurious travel experience. Whether you're going for a corporate event or a family gathering, the Innova is perfect for your needs."
            },
            {
                "name": "Pune to Mumbai Cab Booking",
                "description": "Secure your ride with ease by booking a Pune to Mumbai cab with Vedant Travels. We provide flexible booking options to suit your schedule, ensuring that your trip is as comfortable and convenient as possible."
            },
            {
                "name": "Pune to Mumbai Innova Crysta",
                "description": "For a luxurious ride, book an Innova Crysta with Vedant Travels. The Crysta offers extra comfort and style, making it perfect for corporate trips, special occasions, or just for those who prefer a high-end travel experience."
            },
            {
                "name": "Pune Mumbai Innova Rental",
                "description": "Renting an Innova for your Pune to Mumbai trip ensures maximum comfort, space, and reliability. Vedant Travels offers Innova rentals with experienced drivers who are familiar with the best routes, ensuring a smooth and timely journey."
            },
            {
                "name": "Pune to Mumbai International Airport Cab",
                "description": "Need a ride to Mumbai International Airport? Vedant Travels offers reliable and convenient cab services from Pune to Mumbai Airport. Whether you're catching a flight or arriving after a long journey, our cab service ensures you reach the airport on time and in comfort."
            },
            {
                "name": "Pune to Mumbai Cab Fare",
                "description": "Vedant Travels provides affordable and transparent pricing for all trips from Pune to Mumbai. We understand the importance of clear and fair pricing, ensuring you can plan your journey without surprises. Contact us for a custom quote."
            },
            {
                "name": "Pune to Mumbai Vedant Travels",
                "description": "For a comfortable and affordable journey between Pune and Mumbai, choose Vedant Travels. Our fleet of vehicles, professional drivers, and commitment to customer satisfaction ensure your trip is stress-free and enjoyable."
            },
            {
                "name": "Pune Mumbai Cab Contact Information",
                "description": "Contact Vedant Travels at +91 8177869909 for prompt and efficient Pune to Mumbai cab services. We ensure a smooth and enjoyable ride for all our customers, making your journey comfortable and stress-free. Book your Pune to Mumbai cab today!"
            }
        ],


        tableData: [
            ["Pune Mumbai cab", "Mumbai to Pune taxi"],
            ["Pune to Mumbai cheapest cab", "Pune to Mumbai cab service"],
            ["Pune to Mumbai cab fare", "Pune Mumbai taxi service"],
            ["Pune to Mumbai cab booking", "Pune Mumbai cab rental"],
            ["Pune Mumbai Pune car rental", "Pune Mumbai taxi price"],
            ["Pune Mumbai car rental", "Pune to Mumbai Ertiga cab"],
            ["Pune to Mumbai Innova Cab", "Pune to Mumbai cab booking"],
            ["Pune to Mumbai Innova Crysta", "Pune to Mumbai Innova Cab"],
            ["Pune Mumbai Innova rental", "Pune to Mumbai international airport cab"],
            ["Pune to Mumbai cab fare", "Pune to Mumbai Vedant Travels"]
        ],
        
        whychoose: [
            {
                "WhyChooseheading": "Reliable and On-Time Service",
                "WhyChoosedescription": "At Vedant Travels, we understand the importance of punctuality. Whether you're traveling for business or leisure, our drivers ensure timely pickups and drop-offs, making your journey between Pune and Mumbai smooth and stress-free."
            },
            {
                "WhyChooseheading": "Comfortable and Spacious Vehicles",
                "WhyChoosedescription": "Enjoy a relaxing journey with our spacious and comfortable vehicles. Designed with your comfort in mind, our cars offer ample legroom, air conditioning, and comfortable seating, ensuring a pleasant trip."
            },
            {
                "WhyChooseheading": "Experienced and Professional Drivers",
                "WhyChoosedescription": "Our skilled and experienced drivers are trained to handle long-distance routes such as Pune to Mumbai. They ensure that you have a safe, efficient, and smooth ride, with expert knowledge of the best routes."
            },
            {
                "WhyChooseheading": "Affordable and Transparent Pricing",
                "WhyChoosedescription": "At Vedant Travels, we offer competitive pricing with no hidden charges. Our transparent pricing structure ensures that you receive great value for your money, with clear, upfront costs."
            },
            {
                "WhyChooseheading": "Safe and Comfortable Journey",
                "WhyChoosedescription": "Your safety is our priority. Our fleet is regularly maintained and equipped with modern safety features, such as airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols, ensuring a worry-free journey."
            },
            {
                "WhyChooseheading": "24/7 Availability",
                "WhyChoosedescription": "Whether you're planning an early morning departure or a late-night return, Vedant Travels is available around the clock to serve you. Our customer service team is ready to assist you at any time of day or night."
            },
            {
                "WhyChooseheading": "Hassle-Free Booking Process",
                "WhyChoosedescription": "Booking your Pune to Mumbai cab with Vedant Travels is simple and convenient. You can book online through our website or mobile app, or get in touch with our customer service team for assistance."
            },
            {
                "WhyChooseheading": "Customized Travel Packages",
                "WhyChoosedescription": "Whether you're traveling for work or pleasure, we offer personalized travel packages to suit your specific needs. Let us know your preferences, and we'll tailor your journey to fit your schedule and comfort."
            }
        ]
        






    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Pune to Mumbai cab with Vedant Travels?',
            answer: 'You can easily book your cab online through our website or mobile app. Alternatively, our customer service team is available to assist you with your booking over the phone.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, our drivers are trained professionals experienced in handling long-distance trips, ensuring a safe, smooth, and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Pune to Mumbai travel?',
            answer: 'We offer a range of well-maintained vehicles, including sedans, SUVs, and luxury cars. All our vehicles are spacious and equipped for a comfortable ride.',
        },
        {
            id: 4,
            question: 'How do I pay for my Pune to Mumbai cab rental?',
            answer: 'We accept multiple payment methods, including cash, credit/debit cards, and online payment via our app for your convenience.',
        },
        {
            id: 5,
            question: 'Can I book a round trip from Pune to Mumbai?',
            answer: 'Yes, you can book a round-trip cab. Just provide your return details during the booking, and we will take care of the rest.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting or detours will be communicated to you upfront. We believe in complete transparency and ensure no hidden costs.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing in Mumbai?',
            answer: 'Yes, we offer sightseeing tours in Mumbai as part of your Pune to Mumbai trip. Visit famous attractions like the Gateway of India, Marine Drive, and more with a trusted driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Pune to Mumbai cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have additional or specialized luggage needs, please let us know at the time of booking, and we will make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Pune and Mumbai?',
            answer: 'Yes, we provide corporate travel services, offering tailored solutions for business meetings, conferences, and other professional requirements between Pune and Mumbai.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for Pune to Mumbai travel?',
            answer: 'Vedant Travels stands out for its reliable, affordable, and comfortable service. With professional drivers, well-maintained vehicles, and transparent pricing, we ensure your travel is safe, smooth, and hassle-free.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rahul Mehta",
            title: "Customer",
            quote: "I booked a Pune to Mumbai cab for a business trip, and the experience was flawless. The driver was professional, the vehicle was clean and comfortable, and I reached on time. Highly recommend Vedant Travels!",
            rating: 5,
        },
        {
            name: "Mrs. Priya Kapoor",
            title: "Customer",
            quote: "Our family trip from Pune to Mumbai with Vedant Travels was wonderful. The vehicle was spacious, and the driver was friendly and punctual. We’ll definitely use their service again for our future travels.",
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
        "name": "Pune to Mumbai Cab Service | Vedant Travels",
        "description": "Book affordable and reliable Pune to Mumbai cab services with Vedant Travels. Choose from a range of vehicles including Innova, Ertiga, and more for your smooth and comfortable journey between Pune and Mumbai. Offering the best rates, flexible booking options, and quality services for your travel needs.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.7",
          "ratingCount": "2000"
        }
      };


    return (
        <div>
         

<Helmet>
  <title>Pune to Mumbai Cab | Affordable Taxi Service | Vedant Travels | Contact: +91 8177869909</title>
  <meta name="description" content="Get the best Pune to Mumbai cab services with Vedant Travels. Affordable pricing, quality vehicles like Innova, Ertiga, and more for a comfortable journey. Book your Pune to Mumbai taxi today!" />
  <meta name="keywords" content="Pune Mumbai cab, Mumbai to Pune taxi, Pune to Mumbai cheapest cab, Pune to Mumbai cab service, Pune to Mumbai taxi service, Pune Mumbai taxi booking, Pune to Mumbai car rental, Pune Mumbai Innova rental, Pune to Mumbai airport cab, Vedant Travels" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.vedanttravels.in/pune-to-mumbai-cab" />
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
                            <img src='/images/keyword/1.jpg' alt='img' />
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

export default Punetomumbaicabs;