import React from "react";
import Footer from "./Footer";
import Card from "./Card";

export default function Home(props) {
  return (
    <main className="home">
      {/* Hero / Welcome Section */}
      <section className="hero">
        <h1 className="hero-title">
          Welcome to <span className="highlight">empowHER</span>
        </h1>
        <p className="hero-subtitle">
          A safe and supportive space created to help women grow stronger in
          health, learning, career, safety, money, and community.
        </p>
      </section>

      {/* Main Features Section */}
      <section className="features">
        <h2 className="features-title">Support for Every Stage of Life</h2>

        <div className="cards-container">
          <Card
            heading="Women’s Health Hub"
            subHeading="Find reliable information about reproductive health, mental health,
        period tracking, and feeling good every day."
            onClick={() => props.setPage("womenHealth")}
          />
          <Card
            heading="Education & Career"
            subHeading="Get learning resources, career advice, mentorship ideas, and tips
            to move forward in your job or studies."
            onClick={() => props.setPage("education")}
          />
          <Card
            heading="Health & Fitness Tracking"
            subHeading="Simple ways to track your cycle, plan for pregnancy, and build
            healthy fitness habits."
            onClick={() => props.setPage("healthTracker")}
          />
          <Card
            heading="Safety & Support"
            subHeading="Important resources for dealing with harassment, violence, your
            rights, and where to get real help."
            onClick={() => props.setPage("safety")}
          />
          <Card
            heading="Financial Empowerment"
            subHeading="Learn budgeting, saving, basic money management, and steps toward
            financial freedom."
            onClick={() => props.setPage("finance")}
          />
          <Card
            heading="Community & Inspiration"
            subHeading="Connect with other women, read real stories of strength, share
            experiences, and feel supported."
            onClick={() => props.setPage("community")}
          />
        </div>
      </section>
      <Footer />
    </main>
  );
}
