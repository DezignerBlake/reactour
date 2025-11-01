import { defaultFiles } from './defaults'

const AppJs = `import { TourProvider } from '@dezignerblake/tour'
import { steps } from './steps.js'
import Main from './Main.js'
	
export default function App () {
  return (
    <TourProvider steps={steps} startAt={2}>
      <Main />
    </TourProvider>
  )
}
`

export const startAtFiles = {
  ...defaultFiles,
  '/App.js': {
    code: AppJs,
  },
}
