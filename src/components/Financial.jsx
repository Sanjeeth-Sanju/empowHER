import React, { useState } from "react";
import Footer from "./Footer";

export default function FinancialEmpowerment() {
  // Simple Budget Calculator State
  const [income, setIncome] = useState("");
  const [expenses, setExpenses] = useState("");
  const [result, setResult] = useState(null);

  const calculateBudget = () => {
    const inc = parseFloat(income);
    const exp = parseFloat(expenses);

    if (isNaN(inc) || isNaN(exp) || inc <= 0 || exp < 0) {
      setResult({ error: "Please enter valid positive numbers." });
      return;
    }

    const savings = inc - exp;
    const savingsPercent = inc > 0 ? ((savings / inc) * 100).toFixed(1) : 0;

    setResult({
      savings: savings.toFixed(2),
      savingsPercent,
      advice:
        savings > 0
          ? "Great! You're saving money. Try aiming for 20% savings as a long-term goal."
          : savings === 0
          ? "You're breaking even look for small ways to reduce expenses or increase income."
          : "You're in deficit. Prioritize needs over wants and consider emergency support if needed.",
    });
  };

  return (
    <>
      <main className="finance-page">
        {/* Header */}
        <header className="finance-header">
          <h1>Financial Empowerment</h1>
          <p>
            Financial independence is freedom. empowHER helps you understand
            money, take control, build security, and grow wealth with clarity,
            confidence, and zero judgment.
          </p>
        </header>

        <section className="finance-content">
          {/* Basics */}
          <article className="finance-section">
            <h2>Understanding Money Basics</h2>
            <p>
              Money feels scary or confusing for many women especially when
              you’ve been taught to avoid it, depend on others for it, or feel
              guilty about wanting more. But financial knowledge is not about
              being “good with numbers”, it’s about having power over your
              life.
            </p>
            <p>
              The foundation is simple: <strong>Income</strong> (money coming
              in), <strong>Expenses</strong> (money going out), and{" "}
              <strong>Savings/Investments</strong> (what you keep or grow). When
              income is greater than expenses, you build security. When expenses
              is greater than income, stress follows.
            </p>
            <p>
              In India, many women face unique challenges: lower pay than men,
              unpaid domestic work, limited access to credit, or family pressure
              to hand over earnings. Recognizing these realities is the first
              step to changing them.
            </p>
            <ul>
              <li>
                <strong>Track income</strong> - Salary, side hustle, pocket
                money, government schemes (PMJDY, Sukanya Samriddhi, etc.)
              </li>
              <li>
                <strong>Separate needs vs wants</strong> - Needs: rent, food,
                transport, health. Wants: dining out, shopping, entertainment
              </li>
              <li>
                <strong>Build an emergency fund</strong> - Aim for 3–6 months of
                living expenses in a safe account
              </li>
              <li>
                <strong>Break money shame</strong> - Talking about money is not
                greedy, it’s responsible
              </li>
            </ul>
            <p>
              Start today: Write down everything you earn and spend in one
              month. Awareness alone changes behaviour.
            </p>
          </article>

          {/* Budgeting */}
          <article className="finance-section">
            <h2>Budgeting Without Stress</h2>
            <p>
              A budget is not punishment it’s a plan for freedom. It tells
              your money where to go instead of wondering where it went. Many
              women in India manage household budgets brilliantly but never get
              credit for it. empowHER wants to turn that skill into personal
              power.
            </p>
            <p>
              Forget complicated spreadsheets start simple. Use the{" "}
              <strong>50-30-20 rule</strong> as a guide: 50% needs, 30% wants,
              20% savings/debt repayment, adjust based on your reality.
            </p>
            <ul>
              <li>
                <strong>Track spending</strong> - Use apps (Money View, Walnut,
                Google Sheets) or just a notebook for 30 days
              </li>
              <li>
                <strong>Plan monthly</strong> - List fixed costs (rent, EMI,
                school fees), variable costs (groceries, transport), and savings
                goal
              </li>
              <li>
                <strong>Build emergency buffer</strong> - Even ₹500–1000/month
                adds up fast
              </li>
              <li>
                <strong>Adjust as life changes</strong> - Pregnancy, job loss,
                marriage, moving cities update your budget accordingly
              </li>
              <li>
                <strong>No guilt</strong> - Budgeting is about choices, not
                deprivation
              </li>
            </ul>
            <p>
              Quick tip: Pay yourself first, transfer savings/investment amount
              the day salary hits your account.
            </p>

            {/* Simple Budget Calculator */}
            <div className="budget-calculator">
              <h3>Quick Budget Check</h3>
              <p>
                Enter your monthly income and expenses to see your savings
                potential.
              </p>

              <div className="calculator-form">
                <label>
                  Monthly Income (₹)
                  <input
                    type="number"
                    value={income}
                    onChange={(e) => setIncome(e.target.value)}
                    placeholder="e.g. 25000"
                  />
                </label>

                <label>
                  Monthly Expenses (₹)
                  <input
                    type="number"
                    value={expenses}
                    onChange={(e) => setExpenses(e.target.value)}
                    placeholder="e.g. 18000"
                  />
                </label>

                <button onClick={calculateBudget}>Calculate</button>
              </div>

              {result && (
                <div className="calculator-result">
                  {result.error ? (
                    <p className="error">{result.error}</p>
                  ) : (
                    <>
                      <p>
                        <strong>Monthly Savings:</strong> ₹{result.savings}
                      </p>
                      <p>
                        <strong>Savings Rate:</strong> {result.savingsPercent}%
                      </p>
                      <p>{result.advice}</p>
                    </>
                  )}
                  <p className="note">
                    This is a simple estimate. Track actual spending for better
                    accuracy.
                  </p>
                </div>
              )}
            </div>
          </article>

          {/* Banking */}
          <article className="finance-section">
            <h2>Banking & Financial Safety</h2>
            <p>
              Having your own bank account is one of the most powerful things a
              woman can do. It gives you privacy, control, and safety
              especially in situations of domestic abuse or family pressure.
            </p>
            <p>
              In India, many women still don’t have accounts in their name or
              fear using them. But banks are legally required to help women open
              accounts independently no spouse or family permission needed.
            </p>
            <ul>
              <li>
                <strong>Zero-balance accounts</strong> - PM Jan Dhan Yojana,
                many banks offer free accounts with no minimum balance
              </li>
              <li>
                <strong>UPI & digital banking</strong> - Google Pay, PhonePe,
                Paytm, BHIM — safe, fast, trackable
              </li>
              <li>
                <strong>Safety tips</strong> - Never share OTP, PIN, or card
                details. Use biometric login. Enable transaction alerts
              </li>
              <li>
                <strong>Spotting scams</strong> - Fake job offers, lottery
                messages, “urgent” bank calls, investment “guaranteed returns” —
                always verify
              </li>
              <li>
                <strong>Joint accounts caution</strong> - If shared with
                spouse/family, ensure you have independent access and visibility
              </li>
            </ul>
            <p>
              Pro tip: Open a separate savings account only in your name - even
              if small deposits and build from there.
            </p>
          </article>

          {/* Work & Income */}
          <article className="finance-section">
            <h2>Work, Income & Independence</h2>
            <p>
              Earning your own money changes everything it brings choice,
              respect, safety, and confidence. Whether you’re starting your
              first job, returning after a break, or exploring side income,
              empowHER is here to support every step.
            </p>
            <p>
              In India, women’s labour force participation is low, but millions
              are breaking barriers - freelancing, entrepreneurship, government
              jobs, tech, teaching, content creation, and more.
            </p>
            <ul>
              <li>
                <strong>Understand payslips</strong> - Basic salary, HRA, PF
                deduction, TDS, net pay — know what you’re really taking home
              </li>
              <li>
                <strong>Side income ideas</strong> - Tutoring, handmade products
                (Etsy/Instagram), freelancing (writing, graphic design, virtual
                assistant), YouTube/TikTok, reselling
              </li>
              <li>
                <strong>Know your rights</strong> - Equal pay, maternity
                benefits (paid leave + job protection), POSH Act protection from
                harassment, minimum wages
              </li>
              <li>
                <strong>Plan for independence</strong> - Start small savings,
                learn investing basics (mutual funds, PPF, SIPs), aim for
                emergency fund
              </li>
            </ul>
            <p>
              Financial independence is not about becoming rich, it’s about
              never having to stay in a harmful situation because of money.
            </p>
          </article>

          {/* Quote */}
          <article className="finance-section finance-quote">
            <p>
              “Financial empowerment is not about how much you earn it’s about
              knowing you have control over your life, your choices, and your
              future. Every rupee saved, every skill learned, every step taken
              is you claiming your power.”
            </p>
          </article>
        </section>

        <Footer />
      </main>
    </>
  );
}
