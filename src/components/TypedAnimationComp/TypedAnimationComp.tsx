import React from 'react';
import Typed from 'typed.js';

export interface TypedAnimationProp {
  strings: string[];
  id?: string;
  className?: string;
}

class TypedAnimationComp extends React.Component<TypedAnimationProp> {
  private typed!: Typed;

  constructor(props: TypedAnimationProp) {
    super(props);
  }

  componentDidMount() {
    const { strings } = this.props;
    const options = {
    	strings,
      typeSpeed: 50,
      backSpeed: 50,
      smartBackspace: true,
      loop: true
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
