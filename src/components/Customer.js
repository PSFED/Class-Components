import { Component } from 'react/cjs/react.production.min'
import styles from './Customer.module.css'

class Customer extends Component {
  componentWillUnmount() {
    console.log('User will be deleted')
  }

  render() {
    return <li className={styles.customer}>{this.props.name}</li>
  }
}

// const Customer = (props) => {
//   return <li className={styles.customer}>{props.name}</li>;
// };

export default Customer
