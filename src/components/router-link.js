import { customElement, LitElement, html, css, property } from 'lit-element'
import { router } from '../store/routes'

@customElement('router-link')
export class RouterLink extends LitElement {
  @property({ type: String })
  href;

  static get styles () {
    return css`
      span {
        cursor: pointer;
        text-decoration: underline;
      }
    `
  }

  onClick () {
    router.goto(this.href)
  }

  render () {
    return html`
      <span @click="${this.onClick}">
        <slot></slot>
      </span>
    `
  }
}
