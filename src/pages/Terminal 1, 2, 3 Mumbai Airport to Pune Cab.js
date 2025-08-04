
import BusRatesTable from './BusRatesTable';
import './smallkey.css';
import { Helmet } from 'react-helmet';
import TestimonialKeyword from './TestimonialKeyword';
import FAQKeyword from './FAQKeyword';

function Terminalmumbaiairport() {



    const cardData =
    {
        keyword: 'Terminal 1, 2, 3 Mumbai Airport to Pune Cab  ',
        heading: 'Vedant Travels:Terminal 1, 2, 3 Mumbai Airport to Pune Cab  ',
        headingDescription: 'Vedant Travels offers hassle-free and comfortable cab services for your journey from Mumbai Airport (T1, T2, T3) to Pune. Whether you are arriving at Mumbai International Airport for a business trip, vacation, or a family visit, we offer a range of vehicles including sedans, SUVs, and luxury cars. Our well-maintained fleet and professional drivers ensure you have a smooth and safe journey from the airport to Pune.',

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
            "name": "Mumbai Airport Terminal 1 to Pune Cab Fare",
            "description": "Vedant Travels offers affordable and reliable taxi services from Mumbai Airport Terminal 1 to Pune. Enjoy a comfortable ride in well-maintained vehicles like Innova, Ertiga, and Sedans at competitive fares."
        },
        {
            "name": "Mumbai Airport Terminal 2 to Pune Cab",
            "description": "For a smooth and timely journey from Mumbai Airport Terminal 2 to Pune, Vedant Travels offers various vehicle options. Our fleet includes Innova, Ertiga, and Sedan cabs to meet your needs with transparent pricing and professional drivers."
        },
        {
            "name": "Mumbai Airport Terminal 3 to Pune Cab",
            "description": "Traveling from Mumbai Airport Terminal 3 to Pune? Vedant Travels provides seamless taxi services with no hidden charges. Our vehicles, including Innova Crysta, Ertiga, and Sedans, ensure comfort and safety for your trip."
        },
        {
            "name": "Mumbai Domestic Airport Terminal 1 to Pune Cab",
            "description": "For passengers traveling from Mumbai Domestic Airport Terminal 1 to Pune, Vedant Travels offers reliable taxi services. Choose from our fleet of vehicles, including Innova, Ertiga, and Sedans, for a comfortable and punctual journey."
        },
        {
            "name": "Mumbai Domestic Airport Cab",
            "description": "Vedant Travels offers affordable and efficient taxi services from Mumbai Domestic Airport to your desired destinations. Whether you're traveling to Pune or any other location, we have a variety of vehicles available to ensure a comfortable ride."
        },
        {
            "name": "Mumbai International Airport Taxi",
            "description": "For a smooth and hassle-free ride from Mumbai International Airport to Pune, Vedant Travels provides reliable taxi services. We offer a wide range of vehicles including Innova, Ertiga, and Sedans with professional drivers."
        },
        {
            "name": "24x7 Mumbai Airport Cab Booking",
            "description": "Vedant Travels offers 24x7 cab booking services from Mumbai Airport to Pune. Whether it's an early morning or late-night flight, you can count on us for timely, safe, and comfortable transportation."
        },
        {
            "name": "Mumbai Airport Outstation Taxi",
            "description": "Need an outstation taxi from Mumbai Airport to Pune? Vedant Travels provides reliable and comfortable outstation taxi services with a variety of vehicle options. Our professional drivers ensure a smooth journey every time."
        },
        {
            "name": "Mumbai Airport Innova Cabs",
            "description": "For those looking for extra space and comfort, Vedant Travels offers Innova cabs from Mumbai Airport to Pune. With ample legroom, smooth rides, and professional drivers, the Innova is perfect for a comfortable journey."
        },
        {
            "name": "Mumbai Airport Ertiga Taxi",
            "description": "Looking for a budget-friendly yet comfortable option from Mumbai Airport to Pune? Choose our Ertiga taxi service. It offers ample space for small groups and families while ensuring a smooth and pleasant ride."
        },
        {
            "name": "Mumbai Airport Sedan Cab Service",
            "description": "For solo travelers or small groups, Vedant Travels offers Sedan cabs from Mumbai Airport to Pune. Our Sedan cabs provide a comfortable ride, perfect for quick and efficient transportation."
        }
    ],


    "tableData": [
        ["Mumbai Airport Terminal 1 to Pune Cab Fare", "Mumbai Airport Terminal 2 to Pune Cab"],
        ["Mumbai Airport Terminal 3 to Pune Cab", "Mumbai Domestic Airport Terminal 1 to Pune Cab"],
        ["Mumbai Domestic Airport Cab", "Mumbai International Airport Taxi"],
        ["24x7 Mumbai Airport Cab Booking", "Mumbai Airport Outstation Taxi"],
        ["Mumbai Airport Innova Cabs", "Mumbai Airport Ertiga Taxi"],
        ["Mumbai Airport Sedan Cab Service"]
      ],
      "whychoose": [
        {
          "WhyChooseheading": "Reliable and On-Time Service",
          "WhyChoosedescription": "At Vedant Travels, we understand that timely transportation from Mumbai Airport (Terminal 1, 2, 3) to Pune is crucial. Whether you're arriving after a flight or heading to Pune for a business trip, we ensure that your cab is available on time and ready for a seamless transfer. Our professional drivers guarantee that your journey is smooth and punctual."
        },
        {
          "WhyChooseheading": "Comfortable and Spacious Vehicles",
          "WhyChoosedescription": "Our fleet includes a variety of vehicles to suit your preferences and needs. From sedans to SUVs and premium cars, our Mumbai Airport to Pune Cab options are spacious, well-maintained, and equipped with air conditioning, comfortable seating, and ample legroom, ensuring you enjoy a relaxing ride."
        },
        {
          "WhyChooseheading": "Experienced and Professional Drivers",
          "WhyChoosedescription": "All our drivers are highly experienced and well-versed in the best routes from Mumbai Airport (Terminal 1, 2, 3) to Pune. They are professional, courteous, and dedicated to ensuring your comfort and safety during the ride. Your journey will be smooth, safe, and efficient."
        },
        {
          "WhyChooseheading": "Affordable and Transparent Pricing",
          "WhyChoosedescription": "We provide competitive and transparent pricing for Mumbai Airport to Pune Cab services. There are no hidden charges, and we ensure that you are informed about the total fare before the journey begins. We believe in offering a clear and upfront breakdown of the costs."
        },
        {
          "WhyChooseheading": "Safe and Comfortable Journey",
          "WhyChoosedescription": "Your safety is our top priority. All our vehicles are regularly serviced, equipped with modern safety features like airbags, seat belts, and GPS tracking. Our drivers adhere to strict safety protocols, ensuring you have a secure and comfortable journey from Mumbai Airport to Pune."
        },
        {
          "WhyChooseheading": "24/7 Availability",
          "WhyChoosedescription": "Whether you arrive at Mumbai Airport (Terminal 1, 2, 3) early in the morning or late at night, Vedant Travels is available 24/7 to take you to Pune. Our customer service team is always ready to assist you with your booking and any inquiries."
        },
        {
          "WhyChooseheading": "Hassle-Free Booking Process",
          "WhyChoosedescription": "Booking your Mumbai Airport to Pune Cab is easy and convenient. You can book a cab online through our website or mobile app, or you can contact our customer service team directly to assist with your booking and requirements."
        },
        {
          "WhyChooseheading": "Customizable Travel Packages",
          "WhyChoosedescription": "We offer customizable travel packages for your Mumbai Airport to Pune Cab needs. Whether you are traveling solo, with family, or for business, we can tailor your ride according to your specific preferences, ensuring a comfortable and pleasant journey."
        }
      ]



    }



    const faqData = [
        {
            id: 1,
            question: 'How can I book a Mumbai Airport to Pune cab with Vedant Travels?',
            answer: 'You can easily book a cab from Mumbai Airport (Terminal 1, 2, 3) to Pune through our website or mobile app. Alternatively, you can contact our customer service team, who will be happy to assist you with your booking.',
        },
        {
            id: 2,
            question: 'Are the drivers experienced for long-distance travel?',
            answer: 'Yes, all our drivers are highly experienced in handling long-distance routes like Mumbai Airport to Pune. They are familiar with the best routes and traffic conditions to ensure a safe and timely journey.',
        },
        {
            id: 3,
            question: 'What types of vehicles are available for Mumbai Airport to Pune travel?',
            answer: 'We offer a variety of vehicles, including sedans, SUVs, and premium cars, for your Mumbai Airport to Pune Cab. All vehicles are well-maintained, spacious, and designed to provide comfort during your trip.',
        },
        {
            id: 4,
            question: 'How do I pay for my Mumbai Airport to Pune cab rental?',
            answer: 'We accept a range of payment options, including cash, credit/debit cards, and online payments through our app, making it easy for you to pay for your ride.',
        },
        {
            id: 5,
            question: 'Can I book a round-trip cab from Mumbai Airport to Pune?',
            answer: 'Yes, you can book a round-trip cab for your Mumbai Airport to Pune Cab Service. Just provide your return details when booking, and we will arrange everything for you.',
        },
        {
            id: 6,
            question: 'Are there any extra charges for waiting or detours?',
            answer: 'Any additional charges for waiting time or detours will be communicated to you upfront during the booking process. We believe in offering complete transparency regarding pricing.',
        },
        {
            id: 7,
            question: 'Can I hire a cab for sightseeing during my Mumbai Airport to Pune trip?',
            answer: 'Yes, we offer sightseeing options as part of your Mumbai Airport to Pune Cab Service. You can visit popular attractions along the way with the help of our knowledgeable drivers.',
        },
        {
            id: 8,
            question: 'What is the luggage allowance for a Mumbai Airport to Pune cab?',
            answer: 'Our vehicles can comfortably accommodate standard luggage. If you have more luggage or special requirements, please let us know during the booking process, and we will make necessary arrangements.',
        },
        {
            id: 9,
            question: 'Is Vedant Travels available for corporate travel from Mumbai Airport to Pune?',
            answer: 'Yes, we offer corporate travel services for businesses requiring reliable transportation from Mumbai Airport to Pune. Our services are customizable to meet your company’s specific travel needs.',
        },
        {
            id: 10,
            question: 'Why should I choose Vedant Travels for my Mumbai Airport to Pune trip?',
            answer: 'Vedant Travels is known for its reliability, professional drivers, well-maintained vehicles, and transparent pricing. We ensure a comfortable, safe, and stress-free journey for all passengers traveling from Mumbai Airport to Pune.',
        },
    ];
    
    const testimonials = [
        {
            name: "Mr. Rahul Sharma",
            title: "Business Traveler",
            quote: "I traveled from Mumbai Airport (Terminal 2) to Pune, and I had a great experience with Vedant Travels. The driver was waiting for me at the airport on time, and the ride was comfortable and quick. I will definitely choose them again!",
            rating: 5,
        },
        {
            name: "Mrs. Simran Mehta",
            title: "Family Traveler",
            quote: "Our family had a wonderful trip from Mumbai Airport (Terminal 1) to Pune with Vedant Travels. The vehicle was spacious and comfortable, and the driver was courteous and helpful. Highly recommend!",
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
        "name": "Mumbai Airport to Pune Cab Service | Vedant Travels",
        "description": "Book your Mumbai Airport to Pune cab with Vedant Travels. Affordable one-way and round-trip cabs from Terminal 1, 2, and 3, including Innova Crysta, Ertiga, and Sedan. Reliable 24x7 airport taxi services from Mumbai Domestic and International terminals.",
        "aggregateRating": {
          "@type": "AggregateRating",
          "bestRating": "5",
          "worstRating": "1",
          "ratingValue": "4.8",
          "ratingCount": "120"
        },
        "offers": {
          "@type": "Offer",
          "priceCurrency": "INR",
          "price": "3500",
          "eligibleRegion": {
            "@type": "Place",
            "name": "Mumbai"
          },
          "url": "https://www.vedanttravels.in/mumbai-airport-to-pune-cab-service"
        }
      };
      
    


    return (
        <div>
             <Helmet>
        <title>Mumbai Airport to Pune Cab Service | Vedant Travels | Call +91 8177869909</title>
        <meta name="description" content="Book your Mumbai Airport to Pune taxi. Affordable one-way and round-trip cabs from Terminal 1, 2, and 3. Choose from Innova Crysta, Ertiga, Sedan. Reliable 24x7 airport taxi services." />
        <meta name="keywords" content="Mumbai Airport to Pune Cab, Mumbai Domestic Airport to Pune Taxi, Mumbai International Airport to Pune Taxi, Mumbai Terminal 1 to Pune Cab, Mumbai Terminal 2 to Pune Cab, Mumbai Terminal 3 to Pune Cab, 24x7 Mumbai Airport Taxi" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.vedanttravels.in/mumbai-airport-to-pune-cab-service" />
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
                            <img src='./images/keyword/52.jpg' alt='img' />
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

export default Terminalmumbaiairport;