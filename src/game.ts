import { createChannel } from '../node_modules/decentraland-builder-scripts/channel'
import { createInventory } from '../node_modules/decentraland-builder-scripts/inventory'
import Script1 from "../6ff6b3aa-083a-4e8c-bdd8-b4d64e1f2db1/src/item"

const _scene = new Entity('_scene')
engine.addEntity(_scene)
const transform = new Transform({
  position: new Vector3(0, 0, 0),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
_scene.addComponentOrReplace(transform)

const entity = new Entity('entity')
engine.addEntity(entity)
entity.setParent(_scene)
const gltfShape = new GLTFShape("models/CV_greenGround_plain.glb")
gltfShape.withCollisions = true
gltfShape.isPointerBlocker = true
gltfShape.visible = true
entity.addComponentOrReplace(gltfShape)
const transform2 = new Transform({
  position: new Vector3(8, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity.addComponentOrReplace(transform2)

const entity2 = new Entity('entity2')
engine.addEntity(entity2)
entity2.setParent(_scene)
entity2.addComponentOrReplace(gltfShape)
const transform3 = new Transform({
  position: new Vector3(24, 0, 8),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity2.addComponentOrReplace(transform3)

const entity3 = new Entity('entity3')
engine.addEntity(entity3)
entity3.setParent(_scene)
entity3.addComponentOrReplace(gltfShape)
const transform4 = new Transform({
  position: new Vector3(8, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity3.addComponentOrReplace(transform4)

const entity4 = new Entity('entity4')
engine.addEntity(entity4)
entity4.setParent(_scene)
entity4.addComponentOrReplace(gltfShape)
const transform5 = new Transform({
  position: new Vector3(24, 0, 24),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
entity4.addComponentOrReplace(transform5)

const hexagonalFloorPanel = new Entity('hexagonalFloorPanel')
engine.addEntity(hexagonalFloorPanel)
hexagonalFloorPanel.setParent(_scene)
const transform6 = new Transform({
  position: new Vector3(16, 0, 16),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(11.877764701843262, 11.877764701843262, 11.877764701843262)
})
hexagonalFloorPanel.addComponentOrReplace(transform6)
const gltfShape2 = new GLTFShape("models/FloorHexa_01/FloorHexa_01.glb")
gltfShape2.withCollisions = true
gltfShape2.isPointerBlocker = true
gltfShape2.visible = true
hexagonalFloorPanel.addComponentOrReplace(gltfShape2)

const hexagonalFloorPanel2 = new Entity('hexagonalFloorPanel2')
engine.addEntity(hexagonalFloorPanel2)
hexagonalFloorPanel2.setParent(_scene)
hexagonalFloorPanel2.addComponentOrReplace(gltfShape2)
const transform7 = new Transform({
  position: new Vector3(16, 1.0882034301757812, 16),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(6.834220886230469, 13.668441772460938, 6.834220886230469)
})
hexagonalFloorPanel2.addComponentOrReplace(transform7)

const hexagonalFloorPanel3 = new Entity('hexagonalFloorPanel3')
engine.addEntity(hexagonalFloorPanel3)
hexagonalFloorPanel3.setParent(_scene)
hexagonalFloorPanel3.addComponentOrReplace(gltfShape2)
const transform8 = new Transform({
  position: new Vector3(16, 2.3467226028442383, 16),
  rotation: new Quaternion(0, -0.19509033858776093, 2.3256577108554666e-8, 0.9807853102684021),
  scale: new Vector3(3.807391881942749, 10.737939834594727, 3.807391881942749)
})
hexagonalFloorPanel3.addComponentOrReplace(transform8)

const kittE = new Entity('kittE')
engine.addEntity(kittE)
kittE.setParent(_scene)
const transform9 = new Transform({
  position: new Vector3(16, 3.3477659225463867, 16),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kittE.addComponentOrReplace(transform9)
const gltfShape3 = new GLTFShape("models/KITT-E.glb")
gltfShape3.withCollisions = true
gltfShape3.isPointerBlocker = true
gltfShape3.visible = true
kittE.addComponentOrReplace(gltfShape3)

const dapp = new Entity('dapp')
engine.addEntity(dapp)
dapp.setParent(_scene)
const transform10 = new Transform({
  position: new Vector3(2.5, 1.5622749328613281, 4.524371147155762),
  rotation: new Quaternion(-1.5394153601527394e-15, -0.7071068286895752, 8.429369557916289e-8, 0.7071068286895752),
  scale: new Vector3(0.2830462157726288, 0.28304576873779297, 0.2830462157726288)
})
dapp.addComponentOrReplace(transform10)
const gltfShape4 = new GLTFShape("models/DAPP3.glb")
gltfShape4.withCollisions = true
gltfShape4.isPointerBlocker = true
gltfShape4.visible = true
dapp.addComponentOrReplace(gltfShape4)

const dapp2 = new Entity('dapp2')
engine.addEntity(dapp2)
dapp2.setParent(_scene)
dapp2.addComponentOrReplace(gltfShape4)
const transform11 = new Transform({
  position: new Vector3(2.5, 2, 3),
  rotation: new Quaternion(-1.473128679282986e-15, -0.8819213509559631, 1.0513321058169822e-7, 0.4713967442512512),
  scale: new Vector3(0.37001484632492065, 0.3700145483016968, 0.37001484632492065)
})
dapp2.addComponentOrReplace(transform11)

const dapp3 = new Entity('dapp3')
engine.addEntity(dapp3)
dapp3.setParent(_scene)
dapp3.addComponentOrReplace(gltfShape4)
const transform12 = new Transform({
  position: new Vector3(6, 3.192079544067383, 4.5),
  rotation: new Quaternion(-1.612692709815301e-15, -1, 1.1920927533992653e-7, -2.9802318834981634e-8),
  scale: new Vector3(0.3700156509876251, 0.3700145483016968, 0.3700156509876251)
})
dapp3.addComponentOrReplace(transform12)

const dapp4 = new Entity('dapp4')
engine.addEntity(dapp4)
dapp4.setParent(_scene)
dapp4.addComponentOrReplace(gltfShape4)
const transform13 = new Transform({
  position: new Vector3(6.318032264709473, 1.999999761581421, 24.25185203552246),
  rotation: new Quaternion(1.0108805653514488e-15, 5.960464477539063e-8, -2.2962025584703696e-15, -1.0000001192092896),
  scale: new Vector3(0.3700166940689087, 0.3700145483016968, 0.3700166940689087)
})
dapp4.addComponentOrReplace(transform13)

const dapp5 = new Entity('dapp5')
engine.addEntity(dapp5)
dapp5.setParent(_scene)
dapp5.addComponentOrReplace(gltfShape4)
const transform14 = new Transform({
  position: new Vector3(5.070827484130859, 1.499999761581421, 25.085206985473633),
  rotation: new Quaternion(-1.459990457117243e-15, -0.290284663438797, 3.4604624943312956e-8, -0.9569404125213623),
  scale: new Vector3(0.2849719822406769, 0.28497064113616943, 0.2849719822406769)
})
dapp5.addComponentOrReplace(transform14)

const dapp6 = new Entity('dapp6')
engine.addEntity(dapp6)
dapp6.setParent(_scene)
dapp6.addComponentOrReplace(gltfShape4)
const transform15 = new Transform({
  position: new Vector3(7.4251556396484375, 1.5000001192092896, 25.917476654052734),
  rotation: new Quaternion(1.929690131644013e-15, 0.1950904130935669, -2.3256582437625184e-8, -0.9807853698730469),
  scale: new Vector3(0.2849734425544739, 0.28497064113616943, 0.2849734425544739)
})
dapp6.addComponentOrReplace(transform15)

const dapp7 = new Entity('dapp7')
engine.addEntity(dapp7)
dapp7.setParent(_scene)
dapp7.addComponentOrReplace(gltfShape4)
const transform16 = new Transform({
  position: new Vector3(25, 2, 19.5),
  rotation: new Quaternion(2.764864299999398e-16, 0.3826834559440613, -4.561942290592924e-8, 0.9238796234130859),
  scale: new Vector3(0.37001582980155945, 0.3700145483016968, 0.37001582980155945)
})
dapp7.addComponentOrReplace(transform16)

const dapp8 = new Entity('dapp8')
engine.addEntity(dapp8)
dapp8.setParent(_scene)
dapp8.addComponentOrReplace(gltfShape4)
const transform17 = new Transform({
  position: new Vector3(26.5, 2, 22.5),
  rotation: new Quaternion(1.2007343395666146e-14, -0.6343933939933777, 7.56255715828047e-8, 0.7730104327201843),
  scale: new Vector3(0.28085142374038696, 0.2580711245536804, 0.2589585483074188)
})
dapp8.addComponentOrReplace(transform17)

const dapp9 = new Entity('dapp9')
engine.addEntity(dapp9)
dapp9.setParent(_scene)
dapp9.addComponentOrReplace(gltfShape4)
const transform18 = new Transform({
  position: new Vector3(20, 4, 17.5),
  rotation: new Quaternion(1.1776626020394178e-14, -0.4713968336582184, 5.6194870978742983e-8, 0.8819212913513184),
  scale: new Vector3(0.21640697121620178, 0.19885368645191193, 0.19953767955303192)
})
dapp9.addComponentOrReplace(transform18)

const birdOfParadise = new Entity('birdOfParadise')
engine.addEntity(birdOfParadise)
birdOfParadise.setParent(_scene)
const transform19 = new Transform({
  position: new Vector3(13, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(2, 2, 2)
})
birdOfParadise.addComponentOrReplace(transform19)
const gltfShape5 = new GLTFShape("models/JunglePlant_05/JunglePlant_05.glb")
gltfShape5.withCollisions = true
gltfShape5.isPointerBlocker = true
gltfShape5.visible = true
birdOfParadise.addComponentOrReplace(gltfShape5)

const birdOfParadise2 = new Entity('birdOfParadise2')
engine.addEntity(birdOfParadise2)
birdOfParadise2.setParent(_scene)
birdOfParadise2.addComponentOrReplace(gltfShape5)
const transform20 = new Transform({
  position: new Vector3(26.5, 0, 9),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
birdOfParadise2.addComponentOrReplace(transform20)

const birdOfParadise3 = new Entity('birdOfParadise3')
engine.addEntity(birdOfParadise3)
birdOfParadise3.setParent(_scene)
birdOfParadise3.addComponentOrReplace(gltfShape5)
const transform21 = new Transform({
  position: new Vector3(18.5, 0, 28),
  rotation: new Quaternion(1.0889929378956156e-16, -0.5555702447891235, 6.622911996601033e-8, -0.8314695954322815),
  scale: new Vector3(1.9999998807907104, 2, 1.9999998807907104)
})
birdOfParadise3.addComponentOrReplace(transform21)

const birdOfParadise4 = new Entity('birdOfParadise4')
engine.addEntity(birdOfParadise4)
birdOfParadise4.setParent(_scene)
birdOfParadise4.addComponentOrReplace(gltfShape5)
const transform22 = new Transform({
  position: new Vector3(3.499999523162842, 0, 20.5),
  rotation: new Quaternion(1.1993104771822801e-14, 0.7730104923248291, -9.21500173944878e-8, -0.6343933343887329),
  scale: new Vector3(1.9999998807907104, 2, 1.9999998807907104)
})
birdOfParadise4.addComponentOrReplace(transform22)

const kangarooPaws = new Entity('kangarooPaws')
engine.addEntity(kangarooPaws)
kangarooPaws.setParent(_scene)
const transform23 = new Transform({
  position: new Vector3(3.5, 0, 28.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.4448883533477783, 0.4448883533477783, 0.4448883533477783)
})
kangarooPaws.addComponentOrReplace(transform23)
const gltfShape6 = new GLTFShape("models/Plant_05/Plant_05.glb")
gltfShape6.withCollisions = true
gltfShape6.isPointerBlocker = true
gltfShape6.visible = true
kangarooPaws.addComponentOrReplace(gltfShape6)

const kangarooPaws2 = new Entity('kangarooPaws2')
engine.addEntity(kangarooPaws2)
kangarooPaws2.setParent(_scene)
kangarooPaws2.addComponentOrReplace(gltfShape6)
const transform24 = new Transform({
  position: new Vector3(4, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.7718238830566406, 0.7718238830566406, 0.7718238830566406)
})
kangarooPaws2.addComponentOrReplace(transform24)

const kangarooPaws3 = new Entity('kangarooPaws3')
engine.addEntity(kangarooPaws3)
kangarooPaws3.setParent(_scene)
kangarooPaws3.addComponentOrReplace(gltfShape6)
const transform25 = new Transform({
  position: new Vector3(13.5, 0, 4.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
kangarooPaws3.addComponentOrReplace(transform25)

const kangarooPaws4 = new Entity('kangarooPaws4')
engine.addEntity(kangarooPaws4)
kangarooPaws4.setParent(_scene)
kangarooPaws4.addComponentOrReplace(gltfShape6)
const transform26 = new Transform({
  position: new Vector3(28.5, 0, 4),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.7296028137207031, 1.7296028137207031, 1.7296028137207031)
})
kangarooPaws4.addComponentOrReplace(transform26)

const cyanLeafShrub = new Entity('cyanLeafShrub')
engine.addEntity(cyanLeafShrub)
cyanLeafShrub.setParent(_scene)
const transform27 = new Transform({
  position: new Vector3(3, 0, 11.5),
  rotation: new Quaternion(-5.8655218946853174e-15, -0.9951847791671753, 1.1863525628541538e-7, 0.0980171486735344),
  scale: new Vector3(1.0000017881393433, 1, 1.0000017881393433)
})
cyanLeafShrub.addComponentOrReplace(transform27)
const gltfShape7 = new GLTFShape("models/Vegetation_09/Vegetation_09.glb")
gltfShape7.withCollisions = true
gltfShape7.isPointerBlocker = true
gltfShape7.visible = true
cyanLeafShrub.addComponentOrReplace(gltfShape7)

const cyanLeafShrub2 = new Entity('cyanLeafShrub2')
engine.addEntity(cyanLeafShrub2)
cyanLeafShrub2.setParent(_scene)
cyanLeafShrub2.addComponentOrReplace(gltfShape7)
const transform28 = new Transform({
  position: new Vector3(28.5, 0, 11.499999046325684),
  rotation: new Quaternion(-5.6129544575059774e-15, -0.9238796234130859, 1.1013501932666259e-7, 0.3826834559440613),
  scale: new Vector3(0.8996497392654419, 0.8996467590332031, 0.8996497392654419)
})
cyanLeafShrub2.addComponentOrReplace(transform28)

const dracaena = new Entity('dracaena')
engine.addEntity(dracaena)
dracaena.setParent(_scene)
const transform29 = new Transform({
  position: new Vector3(23, 0, 27.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
dracaena.addComponentOrReplace(transform29)
const gltfShape8 = new GLTFShape("models/Vegetation_02/Vegetation_02.glb")
gltfShape8.withCollisions = true
gltfShape8.isPointerBlocker = true
gltfShape8.visible = true
dracaena.addComponentOrReplace(gltfShape8)

const dracaena2 = new Entity('dracaena2')
engine.addEntity(dracaena2)
dracaena2.setParent(_scene)
dracaena2.addComponentOrReplace(gltfShape8)
const transform30 = new Transform({
  position: new Vector3(17.5, 0, 3),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.6222305297851562, 0.6222305297851562, 0.6222305297851562)
})
dracaena2.addComponentOrReplace(transform30)

const pebbles = new Entity('pebbles')
engine.addEntity(pebbles)
pebbles.setParent(_scene)
const transform31 = new Transform({
  position: new Vector3(27.5, 0, 3.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
pebbles.addComponentOrReplace(transform31)
const gltfShape9 = new GLTFShape("models/Rock_Patch_01/Rock_Patch_01.glb")
gltfShape9.withCollisions = true
gltfShape9.isPointerBlocker = true
gltfShape9.visible = true
pebbles.addComponentOrReplace(gltfShape9)

const pebbles2 = new Entity('pebbles2')
engine.addEntity(pebbles2)
pebbles2.setParent(_scene)
pebbles2.addComponentOrReplace(gltfShape9)
const transform32 = new Transform({
  position: new Vector3(29.5, 0, 2.5),
  rotation: new Quaternion(-1.10062582369541e-15, 0.6343932747840881, -7.562556447737734e-8, 0.7730104327201843),
  scale: new Vector3(0.9999991059303284, 1, 0.9999991059303284)
})
pebbles2.addComponentOrReplace(transform32)

const wildLongMushrooms = new Entity('wildLongMushrooms')
engine.addEntity(wildLongMushrooms)
wildLongMushrooms.setParent(_scene)
const transform33 = new Transform({
  position: new Vector3(26.5, 0, 25.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
wildLongMushrooms.addComponentOrReplace(transform33)
const gltfShape10 = new GLTFShape("models/Mushrooms_04/Mushrooms_04.glb")
gltfShape10.withCollisions = true
gltfShape10.isPointerBlocker = true
gltfShape10.visible = true
wildLongMushrooms.addComponentOrReplace(gltfShape10)

const wildLongMushrooms2 = new Entity('wildLongMushrooms2')
engine.addEntity(wildLongMushrooms2)
wildLongMushrooms2.setParent(_scene)
wildLongMushrooms2.addComponentOrReplace(gltfShape10)
const transform34 = new Transform({
  position: new Vector3(1.4999990463256836, 0, 22.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
wildLongMushrooms2.addComponentOrReplace(transform34)

const wildLongMushrooms3 = new Entity('wildLongMushrooms3')
engine.addEntity(wildLongMushrooms3)
wildLongMushrooms3.setParent(_scene)
wildLongMushrooms3.addComponentOrReplace(gltfShape10)
const transform35 = new Transform({
  position: new Vector3(1.9999990463256836, 0, 10.5),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.5, 1.5, 1.5)
})
wildLongMushrooms3.addComponentOrReplace(transform35)

const cyanMagicStone = new Entity('cyanMagicStone')
engine.addEntity(cyanMagicStone)
cyanMagicStone.setParent(_scene)
const transform36 = new Transform({
  position: new Vector3(4.320903301239014, 1.0529022216796875, 16.75093650817871),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone.addComponentOrReplace(transform36)
const gltfShape11 = new GLTFShape("models/Glowing_Stone_01/Glowing_Stone_01.glb")
gltfShape11.withCollisions = true
gltfShape11.isPointerBlocker = true
gltfShape11.visible = true
cyanMagicStone.addComponentOrReplace(gltfShape11)

const cyanMagicStone2 = new Entity('cyanMagicStone2')
engine.addEntity(cyanMagicStone2)
cyanMagicStone2.setParent(_scene)
cyanMagicStone2.addComponentOrReplace(gltfShape11)
const transform37 = new Transform({
  position: new Vector3(27.424144744873047, 1.0529022216796875, 15.325899124145508),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone2.addComponentOrReplace(transform37)

const cyanMagicStone3 = new Entity('cyanMagicStone3')
engine.addEntity(cyanMagicStone3)
cyanMagicStone3.setParent(_scene)
cyanMagicStone3.addComponentOrReplace(gltfShape11)
const transform38 = new Transform({
  position: new Vector3(19.982437133789062, 1.0529022216796875, 6.662525177001953),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone3.addComponentOrReplace(transform38)

const cyanMagicStone4 = new Entity('cyanMagicStone4')
engine.addEntity(cyanMagicStone4)
cyanMagicStone4.setParent(_scene)
cyanMagicStone4.addComponentOrReplace(gltfShape11)
const transform39 = new Transform({
  position: new Vector3(8.504410743713379, 1.0529022216796875, 7.3272294998168945),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone4.addComponentOrReplace(transform39)

const cyanMagicStone5 = new Entity('cyanMagicStone5')
engine.addEntity(cyanMagicStone5)
cyanMagicStone5.setParent(_scene)
cyanMagicStone5.addComponentOrReplace(gltfShape11)
const transform40 = new Transform({
  position: new Vector3(11.953218460083008, 1.0529022216796875, 25.501243591308594),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone5.addComponentOrReplace(transform40)

const cyanMagicStone6 = new Entity('cyanMagicStone6')
engine.addEntity(cyanMagicStone6)
cyanMagicStone6.setParent(_scene)
cyanMagicStone6.addComponentOrReplace(gltfShape11)
const transform41 = new Transform({
  position: new Vector3(23.604736328125, 1.0529022216796875, 24.746990203857422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
cyanMagicStone6.addComponentOrReplace(transform41)

const redMagicStone = new Entity('redMagicStone')
engine.addEntity(redMagicStone)
redMagicStone.setParent(_scene)
const transform42 = new Transform({
  position: new Vector3(9.46554183959961, 2.2916457653045654, 16.431072235107422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redMagicStone.addComponentOrReplace(transform42)
const gltfShape12 = new GLTFShape("models/Glowing_Stone_04/Glowing_Stone_04.glb")
gltfShape12.withCollisions = true
gltfShape12.isPointerBlocker = true
gltfShape12.visible = true
redMagicStone.addComponentOrReplace(gltfShape12)

const redMagicStone2 = new Entity('redMagicStone2')
engine.addEntity(redMagicStone2)
redMagicStone2.setParent(_scene)
redMagicStone2.addComponentOrReplace(gltfShape12)
const transform43 = new Transform({
  position: new Vector3(22.474756240844727, 2.2916457653045654, 15.498929977416992),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redMagicStone2.addComponentOrReplace(transform43)

const redMagicStone3 = new Entity('redMagicStone3')
engine.addEntity(redMagicStone3)
redMagicStone3.setParent(_scene)
redMagicStone3.addComponentOrReplace(gltfShape12)
const transform44 = new Transform({
  position: new Vector3(20.311159133911133, 2.2916457653045654, 20.950916290283203),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redMagicStone3.addComponentOrReplace(transform44)

const redMagicStone4 = new Entity('redMagicStone4')
engine.addEntity(redMagicStone4)
redMagicStone4.setParent(_scene)
redMagicStone4.addComponentOrReplace(gltfShape12)
const transform45 = new Transform({
  position: new Vector3(13.771537780761719, 2.2916457653045654, 21.244813919067383),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redMagicStone4.addComponentOrReplace(transform45)

const redMagicStone5 = new Entity('redMagicStone5')
engine.addEntity(redMagicStone5)
redMagicStone5.setParent(_scene)
redMagicStone5.addComponentOrReplace(gltfShape12)
const transform46 = new Transform({
  position: new Vector3(11.719992637634277, 2.2916457653045654, 10.993966102600098),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redMagicStone5.addComponentOrReplace(transform46)

const redMagicStone6 = new Entity('redMagicStone6')
engine.addEntity(redMagicStone6)
redMagicStone6.setParent(_scene)
redMagicStone6.addComponentOrReplace(gltfShape12)
const transform47 = new Transform({
  position: new Vector3(18.292940139770508, 2.2916457653045654, 10.661996841430664),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
redMagicStone6.addComponentOrReplace(transform47)

const whiteMagicStone = new Entity('whiteMagicStone')
engine.addEntity(whiteMagicStone)
whiteMagicStone.setParent(_scene)
const transform48 = new Transform({
  position: new Vector3(12.449613571166992, 3.2458486557006836, 16.21665382385254),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMagicStone.addComponentOrReplace(transform48)
const gltfShape13 = new GLTFShape("models/Glowing_Stone_03/Glowing_Stone_03.glb")
gltfShape13.withCollisions = true
gltfShape13.isPointerBlocker = true
gltfShape13.visible = true
whiteMagicStone.addComponentOrReplace(gltfShape13)

const whiteMagicStone2 = new Entity('whiteMagicStone2')
engine.addEntity(whiteMagicStone2)
whiteMagicStone2.setParent(_scene)
whiteMagicStone2.addComponentOrReplace(gltfShape13)
const transform49 = new Transform({
  position: new Vector3(14.759430885314941, 3.2458486557006836, 19.02435302734375),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMagicStone2.addComponentOrReplace(transform49)

const whiteMagicStone3 = new Entity('whiteMagicStone3')
engine.addEntity(whiteMagicStone3)
whiteMagicStone3.setParent(_scene)
whiteMagicStone3.addComponentOrReplace(gltfShape13)
const transform50 = new Transform({
  position: new Vector3(18.45427894592285, 3.2458486557006836, 18.754802703857422),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMagicStone3.addComponentOrReplace(transform50)

const whiteMagicStone4 = new Entity('whiteMagicStone4')
engine.addEntity(whiteMagicStone4)
whiteMagicStone4.setParent(_scene)
whiteMagicStone4.addComponentOrReplace(gltfShape13)
const transform51 = new Transform({
  position: new Vector3(19.65189552307129, 3.2458486557006836, 15.754081726074219),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMagicStone4.addComponentOrReplace(transform51)

const whiteMagicStone5 = new Entity('whiteMagicStone5')
engine.addEntity(whiteMagicStone5)
whiteMagicStone5.setParent(_scene)
whiteMagicStone5.addComponentOrReplace(gltfShape13)
const transform52 = new Transform({
  position: new Vector3(17.242422103881836, 3.2458486557006836, 12.995715141296387),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMagicStone5.addComponentOrReplace(transform52)

const whiteMagicStone6 = new Entity('whiteMagicStone6')
engine.addEntity(whiteMagicStone6)
whiteMagicStone6.setParent(_scene)
whiteMagicStone6.addComponentOrReplace(gltfShape13)
const transform53 = new Transform({
  position: new Vector3(13.614150047302246, 3.2458486557006836, 13.260221481323242),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1, 1, 1)
})
whiteMagicStone6.addComponentOrReplace(transform53)

const dapp10 = new Entity('dapp10')
engine.addEntity(dapp10)
dapp10.setParent(_scene)
dapp10.addComponentOrReplace(gltfShape4)
const transform54 = new Transform({
  position: new Vector3(22, 2, 4.5),
  rotation: new Quaternion(-8.96857034574398e-15, 0.9569404125213623, -1.1407617250824842e-7, -0.290284663438797),
  scale: new Vector3(0.3700164556503296, 0.3700145483016968, 0.3700164556503296)
})
dapp10.addComponentOrReplace(transform54)

const dapp11 = new Entity('dapp11')
engine.addEntity(dapp11)
dapp11.setParent(_scene)
dapp11.addComponentOrReplace(gltfShape4)
const transform55 = new Transform({
  position: new Vector3(23.500043869018555, 2.8909568786621094, 4.5),
  rotation: new Quaternion(-1.1692043004347258e-14, 0.9926982522010803, -1.183388462777657e-7, 0.12062451243400574),
  scale: new Vector3(0.31024694442749023, 0.3102448582649231, 0.31024694442749023)
})
dapp11.addComponentOrReplace(transform55)

const watermark = new Entity('watermark')
engine.addEntity(watermark)
watermark.setParent(_scene)
const transform56 = new Transform({
  position: new Vector3(23.25667953491211, 1.5, 16.02254295349121),
  rotation: new Quaternion(0.1649126559495926, -0.5566763877868652, -0.12228342890739441, -0.8049609661102295),
  scale: new Vector3(1.000000238418579, 1, 1.0000001192092896)
})
watermark.addComponentOrReplace(transform56)
const gltfShape14 = new GLTFShape("models/watermark.glb")
gltfShape14.withCollisions = true
gltfShape14.isPointerBlocker = true
gltfShape14.visible = true
watermark.addComponentOrReplace(gltfShape14)

const watermark2 = new Entity('watermark2')
engine.addEntity(watermark2)
watermark2.setParent(_scene)
watermark2.addComponentOrReplace(gltfShape14)
const transform57 = new Transform({
  position: new Vector3(8.706518173217773, 1.5, 16.02254295349121),
  rotation: new Quaternion(0.12228348851203918, 0.8049609661102295, 0.16491256654262543, -0.5566763281822205),
  scale: new Vector3(1.0000008344650269, 1.000000238418579, 1.0000008344650269)
})
watermark2.addComponentOrReplace(transform57)

const invisibleWall = new Entity('invisibleWall')
engine.addEntity(invisibleWall)
invisibleWall.setParent(_scene)
const transform58 = new Transform({
  position: new Vector3(6.289233684539795, 1.5313386917114258, 24.911651611328125),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(3.260906457901001, 1.389889121055603, 2.4961624145507812)
})
invisibleWall.addComponentOrReplace(transform58)

const invisibleWall2 = new Entity('invisibleWall2')
engine.addEntity(invisibleWall2)
invisibleWall2.setParent(_scene)
const transform59 = new Transform({
  position: new Vector3(2.8885700702667236, 1.6001429557800293, 3.702152729034424),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.9541839361190796, 1.389889121055603, 2.4961624145507812)
})
invisibleWall2.addComponentOrReplace(transform59)

const invisibleWall3 = new Entity('invisibleWall3')
engine.addEntity(invisibleWall3)
invisibleWall3.setParent(_scene)
const transform60 = new Transform({
  position: new Vector3(6.013056755065918, 3.039451837539673, 4.438974857330322),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(1.0612905025482178, 1.389889121055603, 1.369088053703308)
})
invisibleWall3.addComponentOrReplace(transform60)

const invisibleWall4 = new Entity('invisibleWall4')
engine.addEntity(invisibleWall4)
invisibleWall4.setParent(_scene)
const transform61 = new Transform({
  position: new Vector3(22.911760330200195, 2.2772598266601562, 4.453495502471924),
  rotation: new Quaternion(-3.2851078069173712e-15, -0.8819212913513184, 1.0513320347627086e-7, 0.4713967442512512),
  scale: new Vector3(1.9541857242584229, 1.389889121055603, 2.496164321899414)
})
invisibleWall4.addComponentOrReplace(transform61)

const invisibleWall5 = new Entity('invisibleWall5')
engine.addEntity(invisibleWall5)
invisibleWall5.setParent(_scene)
const transform62 = new Transform({
  position: new Vector3(26.00991439819336, 2.0448684692382812, 20.8392276763916),
  rotation: new Quaternion(-4.1130374083540085e-15, -0.9668779373168945, 1.1526082488444445e-7, 0.25523921847343445),
  scale: new Vector3(1.8538316488265991, 0.9257521629333496, 4.3942670822143555)
})
invisibleWall5.addComponentOrReplace(transform62)

const invisibleWall6 = new Entity('invisibleWall6')
engine.addEntity(invisibleWall6)
invisibleWall6.setParent(_scene)
const transform63 = new Transform({
  position: new Vector3(20.00069808959961, 3.684053659439087, 17.549327850341797),
  rotation: new Quaternion(0, 0, 0, 1),
  scale: new Vector3(0.8423025012016296, 1.014670729637146, 0.9097678065299988)
})
invisibleWall6.addComponentOrReplace(transform63)

const invisibleWall7 = new Entity('invisibleWall7')
engine.addEntity(invisibleWall7)
invisibleWall7.setParent(_scene)
const transform64 = new Transform({
  position: new Vector3(15.758575439453125, 3.684053659439087, 14.049327850341797),
  rotation: new Quaternion(-0.22509723901748657, 3.8503804323443305e-16, 2.683368194311697e-8, 0.9743363857269287),
  scale: new Vector3(0.8423025012016296, 3.080472230911255, 0.9097678065299988)
})
invisibleWall7.addComponentOrReplace(transform64)

const channelId = Math.random().toString(16).slice(2)
const channelBus = new MessageBus()
const inventory = createInventory(UICanvas, UIContainerStack, UIImage)
const options = { inventory }

const script1 = new Script1()
script1.init(options)
script1.spawn(invisibleWall, {"enabled":true}, createChannel(channelId, invisibleWall, channelBus))
script1.spawn(invisibleWall2, {"enabled":true}, createChannel(channelId, invisibleWall2, channelBus))
script1.spawn(invisibleWall3, {"enabled":true}, createChannel(channelId, invisibleWall3, channelBus))
script1.spawn(invisibleWall4, {"enabled":true}, createChannel(channelId, invisibleWall4, channelBus))
script1.spawn(invisibleWall5, {"enabled":true}, createChannel(channelId, invisibleWall5, channelBus))
script1.spawn(invisibleWall6, {"enabled":true}, createChannel(channelId, invisibleWall6, channelBus))
script1.spawn(invisibleWall7, {"enabled":true}, createChannel(channelId, invisibleWall7, channelBus))