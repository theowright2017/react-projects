import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Three extends Component {
  render() {

    return (
      <div>
        <p >hello three</p>

        <ul>
        <li>
          <Link to="/three/123">Three</Link>
        </li>

        </ul>

      </div>
    )
  }
}

export default Three;
