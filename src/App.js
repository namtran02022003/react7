import './App.css';
function App () {
    return (
        <div className="app">
        <div className="menu-40">
          <img src="https://www.w3schools.com/w3images/profile_girl.jpg" width="100%" />
        </div>
        <div className="menu-60">
          <div className="content-60">
            <div className="icon-menu-top">
              <i style={{fontSize: '48px'}} className="fa icon fa-bars" />
            </div>
            <div className="div-center">
              <h1 style={{fontSize: '64px', marginTop: '100px'}}>Jane Doe</h1>
              <p>Photographer and Web Designer</p>
              <button className="button-top">
                <i className="fa fa-download" /> Download Resume
              </button>
            </div>
            <div className="list-image div-color">
              <h2>My Portfolio</h2>
              <hr />
              <div style={{marginRight: '15px'}} className="menu-image-float">
                <img src="https://www.w3schools.com/w3images/wedding.jpg" width="100%" />
                <img src="https://www.w3schools.com/w3images/rocks.jpg" width="100%" />
                <img src="https://www.w3schools.com/w3images/sailboat.jpg" width="100%" />
              </div>
              <div className="menu-image-float">
                <img src="https://www.w3schools.com/w3images/underwater.jpg" width="100%" />
                <img src="https://www.w3schools.com/w3images/chef.jpg" width="100%" />
                <img src="https://www.w3schools.com/w3images/wedding.jpg" width="100%" />
                <img src="https://www.w3schools.com/w3images/p6.jpg" width="100%" />
              </div>
            </div>
            <div className="div-color">
              <h2>About</h2>
              <hr />
              <p>Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                commodo consequat.</p>
              <h2>My Skills</h2>
              <label>Photography</label>
              <div className="div-big">
                <div className="div-small">
                  95%
                </div>
              </div>
              <label>Web Design
              </label>
              <div className="div-big">
                <div style={{width: '85%'}} className="div-small">
                  85%
                </div>
              </div>
              <label>Photoshop</label>
              <div className="div-big">
                <div style={{width: '80%'}} className="div-small">
                  80%
                </div>
              </div>
              <div className="div-flex">
                <div className="menu-flex">
                  <h2 style={{margin: 0}}>14+</h2>
                  <p style={{margin: 0}}>Partners</p>
                </div>
                <div className="menu-flex">
                  <h2 style={{margin: 0}}>55+</h2>
                  <p style={{margin: 0}}>Projects Done</p>
                </div>
                <div className="menu-flex">
                  <h2 style={{margin: 0}}>89+</h2>
                  <p style={{margin: 0}}>Happy Clients</p>
                </div>
                <div className="menu-flex">
                  <h2 style={{margin: 0}}>150+</h2>
                  <p style={{margin: 0}}>Meetings</p>
                </div>
              </div>
              <button style={{marginTop: '20px'}} className="button-top">
                <i className="fa fa-download" /> Download Resume
              </button>
            </div>
            <div className="image-radius">
              <h2 className="div-color">My Reputation</h2>
              <div className="image-radius-small">
                <div style={{marginRight: '10px'}} className="image-small">
                  <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{borderRadius: '60px', width: '80px'}} />
                </div>
                <div className="image-small">
                  <p style={{margin: '5px 0 0 0'}}>Chandler Bing.<span style={{marginLeft: '10px'}} className="div-color"> Web Designer.</span></p>
                  <p className="div-color">Jane Doe is just awesome. I am so happy to have met her!</p>
                </div>
              </div>
              <div className="image-radius-small">
                <div style={{marginRight: '10px'}} className="image-small">
                  <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{borderRadius: '60px', width: '80px'}} />
                </div>
                <div className="image-small">
                  <p style={{margin: '5px 0 0 0'}}>Chandler Bing.<span style={{marginLeft: '10px'}} className="div-color"> Web Designer.</span></p>
                  <p className="div-color">Jane Doe is just awesome. I am so happy to have met her!</p>
                </div>
              </div>
              <div className="image-radius-small">
                <div style={{marginRight: '10px'}} className="image-small">
                  <img src="https://www.w3schools.com/w3images/avatar_smoke.jpg" style={{borderRadius: '60px', width: '80px'}} />
                </div>
                <div className="image-small">
                  <p style={{margin: '5px 0 0 0'}}>Chandler Bing.<span style={{marginLeft: '10px'}} className="div-color"> Web Designer.</span></p>
                  <p className="div-color">Jane Doe is just awesome. I am so happy to have met her!</p>
                </div>
              </div>
            </div>
            <h2 className="div-color">My Price</h2>
          </div>
          <div className="content-menu2">
            <div className="menu-content2">
              <div className="div-border">
                <h1 style={{margin: 0}} className="h1-style">basic</h1>
                <p>Web Design</p>
                <hr />
                <p>Photography</p>
                <hr />
                <p>5GB Storage</p>
                <hr />
                <p>Mail Support</p>
                <hr />
                <p>
                </p><h2>$ 10</h2>
                per month
                <p />
                <hr />
                <p>
                  <button className="button2-list">
                    sign up
                  </button>
                </p>
              </div>
            </div>
            <div className="menu-content2">
              <div className="div-border">
                <h1 style={{margin: 0}} className="h1-style">bro</h1>
                <p>Web Design</p>
                <hr />
                <p>Photography</p>
                <hr />
                <p>5GB Storage</p>
                <hr />
                <p>Mail Support</p>
                <hr />
                <p>
                </p><h2>$ 10</h2>
                per month
                <p />
                <hr />
                <p>
                  <button className="button2-list">
                    sign up
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className="content-60">
            <h1 style={{marginTop: '90px'}} className="div-color">Contact Me</h1>
            <hr />
            <div className="list-icon-text div-color">
              <p><i style={{fontSize: '48px', marginRight: '10px', textAlign: 'center'}} className="fa h fa-map-marker " />Chicago, US</p>
              <p><i style={{fontSize: '48px', marginRight: '10px', textAlign: 'center'}} className="fa h fa-phone " /> Phone: +00 151515</p>
              <p><i style={{fontSize: '48px', marginRight: '10px', textAlign: 'center'}} className="fa h fa-envelope " />Email: mail@mail.com</p>
            </div>
            <img src="https://www.w3schools.com/w3images/map.jpg" style={{width: '100%'}} />
            <p>Lets get in touch. Send me a message:</p>
            <input className="input-footer" placeholder="name" />
            <input className="input-footer" placeholder="email" />
            <input className="input-footer" placeholder="subject" />
            <input className="input-footer" placeholder="message" />
            <button style={{marginTop: '20px'}} className="button-top">
              <i className="fa fa-paper-plane" /> Download Resume
            </button>
          </div>
          <div className="footer">
            <i className="fa fa-facebook-official w3-hover-opacity" />
            <i className="fa fa-instagram w3-hover-opacity" />
            <i className="fa fa-snapchat w3-hover-opacity" />
            <i className="fa fa-pinterest-p w3-hover-opacity" />
            <i className="fa fa-twitter w3-hover-opacity" />
            <i className="fa fa-linkedin w3-hover-opacity" />
            <p>Powered by w3.css</p>
          </div>
        </div>
      </div>
    )
};
export default App;