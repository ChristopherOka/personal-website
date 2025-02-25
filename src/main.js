import { inject } from "@vercel/analytics";
import "./style.css";
inject();

document.getElementById("app").innerHTML = `
    <div style="position: relative; overflow: hidden; height: 100%">
      <div id="main-headers">
        <a
          id="first-header"
          class="enabled header"
          onclick="renderNewPage(event, this)"
          onkeypress="renderNewPage(event, this)"
          href="/about"
        >
          <b>
            <h2 class="larger-text">Who I Am</h2>
            <h2 class="smaller-text"><span class="about-gap"></span>About</h2>
          </b>
          <div class="first-header-logos">
            <div>
              <img
                id="uofw"
                src="/uofw.png"
                alt="university of waterloo logo"
              />
            </div>
            <div>
              <img
                id="code"
                src="/code.png"
                alt="carats used while coding"
              />
            </div>
          </div>
        </a>
        <a
          id="second-header"
          class="enabled header"
          onclick="renderNewPage(event, this)"
          onkeypress="renderNewPage(event, this)"
          href="/hobbies"
        >
          <b>
            <h2 class="larger-text">What I Love</h2>
            <h2 class="smaller-text">Hobbies</h2>
          </b>
          <div class="second-header-logos">
            <div>
              <img id="curling" src="/curling.png" alt="curling rock" />
            </div>
            <div>
              <img id="guitar" src="/guitar.png" alt="guitar" />
            </div>
            <div>
              <img
                id="hockey"
                src="/hockey.png"
                alt="hockey stick and puck"
              />
            </div>
            <div>
              <img
                id="frisbee"
                src="/frisbee.png"
                alt="frisbee flying through the air"
              />
            </div>
            <div>
              <img id="chess" src="/queen.png" alt="chess queen" />
            </div>
          </div>
        </a>
        <a
          id="third-header"
          class="enabled header"
          onclick="renderNewPage(event, this)"
          onkeypress="renderNewPage(event, this)"
          href="/experience"
        >
          <b>
            <h2 class="larger-text">What I've Done</h2>
            <h2 class="smaller-text">Experience</h2>
          </b>
          <div class="third-header-logos">
            <div>
              <img
                id="martha-rave-cookies"
                src="/martha_rave_cookies.png"
                alt="Toronto District School Board logo"
                style="
                  border-radius: 8px;
                  padding: 0.5rem;
                  background-color: #161616;
                  box-shadow: 0 0 6px 1px rgb(255, 158, 245);
                "
              />
            </div>
            <div>
              <img
                id="creature-world"
                src="/creature_world.png"
                alt="Creature world logo"
              />
            </div>
            <div>
              <img
                id="vividseats"
                src="/vividseats.png"
                alt="Vivid Seats logo"
              />
            </div>
            <div>
              <img
                id="tbits"
                src="/tbits.png"
                alt="Tradable Bits logo"
              />
            </div>
            <div>
              <img
                id="front-rush"
                src="/front_rush.png"
                alt="Front Rush logo"
              />
            </div>
          </div>
        </a>
        <div id="first-header-body" class="hidden">
          <div class="paragraph-well">
            <div id="paragraphs">
              <p>
                Hi! My name's <b class="gold">Christopher</b>, usually I go by
                <b class="gold">Chris.</b>
              </p>
              <p>
                I'm an aspiring
                <b class="gold">Software Developer</b> and
                <b class="gold">Product Designer</b>
                who loves working on
                <b class="gold">cool projects</b> with even
                <b class="gold">cooler people.</b>
              </p>
              <p>
                I'm into anything <b class="gold">sports</b> or
                <b class="gold">fitness</b> related, and have a knack for making
                <b class="gold">awful, awful puns</b> (at least, awful according
                to my friends. I think they're amazing).
              </p>
              <p>Hit me up if you want to chat!</p>
            </div>
          </div>
          <div id="divider">
            <div></div>
          </div>
          <div class="right-card-well">
            <div id="right-card-scroller">
              <h3>What am I up to currently?</h3>
              <p style="margin-top: 0.5rem">Thanks for asking :)</p>
              <div class="card">
                <div class="left-image">
                  <img
                    src="/uofw.png"
                    alt="University of Waterloo logo"
                  />
                </div>
                <div class="right-text">
                  <p>
                    Studying
                    <b class="gold">Systems Design Engineering</b>
                    at the
                    <b class="gold">University of Waterloo.</b>
                  </p>
                  <p>
                    This program brings me a step closer to two of my biggest
                    goals: making a genuine and significant difference and
                    working with leading-edge technology.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="left-image">
                  <img src="/code.png" alt="Coding brackets" />
                </div>
                <div class="right-text">
                  <p>
                    <b class="gold">Coding. Lots of coding.</b>
                  </p>
                  <p>
                    Having recently finished creating
                    <a
                      href="https://www.internetartclub.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      >Internet Art Club</a
                    >, I'm now working on a few other projects, with my main
                    focus on an online magazine named
                    <b class="gold">Byline</b>, over at
                    <a
                      href="https://bylinebyline.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      >bylinebyline.com</a
                    >.
                  </p>
                </div>
              </div>
              <div class="card">
                <div class="left-image">
                  <img src="/curling.png" alt="Curling rock" />
                </div>
                <div class="right-text">
                  <p>
                    Trying to make time for my
                    <b class="gold">hobbies.</b>
                  </p>
                  <p>
                    Ah, work/life balance. Why are you so hard to figure out?
                  </p>
                  <p>
                    Doing my best to better myself in all domains of my life -
                    career and personal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="second-header-body" class="hidden">
          <div class="card" onclick="toggleImageExpand(this)">
            <div class="top-image-back"></div>
            <img
              class="top-image"
              src="/curling_rooney.webp"
              alt="Me curling at the 2023 National Championships"
              loading="lazy"
            />
            <div class="card-body">
              <h3>Curling</h3>
              <p class="subtitle">
                <i>I promise it's a real sport</i>
              </p>
              <p>I've been playing competitively since 2016.</p>
              <p>My goal? To represent Canada on the world stage.</p>
            </div>
            <img
              class="bottom-logo"
              id="bottom-curling-logo"
              src="/curling.png"
              alt="curling rock"
            />
          </div>
          <div class="card" onclick="toggleImageExpand(this)">
            <div class="top-image-back"></div>
            <img
              class="top-image"
              src="/coffee_house.jpg"
              alt="playing guitar on stage"
            />
            <div class="card-body">
              <h3>Guitar</h3>
              <p class="subtitle">
                <i>You could say I'm somewhat of an Ed Sheeran fan...</i>
              </p>
              <p>Used to take lessons, now I play for fun.</p>
              <p>Next steps: write my own song!</p>
            </div>
            <img
              class="bottom-logo"
              id="bottom-guitar-logo"
              src="/guitar.png"
              alt="guitar"
            />
          </div>
          <div class="card" onclick="toggleImageExpand(this)">
            <div class="top-image-back"></div>
            <img
              class="top-image"
              src="/bender.jpeg"
              alt="hockey player"
            />
            <div class="card-body">
              <h3>Hockey</h3>
              <p class="subtitle">
                <i>"The best skater in Canada" - me</i>
              </p>
              <p>Hard to argue with that!</p>
              <p>I picked up hockey in 2022, and have loved it ever since.</p>
            </div>
            <img
              class="bottom-logo"
              id="bottom-hockey-logo"
              src="/hockey.png"
              alt="hockey stick"
            />
          </div>
          <div class="card" onclick="toggleImageExpand(this)">
            <div class="top-image-back"></div>
            <img
              class="top-image"
              src="/frisbee.jpg"
              alt="jumping catching a frisbee"
            />
            <div class="card-body">
              <h3>Frisbee</h3>
              <p class="subtitle">
                <i>Or a &apos;disc&apos; if you're fancy.</i>
              </p>
              <p>Anything involving a rotating plastic disc - I'm there.</p>
              <p>Am I any good at it? Debatable.</p>
              <p>Do I love it? Yes.</p>
            </div>
            <img
              class="bottom-logo"
              id="bottom-frisbee-logo"
              src="/frisbee.png"
              alt="frisbee"
            />
          </div>
          <div class="card" onclick="toggleImageExpand(this)">
            <div class="top-image-back"></div>
            <img
              class="top-image"
              src="/chess.png"
              alt="A chess board"
            />
            <div class="card-body">
              <h3>Chess</h3>
              <p class="subtitle">
                <i>Still learning how the knight moves.</i>
              </p>
              <p>
                I picked up chess during the first lockdown, it was a great way
                to pass the time.
              </p>
              <p>I’m always down for a game (if you’re brave enough)!</p>
            </div>
            <img
              class="bottom-logo"
              id="bottom-chess-logo"
              src="/queen.png"
              alt="chess queen"
            />
          </div>
        </div>
        <div id="third-header-body" class="hidden">
          <div id="third-header-body-headers">
            <h3 id="TH-FH" class="first-header active-header left">
              <a href="/experience" onclick="swapThirdHeaders(this, event)"
                >Software</a
              >
            </h3>
            <h3 id="TH-SH" class="second-header middle">
              <a
                href="/experience/design/"
                onclick="swapThirdHeaders(this, event)"
                >Design</a
              >
            </h3>
          </div>
          <div id="TH-FH-body" class="third-header-body hidden active-body">
            <div
              class="card"
              id="internet-art-club-card"
              data-name="internet-art-club"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/internet-art-club"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <div class="box-shadow-well">
                  <img
                    class="top-image"
                    src="/iac-logo-white.png"
                    alt="Internet Art Club logo"
                  />
                </div>
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>Internet Art Club</h3>
                <p class="subtitle" style="margin-top: 0.5rem">
                  <i>E-commerce Website</i>
                </p>
                <p>
                  Built a clean and unique e-commerce site for Internet Art Club
                  - the one stop shop for interesting art and fashion.
                </p>
              </div>
            </div>
            <div
              class="card"
              id="byline-card"
              data-name="byline"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/byline"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <div class="box-shadow-well">
                  <img
                    class="top-image"
                    src="/byline_site_logo.png"
                    id="byline-card-logo"
                    alt="Byline logo"
                  />
                  <div id="box-shadow"></div>
                </div>
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3 id="byline-header">Byline</h3>
                <p class="subtitle" style="margin-top: 0.5rem">
                  <i>Online Magazine</i>
                </p>
                <p>
                  Built a unique and customizable online magazine that hosts
                  creative writing from all demographics and subject-areas.
                </p>
              </div>
            </div>
            <div
              class="card"
              id="martha-rave-cookies-card"
              data-name="martha-rave-cookies"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/martha-rave-cookies"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <div class="border-well">
                  <img
                    class="top-image"
                    id="martha-rave-logo-card"
                    src="/martha_rave_cookies.png"
                    alt="Martha Rave Cookies logo"
                  />
                  <div id="border"></div>
                </div>
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3 id="martha-rave-header">Martha Rave Cookies</h3>
                <p class="subtitle" style="margin-top: 0.5rem">
                  <i>POS & Order Management System</i>
                </p>
                <p>
                  Built a platform designed to minimize time spent on emails,
                  reading spreadsheets, and organizing stacks of paper while
                  minimizing operating costs.
                </p>
              </div>
            </div>

            <div
              class="card"
              id="creature-world-card"
              data-name="creature-world"
              onclick="openExpandedCard(this)"
            >
              <a
                href="/experience/creature-world"
                onclick="cancelClick(event)"
                class="creature-well"
              >
                <img
                  id="idle-back"
                  class="top-image"
                  src="/idle_back.gif"
                  alt="Swinging creature"
                />
                <img
                  id="idle-front"
                  class="top-image"
                  src="/idle_front.gif"
                  alt="Swinging creature"
                />
              </a>
              <div class="card-body">
                <div
                  class="divider"
                  style="z-index: -2; position: relative"
                ></div>
                <h3 style="z-index: -2; position: relative">creature.world</h3>
                <p class="subtitle">
                  <i>Artist Portfolio Website</i>
                </p>
                <p>
                  Created
                  <a
                    href="https://creature.world"
                    target="_blank"
                    rel="noreferrer"
                    >creature.world</a
                  >, the main hub for New York-based artist
                  <a
                    href="https://instagram.com/dannycoleee"
                    target="_blank"
                    rel="noreferrer"
                    >Danny Cole's</a
                  >
                  Creature World series.
                </p>
              </div>
            </div>
            <div
              class="card"
              id="vividseats-card"
              data-name="vividseats"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/vividseats"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  class="top-image"
                  src="/vividseats.png"
                  alt="Vivid Seats logo"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>Vivid Seats</h3>
                <p class="subtitle">
                  <i>Software Engineer</i>
                </p>
                <p>
                  Ported entire checkout flow from legacy to modern tech stack.
                </p>
                <p>Built other cool features on the side.</p>
              </div>
            </div>
            <div
              class="card"
              id="tbits-card"
              data-name="tbits"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/tbits"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  class="top-image"
                  src="/tbits.png"
                  alt="Tradable Bits logo"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>Tradable Bits</h3>
                <p class="subtitle">
                  <i>Full-Stack Web Developer</i>
                </p>
                <p>Overhauled the UI & UX of 20+ client-facing pages.</p>
                <p>Organized a successful company-wide Chess tournament!</p>
              </div>
            </div>
            <div
              class="card"
              id="front-rush-card"
              data-name="front-rush"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/front-rush"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  class="top-image"
                  src="/front_rush.png"
                  alt="Front Rush logo"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>Front Rush</h3>
                <p class="subtitle">
                  <i>Technical Implementation Specialist</i>
                </p>
                <p>
                  Created Python scripts to automate manual inventory data
                  entry.
                </p>
                <p>
                  Added a page to integrate B2C sales of Henry Schein goods.
                </p>
              </div>
            </div>
            <div
              class="card"
              id="personal-website-card"
              data-name="personal-website"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/personal-website"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  style="max-width: none"
                  class="top-image"
                  src="/website.jpg"
                  alt="The homepage of christopheroka.com"
                  loading="lazy"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>This Website</h3>
                <p class="subtitle"><i>Woah, that's meta</i></p>
                <p>
                  Decided to challenge myself and build my own website using
                  pure HTML, CSS, and JavaScript.
                </p>
                <p>
                  Why not learn how they used to do it back in the olden days?
                </p>
              </div>
            </div>
            <div
              class="card"
              id="model-generator-card"
              data-name="model-generator"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/model-generator"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  class="top-image"
                  style="max-width: none"
                  src="/dogs.jpg"
                  alt="Dogs on Google public"
                  loading="lazy"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>Model Generator</h3>
                <p class="subtitle">
                  <i>ML Image Recognition</i>
                </p>
                <p>
                  Scrapes images from the web based on inputted words, then
                  trains a model to recognize them.
                </p>
              </div>
            </div>
          </div>
          <div id="TH-SH-body" class="third-header-body hidden">
            <div
              class="card"
              id="uxr-questrade-card"
              data-name="uxr-questrade"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/design/uxr-questrade"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  class="top-image"
                  src="/questrade.png"
                  alt="Questrade logo"
                  style="min-width: 170px"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3 id="martha-rave-header">Questrade</h3>
                <p class="subtitle" style="margin-top: 0.5rem">
                  <i>User Experience Researcher</i>
                </p>
                <p>
                  Led research studies and user interviews to gain further
                  insight into user opinion and behaviour, informing
                  decision-making and project-direction.
                </p>
              </div>
            </div>

            <div
              class="card"
              id="martha-rave-cookies-card"
              data-name="martha-rave-cookies"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/martha-rave-cookies"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <div class="border-well">
                  <img
                    class="top-image"
                    id="martha-rave-logo-card"
                    src="/martha_rave_cookies.png"
                    alt="Martha Rave Cookies logo"
                  />
                  <div id="border"></div>
                </div>
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3 id="martha-rave-header">Martha Rave Cookies</h3>
                <p class="subtitle" style="margin-top: 0.5rem">
                  <i>POS & Order Management System</i>
                </p>
                <p>
                  Built a platform designed to minimize time spent on emails,
                  reading spreadsheets, and organizing stacks of paper while
                  minimizing operating costs.
                </p>
              </div>
            </div>

            <div
              class="card"
              id="creature-world-card"
              data-name="creature-world"
              onclick="openExpandedCard(this)"
            >
              <a
                href="/experience/designs/creature-world"
                onclick="cancelClick(event)"
                class="creature-well"
              >
                <img
                  id="idle-back"
                  class="top-image"
                  src="/idle_back.gif"
                  alt="Swinging creature"
                />
                <img
                  id="idle-front"
                  class="top-image"
                  src="/idle_front.gif"
                  alt="Swinging creature"
                />
              </a>
              <div class="card-body">
                <div
                  class="divider"
                  style="z-index: -2; position: relative"
                ></div>
                <h3 style="z-index: -2; position: relative">creature.world</h3>
                <p class="subtitle">
                  <i>Artist Porfolio Website</i>
                </p>
                <p>
                  Created
                  <a
                    href="https://creature.world"
                    target="_blank"
                    rel="noreferrer"
                    >creature.world</a
                  >, the main hub for New York-based artist
                  <a
                    href="https://instagram.com/dannycoleee"
                    target="_blank"
                    rel="noreferrer"
                    >Danny Cole's</a
                  >
                  Creature World series.
                </p>
              </div>
            </div>
            <div
              class="card"
              id="personal-website-card"
              data-name="personal-website"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/design/personal-website"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  style="max-width: none"
                  class="top-image"
                  src="/website.jpg"
                  alt="The homepage of christopheroka.com"
                  loading="lazy"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>This Website</h3>
                <p class="subtitle"><i>Woah, that's meta</i></p>
                <p>
                  Decided to challenge myself and build my own website using
                  pure HTML, CSS, and JavaScript.
                </p>
                <p>
                  Why not learn how they used to do it back in the olden days?
                </p>
              </div>
            </div>
            <div
              class="card"
              id="rally-card"
              data-name="rally"
              onclick="openExpandedCard(this)"
            >
              <div class="top-image-back"></div>
              <a
                href="/experience/design/rally"
                onclick="cancelClick(event)"
                class="top-image-well"
              >
                <img
                  style="max-width: 220px"
                  class="top-image"
                  src="/rally.png"
                  alt="Text that says 'rally'"
                  loading="lazy"
                />
              </a>
              <div class="card-body">
                <div class="divider"></div>
                <h3>rally</h3>
                <p class="subtitle">
                  <i>Hack the North Submission</i>
                </p>
                <p>
                  A social platform connecting people with similar causes to
                  find and join protests and events nearby.
                </p>
                <p>
                  Created with a small team for the 2021 Hack the North
                  hackathon.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-expanded hidden" id="uxr-questrade-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/questrade.png"
                alt="Questrade logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Questrade</h1>
              <p class="subtitle gold">
                <i>User Experience Researcher</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/usertesting.png"
                    alt="UserTesting logo"
                    loading="lazy"
                  />
                  <span>UserTesting</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/optimalworkshop.webp"
                    alt="Optimal Workshop logo"
                    loading="lazy"
                  />
                  <span>Optimal Workshop</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/figma_logo.png"
                    alt="Figma logo"
                    loading="lazy"
                    id="figma-logo"
                  />
                  <span>Figma</span>
                </div>
              </div>
            </div>
            <h2>Synopsis</h2>
            <p>
              Looking to get more experience in the UI/UX field, I decided to
              completely pivot out of Software and try a User Experience
              Research role.
            </p>
            <p>
              With the intention to absorb as much information as possible
              during this opportunity, I quickly began leading my own research
              studies.
            </p>
            <p>
              I managed to pick up valuable skills in the process, learning how
              to interpret different opinions than mine, how to consolidate
              qualitative research and turn it into quantitative insights. I
              learned how to conduct live interviews and ask thought-provoking
              and unbiased questions.
            </p>
            <p>
              Overall, it was an invaluable experience, and will shape my future
              journey into design and software.
            </p>
            <h2>Projects</h2>
            <ul>
              <li>
                Led a research study to determine the
                <b class="gold">best way</b>
                for users to onboard onto a completely new interface. By
                focusing on
                <b class="gold">eliminating research bias</b>
                and asking deep, prodding questions, I was able to gain valuable
                insights into user emotions and behaviour. When presented to
                leadership, they were <b class="gold">thoroughly impressed</b>,
                and expressed the positive impact the research would have on the
                new interface rollout plan.
              </li>
              <li>
                Co-led another research study focusing on
                <b class="gold">concept-testing</b> several new tools on the
                Questrade platform. By conducting live interviews, we were able
                to consolidate qualitative feedback into
                <b class="gold">actionable insights</b>, giving management an
                idea of which tools to prioritize.
              </li>
              <li>
                Conducted research into current methods that other professionals
                in the UXR field use to
                <b class="gold">measure emotion</b>. After discovering a
                promising technique, I presented it to the team, and we decided
                to implement it into future studies. After implementation, we
                saw great success, and a
                <b class="gold">significant improvement</b> in emotional data
                collection.
              </li>
            </ul>
            <p></p>
            <p></p>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="internet-art-club-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/iac-logo-white.png"
                alt="Internet Art Club logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Internet Art Club</h1>
              <p class="subtitle gold">
                <i>E-commerce Website</i>
              </p>
            </div>
          </div>
          <div class="content">
            <a
              class="internet-art-club-svg"
              href="https://www.internetartclub.com"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="606"
                height="280"
                viewBox="0 0 303 140"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3418 48.7716C33.3418 45.0554 36.4968 42.0439 40.3901 42.0439C44.2835 42.0439 47.4384 45.0554 47.4384 48.7716C47.4384 52.4879 44.2835 55.4993 40.3901 55.4993C36.4968 55.4993 33.3418 52.4879 33.3418 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.257 38.4411C34.6212 38.5052 30.0245 42.6811 29.6013 47.9741L25.4395 44.0016C27.5291 38.0316 33.4334 33.7275 40.3912 33.7275H40.5547C47.4424 33.7944 53.2708 38.079 55.343 44.0016L51.1811 47.9741C50.755 42.6421 46.0882 38.4411 40.3941 38.4411H40.2599H40.257Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1474 21.8316C29.9004 21.9124 20.9579 27.2082 16.081 35.0725L12.4912 31.6459C18.3925 22.9041 28.6834 17.1152 40.3897 17.1152H40.664C52.2565 17.2044 62.4306 22.9738 68.2882 31.6459L64.6983 35.0725C59.7835 27.1469 50.736 21.8316 40.3897 21.8316H40.1474Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0945 13.5259C27.4746 13.6206 16.3637 19.7577 9.77943 29.054L6.23047 25.6664C13.8187 15.4648 26.2926 8.80957 40.3951 8.80957H40.5614C54.5968 8.8625 67.0036 15.5038 74.5597 25.6664L71.0107 29.054C64.374 19.6853 53.1404 13.5231 40.398 13.5231H40.1003L40.0945 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M40.2119 5.21357C25.1434 5.26928 11.7968 12.2951 3.52853 23.09L0 19.7192C9.23139 8.04672 23.8884 0.5 40.3899 0.5H40.5825C57.0052 0.558502 71.5863 8.0913 80.7798 19.7192L77.2483 23.09C68.948 12.2533 55.5284 5.21357 40.3899 5.21357H40.2119Z"
                  fill="#26AA4F"
                />
                <path
                  d="M33.3428 48.7716C33.3428 45.0554 36.4977 42.0439 40.3911 42.0439C44.2844 42.0439 47.4394 45.0554 47.4394 48.7716C47.4394 52.4879 44.2844 55.4993 40.3911 55.4993C36.4977 55.4993 33.3428 52.4879 33.3428 48.7716Z"
                  fill="white"
                />
                <path
                  d="M40.256 38.4479C34.6203 38.512 30.0235 42.6879 29.6003 47.9809L25.4385 44.0084C27.5282 38.0384 33.4324 33.7344 40.3902 33.7344H40.5537C47.4415 33.8012 53.2698 38.0858 55.342 44.0084L51.1801 47.9809C50.754 42.6489 46.0873 38.4479 40.3932 38.4479H40.2589H40.256Z"
                  fill="#FF5A3F"
                />
                <path
                  d="M40.2037 30.1384C32.3148 30.208 25.5409 34.7461 22.5318 41.2314L18.8428 37.7102C22.9725 30.3947 31.0744 25.4248 40.3905 25.4248H40.6094C49.8349 25.5028 57.8405 30.4532 61.9382 37.7102L58.2491 41.2314C55.2167 34.6987 48.3611 30.1384 40.3905 30.1384H40.2037Z"
                  fill="#FFA9BC"
                />
                <path
                  d="M40.1494 21.8355C29.9024 21.9163 20.9599 27.2121 16.083 35.0764L12.4932 31.6499C18.3945 22.908 28.6853 17.1191 40.3916 17.1191H40.666C52.2585 17.2083 62.4326 22.9777 68.2901 31.6499L64.7003 35.0764C59.7854 27.1508 50.7379 21.8355 40.3916 21.8355H40.1494Z"
                  fill="#FFC840"
                />
                <path
                  d="M40.0935 13.5259C27.4737 13.6206 16.3627 19.7577 9.77846 29.054L6.22949 25.6664C13.8177 15.4648 26.2916 8.80957 40.3941 8.80957H40.5605C54.5958 8.8625 67.0026 15.5038 74.5587 25.6664L71.0098 29.054C64.373 19.6853 53.1395 13.5231 40.397 13.5231H40.0993L40.0935 13.5259Z"
                  fill="#619AFF"
                />
                <path
                  d="M98.7291 123.04C99.771 122.911 100.469 122.496 100.822 121.791C101.023 121.404 101.125 120.85 101.125 120.126C101.125 118.644 100.577 117.568 99.4762 116.902C98.3788 116.234 96.8057 115.9 94.7598 115.9C92.3958 115.9 90.7176 116.512 89.7282 117.735C89.1737 118.412 88.8147 119.421 88.6455 120.758H84.4106C84.4953 117.574 85.5722 115.359 87.6444 114.111C89.7166 112.866 92.1215 112.242 94.8561 112.242C98.0286 112.242 100.603 112.818 102.584 113.975C104.549 115.128 105.529 116.925 105.529 119.362V134.205C105.529 134.654 105.626 135.016 105.818 135.289C106.011 135.562 106.419 135.698 107.041 135.698C107.242 135.698 107.47 135.684 107.721 135.662C107.972 135.637 108.241 135.603 108.527 135.553V138.751C107.82 138.944 107.283 139.063 106.913 139.114C106.542 139.161 106.04 139.186 105.401 139.186C103.839 139.186 102.704 138.657 101.998 137.598C101.627 137.038 101.367 136.244 101.216 135.216C100.29 136.372 98.9626 137.372 97.2318 138.222C95.5011 139.072 93.5953 139.498 91.5115 139.498C89.0074 139.498 86.9614 138.774 85.3738 137.322C83.7861 135.874 82.9922 134.06 82.9922 131.879C82.9922 129.491 83.7744 127.642 85.3358 126.33C86.8972 125.017 88.949 124.207 91.4852 123.903L98.7203 123.04H98.7291ZM213.729 103.171H218.139V115.994C219.134 114.76 220.325 113.816 221.705 113.167C223.089 112.518 224.589 112.192 226.209 112.192C229.583 112.192 232.32 113.295 234.419 115.498C236.517 117.705 237.571 120.956 237.571 125.254C237.571 129.327 236.532 132.712 234.457 135.406C232.381 138.1 229.507 139.448 225.829 139.448C223.772 139.448 222.035 138.974 220.617 138.03C219.773 137.47 218.871 136.57 217.911 135.336V138.632H213.726V103.171H213.729ZM171.375 114.236C173.281 115.649 174.428 118.078 174.816 121.527H170.406C170.137 119.939 169.524 118.621 168.567 117.568C167.61 116.518 166.072 115.991 163.956 115.991C161.067 115.991 158.997 117.337 157.754 120.028C156.948 121.775 156.546 123.928 156.546 126.491C156.546 129.054 157.115 131.241 158.259 133.004C159.4 134.765 161.198 135.648 163.652 135.648C165.535 135.648 167.026 135.102 168.126 134.007C169.227 132.912 169.989 131.414 170.406 129.514H174.816C174.311 132.929 173.05 135.428 171.036 137.007C169.02 138.587 166.44 139.378 163.299 139.378C159.771 139.378 156.957 138.147 154.856 135.684C152.754 133.222 151.704 130.149 151.704 126.458C151.704 121.936 152.854 118.415 155.156 115.897C157.459 113.378 160.389 112.119 163.953 112.119C166.994 112.119 169.469 112.824 171.375 114.236ZM192.774 112.866V129.971C192.774 131.285 192.987 132.361 193.413 133.194C194.198 134.734 195.663 135.503 197.805 135.503C200.881 135.503 202.977 134.155 204.089 131.461C204.696 130.018 204.997 128.037 204.997 125.519V112.866H209.532V138.632H205.248L205.297 134.829C204.719 135.807 204.001 136.634 203.143 137.306C201.445 138.654 199.384 139.325 196.962 139.325C193.185 139.325 190.614 138.1 189.245 135.645C188.504 134.33 188.133 132.575 188.133 130.377V112.863H192.771L192.774 112.866ZM132.87 105.673H137.458V112.866H141.769V116.401H137.458V133.216C137.458 134.116 137.776 134.715 138.416 135.021C138.769 135.197 139.355 135.286 140.181 135.286C140.4 135.286 140.634 135.28 140.888 135.269C141.139 135.258 141.433 135.233 141.769 135.188V138.629C141.25 138.774 140.707 138.877 140.143 138.941C139.58 139.005 138.97 139.036 138.316 139.036C136.2 139.036 134.762 138.517 134.006 137.484C133.25 136.45 132.87 135.105 132.87 133.453V116.395H129.216V112.86H132.87V105.667V105.673ZM112.321 112.866H116.631V117.317C116.985 116.451 117.849 115.398 119.226 114.153C120.604 112.91 122.191 112.289 123.989 112.289C124.074 112.289 124.217 112.297 124.418 112.314C124.62 112.331 124.964 112.362 125.451 112.409V116.98C125.183 116.933 124.935 116.9 124.707 116.883C124.479 116.866 124.231 116.861 123.963 116.861C121.678 116.861 119.921 117.563 118.695 118.964C117.469 120.368 116.856 121.984 116.856 123.811V138.632H112.321V112.866ZM183.755 103.291H179.217V138.629H183.755V103.291ZM89.1766 134.737C90.1339 135.459 91.2692 135.818 92.5797 135.818C94.1761 135.818 95.72 135.467 97.2173 134.762C99.7389 133.592 100.997 131.681 100.997 129.021V125.538C100.442 125.875 99.7301 126.157 98.8604 126.382C97.9878 126.608 97.1326 126.77 96.295 126.864L93.5545 127.201C91.9113 127.41 90.6738 127.739 89.8479 128.185C88.4441 128.937 87.7436 130.138 87.7436 131.784C87.7436 133.032 88.2223 134.016 89.1795 134.737H89.1766ZM231.074 132.834C232.297 130.973 232.907 128.519 232.907 125.474C232.907 122.764 232.297 120.518 231.074 118.738C229.851 116.958 228.053 116.069 225.675 116.069C223.6 116.069 221.784 116.799 220.226 118.259C218.667 119.719 217.885 122.126 217.885 125.477C217.885 127.898 218.206 129.865 218.845 131.372C220.042 134.211 222.274 135.631 225.546 135.631C228.007 135.631 229.848 134.701 231.071 132.84L231.074 132.834ZM99.1931 88.5123V62.1225C99.1931 61.9748 99.0705 61.8578 98.9159 61.8578H95.6004C95.3056 61.8578 95.2151 61.4734 95.4836 61.3536C101.078 58.8241 105.398 55.8628 111.101 51.5392C111.282 51.4027 111.553 51.5225 111.553 51.7454V58.6207C111.553 58.7684 111.679 58.8854 111.83 58.8854H118.234C118.386 58.8854 118.511 59.0052 118.511 59.15V61.6795C118.511 61.8272 118.386 61.9442 118.234 61.9442H111.83C111.676 61.9442 111.553 62.064 111.553 62.2088V90.259C111.553 94.1034 113.477 96.0256 116.223 96.0256C116.766 96.0256 117.361 95.9309 117.968 95.7721C118.205 95.7108 118.403 95.956 118.278 96.1594C117.145 98.0147 114.548 100.92 109.356 100.92C103.221 100.92 99.1931 97.2486 99.1931 88.5096V88.5123ZM283.675 88.5123V62.1225C283.675 61.9748 283.552 61.8578 283.398 61.8578H280.082C279.785 61.8578 279.697 61.4734 279.966 61.3536C285.56 58.8241 289.88 55.8628 295.583 51.5392C295.764 51.4027 296.035 51.5225 296.035 51.7454V58.6207C296.035 58.7684 296.158 58.8854 296.312 58.8854H302.716C302.867 58.8854 302.993 59.0052 302.993 59.15V61.6795C302.993 61.8272 302.867 61.9442 302.716 61.9442H296.312C296.158 61.9442 296.035 62.064 296.035 62.2088V90.259C296.035 94.1034 297.958 96.0256 300.705 96.0256C301.248 96.0256 301.843 95.9281 302.45 95.7721C302.687 95.7108 302.885 95.956 302.759 96.1594C301.627 98.0147 299.03 100.92 293.837 100.92C287.703 100.92 283.675 97.2486 283.675 88.5096V88.5123ZM239.885 79.0741C239.885 66.2288 249.589 57.3142 262.043 57.3142C274.496 57.3142 279.621 64.2174 279.621 69.1121C279.621 82.222 256.55 78.5503 256.55 91.1338C256.55 95.6774 259.664 98.2125 263.966 98.2125C269.961 98.2125 273.072 92.2871 273.977 88.5903C274.012 88.4483 274.158 88.3563 274.304 88.3926C276.157 88.8188 278.156 90.2061 278.156 92.7077C278.156 95.9421 272.938 100.923 262.501 100.923C249.592 100.923 239.885 91.9222 239.885 79.0741ZM115.295 79.0741C115.295 66.2288 124.999 57.3142 137.452 57.3142C149.906 57.3142 155.031 64.2174 155.031 69.1121C155.031 82.222 131.96 78.5503 131.96 91.1338C131.96 95.6774 135.074 98.2125 139.376 98.2125C145.371 98.2125 148.479 92.2871 149.386 88.5903C149.421 88.4483 149.567 88.3563 149.716 88.3926C151.57 88.8188 153.569 90.2061 153.569 92.7077C153.569 95.9421 148.35 100.923 137.914 100.923C125.005 100.923 115.298 91.9222 115.298 79.0741H115.295ZM32.7376 100.31C32.4778 100.31 32.3553 99.9954 32.5566 99.8422C35.1863 97.8587 35.7233 92.9919 35.7233 87.4621V75.5779C35.7233 69.9366 35.1629 64.9055 32.3903 63.0641C32.1918 62.9332 32.2589 62.6406 32.4953 62.5905C38.3821 61.4038 42.9642 59.6682 47.6631 57.0245C47.847 56.9214 48.0834 57.0468 48.0834 57.2501V87.4593C48.0834 92.9863 48.6992 97.8531 51.3405 99.8394C51.5448 99.9926 51.4222 100.307 51.1624 100.307H32.7376V100.31ZM52.254 100.31C51.9942 100.31 51.8716 99.9954 52.073 99.8422C54.6997 97.8587 55.2397 92.9919 55.2397 87.4621V75.5779C55.2397 69.9366 54.6793 64.9055 51.9067 63.0641C51.7082 62.9332 51.7753 62.6406 52.0117 62.5905C57.8985 61.4038 62.4806 59.6682 67.1795 57.0245C67.3633 56.9214 67.5968 57.0468 67.5968 57.2501V68.2568C67.5968 68.5465 68.0171 68.6273 68.1309 68.3571C70.7372 62.1726 75.4273 57.3114 82.4289 57.3114C91.9493 57.3114 96.3446 65.2649 96.3446 74.614V87.4593C96.3446 92.9863 96.9604 97.8531 99.5317 99.8394C99.733 99.9954 99.6076 100.307 99.3478 100.307H80.9813C80.7216 100.307 80.599 99.9954 80.8004 99.8394C83.3716 97.8559 83.9874 92.9891 83.9874 87.4593V73.1264C83.9874 67.4462 82.1546 63.2507 78.2204 63.2507C73.4602 63.2507 67.5997 69.3684 67.5997 87.4565C67.5997 92.9836 68.2156 97.8503 70.8569 99.8366C71.0612 99.9898 70.9386 100.305 70.6788 100.305H52.254V100.31ZM155.226 100.31C154.967 100.31 154.844 99.9954 155.046 99.8422C157.675 97.8587 158.212 92.9919 158.212 87.4621V75.5779C158.212 69.8057 157.529 65.5936 155.437 63.0613C155.311 62.9081 155.402 62.6824 155.603 62.6434C161.571 61.4567 165.43 59.7072 170.152 57.0301C170.336 56.9242 170.572 57.0496 170.572 57.2557V67.1815C170.572 67.4796 171.001 67.5492 171.112 67.2706C173.357 61.5124 178.204 57.317 183.665 57.317C189.616 57.317 192.546 61.3369 192.546 65.1813C192.546 68.5911 190.255 71.8226 185.588 71.8226C184.958 71.8226 184.327 71.7586 183.642 71.6276C183.469 71.597 183.373 71.4215 183.44 71.2683C183.735 70.6052 183.939 69.7723 183.939 68.9393C183.939 66.5798 182.29 64.0447 179.089 64.0447C175.151 64.0447 170.391 68.151 170.391 87.4649C170.391 92.9919 171.159 97.8587 173.826 99.8422C174.031 99.9954 173.908 100.31 173.648 100.31H155.226ZM193.293 100.31C193.033 100.31 192.911 99.9954 193.112 99.8422C195.742 97.8587 196.279 92.9919 196.279 87.4621V75.5779C196.279 70.0258 195.908 61.9052 193.276 59.4927C193.089 59.3228 193.214 59.0247 193.474 59.033C198.949 59.2336 203.587 59.5066 208.222 57.0189C208.408 56.9186 208.639 57.044 208.639 57.2473V68.2568C208.639 68.5465 209.059 68.6273 209.173 68.3571C211.779 62.1726 216.469 57.3114 223.471 57.3114C232.991 57.3114 237.387 65.2649 237.387 74.614V87.4593C237.387 92.9863 238.003 97.8531 240.571 99.8394C240.772 99.9954 240.647 100.307 240.39 100.307H222.023C221.764 100.307 221.641 99.9954 221.84 99.8394C224.411 97.8559 225.027 92.9891 225.027 87.4593V73.1264C225.027 67.4462 223.197 63.2507 219.26 63.2507C214.497 63.2507 208.639 69.3684 208.639 87.4565C208.639 92.9836 209.255 97.8503 211.896 99.8366C212.1 99.9898 211.978 100.305 211.718 100.305H193.293V100.31ZM143.313 66.928C143.313 62.2952 141.115 59.8493 137.82 59.8493C132.234 59.8493 128.297 67.5409 128.297 79.0741C128.297 82.0716 128.653 84.9382 129.359 87.5457C129.432 87.8103 129.826 87.8048 129.896 87.5401C132.094 79.3331 143.31 76.0682 143.31 66.9252L143.313 66.928ZM267.903 66.928C267.903 62.2952 265.706 59.8493 262.41 59.8493C256.824 59.8493 252.89 67.5409 252.89 79.0741C252.89 82.0716 253.243 84.9354 253.952 87.5457C254.025 87.8103 254.419 87.8048 254.49 87.5401C256.687 79.3331 267.903 76.0682 267.903 66.9252V66.928ZM40.4163 41.9004C44.3797 41.9115 47.5901 44.9843 47.5901 48.7702C47.5901 52.5561 44.3797 55.6288 40.4163 55.6399H40.393C36.4179 55.6399 33.1958 52.5644 33.1958 48.7702C33.1958 44.9759 36.4179 41.9004 40.393 41.9004H40.4163Z"
                  fill="white"
                />
                <path
                  d="M98.7339 123.037C99.7759 122.908 100.473 122.493 100.827 121.789C101.028 121.401 101.13 120.847 101.13 120.123C101.13 118.641 100.581 117.565 99.4811 116.899C98.3837 116.231 96.8106 115.897 94.7647 115.897C92.4007 115.897 90.7225 116.509 89.7331 117.732C89.1786 118.409 88.8196 119.418 88.6503 120.755H84.4155C84.5001 117.571 85.5771 115.356 87.6493 114.108C89.7214 112.863 92.1263 112.239 94.861 112.239C98.0335 112.239 100.608 112.815 102.589 113.972C104.554 115.125 105.534 116.922 105.534 119.359V134.202C105.534 134.651 105.63 135.013 105.823 135.286C106.016 135.559 106.424 135.695 107.046 135.695C107.247 135.695 107.475 135.681 107.726 135.659C107.977 135.634 108.246 135.601 108.532 135.55V138.748C107.825 138.941 107.288 139.06 106.918 139.111C106.547 139.158 106.045 139.183 105.406 139.183C103.844 139.183 102.709 138.654 102.003 137.595C101.632 137.035 101.372 136.241 101.221 135.213C100.295 136.369 98.9674 137.37 97.2367 138.219C95.506 139.069 93.6002 139.495 91.5164 139.495C89.0122 139.495 86.9663 138.771 85.3786 137.319C83.7909 135.871 82.9971 134.057 82.9971 131.876C82.9971 129.488 83.7793 127.639 85.3407 126.327C86.9021 125.014 88.9539 124.204 91.4901 123.9L98.7252 123.037H98.7339ZM213.734 103.168H218.144V115.991C219.139 114.757 220.33 113.813 221.71 113.164C223.094 112.515 224.594 112.189 226.214 112.189C229.587 112.189 232.325 113.292 234.423 115.495C236.522 117.702 237.576 120.953 237.576 125.251C237.576 129.324 236.537 132.709 234.461 135.403C232.386 138.097 229.512 139.445 225.834 139.445C223.777 139.445 222.04 138.971 220.622 138.027C219.778 137.467 218.876 136.567 217.916 135.333V138.629H213.731V103.168H213.734ZM171.38 114.233C173.286 115.646 174.433 118.075 174.821 121.524H170.411C170.142 119.936 169.529 118.618 168.572 117.565C167.615 116.515 166.077 115.989 163.961 115.989C161.071 115.989 159.002 117.334 157.759 120.025C156.953 121.772 156.551 123.925 156.551 126.488C156.551 129.051 157.12 131.238 158.264 133.001C159.405 134.762 161.203 135.645 163.657 135.645C165.54 135.645 167.031 135.099 168.131 134.004C169.232 132.909 169.993 131.411 170.411 129.511H174.821C174.316 132.926 173.055 135.425 171.041 137.005C169.024 138.584 166.444 139.375 163.304 139.375C159.776 139.375 156.962 138.144 154.861 135.681C152.759 133.219 151.709 130.146 151.709 126.455C151.709 121.933 152.859 118.412 155.161 115.894C157.464 113.375 160.394 112.116 163.958 112.116C166.999 112.116 169.474 112.821 171.38 114.233ZM192.779 112.863V129.968C192.779 131.283 192.992 132.358 193.418 133.191C194.203 134.731 195.668 135.5 197.81 135.5C200.886 135.5 202.982 134.152 204.094 131.458C204.701 130.015 205.002 128.034 205.002 125.516V112.863H209.537V138.629H205.253L205.302 134.826C204.724 135.804 204.006 136.631 203.148 137.303C201.45 138.651 199.389 139.322 196.967 139.322C193.19 139.322 190.619 138.097 189.25 135.642C188.509 134.327 188.138 132.572 188.138 130.374V112.86H192.776L192.779 112.863ZM132.875 105.67H137.463V112.863H141.774V116.398H137.463V133.213C137.463 134.113 137.781 134.712 138.42 135.018C138.774 135.194 139.36 135.283 140.186 135.283C140.405 135.283 140.639 135.277 140.892 135.266C141.143 135.255 141.438 135.23 141.774 135.185V138.626C141.254 138.771 140.712 138.874 140.148 138.938C139.585 139.002 138.975 139.033 138.321 139.033C136.205 139.033 134.766 138.514 134.011 137.481C133.255 136.447 132.875 135.102 132.875 133.45V116.392H129.221V112.857H132.875V105.664V105.67ZM112.326 112.863H116.636V117.315C116.99 116.448 117.853 115.395 119.231 114.15C120.609 112.907 122.196 112.286 123.994 112.286C124.079 112.286 124.222 112.295 124.423 112.311C124.624 112.328 124.969 112.359 125.456 112.406V116.977C125.188 116.93 124.94 116.897 124.712 116.88C124.484 116.863 124.236 116.858 123.968 116.858C121.683 116.858 119.926 117.56 118.7 118.961C117.474 120.365 116.861 121.981 116.861 123.808V138.629H112.326V112.863ZM183.76 103.288H179.222V138.626H183.76V103.288ZM89.1815 134.734C90.1388 135.456 91.2741 135.815 92.5846 135.815C94.181 135.815 95.7249 135.464 97.2221 134.759C99.7438 133.589 101.002 131.678 101.002 129.018V125.535C100.447 125.873 99.735 126.154 98.8653 126.38C97.9926 126.605 97.1375 126.767 96.2999 126.861L93.5593 127.199C91.9162 127.408 90.6787 127.736 89.8528 128.182C88.449 128.934 87.7485 130.135 87.7485 131.781C87.7485 133.029 88.2271 134.013 89.1844 134.734H89.1815ZM231.079 132.831C232.302 130.971 232.912 128.516 232.912 125.471C232.912 122.761 232.302 120.515 231.079 118.735C229.856 116.955 228.058 116.067 225.679 116.067C223.604 116.067 221.789 116.796 220.231 118.256C218.672 119.716 217.89 122.123 217.89 125.474C217.89 127.895 218.211 129.862 218.85 131.369C220.047 134.208 222.279 135.628 225.551 135.628C228.011 135.628 229.853 134.698 231.076 132.837L231.079 132.831ZM99.198 88.5094V62.1196C99.198 61.9719 99.0754 61.8549 98.9207 61.8549H95.6053C95.3105 61.8549 95.22 61.4705 95.4885 61.3507C101.083 58.8212 105.403 55.8599 111.106 51.5363C111.287 51.3998 111.558 51.5196 111.558 51.7425V58.6178C111.558 58.7655 111.684 58.8825 111.835 58.8825H118.239C118.39 58.8825 118.516 59.0023 118.516 59.1471V61.6766C118.516 61.8243 118.39 61.9413 118.239 61.9413H111.835C111.681 61.9413 111.558 62.0611 111.558 62.2059V90.2561C111.558 94.1005 113.481 96.0227 116.228 96.0227C116.771 96.0227 117.366 95.928 117.973 95.7692C118.209 95.7079 118.408 95.9531 118.282 96.1564C117.15 98.0118 114.553 100.917 109.36 100.917C103.226 100.917 99.198 97.2457 99.198 88.5066V88.5094ZM283.68 88.5094V62.1196C283.68 61.9719 283.557 61.8549 283.403 61.8549H280.087C279.79 61.8549 279.702 61.4705 279.97 61.3507C285.565 58.8212 289.885 55.8599 295.588 51.5363C295.769 51.3998 296.04 51.5196 296.04 51.7425V58.6178C296.04 58.7655 296.163 58.8825 296.317 58.8825H302.721C302.872 58.8825 302.998 59.0023 302.998 59.1471V61.6766C302.998 61.8243 302.872 61.9413 302.721 61.9413H296.317C296.163 61.9413 296.04 62.0611 296.04 62.2059V90.2561C296.04 94.1005 297.963 96.0227 300.71 96.0227C301.253 96.0227 301.848 95.9252 302.455 95.7692C302.691 95.7079 302.89 95.9531 302.764 96.1564C301.632 98.0118 299.034 100.917 293.842 100.917C287.708 100.917 283.68 97.2457 283.68 88.5066V88.5094ZM239.89 79.0711C239.89 66.2258 249.594 57.3113 262.048 57.3113C274.501 57.3113 279.626 64.2145 279.626 69.1091C279.626 82.2191 256.555 78.5474 256.555 91.1308C256.555 95.6745 259.669 98.2096 263.971 98.2096C269.966 98.2096 273.077 92.2842 273.982 88.5874C274.017 88.4453 274.163 88.3534 274.308 88.3896C276.162 88.8158 278.161 90.2032 278.161 92.7048C278.161 95.9391 272.943 100.92 262.506 100.92C249.597 100.92 239.89 91.9192 239.89 79.0711ZM115.3 79.0711C115.3 66.2258 125.004 57.3113 137.457 57.3113C149.911 57.3113 155.036 64.2145 155.036 69.1091C155.036 82.2191 131.965 78.5474 131.965 91.1308C131.965 95.6745 135.079 98.2096 139.381 98.2096C145.375 98.2096 148.484 92.2842 149.391 88.5874C149.426 88.4453 149.572 88.3534 149.721 88.3896C151.574 88.8158 153.574 90.2032 153.574 92.7048C153.574 95.9391 148.355 100.92 137.918 100.92C125.01 100.92 115.303 91.9192 115.303 79.0711H115.3ZM32.7425 100.307C32.4827 100.307 32.3601 99.9925 32.5615 99.8392C35.1911 97.8558 35.7282 92.989 35.7282 87.4592V75.575C35.7282 69.9337 35.1678 64.9026 32.3952 63.0612C32.1967 62.9302 32.2638 62.6377 32.5002 62.5876C38.387 61.4008 42.9691 59.6653 47.668 57.0216C47.8518 56.9185 48.0882 57.0438 48.0882 57.2472V87.4564C48.0882 92.9834 48.7041 97.8502 51.3453 99.8365C51.5496 99.9897 51.4271 100.304 51.1673 100.304H32.7425V100.307ZM52.2589 100.307C51.9991 100.307 51.8765 99.9925 52.0779 99.8392C54.7046 97.8558 55.2445 92.989 55.2445 87.4592V75.575C55.2445 69.9337 54.6842 64.9026 51.9115 63.0612C51.7131 62.9302 51.7802 62.6377 52.0166 62.5876C57.9033 61.4008 62.4855 59.6653 67.1844 57.0216C67.3682 56.9185 67.6017 57.0438 67.6017 57.2472V68.2539C67.6017 68.5436 68.022 68.6244 68.1358 68.3542C70.7421 62.1697 75.4322 57.3085 82.4338 57.3085C91.9541 57.3085 96.3495 65.2619 96.3495 74.6111V87.4564C96.3495 92.9834 96.9653 97.8502 99.5365 99.8365C99.7379 99.9925 99.6124 100.304 99.3527 100.304H80.9862C80.7265 100.304 80.6039 99.9925 80.8053 99.8365C83.3765 97.853 83.9923 92.9862 83.9923 87.4564V73.1235C83.9923 67.4432 82.1595 63.2478 78.2253 63.2478C73.4651 63.2478 67.6046 69.3654 67.6046 87.4536C67.6046 92.9806 68.2204 97.8474 70.8617 99.8337C71.066 99.9869 70.9435 100.302 70.6837 100.302H52.2589V100.307ZM155.231 100.307C154.972 100.307 154.849 99.9925 155.05 99.8392C157.68 97.8558 158.217 92.989 158.217 87.4592V75.575C158.217 69.8028 157.534 65.5907 155.441 63.0584C155.316 62.9052 155.406 62.6795 155.608 62.6405C161.576 61.4538 165.435 59.7043 170.157 57.0271C170.341 56.9213 170.577 57.0466 170.577 57.2528V67.1786C170.577 67.4766 171.006 67.5463 171.117 67.2677C173.361 61.5095 178.209 57.3141 183.67 57.3141C189.621 57.3141 192.551 61.334 192.551 65.1784C192.551 68.5882 190.26 71.8197 185.593 71.8197C184.963 71.8197 184.332 71.7556 183.646 71.6247C183.474 71.5941 183.378 71.4185 183.445 71.2653C183.74 70.6023 183.944 69.7694 183.944 68.9364C183.944 66.5768 182.295 64.0418 179.093 64.0418C175.156 64.0418 170.396 68.148 170.396 87.462C170.396 92.989 171.164 97.8558 173.831 99.8392C174.036 99.9925 173.913 100.307 173.653 100.307H155.231ZM193.298 100.307C193.038 100.307 192.916 99.9925 193.117 99.8392C195.747 97.8558 196.284 92.989 196.284 87.4592V75.575C196.284 70.0229 195.913 61.9023 193.281 59.4898C193.094 59.3198 193.219 59.0218 193.479 59.0301C198.954 59.2307 203.592 59.5037 208.227 57.016C208.413 56.9157 208.644 57.0411 208.644 57.2444V68.2539C208.644 68.5436 209.064 68.6244 209.178 68.3542C211.784 62.1697 216.474 57.3085 223.476 57.3085C232.996 57.3085 237.392 65.2619 237.392 74.6111V87.4564C237.392 92.9834 238.007 97.8502 240.576 99.8365C240.777 99.9925 240.652 100.304 240.395 100.304H222.028C221.769 100.304 221.646 99.9925 221.844 99.8365C224.416 97.853 225.032 92.9862 225.032 87.4564V73.1235C225.032 67.4432 223.202 63.2478 219.264 63.2478C214.501 63.2478 208.644 69.3654 208.644 87.4536C208.644 92.9806 209.26 97.8474 211.901 99.8337C212.105 99.9869 211.983 100.302 211.723 100.302H193.298V100.307ZM143.318 66.9251C143.318 62.2923 141.12 59.8463 137.825 59.8463C132.239 59.8463 128.302 67.5379 128.302 79.0711C128.302 82.0686 128.658 84.9352 129.364 87.5427C129.437 87.8074 129.831 87.8018 129.901 87.5372C132.099 79.3302 143.315 76.0653 143.315 66.9223L143.318 66.9251ZM267.908 66.9251C267.908 62.2923 265.71 59.8463 262.415 59.8463C256.829 59.8463 252.895 67.5379 252.895 79.0711C252.895 82.0686 253.248 84.9324 253.957 87.5427C254.03 87.8074 254.424 87.8018 254.494 87.5372C256.692 79.3302 267.908 76.0653 267.908 66.9223V66.9251ZM40.4212 41.8975C44.3846 41.9086 47.595 44.9813 47.595 48.7672C47.595 52.5531 44.3846 55.6259 40.4212 55.637H40.3978C36.4228 55.637 33.2007 52.5615 33.2007 48.7672C33.2007 44.973 36.4228 41.8975 40.3978 41.8975H40.4212Z"
                  fill="white"
                />
                <mask
                  id="mask0_1958_25152"
                  style="mask-type: luminance"
                  maskUnits="userSpaceOnUse"
                  x="32"
                  y="41"
                  width="271"
                  height="99"
                >
                  <path
                    d="M98.7359 123.029C99.7778 122.901 100.475 122.486 100.829 121.781C101.03 121.394 101.132 120.839 101.132 120.115C101.132 118.633 100.583 117.557 99.483 116.892C98.3857 116.223 96.8126 115.889 94.7667 115.889C92.4026 115.889 90.7245 116.502 89.7351 117.725C89.1805 118.402 88.8216 119.41 88.6523 120.747H84.4175C84.5021 117.563 85.5791 115.348 87.6512 114.1C89.7234 112.855 92.1283 112.231 94.863 112.231C98.0354 112.231 100.61 112.808 102.591 113.964C104.556 115.117 105.536 116.914 105.536 119.352V134.194C105.536 134.643 105.632 135.005 105.825 135.278C106.018 135.551 106.426 135.687 107.048 135.687C107.249 135.687 107.477 135.674 107.728 135.651C107.979 135.626 108.247 135.593 108.533 135.543V138.741C107.827 138.933 107.29 139.053 106.92 139.103C106.549 139.15 106.047 139.175 105.408 139.175C103.846 139.175 102.711 138.646 102.005 137.587C101.634 137.027 101.374 136.233 101.223 135.205C100.297 136.362 98.9694 137.362 97.2387 138.211C95.508 139.061 93.6022 139.487 91.5183 139.487C89.0142 139.487 86.9683 138.763 85.3806 137.312C83.7929 135.863 82.999 134.049 82.999 131.868C82.999 129.481 83.7812 127.631 85.3426 126.319C86.9041 125.007 88.9558 124.196 91.492 123.892L98.7271 123.029H98.7359ZM213.736 103.16H218.146V115.983C219.141 114.749 220.332 113.805 221.712 113.156C223.096 112.507 224.596 112.181 226.216 112.181C229.589 112.181 232.327 113.284 234.425 115.488C236.524 117.694 237.577 120.945 237.577 125.243C237.577 129.316 236.538 132.701 234.463 135.395C232.388 138.089 229.514 139.437 225.836 139.437C223.779 139.437 222.042 138.964 220.624 138.019C219.78 137.459 218.878 136.559 217.918 135.325V138.621H213.733V103.16H213.736ZM171.382 114.226C173.287 115.638 174.434 118.067 174.823 121.516H170.413C170.144 119.928 169.531 118.61 168.574 117.557C167.617 116.507 166.079 115.981 163.963 115.981C161.073 115.981 159.004 117.326 157.761 120.017C156.955 121.764 156.552 123.917 156.552 126.48C156.552 129.043 157.122 131.23 158.266 132.994C159.407 134.754 161.205 135.637 163.659 135.637C165.542 135.637 167.033 135.091 168.133 133.996C169.234 132.902 169.995 131.403 170.413 129.503H174.823C174.318 132.918 173.057 135.417 171.043 136.997C169.026 138.576 166.446 139.367 163.306 139.367C159.778 139.367 156.964 138.136 154.863 135.674C152.761 133.211 151.711 130.138 151.711 126.447C151.711 121.926 152.861 118.404 155.163 115.886C157.466 113.368 160.396 112.108 163.96 112.108C167.001 112.108 169.476 112.813 171.382 114.226ZM192.781 112.855V129.96C192.781 131.275 192.994 132.35 193.42 133.183C194.205 134.724 195.67 135.492 197.812 135.492C200.888 135.492 202.984 134.144 204.096 131.45C204.703 130.007 205.003 128.026 205.003 125.508V112.855H209.539V138.621H205.254L205.304 134.818C204.726 135.796 204.008 136.623 203.15 137.295C201.452 138.643 199.391 139.315 196.969 139.315C193.192 139.315 190.621 138.089 189.252 135.634C188.511 134.32 188.14 132.565 188.14 130.367V112.852H192.778L192.781 112.855ZM132.877 105.662H137.465V112.855H141.776V116.39H137.465V133.205C137.465 134.105 137.783 134.704 138.422 135.01C138.776 135.186 139.362 135.275 140.188 135.275C140.407 135.275 140.641 135.27 140.894 135.258C141.145 135.247 141.44 135.222 141.776 135.178V138.618C141.256 138.763 140.713 138.866 140.15 138.93C139.587 138.994 138.977 139.025 138.323 139.025C136.207 139.025 134.768 138.507 134.012 137.473C133.257 136.44 132.877 135.094 132.877 133.442V116.385H129.223V112.849H132.877V105.657V105.662ZM112.328 112.855H116.638V117.307C116.991 116.44 117.855 115.387 119.233 114.142C120.61 112.9 122.198 112.278 123.996 112.278C124.081 112.278 124.224 112.287 124.425 112.303C124.626 112.32 124.971 112.351 125.458 112.398V116.97C125.19 116.922 124.942 116.889 124.714 116.872C124.486 116.855 124.238 116.85 123.97 116.85C121.685 116.85 119.928 117.552 118.702 118.953C117.476 120.357 116.863 121.973 116.863 123.8V138.621H112.328V112.855ZM183.762 103.28H179.224V138.618H183.762V103.28ZM89.1835 134.726C90.1408 135.448 91.2761 135.807 92.5865 135.807C94.183 135.807 95.7269 135.456 97.2241 134.751C99.7457 133.581 101.004 131.67 101.004 129.01V125.528C100.449 125.865 99.737 126.146 98.8672 126.372C97.9946 126.597 97.1395 126.759 96.3018 126.854L93.5613 127.191C91.9182 127.4 90.6807 127.728 89.8547 128.174C88.4509 128.926 87.7505 130.127 87.7505 131.773C87.7505 133.021 88.2291 134.005 89.1864 134.726H89.1835ZM231.081 132.824C232.304 130.963 232.914 128.508 232.914 125.464C232.914 122.753 232.304 120.508 231.081 118.728C229.858 116.947 228.06 116.059 225.681 116.059C223.606 116.059 221.791 116.789 220.232 118.248C218.674 119.708 217.892 122.115 217.892 125.466C217.892 127.887 218.213 129.854 218.852 131.361C220.049 134.2 222.281 135.621 225.553 135.621C228.013 135.621 229.855 134.69 231.078 132.829L231.081 132.824ZM99.2 88.5016V62.1117C99.2 61.9641 99.0774 61.8471 98.9227 61.8471H95.6072C95.3124 61.8471 95.222 61.4627 95.4905 61.3429C101.085 58.8134 105.405 55.8521 111.108 51.5285C111.289 51.392 111.56 51.5118 111.56 51.7347V58.61C111.56 58.7576 111.686 58.8747 111.837 58.8747H118.241C118.392 58.8747 118.518 58.9944 118.518 59.1393V61.6688C118.518 61.8165 118.392 61.9335 118.241 61.9335H111.837C111.683 61.9335 111.56 62.0532 111.56 62.1981V90.2483C111.56 94.0927 113.483 96.0149 116.23 96.0149C116.773 96.0149 117.368 95.9202 117.975 95.7614C118.211 95.7001 118.41 95.9453 118.284 96.1486C117.152 98.004 114.554 100.91 109.362 100.91C103.228 100.91 99.2 97.2379 99.2 88.4988V88.5016ZM283.682 88.5016V62.1117C283.682 61.9641 283.559 61.8471 283.405 61.8471H280.089C279.791 61.8471 279.704 61.4627 279.972 61.3429C285.567 58.8134 289.887 55.8521 295.59 51.5285C295.771 51.392 296.042 51.5118 296.042 51.7347V58.61C296.042 58.7576 296.165 58.8747 296.319 58.8747H302.723C302.874 58.8747 303 58.9944 303 59.1393V61.6688C303 61.8165 302.874 61.9335 302.723 61.9335H296.319C296.165 61.9335 296.042 62.0532 296.042 62.1981V90.2483C296.042 94.0927 297.965 96.0149 300.712 96.0149C301.255 96.0149 301.85 95.9174 302.457 95.7614C302.693 95.7001 302.892 95.9453 302.766 96.1486C301.634 98.004 299.036 100.91 293.844 100.91C287.71 100.91 283.682 97.2379 283.682 88.4988V88.5016ZM239.892 79.0633C239.892 66.218 249.596 57.3035 262.05 57.3035C274.503 57.3035 279.628 64.2067 279.628 69.1013C279.628 82.2113 256.557 78.5396 256.557 91.123C256.557 95.6667 259.671 98.2017 263.973 98.2017C269.968 98.2017 273.079 92.2764 273.984 88.5796C274.019 88.4375 274.164 88.3456 274.31 88.3818C276.164 88.808 278.163 90.1954 278.163 92.697C278.163 95.9313 272.945 100.912 262.508 100.912C249.599 100.912 239.892 91.9114 239.892 79.0633ZM115.302 79.0633C115.302 66.218 125.006 57.3035 137.459 57.3035C149.913 57.3035 155.038 64.2067 155.038 69.1013C155.038 82.2113 131.967 78.5396 131.967 91.123C131.967 95.6667 135.081 98.2017 139.383 98.2017C145.377 98.2017 148.486 92.2764 149.393 88.5796C149.428 88.4375 149.574 88.3456 149.723 88.3818C151.576 88.808 153.576 90.1954 153.576 92.697C153.576 95.9313 148.357 100.912 137.92 100.912C125.012 100.912 115.305 91.9114 115.305 79.0633H115.302ZM32.7444 100.299C32.4847 100.299 32.3621 99.9847 32.5635 99.8314C35.1931 97.8479 35.7301 92.9812 35.7301 87.4514V75.5671C35.7301 69.9259 35.1697 64.8948 32.3971 63.0533C32.1987 62.9224 32.2658 62.6299 32.5022 62.5798C38.3889 61.393 42.971 59.6575 47.6699 57.0137C47.8538 56.9107 48.0902 57.036 48.0902 57.2394V87.4486C48.0902 92.9756 48.706 97.8424 51.3473 99.8287C51.5516 99.9819 51.429 100.297 51.1693 100.297H32.7444V100.299ZM52.2608 100.299C52.0011 100.299 51.8785 99.9847 52.0799 99.8314C54.7066 97.8479 55.2465 92.9812 55.2465 87.4514V75.5671C55.2465 69.9259 54.6861 64.8948 51.9135 63.0533C51.715 62.9224 51.7822 62.6299 52.0186 62.5798C57.9053 61.393 62.4874 59.6575 67.1863 57.0137C67.3702 56.9107 67.6037 57.036 67.6037 57.2394V68.2461C67.6037 68.5358 68.0239 68.6166 68.1378 68.3464C70.744 62.1619 75.4342 57.3007 82.4358 57.3007C91.9561 57.3007 96.3514 65.2541 96.3514 74.6033V87.4486C96.3514 92.9756 96.9673 97.8424 99.5385 99.8287C99.7399 99.9847 99.6144 100.297 99.3546 100.297H80.9882C80.7284 100.297 80.6058 99.9847 80.8072 99.8287C83.3785 97.8452 83.9943 92.9784 83.9943 87.4486V73.1156C83.9943 67.4354 82.1614 63.24 78.2272 63.24C73.467 63.24 67.6066 69.3576 67.6066 87.4458C67.6066 92.9728 68.2224 97.8396 70.8637 99.8259C71.068 99.9791 70.9454 100.294 70.6857 100.294H52.2608V100.299ZM155.233 100.299C154.974 100.299 154.851 99.9847 155.052 99.8314C157.682 97.8479 158.219 92.9812 158.219 87.4514V75.5671C158.219 69.795 157.536 65.5829 155.443 63.0506C155.318 62.8973 155.408 62.6717 155.61 62.6327C161.578 61.4459 165.437 59.6965 170.159 57.0193C170.343 56.9135 170.579 57.0388 170.579 57.245V67.1708C170.579 67.4688 171.008 67.5385 171.119 67.2599C173.363 61.5017 178.211 57.3062 183.672 57.3062C189.623 57.3062 192.553 61.3262 192.553 65.1705C192.553 68.5804 190.262 71.8119 185.595 71.8119C184.965 71.8119 184.334 71.7478 183.648 71.6169C183.476 71.5862 183.38 71.4107 183.447 71.2575C183.742 70.5945 183.946 69.7615 183.946 68.9286C183.946 66.569 182.297 64.0339 179.095 64.0339C175.158 64.0339 170.398 68.1402 170.398 87.4541C170.398 92.9812 171.166 97.8479 173.833 99.8314C174.038 99.9847 173.915 100.299 173.655 100.299H155.233ZM193.3 100.299C193.04 100.299 192.918 99.9847 193.119 99.8314C195.749 97.8479 196.286 92.9812 196.286 87.4514V75.5671C196.286 70.0151 195.915 61.8945 193.283 59.482C193.096 59.312 193.221 59.0139 193.481 59.0223C198.956 59.2229 203.594 59.4959 208.228 57.0082C208.415 56.9079 208.646 57.0332 208.646 57.2366V68.2461C208.646 68.5358 209.066 68.6166 209.18 68.3464C211.786 62.1619 216.476 57.3007 223.478 57.3007C232.998 57.3007 237.394 65.2541 237.394 74.6033V87.4486C237.394 92.9756 238.009 97.8424 240.578 99.8287C240.779 99.9847 240.654 100.297 240.397 100.297H222.03C221.771 100.297 221.648 99.9847 221.846 99.8287C224.418 97.8452 225.034 92.9784 225.034 87.4486V73.1156C225.034 67.4354 223.204 63.24 219.266 63.24C214.503 63.24 208.646 69.3576 208.646 87.4458C208.646 92.9728 209.262 97.8396 211.903 99.8259C212.107 99.9791 211.985 100.294 211.725 100.294H193.3V100.299ZM143.32 66.9172C143.32 62.2845 141.122 59.8385 137.827 59.8385C132.241 59.8385 128.304 67.5301 128.304 79.0633C128.304 82.0608 128.66 84.9274 129.366 87.5349C129.439 87.7996 129.833 87.794 129.903 87.5294C132.101 79.3224 143.317 76.0574 143.317 66.9145L143.32 66.9172ZM267.91 66.9172C267.91 62.2845 265.712 59.8385 262.417 59.8385C256.831 59.8385 252.897 67.5301 252.897 79.0633C252.897 82.0608 253.25 84.9246 253.959 87.5349C254.032 87.7996 254.426 87.794 254.496 87.5294C256.694 79.3224 267.91 76.0574 267.91 66.9145V66.9172ZM40.4231 41.8896C44.3865 41.9008 47.597 44.9735 47.597 48.7594C47.597 52.5453 44.3865 55.6181 40.4231 55.6292H40.3998C36.4247 55.6292 33.2026 52.5537 33.2026 48.7594C33.2026 44.9652 36.4247 41.8896 40.3998 41.8896H40.4231Z"
                    fill="white"
                  />
                </mask>
                <g mask="url(#mask0_1958_25152)">
                  <path
                    d="M87.625 114.85C87.625 115.109 87.8437 115.321 88.112 115.321C88.3803 115.321 88.599 115.109 88.599 114.85C88.599 114.591 88.3803 114.379 88.112 114.379C87.8437 114.379 87.625 114.591 87.625 114.85Z"
                    fill="white"
                  />
                  <path
                    d="M139.131 82.7669C139.131 83.0455 139.364 83.2712 139.65 83.2712C139.936 83.2712 140.172 83.0455 140.172 82.7669C140.172 82.4883 139.939 82.2627 139.65 82.2627C139.361 82.2627 139.131 82.4883 139.131 82.7669Z"
                    fill="white"
                  />
                  <path
                    d="M120.756 72.9036C120.756 73.1097 120.931 73.2797 121.144 73.2797C121.357 73.2797 121.532 73.1125 121.532 72.9036C121.532 72.6946 121.359 72.5303 121.144 72.5303C120.928 72.5303 120.756 72.6974 120.756 72.9036Z"
                    fill="white"
                  />
                  <path
                    d="M226.118 59.2388C226.118 58.9184 225.85 58.6621 225.518 58.6621C225.185 58.6621 224.917 58.9212 224.917 59.2388C224.917 59.5563 225.185 59.8154 225.518 59.8154C225.85 59.8154 226.118 59.5563 226.118 59.2388Z"
                    fill="white"
                  />
                  <path
                    d="M191.797 110.573C191.797 110.358 191.616 110.186 191.395 110.186C191.173 110.186 190.992 110.358 190.992 110.573C190.992 110.787 191.173 110.96 191.395 110.96C191.616 110.96 191.797 110.785 191.797 110.573Z"
                    fill="white"
                  />
                  <path
                    d="M230.562 137.221C230.562 136.987 230.364 136.798 230.121 136.798C229.879 136.798 229.681 136.987 229.681 137.221C229.681 137.455 229.876 137.645 230.121 137.645C230.367 137.645 230.562 137.455 230.562 137.221ZM182.4 138.115C182.4 137.906 182.225 137.737 182.006 137.737C181.787 137.737 181.615 137.906 181.615 138.115C181.615 138.324 181.79 138.494 182.006 138.494C182.222 138.494 182.4 138.324 182.4 138.115ZM92.4502 137.369C92.4502 137.622 92.6633 137.828 92.9259 137.828C93.1886 137.828 93.4017 137.622 93.4017 137.369C93.4017 137.115 93.1886 136.909 92.9259 136.909C92.6633 136.909 92.4502 137.115 92.4502 137.369ZM105.779 137.411C105.779 137.583 105.922 137.723 106.1 137.723C106.278 137.723 106.421 137.583 106.421 137.411C106.421 137.238 106.278 137.101 106.1 137.101C105.922 137.101 105.779 137.241 105.779 137.411ZM91.9891 136.748C91.9891 136.817 92.0475 136.873 92.1204 136.873C92.1934 136.873 92.2488 136.817 92.2488 136.748C92.2488 136.678 92.1905 136.622 92.1204 136.622C92.0504 136.622 91.9891 136.678 91.9891 136.748ZM216.944 135.591C216.944 135.486 216.854 135.399 216.746 135.399C216.638 135.399 216.547 135.486 216.547 135.591C216.547 135.697 216.638 135.784 216.746 135.784C216.854 135.784 216.944 135.697 216.944 135.591ZM88.4722 135.396C88.4722 135.527 88.5802 135.633 88.7174 135.633C88.8546 135.633 88.9625 135.527 88.9625 135.396C88.9625 135.266 88.8546 135.16 88.7174 135.16C88.5802 135.16 88.4722 135.266 88.4722 135.396ZM192.653 134.881C192.653 134.728 192.525 134.603 192.364 134.603C192.204 134.603 192.075 134.728 192.075 134.881C192.075 135.034 192.204 135.16 192.364 135.16C192.525 135.16 192.653 135.034 192.653 134.881ZM162.621 133.073C162.621 132.861 162.443 132.689 162.224 132.689C162.005 132.689 161.827 132.861 161.827 133.073C161.827 133.285 162.005 133.458 162.224 133.458C162.443 133.458 162.621 133.285 162.621 133.073ZM114.284 131.521C114.284 131.633 114.377 131.722 114.491 131.722C114.605 131.722 114.698 131.633 114.698 131.521C114.698 131.41 114.605 131.321 114.491 131.321C114.377 131.321 114.284 131.41 114.284 131.521ZM155.021 131.407C155.021 131.296 154.928 131.204 154.811 131.204C154.694 131.204 154.601 131.296 154.601 131.407C154.601 131.519 154.694 131.611 154.811 131.611C154.928 131.611 155.021 131.519 155.021 131.407ZM101.597 127.014C101.597 127.086 101.658 127.145 101.734 127.145C101.81 127.145 101.871 127.086 101.871 127.014C101.871 126.942 101.81 126.883 101.734 126.883C101.658 126.883 101.597 126.942 101.597 127.014ZM113.744 124.724C113.744 124.861 113.861 124.972 114.004 124.972C114.147 124.972 114.261 124.861 114.261 124.724C114.261 124.588 114.144 124.473 114.004 124.473C113.864 124.473 113.744 124.585 113.744 124.724ZM154.099 123.886C154.099 123.76 153.994 123.657 153.862 123.657C153.731 123.657 153.626 123.76 153.626 123.886C153.626 124.011 153.731 124.114 153.862 124.114C153.994 124.114 154.099 124.011 154.099 123.886ZM172.366 122.877C172.366 122.704 172.22 122.565 172.042 122.565C171.864 122.565 171.718 122.704 171.718 122.877C171.718 123.05 171.864 123.189 172.042 123.189C172.22 123.189 172.366 123.05 172.366 122.877ZM206.399 121.883C206.399 121.76 206.294 121.657 206.166 121.657C206.038 121.657 205.932 121.757 205.932 121.883C205.932 122.008 206.038 122.108 206.166 122.108C206.294 122.108 206.399 122.008 206.399 121.883ZM102.367 121.559C102.367 121.746 102.525 121.899 102.718 121.899C102.91 121.899 103.068 121.749 103.068 121.559C103.068 121.37 102.91 121.222 102.718 121.222C102.525 121.222 102.367 121.373 102.367 121.559ZM191.853 119.593C191.853 119.389 191.684 119.225 191.471 119.225C191.258 119.225 191.089 119.389 191.089 119.593C191.089 119.796 191.261 119.96 191.471 119.96C191.681 119.96 191.853 119.796 191.853 119.593ZM216.722 119.197C216.722 119.01 216.565 118.86 216.372 118.86C216.18 118.86 216.022 119.01 216.022 119.197C216.022 119.384 216.18 119.534 216.372 119.534C216.565 119.534 216.722 119.384 216.722 119.197ZM232.631 118.815C232.631 118.657 232.497 118.526 232.331 118.526C232.164 118.526 232.03 118.654 232.03 118.815C232.03 118.977 232.164 119.105 232.331 119.105C232.497 119.105 232.631 118.977 232.631 118.815ZM232.159 117.13C232.159 116.957 232.013 116.818 231.835 116.818C231.657 116.818 231.511 116.957 231.511 117.13C231.511 117.303 231.657 117.442 231.835 117.442C232.013 117.442 232.159 117.303 232.159 117.13ZM138.482 115.701C138.482 115.793 138.56 115.868 138.654 115.868C138.747 115.868 138.826 115.793 138.826 115.701C138.826 115.609 138.75 115.534 138.654 115.534C138.558 115.534 138.482 115.609 138.482 115.701ZM208.918 115.236C208.918 115.018 208.734 114.84 208.507 114.84C208.279 114.84 208.095 115.018 208.095 115.236C208.095 115.453 208.279 115.631 208.507 115.631C208.734 115.631 208.918 115.456 208.918 115.236ZM114.503 114.893C114.503 115.158 114.725 115.372 114.999 115.372C115.273 115.372 115.492 115.158 115.492 114.893C115.492 114.628 115.27 114.414 114.999 114.414C114.728 114.414 114.503 114.628 114.503 114.893ZM161.305 114.528C161.305 114.4 161.197 114.294 161.063 114.294C160.928 114.294 160.82 114.4 160.82 114.528C160.82 114.656 160.928 114.762 161.063 114.762C161.197 114.762 161.305 114.656 161.305 114.528ZM291.183 99.6268C291.183 99.4513 291.038 99.312 290.857 99.312C290.676 99.312 290.53 99.4541 290.53 99.6268C290.53 99.7995 290.676 99.9416 290.857 99.9416C291.038 99.9416 291.183 99.7995 291.183 99.6268ZM47.5512 99.4931C47.5512 99.7076 47.7321 99.8831 47.9539 99.8831C48.1757 99.8831 48.3567 99.7076 48.3567 99.4931C48.3567 99.2786 48.1757 99.1059 47.9539 99.1059C47.7321 99.1059 47.5512 99.2814 47.5512 99.4931ZM58.8401 98.8914C58.8401 99.0585 58.9802 99.1922 59.1524 99.1922C59.3246 99.1922 59.4647 99.0585 59.4647 98.8914C59.4647 98.7242 59.3246 98.5905 59.1524 98.5905C58.9802 98.5905 58.8401 98.7242 58.8401 98.8914ZM258.128 98.2562C258.128 98.0445 257.95 97.8718 257.728 97.8718C257.506 97.8718 257.328 98.0445 257.328 98.2562C257.328 98.4679 257.509 98.6434 257.728 98.6434C257.947 98.6434 258.128 98.4707 258.128 98.2562ZM272.064 96.5959C272.064 96.4622 271.953 96.3563 271.813 96.3563C271.673 96.3563 271.562 96.4649 271.562 96.5959C271.562 96.7268 271.673 96.8355 271.813 96.8355C271.953 96.8355 272.064 96.7268 272.064 96.5959ZM290.036 96.3674C290.036 96.2365 289.929 96.1334 289.794 96.1334C289.66 96.1334 289.552 96.2393 289.552 96.3674C289.552 96.4956 289.66 96.6015 289.794 96.6015C289.929 96.6015 290.036 96.4956 290.036 96.3674ZM209.592 96.139C209.592 95.8939 209.385 95.6961 209.134 95.6961C208.883 95.6961 208.676 95.8939 208.676 96.139C208.676 96.3842 208.88 96.582 209.134 96.582C209.388 96.582 209.592 96.3842 209.592 96.139ZM198.368 96.0443C198.368 95.9161 198.26 95.8103 198.125 95.8103C197.991 95.8103 197.883 95.9134 197.883 96.0443C197.883 96.1752 197.991 96.2783 198.125 96.2783C198.26 96.2783 198.368 96.1752 198.368 96.0443ZM109.535 95.8576C109.535 96.0136 109.667 96.1418 109.83 96.1418C109.994 96.1418 110.125 96.0136 110.125 95.8576C110.125 95.7016 109.994 95.5735 109.83 95.5735C109.667 95.5735 109.535 95.7016 109.535 95.8576ZM35.3574 95.6905C35.3574 95.7991 35.4479 95.8855 35.5588 95.8855C35.6697 95.8855 35.7602 95.7991 35.7602 95.6905C35.7602 95.5818 35.6697 95.4955 35.5588 95.4955C35.4479 95.4955 35.3574 95.5818 35.3574 95.6905ZM91.3324 94.5232C91.3324 94.7183 91.4959 94.877 91.6972 94.877C91.8986 94.877 92.0621 94.7183 92.0621 94.5232C92.0621 94.3282 91.8986 94.1694 91.6972 94.1694C91.4959 94.1694 91.3324 94.3282 91.3324 94.5232ZM150.83 94.5873C150.83 94.6904 150.918 94.7768 151.023 94.7768C151.128 94.7768 151.218 94.6932 151.218 94.5873C151.218 94.4815 151.131 94.3979 151.023 94.3979C150.915 94.3979 150.83 94.4815 150.83 94.5873ZM294.84 93.0161C294.84 92.796 294.654 92.615 294.423 92.615C294.193 92.615 294.006 92.7933 294.006 93.0161C294.006 93.239 294.193 93.4173 294.423 93.4173C294.654 93.4173 294.84 93.239 294.84 93.0161ZM121.306 93.0301C121.306 93.239 121.481 93.4061 121.697 93.4061C121.913 93.4061 122.088 93.2362 122.088 93.0301C122.088 92.8239 121.913 92.654 121.697 92.654C121.481 92.654 121.306 92.8239 121.306 93.0301ZM102.726 93.1387C102.726 93.434 102.975 93.6708 103.278 93.6708C103.582 93.6708 103.83 93.4312 103.83 93.1387C103.83 92.8462 103.585 92.6066 103.278 92.6066C102.972 92.6066 102.726 92.8462 102.726 93.1387ZM46.4363 90.4616C46.4363 90.573 46.5297 90.6649 46.6435 90.6649C46.7573 90.6649 46.8507 90.5758 46.8507 90.4616C46.8507 90.3473 46.7573 90.261 46.6435 90.261C46.5297 90.261 46.4363 90.3501 46.4363 90.4616ZM253.508 89.8515C253.508 89.5645 253.266 89.3305 252.968 89.3305C252.67 89.3305 252.428 89.5645 252.428 89.8515C252.428 90.1384 252.67 90.3724 252.968 90.3724C253.266 90.3724 253.508 90.1384 253.508 89.8515ZM134.915 130.012C134.915 130.154 135.035 130.268 135.181 130.268C135.327 130.268 135.449 130.154 135.449 130.012C135.449 129.869 135.33 129.755 135.181 129.755C135.032 129.755 134.915 129.869 134.915 130.012ZM87.2639 64.562C87.2639 64.7904 87.4537 64.9743 87.6901 64.9743C87.9265 64.9743 88.1162 64.7904 88.1162 64.562C88.1162 64.3336 87.9265 64.1497 87.6901 64.1497C87.4537 64.1497 87.2639 64.3336 87.2639 64.562ZM229.541 89.2386C229.541 89.1132 229.436 89.0102 229.304 89.0102C229.173 89.0102 229.068 89.1132 229.068 89.2386C229.068 89.3639 229.173 89.467 229.304 89.467C229.436 89.467 229.541 89.3639 229.541 89.2386ZM129.764 89.1104C129.764 89.2442 129.875 89.35 130.012 89.35C130.149 89.35 130.26 89.2414 130.26 89.1104C130.26 88.9795 130.149 88.8709 130.012 88.8709C129.875 88.8709 129.764 88.9795 129.764 89.1104ZM59.9842 88.4892C59.9842 88.6313 60.1039 88.7483 60.2527 88.7483C60.4016 88.7483 60.5212 88.6313 60.5212 88.4892C60.5212 88.3471 60.4016 88.2301 60.2527 88.2301C60.1039 88.2301 59.9842 88.3471 59.9842 88.4892ZM110.706 86.7258C110.706 86.8149 110.782 86.8902 110.875 86.8902C110.968 86.8902 111.044 86.8177 111.044 86.7258C111.044 86.6339 110.968 86.5614 110.875 86.5614C110.782 86.5614 110.706 86.6339 110.706 86.7258ZM166.336 95.4871C166.336 95.3729 166.243 95.2838 166.123 95.2838C166.004 95.2838 165.91 95.3757 165.91 95.4871C165.91 95.5986 166.007 95.6933 166.123 95.6933C166.24 95.6933 166.336 95.6014 166.336 95.4871ZM257.273 84.656C257.273 84.5585 257.191 84.4804 257.089 84.4804C256.987 84.4804 256.905 84.5585 256.905 84.656C256.905 84.7535 256.987 84.8315 257.089 84.8315C257.191 84.8315 257.273 84.7535 257.273 84.656ZM60.1768 83.8676C60.1768 84.1489 60.4103 84.3746 60.7022 84.3746C60.994 84.3746 61.2275 84.1489 61.2275 83.8676C61.2275 83.5862 60.9911 83.3606 60.7022 83.3606C60.4132 83.3606 60.1768 83.589 60.1768 83.8676ZM250.096 83.8926C250.096 83.7561 249.982 83.6475 249.842 83.6475C249.702 83.6475 249.588 83.7561 249.588 83.8926C249.588 84.0291 249.702 84.1378 249.842 84.1378C249.982 84.1378 250.096 84.0264 250.096 83.8926ZM207.722 83.394C207.722 83.2129 207.57 83.0681 207.383 83.0681C207.196 83.0681 207.044 83.2129 207.044 83.394C207.044 83.5751 207.196 83.7199 207.383 83.7199C207.57 83.7199 207.722 83.5723 207.722 83.394ZM246.562 83.3578C246.562 83.2129 246.439 83.0931 246.287 83.0931C246.136 83.0931 246.013 83.2101 246.013 83.3578C246.013 83.5054 246.136 83.6224 246.287 83.6224C246.439 83.6224 246.562 83.5026 246.562 83.3578ZM36.0871 82.9427C36.0871 83.2046 36.306 83.4191 36.5803 83.4191C36.8546 83.4191 37.0735 83.2073 37.0735 82.9427C37.0735 82.678 36.8546 82.4663 36.5803 82.4663C36.306 82.4663 36.0871 82.678 36.0871 82.9427ZM287.191 82.0206C287.191 81.8534 287.051 81.7169 286.876 81.7169C286.701 81.7169 286.56 81.8534 286.56 82.0206C286.56 82.1877 286.701 82.3242 286.876 82.3242C287.051 82.3242 287.191 82.1877 287.191 82.0206ZM160.917 82.0735C160.917 81.9509 160.812 81.8507 160.686 81.8507C160.561 81.8507 160.453 81.9509 160.453 82.0735C160.453 82.1961 160.558 82.2964 160.686 82.2964C160.814 82.2964 160.917 82.1961 160.917 82.0735ZM116.178 81.6362C116.178 81.7615 116.283 81.8646 116.414 81.8646C116.546 81.8646 116.651 81.7615 116.651 81.6362C116.651 81.5108 116.546 81.4077 116.414 81.4077C116.283 81.4077 116.178 81.5108 116.178 81.6362ZM38.2497 81.3994C38.2497 81.6083 38.4248 81.7754 38.6408 81.7754C38.8568 81.7754 39.0319 81.6055 39.0319 81.3994C39.0319 81.1932 38.8568 81.0233 38.6408 81.0233C38.4248 81.0233 38.2497 81.1932 38.2497 81.3994ZM123.661 66.682C123.661 66.8436 123.796 66.9745 123.962 66.9745C124.128 66.9745 124.262 66.8436 124.262 66.682C124.262 66.5204 124.128 66.3895 123.962 66.3895C123.796 66.3895 123.661 66.5204 123.661 66.682ZM124.011 80.6361C124.011 80.8394 124.181 81.0038 124.391 81.0038C124.601 81.0038 124.77 80.8394 124.77 80.6361C124.77 80.4327 124.601 80.2711 124.391 80.2711C124.181 80.2711 124.011 80.4355 124.011 80.6361ZM226.984 79.9229C226.984 79.8142 226.894 79.7279 226.78 79.7279C226.666 79.7279 226.578 79.8142 226.578 79.9229C226.578 80.0315 226.669 80.1179 226.78 80.1179C226.891 80.1179 226.984 80.0315 226.984 79.9229ZM292.193 79.8727C292.193 79.7697 292.106 79.6861 291.998 79.6861C291.89 79.6861 291.805 79.7697 291.805 79.8727C291.805 79.9758 291.893 80.0594 291.998 80.0594C292.103 80.0594 292.193 79.9758 292.193 79.8727ZM88.948 79.6945C88.948 79.8783 89.1026 80.0287 89.2923 80.0287C89.482 80.0287 89.6367 79.8783 89.6367 79.6945C89.6367 79.5106 89.482 79.3602 89.2923 79.3602C89.1026 79.3602 88.948 79.5106 88.948 79.6945ZM104.699 79.661C104.699 79.8003 104.816 79.9117 104.959 79.9117C105.102 79.9117 105.219 79.8003 105.219 79.661C105.219 79.5217 105.102 79.4103 104.959 79.4103C104.816 79.4103 104.699 79.5217 104.699 79.661ZM199.509 78.6442C199.509 78.5495 199.43 78.4743 199.331 78.4743C199.231 78.4743 199.153 78.5523 199.153 78.6442C199.153 78.7361 199.231 78.8169 199.331 78.8169C199.43 78.8169 199.509 78.7389 199.509 78.6442ZM57.3692 77.346C57.3692 77.5382 57.5326 77.697 57.7311 77.697C57.9295 77.697 58.093 77.541 58.093 77.346C58.093 77.151 57.9325 76.995 57.7311 76.995C57.5297 76.995 57.3692 77.151 57.3692 77.346ZM148.691 77.3405C148.691 77.5076 148.831 77.6441 149.006 77.6441C149.181 77.6441 149.321 77.5076 149.321 77.3405C149.321 77.1733 149.181 77.0368 149.006 77.0368C148.831 77.0368 148.691 77.1733 148.691 77.3405ZM207.649 76.9616C207.649 76.7499 207.471 76.5799 207.252 76.5799C207.033 76.5799 206.855 76.7527 206.855 76.9616C206.855 77.1705 207.033 77.346 207.252 77.346C207.471 77.346 207.649 77.1761 207.649 76.9616ZM39.0173 76.4295C39.0173 76.6161 39.172 76.7666 39.3646 76.7666C39.5572 76.7666 39.7148 76.6161 39.7148 76.4295C39.7148 76.2429 39.5601 76.0924 39.3646 76.0924C39.1691 76.0924 39.0173 76.2429 39.0173 76.4295ZM270.199 76.4796C270.199 76.3236 270.068 76.1955 269.904 76.1955C269.741 76.1955 269.61 76.3209 269.61 76.4796C269.61 76.6384 269.741 76.7638 269.904 76.7638C270.068 76.7638 270.199 76.6384 270.199 76.4796ZM243.086 75.8974C243.086 75.8166 243.016 75.7498 242.931 75.7498C242.846 75.7498 242.779 75.8166 242.779 75.8974C242.779 75.9782 242.849 76.0451 242.931 76.0451C243.013 76.0451 243.086 75.9782 243.086 75.8974ZM109.565 68.3395C109.565 68.6181 109.798 68.8438 110.087 68.8438C110.376 68.8438 110.609 68.6181 110.609 68.3395C110.609 68.061 110.376 67.8353 110.087 67.8353C109.798 67.8353 109.565 68.061 109.565 68.3395ZM57.5706 63.3168C57.5706 63.4338 57.6698 63.5285 57.7894 63.5285C57.9091 63.5285 58.0083 63.4338 58.0083 63.3168C58.0083 63.1998 57.9091 63.105 57.7894 63.105C57.6698 63.105 57.5706 63.1998 57.5706 63.3168ZM146.811 73.6103C146.811 73.8304 146.998 74.0114 147.226 74.0114C147.453 74.0114 147.64 73.8304 147.64 73.6103C147.64 73.3902 147.453 73.2091 147.226 73.2091C146.998 73.2091 146.811 73.3874 146.811 73.6103ZM228.829 72.8163C228.829 72.6603 228.697 72.535 228.537 72.535C228.376 72.535 228.245 72.6603 228.245 72.8163C228.245 72.9723 228.376 73.0977 228.537 73.0977C228.697 73.0977 228.829 72.9723 228.829 72.8163ZM166.056 72.691C166.056 72.5294 165.919 72.3985 165.753 72.3985C165.586 72.3985 165.446 72.5294 165.446 72.691C165.446 72.8525 165.583 72.9835 165.753 72.9835C165.922 72.9835 166.056 72.8525 166.056 72.691ZM289.698 60.7928C289.698 60.6229 289.555 60.4864 289.38 60.4864C289.205 60.4864 289.062 60.6229 289.062 60.7928C289.062 60.9628 289.205 61.0993 289.38 61.0993C289.555 61.0993 289.698 60.9628 289.698 60.7928ZM148.422 63.0159C148.422 62.8265 148.265 62.676 148.069 62.676C147.874 62.676 147.716 62.8292 147.716 63.0159C147.716 63.2025 147.874 63.3558 148.069 63.3558C148.265 63.3558 148.422 63.2025 148.422 63.0159ZM99.4723 70.9749C99.4723 71.1309 99.6036 71.2563 99.7641 71.2563C99.9246 71.2563 100.053 71.1309 100.053 70.9749C100.053 70.8189 99.9246 70.6935 99.7641 70.6935C99.6036 70.6935 99.4723 70.8189 99.4723 70.9749ZM251.202 70.4763C251.202 70.2617 251.021 70.0862 250.797 70.0862C250.572 70.0862 250.391 70.2617 250.391 70.4763C250.391 70.6908 250.572 70.8663 250.797 70.8663C251.021 70.8663 251.202 70.6908 251.202 70.4763ZM164.273 69.2839C164.273 69.0778 164.098 68.9106 163.885 68.9106C163.672 68.9106 163.497 69.0778 163.497 69.2839C163.497 69.4901 163.672 69.6572 163.885 69.6572C164.098 69.6572 164.273 69.4901 164.273 69.2839ZM63.5799 69.2811C63.5799 69.4511 63.7229 69.5876 63.898 69.5876C64.0731 69.5876 64.2161 69.4511 64.2161 69.2811C64.2161 69.1112 64.0731 68.9747 63.898 68.9747C63.7229 68.9747 63.5799 69.114 63.5799 69.2811ZM244.005 68.3033C244.005 68.125 243.853 67.9774 243.669 67.9774C243.486 67.9774 243.331 68.1223 243.331 68.3033C243.331 68.4844 243.483 68.6293 243.669 68.6293C243.856 68.6293 244.005 68.4844 244.005 68.3033ZM197.054 68.3758C197.054 68.2755 196.97 68.1947 196.867 68.1947C196.765 68.1947 196.681 68.2755 196.681 68.3758C196.681 68.4761 196.765 68.5568 196.867 68.5568C196.97 68.5568 197.054 68.4761 197.054 68.3758ZM227.722 68.2783C227.722 68.1473 227.611 68.0415 227.474 68.0415C227.337 68.0415 227.226 68.1473 227.226 68.2783C227.226 68.4092 227.337 68.5178 227.474 68.5178C227.611 68.5178 227.722 68.412 227.722 68.2783ZM102.151 68.164C102.151 68.3395 102.297 68.4816 102.481 68.4816C102.665 68.4816 102.808 68.3395 102.808 68.164C102.808 67.9885 102.662 67.8465 102.481 67.8465C102.3 67.8465 102.151 67.9885 102.151 68.164ZM36.8079 64.0773C36.8079 64.2639 36.9655 64.4144 37.1582 64.4144C37.3508 64.4144 37.5084 64.2639 37.5084 64.0773C37.5084 63.8906 37.3537 63.7374 37.1582 63.7374C36.9626 63.7374 36.8079 63.8878 36.8079 64.0773ZM140.42 68.164C140.42 68.2532 140.495 68.3256 140.586 68.3256C140.676 68.3256 140.752 68.2532 140.752 68.164C140.752 68.0749 140.679 68.0025 140.586 68.0025C140.493 68.0025 140.42 68.0749 140.42 68.164ZM43.687 67.6041C43.687 67.774 43.83 67.9105 44.0051 67.9105C44.1802 67.9105 44.3232 67.774 44.3232 67.6041C44.3232 67.4342 44.1802 67.2977 44.0051 67.2977C43.83 67.2977 43.687 67.4342 43.687 67.6041ZM201.263 91.2834C201.263 91.1079 201.117 90.9658 200.933 90.9658C200.749 90.9658 200.603 91.1079 200.603 91.2834C200.603 91.4589 200.749 91.6009 200.933 91.6009C201.117 91.6009 201.263 91.4589 201.263 91.2834ZM254.08 66.0413C254.08 65.9131 253.972 65.81 253.841 65.81C253.709 65.81 253.601 65.9131 253.601 66.0413C253.601 66.1694 253.709 66.2725 253.841 66.2725C253.972 66.2725 254.08 66.1694 254.08 66.0413ZM230.463 64.9604C230.463 64.7487 230.285 64.5787 230.066 64.5787C229.847 64.5787 229.669 64.7487 229.669 64.9604C229.669 65.1721 229.847 65.342 230.066 65.342C230.285 65.342 230.463 65.1721 230.463 64.9604ZM199.503 64.9715C199.503 64.8183 199.374 64.6929 199.214 64.6929C199.053 64.6929 198.925 64.8183 198.925 64.9715C198.925 65.1247 199.053 65.2501 199.214 65.2501C199.374 65.2501 199.503 65.1247 199.503 64.9715ZM273.585 63.1998C273.585 62.8794 273.316 62.6231 272.986 62.6231C272.656 62.6231 272.388 62.8822 272.388 63.1998C272.388 63.5173 272.656 63.7764 272.986 63.7764C273.316 63.7764 273.585 63.5173 273.585 63.1998ZM131.127 62.5702C131.159 62.7039 131.282 62.8042 131.43 62.8042C131.603 62.8042 131.74 62.6705 131.74 62.5033C131.74 62.3362 131.6 62.2024 131.43 62.2024C131.299 62.2024 131.188 62.2804 131.142 62.3891C131.112 62.1662 130.92 61.9935 130.68 61.9935C130.424 61.9935 130.216 62.1941 130.216 62.442C130.216 62.69 130.424 62.8905 130.68 62.8905C130.891 62.8905 131.069 62.754 131.124 62.5674L131.127 62.5702ZM295.334 62.2916C295.334 62.1634 295.226 62.0576 295.091 62.0576C294.957 62.0576 294.849 62.1607 294.849 62.2916C294.849 62.4225 294.957 62.5256 295.091 62.5256C295.226 62.5256 295.334 62.4225 295.334 62.2916ZM185.327 61.5116C185.327 61.3778 185.214 61.2692 185.076 61.2692C184.939 61.2692 184.825 61.3778 184.825 61.5116C184.825 61.6453 184.939 61.7539 185.076 61.7539C185.214 61.7539 185.327 61.6453 185.327 61.5116ZM256.558 59.9125C256.558 59.7454 256.418 59.6089 256.243 59.6089C256.067 59.6089 255.927 59.7454 255.927 59.9125C255.927 60.0797 256.067 60.2162 256.243 60.2162C256.418 60.2162 256.558 60.0797 256.558 59.9125ZM101.53 59.854C101.53 60.0072 101.658 60.1326 101.819 60.1326C101.979 60.1326 102.108 60.0072 102.108 59.854C102.108 59.7008 101.979 59.5754 101.819 59.5754C101.658 59.5754 101.53 59.7008 101.53 59.854ZM47.1922 58.7843C47.1922 58.9124 47.3002 59.0155 47.4315 59.0155C47.5628 59.0155 47.6708 58.9124 47.6708 58.7843C47.6708 58.6561 47.5628 58.553 47.4315 58.553C47.3002 58.553 47.1922 58.6561 47.1922 58.7843ZM45.3797 51.1205C45.3797 51.2654 45.5023 51.3824 45.6512 51.3824C45.8 51.3824 45.9226 51.2654 45.9226 51.1205C45.9226 50.9757 45.8 50.8587 45.6512 50.8587C45.5023 50.8587 45.3797 50.9757 45.3797 51.1205ZM37.4325 46.4543C37.4325 46.6187 37.5697 46.7524 37.7419 46.7524C37.9141 46.7524 38.0513 46.6187 38.0513 46.4543C38.0513 46.29 37.9141 46.1562 37.7419 46.1562C37.5697 46.1562 37.4325 46.29 37.4325 46.4543Z"
                    fill="white"
                  />
                </g>
                <path
                  d="M192.777 112.866V129.971C192.777 131.286 192.99 132.361 193.416 133.194C194.201 134.735 195.667 135.503 197.809 135.503C200.885 135.503 202.981 134.155 204.092 131.461C204.7 130.018 205 128.038 205 125.519V112.866H209.536V138.632H205.251L205.301 134.829C204.723 135.807 204.005 136.634 203.147 137.306C201.448 138.654 199.388 139.326 196.965 139.326C193.189 139.326 190.617 138.1 189.249 135.646C188.507 134.331 188.137 132.576 188.137 130.378V112.863H192.774L192.777 112.866Z"
                  fill="white"
                />
                <path
                  d="M183.759 103.292H179.221V138.63H183.759V103.292Z"
                  fill="white"
                />
                <path
                  d="M112.32 112.865H116.631V117.316C116.984 116.45 117.848 115.397 119.226 114.152C120.603 112.909 122.191 112.288 123.989 112.288C124.073 112.288 124.216 112.296 124.418 112.313C124.619 112.33 124.963 112.361 125.451 112.408V116.979C125.182 116.932 124.934 116.899 124.707 116.882C124.479 116.865 124.231 116.86 123.962 116.86C121.677 116.86 119.92 117.562 118.694 118.963C117.469 120.367 116.856 121.983 116.856 123.81V138.631H112.32V112.865Z"
                  fill="white"
                />
                <path
                  d="M99.1965 88.5104V62.1206C99.1965 61.9729 99.0739 61.8559 98.9193 61.8559H95.6038C95.309 61.8559 95.2185 61.4715 95.487 61.3517C101.082 58.8222 105.401 55.8609 111.104 51.5373C111.285 51.4008 111.557 51.5206 111.557 51.7435V58.6188C111.557 58.7665 111.682 58.8835 111.834 58.8835H118.237C118.389 58.8835 118.514 59.0033 118.514 59.1481V61.6776C118.514 61.8253 118.389 61.9423 118.237 61.9423H111.834C111.679 61.9423 111.557 62.0621 111.557 62.2069V90.2571C111.557 94.1015 113.48 96.0237 116.226 96.0237C116.769 96.0237 117.365 95.929 117.972 95.7702C118.208 95.7089 118.406 95.9541 118.281 96.1574C117.149 98.0128 114.551 100.918 109.359 100.918C103.224 100.918 99.1965 97.2467 99.1965 88.5076"
                  fill="white"
                />
                <path
                  d="M143.313 66.9222C143.313 62.2895 141.115 59.8435 137.82 59.8435C132.234 59.8435 128.297 67.5351 128.297 79.0683C128.297 82.0658 128.653 84.9324 129.359 87.5399C129.432 87.8046 129.826 87.799 129.896 87.5343C132.094 79.3274 143.31 76.0624 143.31 66.9194M115.295 79.0655C115.295 66.2202 124.999 57.3057 137.453 57.3057C149.906 57.3057 155.031 64.2089 155.031 69.1035C155.031 82.2135 131.96 78.5418 131.96 91.1252C131.96 95.6689 135.074 98.204 139.376 98.204C145.371 98.204 148.479 92.2786 149.387 88.5818C149.422 88.4397 149.568 88.3478 149.716 88.384C151.57 88.8103 153.569 90.1976 153.569 92.6992C153.569 95.9335 148.35 100.915 137.914 100.915C125.005 100.915 115.298 91.9136 115.298 79.0655"
                  fill="white"
                />
                <path
                  d="M193.29 100.313C193.03 100.313 192.908 99.9981 193.109 99.8448C195.739 97.8614 196.276 92.9946 196.276 87.4648V75.5806C196.276 70.0285 195.905 61.9079 193.273 59.4954C193.086 59.3254 193.211 59.0274 193.471 59.0357C198.946 59.2363 203.584 59.5093 208.219 57.0216C208.405 56.9213 208.636 57.0467 208.636 57.25V68.2595C208.636 68.5492 209.056 68.63 209.17 68.3598C211.776 62.1753 216.466 57.3141 223.468 57.3141C232.988 57.3141 237.384 65.2675 237.384 74.6167V87.462C237.384 92.989 238 97.8558 240.568 99.8421C240.769 99.9981 240.644 100.31 240.387 100.31H222.02C221.761 100.31 221.638 99.9981 221.837 99.8421C224.408 97.8586 225.024 92.9918 225.024 87.462V73.1291C225.024 67.4488 223.194 63.2534 219.257 63.2534C214.493 63.2534 208.636 69.371 208.636 87.4592C208.636 92.9862 209.252 97.853 211.893 99.8393C212.097 99.9925 211.975 100.307 211.715 100.307H193.29V100.313Z"
                  fill="white"
                />
                <path
                  d="M155.225 100.312C154.965 100.312 154.842 99.9969 155.044 99.8437C157.673 97.8602 158.21 92.9934 158.21 87.4636V75.5794C158.21 69.8072 157.527 65.5951 155.435 63.0628C155.309 62.9096 155.4 62.6839 155.601 62.6449C161.57 61.4582 165.428 59.7087 170.15 57.0316C170.334 56.9257 170.57 57.0511 170.57 57.2572V67.183C170.57 67.4811 171 67.5507 171.11 67.2721C173.355 61.5139 178.203 57.3185 183.663 57.3185C189.614 57.3185 192.544 61.3384 192.544 65.1828C192.544 68.5926 190.253 71.8241 185.586 71.8241C184.956 71.8241 184.326 71.7601 183.64 71.6291C183.468 71.5985 183.371 71.423 183.438 71.2698C183.733 70.6067 183.937 69.7738 183.937 68.9408C183.937 66.5813 182.289 64.0462 179.087 64.0462C175.15 64.0462 170.39 68.1525 170.39 87.4664C170.39 92.9934 171.157 97.8602 173.825 99.8437C174.029 99.9969 173.906 100.312 173.647 100.312H155.225Z"
                  fill="white"
                />
                <path
                  d="M267.904 66.9222C267.904 62.2895 265.706 59.8435 262.411 59.8435C256.825 59.8435 252.891 67.5351 252.891 79.0683C252.891 82.0658 253.244 84.9296 253.953 87.5399C254.026 87.8046 254.42 87.799 254.49 87.5343C256.688 79.3274 267.904 76.0624 267.904 66.9194M239.889 79.0655C239.889 66.2202 249.593 57.3057 262.046 57.3057C274.5 57.3057 279.625 64.2089 279.625 69.1035C279.625 82.2135 256.554 78.5418 256.554 91.1252C256.554 95.6689 259.668 98.204 263.97 98.204C269.964 98.204 273.076 92.2786 273.98 88.5818C274.015 88.4397 274.161 88.3478 274.307 88.384C276.16 88.8103 278.16 90.1976 278.16 92.6992C278.16 95.9335 272.941 100.915 262.505 100.915C249.596 100.915 239.889 91.9136 239.889 79.0655Z"
                  fill="white"
                />
                <path
                  d="M32.7376 100.313C32.4778 100.313 32.3553 99.998 32.5566 99.8448C35.1863 97.8613 35.7233 92.9945 35.7233 87.4647V75.5805C35.7233 69.9392 35.1629 64.9081 32.3903 63.0667C32.1918 62.9357 32.2589 62.6432 32.4953 62.5931C38.3821 61.4063 42.9642 59.6708 47.6631 57.0271C47.847 56.924 48.0834 57.0494 48.0834 57.2527V87.4619C48.0834 92.9889 48.6992 97.8557 51.3405 99.842C51.5448 99.9952 51.4222 100.31 51.1624 100.31H32.7376V100.313Z"
                  fill="white"
                />
                <path
                  d="M231.074 132.836C232.297 130.975 232.907 128.521 232.907 125.476C232.907 122.766 232.297 120.52 231.074 118.74C229.852 116.96 228.054 116.071 225.675 116.071C223.6 116.071 221.785 116.801 220.226 118.261C218.668 119.721 217.885 122.128 217.885 125.479C217.885 127.9 218.207 129.867 218.846 131.374C220.042 134.212 222.275 135.633 225.547 135.633C228.007 135.633 229.849 134.703 231.072 132.842M213.727 103.179H218.136V116.002C219.132 114.768 220.322 113.823 221.703 113.174C223.086 112.525 224.586 112.199 226.206 112.199C229.58 112.199 232.318 113.302 234.416 115.506C236.515 117.712 237.568 120.963 237.568 125.262C237.568 129.335 236.529 132.719 234.454 135.413C232.379 138.107 229.504 139.455 225.827 139.455C223.769 139.455 222.033 138.982 220.614 138.037C219.771 137.477 218.869 136.578 217.909 135.344V138.639H213.724V103.179H213.727Z"
                  fill="white"
                />
                <path
                  d="M171.372 114.232C173.278 115.645 174.425 118.074 174.813 121.523H170.403C170.135 119.935 169.522 118.617 168.565 117.564C167.607 116.514 166.069 115.987 163.953 115.987C161.064 115.987 158.995 117.333 157.751 120.024C156.946 121.771 156.543 123.924 156.543 126.487C156.543 129.05 157.112 131.237 158.256 133C159.397 134.761 161.195 135.644 163.65 135.644C165.532 135.644 167.024 135.098 168.124 134.003C169.224 132.908 169.986 131.41 170.403 129.51H174.813C174.308 132.925 173.047 135.424 171.034 137.004C169.017 138.583 166.437 139.374 163.297 139.374C159.768 139.374 156.955 138.143 154.853 135.68C152.752 133.218 151.701 130.145 151.701 126.454C151.701 121.932 152.851 118.411 155.154 115.893C157.457 113.374 160.387 112.115 163.95 112.115C166.991 112.115 169.466 112.82 171.372 114.232Z"
                  fill="white"
                />
                <path
                  d="M132.872 105.672H137.46V112.865H141.77V116.4H137.46V133.215C137.46 134.115 137.778 134.714 138.417 135.02C138.77 135.195 139.357 135.285 140.183 135.285C140.402 135.285 140.635 135.279 140.889 135.268C141.14 135.257 141.435 135.232 141.77 135.187V138.628C141.251 138.772 140.708 138.875 140.145 138.94C139.582 139.004 138.972 139.034 138.318 139.034C136.202 139.034 134.763 138.516 134.007 137.483C133.251 136.449 132.872 135.104 132.872 133.452V116.394H129.218V112.859H132.872V105.666V105.672Z"
                  fill="white"
                />
                <path
                  d="M89.1776 134.739C90.1349 135.461 91.2702 135.82 92.5806 135.82C94.1771 135.82 95.721 135.469 97.2182 134.765C99.7399 133.594 100.998 131.683 100.998 129.023V125.541C100.443 125.878 99.7311 126.159 98.8614 126.385C97.9887 126.61 97.1336 126.772 96.296 126.867L93.5554 127.204C91.9123 127.413 90.6748 127.742 89.8489 128.187C88.445 128.939 87.7446 130.14 87.7446 131.787C87.7446 133.035 88.2232 134.018 89.1805 134.739M98.733 123.042C99.7749 122.914 100.472 122.499 100.826 121.794C101.027 121.407 101.129 120.852 101.129 120.128C101.129 118.646 100.58 117.571 99.4801 116.905C98.3827 116.236 96.8096 115.902 94.7637 115.902C92.3997 115.902 90.7215 116.515 89.7321 117.738C89.1776 118.415 88.8186 119.423 88.6493 120.76H84.4145C84.4992 117.576 85.5761 115.361 87.6483 114.113C89.7204 112.868 92.1253 112.244 94.86 112.244C98.0325 112.244 100.607 112.821 102.588 113.977C104.553 115.13 105.533 116.927 105.533 119.365V134.207C105.533 134.656 105.63 135.018 105.822 135.291C106.015 135.564 106.423 135.701 107.045 135.701C107.246 135.701 107.474 135.687 107.725 135.664C107.976 135.639 108.245 135.606 108.531 135.556V138.754C107.824 138.946 107.287 139.066 106.917 139.116C106.546 139.163 106.044 139.188 105.405 139.188C103.843 139.188 102.708 138.659 102.002 137.6C101.631 137.041 101.371 136.247 101.22 135.219C100.294 136.375 98.9664 137.375 97.2357 138.224C95.505 139.074 93.5992 139.5 91.5154 139.5C89.0112 139.5 86.9653 138.776 85.3776 137.325C83.7899 135.876 82.9961 134.063 82.9961 131.881C82.9961 129.494 83.7783 127.644 85.3397 126.332C86.9011 125.02 88.9529 124.209 91.4891 123.905L98.7242 123.042H98.733Z"
                  fill="white"
                />
                <path
                  d="M283.674 88.5104V62.1206C283.674 61.9729 283.551 61.8559 283.397 61.8559H280.081C279.784 61.8559 279.696 61.4715 279.964 61.3517C285.559 58.8222 289.879 55.8609 295.582 51.5373C295.763 51.4008 296.034 51.5206 296.034 51.7435V58.6188C296.034 58.7665 296.157 58.8835 296.311 58.8835H302.715C302.866 58.8835 302.992 59.0033 302.992 59.1481V61.6776C302.992 61.8253 302.866 61.9423 302.715 61.9423H296.311C296.157 61.9423 296.034 62.0621 296.034 62.2069V90.2571C296.034 94.1015 297.957 96.0237 300.704 96.0237C301.247 96.0237 301.842 95.9262 302.449 95.7702C302.685 95.7089 302.884 95.9541 302.758 96.1574C301.626 98.0128 299.028 100.918 293.836 100.918C287.702 100.918 283.674 97.2467 283.674 88.5076"
                  fill="white"
                />
                <path
                  d="M52.2532 100.313C51.9935 100.313 51.8709 99.998 52.0723 99.8448C54.699 97.8613 55.2389 92.9945 55.2389 87.4647V75.5805C55.2389 69.9392 54.6785 64.9081 51.9059 63.0667C51.7074 62.9357 51.7746 62.6432 52.011 62.5931C57.8977 61.4063 62.4798 59.6708 67.1787 57.0271C67.3626 56.924 67.5961 57.0494 67.5961 57.2527V68.2594C67.5961 68.5491 68.0163 68.6299 68.1302 68.3597C70.7364 62.1752 75.4265 57.314 82.4282 57.314C91.9485 57.314 96.3438 65.2675 96.3438 74.6166V87.4619C96.3438 92.9889 96.9597 97.8557 99.5309 99.842C99.7323 99.998 99.6068 100.31 99.347 100.31H80.9806C80.7208 100.31 80.5982 99.998 80.7996 99.842C83.3708 97.8585 83.9867 92.9917 83.9867 87.4619V73.129C83.9867 67.4487 82.1538 63.2533 78.2196 63.2533C73.4594 63.2533 67.599 69.3709 67.599 87.4591C67.599 92.9861 68.2148 97.8529 70.8561 99.8392C71.0604 99.9924 70.9378 100.307 70.6781 100.307H52.2532V100.313Z"
                  fill="white"
                />
                <path
                  d="M33.3477 48.7716C33.3477 45.0554 36.5026 42.0439 40.396 42.0439C44.2893 42.0439 47.4443 45.0554 47.4443 48.7716C47.4443 52.4879 44.2893 55.4993 40.396 55.4993C36.5026 55.4993 33.3477 52.4879 33.3477 48.7716Z"
                  fill="white"
                />
              </svg>
            </a>
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/nextjs_logo.png"
                    alt="Next.js logo"
                    loading="lazy"
                  />
                  <span>Next.js</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
                <div class="languages-and-tools-row" id="tailwind">
                  <img
                    src="/tailwind_logo.png"
                    class="languages-and-tools-image"
                    alt="tailwindcss logo"
                    loading="lazy"
                  /><span>tailwindcss</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/digital_ocean_logo.png"
                    alt="Digital Ocean logo"
                    loading="lazy"
                  />
                  <span>Digital Ocean</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/vercel_logo.png"
                    alt="Vercel logo"
                    loading="lazy"
                  />
                  <span>Vercel</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/github.png"
                    alt="GitHub logo"
                    loading="lazy"
                  />
                  <span>GitHub</span>
                </div>
              </div>

              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/shopify_logo.png"
                    alt="Shopify logo"
                    loading="lazy"
                  />
                  <span>Shopify</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/strapi_logo.png"
                    alt="Strapi logo"
                    loading="lazy"
                  />
                  <span>Strapi</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/aws_logo.png"
                    alt="AWS S3 logo"
                    loading="lazy"
                  />
                  <span>AWS S3</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/figma_logo.png"
                    alt="Figma logo"
                    loading="lazy"
                    id="figma-logo"
                  />
                  <span>Figma</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="creature-world-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/creature_world.png"
                alt="Creature world logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">creature.world</h1>
              <p class="subtitle gold">
                <i>Artist Portfolio Website</i>
              </p>
            </div>
          </div>
          <div class="content">
            <div class="phone-hero">
              <div class="white-bg"></div>
              <div class="gold-bg"></div>
              <a
                class="left-phone phone"
                href="https://creature.world/explore"
                rel="noreferrer"
                target="_blank"
              >
                <div class="top-block blue"></div>
                <video
                  src="/creature_world_explore-phone.mp4"
                  autoplay
                  muted
                  loop
                  playsinline
                  disablePictureInPicture
                  disableRemotePlayback
                ></video>
                <img
                  src="/phone_chin.png"
                  class="phone-chin"
                  alt="phone displaying creature.world explore page, with a selected projects section, artwork gallery section and project archive"
                />
                <img
                  src="/phone_overlay.png"
                  alt="phone displaying creature.world explore page, with a selected projects section, artwork gallery section and project archive"
                />
              </a>
              <a
                class="middle-phone phone"
                href="https://creature.world"
                rel="noreferrer"
                target="_blank"
              >
                <div class="top-block white"></div>

                <video
                  src="/creature_world_homepage_phone.mp4"
                  autoplay
                  muted
                  loop
                  playsinline
                  disablePictureInPicture
                  disableRemotePlayback
                ></video>
                <img
                  src="/phone_chin.png"
                  class="phone-chin"
                  alt="phone displaying creature.world homepage with page headers and animated creatures swinging on the text"
                />
                <img
                  src="/phone_overlay.png"
                  alt="phone displaying creature.world homepage with page headers and animated creatures swinging on the text"
                />
              </a>
              <a
                class="right-phone phone"
                href="https://store.creature.world"
                rel="noreferrer"
                target="_blank"
              >
                <div class="top-block white"></div>

                <video
                  src="/creature_world_store_phone.mp4"
                  autoplay
                  muted
                  loop
                  playsinline
                  disablePictureInPicture
                  disableRemotePlayback
                ></video>
                <img
                  src="/phone_chin.png"
                  class="phone-chin"
                  alt="phone displaying creature.world store with products displayed on the storefront"
                />
                <img
                  src="/phone_overlay.png"
                  alt="phone displaying creature.world store with products displayed on the storefront"
                />
              </a>
            </div>
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/nextjs_logo.png"
                    alt="Next.js logo"
                    loading="lazy"
                  />
                  <span>Next.js</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/css_logo.png"
                    alt="CSS logo"
                    loading="lazy"
                  />
                  <span>CSS</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/github.png"
                    alt="GitHub logo"
                    loading="lazy"
                  />
                  <span>GitHub</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/heroku_logo.png"
                    alt="Heroku logo"
                    loading="lazy"
                  />
                  <span>Heroku</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/vercel_logo.png"
                    alt="Vercel logo"
                    loading="lazy"
                  />
                  <span>Vercel</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/figma_logo.png"
                    alt="Figma logo"
                    loading="lazy"
                    id="figma-logo"
                  />
                  <span>Figma</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/strapi_logo.png"
                    alt="Strapi logo"
                    loading="lazy"
                  />
                  <span>Strapi</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/cloudinary_logo.png"
                    alt="Cloudinary logo"
                    loading="lazy"
                  />
                  <span>Cloudinary</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/shopify_logo.png"
                    alt="Shopify logo"
                    loading="lazy"
                  />
                  <span>Shopify</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>Liquid</span>
                </div>
              </div>
            </div>
            <h2>Synopsis</h2>
            <p>
              I was tasked with building
              <a
                href="https://creature.world"
                target="_blank"
                rel="noopener noreferrer"
                >creature.world</a
              >, an online hub for Danny Cole’s Creature World art series and
              other projects. Using the tools listed above, I created an
              animated homepage screen, an “explore” page containing all of
              Danny’s projects, an “info” page with Danny’s bio, and a Shopify
              merch store, seamlessly integrated into the site.
            </p>
            <h2>Refinement</h2>
            <p>
              To start off the project, I was handed some low-fidelity
              prototypes, and given the job of fleshing out their designs and
              implementing them.
            </p>
            <p>Here’s what I was working with:</p>
            <div class="horizontal-image-row">
              <div class="image-block">
                <img
                  src="/lfp_creature_world_homepage.png"
                  loading="lazy"
                  alt="Hand-drawn prototype of creature world homepage"
                />
                <div>Homepage</div>
              </div>
              <div class="image-block">
                <img
                  src="/lfp_creature_world_info.jpeg"
                  loading="lazy"
                  alt="Prototype of creature world info page, created in Notion"
                />
                <div>Info</div>
              </div>
              <div class="image-block">
                <img
                  src="/question_mark.png"
                  alt="question mark with box around it"
                />
                <div>Explore</div>
              </div>
              <div class="image-block">
                <img
                  src="/lfp_creature_world_store.png"
                  loading="lazy"
                  alt="Hand-drawn prototype of creature world store page"
                />
                <div>Store</div>
              </div>
            </div>
            <p>
              Clearly, the website designs needed a bit of refining - so I got
              to work.
            </p>
            <p>
              I began by asking fundamental questions about the minimum
              necessary information required on each page.
            </p>
            <p>After some questioning, I found out the following:</p>
            <ul>
              <li>
                The homepage needed animations on page load and links to other
                pages
              </li>
              <li>The info page needed the client's bio and animations</li>
              <li>
                The store needed a functional storefront and checkout, along
                with animations
              </li>
              <li>
                The archive needed a curated list of “selected projects” as well
                as an artwork gallery and the ability to see all of Danny’s past
                projects
              </li>
            </ul>
            <p>
              Next, I asked about the design language they wanted to follow.
            </p>
            <p>They told me:</p>
            <ul>
              <li>Primary and secondary site colours (blue and gold)</li>
              <li>Desired website font (Alte Haas Grotesk)</li>
              <li>The vibe (fun!)</li>
              <li>The style (pixelation whenever possible)</li>
            </ul>
            <p>Ok, I can work with that!</p>
            <p>
              One thing to note before we get started: I was on a tight timeline
              for this project, so I was unable to iterate on designs as much as
              I would have liked. Instead of building out low-fidelity
              prototypes before implementing, I often jumped straight into
              implementation due to the time constraint. Was this ideal? No. Was
              it the best process to follow to abide by the time limitation? In
              my opinion - yes.
            </p>
            <h2>Homepage</h2>
            <p>The homepage was a bit of a struggle.</p>
            <p>
              The only design provided was for mobile, but we were making a
              website that needed to look good on mobile, tablet, AND desktop.
            </p>
            <p>
              The problem here was the animations we wanted on the page. We
              wanted the “creatures” to jump in from the right-hand side. This
              means we needed the text that the creatures jumped onto to always
              be close to the right-hand side.
            </p>
            <p>
              Since we didn’t have the funding or time to implement two
              completely different designs with different animations on the
              homepage, I decided to find a different solution.
            </p>
            <p>
              To make life easier, why not keep the exact same design on every
              screen size, and simply keep the text right-aligned always? Then
              on larger screens we can fill the empty space with something else
              and call it a day!
            </p>
            <p>The client liked that idea, so we went forward with it.</p>
            <p>
              After implementing some gif techno-wizardry, this is the result we
              ended up with:
            </p>
            <div class="horizontal-image-row phone-laptop">
              <div class="image-block phone">
                <img
                  src="/creature_world_homepage_phone.webp"
                  loading="lazy"
                  alt="creature.world homepage on a phone, with animated creatures swinging on the text"
                />
              </div>
              <div class="image-block laptop">
                <img
                  src="/creature_world_homepage_laptop.png"
                  loading="lazy"
                  alt="creature.world homepage on a laptop, with animated creatures swinging on the text"
                />
              </div>
            </div>
            <h2>Info</h2>
            <p>This was the most straight-forward of the pages.</p>
            <p>
              I received a medium-fidelity design, and simply had to put it into
              code with minor revisions some personal flair.
            </p>
            <p>Here’s what the info page ended up looking like:</p>
            <div class="horizontal-image-row phone-laptop">
              <div class="image-block phone">
                <img
                  src="/creature_world_info_phone.png"
                  loading="lazy"
                  alt="creature.world info page on a phone, with a large picture of artwork, and a bio beneath"
                />
              </div>
              <div class="image-block laptop">
                <img
                  src="/creature_world_info_laptop.png"
                  loading="lazy"
                  alt="creature.world info page on a laptop, with a large picture of artwork, and a bio beneath"
                />
              </div>
            </div>
            <h2>Explore</h2>
            <p>
              I had the most creative freedom for this page, which was scary at
              first, but became a lot of fun once I got going.
            </p>
            <p>
              The client knew they wanted a “featured articles” section, a
              gallery to show off their artwork, and an archive section to show
              off previous work.
            </p>
            <p>
              I took inspiration from their previous portfolio website,
              dannycole.co and implemented a similar design to the archive
              pages.
            </p>
            <img
              src="/dannycole_portfolio_site.png"
              class="constrained-width-image"
              loading="lazy"
              alt="Danny Cole's previous portfolio website"
            />
            <p>
              I jumped into Figma and got to designing! Here's what I came up
              with:
            </p>
            <img
              src="/lfp_explore.png"
              class="constrained-width-image"
              loading="lazy"
              alt="A prototype of the explore page, created in Figma"
            />
            <p>
              The initial idea was to have the featured projects jump the user
              down to the project in the archive, and the gallery would be an
              infinitely scrolling carousel.
            </p>
            <p>
              After showing the first-pass design to the client - much to my
              surprise - they really liked it and didn’t have any major changes.
              Who needs multiple iterations when the first one works, I guess!
            </p>
            <p>
              After putting it into code (and multiple design iterations),
              here’s what we ended up with:
            </p>
            <img
              src="/creature_world_explore_final.png"
              class="constrained-width-image"
              loading="lazy"
              alt="The final design of the creature.world explore page, implemented on the web"
            />
            <p>
              The one major change we made between the prototype and the
              implementation was how the selected projects took you to the
              project block. Instead of making the page scroll down to the
              archive project (which could be 50 projects down), I came up with
              the idea of displaying the article right beneath the selected
              project block when clicking on it.
            </p>
            <p>Here’s what that looks like:</p>
            <img
              src="/creature_world_explore_selected.png"
              class="constrained-width-image"
              loading="lazy"
              alt="The creature.world explore page with a project selected and the article displayed beneath it"
            />
            <p>
              Another fun challenge was the requirement that everything on the
              explore page should be customizable without needing code.
            </p>
            <p>
              I’d never done this before, so I started looking into CMS’s and
              what each of them offered.
            </p>
            <p>
              My friend had used Strapi before, and after further research it
              appeared to be a trusted, well-used, and well-loved CMS. For these
              reasons, I decided to go forward with it!
            </p>
            <p>
              I ended up hosting my Strapi CMS on a Heroku database, since it
              was easy to set up and relatively cheap.
            </p>
            <p>
              I then used Cloudinary for content-delivery since the Heroku
              filesystem is ephemeral (it deletes all files after every
              restart).
            </p>
            <p>
              In the end, I had a clean dashboard that could be used by anybody
              (no coding knowledge necessary!) to update content on the site.
              The CMS ended up being used on almost every page, delivering
              content to the homepage, info page, and explore page.
            </p>
            <img
              src="/strapi_dashboard.png"
              loading="lazy"
              alt="a table displaying order details"
              style="margin-bottom: 3rem; display: block"
            />
            <h2>Store</h2>
            <p>
              The requirements for the store were pretty simple. Display the
              featured items on the storefront, have a functional checkout, and
              use Shopify for everything.
            </p>
            <p>Easy enough, right?</p>
            <p>Well, no.</p>
            <p>I ran into multiple problems when implementing the store.</p>
            <p>
              First off, Shopify doesn’t let you put a Shopify store under a
              domain subfolder. Every other page on the site is
              creature.world/{page}, like creature.world/info and
              creature.world/explore, so I really wanted creature.world/store to
              be the store page.
            </p>
            <p>
              Unfortunately, if you want your store to live in a subfolder you
              have build your Shopify store from scratch, using their API as
              your only help. At this point in the project, I only had a couple
              weeks left before launch so I didn’t physically have enough time
              to build a checkout flow from scratch. I needed to use a Shopify
              template, and therefore I had to host the site on Shopify and
              couldn’t link it to a subfolder.
            </p>
            <p>
              This meant I needed to look for another solution. Either we could
              buy a new domain, creature.store or something, but that’s when I
              learned about subdomains! AHA! Instead of creature.world/store, I
              could put it under store.creature.world. Not as elegant as the
              former, but it would allow more cohesion between the domains
              rather than pointing the store at a completely different url.
            </p>
            <p>
              The second issue I faced was building the Shopify template.
              Shopify only lets you customize your template so much before you
              have to delve into the code. This meant I had to learn Shopify’s
              “Liquid” templating language (in only a couple weeks) for creating
              Shopify templates. Although I was new to the language, it was
              familiar enough to previous templating languages I’ve used like
              underscore.js so I was able to get the hang of it quickly (thank
              goodness).
            </p>
            <p>
              I didn’t even have time to create a low-fidelity prototype, so I
              took inspiration from the previous creature world store and ran
              with it. I also wanted to make the Shopify store look as cohesive
              as possible with the other parts of the website, so it wouldn’t
              look like it’s own separate website (even though it was).
            </p>
            <p>Here’s what I ended up with:</p>
            <img
              src="/creature_world_storefront.png"
              class="constrained-width-image"
              loading="lazy"
              alt="a table displaying order details"
              style="margin-bottom: 1rem"
            />
            <img
              src="/creature_world_product_item.png"
              class="constrained-width-image"
              loading="lazy"
              alt="a table displaying order details"
              style="margin-bottom: 1rem"
            />
            <img
              src="/creature_world_checkout.png"
              class="constrained-width-image"
              loading="lazy"
              alt="a table displaying order details"
              style="margin-bottom: 3rem"
            />
            <h2>Conclusions</h2>
            <p>
              Although the project was quite stressful at times due to the time
              constraints, it was very rewarding to have completed my very first
              big-time real-world project.
            </p>
            <p>
              And, in the end all that matters is the happiness and satisfaction
              of the client.
            </p>
            <p>So, were they happy?</p>
            <p>I’m glad to report he was!</p>
            <p>
              The client praised the design and implementation of the site, and
              liked my work so much that they referred me to their friends over
              at Byline to help them build their website.
            </p>
            <p>
              It felt amazing to have my hard work recognized, and I’m glad I
              was given the opportunity to build something cool with Danny Cole
              and his team.
            </p>
            <h3>Takeaways and Areas of Personal Growth</h3>
            <ul>
              <li>
                <span class="gold">Refine product requirements</span>
                BEFORE starting any work. The worst thing you can do is design
                something that wasn’t wanted or needed in the first place
              </li>
              <li>
                <span class="gold">Communication is KEY!</span>
                Maintaining clear lines of dialogue about deadlines and your
                personal ability to deliver within the given time-frame will pay
                off dividends in terms of
                <span class="gold">building trust</span> in your business
                relationships
              </li>
              <li>
                Sometimes it’s okay to promise you can build something even if
                you’re not exactly sure how to do it yet.
                <span class="gold">You can always learn it later!</span>
              </li>
              <li>
                <span class="gold">Be careful of scope creep.</span>
                Not only does this delay timelines, it also compromises the
                trust in your business relationship. Be clear about what is and
                isn’t included in the project, and
                <span class="gold">make small allowances when necessary</span>
                (you don’t need to be TOO strict)
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="byline-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/IMG_2328.jpg"
                style="
                  padding: 0.25rem;
                  background-color: white;
                  border-radius: 8px;
                "
                alt="Byline logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Byline</h1>
              <p class="subtitle gold">
                <i>Online Magazine</i>
              </p>
            </div>
          </div>

          <div class="content">
            <a
              class="byline-svg"
              href="https://www.bylinebyline.com"
              target="_blank"
              rel="noreferrer"
            >
              <div id="byline-logo-background"></div>
              <svg
                width="1578"
                height="537"
                viewBox="0 0 1578 537"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  id="byline-b"
                  d="M267.89 280.43C205.17 342.65 143.95 381.38 86.9798 381.38C42.2498 381.38 17.7598 357.64 17.7598 322.66C17.7598 299.17 28.2498 281.43 46.4998 256.94L199.67 48.8001C202.17 45.3001 201.42 41.8001 197.67 41.8001C195.17 41.8001 192.67 43.0501 188.17 46.3001L127.7 91.0301L110.21 68.2901L167.43 25.8101C178.92 17.3101 189.17 13.0701 202.91 13.0701C220.9 13.0701 232.65 24.0601 232.65 40.3101C232.65 48.3101 228.9 57.0501 222.4 65.8001L134.7 185.23C238.65 112.52 280.63 96.0201 312.61 96.0201C342.35 96.0201 362.34 112.76 362.59 140.5C362.84 167.24 336.35 212.47 267.89 280.43ZM334.1 140.5C334.1 129.51 326.1 124.26 312.61 124.51C279.38 125.26 230.15 148.75 81.4698 257.45L69.2298 273.94C56.2398 291.68 46.2398 305.67 46.2398 322.42C46.2398 342.66 59.7298 352.91 86.9698 352.91C132.7 352.91 186.67 320.68 247.64 260.46C298.62 209.97 334.1 162.24 334.1 140.5Z"
                  stroke="var(--gold)"
                  stroke-width="12"
                />
                <path
                  id="byline-y"
                  d="M657.99 128.01L656.24 211.22L563.79 337.4C491.33 436.35 419.61 472.83 357.39 472.83C302.17 472.83 278.43 449.59 278.43 409.61C278.43 394.87 282.93 376.88 292.17 359.39L317.91 371.63C310.41 386.37 306.92 400.12 306.92 409.61C306.92 433.6 318.91 444.34 357.39 444.34C407.12 444.34 470.34 416.1 540.3 321.15L575.78 273.17L515.56 319.4C447.84 371.37 415.86 382.12 392.62 382.12C361.63 382.12 343.64 362.63 343.89 339.64C344.14 320.9 352.39 309.65 374.38 279.17L454.09 168.72L481.33 131.74C483.83 128.24 482.33 124.74 479.08 124.74C476.58 124.74 474.58 125.74 468.09 130.49L409.37 173.97L392.13 151.23L449.35 109C460.85 100.5 470.84 96.01 484.58 96.01C502.57 96.01 514.32 107.01 514.32 123.25C514.32 131.25 510.57 139.99 504.07 148.74L479.58 181.97L397.62 295.66C379.88 320.4 372.38 329.64 372.38 339.64C372.38 348.64 380.13 353.88 392.62 353.63C408.86 353.38 436.1 344.38 498.32 296.66L628.01 197.46L629.51 128.74C629.51 125.49 628.51 124.49 626.51 124.49C624.51 124.49 622.76 125.49 618.76 128.49L556.79 174.22L539.8 151.5L598.77 107.77C610.26 99.27 620.01 96.02 631.75 96.02C648.5 96.02 658.49 107.27 657.99 128.01Z"
                  stroke="var(--gold)"
                  stroke-width="12"
                />
                <path
                  id="byline-i"
                  d="M950.43 123.26C950.43 131.26 946.93 140 940.68 148.75L825.24 309.17L797.75 346.15C795 349.9 796 353.65 799.75 353.65C802.5 353.65 805.5 352.4 810.49 348.65L857.47 314.17L874.46 336.41L830.23 368.89C817.99 377.89 806.99 382.13 793.75 382.13C775.01 382.13 765.51 371.14 765.51 355.14C765.51 346.89 769.01 338.65 775.76 329.4L918.44 131.75C920.94 128.25 919.94 124.5 916.19 124.5C913.44 124.5 910.44 125.75 905.45 129.5L858.47 163.98L841.48 141.74L885.71 109.26C897.2 100.76 908.95 96.0201 921.69 96.0201C938.94 96.0201 950.43 107.02 950.43 123.26ZM1002.41 51.5401C1002.41 63.2801 993.41 72.53 981.92 72.53C970.42 72.53 961.43 63.2801 961.43 51.5401C961.43 40.0401 970.43 30.8 981.92 30.8C993.41 30.8 1002.41 39.8001 1002.41 51.5401Z"
                  stroke="var(--gold)"
                  stroke-width="12"
                />
                <path
                  id="byline-n"
                  d="M1282.85 137.75C1282.6 157.49 1274.35 171.23 1232.12 227.71L1172.15 309.17L1142.41 348.65C1140.91 350.65 1140.66 351.4 1140.66 352.15C1140.66 353.15 1141.41 353.65 1142.41 353.65C1143.41 353.65 1144.91 353.15 1145.91 352.4L1203.63 309.42L1220.62 332.16L1172.14 368.39C1158.9 378.14 1150.9 382.13 1137.91 382.13C1121.67 382.13 1111.17 371.14 1111.17 356.14C1111.17 347.14 1114.67 338.15 1121.42 329.15L1149.41 291.92L1206.38 214.46C1246.86 159.99 1254.36 148.99 1254.36 137.75C1254.36 128.25 1246.61 124.51 1235.12 124.51C1206.13 124.51 1168.15 143.5 1009.48 260.94L974.999 309.17L945.259 348.65C943.759 350.65 943.509 351.4 943.509 352.15C943.509 353.15 944.259 353.65 945.259 353.65C946.259 353.65 947.759 353.15 948.759 352.4L1006.48 309.42L1023.47 332.16L974.999 368.39C961.759 378.14 953.759 382.13 940.769 382.13C924.529 382.13 914.029 371.14 914.029 356.14C914.029 347.14 917.529 338.15 924.279 329.15L952.269 291.92L1040.73 168.73L1067.97 131.75C1070.47 128.25 1068.97 124.75 1065.97 124.75C1063.72 124.75 1061.72 125.75 1058.22 128.25L995.999 173.98L978.759 151.24L1035.98 109.01C1047.47 100.51 1057.47 96.02 1071.21 96.02C1089.2 96.02 1100.95 107.02 1100.95 123.26C1100.95 131.26 1097.2 140 1090.71 148.75L1066.72 181.48L1062.22 187.73C1173.17 107.52 1206.15 96.02 1235.14 96.02C1264.11 96.02 1283.1 114.01 1282.85 137.75Z"
                  stroke="var(--gold)"
                  stroke-width="12"
                />
                <path
                  id="byline-e"
                  d="M1552.54 192.73L1550.04 216.72L1313.66 252.2C1295.67 279.94 1286.17 303.18 1286.17 320.67C1286.17 342.91 1297.91 352.9 1321.4 352.9C1359.13 352.9 1402.11 326.16 1450.34 283.68L1468.83 305.42C1409.61 356.89 1364.63 381.38 1321.4 381.38C1280.17 381.38 1257.68 357.14 1257.68 320.66C1257.68 295.67 1270.67 261.94 1301.41 219.96C1357.14 144 1433.6 96.02 1486.33 96.02C1538.3 96.02 1559.54 129.01 1552.54 192.73ZM1337.65 219.71L1524.31 191.72C1527.81 144.99 1523.06 124.5 1486.33 124.5C1447.85 124.51 1386.88 160.24 1337.65 219.71Z"
                  stroke="var(--gold)"
                  stroke-width="12"
                />
                <path
                  id="byline-l"
                  d="M1536.9 372.39C1370.64 494.49 1190.41 490.11 1190.41 490.11C1052.14 491.48 952.311 420.34 952.311 420.34C952.311 420.34 887.221 372.79 798.581 423.49C723.171 467.96 672.321 494.1 631.591 494.78C600.611 495.3 583.161 483.1 582.711 456.37C582.361 435.38 593.29 416.71 613.54 387.62L660.131 323.31L806.97 121.01L831.461 87.78C837.961 79.03 841.711 70.2901 841.711 62.2901C841.711 46.0501 829.97 35.05 811.97 35.05C798.23 35.05 788.231 39.5501 776.741 48.0401L758.701 62.18L775.941 84.92L797.23 68.3001C801.73 65.0501 804.23 63.8 806.73 63.8C810.48 63.8 811.23 67.3001 808.73 70.8001L781.491 107.78L636.97 306.75L590.021 371.03C565.131 406.69 553.51 429.38 553.98 456.86C554.65 496.83 582.111 524.36 632.081 523.52C675.181 522.79 734.591 501.66 814.051 447.68C814.571 447.33 815.101 447 815.641 446.69C823.901 441.98 886.511 408.24 932.561 440.78C932.561 440.78 1047.64 513.62 1186.98 513.38C1186.98 513.38 1380.39 519.21 1553.91 388.54L1536.9 372.39Z"
                  stroke="var(--gold)"
                  stroke-width="12"
                />
              </svg>
            </a>
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/nextjs_logo.png"
                    alt="Next.js logo"
                    loading="lazy"
                  />
                  <span>Next.js</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/css_logo.png"
                    alt="CSS logo"
                    loading="lazy"
                  />
                  <span>CSS</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/github.png"
                    alt="GitHub logo"
                    loading="lazy"
                  />
                  <span>GitHub</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/heroku_logo.png"
                    alt="Heroku logo"
                    loading="lazy"
                  />
                  <span>Heroku</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/vercel_logo.png"
                    alt="Vercel logo"
                    loading="lazy"
                  />
                  <span>Vercel</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/figma_logo.png"
                    alt="Figma logo"
                    loading="lazy"
                    id="figma-logo"
                  />
                  <span>Figma</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/strapi_logo.png"
                    alt="Strapi logo"
                    loading="lazy"
                  />
                  <span>Strapi</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/aws_logo.png"
                    alt="AWS S3 logo"
                    loading="lazy"
                  />
                  <span>AWS S3</span>
                </div>
              </div>
            </div>
            <h2>Synopsis</h2>
            <p>
              After creating a physical newspaper-style magazine called
              <a
                href="https://www.nytimes.com/2021/03/07/business/media/the-drunken-canal-media-nyc.html"
                target="_blank"
                rel="noreferrer"
                >“The Drunken Canal”</a
              >, one of the co-founders and a writer for the New York Times
              decided to bring their creation to the web under the name
              <a
                href="https://www.nytimes.com/2023/06/08/style/the-drunken-canal-byline-media.html"
                target="_blank"
                rel="noreferrer"
                >“Byline”</a
              >.
            </p>
            <p>
              This would be a space for creatives of all demographics to submit
              their writing for a chance to appear on the site.
            </p>
            <p>
              I took on the challenge and built
              <a
                href="https://www.bylinebyline.com"
                target="_blank"
                rel="noreferrer"
              >
                bylinebyline.com
              </a>
              from the ground up, making a platform that's blazingly fast and
              easily modified by non-technical editors.
            </p>
            <p>Here’s what the finished site looks like:</p>
            <img src="/SCR-20230830-iudc.jpeg" loading="lazy" />
            <img
              src="/SCR-20230830-qaeb.jpeg"
              loading="lazy"
              style="margin-top: 1.5rem"
            />
            <img
              src="/SCR-20230830-iwpd.jpeg"
              loading="lazy"
              style="margin: 1.5rem auto"
            />
            <h2>Infrastructure</h2>
            <p>
              They needed a website, and they needed it quick. They also needed
              to be scrappy, considering there was currently no monetization
              scheme in place. I had to think of solutions that were consistent,
              performant, quick to build with, and most of all cheap.
            </p>
            <p>
              First was the language/framework of choice. I’m familiar with
              Next.js, but had only used the pages directory before. With all
              the new features that Next.js 13 and the app router were boasting,
              I had to give it a shot. I wanted this site to be as fast as
              humanly possible, and the app router with server components seemed
              like it could get me there.
            </p>
            <p>
              I chose Vercel to host the site. From using Vercel before, I knew
              the free tier was quite lenient and the pro tier was on the
              cheaper side as well. Since I was aiming for fast development,
              using a tool I’m familiar with would also speed up the process.
            </p>
            <p>
              I needed a CMS for the editors to manage site content without
              touching the code. I decided to go with Strapi because I’d used it
              before and because the “Dynamic Zones” were a perfect solution for
              creating customizable articles with hot-swappable components. I’d
              host all of this on Heroku, which provides an intuitive UI and
              minimal setup and maintenance.
            </p>
            <p>
              Finally to host images, videos, and other files, I decided to use
              AWS S3 because of the pay-as-you-use price model which seems to be
              one of the cheapest file storage solutions out there. I was also
              aware of the ability to create replicas to serve content in other
              regions should we need to decrease latency in the future.
            </p>
            <p>
              Here’s a diagram I drew up to visualize the infrastructure of the
              site:
            </p>
            <img
              src="/byline infrastructure.png"
              alt=""
              loading="lazy"
              style="max-width: 650px; margin-bottom: 1.5rem"
            />
            <h2>Building</h2>
            <p>
              This process was relatively straight-forward. Since this was my
              third major project, I’d gotten the hang of working with a team
              and working with deadlines in place. I noticed I would hit less
              roadblocks because I’ve experienced many of these problems
              already.
            </p>
            <p>
              I was fortunate to work with an experienced graphic designer on
              the project, allowing us to move quickly. She would make a design,
              we’d discuss as a team, and I’d implement it shortly after.
            </p>
            <p>
              Although most of the project was smooth-sailing, there was one
              continuous and unique challenge that we had to work through. The
              graphic designer on the project specialized in creating designs
              for print media like Bloomberg and the New York Times, and this
              was the first website they’d ever designed. This meant I had to
              familiarize them with web-specific considerations like screen size
              responsiveness, interaction design, and accessibility.
            </p>
            <p>
              Luckily, they were quick to learn and were able to crank out
              designs like no tomorrow once they got the hang of designing for
              mobile and desktop simultaneously, and other considerations like
              placement, colour, and size of text and buttons.
            </p>
            <p>
              After some hard work and a few ideas from me as well (like the
              colour-changing button on the homepage), we finished the site
              within the initial 12 week timeline!
            </p>
            <h3>Takeaways and Areas of Personal Growth</h3>
            <ul>
              <li>
                It’s a lot easier to enjoy the work you’re doing when you
                <span class="gold">like the people</span> you’re doing it with!
              </li>
              <li>
                I learned how to optimize a website for
                <span class="gold">speed</span> (static site generation,
                incremental site regeneration) and
                <span class="gold">SEO</span> (meta tags, structured data)
              </li>
              <li>
                I learned how to use
                <span class="gold">AWS</span> and realized how many different
                services they offer (I also learned how difficult it is to
                navigate their UI)
              </li>
              <li>
                I got a deeper insight into the world of
                <span class="gold">graphic design</span> and
                <span class="gold">print media</span>. I learned cool industry
                terms like “hed” (title), “dek” (description), “TK” (To come),
                “rules” (borders), “kerning” (spacing between letters),
                “leading” (line height), and many more
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="vividseats-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/vividseats.png"
                alt="Vivid Seats logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Vivid Seats</h1>
              <p class="subtitle gold">
                <i>Software Engineer</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/nextjs_logo.png"
                    alt="Next.js logo"
                    loading="lazy"
                  />
                  <span>Next.js</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/css_logo.png"
                    alt="CSS logo"
                    loading="lazy"
                  />
                  <span>CSS</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="Express.js logo"
                    loading="lazy"
                  />
                  <span>Express.js</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/nodejs_logo.png"
                    alt="Node.js logo"
                    loading="lazy"
                  />
                  <span>Node.js</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/github.png"
                    alt="GitHub logo"
                    loading="lazy"
                  />
                  <span>GitHub</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/jenkins_logo.png"
                    alt="Jenkins logo"
                    loading="lazy"
                  />
                  <span>Jenkins</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/skipper_logo.png"
                    alt="Skipper logo"
                    loading="lazy"
                  />
                  <span>Skipper</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/swagger_logo.png"
                    alt="Swagger logo"
                    loading="lazy"
                  />
                  <span>Swagger</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/figma_logo.png"
                    alt="Figma logo"
                    loading="lazy"
                    id="figma-logo"
                  />
                  <span>Figma</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/strapi_logo.png"
                    alt="strapi logo"
                    loading="lazy"
                  />
                  <span>Strapi</span>
                </div>
              </div>
            </div>
            <h2>Summary</h2>
            <p>
              My fourth co-op was at
              <span class="gold">Vivid Seats</span>, a ticket-reselling platform
              that allows fans of all different types of media to purchase and
              sell tickets, in order to see their favourite artists or shows.
            </p>
            <p>
              I was working as a
              <span class="gold">Software Engineer</span> on the web team,
              working primarily with <span class="gold">Next.js</span> and
              <span class="gold">Express.js</span> to build out new features,
              fix bugs, and port our checkout from legacy to modern software.
            </p>
            <h2>Projects</h2>
            <h3>Checkout 2.0</h3>
            <p>
              I was assigned to the “Checkout 2.0” project a few weeks into my
              term. This was a large-scale project that involved porting our
              company’s entire checkout flow from
              <span class="gold">Java</span> (most of which was written 10+
              years ago) to <span class="gold">Next.js</span> and
              <span class="gold">Express.js</span>.
            </p>
            <p>
              The intention of this project was to optimize checkout
              <span class="gold">performance</span> and
              <span class="gold">developer experience</span>, allowing for
              better user experience and easier code maintainability.
            </p>
            <p>
              I headed up getting this project over the finish line, knocking
              out many feature implementations and squashing bugs along the way.
            </p>
            <p>
              We ended up finishing the project far ahead of schedule, and
              noticed bumps in conversion rates across the board after rolling
              it out.
            </p>
            <p>
              Additionally, I took the lead in running a performance study of
              Checkout 2.0, comparing it against our legacy implementation.
              After running tests and crunching numbers, I found a near
              <span class="gold">80% reduction in load times</span>
              from checkout start to checkout completion. I presented these
              findings to upper-management, which thoroughly impressed them,
              giving us the go-ahead to roll out Checkout 2.0 even faster.
            </p>
            <h3>Other Misc. Projects</h3>
            <ul>
              <li>
                Optimized the
                <span class="gold">CI/CD</span> pipeline by locating and
                resolving a bug that was causing significant delays in
                production build times, resulting in a
                <span class="gold">reduction</span> from
                <span class="gold">27 minutes</span> to
                <span class="gold">13 minutes</span>
                per build.
              </li>
              <li>
                Implemented a portion of our “rewards” page (<a
                  target="_blank"
                  rel="noreferrer"
                  href="https://vividseats.com/rewards"
                  >vividseats.com/rewards</a
                >). I also helped tweak the UI after consulting with our senior
                product designer, which made the feature I was working on just
                the
                <span class="gold">slightest bit prettier</span>
                (with fancy animations & interactions too!).
              </li>
              <li>
                Noticing a
                <span class="gold">lack of documentation,</span>
                I took the
                <span class="gold">initiative</span> to create several detailed
                pages outlining the systems we use, the teams we have, and the
                codebases we manage at Vivid Seats. Initially, the documents
                were intended to help onboard future co-op students, but the
                project grew as I worked on it, eventually becoming
                <span class="gold"
                  >documentation that anybody can reference</span
                >
                when they need to learn or re-learn parts of our platform.
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="tbits-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/tbits.png"
                alt="Tradable Bits logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Tradable Bits</h1>
              <p class="subtitle gold">
                <i>Full-Stack Web Developer</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>Underscore.js</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>jQuery</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>VS Code</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/python_logo.png"
                    alt="Python logo"
                    loading="lazy"
                  />
                  <span>Python</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>Flask</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>Jinja</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>PyCharm</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/git_logo.png"
                    alt="Git logo"
                    loading="lazy"
                  />
                  <span>Git</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>GitHub</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/postgresql_logo.png"
                    alt="PostgreSQL logo"
                    loading="lazy"
                  />
                  <span>PostgreSQL</span>
                </div>
              </div>

              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/css_logo.png"
                    alt="CSS logo"
                    loading="lazy"
                  />
                  <span>CSS</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/figma_logo.png"
                    alt="Figma logo"
                    loading="lazy"
                    id="figma-logo"
                  />
                  <span>Figma</span>
                </div>
              </div>
            </div>
            <h2>Summary</h2>
            <p>
              My third co-op was at Tradable Bits, a SaaS company working to
              make sports and music fans’ experience better by providing media
              organizations a streamlined way to send out prizes, games, and
              communications.
            </p>
            <p>
              My role was a
              <span class="gold">Full-Stack Web Developer</span>, working
              together with a team of 8 other devs in a 15-day Agile sprint
              framework.
            </p>
            <h2>Projects</h2>
            <p>
              Over the course of my co-op term, I was able to lead multiple
              projects. I started off small at the beginning, working on
              projects with a one to two week timeframe, but as the term
              progressed I was able to take on greater responsibility and larger
              projects. I ended off the term after completing a 2-month long
              project - just in the nick of time!
            </p>
            <ul>
              <li>
                Overhauled the UI of 20+ client-facing pages, while
                simultaneously
                <span class="gold">increasing the efficiency</span>
                of the back-end. These pages were used by clients to modify
                their settings for different types of campaign events. Since we
                had over 20 campaign types, a complete overhaul was necessary
                for each one of these pages. This feature helped
                <span class="gold">harmonize</span> our product’s
                <span class="gold">UI/UX</span> for the client, while improving
                the modularity of our code,
                <span class="gold">streamlining</span> future feature additions
                or debugging. Since I was given complete control over the
                project, I was also able to offer design critiques to our
                product designers, which were often well-received and led to a
                further refined user experience.
              </li>
              <li>
                Created a
                <span class="gold">custom font upload</span>
                feature to
                <span class="gold">store and process</span>
                user-uploaded font files and apply them to pages built by
                clients. This feature
                <span class="gold">decreased</span> the amount of manual
                processing our internal team had to complete, while
                <span class="gold">optimizing</span> the client’s user
                experience.
              </li>
              <li>
                This one was just for fun - but I'm proud of it so I'll throw it
                in here: I organized a
                <span class="gold">successful</span>
                company-wide ‘Hand-and-brain’ Chess tournament with flexible
                game-times to fit player’s busy schedules.
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="front-rush-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/front_rush.png"
                alt="Front Rush logo"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Front Rush</h1>
              <p class="subtitle gold">
                <i>Technical Implementation Specialist</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>jQuery</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/python_logo.png"
                    alt="Python logo"
                    loading="lazy"
                  />
                  <span>Python</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>pdfplumber</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>pandas</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/sql_logo.png"
                    alt="SQL logo"
                    loading="lazy"
                  />
                  <span>SQL</span>
                </div>
                <div class="languages-and-tools-row">
                  <span>Microsoft SQL Server</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/css_logo.png"
                    alt="CSS logo"
                    loading="lazy"
                  />
                  <span>CSS</span>
                </div>
              </div>
            </div>
            <h2>Summary</h2>
            <p>
              My second co-op was at Front Rush, a SaaS company providing
              recruiting and inventory management to sports teams across North
              America.
            </p>
            <p>
              My role was a
              <span class="gold"
                >Technical Implementation and Support Specialist</span
              >, working with one other dev (my manager) to implement features
              on the platform and improve processing efficiency on the back-end.
            </p>
            <h2>Projects</h2>
            <ul>
              <li>
                Created Python scripts to scrape client-uploaded PDFs and insert
                their data into our database. These scripts
                <span class="gold">decreased</span> the amount of manual
                processing our team needed to complete,
                <span class="gold">increasing processing efficiency</span>
                by approximately 50%.
              </li>
              <li>
                Implemented a
                <span class="gold">new page</span> on our platform to interface
                with Henry Schein, allowing orders to be passed into our
                platform and for the data to be read and manipulated. This
                feature <span class="gold">eliminated</span> the time our
                clients spend manually inputting their orders, saving them
                numerous hours of labour.
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="martha-rave-cookies-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/martha_rave_cookies.png"
                alt="Martha Rave Cookies logo"
                loading="lazy"
                style="
                  border-radius: 8px;
                  max-width: 120px;
                  padding: 0.5rem;
                  background-color: #161616;
                  box-shadow: 0 0 16px 1px rgb(255, 158, 245);
                "
              />
            </div>
            <div>
              <h1 class="title">Martha Rave Cookies</h1>
              <p class="subtitle gold">
                <i>POS & Order Management System</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2 class="subhead">
              Designing a <span class="gold">smarter</span> system for
              <span class="gold">order placement</span>,
              <span class="gold">management</span>, and
              <span class="gold">fulfillment</span>
            </h2>
            <img
              class="splitscreen-dashboards"
              src="/splitscreen_dashboards.webp"
            />
            <h3>Synopsis</h3>
            <p>
              After identifying multiple improvements in the processes that my
              aunt uses to run her bakery business, I built a website with
              custom dashboards to streamline her workflow, along with a
              customer-facing point-of-sale system, complete with shopping cart
              management and checkout.
            </p>
            <h3>Tools</h3>
            <div class="tools-wrapper">
              <div class="tools">
                <div class="tools-column">
                  <div class="tools-row">
                    <img src="/nextjs_logo.png" /><span>Next.js</span>
                  </div>
                  <div class="tools-row" id="tailwind">
                    <img src="/tailwind_logo.png" /><span
                      >tailwindcss</span
                    >
                  </div>
                  <div class="tools-row">
                    <img src="/vercel_logo.png" /><span>Vercel</span>
                  </div>
                </div>
                <div class="tools-column">
                  <div class="tools-row">
                    <img src="/supabase_logo.png" /><span>Supabase</span>
                  </div>
                  <div class="tools-row">
                    <img src="/postgresql_logo.png" /><span
                      >PostgreSQL</span
                    >
                  </div>
                </div>
                <div class="tools-column">
                  <div class="tools-row">
                    <img src="/figma_logo.png" /><span>Figma</span>
                  </div>
                </div>
              </div>
            </div>
            <h3>The Backstory</h3>
            <p>
              My aunt runs a small bakery business, and used to do all of her
              operations manually and on paper. She received orders by email,
              then went through a lengthy back-and-forth process to figure out
              additional requests, costs, location of delivery, etc.
            </p>
            <p>
              Once orders started rolling in, she would compile a huge
              spreadsheet of orders (manually inputted of course), which she
              would print off to track order completion in pencil. As orders
              rolled in, she needed to print out more and more pages while doing
              her best to keep track of delivery dates, weekly inventory and
              batches.
            </p>
            <p>TL;DR: It was a nightmare.</p>
            <div class="spreadsheet-of-doom">
              <img src="/spreadsheet_of_doom.webp" loading="lazy" />
              <p>The spreadsheet of doom...</p>
            </div>
            <p>
              I realized a better solution was necessary, one that allowed my
              aunt to focus on her important tasks and leave the menial ones to
              automated software.
            </p>
            <h3>The Problem(s)</h3>
            <p>
              Before I could begin the project, I needed to identify my aunt’s
              biggest pain-points. In order to come up with the most effective
              and minimalist solutions, identifying the root cause of each
              pain-point was crucial, as one solution may solve multiple
              symptoms of the same problem.
            </p>
            <p>
              After a few 1-on-1 consultations, I identified the 3 main
              divisions of her work, and the problems she was facing in each.
            </p>
            <div class="step-cards">
              <div class="step-card">
                <div class="card-head">
                  <div>
                    <img src="/circle_one.svg" />
                  </div>
                  <div>
                    <div class="card-title">Placement</div>
                    <div class="card-subhead">
                      Receiving and sending correct order information
                    </div>
                  </div>
                </div>
                <div class="step-card-body">
                  <div class="body-header">Pain Points</div>
                  <p>Receiving orders is manual & time consuming</p>
                  <ul>
                    <li>
                      Calculating
                      <span class="gold">order costs</span>
                    </li>
                    <li>
                      Sending/receiving
                      <span class="gold">order information</span>
                      emails
                    </li>
                  </ul>
                </div>
              </div>
              <div class="step-card">
                <div class="card-head">
                  <div>
                    <img src="/circle_two.svg" />
                  </div>
                  <div>
                    <div class="card-title">Management</div>
                    <div class="card-subhead">
                      Special requests & what needs to be baked
                    </div>
                  </div>
                </div>
                <div class="step-card-body">
                  <div class="body-header">Pain Points</div>
                  <p>
                    Inputting data into a spreadsheet is error-prone and reading
                    it is difficult
                  </p>
                  <ul>
                    <li>
                      <span class="gold"> Too much information</span>
                      at once
                    </li>
                    <li>
                      <span class="gold"> Minimal distinction</span>
                      between spreadsheet cells
                    </li>
                    <li>Disorganization</li>
                  </ul>
                  <p>Printing the spreasheet is unruly</p>
                  <ul>
                    <li>
                      <span class="gold"> Wasted space</span>
                      on each page
                    </li>
                    <li>
                      <span class="gold"> Unnecessary information</span>
                      on each page
                    </li>
                  </ul>
                  <p>Tracking quantities is manual</p>
                </div>
              </div>
              <div class="step-card">
                <div class="card-head">
                  <div>
                    <img src="/circle_three.svg" />
                  </div>
                  <div>
                    <div class="card-title">Fulfillment</div>
                    <div class="card-subhead">
                      Knowing order details and order status
                    </div>
                  </div>
                </div>
                <div class="step-card-body">
                  <div class="body-header">Pain Points</div>
                  <p>
                    No good way to see
                    <span class="gold">specific</span> order details
                  </p>
                  <p>
                    No good way to
                    <span class="gold">print off</span>
                    specific order details and attach it to an order
                  </p>
                  <p>
                    Tracking completed orders is
                    <span class="gold">manual</span> and
                    <span class="gold">cumbersome</span>
                  </p>
                </div>
              </div>
            </div>
            <h3>Defining Success</h3>
            <p>
              Ideally, solving all of my aunt’s pain points is the goal.
              <br />However, to distill the metrics for success into measurable
              goals, it would be thus:
            </p>
            <div class="ol">
              1. Minimize
              <span class="gold">time-consuming</span> tasks (e.g. manual
              processing)
            </div>
            <li class="success-li">
              Measured quantitatively by overall
              <span class="gold">time expenditure</span>
            </li>
            <div class="ol">
              2. Optimize customer and client (my aunt)
              <span class="gold">user experience</span>
            </div>
            <li class="success-li">
              Measured qualitatively by
              <span class="gold">user feedback</span>
            </li>
            <h3>Choosing the Right Tools</h3>
            <p>
              I knew I wanted to build a website to solve these problems.
              Although I had never built one by myself, at the time I was
              working as a full-stack web developer, so I had some knowledge in
              the field.
            </p>
            <p>
              Why a website? Not only is it accessible from any device, the
              possibilities of the web are endless if you use the right tools.
            </p>
            <p>
              Since I was inexperienced, I figured the best way to learn more
              would be to ask a professional in the industry. I approached my
              manager, a software developer with years of experience, and
              explained the project. He recommended using Next.js and
              tailwindcss for the front-end, Supabase for the back-end, and
              Vercel to host the website. All of which are modern tools and
              easy-to-learn.
            </p>
            <p>
              I also needed a tool for prototyping the UI, so I decided to use
              Figma - a suggestion from another coworker.
            </p>
            <p>
              So, with no experience with any of those tools, I jumped right in.
            </p>
            <div class="step-header">
              <img src="/circle_two.svg" />
              <h3>Management</h3>
            </div>
            <p>
              I was keen on tackling the biggest issue my aunt was facing first,
              so I decided to jump into the second stage in the order process
              before solving everything else.
            </p>
            <p>
              Since I had already identified key pain-points, I began working on
              a solution to address as many as possible.
            </p>
            <p>
              I began by asking my aunt exactly what information she needed when
              baking. I identified which information from the order was useful
              to see, and which was useless. I worked on the design principle of
              displaying the least amount of information possible. Nothing more,
              nothing less. Designing in this manner reduces cognitive load, and
              allows information retrieval to be more efficient.
            </p>
            <p>
              In the end, she needed the total quantities in dozens and in
              individual goods that needed to be baked per week.
            </p>
            <h3>Ideation</h3>
            <p>
              I got to work in Figma, and threw together some low-fidelity
              prototypes as a proof of concept.
            </p>
            <img src="/lfp_dashboard.webp" loading="lazy" />
            <p>
              I came up with a dashboard that would display only the information
              she needed, which could be filtered to display only what was
              necessary for that week. It also had the ability to add and remove
              the number of items that had already been baked.
            </p>
            <p>
              I presented this design to my aunt, and she tore it apart. Well,
              not entirely. But she offered a lot of helpful feedback, which I
              used to implement my high-fidelity prototype designs.
            </p>
            <p>
              For the design language of the high-fidelity designs, I thought
              I’d keep it consistent with the look and feel of my aunt’s current
              website, with fonts, colours, and shapes all the same or similar
              to preserve uniformity.
            </p>
            <img
              style="max-width: 650px"
              src="/mfp_dashboard.webp"
              loading="lazy"
            />
            <p>
              Here was the final design of the homepage dashboard. It contained
              a filter on the left to sort by date, a table of products with
              total dozens and total items, along with a handy breakdown of
              order statuses. My aunt didn’t need the ability to add and remove
              quantities that had been baked, so that feature was scrapped.
            </p>
            <p>
              To solve the issue of printing out the entire spreadsheet, I added
              a print feature that allows my aunt to print only the table,
              showing her what she needs to bake each week. This cuts down the
              number of pages she was printing from over 10 per week, to 1 per
              week.
            </p>
            <img
              style="max-width: 450px"
              src="/mfp_dashboard_print.webp"
              loading="lazy"
            />
            <p>
              The last thing I needed to add in the management step was a way
              for my aunt to modify orders. In hindsight, there are so many
              better was I could have implemented this feature, but I was
              working with time constraints and I needed a solution that would
              be relatively easy to implement into code.
            </p>
            <p>Here's what I came up with:</p>
            <img
              src="/all_orders.webp"
              style="max-width: 650px"
              loading="lazy"
              alt="a table displaying order details"
            />
            <p>
              Yep, a spreadsheet. A boring old spreadsheet. Not my proudest
              moment, as I sought to remove all the problems spreadsheets
              brought with them when I began this project. However, I did
              optimize the many pain points my aunt was facing, even while
              working within the constraints of a spreadsheet.
            </p>
            <p>
              First was using colours to distinguish between spreadsheet rows.
              Second, I added protection to editing a row and deleting an order.
              Since my aunt has to click on the edit button, then click
              “confirm”, it prevents accidentally wiping any records from the
              spreadsheet.
            </p>
            <p>
              I figured, since order won’t be inputted manually, there would be
              a low likelihood that my aunt would need to edit orders at all, so
              by sticking to a straight-forward and easy to implement solution,
              I could spend time on the more important parts of the platform.
            </p>
            <div class="step-header">
              <img src="/circle_one.svg" />
              <h3>Placement</h3>
            </div>
            <p>
              To solve the pain-points in the placement step, I started off by
              analysing the current ordering flow.
            </p>
            <p>
              Consultations with my aunt and viewing emails from previous
              customers showed me the steps most customers follow.
            </p>
            <ol>
              <li>Navigate to martharave.com</li>
              <li>View the picture slideshow of baked goods on the website</li>
              <li>
                Send an email directly to my aunt with the names and quantities
                of each item
              </li>
              <li>Wait for a response from my aunt with the order total</li>
              <li>Pay on delivery or by e-transfer</li>
            </ol>
            <p>
              I noticed some problematic user-experience issues in this flow.
              The biggest offenders were having to navigate to an external
              platform to place an order and having to wait to receive the order
              total or calculate the cost in your head. In order to address both
              customer and client user-experience pain points, I decided to
              implement a traditional checkout. This would streamline the
              ordering flow, and solve each of the identified pain points.
            </p>
            <p>
              How would it solve them? Customers would be able to order from
              within martharave.com, eliminating the need for email
              correspondence. This would save time and effort for the customer
              and for my aunt. They would also know order totals as they ordered
              it, since it would be calculated by the software.
            </p>
            <h3>Ideation</h3>
            <p>
              I began the design phase of the project by researching existing
              implementations. I looked at a few example of classic Shopify
              checkouts, and noted things I liked about them as inspiration. A
              few specific things I liked were the size and placement of the
              product images and appearance and functionality of the quantity
              selector.
            </p>
            <div class="canadian-protein">
              <img
                src="/canadian_protein_storefront.webp"
                loading="lazy"
              />
              <img src="/canadian_protein_item.webp" loading="lazy" />
            </div>
            <p>Here are a few of the initial designs:</p>
            <div class="mfps">
              <img
                src="/mfp_products.webp"
                loading="lazy"
                style="max-width: 650px; margin-bottom: 1rem"
              />
              <img
                src="/mfp_cart.webp"
                loading="lazy"
                style="max-width: 650px; margin-bottom: 1rem"
              />
              <img
                src="/mfp_checkout.webp"
                loading="lazy"
                style="max-width: 650px"
              />
            </div>
            <p>
              I experimented with placement of text, different types of buttons
              and methods to select quantities.
            </p>
            <p>
              After implementing the design I thought most intuitive, I did some
              live user-testing with my aunt. I had her walk through the
              checkout flow and identify any points of friction.
            </p>
            <p>
              One thing that I didn’t expect in this process was when she
              couldn’t understand how to update the quantities of the items. I
              thought it was very intuitive, but I was wrong.
            </p>
            <p>
              After showing her alternate designs, she ended up picking a
              different one that made more sense. This process was very
              eye-opening and taught me first-hand the importance of
              user-testing!
            </p>
            <p>
              And here's a mock I whipped up for the thank-you page after a user
              is finished checking out:
            </p>
            <img
              src="/thank_you_page.webp"
              loading="lazy"
              style="max-width: 650px"
            />
            <p>
              The final feature I wanted to implement in this step is an email
              that is sent to the user upon order completion. This email would
              contain all of their order information as well as total cost,
              which is effectively their order receipt. This removes the need
              for my aunt to send customers emails to confirm their orders. Due
              to time constraints, I skipped developing prototypes and instead
              jumped directly into the implementation which I'll show off at the
              end.
            </p>
            <div class="step-header">
              <img src="/circle_three.svg" />
              <h3>Fulfillment</h3>
            </div>
            <p>
              The final step in the process was fulfillment. The main things I
              needed to fix was seeing specific order details, being able to
              print off order details and tracking completed orders.
            </p>
            <p>
              Once again, I wanted to limit the amount of information that’s
              displayed to my aunt, preventing information overload.
            </p>
            <h3>Ideation</h3>
            <p>Here's the low fidelity-prototype I started with:</p>
            <img src="/lfp_order_dashboard.webp" loading="lazy" alt="" />
            <p>
              This design attempts to solve all of the given problems, with each
              “card” displaying only what the customer ordered, a checkbox
              verification system to keep track of order progress, and a print
              button to print off the orders.
            </p>
            <p>
              I experimented with checkboxes, a slider, and having different
              order progress metrics, like “Baked” instead of “Paid”. I
              presented all of these designs to my aunt, received valuable
              feedback, and got to work implementing the high-fidelity
              prototype.
            </p>
            <p>
              Here is the final design of the order dashboard. A few notable
              changes were made between low-fidelity and high-fidelity.
            </p>
            <img
              src="/hfp_order_dashboard.webp"
              loading="lazy"
              alt=""
              style="max-width: 650px"
            />
            <p>
              The first change I made is placing order status information into
              icons with pop-ups. This reduces the amount of page real estate
              that’s taken up with text, and since they are icons the meaning
              behind them can be intuited. Additionally, if my aunt ever forgets
              what an icon means, she can hover over it to to display a pop-up
              description.
            </p>
            <p>
              Additionally, the cards expand when the top-right arrow is
              clicked, displaying the rest of the order details. That way my
              aunt still has access to all the necessary information, but isn’t
              bombarded with all of it at once when only half of it is required
              at a time.
            </p>
            <p>
              Finally, I added a more fleshed-out print layout, which was
              tailored to my aunt’s exact needs. Since she wanted to print off
              each order and attach it to the physical order, she wanted all of
              the order information to be displayed. I jumped immediately to a
              medium-fidelity prototype due to time constraints, and implemented
              the high-fidelity prototype directly into the website after
              receiving feedback from my aunt.
            </p>
            <img
              src="/order_dashboard_print.webp"
              loading="lazy"
              alt=""
              style="max-width: 500px"
            />
            <p></p>
            <h3>Final Design</h3>
            <p>
              After receiving more feedback on the high-fidelity prototypes, I
              got to work implementing the website in code.
            </p>
            <p>
              I used a Next.js and tailwindcss front-end (hosted on Vercel) and
              a PostgreSQL back-end (hosted on Supabase). For my data queries I
              used custom PostgreSQL functions, to optimize query efficiency.
            </p>
            <div class="bar-header">
              <div class="header-bar"></div>
              <h4>Placement</h4>
              <div class="header-bar"></div>
            </div>
            <img
              src="/products_final.webp"
              alt="storefront with different types of cookies"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>
                The total cost is calculated and displayed to the customer
              </li>
              <li>
                Product names and costs are visible, as well as how each
                quantity is measured (per cookie, donzens, etc.)
              </li>
              <li>
                Quantities can be updated either directly on the storefront or
                in the cart that can be toggled open or closed
              </li>
              <li>
                If it exists, the description of the item can be viewed by
                clicking on the product card. It will flip over to reveal more
                details
              </li>
            </ul>
            <img
              src="/checkout_final.webp"
              alt="checkout with some products in the cart"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>Required fields are clearly denoted</li>
              <li>Order quantities can be updated in the checkout</li>
              <li>
                Back button in case customer wants to add further items to their
                cart
              </li>
              <li>
                Large “PLACE ORDER” button with secondary colour to draw
                customer’s attention and minimize confusion
              </li>
            </ul>
            <img
              src="/thank_you_page_final.webp"
              alt="website thank you for ordering page"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>
                Thank you page to inform the customer to check their email
              </li>
              <li>Option to place another order</li>
            </ul>
            <img
              src="/email_final.webp"
              alt="an email from Martha Rave Cookies displaying a customer's order"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>
                An email is sent to the customer with names, pictures,
                quantities, and costs of each item to avoid confusion
              </li>
              <li>
                Order details are also contained in the email so the customer
                can double-check they have the right information
              </li>
            </ul>
            <div class="bar-header">
              <div class="header-bar"></div>
              <h4>Management</h4>
              <div class="header-bar"></div>
            </div>
            <img
              src="/home_dashboard_final.webp"
              alt="a table displaying a breakdown of order quantities"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>
                Table to display total dozens, individual items, and item costs
              </li>
              <li>
                Filter bar to show only items that need to be delivered between
                pre-determined date ranges
              </li>
              <li>
                “At a glance” box displaying aggregate order information -
                useful for keeping track of unverified orders
              </li>
            </ul>
            <img
              src="/home_print_layout_final.webp"
              alt="a print layout of the same table with circles next to each table entry"
              loading="lazy"
              style="max-width: 500px"
            />
            <ul>
              <li>
                Print layout that displays the same information contained in the
                homepage dashboard table
              </li>
              <li>
                Bubbles next to each table item to allow alterations of
                quantities after the page has been printed. This removes the
                need to print multiple of the same page
              </li>
            </ul>
            <img
              src="/all_orders_final.webp"
              alt="table displaying order information for all orders"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>Order table that displays one order per row</li>
              <li>Ability sort by date range</li>
              <li>Edit feature to allow changing of order information</li>
              <li>
                Ability to delete entire order, along with “confirm deletion”
                modal
              </li>
            </ul>
            <div class="bar-header">
              <div class="header-bar"></div>
              <h4>Fulillment</h4>
              <div class="header-bar"></div>
            </div>
            <img
              src="/order_dashboard_final.webp"
              alt="dashboard displaying each customer order"
              loading="lazy"
              class="max-width-650"
              style="margin-bottom: 1rem"
            />
            <img
              src="/order_dashboard_email_final.webp"
              alt="popup with text field and send button, designed to send an email to a customer"
              loading="lazy"
              class="max-width-650"
            />
            <ul>
              <li>
                Order cards that display order quantities on the front of the
                card and further order details on the back
              </li>
              <li>
                Clicking the arrow on the top right of the card flips the card
                over
              </li>
              <li>Order status icons with detailed popups on hover</li>
              <li>Ability to send emails to customers directly from the UI</li>
            </ul>
            <img
              src="/order_dashboard_print_final.webp"
              alt="print layout of orders, showing each order in a neat manner"
              loading="lazy"
              style="max-width: 500px"
            />
            <ul>
              <li>
                Order details printout, perfect for printing, cutting out, and
                stapling to an order
              </li>
              <li>
                Checkboxes next to each order item which can be checked off as
                they’re packaged for delivery
              </li>
              <li>
                Verification and payment status checkbox to ensure the current
                order has been verified and the customer has paid
              </li>
            </ul>
            <div class="bar-header">
              <div class="header-bar"></div>
              <h4>Bonus</h4>
              <div class="header-bar"></div>
            </div>
            <p style="margin-top: 0">
              At the end of the project, my aunt requested I build something to
              keep track of her ingredient purchases. I obliged and quickly
              whipped up a finances page. This page allows my aunt to input the
              quantities and prices of ingredients she buys from the grocery
              store, which will be plotted on a graph.
            </p>
            <p>
              Before, the only data she had to keep track of her expenses is her
              credit card statement. Now, she has a detailed breakdown of how
              much she’s spending and when.
            </p>
            <img
              src="/finances_final.webp"
              alt="a graph of finances"
              loading="lazy"
              class="max-width-650"
            />
            <h3>Conclusion</h3>
            <p>
              After everything was implemented, all feedback was received and
              incorporated, I handed the website off to my aunt. She used it
              right away to process orders for the Christmas season, and
              absolutely loved it. She also told me multiple accounts from
              customers that emailed her to let her know how much they liked the
              storefront and checkout process. A success across the board!
            </p>
            <p>
              I was glad to hear all my hard work had paid off, and I fully
              credit this towards the systematic approach I took when addressing
              the pain points my aunt was facing.
            </p>
            <p>
              All in all, the key pain points were addressed and solved in each
              step of the process, and although my aunt had some minor critiques
              after using it, the majority of the platform was an immediate
              success.
            </p>
            <p>
              All told, this platform ended up cutting time spent on operations
              by 15%, likely reduced customer time expenditure as well, and most
              importantly - decreased the amount of stress and multi-tasking in
              my aunt’s workflow.
            </p>
            <p>
              Also - fun fact: everything on this platform besides paying for a
              domain name is completely free. And, since I took her website off
              of GoDaddy and put it on Vercel, she ended up paying LESS than
              before, which resulted in a 75% reduction in website expenses.
            </p>
            <p>My biggest takeaways?</p>

            <ul>
              <li>
                <span class="gold">Don’t get too attached to your designs</span
                >. You’re designing for a client/customer
                <span class="gold">not</span> for yourself
              </li>
              <li>
                <span class="gold">User feedback is CRITICAL</span>
                at every stage in the design process. The longer you wait, the
                harder it is to change implementations
              </li>
              <li>
                <span class="gold"
                  >How to design a website for older adults</span
                >
                - the web isn’t as intuitive as I thought!
              </li>
              <li>
                And of course,
                <span class="gold">how to build a website from scratch</span>,
                with a functional back-end and front-end
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="model-generator-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/dogs.jpg"
                alt="Dogs on google images"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">Model Generator</h1>
              <p class="subtitle gold">
                <i>ML Image Recognition</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/python_logo.png"
                    alt="Python logo"
                    loading="lazy"
                  />
                  <span>Python</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/selenium.png"
                    alt="Selenium logo"
                    loading="lazy"
                  />
                  <span>Selenium</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/numpy.png"
                    alt="NumPy logo"
                    loading="lazy"
                  />
                  <span>NumPy</span>
                </div>
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/pillow.png"
                    alt="Pillow logo"
                    loading="lazy"
                  />
                  <span>Pillow</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/tensorflow.png"
                    alt="TensorFlow logo"
                    loading="lazy"
                  />
                  <span>TensorFlow</span>
                </div>
              </div>
            </div>
            <h2>Synopsis</h2>
            <p>
              To gain experience in ML and image recognition, my friend and I
              developed a Python script that scrapes the web for images based on
              inputted search queries, and generates an ML image recognition
              model based on that dataset.
            </p>
            <h2>How It Works</h2>
            <img
              src="/web_scraper_diagram.png"
              loading="lazy"
              id="desktop-web-scraper-diagram"
            />
            <img
              src="/web_scraper_diagram_mobile.png"
              loading="lazy"
              id="mobile-web-scraper-diagram"
            />
            <h3>Takeaways and Areas of Personal Growth</h3>
            <ul>
              <li>
                The world of machine learning is very
                <span class="gold">complex and scary</span>, but quite easy to
                use if you're using an abstraction over all the complexity (eg.
                TensorFlow)
              </li>
              <li>
                Python is a very
                <span class="gold">fun language</span> to use - this was one of
                my first experiences with the language. In my opinion, it has
                the easiest to use and to remember syntax
              </li>
              <li>
                It's so much fun to integrate several complex layers of a
                problem and have it function successfully!
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="rally-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/rally.png"
                alt="Two phones displaying the rally app"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">rally</h1>
              <p class="subtitle gold">
                <i>Hack the North Submission</i>
              </p>
            </div>
          </div>
          <div class="content">
            <div class="more-details">More details coming very very soon!</div>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <div class="card-expanded hidden" id="personal-website-card-expanded">
        <div class="inner-wrapper">
          <div class="header">
            <div class="image-well">
              <img
                class="top-image"
                src="/website.jpg"
                alt="A screenshot of christopheroka.com"
                loading="lazy"
              />
            </div>
            <div>
              <h1 class="title">This Website</h1>
              <p class="subtitle gold">
                <i>Website-ception</i>
              </p>
            </div>
          </div>
          <div class="content">
            <h2>Tools</h2>
            <div class="languages-and-tools-block">
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/javascript_logo.png"
                    alt="JavaScript logo"
                    loading="lazy"
                  />
                  <span>JavaScript</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/html_logo.png"
                    alt="HTML logo"
                    loading="lazy"
                  />
                  <span>HTML</span>
                </div>
              </div>
              <div class="languages-and-tools-column">
                <div class="languages-and-tools-row">
                  <img
                    class="languages-and-tools-image"
                    src="/css_logo.png"
                    alt="CSS logo"
                    loading="lazy"
                  />
                  <span>CSS</span>
                </div>
              </div>
            </div>
            <h2>Synopsis</h2>
            <p>
              This is my portfolio website built entirely from vanilla
              JavaScript, HTML, and CSS! No libraries or packages or any of that
              nonsense. NPM who?
            </p>
            <h2>Backstory</h2>
            <p>
              Wanting to use the most current and popular technologies to build
              my FIRST EVER WEBSITE, I asked the senior dev on my team at the
              time what I should use. He suggested vanilla JavaScript, HTML, and
              good 'ol CSS to "learn the fundamentals".
            </p>
            <p>Boring.</p>
            <p>
              So, I got to work building this site, without any idea about best
              coding practices, website optimization, accessibility, etc. I
              didn't know anything.
            </p>
            <h2>The Grind</h2>
            <p>
              After many hours of development and many, many lines of CSS, I
              created the first version of my website. I was so proud of it at
              the time! So what if all the JavaScript, HTML, and CSS are each in
              a single file? What's wrong with that?
            </p>
            <p>
              After a few months passed, I took another look at my website -
              this time with a bit more web dev knowledge - and began on v2. I
              figured the time commitment of a complete rewrite was not worth it
              at the time, so I stripped out parts I didn't like and added parts
              I did like, but kept the fundamental code structure.
            </p>
            <p>
              What you're looking at is the most recent version of the site!
              Very scrappy, lots that I would change today, but a complete site
              rewrite will have to come another day. Just enjoy the experience,
              and please don't look too hard at the source code. You may cry.
            </p>
            <h3>Takeaways and Areas of Personal Growth</h3>
            <ul>
              <li>
                One of the best ways to learn is by
                <span class="gold">building something</span> and putting out
                fires whenever you encounter them. Then, revisiting what you
                built and trying to improve it shows you not only how much
                you've learned in the process, but why certain choices you made
                were bad in the first place
              </li>
              <li>
                <span class="gold"
                  >Building something for yourself is fun!</span
                >
                You can be as creative as you want and there's
                <span class="gold">nobody telling you no</span>. On the other
                hand, you'll never be fully satisfied with what you've built
                ¯\_(ツ)_/¯
              </li>
              <li>
                <span class="gold">Listening to feedback</span>
                will make whatever you're building far better than it would be
                otherwise. But sometimes you don't have to follow all the
                feedback you receive. Come up with solutions that you're also
                happy with, especially if you're building it for yourself!
              </li>
            </ul>
          </div>
        </div>
        <button class="close-button" onclick="closeExpandedCard(this)">
          <div></div>
          <div></div>
        </button>
      </div>
      <button id="back-btn" class="hidden" onclick="returnHome()" tabindex="0">
        <img
          id="left-arrow"
          src="/yellow_back_arrow.svg"
          alt="left arrow"
        />
        <img
          id="gold-back-arrow"
          src="/gold_back_arrow.svg"
          alt="back arrow"
        />
      </button>
      <div id="header-cover"></div>
      <div id="secondary-bg"></div>
      <div id="tertiary-bg"></div>
      <div id="socials-bar" class="socials-bar initial">
        <div class="links">
          <a
            href="https://www.linkedin.com/in/christopher-oka/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="social-icon"
              src="/linkedin.png"
              alt="LinkedIn logo"
            />
          </a>
          <a
            href="https://www.github.com/ChristopherOka"
            target="_blank"
            rel="noreferrer"
          >
            <img
              class="social-icon"
              src="/github.png"
              alt="GitHub logo"
            />
          </a>
          <a href="mailto:chriskroka@gmail.com">
            <img
              class="social-icon"
              src="/gmail.webp"
              alt="Email logo"
            />
          </a>
        </div>
      </div>
      <div id="thats-me-well" class="thats-me-well">
        <svg
          width="676"
          height="454"
          viewBox="0 0 676 454"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="thats-me-line"
            d="M474.915 451.701C513.692 451.701 555.204 450.544 592.365 438.678C611.127 432.687 629.576 422.263 646.749 412.692C658.951 405.89 666.239 399.722 671.348 386.585C675.178 376.737 674.544 366.291 666.766 358.609C646.08 338.178 612.895 329.728 586.215 321.348C572.539 317.053 558.303 314.994 544.372 311.701C524.191 306.931 504.065 302.076 483.898 297.231C435.207 285.532 386.083 275.988 337.025 266.06C290.73 256.69 244.382 247.899 198.05 238.747C182.094 235.595 165.305 232.696 149.816 227.653C137.184 223.54 125.225 217.355 112.615 213.062C104.19 210.194 95.0049 208.616 86.9911 204.682C78.6614 200.592 70.556 196.617 62.0299 192.924C44.7471 185.44 20.1966 176.287 11.5045 157.955C4.50641 143.195 0.127863 126.029 5.05322 110.022C10.1629 93.4154 22.5941 78.2439 35.0187 66.4303C55.0283 47.4049 82.8984 35.806 106.646 22.1754C114.667 17.572 122.092 13.1619 129.678 7.94635C132.02 6.33618 134.32 5.11609 135.225 2.39941"
            stroke="var(--bg-color)"
            stroke-width="8"
            stroke-linecap="round"
          />
        </svg>
        <div class="arrow-head">
          <svg
            width="35"
            height="8"
            viewBox="0 0 35 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arrow-top"
              d="M32.0547 2.48462C25.737 2.9058 20.0026 5.65032 13.6051 5.74043C9.98918 5.79136 6.36902 5.74043 2.75244 5.74043"
              stroke="var(--bg-color)"
              stroke-width="8"
              stroke-linecap="round"
            />
          </svg>
          <svg
            width="13"
            height="30"
            viewBox="0 0 13 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arrow-right"
              d="M10.2253 2.56982C6.41666 9.76393 2.62842 19.3431 2.62842 27.531"
              stroke="var(--bg-color)"
              stroke-width="8"
              stroke-linecap="round"
            />
          </svg>
        </div>

        <button
          id="thats-me-text"
          class="thats-me-text"
          onclick="reanimateThatsMe()"
        >
          that's me!
        </button>
      </div>
      <h1 id="name">Christopher<br />Oka</h1>
    </div>
`;
