import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './history';

export default class Home extends Component {
  constructor() {
		super();
		this.state = {
			pdfs: [
				{
          id: 0,
          name: 'State of Hawaii Guide.pdf',
          link: "https://drive.google.com/file/d/1cnR32uc3TQePvVJbmL6gdYEW0HVo4fx0/view?usp=sharing"
        },
        {
          id: 1,
          name: 'State of Hawaii Guide1.pdf',
          link: "https://drive.google.com/file/d/1cnR32uc3TQePvVJbmL6gdYEW0HVo4fx0/view?usp=sharing"
				}
			]
		};
  }
  
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>Take a look at pdfs loaded below</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push(
              {
                pathname: '/viewer',
                state: {
                  id: this.state.pdfs[0].id,
                  name: this.state.pdfs[0].name,
                  link: this.state.pdfs[0].link
                }
              })}>{ this.state.pdfs[0].name }</Button>
          </form>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push(
              {
                pathname: '/viewer',
                state: {
                  id: this.state.pdfs[1].id,
                  name: this.state.pdfs[1].name,
                  link: this.state.pdfs[1].link
                }
              })}>{ this.state.pdfs[1].name }</Button>
          </form>
        </div>
      </div>
    );
  }
}