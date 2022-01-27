import Vue, { VNode } from 'vue'

declare global {
  namespace JSX {
    // tslint:disable no-empty-dep
    interface Element extends VNode {}
    // tslint:disable no-empty-dep
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
