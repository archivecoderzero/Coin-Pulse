import React from 'react';
import classnames from 'classnames';

import './styles.scss';

class Card extends React.Component {
  
  render() {
    let {
      className
    } = this.props;
    return (
      <div className={classnames(className, "card")}>
	      {this.props.children}
      </div>
    );
  }
}

export default Card;
