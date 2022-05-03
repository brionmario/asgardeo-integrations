import { useAuthContext } from "@asgardeo/auth-react";
import { Loader } from "../components";
import "../landing.css";

export const LandingPage = () => {
  
  const { state, signIn } = useAuthContext();

  if (state.isLoading) {
   return <Loader />;
}
  
  return (
    <div>
       <style jsx>{`
       .nmhp-cta {
         display: -webkit-inline-box;
         display: -webkit-inline-flex;
         display: -moz-inline-box;
         display: -ms-inline-flexbox;
         display: inline-flex;
         -webkit-box-orient: horizontal;
         -webkit-box-direction: normal;
         -webkit-flex-direction: row;
         -moz-box-orient: horizontal;
         -moz-box-direction: normal;
         -ms-flex-direction: row;
         flex-direction: row;
         -webkit-box-align: center;
         -webkit-align-items: center;
         -moz-box-align: center;
         -ms-flex-align: center;
         align-items: center;
         margin: 0.25em auto;
         padding: 0 1em;
         line-height: initial;
         width: auto;
      }
      .nmhp-cta:after {
         content: "";
         display: inline-block;
         width: 1px;
         -webkit-box-flex: 0;
         -webkit-flex: 0 0 auto;
         -moz-box-flex: 0;
         -ms-flex: 0 0 auto;
         flex: 0 0 auto;
      }
      @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
         .nmhp-cta {
            padding: 0 1em;
            margin: 0.5em auto;
         }
      }
      .nmhp-cta .cta-btn-txt {
         padding: 0.35rem 0;
         -webkit-box-flex: 1;
         -webkit-flex: 1 1 auto;
         -moz-box-flex: 1;
         -ms-flex: 1 1 auto;
         flex: 1 1 auto;
         text-align: center;
      }
      @media only screen and (min-width: 950px) and (max-width: 1449px), only screen and (min-width: 1450px) {
         .nmhp-cta .cta-btn-txt {
            padding: 0.5rem 0;
         }
      }
      .nmhp-cta .chevron-right-arrow {
         height: 0.75em;
         width: 0.35em;
         -webkit-box-flex: 0;
         -webkit-flex: 0 1 auto;
         -moz-box-flex: 0;
         -ms-flex: 0 1 auto;
         flex: 0 1 auto;
         margin: 0 0 0 0.5em;
         position: relative;
      }
      .nmhp-cta .chevron-right-arrow svg {
         position: absolute;
         top: 0;
         left: 0;
         margin: 1px 0;
         height: 100%;
         -webkit-transform: scaleX(1);
         -moz-transform: scaleX(1);
         -ms-transform: scaleX(1);
         -o-transform: scaleX(1);
         transform: scaleX(1);
      }
      .nmhp-cta .chevron-right-arrow svg path {
         fill: #fff;
      }
      .nmhp-cta-large {
         font-size: 1rem;
         min-height: 40px;
      }
      .nmhp-cta-large:after {
         min-height: 40px;
      }
      @media only screen and (min-width: 950px) and (max-width: 1449px) {
         .nmhp-cta-large {
            font-size: 1.25rem;
            min-height: 48px;
         }
         .nmhp-cta-large:after {
            min-height: 48px;
         }
      }
      @media only screen and (min-width: 1450px) {
         .nmhp-cta-large {
            font-size: 1.625rem;
            min-height: 48px;
         }
         .nmhp-cta-large:after {
            min-height: 48px;
         }
      }
      .nmhp-cta-extra-large {
         font-size: 1rem;
         min-height: 40px;
      }
      .nmhp-cta-extra-large:after {
         min-height: 40px;
      }
      @media only screen and (min-width: 950px) and (max-width: 1449px) {
         .nmhp-cta-extra-large {
            font-size: 1.625rem;
            min-height: 60px;
         }
         .nmhp-cta-extra-large:after {
            min-height: 60px;
         }
      }
         @media only screen and (min-width: 1450px) {
            .nmhp-cta-extra-large {
               font-size: 1.875rem;
               min-height: 70px;
            }
            .nmhp-cta-extra-large:after {
               min-height: 70px;
            }
         }
      `}</style>
      <div id="appMountPoint">
         <div className="basicLayout">
            <div className="netflix-sans-font-loaded">
               <div className="our-story-desktop-framework">
                  <div>
                     <div className="our-story-container" dir="ltr">
                        <div className="our-story-header-wrapper">
                           <div className="our-story-header" data-uia-nmhp="our-story-header">
                              <span className="svg-nfLogo our-story-logo nfLogo" data-uia="netflix-header-svg-logo-noclick">
                                 <svg viewBox="0 0 111 30" className="svg-icon svg-icon-netflix-logo" focusable="false">
                                    <g id="netflix-logo">
                                       <path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z" id="Fill-14"></path>
                                    </g>
                                 </svg>
                                 <span className="screen-reader-text">Netflix</span>
                              </span>
                              <a className="authLinks redButton" data-uia="header-login-link" onClick={ () => signIn() }>Sign In</a>
                           </div>
                        </div>
                        <div className="our-story-cards" data-uia-nmhp="our-story-cards">
                           <div className="our-story-card hero-card hero_fuji vlv" data-uia-nmhp="hero_fuji" data-uia="our-story-card">
                              <div className="our-story-card-background">
                                 <div className="concord-img-wrapper" data-uia="concord-img-wrapper" style={ { height: "707.992px" }}>
                                    <img className="concord-img vlv-creative" src="https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/e0690319-a480-4f0f-bd70-45238423e815/LK-en-20220425-popsignuptwoweeks-perspective_alpha_website_small.jpg" srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/e0690319-a480-4f0f-bd70-45238423e815/LK-en-20220425-popsignuptwoweeks-perspective_alpha_website_small.jpg 1000w, https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/e0690319-a480-4f0f-bd70-45238423e815/LK-en-20220425-popsignuptwoweeks-perspective_alpha_website_medium.jpg 1500w, https://assets.nflxext.com/ffe/siteui/vlv3/3e521d6d-a53b-4c3f-a85f-dd77c06f7ac7/e0690319-a480-4f0f-bd70-45238423e815/LK-en-20220425-popsignuptwoweeks-perspective_alpha_website_large.jpg 1800w" alt="" />
                                    <div className="concord-img-gradient"></div>
                                 </div>
                              </div>
                              <div className="our-story-card-text">
                                 <h1 id="" className="our-story-card-title" data-uia="hero-title">Unlimited movies, TV shows, and more.</h1>
                                 <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch anywhere. Cancel anytime.</h2>
                                 <form className="cta-form email-form" data-uia="email-form" method="GET">
                                    <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                                    <div className="email-form-lockup">
                                       <ul className="simpleForm structural ui-grid">
                                          <li data-uia="field-email+wrapper" className="nfFormSpace field-email">
                                             <div data-uia="field-email+container" className="nfInput nfInputResponsive">
                                                <div className="nfInputPlacement"><label className="input_id" placeholder="email"><input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_hero_fuji" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" dir="" /><label htmlFor="id_email_hero_fuji" className="placeLabel">Email address</label></label></div>
                                             </div>
                                          </li>
                                       </ul>
                                       <div className="our-story-cta-container cta-link-wrapper">
                                          <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off" tabIndex="0" role="link" data-uia="our-story-cta-hero_fuji">
                                             <span id="" className="cta-btn-txt" data-uia="">Get Started</span>
                                             <span id="" className="chevron-right-arrow" data-uia="">
                                                <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                   <desc>chevron</desc>
                                                   <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </button>
                                       </div>
                                    </div>
                                 </form>
                                 <h3 id="" className="our-story-card-disclaimer" data-uia="our-story-card-disclaimer"></h3>
                              </div>
                              <div className="center-pixel" style={ { position: "absolute" } }></div>
                           </div>
                           <div className="our-story-card animation-card watchOnTv" data-uia-nmhp="watchOnTv" data-uia="our-story-card">
                              <div className="animation-card-container">
                                 <div className="our-story-card-text">
                                    <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Enjoy on your TV.</h1>
                                    <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.</h2>
                                 </div>
                                 <div className="our-story-card-img-container">
                                    <div className="our-story-card-animation-container">
                                       <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" data-uia="our-story-card-img" />
                                       <div className="our-story-card-animation">
                                          <video className="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                                             <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4" />
                                          </video>
                                          <div className="our-story-card-animation-text"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="center-pixel" style={ { position: "absolute" } }></div>
                              </div>
                           </div>
                           <div className="our-story-card animation-card downloadAndWatch flipped" data-uia-nmhp="downloadAndWatch" data-uia="our-story-card">
                              <div className="animation-card-container">
                                 <div className="our-story-card-text">
                                    <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Download your shows to watch offline.</h1>
                                    <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Save your favorites easily and always have something to watch.</h2>
                                 </div>
                                 <div className="our-story-card-img-container">
                                    <div className="our-story-card-animation-container">
                                       <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" data-uia="our-story-card-img" />
                                       <div className="our-story-card-animation">
                                          <div className="our-story-card-animation-image"><img alt="" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" /></div>
                                          <div className="our-story-card-animation-text">
                                             <div id="" className="text-0" data-uia="">Stranger Things</div>
                                             <div id="" className="text-1" data-uia="">Downloading...</div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="center-pixel" style={ { position:"absolute" }}></div>
                              </div>
                           </div>
                           <div className="our-story-card animation-card watchOnDevice" data-uia-nmhp="watchOnDevice" data-uia="our-story-card">
                              <div className="animation-card-container">
                                 <div className="our-story-card-text">
                                    <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Watch everywhere.</h1>
                                    <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h2>
                                 </div>
                                 <div className="our-story-card-img-container">
                                    <div className="our-story-card-animation-container">
                                       <img alt="" className="our-story-card-img" src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-lk.png" data-uia="our-story-card-img" />
                                       <div className="our-story-card-animation">
                                          <video className="our-story-card-video" autoPlay="" playsInline="" muted="" loop="">
                                             <source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-lk.m4v" type="video/mp4" />
                                          </video>
                                          <div className="our-story-card-animation-text"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="center-pixel" style={{ position: "absolute" }}></div>
                              </div>
                           </div>
                           <div className="our-story-card animation-card kidsValueProp flipped" data-uia-nmhp="kidsValueProp" data-uia="our-story-card">
                              <div className="animation-card-container">
                                 <div className="our-story-card-text">
                                    <h1 id="" className="our-story-card-title" data-uia="animation-card-title">Create profiles for kids.</h1>
                                    <h2 id="" className="our-story-card-subtitle" data-uia="our-story-card-subtitle">Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</h2>
                                 </div>
                                 <div className="our-story-card-img-container">
                                    <div className="our-story-card-animation-container">
                                       <img alt="" className="our-story-card-img" src="https://occ-0-2477-64.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABdFTpLmANuJpYneLq8L5m7CunMCi8e8Nl4y7xaPVWzG3IeoDoq17egTQAthApKg_4sdRWdwuR8KadWu1frjL3JQImpwq.png?r=fcd" data-uia="our-story-card-img" />
                                       <div className="our-story-card-animation">
                                          <div className="our-story-card-animation-text"></div>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="center-pixel" style={ { position: "absolute" } }></div>
                              </div>
                           </div>
                           <div className="our-story-card faq-card" data-uia-nmhp="faq" data-uia="our-story-card" id="faq">
                              <div className="our-story-card-text">
                                 <h1 id="" className="our-story-card-title" data-uia="faq-title">Frequently Asked Questions</h1>
                                 <ul className="faq-list">
                                    <li className="faq-list-item" data-uia-nmhp="faq-list-item" data-uia-faq="what_is_netflix">
                                       <button className="faq-question">
                                          What is Netflix?
                                          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                             <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                          </svg>
                                       </button>
                                       <div className="faq-answer closed"><span id="" data-uia="">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.<br/><br/>You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</span></div>
                                    </li>
                                    <li className="faq-list-item" data-uia-nmhp="faq-list-item" data-uia-faq="cost">
                                       <button className="faq-question">
                                          How much does Netflix cost?
                                          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                             <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                          </svg>
                                       </button>
                                       <div className="faq-answer closed"><span id="" data-uia="">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from USD3.99 to USD11.99 a month. No extra costs, no contracts.</span></div>
                                    </li>
                                    <li className="faq-list-item" data-uia-nmhp="faq-list-item" data-uia-faq="where_to_watch">
                                       <button className="faq-question">
                                          Where can I watch?
                                          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                             <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                          </svg>
                                       </button>
                                       <div className="faq-answer closed"><span id="" data-uia="">Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.<br/><br/>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</span></div>
                                    </li>
                                    <li className="faq-list-item" data-uia-nmhp="faq-list-item" data-uia-faq="cancel">
                                       <button className="faq-question">
                                          How do I cancel?
                                          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                             <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                          </svg>
                                       </button>
                                       <div className="faq-answer closed"><span id="" data-uia="">Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</span></div>
                                    </li>
                                    <li className="faq-list-item" data-uia-nmhp="faq-list-item" data-uia-faq="what_to_watch_nft">
                                       <button className="faq-question">
                                          What can I watch on Netflix?
                                          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                             <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                          </svg>
                                       </button>
                                       <div className="faq-answer closed"><span id="" data-uia="">Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</span></div>
                                    </li>
                                    <li className="faq-list-item" data-uia-nmhp="faq-list-item" data-uia-faq="kids_value_prop">
                                       <button className="faq-question">
                                          Is Netflix good for kids?
                                          <svg id="thin-x" viewBox="0 0 26 26" className="svg-icon svg-icon-thin-x svg-closed" focusable="true">
                                             <path d="M10.5 9.3L1.8 0.5 0.5 1.8 9.3 10.5 0.5 19.3 1.8 20.5 10.5 11.8 19.3 20.5 20.5 19.3 11.8 10.5 20.5 1.8 19.3 0.5 10.5 9.3Z"></path>
                                          </svg>
                                       </button>
                                       <div className="faq-answer closed"><span id="" data-uia="">The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space.<br/><br/>Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</span></div>
                                    </li>
                                 </ul>
                                 <form className="cta-form email-form" data-uia="email-form" method="GET">
                                    <h3 className="email-form-title">Ready to watch? Enter your email to create or restart your membership.</h3>
                                    <div className="email-form-lockup">
                                       <ul className="simpleForm structural ui-grid">
                                          <li data-uia="field-email+wrapper" className="nfFormSpace field-email">
                                             <div data-uia="field-email+container" className="nfInput nfInputResponsive">
                                                <div className="nfInputPlacement"><label className="input_id" placeholder="email"><input type="email" data-uia="field-email" name="email" className="nfTextField" id="id_email_faq" value="" tabIndex="0" autoComplete="email" maxLength="50" minLength="5" dir="" /><label htmlFor="id_email_faq" className="placeLabel">Email address</label></label></div>
                                             </div>
                                          </li>
                                       </ul>
                                       <div className="our-story-cta-container cta-link-wrapper">
                                          <button className="btn btn-red nmhp-cta nmhp-cta-extra-large btn-none btn-custom" type="submit" autoComplete="off" tabIndex="0" role="link" data-uia="our-story-cta-faq">
                                             <span id="" className="cta-btn-txt" data-uia="">Get Started</span>
                                             <span id="" className="chevron-right-arrow" data-uia="">
                                                <svg viewBox="0 0 6 12" xmlns="http://www.w3.org/2000/svg">
                                                   <desc>chevron</desc>
                                                   <path d="M.61 1.312l.78-.624L5.64 6l-4.25 5.312-.78-.624L4.36 6z" fill="none" fillRule="evenodd"></path>
                                                </svg>
                                             </span>
                                          </button>
                                       </div>
                                    </div>
                                 </form>
                              </div>
                              <div className="center-pixel" style={ { position: "absolute" } }></div>
                           </div>
                           <div className="our-story-card card-contents footer-card our-story-card-no-border" style={ { position: "relative" } } data-uia-nmhp="footer" data-uia="our-story-card">
                              <div className="site-footer-wrapper centered dark">
                                 <div className="footer-divider"></div>
                                 <div className="site-footer">
                                    <p className="footer-top"><a className="footer-top-a" href="https://help.netflix.com/contactus">Questions? Contact us.</a></p>
                                    <ul className="footer-links structural">
                                       <li className="footer-link-item" placeholder="footer_responsive_link_faq_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/support/412" placeholder="footer_responsive_link_faq"><span id="" data-uia="data-uia-footer-label">FAQ</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_help_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com" placeholder="footer_responsive_link_help"><span id="" data-uia="data-uia-footer-label">Help Center</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_account_item"><a className="footer-link" data-uia="footer-link" href="/youraccount" placeholder="footer_responsive_link_account"><span id="" data-uia="data-uia-footer-label">Account</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_media_center_item"><a className="footer-link" data-uia="footer-link" href="https://media.netflix.com/" placeholder="footer_responsive_link_media_center"><span id="" data-uia="data-uia-footer-label">Media Center</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_relations_item"><a className="footer-link" data-uia="footer-link" href="http://ir.netflix.com/" placeholder="footer_responsive_link_relations"><span id="" data-uia="data-uia-footer-label">Investor Relations</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_jobs_item"><a className="footer-link" data-uia="footer-link" href="https://jobs.netflix.com/jobs" placeholder="footer_responsive_link_jobs"><span id="" data-uia="data-uia-footer-label">Jobs</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_waysToWatch_item"><a className="footer-link" data-uia="footer-link" href="/watch" placeholder="footer_responsive_link_waysToWatch"><span id="" data-uia="data-uia-footer-label">Ways to Watch</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_terms_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/termsofuse" placeholder="footer_responsive_link_terms"><span id="" data-uia="data-uia-footer-label">Terms of Use</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_privacy_separate_link_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/privacy" placeholder="footer_responsive_link_privacy_separate_link"><span id="" data-uia="data-uia-footer-label">Privacy</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_cookies_separate_link_item"><a className="footer-link" data-uia="footer-link" href="#" placeholder="footer_responsive_link_cookies_separate_link"><span id="" data-uia="data-uia-footer-label">Cookie Preferences</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_corporate_information_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/corpinfo" placeholder="footer_responsive_link_corporate_information"><span id="" data-uia="data-uia-footer-label">Corporate Information</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_contact_us_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/contactus" placeholder="footer_responsive_link_contact_us"><span id="" data-uia="data-uia-footer-label">Contact Us</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_speed_test_item"><a className="footer-link" data-uia="footer-link" href="https://fast.com" placeholder="footer_responsive_link_speed_test"><span id="" data-uia="data-uia-footer-label">Speed Test</span></a></li>
                                       <li className="footer-link-item" placeholder="footer_responsive_link_legal_notices_item"><a className="footer-link" data-uia="footer-link" href="https://help.netflix.com/legal/notices" placeholder="footer_responsive_link_legal_notices"><span id="" data-uia="data-uia-footer-label">Legal Notices</span></a></li>
                                       <li className="footer-link-item originals-link" placeholder="footer_responsive_link_only_on_netflix_item"><a className="footer-link" data-uia="footer-link" href="https://www.netflix.com/lk/browse/genre/839338" placeholder="footer_responsive_link_only_on_netflix"><span id="" data-uia="data-uia-footer-label">Only on Netflix</span></a></li>
                                    </ul>
                                    <p className="footer-country">Netflix Sri Lanka</p>
                                 </div>
                              </div>
                              <div className="center-pixel" style={ { position: "absolute" } }></div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
