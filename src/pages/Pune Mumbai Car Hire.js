
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Punetomumbaicabhire() {



    const cardData =
    {
        keyword: 'Pune to Mumbai Car Hire Service',
        heading: 'Vedant Travels: Pune to Mumbai Car Hire Service',
        headingDescription: 'Vedant Travels offers a reliable and comfortable car hire service from Pune to Mumbai, ensuring a smooth and hassle-free travel experience. Whether you need a car for business trips, leisure travel, or airport transfers, we have a wide range of well-maintained sedans, SUVs, and luxury cars to suit your travel needs. Our professional drivers provide a safe and pleasant journey, with flexible pickup and drop-off options. With 24/7 availability, affordable fares, and an easy online booking system, Vedant Travels makes your Pune to Mumbai car hire service convenient and stress-free.',

        top: 'Top Places to Visit in Mumbai with Vedant Travels',

"topPlaces": [
    {
        "title": "Gateway of India",
        "description": "One of Mumbai’s most iconic landmarks, built in 1924, overlooking the Arabian Sea. A must-visit historical attraction."
    },
    {
        "title": "Marine Drive",
        "description": "Also called the Queen’s Necklace, this beautiful coastal boulevard is perfect for scenic drives, evening strolls, and enjoying the Mumbai skyline."
    },
    {
        "title": "Elephanta Caves",
        "description": "A UNESCO World Heritage Site featuring rock-cut caves with stunning sculptures of Lord Shiva, dating back to the 5th century."
    },
    {
        "title": "Chhatrapati Shivaji Maharaj Terminus (CSMT)",
        "description": "A masterpiece of Victorian Gothic architecture and a UNESCO-listed railway station, showcasing Mumbai’s rich heritage."
    },
    {
        "title": "Siddhivinayak Temple",
        "description": "One of Mumbai’s most revered temples, dedicated to Lord Ganesha, attracting thousands of devotees daily."
    },
    {
        "title": "Juhu Beach",
        "description": "A famous Mumbai beach, ideal for street food, evening walks, and watching stunning sunset views over the Arabian Sea."
    },
    {
        "title": "Bandra-Worli Sea Link",
        "description": "A modern engineering marvel that connects Bandra and Worli, offering breathtaking views of Mumbai’s skyline and the sea."
    },
    {
        "title": "Colaba Causeway",
        "description": "A shopper’s paradise known for vibrant street shopping, boutiques, cafés, and historic architecture."
    },
    {
        "title": "Haji Ali Dargah",
        "description": "A beautiful mosque located on an islet in the Arabian Sea, visited by people of all faiths."
    },
    {
        "title": "Film City",
        "description": "The heart of Bollywood, offering guided tours showcasing movie sets, film studios, and a glimpse into the Indian film industry."
    }
],


services: [
    {
        "name": "Pune to Mumbai Car Rental Services by Vedant Travels",
        "description": "Looking for reliable car rental services from Pune to Mumbai? Vedant Travels offers a variety of car rental options to meet your travel needs. Whether you need a one-way trip, a round-trip, or a drop service, we provide well-maintained vehicles and professional drivers for a smooth and hassle-free journey."
    },
    {
        "name": "Mumbai Pune Car Rental Services",
        "description": "Traveling between Mumbai and Pune? Vedant Travels offers flexible car rental services for your comfort and convenience. Choose from our wide range of vehicles including the Innova, Ertiga, and more for a comfortable ride."
    },
    {
        "name": "Pune Mumbai Pune Car Rental",
        "description": "Need a car for a round trip from Pune to Mumbai and back? Vedant Travels offers affordable and comfortable round-trip car rental services, ensuring you have a stress-free journey both ways."
    },
    {
        "name": "Pune Mumbai Innova Rental",
        "description": "Book an Innova for your Pune to Mumbai journey with Vedant Travels. Whether you're traveling for business, leisure, or a family trip, the Innova provides extra space, comfort, and reliability."
    },
    {
        "name": "Pune to Mumbai Vedant Travels Car Hire",
        "description": "For a comfortable, reliable ride from Pune to Mumbai, book your car hire with Vedant Travels. We offer flexible car rental options with professional drivers to ensure a smooth and punctual journey."
    },
    {
        "name": "Pune to Mumbai Cab Hire",
        "description": "Rent a cab from Pune to Mumbai with Vedant Travels for a convenient and comfortable journey. Whether you need a one-way ride, round trip, or drop service, we have the right vehicle for your needs."
    },
    {
        "name": "Pune to Mumbai Drop Cab",
        "description": "For a one-way drop from Pune to Mumbai, choose Vedant Travels. We offer reliable drop cab services to ensure you reach your destination on time, whether it's for a business meeting, flight, or any other reason."
    },
    {
        "name": "Pune to Mumbai Private Cab",
        "description": "Traveling privately? Book a private cab from Pune to Mumbai with Vedant Travels for a comfortable and personalized experience. Enjoy a peaceful ride with a dedicated driver at your service."
    },
    {
        "name": "Pune to Mumbai Taxi Booking",
        "description": "Booking a taxi from Pune to Mumbai is easy with Vedant Travels. Whether you're going for business or leisure, we offer flexible booking options to suit your travel needs."
    },
    {
        "name": "Pune Mumbai Airport Car Rental",
        "description": "If you need a ride from Pune to Mumbai Airport, Vedant Travels provides reliable airport car rental services. Our experienced drivers ensure you reach the airport on time and in comfort."
    },
    {
        "name": "Pune to Mumbai Darshan Cab",
        "description": "Planning a religious trip? Book a Pune to Mumbai Darshan cab with Vedant Travels. Our dedicated cab services offer a comfortable ride for your pilgrimage or temple visits."
    },
    {
        "name": "Pune to Mumbai Car Rental",
        "description": "Rent a car from Pune to Mumbai for a hassle-free travel experience. Whether you need a sedan, SUV, or any other vehicle, Vedant Travels offers a variety of options to suit your preferences and budget."
    },
    {
        "name": "Pune to Mumbai Car Booking",
        "description": "Booking a car for your Pune to Mumbai trip is quick and easy with Vedant Travels. Choose from our range of vehicles and enjoy a comfortable, reliable ride with no hidden charges."
    },
    {
        "name": "Pune to Mumbai Car on Rent",
        "description": "If you're looking for flexibility and comfort, rent a car from Pune to Mumbai with Vedant Travels. Our rental services are perfect for one-way trips, round trips, or airport transfers."
    },
    {
        "name": "Pune to Mumbai Car Hire Charges",
        "description": "Vedant Travels offers transparent pricing for your Pune to Mumbai car hire. We provide competitive rates with no hidden fees, ensuring you get the best value for your money."
    },
    {
        "name": "Pune to Mumbai Ertiga Cab",
        "description": "Traveling with a family or small group? Rent an Ertiga cab for your Pune to Mumbai journey. The Ertiga offers spacious seating and comfort, making it perfect for a relaxed ride."
    },
    {
        "name": "Pune to Mumbai Innova Cab",
        "description": "For a premium travel experience, choose an Innova cab for your Pune to Mumbai journey. The Innova provides extra legroom and comfort, perfect for longer journeys or group travel."
    },
    {
        "name": "Pune Mumbai Car Rental",
        "description": "Vedant Travels offers reliable car rental services from Pune to Mumbai. Whether you're looking for a one-way trip, round-trip, or airport ride, we have a variety of vehicles to meet your needs."
    },
    {
        "name": "Pune to Mumbai Cab",
        "description": "Choose Vedant Travels for your Pune to Mumbai cab service. We offer a range of options from economy cars to luxury cabs, ensuring a comfortable ride tailored to your needs."
    },
    {
        "name": "One-Way Cab Pune to Mumbai",
        "description": "Need a one-way cab from Pune to Mumbai? Vedant Travels offers affordable and reliable one-way cab services, ensuring you travel comfortably and reach your destination on time."
    },
    {
        "name": "Pune to Mumbai Cheapest Cab",
        "description": "Looking for an affordable cab service between Pune and Mumbai? Vedant Travels provides budget-friendly cab services without compromising on comfort or reliability. Get in touch for the best prices on your trip."
    },
    {
        "name": "Pune to Mumbai Contact Information",
        "description": "For booking and inquiries, contact Vedant Travels at +91 8177869909. We provide affordable and reliable car rental and cab services between Pune and Mumbai, ensuring a comfortable and stress-free journey every time."
    }
],


tableData: [
    ["Mumbai Pune car rental services", "-Pune Mumbai Pune car rental"],
    ["Pune Mumbai Innova rental", "-Pune Mumbai Vedant Travels Car Hire"],
    ["Pune to Mumbai cab hire", "-Pune to Mumbai drop cab"],
    ["Pune to Mumbai private cab", "-Pune to Mumbai taxi booking"],
    ["Pune Mumbai airport car rental", "-Pune to Mumbai darshan cab"],
    ["Pune to Mumbai car rental", "-Pune to Mumbai car booking"],
    ["Pune to Mumbai car on rent", "-Pune to Mumbai car hire charges"],
    ["Pune to Mumbai Ertiga cab", "-Pune to Mumbai Innova Cab"],
    ["Pune Mumbai car rental", "-Pune to Mumbai cab"],
    ["One way cab Pune to Mumbai", "-Pune to Mumbai cheapest cab"]
],

whychoose: [
    {
        "WhyChooseheading": "Reliable and On-Time Service",
        "WhyChoosedescription": "At Vedant Travels, we ensure punctuality for every car hire from Pune to Mumbai. Whether it's for business or leisure, our drivers are committed to timely pickups and drop-offs, making your journey stress-free and efficient."
    },
    {
        "WhyChooseheading": "Comfortable and Spacious Vehicles",
        "WhyChoosedescription": "We provide a range of comfortable and spacious vehicles to suit your needs. From sedans to SUVs, all our cars are air-conditioned and well-maintained, ensuring a smooth and relaxing journey from Pune to Mumbai."
    },
    {
        "WhyChooseheading": "Experienced and Professional Drivers",
        "WhyChoosedescription": "Our drivers are skilled in navigating the best routes for your Pune to Mumbai car hire, ensuring safety, comfort, and timely arrival. With years of experience, they are well-equipped to make your journey hassle-free."
    },
    {
        "WhyChooseheading": "Affordable and Transparent Pricing",
        "WhyChoosedescription": "Vedant Travels offers competitive pricing for Pune to Mumbai car hire, with no hidden charges. Our transparent pricing structure ensures you get value for your money, with clear details on costs from the outset."
    },
    {
        "WhyChooseheading": "Safe and Comfortable Journey",
        "WhyChoosedescription": "Your safety is our priority. All our vehicles are equipped with modern safety features like airbags, seat belts, and GPS tracking. Our professional drivers adhere to strict safety protocols, providing a secure and pleasant journey."
    },
    {
        "WhyChooseheading": "24/7 Availability",
        "WhyChoosedescription": "Whether you need a car at the crack of dawn or late at night, Vedant Travels is available 24/7. Our round-the-clock service ensures you can book a car at your convenience, anytime for your Pune to Mumbai travel."
    },
    {
        "WhyChooseheading": "Hassle-Free Booking Process",
        "WhyChoosedescription": "Booking a car for your Pune to Mumbai journey is easy with Vedant Travels. You can book online through our website or mobile app, or contact our customer service team for personalized assistance."
    },
    {
        "WhyChooseheading": "Customized Travel Packages",
        "WhyChoosedescription": "We offer tailored travel packages for your Pune to Mumbai car hire, whether you're traveling solo, with family, or for business. Let us know your requirements, and we’ll adjust the trip to suit your preferences."
    }
]









    }


    const faqData = [
        {
            id: 1,
            question: 'How can I book a Pune to Mumbai car hire with Vedant Travels?',
            answer: 'You can book a car easily via our website or mobile app. Alternatively, you can contact our customer service team for assistance with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance car hires?',
            answer: 'Yes, all our drivers are highly trained and experienced in handling long-distance car hires, ensuring a smooth and safe journey from Pune to Mumbai.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Pune to Mumbai car hire?',
            answer: 'We offer a variety of vehicles for your convenience, including sedans, SUVs, and premium cars. All vehicles are clean, well-maintained, and equipped with modern amenities.',
        },
        {
            id: 4,
            question: 'How do I pay for my Pune to Mumbai car hire?',
            answer: 'We accept multiple payment options, including cash, credit/debit cards, and online payments via our app, providing flexibility and convenience in the payment process.',
        },
        {
            id: 5,
            question: 'Can I book a round trip for Pune to Mumbai and back?',
            answer: 'Yes, you can book a round-trip car hire. Just provide your return details during the booking process, and we’ll handle the arrangements.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any extra charges for waiting or detours will be communicated to you beforehand. Our transparent pricing ensures there are no hidden costs.',
        },
        {
            id: 7,
            question: 'Can I hire a car for sightseeing in Mumbai?',
            answer: 'Yes, we offer customized sightseeing tours in Mumbai as part of your car hire. Explore the city\'s famous landmarks like the Gateway of India, Marine Drive, and more, with the convenience of a personal driver.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Pune to Mumbai car hire?',
            answer: 'Our vehicles can accommodate standard luggage. If you have special luggage requirements, please inform us at the time of booking, and we’ll make the necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel between Pune and Mumbai?',
            answer: 'Yes, we provide corporate car hire services, tailored for business meetings, conferences, and team outings. We offer flexible packages to suit your company’s needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for Pune to Mumbai car hire?',
            answer: 'Vedant Travels offers reliable, affordable, and comfortable car hire services. With professional drivers, well-maintained vehicles, and transparent pricing, we guarantee a safe and stress-free journey for all your travel needs.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rajesh Desai",
            title: "Customer",
            quote: "I hired a car from Vedant Travels for a business trip from Pune to Mumbai. The service was impeccable. The driver was professional, and the vehicle was extremely comfortable. Highly recommend them for anyone looking for reliable car hire services!",
            rating: 5,
        },
        {
            name: "Mrs. Anita Kumar",
            title: "Customer",
            quote: "Our family used Vedant Travels for a one-way car hire from Pune to Mumbai. The vehicle was spacious and clean, and the driver was friendly and punctual. It was a great experience, and we’ll definitely use their services again!",
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
        "name": "Pune Mumbai Car Hire | Vedant Travels",
        "description": "Book reliable car hire services for Pune to Mumbai with Vedant Travels. Choose from a range of vehicles like Innova Crysta, Ertiga, and more for a comfortable journey. We offer affordable rates for one-way, round-trip, and airport transfers. Enjoy a smooth and safe ride with our private, professional drivers.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "2000"
        }
      };

    return (
        <div>
           
       

<Helmet>
  <title>Pune Mumbai Car Hire | Vedant Travels | Contact: +91 8177869909</title>
  <meta name="description" content="Looking for reliable car hire services from Pune to Mumbai? Book with Vedant Travels for affordable rates and quality vehicles like Innova Crysta, Ertiga, and more. Available for one-way, round-trip, and airport drop services." />
  <meta name="keywords" content="mumbai pune car rental services, pune mumbai pune car rental, pune mumbai innova rental, Pune Mumbai Vedant Travels Car Hire, pune to mumbai cab hire, pune to mumbai drop cab, pune to mumbai private cab, pune to mumbai taxi booking, pune mumbai airport car rental, pune to mumbai darshan cab, pune to mumbai car rental, pune to mumbai car booking, pune to mumbai car on rent, pune to mumbai car hire charges, pune to mumbai ertiga cab, Pune to Mumbai Innova Cab, Pune mumbai car rental, Pune to mumbai cab one way cab pune to mumbai, Pune to mumbai cheapest cab, Pune to mumbai cab fare, Pune to mumbai cab charges, Pune to mumbai cab price, Pune to mumbai innova cab, Pune to mumbai taxi one way, Pune to mumbai cab booking, Pune mumbai cabs, Pune to mumbai airport drop innova, pune mumbai pune cab, Pune to mumbai airport cabs" />
  <meta name="robots" content="index, follow" />
  <link rel="canonical" href="https://www.vedanttravels.in/pune-mumbai-car-hire" />
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
                            <img src='./images/keyword/5.jpg' alt='img' />
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

export default Punetomumbaicabhire;