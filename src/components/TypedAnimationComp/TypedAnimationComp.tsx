import React from 'react';
import Typed from 'typed.js';

export interface TypedAnimationProp {
  strings: string[];
  typeSpeed: number;
  backSpeed: number;
  smartBackspace: boolean;
  loop: boolean;
  id?: string;
  className?: string;
}

class TypedAnimationComp extends React.Component<TypedAnimationProp> {
  static defaultProps = {
    typeSpeed: 70,
    backSpeed: 70,
    smartBackspace: true,
    loop: true
  };

  private typed!: Typed;

  componentDidMount() {
    const { strings, typeSpeed, backSpeed, smartBackspace, loop } = this.props;
    const options = {
    	strings,
      typeSpeed,
      backSpeed,
      smartBackspace,
      loop
    };
    this.typed = new Typed('.typed-animation', options);
  }

  componentWillUnmount() {
    this.typed.destroy();
  }

  render() {
    const { id, className } = this.props;
    return (
      <span id={id} className={`typed-animation ${className}`} />
    );
  }
}

export default TypedAnimationComp;
