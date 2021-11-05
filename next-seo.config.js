const title = "Success Hycenth – Developer, Writer.";
const description =
  "Personal portfolio and resume website for Success Hycenth , a student, developer, writer, and creator.";

const SEO = {
  title,
  description,
  canonical: "https://successhycenth.netlify.app",
  openGraph: {
    type: "website",
    locale: "en_IE",
    url: "https://successhycenth.netlify.app",
    title,
    description,
    images: [
      {
        url: "/mylogo.svg",
        alt: title,
      },
    ],
  },
};

export default SEO;
