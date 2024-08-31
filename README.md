Un titre
Une suite de card en mode carrousel
une ligne horizontale
Mes projets persos
Une suite de card en mode carrousel avec modal qui floutte le bacjground quand tu cliques



Autre pasge : ABOUT :
Petite présentation dans une card avec une photo de moi 

function BackdropExample() {
const OverlayOne = () => (
<ModalOverlay
bg='blackAlpha.300'
backdropFilter='blur(10px) hue-rotate(90deg)'
/>
)

const OverlayTwo = () => (
<ModalOverlay
bg='none'
backdropFilter='auto'
backdropInvert='80%'
backdropBlur='2px'
/>
)

const { isOpen, onOpen, onClose } = useDisclosure()
const [overlay, setOverlay] = React.useState(<OverlayOne />)

return (
<>
<Button
onClick={() => {
setOverlay(<OverlayOne />)
onOpen()
}}
>
Use Overlay one
</Button>
<Button
ml='4'
onClick={() => {
setOverlay(<OverlayTwo />)
onOpen()
}}
>
Use Overlay two
</Button>
<Modal isCentered isOpen={isOpen} onClose={onClose}>
{overlay}
<ModalContent>
<ModalHeader>Modal Title</ModalHeader>
<ModalCloseButton />
<ModalBody>
<Text>Custom backdrop filters!</Text>
</ModalBody>
<ModalFooter>
<Button onClick={onClose}>Close</Button>
</ModalFooter>
</ModalContent>
</Modal>
</>
)
}