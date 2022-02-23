import { Flex, Icon, IconButton, useBreakpointValue } from '@chakra-ui/react'
import { useSidebarDrawer } from 'context/SidebarDrawerContext'
import { RiMenuLine } from 'react-icons/ri'
import Logo from './Logo'
import NotificationsNav from './NotificationsNav'
import Profile from './Profile'
import SearchBox from './SearchBox'

const Header = () => {
  const { onOpen } = useSidebarDrawer()

  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isDesktopVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={onOpen}
          mr="2"
          display="flex"
          align="flex-end"
          justify="flex-start"
        ></IconButton>
      )}

      <Logo />

      {isDesktopVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationsNav />
        <Profile showProfileData={isDesktopVersion} />
      </Flex>
    </Flex>
  )
}

export default Header
