import { Button, Text, HStack } from '@chakra-ui/react'
import type { ReactNode } from 'react'

interface MenuButtonProps {
  icon: ReactNode
  label: string
}

export function MenuButton({ icon, label, ...rest }: MenuButtonProps) {
  return (
    <Button
      variant="ghost"
      size="md"
      px={4}
      py={2}
      _hover={{ bg: 'gray.100' }}
      _active={{ bg: 'gray.200' }}
      {...rest}
    >
      <HStack gap={2}>
        {icon}
        <Text>{label}</Text>
      </HStack>
    </Button>
  )
}
