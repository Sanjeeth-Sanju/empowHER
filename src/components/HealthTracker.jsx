import React from "react";
import Footer from "./Footer";
import MenstrualTracker from "./MenstrualTracker";

export default function HealthFitness() {
  return (
    <>
      <main className="fitness-page">
        {/* Enhanced Header */}
        <header className="fitness-header">
          <div className="header-content">
            <h1>Health & Fitness Tracking</h1>
            <p>
              Empower yourself with simple, intuitive tools to understand your
              cycle, build better habits, and feel in control of your wellness
              journey.
            </p>
          </div>
        </header>

        {/* Tools Grid - Improved layout */}
        <section className="fitness-tools">
          {/* Menstrual Tracker - Featured card */}
          <div className="tracker-feature-card">
            <div className="card-content">
              <h2>Menstrual Cycle Tracker</h2>
              <MenstrualTracker />
            </div>
          </div>

          {/* Coming Soon Cards - Teaser style */}
          <div className="fitness-card coming-soon">
            <div className="card-icon">🏃‍♀️</div>
            <h3>Daily Activity Tracker</h3>
            <p>
              Steps, workouts, calories - coming soon with progress visuals and
              goals.
            </p>
          </div>

          <div className="fitness-card coming-soon">
            <div className="card-icon">😴</div>
            <h3>Sleep Tracker</h3>
            <p>Log sleep quality, duration & patterns - coming soon.</p>
          </div>

          <div className="fitness-card coming-soon">
            <div className="card-icon">💧</div>
            <h3>Water Intake Tracker</h3>
            <p>Hydration reminders & daily progress - coming soon.</p>
          </div>
        </section>

        <Footer />
      </main>
    </>
  );
}
