import { getChildViews, showError } from '../helpers'
import type { View } from '@nativescript/core'
import type { ValPair, IsChecked } from '../models'

/** @internal */
export function getViewsByValPairs (...valPairs: ValPair[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (valPairs: ValPair[]) {
    let checked = false

    try {
      const view: View = this

      checked = valPairs.some(({ name, value }) => {
        const currValue = String(view[name])

        return currValue.includes(value)
      })
    } catch (error) {
      showError(error, 'getViewsByValPairs')
    }

    return checked
  }

  return getChildViews.call(parentView, valPairs, isChecked)
}
