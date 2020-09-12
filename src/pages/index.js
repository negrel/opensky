import { customElement, LitElement, html } from 'lit-element'

import '../components/router-link'

@customElement('index-page')
export class IndexPage extends LitElement {
  render () {
    return html`
      <h1>Home</h1>
      <router-link href="/about">About</router-link>
    `
  }
}
