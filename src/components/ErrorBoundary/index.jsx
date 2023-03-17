import React, { Component } from "react";
import {Div} from './style'

export default class ErrorBoundary extends Component {
  state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return <Div>Something went wrong</Div>;
    }

    return this.props.children;
  }
}
