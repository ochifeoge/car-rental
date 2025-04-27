export const baseUrl = import.meta.env.BASE_URL;

export const menu: { name: string; link: string }[] = [
  {
    name: "demos",
    link: "/demos",
  },
  {
    name: "who we are",
    link: "/about",
  },
  {
    name: "shop",
    link: "/shop",
  },
  {
    name: "blog",
    link: "/blog",
  },
];

export const trust: { heading: string; text: string }[] = [
  {
    heading: "Varieties of cars",
    text: "We have a wide range of cars to choose from, including sedans, SUVs, trucks, and moreso you can find the perfect car for your needs and budget.",
  },
  {
    heading: "Competitive pricing",
    text: "At our car shop, we are committed to providing our customers with exceptional service and competitive pricing.",
  },
  {
    heading: "24/7 support",
    text: "Our team is available 24/7 to assist you with any questions or concerns you may have.",
  },
];

export interface Car {
  src: string;
  model: string;
  price: string;
  msap: string;
}

export const carNames = [
  "Crossover & SUVs",
  "Cars",
  "hybrid",
  "Electric",
  "Sport Cars",
];

export const carDetails = [
  [
    {
      src: baseUrl + "/car-asset/nexaro-electra.png",
      model: "Nexaro electra",
      price: "35700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/velocevo.png",
      model: "Velocevo Stellaris",
      price: "135700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/nexaro.png",
      model: "Nexaro CG6",
      price: "82700",
      msap: "43.2",
    },
    {
      src: baseUrl + "/car-asset/Arcticon.png",
      model: "Arcticon Aurora",
      price: "5700",
      msap: "63.2",
    },
  ],
  [
    {
      src: baseUrl + "/car-asset/nexaro.png",
      model: "Nexaro electra",
      price: "35700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/velocevo.png",
      model: "Velocevo Stellaris",
      price: "135700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/Arcticon.png",
      model: "Nexaro CG6",
      price: "82700",
      msap: "43.2",
    },
    {
      src: baseUrl + "/car-asset/nexaro-electra.png",
      model: "Arcticon Aurora",
      price: "5700",
      msap: "63.2",
    },
  ],
  [
    {
      src: baseUrl + "/car-asset/nexaro-electra.png",
      model: "Nexaro electra",
      price: "35700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/velocevo.png",
      model: "Velocevo Stellaris",
      price: "135700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/nexaro.png",
      model: "Nexaro CG6",
      price: "82700",
      msap: "43.2",
    },
    {
      src: baseUrl + "/car-asset/Arcticon.png",
      model: "Arcticon Aurora",
      price: "5700",
      msap: "63.2",
    },
  ],
  [
    {
      src: baseUrl + "/car-asset/nexaro-electra.png",
      model: "Nexaro electra",
      price: "35700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/Arcticon.png",
      model: "Velocevo Stellaris",
      price: "135700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/velocevo.png",
      model: "Nexaro CG6",
      price: "82700",
      msap: "43.2",
    },
    {
      src: baseUrl + "/car-asset/nexaro.png",
      model: "Arcticon Aurora",
      price: "5700",
      msap: "63.2",
    },
  ],
  [
    {
      src: baseUrl + "/car-asset/Arcticon.png",
      model: "Nexaro electra",
      price: "35700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/velocevo.png",
      model: "Velocevo Stellaris",
      price: "135700",
      msap: "23.2",
    },
    {
      src: baseUrl + "/car-asset/nexaro-electra.png",
      model: "Nexaro CG6",
      price: "82700",
      msap: "43.2",
    },
    {
      src: baseUrl + "/car-asset/nexaro.png",
      model: "Arcticon Aurora",
      price: "5700",
      msap: "63.2",
    },
  ],
];
export interface TestimonialsType {
  name: string;
  text: string;
  img: string;
}

export const testimonials: TestimonialsType[] = [
  {
    name: "John Doe",
    text: "I had a great experience buying my car from this shop. The staff was friendly and knowledgeable, and they helped me find the perfect car for my needs. I would highly recommend them to anyone looking to buy a car.",
    img: baseUrl + "/car-asset/Ellipse 1.png",
  },
  {
    name: "Jane Smith",
    text: "I was impressed with the selection of cars available at this shop. They had a wide range of makes and models to choose from, and the prices were very competitive. I will definitely be back for my next car purchase.",
    img: baseUrl + "/car-asset/Ellipse 2.png",
  },
  {
    name: "Alice Johnson",
    text: "The buying process was smooth and hassle-free. I appreciated the transparency in pricing and the helpfulness of the staff. Highly recommend!",
    img: baseUrl + "/car-asset/Ellipse 3.png",
  },
  {
    name: "Bob Brown",
    text: "I found the perfect car for my family here. The staff went above and beyond to ensure I was satisfied with my purchase.",
    img: baseUrl + "/car-asset/Ellipse 1.png",
  },
  {
    name: "Bob Brown",
    text: "I found the perfect car for my family here. The staff went above and beyond to ensure I was satisfied with my purchase.",
    img: baseUrl + "/car-asset/Ellipse 1.png",
  },
];

export interface Blogpost {
  title: string;
  type: string;
  img: string;
  date: string;
  excerpt: string;
  link: string;
}

export const blogPosts: Blogpost[] = [
  {
    title: "The Benefits of Buying a Used Car",
    img: baseUrl + "/car-asset/blog-one.png",
    type: "News",
    date: "March 1, 2023",
    excerpt:
      "Buying a used car can be a smart financial decision. In this blog post, we explore the benefits of purchasing a pre-owned vehicle, including cost savings and depreciation advantages.",
    link: "/blog/the-benefits-of-buying-a-used-car",
  },
  {
    title: "Top 10 Tips for First-Time Car Buyers",
    img: baseUrl + "/car-asset/blog-two.png",
    type: "Automobile",
    date: "February 15, 2023",
    excerpt:
      "Are you a first-time car buyer? Check out our top 10 tips to help you navigate the car buying process with confidence and make an informed decision.",
    link: "/blog/top-10-tips-for-first-time-car-buyers",
  },
  {
    title: "How to Maintain Your Car for Longevity",
    img: baseUrl + "/car-asset/blog-three.png",
    type: "Latest",
    date: "January 20, 2023",
    excerpt:
      "Proper maintenance is key to keeping your car running smoothly for years to come. In this post, we share essential tips for maintaining your vehicle and extending its lifespan.",
    link: "/blog/how-to-maintain-your-car-for-longevity",
  },
];

// assets

export const logo: string = baseUrl + "/car-asset/logo.png";
export const carImage: string = baseUrl + "/car-asset/right-featured.png";
export const leftFeaturedCar: string = baseUrl + "/car-asset/left-featured.png";
export const rightFeaturedCar: string = baseUrl + "/car-asset/yellow-car.png";
