import React, {Component} from 'react';


class CourseSales extends Component {
  constructor(props) {
    super(props);

    this.state = {
      total: 0,
    }
    this.sumPrice = this.sumPrice.bind(this);
  }

  sumPrice(price) {
    this.setState({
      total: this.state.total + price
    })
  }

  render() {
    console.log(this.props.items)

    let courses = this.props.items.map((item, index) => {
      return <Course name={item.name} price={item.price} key={index} sumPrice={this.sumPrice} active={item.active}
      />
    });


    return (

      <div>
      <h1>you can buy courses</h1>
        course page

        <div id="courses">
          {courses}
          <p id="total">Total: <b>{this.state.total}</b></p>
        </div>


      </div>
    )
  }
}




class Course extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: false
    };
    this.clicker = this.clicker.bind(this)
  }


  clicker() {
    let active = !this.state.active
    this.setState({
      active: active
    })
    // use active and ternary to either add or subtract price if true or false
    // one click add, two click subtract
    this.props.sumPrice(this.state.active ? -this.props.price : this.props.price)
  }


  render() {
    return (
      <div>
          <p className={this.state.active ? 'active' : ''} onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}

export default CourseSales;
