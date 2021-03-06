import { getChildViews, showError } from '../helpers'
import type { View } from '@nativescript/core'
import type { IsChecked } from '../models/is-checked'

// In addition to native types bar, picker, view, layout, list and text
const types = {
  form: [
    'Button',
    'DatePicker',
    'ListPicker',
    'Placeholder',
    'Switch',
    'TextField',
    'TextView',
    'TimePicker',
    'RadCalendar',
    'RadAutoCompleteTextView',
    'RadDataForm'
  ],
  field: [
    'SearchBar',
    'TextField',
    'TextView'
  ],
  tab: [
    'BottomNavigation',
    'Tabs',
    'TabView'
  ]
}

/** @internal */
export function getViewsByTypes (...typeNames: string[]): View[] {
  const parentView: View = this
  const isChecked: IsChecked = function (typeNames: string[]) {
    let checked = false

    try {
      const view: View = this
      const typeName = view.typeName || ''
      const lowerTypeName = typeName.toLowerCase()

      checked = typeNames.some(name => {
        const lowerName = name.toLowerCase()
        const typeGroup = types[lowerName] as string[] || []
        const typeList = typeGroup.join('|') || 'empty'
        const regex = new RegExp(typeList, 'i')

        return regex.test(lowerTypeName) || lowerTypeName.includes(name)
      })
    } catch (error) {
      showError(error, 'getViewsByTypes')
    }

    return checked
  }

  return getChildViews.call(parentView, typeNames, isChecked)
}
