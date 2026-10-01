import { Component } from 'react'

class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error }
  }

  componentDidCatch(error, info) {
    console.error('Caught by ErrorBoundary:', error, info.componentStack)
  }

  render() {
    if (this.state.error) {
      return (
        <div className="mx-auto max-w-2xl px-6 py-24 text-center">
          <p className="font-mono text-sm text-red-400">Something crashed</p>
          <pre className="mt-4 overflow-x-auto rounded-lg border border-border bg-surface p-4 text-left text-xs text-muted">
            {String(this.state.error?.stack || this.state.error)}
          </pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary