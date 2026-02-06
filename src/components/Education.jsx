import React from "react";
import Footer from "./Footer";

export default function EducationCareer() {
  return (
    <>
      <main className="education-page">
        {/* Header */}
        <header className="education-header">
          <h1>Education & Career</h1>
          <p>
            Learn with confidence. Grow with purpose. Build a career that gives
            you independence, dignity, choice, and financial freedom because
            every woman deserves to write her own future.
          </p>
        </header>

        <section className="education-content">
          {/* Learning */}
          <article className="education-section">
            <h2>Learning Without Limits</h2>
            <p>
              Education is power but only when it is accessible, flexible, and
              relevant. Many women in India face barriers: early marriage,
              financial constraints, household responsibilities, lack of nearby
              colleges, or fear of judgment when returning to studies after a
              break. empowHER exists to break those barriers.
            </p>
            <p>
              Whether you are starting from zero, restarting after years, or
              upskilling for a better job, learning should feel possible and
              exciting not stressful or out of reach.
            </p>
            <ul>
              <li>
                <strong>Free & low-cost platforms</strong> - NPTEL, SWAYAM,
                Coursera (audit mode), Google Skillshop, Microsoft Learn, Khan
                Academy, YouTube channels like CodeWithHarry, Apna College,
                Jenny’s Lectures
              </li>
              <li>
                <strong>Skill-based certifications</strong> - Google Career
                Certificates (Data Analytics, Digital Marketing, UX Design), AWS
                Cloud Practitioner, Meta Social Media Marketing, many are free
                or under ₹1500
              </li>
              <li>
                <strong>Digital literacy & confidence</strong> - Basic computer
                skills, internet safety, using Google Workspace / MS Office,
                email writing, LinkedIn profile building
              </li>
              <li>
                <strong>Support for returning learners</strong> - flexible
                timings, self-paced courses, peer communities, scholarships
                (e.g., PMKVY, State Skill Development schemes)
              </li>
            </ul>
            <p>
              Start small. Even 30 minutes a day adds up. You don’t need to be
              perfect, you just need to begin.
            </p>
          </article>

          {/* Career Guidance */}
          <article className="education-section">
            <h2>Career Guidance & Direction</h2>
            <p>
              Feeling stuck, confused, or scared to take the next step is
              completely normal especially when society expects women to
              prioritise family over ambition. empowHER is here to help you
              explore, plan, and move forward at your own pace and on your own
              terms.
            </p>
            <p>
              Career decisions are not about finding “the perfect job”
              overnight. They are about discovering what energises you, matches
              your strengths, and gives you financial independence and respect.
            </p>
            <ul>
              <li>
                <strong>Self-discovery</strong> - Understand your interests
                (creative, analytical, people-oriented?), skills, values, and
                non-negotiables (flexible hours, remote work, safety)
              </li>
              <li>
                <strong>Realistic paths in India</strong> - Government jobs
                (SSC, Banking, Railways), IT & tech roles (coding, testing,
                support), content creation, freelancing (Upwork, Fiverr),
                teaching, healthcare, entrepreneurship
              </li>
              <li>
                <strong>Resume & interviews</strong> - ATS-friendly resumes,
                powerful LinkedIn profiles, common interview questions &
                answers, salary negotiation scripts, how to handle “gap years”
                confidently
              </li>
              <li>
                <strong>Re-entering workforce</strong> - How to explain career
                breaks, upskill quickly, find women-friendly companies (flexible
                policies, returnship programs like Goldman Sachs, Amazon,
                Deloitte)
              </li>
            </ul>
            <p>
              You don’t have to follow someone else’s path. The best career is
              the one that lets you live with dignity, support your family if
              you want, and still have space for yourself.
            </p>
          </article>

          {/* Mentorship */}
          <article className="education-section">
            <h2>Mentorship & Support</h2>
            <p>
              Growth accelerates when you have someone who has walked the path
              before you — someone who understands the unique challenges women
              face in education and careers in India: family expectations,
              safety concerns, lack of role models, imposter syndrome, pay gaps,
              and more.
            </p>
            <p>
              Mentorship is not about someone telling you what to do it’s about
              listening, asking powerful questions, sharing real experiences,
              giving honest feedback, and reminding you of your worth when you
              forget it.
            </p>
            <ul>
              <li>Learn from women who succeeded despite obstacles</li>
              <li>Get clarity during career confusion or major decisions</li>
              <li>
                Build confidence through shared stories and practical advice
              </li>
              <li>Access safe, respectful, and confidential guidance</li>
              <li>
                Expand your network many mentors open doors you didn’t even know
                existed
              </li>
            </ul>
            <p className="coming-note">
              Mentorship programs will be launched soon - stay tuned! In the
              meantime, join our community groups for peer support and
              inspiration.
            </p>
          </article>

          {/* Skills */}
          <article className="education-section">
            <h2>Skills for the Future</h2>
            <p>
              Degrees matter but skills matter more in today’s world. The jobs
              of tomorrow reward people who can adapt, communicate, solve
              problems, and use technology confidently regardless of where or
              when they learned.
            </p>
            <p>
              empowHER focuses on high-impact, future-proof skills that are in
              demand in India and globally, many of which can be learned online
              for free or very low cost.
            </p>
            <ul>
              <li>
                <strong>Communication & leadership</strong> - Clear emails,
                confident speaking, negotiation, handling difficult
                conversations, leading teams
              </li>
              <li>
                <strong>Digital & tech skills</strong> - MS Excel (advanced),
                Google Sheets, Canva, basic coding (Python, HTML/CSS), AI tools
                (ChatGPT, Midjourney)
              </li>
              <li>
                <strong>Problem-solving & critical thinking</strong> -
                Analytical thinking, decision-making, time management, handling
                ambiguity
              </li>
              <li>
                <strong>Professional confidence</strong> - Personal branding,
                LinkedIn networking, salary negotiation, dealing with
                bias/microaggressions
              </li>
              <li>
                <strong>Entrepreneurial mindset</strong> - Starting small side
                hustles (Instagram shops, freelancing, tutoring, content
                creation)
              </li>
            </ul>
            <p>
              You don’t need a fancy college or years of experience. You need
              consistent learning, courage to apply what you learn. Start today
              even 20 minutes counts.
            </p>
          </article>

          {/* Encouragement */}
          <article className="education-section education-quote">
            <p>
              “Education is the passport to the future, and tomorrow belongs to
              those who prepare for it today.”
              <br />
              <br />
              But more than that it is the key to your freedom, your voice, your
              choices, and your power. Take the first step. We’re walking with
              you.
            </p>
          </article>
        </section>

        <Footer />
      </main>
    </>
  );
}
