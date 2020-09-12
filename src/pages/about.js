import { customElement, LitElement, html } from 'lit-element'

import '../components/router-link'

@customElement('about-page')
export class AboutPage extends LitElement {
  render () {
    return html`
      <h1>About</h1>
      <router-link href="/">Home</router-link>
    `
  }
}
