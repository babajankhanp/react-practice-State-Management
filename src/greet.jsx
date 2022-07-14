import React from 'react';

class Greet extends React.Component {
  constructor() {
    super();
    this.state = {
      message: 'Welcome',
    };
  }

  handleClick = () => {
    this.setState({ message: 'Thank You' });
  };
  render() {
    return (
      <div>
        <div>
          <h1>Wanna Learn React!</h1>
          {this.state.message}
        </div>
        <button onClick={this.handleClick} className="btn">
          Hit Me Hard
        </button>
      </div>
    );
  }
}
export default Greet;
