import "./Moon.css";
export default function Moon() {

    return (  
      <>
          <div className="container">
              <div className="wrap">
                  <div className="moon">
                      <div className="moon-shadow"></div>
                  </div>
                  <div className="mountains">
                      <div></div>
                  </div>
                  <div className="stars">
                      <div></div>
                      <div></div>
                      <div></div>
                  </div>
                  <div className="stars"><span></span><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
                  <div className="windmill">
                      <div className="item">
                          <div className="item-top">
                              <div></div>
                              <div></div>
                          </div>
                          <div className="item-bottom">
                              <div></div>
                              <div></div>
                          </div>
                      </div>
                  </div>
                  <div className="wrap-footer"></div>
              </div>
          </div>
        </>
    );
}