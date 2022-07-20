/**
 * MIT License
 *
 * Copyright (c) 2022 Brion Mario
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */

import { useAuthContext } from "@asgardeo/auth-react";
import { Loader } from "../components";
import { Fragment, useEffect, useState } from "react";

export const HomePage = () => {

  const { state, signIn, signOut, getDecodedIDToken } = useAuthContext();

  const [ salutation, setSalutation ] = useState("There");

  useEffect(() => {
    if (!state?.isAuthenticated) {
      return;
    }

    (async () => {
      const idToken = await getDecodedIDToken();

      if (idToken.given_name || idToken.family_name) {
        setSalutation(`${ idToken.given_name } ${ idToken.family_name }`);

        return;
      }

      setSalutation(idToken.sub);
    })();
  }, [ getDecodedIDToken, state?.isAuthenticated ]);

  if (state.isLoading) {
    return <Loader />;
  }
  
  return (
    <Fragment>
      <header>
        <nav>
          <div className="logo">
            <img src="images/drogo-nft-logo.svg" alt="logo" />
          </div>
          <div className="nav">
            <ul>
              <a href="">
                <li>Features</li>
              </a>
              <a href="">
                <li>About</li>
              </a>
              <a href="">
                <li>Launch</li>
              </a>
              {
                state.isAuthenticated
                  ? (
                    <a onClick={ () => signOut() }>
                      <li>Sign Out</li>
                    </a>
                  )
                  : (
                    <Fragment>
                      <a onClick={ () => signIn() }>
                        <li>Sign In</li>
                      </a>
                      <a onClick={ () => window.open(process.env.REACT_APP_ASGARDEO_DROGO_ORG_SELF_SIGN_UP_URL, "_blank", "noopener") }>
                        <li>Sign Up</li>
                      </a>
                    </Fragment>
                  )
              }
            </ul>
          </div>
        </nav>
      </header>

      <main>
        <section className="initial_wrapper">
          <div className="title_wrapper">
            {
              state.isAuthenticated && (
                <p id="uptitle">👋 <span>Hi</span> { salutation }</p>
              )
            }
            <h1>NFT Marketplace like no other</h1>
            <p id="subtitle">
              Don't miss out on the new releases. Sign up to receive updates on latest updates.
            </p>
            <button><img src="images/initial-wrapper/cta.svg" alt="" /></button>
          </div>
          <div className="title_img_wrapper">
            <img src="images/initial-wrapper/hero.png" alt="" />
          </div>
        </section>

        <section className="second_wrapper">
          <div className="second_generic_wrapper">
            <div className="second_left_wrapper">
              <img src="images/second-wrapper/drogo-online.svg" alt="" />
              <h2>Free NFT for early birds</h2>
              <p>Sign up today and you'll get a free NFT.</p>
            </div>
            <div className="second_right_wrapper">
              <img src="images/second-wrapper/nftcard.png" alt="" />
            </div>
          </div>
        </section>

        <section className="third_wrapper">
          <a href=""><img src="images/third-wrapper/1.png" alt="" /></a>
          <a href=""><img src="images/third-wrapper/2.png" alt="" /></a>
          <a href=""><img src="images/third-wrapper/3.png" alt="" /></a>
          <a href=""><img src="images/third-wrapper/4.png" alt="" /></a>
          <a href=""><img src="images/third-wrapper/5.png" alt="" /></a>
        </section>

        <section className="fourth_wrapper">
          <h2>LE Super Rare Auction</h2>
          <p>We have released four limited edition NFTs early. Bid Now!</p>
          <div className="fourth_generic_wrapper">
            <img src="images/fourth-wrapper/1.png" alt="" />
            <img src="images/fourth-wrapper/2.png" alt="" />
            <img src="images/fourth-wrapper/3.png" alt="" />
            <img src="images/fourth-wrapper/4.png" alt="" />
          </div>
        </section>

        <section className="fifth_wrapper">
          <div className="fifth_generic_wrapper">
            <div className="fifth_left_wrapper">
              <h2>New Releases</h2>
              <p>
                  We have released four limited edition NFTs early.
                  .<br/><br/>
                  These will be the only four of these NFTs we ever make, so be sure not to miss out!
                <br/><br/>50% of proceeds go to charity.
              </p>
              <button>Check them out &#8594</button>
            </div>
            <div className="fifth_right_wrapper">
              <img src="images/fifth-wrapper/nft01.png" alt="" />
              <div>
                <p className="id">GLOOP SERIES</p>
                <p className="name">Red Man</p>
                <p className="number">#12983</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sixth_wrapper">
          <div className="sixth_generic_wrapper">
            <div className="sixth_left_wrapper">
              <img src="images/sixth_wrapper/card.png" alt="" />
            </div>
            <div className="sixth_right_wrapper">
              <h2>Most Popular</h2>
              <p>
                These are the most popular NFTs that are getting sold as hotcakes.
                Hurry now, do not to miss out!
              </p>
              <button>Check them out &#8594</button>
            </div>
          </div>
        </section>

        <section className="seventh_wrapper">
          <div>
            <img src="images/seventh-wrapper/icon-1.png" alt="nft-logo" />
            <h2>NFTs like no other</h2>
            <p>
                Don’t miss out on the release of our new NFT. Sign up below to receive updates.
              <br/><br/>
              These NFTs will be released in limited quantities. These are ideal for collectors.
              So hurry now!.
            </p>
          </div>
          <div>
            <img src="images/seventh-wrapper/icon.png" alt="nft-logo" />
            <h2>Most Popular NFT Marketplace</h2>
            <p>
                We have been recognized as the most popular NFT marketplace by the Etherium community.
              <br/><br/>
              Don’t miss out on the release of our new NFT. Sign up below to receive updates when we go live on
              18/9.Don’t miss out on the release of our new NFT. </p>
          </div>
        </section>

        <section className="eighth_wrapper">
          <div className="title_wrapper">
            <h1>Subscribe to our news letter</h1>
            <p id="subtitle">
              Stay upto date with what's happening in the world of NFT by subscribing to our weekly
              newsletter. Do not worry, we won't spam!
            </p>
            <button><img src="images/initial-wrapper/cta.svg" alt="" /></button>
          </div>

        </section>

        <footer>
          <section className="footer_generic_wrapper">
            <div className="footer_left_wrapper">
              <img src="images/drogo-nft-logo.svg" alt="" />
              <p>One Stop Shop | NFT Marketplace</p>
              <div className="social_media">
                <img src="images/footer/facebook.svg" alt="facebook logo" />
                <img src="images/footer/twitter.svg" alt="twitter logo" />
                <img src="images/footer/instagram.svg" alt="instagram logo" />
              </div>
            </div>

            <div className="footer_right_wrapper">
              <div>
                <h3>ABOUT</h3>
                <p>About</p>
                <p>Terms</p>
                <p>Legal</p>
              </div>
              <div>
                <h3>NFT</h3>
                <p>OpenSea</p>
                <p>Maker</p>
                <p>Learn</p>
              </div>
              <div>
                <h3>CONTACT</h3>
                <p>Press</p>
                <p>Support</p>
              </div>
              <div>
                <h3>SOCIAL</h3>
                <p>Twitter</p>
                <p>Instagram</p>
              </div>
            </div>
          </section>
          <section className="footer">
            <p>© Copyright 2022 | <span><img className="drogo-logo" src="images/drogo-logo.svg" alt="dorgo" /></span>Drogo</p>
          </section>
        </footer>
      </main>
    </Fragment>
  );
};
