import React, { ReactNode, Component, ErrorInfo } from 'react';

type Props = { children: React.ReactNode };
type State = { hasError: boolean };

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.log('ErrorBoundary', error, errorInfo.componentStack);
  }

  render(): ReactNode {
    return this.props.children;
  }
}

export { ErrorBoundary };
