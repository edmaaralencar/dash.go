import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Checkbox,
  Tbody,
  Td,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import Header from 'components/Header'
import Pagination from 'components/Pagination'
import Sidebar from 'components/Sidebar'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'

const UserList = () => {
  const isDesktopVersion = useBreakpointValue({
    base: false,
    lg: true
  })

  return (
    <Box>
      <Header />

      <Flex width="100%" my="6" maxWidth={1480} mx="auto" px={['4', '6']}>
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Usuários
            </Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>

          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={['4', '4', '6']} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuário</Th>
                {isDesktopVersion && <Th>Data de cadastro</Th>}
                {isDesktopVersion && <Th width="8"></Th>}
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px={['4', '4', '6']}>
                  <Checkbox colorScheme="pink" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Edmar Alencar</Text>
                    <Text fontSize="sm" color="gray.300">
                      edmaaralencar1@gmail.com
                    </Text>
                  </Box>
                </Td>
                {isDesktopVersion && <Td>04 de Abril, 2021</Td>}
                {isDesktopVersion && (
                  <Td>
                    <Button
                      as="a"
                      size="sm"
                      fontSize="sm"
                      colorScheme="purple"
                      leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                    >
                      Editar
                    </Button>
                  </Td>
                )}
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  )
}

export default UserList