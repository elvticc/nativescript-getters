/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

import { EventData, Page } from '@nativescript/core'

export function navigatingTo(args: EventData) {
  const page = <Page>args.object
  const layout = page.getViewsByTypes('layout')

  console.log('layout:', layout)
}
