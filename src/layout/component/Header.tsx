import { Avatar } from '@fluentui/react-components'
import { MouseEventHandler, useState } from 'react'
import { WeatherMoon24Regular, WeatherSunny24Regular, Settings24Regular } from '@fluentui/react-icons'
import {
  Dialog,
  DialogTrigger,
  DialogSurface,
  DialogTitle,
  DialogBody,
  DialogActions,
  DialogContent,
  Button,
} from '@fluentui/react-components'
import Setting from '@pages/config'

export default function Header(props: {
  toggleTheme: MouseEventHandler<HTMLButtonElement> | undefined
  isDarkMode: boolean
}) {
  const [showDialog, setShowDialog] = useState(false)

  const handleHideDialog = () => setShowDialog(false)
  const openDialog = () => setShowDialog(true)
  const toCancel = () => handleHideDialog()

  return (
    <>
      <div>
        <div className="header flex h-full flex-col items-center justify-between p-5 text-lg">
          <Avatar
            aria-label="Guest"
            image={{
              src: 'https://fabricweb.azureedge.net/fabric-website/assets/images/avatar/KatriAthokas.jpg',
            }}
            {...props}
          />
          <div className="mr-2 cursor-pointer" onClick={openDialog}>
            <Settings24Regular />
          </div>

          <Dialog open={showDialog} onOpenChange={handleHideDialog}>
            <DialogSurface>
              <DialogContent>
                <Setting toCancel={toCancel} />
              </DialogContent>
            </DialogSurface>
          </Dialog>
          {/* <div>
            <span onClick={props.toggleTheme} className="cursor-pointer">
              {props.isDarkMode ? <WeatherSunny24Regular /> : <WeatherMoon24Regular />}
            </span>
          </div> */}
        </div>
      </div>
    </>
  )
}
