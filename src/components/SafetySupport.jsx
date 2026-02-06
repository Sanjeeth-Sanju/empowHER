import React from "react";
import Footer from "./Footer";

export default function SafetySupport() {
  return (
    <>

      <main className="safety-page">
        {/* Header – same style as health-header & fitness-header */}
        <header className="safety-header">
          <h1>Safety & Support</h1>
          <p>
            At <strong>empowHER</strong>, your safety is our first promise. This
            space is created with care to help every woman feel safe, heard, and
            empowered no matter what you’re facing. You are never alone.
          </p>
        </header>

        {/* Content wrapper – same padding & max-width as health-content */}
        <section className="safety-content">
          {/* Emergency – styled like emergency in previous pages */}
          <article className="safety-section emergency">
            <h2>If You Are in Immediate Danger</h2>
            <p className="empowher-highlight">
              Call for help immediately. Your life matters most.
            </p>

            <p>
              If you are in immediate physical danger, do not hesitate your
              safety comes before anything else. Fear, shame, or worry about
              consequences can make it hard to act, but reaching out in that
              moment can protect you and stop the situation from getting worse.
            </p>

            <p>
              Emergency responders in India are available 24/7 and are trained
              to help quickly. You can call from any phone, even without
              balance, and many services allow silent SOS calls or location
              sharing if you cannot speak.
            </p>

            <div className="helpline-cards">
              <div className="helpline-card">
                <div className="helpline-icon">📞</div>
                <h4>National Emergency</h4>
                <p className="number">100 or 112</p>
                <p>Police / ERSS (24×7)</p>
              </div>

              <div className="helpline-card">
                <div className="helpline-icon">💜</div>
                <h4>empowHER Helpline</h4>
                <p className="number">+91-XXXXXXXXXX</p>
                <p>24×7 WhatsApp & Call Support</p>
              </div>

              <div className="helpline-card">
                <div className="helpline-icon">181</div>
                <h4>Women Helpline</h4>
                <p className="number">181</p>
                <p>National Toll-Free (24×7)</p>
              </div>
            </div>

            <p className="note">
              Message us on WhatsApp at +91-XXXXXXXXXX if you feel safe we
              respond 24/7 with complete confidentiality and care.
            </p>
          </article>

          {/* Promise section – special empowHER touch */}
          <article className="safety-section promise-section">
            <h2>The empowHER Promise</h2>
            <p>
              <i>
                We promise to listen without judgment, support you without
                pressure, and stand beside you until you feel strong again.
                Healing is possible. You deserve safety, respect, and peace.
              </i>
            </p>
            <p className="founder-sign">- Sanjeeth, Founder @empowHER</p>
          </article>

          {/* Gender-Based Violence */}
          <article className="safety-section">
            <h2>Understanding Gender-Based Violence</h2>
            <p>
              Gender-based violence (GBV) is any form of harm - physical,
              sexual, emotional, psychological, economic, or online that is
              directed at someone because of their gender. In India, it affects
              millions of women every year, but it is never normal and it is
              never your fault.
            </p>
            <p>
              Violence often starts small and builds over time: controlling who
              you talk to, constant criticism, threats, isolating you from
              friends/family, or using money to limit your freedom. Recognizing
              these early signs is important, they are not “normal relationship
              problems”; they are abuse.
            </p>
            <ul>
              <li>
                Physical - hitting, pushing, slapping, burning, acid attacks
              </li>
              <li>
                Sexual - forced or non-consensual acts, marital rape, unwanted
                touching
              </li>
              <li>
                Emotional / psychological - humiliation, gaslighting, threats to
                harm you or your children
              </li>
              <li>
                Economic - taking your salary, denying access to money, stopping
                you from working
              </li>
              <li>
                Online / digital - cyberstalking, sharing private photos,
                abusive messages
              </li>
            </ul>
            <p>
              The most important thing to remember: **no behaviour justifies
              violence**. Your clothes, your job, your choices, or staying in a
              relationship do not make you responsible for someone else’s
              actions. The abuser is always 100% responsible.
            </p>
            <p>
              <strong>Legal Protection in India:</strong> The Protection of
              Women from Domestic Violence Act, 2005 (PWDVA) is one of the
              strongest laws for survivors of domestic abuse. It allows you to
              get:
            </p>
            <ul>
              <li>
                Protection orders - stopping the abuser from contacting or
                coming near you
              </li>
              <li>
                Residence rights - you can stay in your shared home even if it’s
                in his name
              </li>
              <li>Monetary relief - maintenance for you and your children</li>
              <li>Counselling and shelter support</li>
            </ul>
            <p>
              You can file a complaint through a Protection Officer, police
              station, or directly at a magistrate court. Many districts also
              have One Stop Centres (Sakhi) that provide free medical care,
              legal help, police assistance, and counselling all in one place.
            </p>
          </article>

          {/* Workplace Harassment */}
          <article className="safety-section">
            <h2>Workplace Harassment</h2>
            <p>
              Workplace harassment includes any unwelcome behaviour sexual or
              non-sexual that makes you feel uncomfortable, humiliated,
              intimidated, or creates a hostile work environment. It can be
              verbal, physical, visual, or online.
            </p>
            <p>
              Examples include inappropriate comments about your appearance,
              unwanted touching, sharing sexual jokes, asking for sexual
              favours, sending explicit messages, displaying offensive material,
              or excluding/promoting you based on refusal to comply.
            </p>
            <p>
              Many women face this silently because they fear losing their job,
              being blamed, or facing retaliation. But the law is on your side 
              you have clear rights and protections.
            </p>
            <p>
              <strong>Key Law:</strong> Sexual Harassment of Women at Workplace
              (Prevention, Prohibition and Redressal) Act, 2013 (POSH Act)
            </p>
            <ul>
              <li>
                Every organization with 10+ employees must have an Internal
                Committee (IC)
              </li>
              <li>
                You can file a complaint (written or verbal) with the IC within
                3 months
              </li>
              <li>
                The IC must investigate fairly, maintain confidentiality, and
                complete inquiry within 90 days
              </li>
              <li>
                Employer must prevent retaliation and ensure a safe environment
              </li>
              <li>
                If no IC exists or you don’t feel safe, approach the Local
                Committee at district level
              </li>
              <li>
                Online complaints can be filed through SHe-Box portal (Ministry
                of Women & Child Development)
              </li>
            </ul>
            <p>
              If you are unsure how to proceed, empowHER can guide you
              step-by-step anonymously if you prefer so you can decide what
              feels safe for you.
            </p>
          </article>

          {/* Legal Rights */}
          <article className="safety-section">
            <h2>Your Legal Rights in India</h2>
            <p>
              Indian law provides strong protections for women facing violence,
              harassment, or abuse. Knowing your rights gives you power and
              you do not have to fight alone.
            </p>
            <ul>
              <li>
                <strong>Right to file a complaint</strong>: You can go to any
                police station to lodge an FIR (even zero FIR at any station).
                For sexual offences, a woman officer should record your
                statement.
              </li>
              <li>
                <strong>Right to free legal aid</strong>: If you cannot afford a
                lawyer, the District Legal Services Authority (DLSA) provides
                free legal help and representation.
              </li>
              <li>
                <strong>Right to protection</strong>: Courts can issue
                protection orders to stop the abuser from contacting you,
                entering your home/workplace, or harming you/children.
              </li>
              <li>
                <strong>Right to medical & psychological support</strong>: Free
                treatment at government hospitals; counselling and shelter
                through One Stop Centres (Sakhi).
              </li>
              <li>
                <strong>Right to privacy</strong>: Your identity must be
                protected media and public disclosure of your name is illegal
                in many cases.
              </li>
              <li>
                <strong>Right to compensation</strong>: Victim Compensation
                Scheme or Nirbhaya Fund schemes can provide financial support
                for medical costs, lost income, or rehabilitation.
              </li>
            </ul>
            <p>
              Many survivors feel scared, guilty, or overwhelmed when thinking
              about legal steps. That is completely normal. You don’t have to
              decide everything today. Start small talk to someone trusted,
              call a helpline, or reach out to empowHER. We will help you
              understand each option at your pace.
            </p>
          </article>

          {/* Reach Out */}
          <article className="safety-section reach-out">
            <h2>Reach Out to empowHER</h2>
            <p>
              We created empowHER because we believe no woman should face fear,
              violence, or silence alone. Whether you want to talk, ask
              questions, understand your rights, or just need someone to listen
              we are here for you, 24/7, with complete care, confidentiality,
              and zero judgment.
            </p>
            <div className="contact-boxes">
              <div className="contact-box">
                <h4>WhatsApp / Call</h4>
                <p className="contact-detail">+91-XXXXXXXXXX</p>
              </div>
              <div className="contact-box">
                <h4>Email</h4>
                <p className="contact-detail">support@empowher.in</p>
              </div>
              <div className="contact-box">
                <h4>Chat Support</h4>
                <p className="contact-detail">Coming soon — 24/7 chatbot</p>
              </div>
            </div>
            <p className="note">
              You can reach out anonymously. No question is too small, no story
              is too heavy. We are listening, whenever you are ready.
            </p>
          </article>
        </section>

        <Footer />
      </main>
    </>
  );
}
