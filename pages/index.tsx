import type { NextPage } from "next";
import { client, urlFor } from "../lib/sanity";
import Head from "next/head";

const Home: NextPage = ({
  experiences,
  services,
  works,
  featured,
  seo,
}: any) => {
  const seoData = seo[0];

  return (
    <>
      {/* <!--==================== HEADER ====================--> */}
      <header className="header" id="header"></header>

      {/* <!--==================== MAIN ====================--> */}
      <main className="main">
        {/* <!--==================== HOME ====================--> */}
        <section className="home section" id="home"></section>

        {/* <!--==================== SKILLS ====================--> */}
        <section className="skills section" id="skills"></section>

        {/* <!--==================== QUALIFICATION ====================--> */}
        <section className="qualification section" id="qualification"></section>

        {/* <!--==================== SERVICES ====================--> */}
        <section className="services section" id="services"></section>

        {/* <!--==================== PROJECTS ====================--> */}
        <section className="projects section" id="projects"></section>

        {/* <!--==================== TESTIMONIAL ====================--> */}
        <section className="testimonial section"></section>

        {/* <!--==================== CONTACT ====================--> */}
        <section className="contact section" id="contact"></section>
      </main>

      {/* <!--==================== FOOTER ====================--> */}
      <footer className="footer"></footer>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const queryExperiences = `*[_type == "experiences" && published == true] | order(order desc) {
    company,
    position,
    period,
    desc[],
    published,
  }`;

  const queryServices = `*[_type == "services"] {
    title,
    description,
    icon,
  }`;

  const queryWorks = `*[_type == "works" && featured != true] | order(updatedAt desc) {
    title,
    description,
    projectLink,
    codeLink,
    featured,
    imgUrl,
    tags[],
  }`;

  const queryFeatured = `*[_type == "works" && featured == true] | order(updatedAt desc) {
    title,
    description,
    projectLink,
    codeLink,
    imgUrl,
    tags[],
  }`;

  const querySeo = `*[_type == "seo"] {
    title,
    description,
    image,
    url,
    twitterUsername
  }`;

  const services = await client.fetch(queryServices);
  const experiences = await client.fetch(queryExperiences);
  const works = await client.fetch(queryWorks);
  const featured = await client.fetch(queryFeatured);
  const seo = await client.fetch(querySeo);

  return {
    props: { experiences, services, works, featured, seo },
  };
};
