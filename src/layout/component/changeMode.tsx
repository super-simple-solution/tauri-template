import { Button } from '@chakra-ui/react'
import { useColorMode } from '@chakra-ui/color-mode'

function changeMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <Button variant="primary" className="bg-gradient" onClick={toggleColorMode}>
      Toggle {colorMode === 'light' ? 'Dark' : 'Light'}
    </Button>
  )
}

export default changeMode
