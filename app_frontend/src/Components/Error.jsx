import React, { Component } from 'react';
import '../../public/css/errorStyle.css';
export default class ErrorPage extends Component{
render = () =>{
    return(
          <body>
              <div id="container">
                  <div class="content">
                      <h2>404</h2>
                      <h4>ops! Page not found</h4>
                      <p>The page you were looking for doesn't exist.</p>
                      <a href="#">Back to Home</a>
                  </div>
              </div>
          </body>
    )
};
}