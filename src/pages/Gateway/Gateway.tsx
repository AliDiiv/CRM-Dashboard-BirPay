import {
    Box, Flex, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, useColorModeValue,
    HStack,Text
} from '@chakra-ui/react'
import GatewayHeader from '../../components/Payment gateway/GatewayHeader'
import GatewayStatsCards from '../../components/Payment gateway/GatewayStatsCards'
import ChartSection from '../../components/Dashboard/ChartSection'
import TransactionTableFilters from '../../components/Payment gateway/TransactionTableFilters'
import TransactionTable from '../../components/Payment gateway/TransactionTable'
import Header from '../../components/Dashboard/DashboardHeader'
import Sidebar from '../../components/Dashboard/SidebarMenu'
import { FaHeart } from 'react-icons/fa'

export default function Gateway() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const bg = useColorModeValue('#EFF2F5', '#092030')
    const bgDrawer = useColorModeValue('white', '#021726')

    return (
        <Flex flex="1" overflow="hidden" direction="column" h="100vh" bg={bg}>
            {/* Header */}
            <Header onOpenSidebar={onOpen} />

            {/* Main content + sidebar */}
            <Flex flex="1" overflow="hidden" direction="row-reverse">
                <Box flex="1" overflowY="auto" p={4}>
                    {/* Content*/}
                    <GatewayHeader />
                    <GatewayStatsCards />
                    <ChartSection />
                    <TransactionTableFilters />
                    <TransactionTable />
                </Box>

                {/* sidebar */}
                <Box display={{ base: 'none', md: 'block' }}>
                    <Sidebar />
                </Box>
            </Flex>

            {/* Drawer mobile*/}
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
                <DrawerOverlay />
                <DrawerContent bg={bgDrawer}>
                    <DrawerCloseButton />
                    <Box p={4} pt={10}>
                        <Sidebar />
                    </Box>
                </DrawerContent>
            </Drawer>
            <HStack spacing={2} justify="center">
                <Text>۱۴۰۴</Text>
                <FaHeart color="red" />
                <Text>بیر پی</Text>
            </HStack>
        </Flex>
    )
}
