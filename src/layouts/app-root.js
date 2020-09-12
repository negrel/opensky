import { customElement, LitElement, html } from 'lit-element'
import 'lit-redux-router'

// Pages
import '../pages/index'
import '../pages/about'

@customElement('app-root')
export class AppRoot extends LitElement {
  render () {
    return html`
      <main>
        <lit-route path="/" active><index-page></index-page></lit-route>
        <lit-route path="/about"><about-page></index-page></lit-route>
      </main>
    `
  }
}
