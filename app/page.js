'use client'
import Link from 'next/link'
import styled from 'styled-components'
import Button from '@/components/Button'

const calendly = 'https://calendly.com/bowieseo/seo-consultation'

export default function Home() {
  return (
    <>
      <header>
        <div className="container">
          <img
            src="/images/dc-seo-consultant.webp"
            className="logo"
            alt="Washington DC SEO Consultant"
            title="Washington DC SEO Consultant"
            width="250px"
            height="auto"
          />
          <nav>
            <ul className="nav">
              <li>
                <Link href="#services">SEO Services</Link>
              </li>
              <li>
                <Link href="#me">Why Me</Link>
              </li>
              <li>
                <Link href="#faq">FAQs</Link>
              </li>
              <li>
                <Link href={calendly}>Book a Consultation!</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className="hero">
          <div className="container">
            <h1 className="title">
              Hello, I’m the #1 Washington DC SEO Consultant
            </h1>
            <div className="subtext">
              <p>
                I help business owners in Washington DC get more traffic, leads,
                and sales with search engine optimization.
              </p>
              <a href={calendly}>
                <Button>Book Your SEO Consultation!</Button>
              </a>
              <p>Let's have a Zoom call and I'll share my screen!</p>
            </div>
          </div>
        </div>
        <section>
          <div className="container">
            <h2 className="title">
              5 Reasons to Work With an DC SEO Consultant
            </h2>
            <p className="subtext">
              Here are some reasons you should work with a DC SEO specialist
            </p>
            <Reason>
              <img
                src="/images/competitors-winning.png"
                className="grid-item-1"
                alt="Competitors winning."
                title="Competitors winning."
                loading="lazy"
              />
              <div className="grid-item-2">
                <h3>#1. Other Businesses are Already Doing SEO</h3>
                <p>
                  Every time you look for your services, you see your
                  competitors on the first page.
                </p>
                <p>Don't believe me?</p>
                <p>
                  Search Google for one of your services and see who comes up
                  first, second, or third.
                </p>
                <p>It's not by chance or by luck.</p>
                <p>They are doing SEO.</p>
                <p>
                  They know how important it is to be easy to find online, so
                  they use SEO strategies to make themselves more visible,
                  attract more customers, and grow their businesses.
                </p>
                <p>
                  If you don't do SEO for your business, you're falling behind
                  and losing customers to your competitors.
                </p>
                <p>
                  Customers are looking for you, but they are finding your
                  competitors instead.
                </p>
                <p>
                  Each day without an SEO plan gives competitors a chance to
                  improve their online presence and reputation.
                </p>
                <p>
                  Also, the longer you wait to start SEO, the more ground you'll
                  need to make up.
                </p>
                <p>
                  SEO is a long-term plan, so don't expect to see results right
                  away.
                </p>
                <p>
                  If your competitors are doing SEO and you're not, it'll be
                  more than just losing customers. It'll be an ongoing loss of
                  market share that will become harder to reclaim.
                </p>
                <p>Now let's talk about the second reason.</p>
              </div>
            </Reason>
            <Reason>
              <img
                src="/images/competition.png"
                className="grid-item-2"
                alt="Gain a competitive edge."
                title="Gain a competitive edge."
                loading="lazy"
              />
              <div className="grid-item-1">
                <h3>
                  #2. You Gain a Competitive Advantage Over Other Businesses
                </h3>
                <p>
                  Putting money into SEO gives your business an edge over your
                  competition and helps you stand out in a crowded market.
                </p>
                <p>
                  A good SEO strategy raises your online visibility and ensures
                  that your business appears near the top of local search
                  results. When you appear at the top, it makes it easier for
                  people to find your business website, which leads to more
                  traffic, leads, and ultimately more sales.
                </p>
                <p>SEO also makes your site easier to use.</p>
                <p>
                  It makes it more likely that people who visit your site will
                  become customers. SEO can also make your business a leader in
                  its field, which can help customers trust you more. It's also
                  important to note that SEO's benefits last for a long time,
                  which makes it a long-term competitive advantage.
                </p>
                <p>
                  In a nutshell, SEO isn't just about keeping up with your
                  competitors; it's about doing better than them and getting a
                  more significant share of your target market.
                </p>
                <p>This brings us to the third reason.</p>
              </div>
            </Reason>
            <Reason>
              <img
                src="/images/rankings.png"
                className="grid-item-1"
                alt="I know what I'm doing."
                title="I know what I'm doing."
                loading="lazy"
              />
              <div className="grid-item-2">
                <h3>#3. More People Will See Your Business on Google</h3>
                <p>
                  When your business shows up on the first page of Google, your
                  web presence grows.
                </p>
                <p>More people will see your business and website.</p>
                <p>
                  When your business is on the first page, it's like being on
                  the main street of a busy city.
                </p>
                <p>More people will see it.</p>
                <p>
                  More people will visit your website if more people know about
                  your business.
                </p>
                <p>
                  And if more people visit your website, you're more likely to
                  get more leads, customers, and sales.
                </p>
                <p>This brings us to the fourth point.</p>
              </div>
            </Reason>
            <Reason>
              <img
                src="/images/leads.png"
                className="grid-item-2"
                alt="Get more leads."
                title="Get more leads."
                loading="lazy"
              />
              <div className="grid-item-1">
                <h3>#4. You Get Leads All Day, Everyday</h3>
                <p>Your website will work around the clock.</p>
                <p>
                  Unlike traditional business models, a well-optimized website
                  is like a salesperson employed 24/7 to bring in new customers.
                </p>
                <p>
                  This persistent lead generation is made possible because SEO
                  improves your visibility on search engines, making your
                  business easily discoverable by people searching for the
                  products or services you offer. These are not just any leads
                  but quality leads, as search engine users are typically
                  actively seeking solutions, making them more likely to
                  convert.
                </p>
                <p>Also, SEO leads are not limited by location. </p>
                <p>Your business can get customers worldwide.</p>
                <p>
                  SEO isn't just a marketing strategy; it's also an essential
                  business tool that ensures your brand and products are visible
                  and brings in leads every hour of every day.
                </p>
                <p>
                  This leads us to our fifth reason why doing SEO is so
                  important.
                </p>
              </div>
            </Reason>
            <Reason>
              <img
                src="/images/reduce-cost.png"
                className="grid-item-1"
                alt="Reduce ad costs."
                title="Reduce ad costs."
                loading="lazy"
              />
              <div className="grid-item-2">
                <h3>#5. SEO is Cheaper than Social Media</h3>
                <p>
                  Unlike social media platforms, where you often have to keep
                  spending money on ads to reach more people, SEO doesn't charge
                  extra per click or impression to bring in organic traffic.
                </p>
                <p>SEO also has effects that last for a longer time.</p>
                <p>
                  A well-ranked page can keep getting visitors for months or
                  even years, while a post on social media might be forgotten in
                  just a few hours or days.
                </p>
                <p>
                  SEO also usually leads to higher-quality traffic since people
                  who find your site through search engines actively look for
                  your products or services, making them more likely to buy from
                  you.
                </p>
                <p>
                  SEO and social media have their uses, but high-quality,
                  long-term traffic from SEO usually gives a better return on
                  investment.
                </p>
                <p>
                  In the end, social media can be a helpful part of your
                  marketing mix, but SEO is often the more cost-effective
                  long-term growth strategy.
                </p>
              </div>
            </Reason>
            <div className="center">
              <a href={calendly}>
                <Button>Book Your SEO Consultation!</Button>
              </a>
            </div>
          </div>
        </section>
        <section id="services">
          <div className="container">
            <h2 className="title">
              My DC SEO Services to Help Grow Your Business
            </h2>
            <Services>
              <Service>
                <img
                  src="/images/one-on-one-consulting.png"
                  className="icon"
                  alt="One on one consulting."
                  loading="lazy"
                />
                <div>
                  <h3>1-on-1 SEO Consulting</h3>
                  <p>
                    Need some help to get real results from search engine
                    optimization?
                  </p>
                  <p>Use the help of a professional.</p>
                  <p>
                    Work one-on-one with a top SEO expert, and I'll help you get
                    to the top of the search results in your city.
                  </p>
                  <p>
                    On a Zoom call, we'll analyze your website together to
                    discover ways to get you to the top of search results.
                  </p>
                  <p>NO B.S.</p>
                </div>
              </Service>
              <Service>
                <img
                  src="/images/local-seo.png"
                  className="icon"
                  alt="Local SEO service."
                  title="Local SEO service."
                  loading="lazy"
                />
                <div>
                  <h3>Local SEO Service</h3>
                  <p>Show up when it really counts the most.</p>
                  <p>That's when people are searching for your services.</p>
                  <p>
                    I'll transform your company website into a machine that
                    brings in leads. You can show up in the map pack and the
                    organic search results, giving you more digital space than
                    your competitors.
                  </p>
                  <p>
                    It doesn't matter if you run a business in Washington, DC,
                    Annapolis, MD, or McLean, VA.
                  </p>
                  <p>
                    No matter if you run a one-person company or a company with
                    a 200 employees, I can help you.
                  </p>
                  <p>
                    You can get the best leads and customers in your industry by
                    dominating the local search results for your city.
                  </p>
                </div>
              </Service>
              <Service>
                <img
                  src="/images/keyword-research.png"
                  className="icon"
                  alt="Link building service."
                  title="Link building service."
                  loading="lazy"
                />
                <div>
                  <h3>Keyword Research Service</h3>
                  <p>
                    Finding the best and most profitable keywords for your
                    business is a careful process that takes time and
                    experience.
                  </p>
                  <p>
                    As an SEO expert, I've learned how to do keyword research to
                    find the most relevant and effective keywords, that bring in
                    leads and customers.
                  </p>
                  <p>
                    With my knowledge, I ensure that the keywords I target align
                    with your business goals. This brings in targeted traffic
                    that will likely turn into paying customers. I know how
                    important it is to attract customers.
                  </p>
                  <p>
                    Through careful keyword analysis and research on your
                    competitors, I find helpful data that can help improve the
                    visibility and reach of your company website. By putting
                    these keywords in your content and optimizing your website's
                    structure, I increase your chances of getting new customers.
                  </p>
                </div>
              </Service>
              <Service>
                <img
                  src="/images/seo-audit.png"
                  className="icon"
                  alt="SEO audit service."
                  title="SEO audit service."
                  loading="lazy"
                />
                <div>
                  <h3>SEO Audit Service</h3>
                  <p>
                    It's been years, and you have yet to figure out why your
                    business doesn't appear in the search results when you
                    search for your services.
                  </p>
                  <p>I understand your frustration, and I can help you.</p>
                  <p>
                    Let's get to the root of the problem by conducting a
                    comprehensive SEO audit for your website.
                  </p>
                  <p>
                    This audit will uncover the obstacles preventing your
                    website from gaining visibility in search results.
                  </p>
                  <p>
                    By analyzing factors such as website structure, content
                    optimization, backlinks, and more, we'll identify what's
                    holding you back and develop a tailored strategy to address
                    those issues.
                  </p>
                  <p>
                    With the insights we get from the SEO audit, we'll implement
                    effective solutions that will increase your online presence
                    and help you get noticed by customers.
                  </p>
                </div>
              </Service>
            </Services>
            <Services>
              <Service>
                <img
                  src="/images/link-building.png"
                  className="icon"
                  alt="Link building service."
                  title="Link building service."
                  loading="lazy"
                />
                <div>
                  <h3>Link Building Service</h3>
                  <p>
                    Does your website have backlinks? Do you know what there
                    are? If you don't have backlinks, chances are you won't rank
                    high on Google.
                  </p>
                  <p>
                    Backlinks are the trust factor that Google uses to rank your
                    site.
                  </p>
                  <p>
                    I'll find and get you the best backlinks that help your
                    business gain trust with my safe link-building methods.
                  </p>
                </div>
              </Service>
              <Service>
                <img
                  src="/images/national.png"
                  className="icon"
                  alt="Link building service."
                  title="Link building service."
                  loading="lazy"
                />
                <div>
                  <h3>National SEO Service</h3>
                  <p>
                    Are you targeting customers across the entire U.S.? I can do
                    that too.
                  </p>
                  <p>
                    I transform Google into your best customer acquisition
                    channel. I do this with an organic SEO strategy, meticulous
                    technical SEO (including user experience and site speed
                    optimization), compelling content marketing, and strategic
                    link building.
                  </p>
                  <p>
                    The result of this comprehensive approach is an exponential
                    boost in your organic website traffic and a substantial
                    improvement in keyword rankings. Simply put, our national
                    SEO strategies are designed not just to meet your
                    expectations, but to surpass them, driving your business
                    forward in the vast digital landscape.
                  </p>
                </div>
              </Service>
            </Services>
            <div className="center">
              <a href={calendly}>
                <Button>Get SEO Help Today</Button>
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <h2 className="title">
              In the Capital Full of SEO Companies, Why Should You Work With Me?
            </h2>
            <Deliverables>
              <img
                src="/images/results.png"
                alt="I focus on results."
                title="I focus on results."
                loading="lazy"
              />
              <div>
                <h3>#1. I Focus on Your Results</h3>
                <p>
                  As an SEO specialist, my primary focus is on delivering
                  tangible results that drive your company forward.
                </p>
                <p>
                  I understand that SEO is not just about rankings and traffic,
                  but about generating leads, increasing sales, and growing your
                  business.
                </p>
                <p>
                  My strategies are designed with this end goal in mind, seeking
                  not just to improve your website's visibility, but to ensure
                  this visibility leads to conversions and more revenue.
                </p>
                <p>
                  I monitor and analyze a different metrics to gauge the
                  effectiveness of my work, adjusting strategies as needed to
                  maximize results. Regular reports keep you informed about
                  these results, clearly illustrating the return on your
                  investment.
                </p>
                <p>
                  I'm committed to holding myself accountable for your success
                  and will not rest until your SEO campaign delivers the impact
                  it should.
                </p>
              </div>
            </Deliverables>
            <Deliverables>
              <img
                src="/images/seo-campaign.png"
                className="grid-item-1"
                alt="I build custom SEO campaigns"
                title="I build custom SEO campaigns."
                loading="lazy"
              />
              <div className="grid-item-2">
                <h3>#2. I Build Custom SEO Campaigns</h3>
                <p>
                  I specialize in making SEO campaigns that are made to fit the
                  needs of each business.
                </p>
                <p>
                  I don't believe in one-size-fits-all strategies. Instead,
                  choose strategies that fit your goals, industry, and audience.
                </p>
                <p>
                  By getting to know your business and its online goals inside
                  and out, I can ensure that every part of the campaign, from
                  choosing keywords to making content, is tailored to increase
                  your online visibility.
                </p>
                <p>
                  I also pay attention to ongoing optimization, so I regularly
                  look at the strategy and make changes based on analytics and
                  performance data.
                </p>
                <p>
                  This personalized approach lets me drive more organic traffic
                  to your website and raise its search engine ranking.
                </p>
              </div>
            </Deliverables>
            <Deliverables>
              <img
                src="/images/kester-browne.webp"
                alt="I know what I'm doing."
                title="I know what I'm doing."
                loading="lazy"
              />
              <div>
                <h3>#3. I Know What I'm Doing</h3>
                <p>
                  My knowledge isn't just based on what I know in theory but
                  also on years of helping businesses improve their online
                  visibility and grow.
                </p>
                <p>
                  I've honed my skills in many fields and have a track record of
                  getting things done.
                </p>
                <p>
                  My approach to SEO is holistic, covering everything from
                  keyword research and content creation to technical SEO and
                  link building.
                </p>
                <p>
                  I keep up with the latest SEO trends and algorithm changes to
                  ensure my strategies are always practical and relevant. I also
                  know how important it is to communicate clearly and work with
                  my clients to help them reach their goals.
                </p>
                <p>
                  When you work with me, you're working with a professional who
                  knows everything there is to know about SEO and how to make it
                  work for your business.
                </p>
              </div>
            </Deliverables>
            <Deliverables>
              <img
                src="/images/transperancy.png"
                className="grid-item-1"
                alt="I am 100% transparent."
                title="I am 100% transparent."
                loading="lazy"
              />
              <div className="grid-item-2">
                <h3>#4. I am 100% Transparent</h3>
                <p>
                  It's crucial to keep clients up-to-date on their SEO campaigns
                  at every stage.
                </p>
                <p>Not just by telling them what I'm doing but also why.</p>
                <p>
                  I give regular, detailed reports that show the results of my
                  work. These reports include key performance indicators,
                  metrics, and milestones that have been reached.
                </p>
                <p>I'm also honest about problems and how to deal with them.</p>
                <p>
                  My goal in every communication is to make the complicated
                  world of SEO clear and easy to understand. This way, you're
                  not just a bystander to your SEO strategy but an informed part
                  of it.
                </p>
                <p>
                  Being 100% transparent means building trust with my clients
                  and ensuring we work together honestly.
                </p>
              </div>
            </Deliverables>
            <Deliverables>
              <img
                src="/images/never-work-with-competiton.png"
                alt="I never work with your competiton."
                title="I never work with your competiton."
                loading="lazy"
              />
              <div>
                <h3>#5. I Never Work With Your Competition</h3>
                <p>
                  My policy is simple and straightforward: I never work with
                  other companies in your area.
                </p>
                <p>
                  I strongly believe in providing my clients with exclusive
                  services, and this means dedicating my skills and resources to
                  a single business per industry in a given market area. This
                  principle ensures that I am fully invested in your success,
                  without any conflicting interests.
                </p>
                <p>
                  It also guarantees that the strategies, insights, and
                  competitive advantages I develop for your business are unique
                  to you and not shared with your competitors.
                </p>
                <p>
                  I am committed to this principle of exclusivity as it enables
                  me to focus completely on helping your business dominate your
                  industry's search engine results.
                </p>
              </div>
            </Deliverables>
            <div className="center">
              <a href={calendly}>
                <Button>Book Your Strategy Call Today!</Button>
              </a>
            </div>
          </div>
        </section>
        <section id="faq">
          <div className="small-container">
            <h2 className="title">
              Frequently Asked Questions about Washington DC SEO
            </h2>
            <div>
              <h3>How much does SEO consulting cost?</h3>
              <p>It can cost between $1500 and $5000 a month.</p>
              <p>But how much is it costing you not doing SEO?</p>
              <p>Let's see</p>
              <ul className="faq-list">
                <li>
                  <h4>Low Visibility and Website Presence</h4>
                  <p>
                    Without SEO, it will be harder for your website to appear in
                    search results, leading to fewer visitors and, in the end,
                    fewer sales.
                  </p>
                </li>
                <li>
                  <h4>Less Credibility</h4>
                  <p>
                    SEO also means ensuring your website is easy to use and
                    navigate. If your website is hard to use, people may think
                    less of your business.
                  </p>
                </li>
                <li>
                  <h4>Missed Opportunities to Reach More Customers</h4>
                  <p>
                    People look for answers to their problems on search engines.
                    If customers looking for your services can't find your
                    business when they search for what your services, you're
                    missing out on a big opportunity to get new customers.
                  </p>
                </li>
                <li>
                  <h4>Lower Profits</h4>
                  <p>
                    SEO usually gives a much better return on investment in the
                    long run than paid advertising. SEO requires constant work,
                    but the traffic it brings is often more likely to turn into
                    sales than traffic from paid ads.
                  </p>
                </li>
                <li>
                  <h4>Competitive Disadvantage</h4>
                  <p>
                    If your competitors use SEO and you don't, they'll get more
                    organic search visibility than you. It could bring them more
                    traffic and sales, and you'll be missing out.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3>Should you hire a big digital agency to help you?</h3>
              <p>You can, but you might have these things happen:</p>
              <ul className="faq-list">
                <li>
                  <h4>Less Personal Attention</h4>
                  <p>
                    When you work with a bigger SEO company, your account could
                    be one of hundreds or even thousands. So, you might not get
                    the personalized service or attention to detail that a
                    smaller agency or freelancer could give you. This could mean
                    that the unique needs of your business will be missed or not
                    met.
                  </p>
                </li>
                <li>
                  <h4>Risk of Being 'Just a Number'</h4>
                  <p>
                    In a big agency, you might feel like another client on a
                    list instead of a valued partner. This can change how
                    quickly and carefully you work on your business. High
                    turnover of staff
                  </p>
                </li>
                <li>
                  <h4>High Staff Turnover</h4>
                  <p>
                    Large agencies often have a higher employee turnover rate,
                    affecting how consistent and good your SEO services are. If,
                    for example, your account manager quits, it could take time
                    for their replacement to learn about your account. This
                    could cause problems.
                  </p>
                </li>
                <li>
                  <h4>Cost</h4>
                  <p>
                    Larger SEO firms often have higher overhead costs, which can
                    cause their clients to pay more. If you're a small business
                    or just starting, you might not have enough money to cover
                    these costs.
                  </p>
                </li>
                <li>
                  <h4>Longer Response Times</h4>
                  <p>
                    Larger agencies may take longer to answer questions,
                    concerns, or requests because they have more clients to
                    serve. You might have to wait longer for answers or action
                    on your account.
                  </p>
                </li>
                <li>
                  <h4>Standardized Packages</h4>
                  <p>
                    Larger SEO agencies often work off of standardized packages
                    and strategies, which might not be the best fit for every
                    business. Your company's unique needs might require a more
                    tailored approach.
                  </p>
                </li>
                <li>
                  <h4>Pricey Services</h4>
                  <p>
                    Large SEO agencies often have higher overhead costs than
                    smaller ones because they are bigger, have more advanced
                    tools, and have a broader range of specialists on staff.
                    Because of these costs, their prices may be higher than
                    those of smaller agencies or freelancers.
                  </p>
                </li>
                <li>
                  <h4>No Openness</h4>
                  <p>
                    Large SEO firms can sometimes be less clear about their
                    strategies and methods. This can make it hard to know what
                    work is being done and how well it is being done.
                  </p>
                </li>
              </ul>
            </div>
            <div>
              <h3>Can You Guarantee #1 Rankings in Google?</h3>
              <p>No.</p>
              <p>
                No one can guarantee you the #1 rankings on Google or that
                you'll be on the first page.
              </p>
              <p>
                Search engine algorithms are complex and constantly changing,
                making it impossible to guarantee specific rankings.
              </p>
              <p>
                Google itself has stated that no one can guarantee a #1 ranking.
                They emphasize that ranking highly in search results is
                determined by a combination of factors, including website
                quality, relevance, user experience, and the competitiveness of
                the search landscape.
              </p>
              <p>
                You must be cautious of any SEO expert or agency that promises
                guaranteed #1 rankings, as it is likely a red flag for unethical
                practices or misleading claims.
              </p>
              <p>
                It's better to work with an SEO professional who provides a
                realistic understanding of the process, sets achievable goals,
                and focuses on long-term success through ethical optimization
                strategies.
              </p>
            </div>
            <div>
              <h3>Can I do SEO on my own?</h3>
              <p>
                Yes, it is possible to do SEO on your own. If you are willing to
                invest time and effort into understanding its principles and
                best practices, you can do it.
              </p>
              <p>
                Keep in mind that SEO is a continuous and ever-evolving process.
              </p>
              <p>
                Staying updated with the latest trends, algorithm changes, and
                industry practices is crucial for long-term success. Depending
                on your available time and resources, you may also consider
                hiring an experienced SEO professional or agency to assist you
                in achieving your SEO goals.
              </p>
            </div>
          </div>
        </section>
        <section id="me" className="hero">
          <div className="small-container">
            <h2 className="title">
              Meet the DC SEO Consultant Ready to Get You More Traffic and Earn
              More Money for Your Business
            </h2>
            <img
              src="/images/kgb4000-circle.jpg"
              className="avatar"
              alt="DC SEO Consultant - Kester Browne."
              title="DC SEO Consultant - Kester Browne."
              loading="lazy"
            />
            <div>
              <p>
                Greetings, I'm Kester, an experienced search engine optimization
                specialist with over five years of dedicated expertise.
              </p>
              <p>
                Throughout my career, I have achieved remarkable success by
                consistently placing businesses on the coveted first page and
                within the top 5 positions of search engine results.
              </p>
              <p>
                What sets me apart is not only my extensive knowledge and skills
                but also my unwavering commitment to continuous learning.
              </p>
              <p>
                I stay updated with the latest trends and techniques in the
                ever-evolving world of SEO, ensuring that my clients receive the
                most effective strategies to enhance their digital presence.
              </p>
              <p>
                Transparency and open communication are the cornerstones of my
                approach. I strongly believe in fostering a relationship built
                on trust by keeping my clients informed every step of the way.
              </p>
              <p>
                By demystifying the intricacies of SEO, I empower my clients to
                make well-informed decisions regarding their online growth.
              </p>
              <p>
                Education is key, and I take great pleasure in educating my
                clients about the processes and techniques employed in search
                engine optimization.
              </p>
              <p>
                By equipping them with knowledge, I enable them to actively
                participate in the optimization journey and understand the
                rationale behind each strategic decision.
              </p>
              <p>
                Choose me as your SEO partner, and together we will embark on a
                transformative journey to elevate your digital presence and
                achieve remarkable results.
              </p>
            </div>
          </div>
        </section>
        <section>
          <div className="small-container">
            <h2 className="title">Book Your Strategy Call</h2>
            <p className="subtext">
              I'll analyze your website and give you feedback ASAP to drive
              better SEO results (fast). Book your SEO consultation now:
            </p>
            <div className="center">
              <a href={calendly}>
                <Button>Book Your SEO Consultation Now</Button>
              </a>
            </div>
          </div>
        </section>
        <footer>
          <p>Copyright &copy; {new Date().getFullYear()} Bowie SEO</p>
        </footer>
      </main>
    </>
  )
}

const Reason = styled.div`
  margin: 2rem 0;
  img {
    max-width: 15rem;
    margin: 4rem auto;
  }
  @media screen and (min-width: 900px) {
    img {
      max-width: 20rem;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
  }

  .grid-item-1 {
    grid-column: 2;
    grid-row: 1;
  }

  .grid-item-2 {
    grid-column: 1;
  }
`

const Deliverables = styled.div`
  margin: 2rem 0;
  img {
    max-width: 15rem;
    margin: 4rem auto;
  }
  @media screen and (min-width: 900px) {
    img {
      max-width: 20rem;
    }
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 40px;
  }

  .grid-item-1 {
    grid-column: 2;
    grid-row: 1;
  }

  .grid-item-2 {
    grid-column: 1;
  }
`

const Services = styled.div`
  margin: 2rem 0;
  @media screen and (min-width: 900px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
  }
`

const Service = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 80px;
    height: 80px;
    margin-top: 1rem;
    margin-right: 2rem;
  }
`
