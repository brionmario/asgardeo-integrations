import { useAuthContext } from "@asgardeo/auth-react";
import { Loader } from "../components";
import "../home.css";

export const HomePage = () => {

  const { state, signOut } = useAuthContext();

  if (state.isLoading) {
     return <Loader />;
  }
  
  return (
    <div>
      <div id="appMountPoint">
         <div className="netflix-sans-font-loaded">
            <div dir="ltr" className="">
               <div>
                  <div className="bd dark-background" lang="en-LK" data-uia="container-adult">
                     <div className="pinning-header">
                        <div className="pinning-header-container">
                           <div className="main-header has-billboard menu-navigation" role="navigation">
                              <a aria-label="Netflix" className="logo icon-logoUpdate active" href="/browse"></a>
                              <ul className="tabbed-primary-navigation">
                                 <li className="navigation-menu"><a className="menu-trigger" role="button" aria-haspopup="true" tabIndex="0">Browse</a></li>
                                 <li className="navigation-tab"><a className="current active" href="/browse">Home</a></li>
                                 <li className="navigation-tab"><a href="/browse/genre/83">TV Shows</a></li>
                                 <li className="navigation-tab"><a href="/browse/genre/34399">Movies</a></li>
                                 <li className="navigation-tab"><a href="/latest">New &amp; Popular</a></li>
                                 <li className="navigation-tab"><a href="/browse/my-list">My List</a></li>
                                 <li className="navigation-tab"><a href="/browse/original-audio">Browse by Languages</a></li>
                              </ul>
                              <div className="secondary-navigation">
                                 <div className="nav-element">
                                    <div className="searchBox"><button className="searchTab" tabIndex="0" aria-label="Search" data-uia="search-box-launcher"><span className="icon-search"></span></button></div>
                                 </div>
                                 <div className="nav-element"><span className="notifications"><button className="notifications-menu" aria-haspopup="true" aria-expanded="false" aria-label="Notifications"><span className="icon-button-notification"></span><span className="notification-pill">4</span></button></span></div>
                                 <div className="nav-element">
                                    <div className="account-menu-item">
                                       <div className="account-dropdown-button"><a href="/YourAccount" role="button" tabIndex="0" aria-haspopup="true" aria-expanded="false" aria-label="Brion - Account &amp; Settings"><span className="profile-link" role="presentation"><img className="profile-icon" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABXBjTzZ8d_ZwyaqeNSsQyt9QzqgzAnh8NE-Z7EDENXKlGcUCCQd3LNSG8SltLJnLwVy-afksvWYFeeLlCGa5SjI.png?r=2ca" alt="" /></span></a><span className="caret" role="presentation"></span></div>
                                    </div>
                                 </div>
                                 <div className="nav-element">
                                    <a className="authLinks redButton" data-uia="header-login-link" onClick={ () => signOut() }>Sign Out</a>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="mainView" id="main-view" role="main">
                        <div className="lolomo is-fullbleed">
                           <h1 className="visually-hidden">Netflix Home</h1>
                           <span className="volatile-billboard-animations-container">
                              <div className="billboard-row" role="region" aria-label="Featured Content">
                                 <div className="ptrack-container billboard-presentation-tracking">
                                    <div className="billboard-presentation-tracking ptrack-content">
                                       <div className="billboard-presentation-tracking ptrack-content">
                                          <div className="billboard billboard-pane billboard-originals trailer-billboard">
                                             <div className="billboard-motion">
                                                <div className="nfp nf-player-container notranslate NFPlayer" tabIndex="-1">
                                                   <div className="VideoContainer VideoContainer--use-element-dimensions" aria-hidden="true" role="presentation" data-uia="player" data-videoid="81517122"></div>
                                                   <div className="PlayerControlsNeo__layout PlayerControlsNeo__layout--inactive PlayerControlsNeo__layout--loading">
                                                      <div className="PlayerControlsNeo__all-controls">
                                                         <div className="PlayerControlsNeo__gradient-top"></div>
                                                         <div className="PlayerControlsNeo__gradient-bottom"></div>
                                                         <div className="PlayerControlsNeo__core-controls">
                                                            <div data-uia="nfplayer-bottom-controls" className="PlayerControlsNeo__bottom-controls PlayerControlsNeo__bottom-controls--faded">
                                                               <div className="PlayerControlsNeo__progress-control-row PlayerControlsNeo__progress-control-row--row-standard">
                                                                  <div className="PlayerControlsNeo__progress-container"></div>
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="motion-background-component bottom-layer full-screen">
                                                   <div className="hero-image-wrapper">
                                                      <img className="hero static-image image-layer" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABQfKs1VNvITSzc1JiJdvHbh6feFypmpMyPsXHON0mmWhMRMAARJstL143rhdho0tNf81GKGD1JC_y8p4e5B9Z9x_ZLoE.webp?r=a9b" alt="" />
                                                      <div className="trailer-vignette vignette-layer"></div>
                                                      <div className="hero-vignette vignette-layer"></div>
                                                      <div className="embedded-components button-layer"></div>
                                                   </div>
                                                   <div className="embedded-components button-layer"><span className="ActionButtons"></span><span className="maturity-rating "></span></div>
                                                </div>
                                             </div>
                                             <div className="fill-container">
                                                <div className="info meta-layer">
                                                   <div className="logo-and-text meta-layer">
                                                      <div className="titleWrapper">
                                                         <div className="billboard-title">
                                                         <img alt="Waist Deep" class="title-logo" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABaQjYnJo6pAsKbzaKhOk1i3AgCiCov_8fGEuFLgDeCAeIhcoQ82lATC7iufb0zZfM1ZQGbegXGWWGzgmFVBja8cwTOJenTsI8hwY.webp?r=a20" title="Waist Deep" />
                                                         </div>
                                                      </div>
                                                      <div className="info-wrapper">
                                                         <div className="info-wrapper-fade">
                                                            <div className="episode-title-container"></div>
                                                            <div className="synopsis-fade-container">
                                                               <div className="synopsis no-supplemental">
                                                               In Los Angeles, recently paroled O2 teams up with a street-smart hustler when a gang hijacks his car and holds his son for ransom.
                                                               </div>
                                                            </div>
                                                         </div>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </span>
                           <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="genre">
                              <h2 className="rowHeader css-0">
                                 <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/genre/89677">
                                    <div className="row-header-title">European TV Dramas</div>
                                    <div className="aro-row-header more-visible">
                                       <div className="see-all-link">Explore All</div>
                                       <div className="aro-row-chevron icon-akiraCaretRight"></div>
                                    </div>
                                 </a>
                              </h2>
                              <div className="rowContainer rowContainer_title_card" id="row-1">
                                 <div className="ptrack-container">
                                    <div className="rowContent slider-hover-trigger-layer">
                                       <div className="slider">
                                          <ul className="pagination-indicator">
                                             <li className="active"></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                          </ul>
                                          <div className="sliderMask showPeek">
                                             <div className="sliderContent row-with-x-columns">
                                                <div className="slider-item slider-item-0">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-0" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81335264?tctx=1%2C0%2C%2C%2C%2C%2C%2C" role="link" aria-label="Hold Tight" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABTCy-Yzg6xBRcUoEy9tXfA5TbpmobpKIMopMK982nZ3P2KN5wVNg5LVVOfv2LQxMd962YWQKDIEYMj840J7k8jmnR8aVAk77VEeD36FCV26_3IK9Vp_Qig05p3x1.jpg?r=d2a" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Hold Tight</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-1">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-1" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81001209?tctx=1%2C1%2C%2C%2C%2C%2C%2C" role="link" aria-label="The Stranger" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUro2h54CxfEqkj6Z5rJk4R2ezXpeHp8eFZhDOKOkNHQvxQ3Csp9foQbQIkA7Vbf9QFQ5pry8GgaeqM_iootdc6PNKQpbd-QRM0xajHNCfw-pYGaGVZm8Gdm_R5C.jpg?r=eeb" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">The Stranger</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-2">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-2" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80993591?tctx=1%2C2%2C%2C%2C%2C%2C%2C" role="link" aria-label="White Lines" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXhPSGXvce5SFhEuvc4UySQ-uL6mcAvFO_f8eYaFpm0KMrxOpXu9HoVOz81CkdkroHx3On9D-5QNrvuA2if1hSRp5_c.webp?r=5b0" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">White Lines</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-3">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-3" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80200596?tctx=1%2C3%2C%2C%2C%2C%2C%2C" role="link" aria-label="Perfume" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABS8YSOYkLCarDaXnFrvDb9fuNTRykdhOnr5TPiYpjIww_4kCmBbZHDwJoQzD_b5uDdwU1_2Ew1fghwmn7yugeGE8TYg.webp?r=7b7" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Perfume</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-4">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-4" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80201500?tctx=1%2C4%2C%2C%2C%2C%2C%2C" role="link" aria-label="Safe" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABc8uuIV-HCdNjfu-SMDfeIGQUIeUKn9kdXwHnjNDifjscX7PMCbaaKig-R1rVFFyWoMekBdriBxfcRszbOkWPVW3OHoVwt4B3a2liE7V_pe5wtF0jDqMJ6PlKbsq.jpg?r=6fb" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Safe</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-5">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-5" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80206099?tctx=1%2C5%2C%2C%2C%2C%2C%2C" role="link" aria-label="The Serpent" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABW3OMu1x3L8Y_GsptX2cqYM5J1UCL-orqPzQB6ftUH3PMaSefW7X_8qyTq6GiTDKKB-PEzNy1ekgUywGw4ZNb-GfFiii1RvoRaPMb5GzAuos-yMCNGwRFaJ0GTHH.jpg?r=1c4" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">The Serpent</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-6">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-6" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80235864?tctx=1%2C6%2C%2C%2C%2C%2C%2C" aria-label="Bodyguard" tabIndex="-1" aria-hidden="true" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZvudJav4tiZrN0734_lkOWeskEo4Sbl85M7X_3cgU8huXcNhkima3H6MefHH177HQYWPoZLt9mNKbsFHPwj5eg2l72lkr9BqKQfllHkUFR_yT5YMyZ8XMkPHGQb.jpg?r=a86" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Bodyguard</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-1-7" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81281008?tctx=1%2C7%2C%2C%2C%2C%2C%2C" aria-label="Yakamoz S-245" tabIndex="-1" aria-hidden="true" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUTZ4lrk9jBU2umblXx7_ekA5iUnDZz0hxLfN6D9V--UR5Xt6-RLJTZ74L9SHLG_qL6Zua7Y6gz9gzUUHrvcXt_yREwiCNfmemvgjtgYbrFtS8bsYmmp0iYi8L3W.jpg?r=c51" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Yakamoz S-245</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <span className="handle handleNext active" tabIndex="0" role="button" aria-label="See more titles"><b className="indicator-icon icon-rightCaret"></b></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="trendingNow">
                              <h2 className="rowHeader css-0">
                                 <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/trending-now">
                                    <div className="row-header-title">Trending Now</div>
                                    <div className="aro-row-header more-visible">
                                       <div className="see-all-link">Explore All</div>
                                       <div className="aro-row-chevron icon-akiraCaretRight"></div>
                                    </div>
                                 </a>
                              </h2>
                              <div className="rowContainer rowContainer_title_card" id="row-2">
                                 <div className="ptrack-container">
                                    <div className="rowContent slider-hover-trigger-layer">
                                       <div className="slider">
                                          <ul className="pagination-indicator">
                                             <li className="active"></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                          </ul>
                                          <div className="sliderMask showPeek">
                                             <div className="sliderContent row-with-x-columns">
                                                <div className="slider-item slider-item-0">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-0" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81397576?tctx=2%2C0%2C%2C%2C%2C%2C%2C" role="link" aria-label="365 Days: This Day" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABay4pQnMILo08j8PMQ-n0YHbOlb_Lbqb_TMaPr9oV8V373oWiA2twwfweyEFWHte9p4XSleebnbJaAZv8yHW6qg5jqBMNspl6Az9d-l9sW7aGiY1M0fAFOSVVwC5CW5ihxl0eYQCImvR-4-WV-5gP4QBiNHSoZcYqI4TexpUNp4eF9-NQA5PqO0.jpg?r=632" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">365 Days: This Day</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-1">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-1" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/70243453?tctx=2%2C1%2C%2C%2C%2C%2C%2C" role="link" aria-label="Flight" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbddJufakyZzfaCVSM6hp70MFHGclzeWd_kcr6FynVMhEjPDFeZ-1bIivUg22TiXdvSd0Edy9WhELC7kB-WGgu6SPspqLF0Y5RBPICUKY1_HrVJ3t_rmJsoWvLLPhp2lKYWprtS1RIWCdNefFnEehvrjSzU.webp?r=b91" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Flight</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-2">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-2" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81216491?tctx=2%2C2%2C%2C%2C%2C%2C%2C" role="link" aria-label="The Mystery of Marilyn Monroe: The Unheard Tapes" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABe10u-r9ovFOVu2raMrRX5R5Cs6IrPZKyE2BsHSkGBJfKJXvnAS2_922y-S6LkaE4_r8lyvop_wZbhSQHeMdaa5r0HaZK00pkdmWBXCxVGmpOF8cQ-WAibOdG2DfgkzvuSJUS3n4NShoOa0bAOipQ_q5dxU9B2fbzdiOW3WGRKrHOJ08Bv0byRM.jpg?r=8a1" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">The Mystery of Marilyn Monroe: The Unheard Tapes</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-3">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-3" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81280352?tctx=2%2C3%2C%2C%2C%2C%2C%2C" role="link" aria-label="Gangubai Kathiawadi" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABco-RJE0beZuW4euUqyLlLmnUhcOjtwfUByWjTDhWzUCwRG0_CYFZb2Fhytb8vUg__P9PJ5AUU4awuDJWHQeSx9CTRZjML9tKwZs74TM-51wD-0JuZPjXnSi0oNkdEyXA5h2J4mOofiAWhsjsVSK_4wTonU.webp?r=006" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Gangubai Kathiawadi</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-4">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-4" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81176353?tctx=2%2C4%2C%2C%2C%2C%2C%2C" role="link" aria-label="Silverton Siege" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSagIZwf42NkrBQK3RibexoPfv2Io3ZCGotgiQMHbIkbfSqTZsFQ_jVWuR8GzyYe7aBfyt1_XNlcfLV9FrVq2Zta4MbeZGYKiq7H2X6NpBHg4ul1xVetuC0cf4jOjtxQ4-cRDv_7mgvPJvJPBB6J-5GKyXLpet99wnqLVZ4JWFhMa4UGzBAQS4g.jpg?r=dad" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Silverton Siege</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-5">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-5" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81261170?tctx=2%2C5%2C%2C%2C%2C%2C%2C" role="link" aria-label="The Marked Heart" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUxA03S0juo9rUa0BCBA6CI113HwVVK1ILz0Mxlta5ODxPNjDtzg2FPRHpjzQzVNdS5MJS7IwW0lmVnFn8mSIOXBwgiJGZSnQjRkwP3HGh-ZSOsH5ZzgovzkdeBKNYqk20-cvXSXMrS0RgaJniEGiSsgOcoV9jbSBMMc4k4IpZFO08BUb85fjqs.jpg?r=0f2" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">The Marked Heart</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-6">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-6" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80117552?tctx=2%2C6%2C%2C%2C%2C%2C%2C" aria-label="Ozark" tabIndex="-1" aria-hidden="true" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSeqkHnYW0T2aNHj2AQAqmzRg3T82y-4X8vfkduV032t5N9U0S_4-cAxEE9L7uFeKewI17QZTpXW1dzJcdEpKiDi0x4_R9qRjb2sU2vmme6OA6KyILI8nbNeCJP_iE1MTceAxVbbR1swZA662v1RxazITaD8tQ.jpg?r=71f" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Ozark</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-2-7" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81312809?tctx=2%2C7%2C%2C%2C%2C%2C%2C" aria-label="Fishbowl Wives" tabIndex="-1" aria-hidden="true" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZyC9HQTPFEg8hXSmJOlKJVfHKz9AcX68tVVwRKK0wIKYQnBAW1UNynHl9DxTumURde3__jWfWervqm-NNG4ag74eu-6b6vD17FVT3wKZoquvwqh9OHnD11VZauI.jpg?r=277" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Fishbowl Wives</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <span className="handle handleNext active" tabIndex="0" role="button" aria-label="See more titles"><b className="indicator-icon icon-rightCaret"></b></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                           <div className="lolomoRow lolomoRow_title_card css-0" data-list-context="continueWatching">
                              <h2 className="rowHeader css-0">
                                 <a historystate="[object Object]" className="rowTitle css-0" href="/browse/m/continue-watching">
                                    <div className="row-header-title">Continue Watching for Brion</div>
                                    <div className="aro-row-header more-visible">
                                       <div className="see-all-link">Explore All</div>
                                       <div className="aro-row-chevron icon-akiraCaretRight"></div>
                                    </div>
                                 </a>
                              </h2>
                              <div className="rowContainer rowContainer_title_card" id="row-3">
                                 <div className="ptrack-container">
                                    <div className="rowContent slider-hover-trigger-layer">
                                       <div className="slider">
                                          <ul className="pagination-indicator">
                                             <li className="active"></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                             <li className=""></li>
                                          </ul>
                                          <div className="sliderMask showPeek">
                                             <div className="sliderContent row-with-x-columns">
                                                <div className="slider-item slider-item-0">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-0" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81086887?tctx=3%2C0%2C%2C%2C%2C%2C%2C" role="link" aria-label="S.W.A.T.: Under Siege" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSnGiOpguJByaWlYV7S8yJqLhON1MjYP5TjDxtnHik3bbwlA9iNOi8rH6wyvgH_zwSArLU5vcCCghhN24l13MZZPbTs.webp?r=590" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">S.W.A.T.: Under Siege</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "60%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-1">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-1" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81237994?tctx=3%2C1%2C%2C%2C%2C%2C%2C" role="link" aria-label="All of Us Are Dead" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABRytAaXtmOk7g780ny1cih2m7zv0lP_mn1FnShSon8LBD8k5WfsoXEZMFZvX2VnnPRr5GGZRkRt8FwZc4kdfH0sqFf9S78RIEOIiqJVDfpzqlUTzs0rjoyFdVPZ6.jpg?r=45c" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">All of Us Are Dead</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "62%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-2">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-2" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81008305?tctx=3%2C2%2C%2C%2C%2C%2C%2C" role="link" aria-label="Inventing Anna" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfxdMDG7FhvVb7My0sWB7b8LzrduvDDLHAkUdx3Sln38-BS3lpacrMgMMGKp2IZBf3vA8GyRiKQ77vjFExq0iwoS6-1FMbtiTidfsbPzhuZPNxwRx1lL6J-mtcKY.jpg?r=eb9" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Inventing Anna</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "18%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-3">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-3" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81140577?tctx=3%2C3%2C%2C%2C%2C%2C%2C" role="link" aria-label="Dave Chappelle: Sticks &amp; Stones" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABSTrMfa0l742fQgwbkoXWAkHAQLIu1lW5cBoWxbrm9qaPytpNWVrDioDLj31VLzPCl-yxW4oZFe9hAa4QdxClAWskrt0rdJSa5qfvYuNVMzmR_YJRfZo1anG0O8W.jpg?r=eb1" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Dave Chappelle: Sticks &amp; Stones</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "66%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-4">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-4" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81130130?tctx=3%2C4%2C%2C%2C%2C%2C%2C" role="link" aria-label="American Murder: The Family Next Door" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABR2qa-VKUwb1lxuk17abMFwQnqK8IeWTtJM6FHP8UVncTQP1rV53C7LKCNcSI6U_M_0QTT-_UTGm0QE-F_X2YLyTpWeeHtkcVrqm8agz5BXRrnb0mAlMY2JU1fX_.jpg?r=a64" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">American Murder: The Family Next Door</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "26%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-5">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-5" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/80044950?tctx=3%2C5%2C%2C%2C%2C%2C%2C" role="link" aria-label="The OA" tabIndex="0" aria-hidden="false" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYPoJaP4FUNJuuJQ6Ey8_KM5cfg2gsZWT27ykYy_5cdkIhHBlLnIgyW9DF9dVVKlNeG0TaGCK7R-rPdaAaKiWhpQBmvQoUyiEoapSS2wVMZ4D4dJtVCHsK6JAwPf.jpg?r=e0c" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">The OA</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "25%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-6">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-6" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81194110?tctx=3%2C6%2C%2C%2C%2C%2C%2C" aria-label="Tall Girl 2" tabIndex="-1" aria-hidden="true" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYfqrJs7Vch9B2pNIjVi_ZPbNwA2fV6NNmGGlMF5OXD1jeE4xvk0QBUPnvaPvapqol_KFa6llf0enrgd6xELWeTiCv0yBFs_KcNUBWPAtiu6KYZfgwncW3Wf2RYe.jpg?r=480" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Tall Girl 2</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "16%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="title-card-container css-0">
                                                      <div id="title-card-3-7" className="title-card">
                                                         <div className="ptrack-content">
                                                            <a href="/watch/81002216?tctx=3%2C7%2C%2C%2C%2C%2C%2C" aria-label="Unabomber - In His Own Words" tabIndex="-1" aria-hidden="true" className="slider-refocus">
                                                               <div className="boxart-size-16x9 boxart-container boxart-rounded">
                                                                  <img className="boxart-image boxart-image-in-padded-container" src="https://occ-0-2477-58.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABUnNz90JU1J5jo4P-7ZWhNJ5IRZWzAkAfa3Mvo1kEfsKfoJRq5yAjogEnBL0JOh7NCPtKylALFbKB8Tn1soOCUVQzUw.webp?r=ef0" alt="" />
                                                                  <div className="fallback-text-container" aria-hidden="true">
                                                                     <p className="fallback-text">Unabomber - In His Own Words</p>
                                                                  </div>
                                                               </div>
                                                               <div className="click-to-change-JAW-indicator">
                                                                  <div className="bob-jawbone-chevron">
                                                                     <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-chevron-down">
                                                                        <path fillRule="evenodd" clipRule="evenodd" d="M19.293 7.29297L12.0001 14.5859L4.70718 7.29297L3.29297 8.70718L11.293 16.7072C11.4805 16.8947 11.7349 17.0001 12.0001 17.0001C12.2653 17.0001 12.5196 16.8947 12.7072 16.7072L20.7072 8.70718L19.293 7.29297Z" fill="currentColor"></path>
                                                                     </svg>
                                                                  </div>
                                                               </div>
                                                            </a>
                                                         </div>
                                                         <div className="bob-container"></div>
                                                      </div>
                                                      <div className="progress "><span className="progress-bar"><span role="presentation" className="progress-completed" style={{ width: "58%" }}></span></span></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                                <div className="slider-item slider-item-">
                                                   <div className="smallTitleCard loadingTitle fullWidth">
                                                      <div className="ratio-16x9 no-pulsate"></div>
                                                   </div>
                                                </div>
                                             </div>
                                          </div>
                                          <span className="handle handleNext active" tabIndex="0" role="button" aria-label="See more titles"><b className="indicator-icon icon-rightCaret"></b></span>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div role="contentinfo" className="member-footer" id="member-footer">
                        <div className="social-links">
                           <a className="social-link" href="https://www.facebook.com/Netflix/" target="_blank" aria-label="facebook">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-facebook-logo">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M13.9868 13.1621V21.9841H10.0418V13.1621H6.8418V9.51207H10.0468V6.73207C10.0468 3.56707 11.9318 1.82007 14.8148 1.82007C15.7616 1.83321 16.7061 1.91577 17.6408 2.06707V5.17307H16.0448C15.4952 5.10007 14.9422 5.28088 14.5419 5.66447C14.1415 6.04807 13.9373 6.59284 13.9868 7.14507V9.51207H17.4868L16.9278 13.1621H13.9868Z" fill="currentColor"></path>
                              </svg>
                           </a>
                           <a className="social-link" href="https://www.instagram.com/Netflix" target="_blank" aria-label="instagram">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-instagram-logo">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M21.9302 16.1229C21.9586 17.6764 21.3791 19.1796 20.3152 20.3119C19.1853 21.3804 17.68 21.9606 16.1252 21.9269C14.4742 22.0209 9.52524 22.0209 7.87524 21.9269C6.32151 21.955 4.81816 21.3756 3.68524 20.3119C2.61778 19.1818 2.03769 17.6772 2.07024 16.1229C1.97724 14.4719 1.97724 9.52294 2.07024 7.87294C2.03979 6.3188 2.61957 4.8146 3.68524 3.68294C4.81792 2.61946 6.32187 2.04157 7.87524 2.07294C9.52624 1.97894 14.4752 1.97894 16.1252 2.07294C17.6791 2.04388 19.1828 2.62347 20.3152 3.68794C21.3827 4.81807 21.9628 6.32272 21.9302 7.87694C22.0232 9.52794 22.0232 14.4719 21.9302 16.1229ZM20.2002 11.9999C20.2002 10.5449 20.3202 7.42194 19.8002 6.10594C19.4575 5.23672 18.7695 4.54869 17.9002 4.20594C16.5882 3.68894 13.4612 3.80594 12.0062 3.80594C10.5512 3.80594 7.42824 3.68494 6.11224 4.20594C5.24322 4.54899 4.55529 5.23693 4.21224 6.10594C3.69524 7.41794 3.81224 10.5449 3.81224 11.9999C3.81224 13.4549 3.69124 16.5779 4.21224 17.8939C4.5556 18.7628 5.24343 19.4506 6.11224 19.7939C7.42424 20.3109 10.5522 20.1939 12.0062 20.1939C13.4602 20.1939 16.5842 20.3149 17.9002 19.7939C18.7693 19.4509 19.4572 18.763 19.8002 17.8939C20.3192 16.5819 20.2002 13.4549 20.2002 11.9999ZM17.1302 11.9999C17.1302 14.8311 14.8354 17.1264 12.0042 17.1269C9.17307 17.1275 6.87734 14.8331 6.87624 12.0019C6.87513 9.17077 9.16907 6.8746 12.0002 6.87293C13.361 6.87028 14.6668 7.40953 15.6292 8.37155C16.5916 9.33356 17.1314 10.6392 17.1292 11.9999H17.1302ZM15.3362 11.9999C15.3362 10.1596 13.8446 8.66749 12.0042 8.66694C10.1639 8.66639 8.67134 10.1576 8.67024 11.9979C8.66914 13.8383 10.1599 15.3313 12.0002 15.3329C13.8409 15.3318 15.333 13.8406 15.3352 11.9999H15.3362ZM17.3362 7.85895C16.6735 7.85895 16.1362 7.32168 16.1362 6.65894C16.1362 5.9962 16.6735 5.45894 17.3362 5.45894C17.999 5.45894 18.5363 5.9962 18.5363 6.65894C18.5381 6.97725 18.4127 7.28311 18.1879 7.50847C17.9631 7.73383 17.6576 7.86001 17.3392 7.85895H17.3362Z" fill="currentColor"></path>
                              </svg>
                           </a>
                           <a className="social-link" href="https://www.youtube.com/channel/UCNG0bMYut0wL3C9BS5ffQXw" target="_blank" aria-label="youtube">
                              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="svg-icon svg-icon-youtube-logo">
                                 <path fillRule="evenodd" clipRule="evenodd" d="M22.5401 6.67C22.2881 5.71873 21.5491 4.97331 20.6001 4.713C18.8801 4.25 12.0001 4.25 12.0001 4.25C12.0001 4.25 5.12009 4.25 3.40009 4.713C2.45106 4.97331 1.71211 5.71873 1.46009 6.67C1.14277 8.42869 0.988785 10.213 1.00009 12C0.988785 13.787 1.14277 15.5713 1.46009 17.33C1.71301 18.2825 2.45414 19.0282 3.40509 19.287C5.12009 19.75 12.0051 19.75 12.0051 19.75C12.0051 19.75 18.8851 19.75 20.6001 19.287C21.5491 19.0267 22.2881 18.2813 22.5401 17.33C22.8574 15.5713 23.0114 13.787 23.0001 12C23.0114 10.213 22.8574 8.42869 22.5401 6.67ZM9.75009 15.27V8.729L15.5001 12L9.75009 15.27Z" fill="currentColor"></path>
                              </svg>
                           </a>
                        </div>
                        <ul className="member-footer-links">
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="/browse/audio-description"><span className="member-footer-link-content">Audio Description</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/"><span className="member-footer-link-content">Help Center</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="/redeem"><span className="member-footer-link-content">Gift Cards</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://media.netflix.com/"><span className="member-footer-link-content">Media Center</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="http://ir.netflix.com/"><span className="member-footer-link-content">Investor Relations</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://jobs.netflix.com/"><span className="member-footer-link-content">Jobs</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/termsofuse"><span className="member-footer-link-content">Terms of Use</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/privacy"><span className="member-footer-link-content">Privacy</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/notices"><span className="member-footer-link-content">Legal Notices</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="/Cookies"><span className="member-footer-link-content">Cookie Preferences</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/legal/corpinfo"><span className="member-footer-link-content">Corporate Information</span></a></li>
                           <li className="member-footer-link-wrapper"><a className="member-footer-link" href="https://help.netflix.com/contactus"><span className="member-footer-link-content">Contact Us</span></a></li>
                        </ul>
                        <div className="member-footer-service"><button className="service-code">Service Code</button></div>
                        <div className="member-footer-copyright">
                           <span>
                              © 1997-2022 Netflix, Inc.&lrm;
                           </span>
                        </div>
                     </div>
                     <div className="image-preloaders"><span className="jawbone-images"></span></div>
                  </div>
                  <div className="visually-hidden screenReaderMessage" role="alert" aria-live="assertive"><span></span></div>
               </div>
               <div className="visually-hidden" style={{ display: "none" }}>
                  <div id="standaloneAudioDescriptionAvailable">Audio Description available</div>
                  <div id="episodesAudioDescriptionAvailable">Audio Description is available for some episodes</div>
                  <div id="playWithAudioDescription">start with Audio Description turned on</div>
               </div>
            </div>
         </div>
      </div>
    </div>
  );
};
