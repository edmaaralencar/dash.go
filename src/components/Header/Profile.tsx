import { Avatar, Box, Flex, Text } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

const Profile = ({ showProfileData = true }: ProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Edmar Alencar</Text>
          <Text color="gray.300" fontSize="small">
            edmaaralencar1@gmail.com
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Edmar Alencar" />
    </Flex>
  )
}

export default Profile
