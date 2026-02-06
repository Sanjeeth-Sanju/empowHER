import React from "react";
import Footer from "./Footer";

export default function WomensHealth() {
  return (
    <>
      <main className="health-page">
        {/* PAGE HEADER */}
        <header className="health-header">
          <h1>Women’s Health Hub</h1>
          <p>
            A comprehensive knowledge hub created to help women understand their
            bodies, mental health, cycles, and daily well-being with depth,
            clarity, and care.
          </p>
        </header>

        {/* CONTENT */}
        <section className="health-content">
          <article id="reproductive" className="health-section">
            <h2>Reproductive Health</h2>

            <h3>Anatomy and Physiology</h3>
            <p>
              The female reproductive system is a complex network of organs and
              hormones that supports menstruation, fertility, pregnancy, and
              overall sexual health. Key internal structures include the ovaries
              (produce eggs and hormones like estrogen and progesterone),
              fallopian tubes (transport eggs), uterus (where a fertilized egg
              implants), cervix, and vagina. External structures include the
              vulva (labia majora/minora, clitoris, vaginal opening). Hormonal
              cycles regulate ovulation and prepare the body for potential
              pregnancy every month.
            </p>
            <div className="image-container">
              <img
                src="https://img.lb.wbmdstatic.com/vim/live/webmd/consumer_assets/site_images/article_thumbnails/BigBead/your-guide-to-female-reproductive-system-bigbead/1800x1200-your-guide-to-female-reproductive-system-bigbead.jpg?resize=750px:*&output-quality=75"
                alt="Labeled diagram of the female reproductive system (lateral view)"
                className="health-image"
              />
              <p className="image-caption">
                Detailed labeled anatomical view of the female reproductive
                system
              </p>
            </div>

            <h3>Common Disorders & Conditions</h3>
            <p>
              Many women experience reproductive health challenges at some
              point. Early awareness and medical support make a big difference.
            </p>
            <ul>
              <li>
                <strong>Endometriosis</strong> - Tissue similar to the uterine
                lining grows outside the uterus, causing severe pain, heavy
                periods, and sometimes infertility.
              </li>
              <li>
                <strong>Polycystic Ovary Syndrome (PCOS)</strong> - Hormonal
                imbalance leading to irregular periods, cysts on ovaries, acne,
                weight gain, and fertility challenges (affects ~1 in 10 women).
              </li>
              <li>
                <strong>Uterine Fibroids</strong> - Non-cancerous growths in the
                uterus that can cause heavy bleeding, pelvic pressure, and pain.
              </li>
              <li>
                <strong>Gynecologic Cancers</strong> - Including cervical,
                ovarian, and uterine cancers; regular screenings (Pap smears,
                HPV tests) are vital for early detection.
              </li>
              <li>
                <strong>Sexually Transmitted Infections (STIs)</strong> -
                Chlamydia, gonorrhea, HPV, herpes — many are treatable but
                require prompt testing and treatment.
              </li>
            </ul>

            <h3>Contraception & Family Planning</h3>
            <p>
              Choosing the right method empowers you to plan your family,
              protect against STIs, and support your reproductive goals. There
              is no one size fits all effectiveness, side effects, convenience,
              and reversibility vary.
            </p>
            <ul>
              <li>
                <strong>Hormonal methods</strong> - Pills, patches, rings,
                hormonal IUDs, injections, implants (very effective, often
                regulate periods, but may cause mood changes or spotting for
                some).
              </li>
              <li>
                <strong>Non-hormonal long-acting</strong> - Copper IUD (up to
                10+ years, hormone-free, highly effective).
              </li>
              <li>
                <strong>Barrier methods</strong> - Condoms (protect against STIs
                + pregnancy), diaphragms, cervical caps.
              </li>
              <li>
                <strong>Fertility awareness methods (FAM)</strong> - Cycle
                tracking, temperature, mucus (natural, but requires consistency;
                less effective with irregular cycles).
              </li>
              <li>
                <strong>Permanent options</strong> - Tubal ligation or vasectomy
                (for partners); ideal when family is complete.
              </li>
              <li>
                <strong>Emergency contraception</strong> - Morning-after pill or
                copper IUD (used after unprotected sex).
              </li>
            </ul>
            <div className="image-container">
              <img
                src="https://beyondthepill.ucsf.edu/wp-content/uploads/2024/11/how_well_es-1024x791.jpg"
                alt="Chart showing effectiveness of different contraception methods"
                className="health-image"
              />
              <p className="image-caption">
                Effectiveness comparison of common contraception methods (higher
                = more effective at preventing pregnancy)
              </p>
            </div>
            <p>
              Consult a healthcare provider to match options to your health,
              lifestyle, and needs. Many are accessible and often
              insurance-covered.
            </p>

            <h3>Preventive Care & When to Seek Help</h3>
            <p>
              Proactive steps catch issues early and support lifelong
              reproductive health. Regular care is empowering.
            </p>
            <ul>
              <li>
                Annual well-woman exams (pelvic exam, breast check, blood
                pressure, screenings)
              </li>
              <li>
                Pap smears / HPV testing (starting ~age 21–25, frequency varies)
              </li>
              <li>
                HPV vaccination (ideally before sexual activity, beneficial up
                to age 45)
              </li>
              <li>
                Breast self-awareness, clinical exams, mammograms (guidelines
                depend on age & risk)
              </li>
              <li>Routine STI screening (especially with new partners)</li>
              <li>Bone density scans (post-menopause or with risk factors)</li>
            </ul>
            <p>
              <strong>Red flags - seek prompt medical advice for:</strong>
            </p>
            <ul>
              <li>Irregular, very heavy, or extremely painful periods</li>
              <li>Persistent pelvic pain</li>
              <li>Unusual discharge, odor, or itching</li>
              <li>Bleeding between periods or after sex</li>
              <li>
                Difficulty conceiving after 12 months (or 6 months if over 35)
              </li>
              <li>Breast changes (lumps, discharge, skin changes)</li>
            </ul>
          </article>

          <article id="mental" className="health-section">
            <h2>Mental & Emotional Health</h2>

            <h3>Common Mental Health Challenges</h3>
            <p>
              Women are nearly twice as likely as men to experience depression
              and anxiety due to hormonal fluctuations, life roles, and societal
              pressures. Recognizing signs early allows for effective support.
            </p>
            <ul>
              <li>
                <strong>Depression</strong> - Persistent sadness, low energy,
                loss of interest, sleep/appetite changes.
              </li>
              <li>
                <strong>Anxiety Disorders</strong> - Excessive worry,
                restlessness, panic attacks, physical symptoms like racing
                heart.
              </li>
              <li>
                <strong>Postpartum Depression</strong> - Intense sadness or
                detachment after childbirth (affects 1 in 7 new mothers).
              </li>
              <li>
                <strong>Eating Disorders & PTSD</strong> - Often linked to
                trauma, body image, or societal expectations.
              </li>
            </ul>

            <h3>Hormonal & Life-Stage Influences</h3>
            <p>
              Estrogen and progesterone affect mood across puberty, menstrual
              cycles, pregnancy, postpartum, and menopause. Conditions like PMDD
              (severe PMS) or perimenopausal mood swings are real and treatable.
            </p>

            <h3>Self-Care & Support Strategies</h3>
            <p>
              Therapy, mindfulness, exercise, connections, journaling, and
              medication (when needed) are powerful tools. Reaching out is
              strength, you are not alone.
            </p>
            <ul>
              <li>
                Professional support - therapy (CBT, talk), counseling,
                psychiatry
              </li>
              <li>
                Daily practices - 5–10 min meditation, deep breathing, grounding
              </li>
              <li>Movement - gentle walks, yoga to ease tension</li>
              <li>Social support - friends, groups, online communities</li>
              <li>Boundaries - protect your energy by saying no when needed</li>
              <li>
                Creative outlets - art, music, writing for emotional processing
              </li>
            </ul>
          </article>

          <article id="cycle" className="health-section">
            <h2>Period Tracking & Body Awareness</h2>

            <h3>Understanding Your Menstrual Cycle</h3>
            <p>
              The average cycle lasts 28 days (normal range: 21–35 days), with
              four phases: menstrual, follicular, ovulation, and luteal.
              Tracking reveals your unique patterns in energy, mood, and
              symptoms.
            </p>
            <div className="image-container">
              <img
                src="https://media.geeksforgeeks.org/wp-content/uploads/20240408111524/Diagram-of-Menstrual-Cycle.png"
                alt="Labeled diagram of the menstrual cycle phases with hormones and uterine changes"
                className="health-image"
              />
              <p className="image-caption">
                Detailed diagram of the menstrual cycle phases, hormones, and
                ovarian/uterine changes
              </p>
            </div>

            <h3>How to Track Effectively</h3>
            <p>Use apps (Clue, Flo, etc.), calendars, or journals to log:</p>
            <ul>
              <li>
                Period start/end dates, flow intensity (light/medium/heavy),
                duration
              </li>
              <li>
                Symptoms (cramps, bloating, headaches, mood, energy, cravings)
              </li>
              <li>
                Basal body temperature (rise after ovulation), cervical mucus
                (optional for fertility awareness)
              </li>
              <li>Sexual activity, spotting, medications affecting cycle</li>
            </ul>

            <h3>Benefits of Body Literacy</h3>
            <p>
              Predict periods/ovulation, spot irregularities (e.g., PCOS signs),
              plan around your cycle, improve doctor communication, feel more in
              control.
            </p>

            <h3>When to Consult a Doctor</h3>
            <p>
              Very irregular cycles, extremely heavy/painful periods, missed
              periods (not pregnancy), or sudden changes deserve professional
              attention.
            </p>
          </article>

          <article id="wellness" className="health-section">
            <h2>Daily Wellness & Self-Care</h2>

            <h3>Building a Sustainable Routine</h3>
            <p>
              Small, consistent habits create lasting well-being. Prioritize
              what feels nourishing, not perfection.
            </p>

            <h3>Physical Self-Care Essentials</h3>
            <ul>
              <li>
                Daily movement (walking, yoga, dance - 20–30 mins most days)
              </li>
              <li>7–9 hours of quality sleep (consistent schedule helps)</li>
              <li>
                Hydration (2–3 liters water/day) and balanced nutrition (whole
                foods, protein, healthy fats)
              </li>
              <li>Stretching or gentle exercise for tension release</li>
              <li>Posture/ergonomics check-ins if desk-bound</li>
            </ul>

            <h3>Emotional & Mental Nourishment</h3>
            <p>
              Practice gratitude, journal, set boundaries, connect, meditate
              (even 5 minutes), enjoy hobbies. Self-care is essential, not
              selfish.
            </p>
            <ul>
              <li>Gratitude (note 3 things daily)</li>
              <li>Journaling to process emotions</li>
              <li>Healthy boundaries</li>
              <li>Meaningful connections (calls, meetups)</li>
              <li>Short meditation or breathwork</li>
              <li>Hobbies that spark joy (reading, crafting, music)</li>
            </ul>
            <div className="image-container">
              <img
                src="https://thumbs.dreamstime.com/b/pretty-woman-morning-routine-infographics-meditation-hygiene-healthy-breakfast-planning-choosing-wardrobe-234644132.jpg"
                alt="Infographic of daily self-care habits for women including meditation, breakfast, planning"
                className="health-image"
              />
              <p className="image-caption">
                Visual overview of nourishing daily self-care habits
              </p>
            </div>

            <h3>Community & Support Reminder</h3>
            <p>
              You are part of a powerful network of women supporting each other
              every day.
            </p>
          </article>
        </section>

        <Footer />
      </main>
    </>
  );
}
