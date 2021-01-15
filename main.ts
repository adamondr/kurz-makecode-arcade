namespace SpriteKind {
    export const Player2 = SpriteKind.create()
    export const Proj1 = SpriteKind.create()
    export const Proj2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Proj2, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy()
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proj1 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . f 2 2 2 2 2 2 2 2 f . . . 
        . . . . f 2 2 2 2 2 2 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, hrac1, 100, 0)
    proj1.setKind(SpriteKind.Proj1)
    while (controller.A.isPressed()) {
        pause(500)
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    proj2 = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . f 8 8 8 8 8 8 8 8 f . . . 
        . . . . f 8 8 8 8 8 8 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, hrac2, -100, 0)
    proj2.setKind(SpriteKind.Proj2)
    while (controller.player2.isPressed(ControllerButton.A)) {
        pause(1000)
    }
})
sprites.onOverlap(SpriteKind.Player2, SpriteKind.Proj1, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
    otherSprite.destroy()
})
info.onLifeZero(function () {
    game.splash("Hrac 2 vyhral!")
    game.over(true)
})
sprites.onOverlap(SpriteKind.Proj1, SpriteKind.Proj2, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
})
info.player2.onLifeZero(function () {
    game.splash("Hrac 1 vyhral!")
    game.over(true)
})
let proj2: Sprite = null
let proj1: Sprite = null
let hrac2: Sprite = null
let hrac1: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`0a0008000101000002000000010101010000000200000101010100000000000001010101000000000000010101010000000000000101010100000000000001010101000000000000010101010000020200000101`, img`
    . . . . 2 . . . . . 
    . . . . . 2 . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . . . . . . . 
    . . . . 2 2 . . . . 
    `, [myTiles.transparency16,sprites.castle.tileGrass1,sprites.castle.rock0], TileScale.Sixteen))
scene.setBackgroundColor(9)
hrac1 = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 5 5 f f f . . . . 
    . . . f f f 5 5 5 5 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f 4 4 f 1 4 e e f . 
    . . f e e 4 4 4 4 4 4 e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 4 f 2 2 2 2 2 2 f 4 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
hrac2 = sprites.create(img`
    . . . . . f f 4 4 f f . . . . . 
    . . . . f 5 4 5 5 4 5 f . . . . 
    . . . f e 4 5 5 5 5 4 e f . . . 
    . . f b 3 e 4 4 4 4 e 3 b f . . 
    . . f 3 3 3 3 3 3 3 3 3 3 f . . 
    . f 3 3 e b 3 e e 3 b e 3 3 f . 
    . f 3 3 f f e e e e f f 3 3 f . 
    . f b b f b f e e f b f b b f . 
    . f b b e 1 f 4 4 f 1 e b b f . 
    f f b b f 4 4 4 4 4 4 f b b f f 
    f b b f f f e e e e f f f b b f 
    . f e e f b d d d d b f e e f . 
    . . e 4 c d d d d d d c 4 e . . 
    . . e f b d b d b d b b f e . . 
    . . . f f 1 d 1 d 1 d f f . . . 
    . . . . . f f b b f f . . . . . 
    `, SpriteKind.Player2)
controller.moveSprite(hrac1, 0, 100)
controller.player2.moveSprite(hrac2, 0, 100)
hrac1.setPosition(15, 60)
hrac2.setPosition(145, 60)
hrac1.setFlag(SpriteFlag.StayInScreen, true)
hrac2.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(5)
info.player2.setLife(5)
