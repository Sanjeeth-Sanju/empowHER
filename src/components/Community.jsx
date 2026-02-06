import React, { useState } from "react";
import Footer from "./Footer";

export default function CommunityInspiration() {
  const [story, setStory] = useState("");
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [userStories, setUserStories] = useState([]);

  const handleSubmit = () => {
    if (story.trim() !== "") {
      setSubmitted(true);
      if (consent) {
        setUserStories([...userStories, story]);
      }
      setStory("");
      setConsent(false);
    }
  };

  // 5 Real-life inspiring stories of Indian women
  const realStories = [
    {
      title: "Savitribai Phule: Pioneer of Girls' Education",
      content:
        "Savitribai Phule, born in 1831 in Maharashtra, was a poet, educator, and social reformer. In 1848, she and her husband Jyotirao Phule opened the first school for girls in Pune, defying societal norms that prohibited women's education. Facing severe opposition, including physical attacks, she persisted, teaching untouchable girls and advocating for widow remarriage. Her poems challenged caste and gender discrimination. Savitribai's work laid the foundation for women's education in India, inspiring generations to fight for equality. She passed away in 1897 while serving plague victims.",
    },
    {
      title: "Anandibai Joshi: First Indian Woman Doctor",
      content:
        "Anandibai Joshi, born in 1865 in Maharashtra, became India's first woman to earn a medical degree in Western medicine. Married at age 9, she lost her first child due to lack of medical care, motivating her to study medicine. Despite health issues and societal resistance, she traveled to America and graduated from the Woman's Medical College of Pennsylvania in 1886. Her thesis on obstetrics blended Eastern and Western practices. Tragically, she died of tuberculosis at 21 before practicing, but her determination paved the way for women in medicine in India.",
    },
    {
      title: "Kiran Bedi: First Female IPS Officer",
      content:
        "Kiran Bedi, born in 1949 in Punjab, became India's first woman Indian Police Service (IPS) officer in 1972. A tennis champion turned police reformer, she transformed Delhi's Tihar Jail as Inspector General, introducing education, yoga, and counseling for inmates. Known as 'Crane Bedi' for towing Indira Gandhi's car, she tackled corruption and traffic issues fearlessly. Post-retirement, she founded NGOs for prison reform and anti-corruption. As Lieutenant Governor of Puducherry, she focused on women's safety. Her story shows how one woman can reform systems through courage and innovation.",
    },
    {
      title: "Kiran Mazumdar-Shaw: Biotech Entrepreneur",
      content:
        "Kiran Mazumdar-Shaw, born in 1953 in Bangalore, founded Biocon in 1978 with just ₹10,000 in a garage. Trained as a brewmaster (India's first woman to do so), she pivoted to biotechnology when denied brewing jobs due to gender bias. Starting with enzyme extraction, Biocon grew into one of Asia's largest biopharmaceutical companies, developing affordable insulin and cancer drugs. A self-made billionaire, she overcame funding rejections and regulatory hurdles. Through her foundation, she supports healthcare and education. Her journey proves women can build global empires in male-dominated fields.",
    },
    {
      title: "Laxmi Agarwal: Acid Attack Survivor and Activist",
      content:
        "Laxmi Agarwal, born in 1990 in Delhi, survived a horrific acid attack at age 15 in 2005 by a rejected suitor. Left with severe burns, she faced depression but chose to fight back. She petitioned the Supreme Court, leading to regulations on acid sales and faster trials for victims. Her campaign 'Stop Acid Attacks' raised awareness and supported survivors. Honored with the US State Department's International Women of Courage Award in 2014, her story inspired the film 'Chhapaak' starring Deepika Padukone. Today, Laxmi is a motivational speaker, proving resilience can spark nationwide change.",
    },
  ];

  return (
    <>
      <main className="community-page">
        {/* Header */}
        <header className="community-header">
          <h1>Community & Inspiration</h1>
          <p>
            Every voice matters. Stories heal. When women share strength,
            courage, and hope - we all grow stronger together.
          </p>
        </header>

        <section className="community-content">
          {/* Real Stories */}
          <article className="community-section">
            <h2>Real Stories of Strength</h2>
            <div className="stories-grid">
              {realStories.map((realStory, index) => (
                <div key={index} className="story-card">
                  <h4>{realStory.title}</h4>
                  <p>{realStory.content}</p>
                </div>
              ))}

              {/* User-submitted stories */}
              {userStories.map((userStory, index) => (
                <div key={`user-${index}`} className="story-card">
                  <h4>Your Shared Story</h4>
                  <p>{userStory}</p>
                </div>
              ))}
            </div>
          </article>

          {/* Uplifting Quotes */}
          <article className="community-section quotes-section">
            <h2>Words That Uplift</h2>
            <p className="quote">
              “The best way to predict the future is to create it.” - Savitribai
              Phule
            </p>
            <p className="quote">“Dream big and dare to fail.” - Kiran Bedi</p>
            <p className="quote">
              “Strength doesn’t come from what you can do; it comes from
              overcoming the things you once thought you couldn’t.” - Laxmi
              Agarwal
            </p>
            <p className="quote">
              “Innovation distinguishes between a leader and a follower.” -
              Kiran Mazumdar-Shaw
            </p>
            <p className="quote">
              “Education is the most powerful weapon which you can use to change
              the world.” - Anandibai Joshi
            </p>
          </article>

          {/* Share Your Story */}
          <article className="community-section share-story">
            <h2>Share Your Story</h2>
            {!submitted ? (
              <>
                <p>
                  Your journey, your voice, your power. Write a short story,
                  experience, or message you want to share with others. Your
                  words can inspire someone else to take that brave step.
                </p>
                <textarea
                  value={story}
                  onChange={(e) => setStory(e.target.value)}
                  placeholder="Type here..."
                />
                <div className="consent-checkbox">
                  <input
                    type="checkbox"
                    checked={consent}
                    onChange={(e) => setConsent(e.target.checked)}
                  />
                  <label>
                    I consent to publish my story anonymously on this page
                  </label>
                </div>
                <button onClick={handleSubmit}>Submit Your Story</button>
              </>
            ) : (
              <p className="thank-you">
                Thank you for sharing your voice! Your story inspires other
                women.
              </p>
            )}
          </article>
        </section>

        <Footer />
      </main>
    </>
  );
}
