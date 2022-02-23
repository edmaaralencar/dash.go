import React from 'react'
import NavLink from './NavLink'
import NavSection from './NavSection'
import {
  RiContactsLine,
  RiDashboardLine,
  RiInputMethodLine,
  RiGitMergeLine
} from 'react-icons/ri'
import { Stack } from '@chakra-ui/react'

const SidebarNav = () => {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="GERAL">
        <NavLink href="/dashboard" icon={RiDashboardLine}>
          Dashboard
        </NavLink>
        <NavLink href="/users" icon={RiContactsLine}>
          Usuários
        </NavLink>
      </NavSection>

      <NavSection title="AUTOMAÇÃO">
        <NavLink href="/forms" icon={RiInputMethodLine}>
          Formulários
        </NavLink>
        <NavLink href="/automation" icon={RiGitMergeLine}>
          Automação
        </NavLink>
      </NavSection>
    </Stack>
  )
}

export default SidebarNav
