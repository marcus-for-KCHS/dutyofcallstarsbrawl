namespace SpriteKind {
    export const grasse = SpriteKind.create()
    export const spedpowerup = SpriteKind.create()
    export const fireratepowerup = SpriteKind.create()
    export const shieldpowerup = SpriteKind.create()
    export const shield = SpriteKind.create()
    export const enemy1 = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.x = -500
    zombiesleft += 1
    pause(500)
    sprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 75)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorMixed, function (sprite, location) {
    sprites.destroy(sprite)
})
function P3_Walk (num: number) {
    if (num == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 5 5 5 5 5 5 5 5 f . . 
            . . f e 5 f f f f f f 5 5 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 5 5 5 5 f 4 e . . 
            . f b b b b f 5 5 5 5 f d 4 . . 
            . . f c c f 5 5 5 5 5 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 5 5 5 5 5 5 e e f . . 
            . f f e 5 f f f f f f 5 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 5 5 5 5 e d d 4 e . . 
            f b f 4 f 5 5 5 5 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 5 5 5 5 5 5 e f f . . 
            . f f e 5 f f f f f f 5 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 5 5 5 f e f . . 
            . . f b b b b f 5 5 5 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 5 5 f f f . . . . 
            . . . f f f 5 5 5 5 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 5 5 5 5 5 5 e f f . . 
            . f f e 5 f f f f f f 5 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 5 5 5 5 f e f b f 
            . . . e d d e 5 5 5 5 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
    } else if (num == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 5 5 f f f f f . . 
            . . f f e 5 e 5 5 e 5 e f f . . 
            . . f e 5 f 5 f f 5 f 5 e f . . 
            . . f f f 5 5 e e 5 5 f f f . . 
            . f f e f 5 f e e f 5 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 5 5 5 5 5 5 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 5 5 f f f f . . . . 
            . f f e 5 e 5 5 e 5 e f f . . . 
            . f e 5 f 5 f f f 5 f e f . . . 
            . f f f 5 f e e 5 5 f f f . . . 
            . f e 5 f f e e 5 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 5 5 5 5 5 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 5 5 f f f f f . . . 
            . f f e 5 e 5 5 e 5 e f f . . . 
            . f e 5 f 5 f f 5 f 5 e f . . . 
            . f f f 5 5 e e 5 5 f f f . . . 
            f f e f 5 f e e f 5 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 5 5 5 5 5 5 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 5 5 f f f f . . . . 
            . f f e 5 e 5 5 e 5 e f f . . . 
            . f e f 5 f f f 5 f 5 e f . . . 
            . f f f 5 5 e e f 5 f f f . . . 
            . f e e f 5 e e f f 5 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 5 5 5 5 5 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 3) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 f e e e e f f . . . 
            . . . f 5 5 5 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 5 5 5 5 e e f f f f . . 
            . . f 5 e f f f f 5 5 5 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 5 5 5 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 5 f e e e e f f . . . 
            . . . f 5 5 5 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 5 5 5 5 e e f f f f . . 
            . . f 5 e f f f f 5 5 5 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 5 5 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 5 f e e e e f f . . . 
            . . . f 5 5 5 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 5 5 5 5 e e f f f f . . 
            . . f 5 e f f f f 5 5 5 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 5 5 5 f . . . . 
            . . f b e d d e 5 5 5 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 5 f e e e e f f . . . . 
            . . f 5 5 5 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 5 5 5 5 e e f f f f . . . 
            . f 5 e f f f f 5 5 5 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 5 5 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 4) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 5 f . . . . 
            . . f f e e e e f 5 5 5 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 5 5 5 5 e f . . 
            . . f e 5 5 5 f f f f e 5 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 5 5 5 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 5 f . . . . 
            . . f f e e e e f 5 5 5 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 5 5 5 5 e f . . 
            . . f e 5 5 5 f f f f e 5 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 5 5 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 5 f . . . . 
            . . f f e e e e f 5 5 5 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 5 5 5 5 e f . . 
            . . f e 5 5 5 f f f f e 5 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 5 5 5 4 d d e b b f . 
            . . . . e 5 5 5 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 5 f . . . 
            . . . f f e e e e f 5 5 5 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 5 5 5 5 e f . 
            . . . f e 5 5 5 f f f f e 5 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 5 5 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
    }
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.builtin.forestTiles0, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight1, function (sprite, location) {
    sprites.destroy(sprite)
})
mp.onButtonEvent(mp.MultiplayerButton.Right, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        if (!(dead1 == "1" || dead2 == "1")) {
            direction1 = 0
            P1_Walk(4)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        if (!(dead1 == "2" || dead2 == "2")) {
            direction2 = 0
            P2_Walk(4)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        if (!(dead1 == "3" || dead2 == "3")) {
            direction3 = 0
            P3_Walk(4)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        if (!(dead1 == "4" || dead2 == "4")) {
            direction4 = 0
            P4_Walk(4)
        }
    }
})
function Multiplayer () {
    splitScreen.setSplitScreenEnabled(true)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera1, splitScreen.CameraRegion.TopLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera2, splitScreen.CameraRegion.TopRight)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera3, splitScreen.CameraRegion.BottomLeft)
    splitScreen.setCameraRegion(splitScreen.Camera.Camera4, splitScreen.CameraRegion.BottomRight)
    splitScreen.setBorderColor(2)
    mp.setPlayerIndicatorsVisible(false)
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 8 8 f f f . . . . 
        . . . f f f 8 8 8 8 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 8 8 8 8 8 8 e e f . . 
        . . f e 8 f f f f f f 8 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 8 8 8 e e f . . . 
        . f b b b b f 8 8 8 8 f 4 e . . 
        . f b b b b f 8 8 8 8 f d 4 . . 
        . . f c c f 8 5 5 8 8 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 5 5 f f f . . . . 
        . . . f f f 5 5 5 5 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 5 5 5 5 5 5 e e f . . 
        . . f e 5 f f f f f f 5 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 5 5 5 5 f 4 e . . 
        . f b b b b f 5 5 5 5 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 7 7 f f f . . . . 
        . . . f f f 7 7 7 7 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 7 7 7 7 7 7 e e f . . 
        . . f e 7 f f f f f f 7 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 7 7 7 7 f 4 e . . 
        . f b b b b f 7 7 7 7 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    Which_Map(randint(1, 5))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), playerspeed, playerspeed)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), playerspeed, playerspeed)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Three), playerspeed, playerspeed)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Four), playerspeed, playerspeed)
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera3, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)))
    splitScreen.cameraFollowSprite(splitScreen.Camera.Camera4, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)))
}
function ZombieMAPWHICH (Map: number) {
    map = Map
    if (Map == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 30)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else if (Map == 2) {
        scene.setBackgroundColor(7)
        tiles.setCurrentTilemap(tilemap`level8`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 71)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else if (Map == 3) {
        tiles.setCurrentTilemap(tilemap`level10`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(65, 65)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 30)
            setspeedsy = randint(1, 30)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else if (Map == 4) {
        scene.setBackgroundColor(1)
        tiles.setCurrentTilemap(tilemap`level13`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 30)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else {
        tiles.setCurrentTilemap(tilemap`level6`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 30)
        for (let index = 0; index < 4; index++) {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 4; index++) {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 4; index++) {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    }
}
sprites.onOverlap(SpriteKind.shield, SpriteKind.enemy1, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    p1shield = 0
    bulletbuffer1 = 12
    zombiesleft += -1
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite, effects.fire, 500)
    music.play(music.melodyPlayable(music.zapped), music.PlaybackMode.UntilDone)
    players_left += -1
    list.push(otherSprite)
})
function Start (Wave: number) {
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    for (let index = 0; index < 2 * Wave; index++) {
        if (map == 1) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                Setbaddie(randint(1, 3))
            }
        } else if (map == 2) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                Setbaddie(randint(1, 3))
            }
        } else if (map == 3) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                Setbaddie(randint(1, 3))
            }
        } else if (map == 4) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                Setbaddie(randint(1, 3))
            }
        } else {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                Setbaddie(randint(1, 3))
            }
        }
    }
    wave += 1
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight0, function (sprite, location) {
    sprites.destroy(sprite)
})
function P2_Walk (num: number) {
    if (num == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 8 8 8 8 8 8 8 8 f . . 
            . . f e 8 f f f f f f 8 8 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 8 8 8 8 f 4 e . . 
            . f b b b b f 8 8 8 8 f d 4 . . 
            . . f c c f 8 5 5 8 8 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 8 8 8 8 8 8 e e f . . 
            . f f e 8 f f f f f f 8 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 8 8 8 8 e d d 4 e . . 
            f b f 4 f 8 8 8 8 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 8 8 8 8 8 8 e f f . . 
            . f f e 8 f f f f f f 8 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 8 8 8 f e f . . 
            . . f b b b b f 8 8 8 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 8 8 f f f . . . . 
            . . . f f f 8 8 8 8 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 8 8 8 8 8 8 e f f . . 
            . f f e 8 f f f f f f 8 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 8 8 8 8 f e f b f 
            . . . e d d e 8 8 8 8 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
    } else if (num == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 8 8 f f f f f . . 
            . . f f e 8 e 8 8 e 8 e f f . . 
            . . f e 8 f 8 f f 8 f 8 e f . . 
            . . f f f 8 8 e e 8 8 f f f . . 
            . f f e f 8 f e e f 8 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 8 8 8 8 8 8 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 8 8 f f f f . . . . 
            . f f e 8 e 8 8 e 8 e f f . . . 
            . f e 8 f 8 f f f 8 f e f . . . 
            . f f f 8 f e e 8 8 f f f . . . 
            . f e 8 f f e e 8 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 8 8 8 8 8 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 8 8 f f f f f . . . 
            . f f e 8 e 8 8 e 8 e f f . . . 
            . f e 8 f 8 f f 8 f 8 e f . . . 
            . f f f 8 8 e e 8 8 f f f . . . 
            f f e f 8 f e e f 8 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 8 8 8 8 8 8 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 8 8 f f f f . . . . 
            . f f e 8 e 8 8 e 8 e f f . . . 
            . f e f 8 f f f 8 f 8 e f . . . 
            . f f f 8 8 e e f 8 f f f . . . 
            . f e e f 8 e e f f 8 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 8 8 8 8 8 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 3) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 8 f e e e e f f . . . 
            . . . f 8 8 8 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 8 8 8 8 e e f f f f . . 
            . . f 8 e f f f f 8 8 8 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 8 8 8 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 8 f e e e e f f . . . 
            . . . f 8 8 8 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 8 8 8 8 e e f f f f . . 
            . . f 8 e f f f f 8 8 8 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 8 8 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 8 f e e e e f f . . . 
            . . . f 8 8 8 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 8 8 8 8 e e f f f f . . 
            . . f 8 e f f f f 8 8 8 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 8 8 8 f . . . . 
            . . f b e d d e 8 8 8 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 8 f e e e e f f . . . . 
            . . f 8 8 8 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 8 8 8 8 e e f f f f . . . 
            . f 8 e f f f f 8 8 8 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 8 8 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 4) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 8 f . . . . 
            . . f f e e e e f 8 8 8 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 8 8 8 8 e f . . 
            . . f e 8 8 8 f f f f e 8 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 8 8 8 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 8 f . . . . 
            . . f f e e e e f 8 8 8 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 8 8 8 8 e f . . 
            . . f e 8 8 8 f f f f e 8 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 8 8 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 8 f . . . . 
            . . f f e e e e f 8 8 8 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 8 8 8 8 e f . . 
            . . f e 8 8 8 f f f f e 8 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 8 8 8 4 d d e b b f . 
            . . . . e 8 8 8 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 8 f . . . 
            . . . f f e e e e f 8 8 8 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 8 8 8 8 e f . 
            . . . f e 8 8 8 f f f f e 8 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 8 8 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.enemy1, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    zombiesleft += -1
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.saplingOak, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onCreated(SpriteKind.enemy1, function (sprite) {
    sprite.x = -500
    zombiesleft += 1
    pause(500)
    sprite.follow(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), 45)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorDark1, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.shield, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    fakeshieldlist.push(convertToText(0).substr(0, 1))
    extravarforshield = "" + convertToText(fakeshieldlist[1]).substr(0, 1)
    if (extravarforshield.includes("1")) {
        bulletbuffer4 = 12
        p1shield = 0
        fakeshieldlist = []
    }
    if (extravarforshield.includes("2")) {
        bulletbuffer4 = 12
        p2shield = 0
        fakeshieldlist = []
    }
    if (convertToText(extravarforshield).includes("3")) {
        bulletbuffer4 = 12
        p3shield = 0
        fakeshieldlist = []
    }
    if (convertToText(extravarforshield).includes("4")) {
        bulletbuffer4 = 12
        p4shield = 0
        fakeshieldlist = []
    }
})
function Zombie () {
    wave = 1
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player))
    ZombieMAPWHICH(1)
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), playerspeed, playerspeed)
    scene.cameraFollowSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    Start(wave)
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.rock2, function (sprite, location) {
    sprites.destroy(sprite)
})
statusbars.onZero(StatusBarKind.Health, function (status) {
    sprites.destroy(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)), effects.spray, 500)
    music.play(music.melodyPlayable(music.wawawawaa), music.PlaybackMode.InBackground)
    game.setGameOverMessage(false, "You Died")
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.rock0, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -2.5
})
mp.onButtonEvent(mp.MultiplayerButton.Down, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        if (!(dead1 == "1" || dead2 == "1")) {
            direction1 = 1
            P1_Walk(1)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        if (!(dead1 == "2" || dead2 == "2")) {
            direction2 = 1
            P2_Walk(1)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        if (!(dead1 == "3" || dead2 == "3")) {
            direction3 = 1
            P3_Walk(1)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        if (!(dead1 == "4" || dead2 == "4")) {
            direction4 = 1
            P4_Walk(1)
        }
    }
})
function Clearpowerup () {
    sprites.destroyAllSpritesOfKind(SpriteKind.spedpowerup)
    sprites.destroyAllSpritesOfKind(SpriteKind.fireratepowerup)
    sprites.destroyAllSpritesOfKind(SpriteKind.shieldpowerup)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.shieldpowerup, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    if (GAMEMODE2 == "z") {
        p1shield = 1
        bulletbuffer1 = 22
        shield1 = sprites.create(img`
            ...........99999999999...........
            ........99999999999999999........
            .......9999111111111119999.......
            ......99911...........11999......
            ....99911...............11999....
            ....991...................199....
            ...991.....................199...
            ..991.......................199..
            .9991.......................1999.
            .991.........................199.
            .991.........................199.
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            .991.........................199.
            .991.........................199.
            .9991.......................1999.
            ..991.......................199..
            ...991.....................199...
            ....991...................199....
            ....99911...............11999....
            ......99911...........11999......
            .......9999111111111119999.......
            ........99999999999999999........
            ...........99999999999...........
            `, SpriteKind.shield)
        shieldvariable = ""
    } else {
        ShieldPowerupList = []
        ShieldPowerupList.push(convertToText(sprite).substr(0, 1))
        shieldvariable = "" + convertToText(ShieldPowerupList[0]).substr(0, 1) + convertToText(ShieldPowerupList[1]).substr(0, 1) + convertToText(ShieldPowerupList[2]).substr(0, 1) + convertToText(ShieldPowerupList[3]).substr(0, 1) + convertToText(ShieldPowerupList[4]).substr(0, 1)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.castle.saplingPine, function (sprite, location) {
    sprites.destroy(sprite)
})
function GAMEMODE () {
    game.splash("Type \"z\" for Zombie mode")
    game.splash("Type \"m\" for Multiplayer")
    GAMEMODE2 = game.askForString("Which one?")
    if (GAMEMODE2 == "m") {
        Multiplayer()
    } else if (GAMEMODE2 == "z") {
        Zombie()
        statusbar = statusbars.create(20, 3, StatusBarKind.Health)
        statusbar.setColor(7, 2, 2)
        statusbar.value = 100
        statusbar.setBarBorder(1, 15)
        statusbar.attachToSprite(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)))
    } else {
        GAMEMODE()
    }
}
function Setbaddie (num: number) {
    if (num == 1) {
        BadGuy1 = sprites.create(img`
            ........................
            ........................
            ........................
            ........................
            ..........ffff..........
            ........ff1111ff........
            .......fb111111bf.......
            .......f11111111f.......
            ......fd11111111df......
            ......fd11111111df......
            ......fddd1111dddf......
            ......fbdbfddfbdbf......
            ......fcdcf11fcdcf......
            .....ffff111111bf.......
            ....fc111cdb1bdfff......
            ....f1b1bcbfbfc111cf....
            ....fbfbfbffff1b1b1f....
            .........fffffffbfbf....
            ..........fffff.........
            ...........fff..........
            ........................
            ........................
            ........................
            ........................
            `, SpriteKind.Enemy)
        tiles.placeOnTile(BadGuy1, tiles.getTileLocation(setspeedsx, setspeedsy))
    } else {
        BadGuy2 = sprites.create(img`
            . . . . c c c c c . . . . . . . 
            . . c c 5 5 5 5 5 c . . . . . . 
            . c 5 5 5 5 1 f 5 5 c . . . . . 
            c 5 5 5 5 5 f f 5 5 5 c . . . . 
            c 5 5 5 5 5 5 5 5 5 5 5 c . . . 
            c c b b 1 b 5 5 5 5 5 5 c . . . 
            c 5 3 3 3 5 5 5 5 5 5 5 d c . . 
            c 5 3 3 3 5 5 5 5 5 d d d c . . 
            . c 5 5 5 5 b 5 5 5 d d d c . . 
            . . c b b c 5 5 b d d d d c . . 
            . c b b c 5 5 b b d d d d c c c 
            . c c c c c c d d d d d d d d c 
            . . . . c c c b 5 5 b d d d c . 
            . . . . . c d 5 5 b b c c c . . 
            . . . . c c c c c c c . . . . . 
            . . . . c b b b c . . . . . . . 
            `, SpriteKind.enemy1)
        tiles.placeOnTile(BadGuy2, tiles.getTileLocation(setspeedsx, setspeedsy))
    }
}
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorLight4, function (sprite, location) {
    sprites.destroy(sprite)
})
mp.onButtonEvent(mp.MultiplayerButton.Left, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        if (!(dead1 == "1" || dead2 == "1")) {
            direction1 = 2
            P1_Walk(3)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        if (!(dead1 == "2" || dead2 == "2")) {
            direction2 = 2
            P2_Walk(3)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        if (!(dead1 == "3" || dead2 == "3")) {
            direction3 = 2
            P3_Walk(3)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        if (!(dead1 == "4" || dead2 == "4")) {
            direction4 = 2
            P4_Walk(3)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.fireratepowerup, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
    if (GAMEMODE2 == "z") {
        p1firerate = 100
    } else {
        REALfireratelist = []
        REALfireratelist.push(convertToText(sprite).substr(0, 1))
        firevariable = "" + convertToText(REALfireratelist[0]).substr(0, 1) + convertToText(REALfireratelist[1]).substr(0, 1) + convertToText(REALfireratelist[2]).substr(0, 1) + convertToText(REALfireratelist[3]).substr(0, 1) + convertToText(REALfireratelist[4]).substr(0, 1)
    }
})
scene.onOverlapTile(SpriteKind.Projectile, sprites.dungeon.floorDark0, function (sprite, location) {
    sprites.destroy(sprite)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite, location) {
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.enemy1, SpriteKind.Player, function (sprite, otherSprite) {
    statusbar.value += -5
})
mp.onButtonEvent(mp.MultiplayerButton.Up, ControllerButtonEvent.Pressed, function (player2) {
    if (player2 == mp.playerSelector(mp.PlayerNumber.One)) {
        if (!(dead1 == "1" || dead2 == "1")) {
            direction1 = 3
            P1_Walk(2)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Two)) {
        if (!(dead1 == "2" || dead2 == "2")) {
            direction2 = 3
            P2_Walk(2)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Three)) {
        if (!(dead1 == "3" || dead2 == "3")) {
            direction3 = 3
            P3_Walk(2)
        }
    }
    if (player2 == mp.playerSelector(mp.PlayerNumber.Four)) {
        if (!(dead1 == "4" || dead2 == "4")) {
            direction4 = 3
            P4_Walk(2)
        }
    }
})
function P4_Walk (num: number) {
    if (num == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 7 7 7 7 7 7 7 7 f . . 
            . . f e 7 f f f f f f 7 7 f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 7 7 7 7 f 4 e . . 
            . f b b b b f 7 7 7 7 f d 4 . . 
            . . f c c f 7 5 5 7 7 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 7 7 7 7 7 7 e e f . . 
            . f f e 7 f f f f f f 7 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 7 7 7 7 e d d 4 e . . 
            f b f 4 f 7 7 7 7 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 7 7 7 7 7 7 e f f . . 
            . f f e 7 f f f f f f 7 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 7 7 7 f e f . . 
            . . f b b b b f 7 7 7 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 7 7 f f f . . . . 
            . . . f f f 7 7 7 7 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 7 7 7 7 7 7 e f f . . 
            . f f e 7 f f f f f f 7 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 7 7 7 7 f e f b f 
            . . . e d d e 7 7 7 7 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
    } else if (num == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 7 7 f f f f f . . 
            . . f f e 7 e 7 7 e 7 e f f . . 
            . . f e 7 f 7 f f 7 f 7 e f . . 
            . . f f f 7 7 e e 7 7 f f f . . 
            . f f e f 7 f e e f 7 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 7 7 7 7 7 7 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 7 7 f f f f . . . . 
            . f f e 7 e 7 7 e 7 e f f . . . 
            . f e 7 f 7 f f f 7 f e f . . . 
            . f f f 7 f e e 7 7 f f f . . . 
            . f e 7 f f e e 7 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 7 7 7 7 7 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 7 7 f f f f f . . . 
            . f f e 7 e 7 7 e 7 e f f . . . 
            . f e 7 f 7 f f 7 f 7 e f . . . 
            . f f f 7 7 e e 7 7 f f f . . . 
            f f e f 7 f e e f 7 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 7 7 7 7 7 7 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 7 7 f f f f . . . . 
            . f f e 7 e 7 7 e 7 e f f . . . 
            . f e f 7 f f f 7 f 7 e f . . . 
            . f f f 7 7 e e f 7 f f f . . . 
            . f e e f 7 e e f f 7 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 7 7 7 7 7 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 3) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 f e e e e f f . . . 
            . . . f 7 7 7 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 7 7 7 7 e e f f f f . . 
            . . f 7 e f f f f 7 7 7 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 7 7 7 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 7 f e e e e f f . . . 
            . . . f 7 7 7 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 7 7 7 7 e e f f f f . . 
            . . f 7 e f f f f 7 7 7 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 7 7 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 7 f e e e e f f . . . 
            . . . f 7 7 7 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 7 7 7 7 e e f f f f . . 
            . . f 7 e f f f f 7 7 7 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 7 7 7 f . . . . 
            . . f b e d d e 7 7 7 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 7 f e e e e f f . . . . 
            . . f 7 7 7 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 7 7 7 7 e e f f f f . . . 
            . f 7 e f f f f 7 7 7 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 7 7 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 4) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 7 f . . . . 
            . . f f e e e e f 7 7 7 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 7 7 7 7 e f . . 
            . . f e 7 7 7 f f f f e 7 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 7 7 7 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 7 f . . . . 
            . . f f e e e e f 7 7 7 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 7 7 7 7 e f . . 
            . . f e 7 7 7 f f f f e 7 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 7 7 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 7 f . . . . 
            . . f f e e e e f 7 7 7 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 7 7 7 7 e f . . 
            . . f e 7 7 7 f f f f e 7 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 7 7 7 4 d d e b b f . 
            . . . . e 7 7 7 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 7 f . . . 
            . . . f f e e e e f 7 7 7 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 7 7 7 7 e f . 
            . . . f e 7 7 7 f f f f e 7 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 7 7 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
    }
}
function Which_Map (Map: number) {
    if (Map == 1) {
        tiles.setCurrentTilemap(tilemap`level4`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(283, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(30, 290)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(283, 290)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 20)
            setspeedsy = randint(1, 20)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else if (Map == 2) {
        scene.setBackgroundColor(7)
        tiles.setCurrentTilemap(tilemap`level8`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 71)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(260, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(20, 358)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(290, 365)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else if (Map == 3) {
        tiles.setCurrentTilemap(tilemap`level10`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(65, 65)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(578, 65)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(65, 578)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(578, 578)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 30)
            setspeedsy = randint(1, 30)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.builtin.forestTiles0))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 24)
            setspeedsy = randint(1, 24)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), assets.tile`myTile`) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingOak) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.saplingPine))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else if (Map == 4) {
        scene.setBackgroundColor(1)
        tiles.setCurrentTilemap(tilemap`level13`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(320, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(30, 320)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(320, 320)
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 2; index++) {
            setspeedsx = randint(1, 22)
            setspeedsy = randint(1, 22)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock2) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.castle.rock0))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    } else {
        tiles.setCurrentTilemap(tilemap`level6`)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setPosition(30, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setPosition(480, 30)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).setPosition(30, 480)
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).setPosition(480, 480)
        for (let index = 0; index < 4; index++) {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                speedsprite = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . 5 5 5 5 5 5 5 5 . . 2 
                    2 . . . . 5 5 5 5 5 5 5 . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 . . 5 5 5 5 5 5 5 5 . . . . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . 5 5 5 5 5 5 5 5 5 5 5 5 . 2 
                    2 . . . . . . . 5 5 5 5 5 . . 2 
                    2 . . . . . . 5 5 5 5 5 . . . 2 
                    2 . . . . . 5 5 5 5 5 . . . . 2 
                    2 . . . . 5 5 5 5 5 . . . . . 2 
                    2 . . . . 5 5 5 5 . . . . . . 2 
                    2 . . . 5 5 5 5 . . . . . . . 2 
                    2 . . 5 5 5 5 . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.spedpowerup)
                tiles.placeOnTile(speedsprite, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 4; index++) {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                fireratepowerup = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . 4 5 5 2 
                    2 . . . . . . . . . . 5 4 5 5 2 
                    2 . . . . . . . . . 5 5 5 4 4 2 
                    2 . . . . . . . . . . 5 5 5 . 2 
                    2 . . . . . . 4 5 5 . . 5 . . 2 
                    2 . . . . . 5 4 5 5 . . . . . 2 
                    2 . . . . 5 5 5 4 4 . . . . . 2 
                    2 . . . . . 5 5 5 . . . . . . 2 
                    2 . . . . . . 5 . . . . . . . 2 
                    2 . . 4 5 5 . . . . . . . . . 2 
                    2 . 5 4 5 5 . . . . . . . . . 2 
                    2 5 5 5 4 4 . . . . . . . . . 2 
                    2 . 5 5 5 . . . . . . . . . . 2 
                    2 . . 5 . . . . . . . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.fireratepowerup)
                tiles.placeOnTile(fireratepowerup, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
        for (let index = 0; index < 4; index++) {
            setspeedsx = randint(1, 32)
            setspeedsy = randint(1, 32)
            if (!(tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight1) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorMixed) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorDark0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight0) || tiles.tileAtLocationEquals(tiles.getTileLocation(setspeedsx, setspeedsy), sprites.dungeon.floorLight4))) {
                shieldd = sprites.create(img`
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    2 . . . . . . . . . . . . . . 2 
                    2 . . 8 . . . . . . . . 8 8 . 2 
                    2 . . 8 8 8 8 . . . . 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 5 5 5 5 5 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 5 8 8 8 8 8 . 2 
                    2 . . 8 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . 8 8 8 8 8 8 8 8 8 8 . 2 
                    2 . . . . 8 8 8 8 8 8 8 . . . 2 
                    2 . . . . . . 8 8 8 . . . . . 2 
                    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
                    `, SpriteKind.shieldpowerup)
                tiles.placeOnTile(shieldd, tiles.getTileLocation(setspeedsx, setspeedsy))
            }
        }
    }
}
sprites.onOverlap(SpriteKind.shield, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    sprites.destroy(otherSprite)
    p1shield = 0
    bulletbuffer1 = 12
    zombiesleft += -1
})
function P1_Walk (num: number) {
    if (num == 1) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 2 2 2 2 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 2 2 2 2 f e f b f 
            . . . e d d e 2 2 2 2 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
    } else if (num == 2) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e f 2 f f f 2 f 2 e f . . . 
            . f f f 2 2 e e f 2 f f f . . . 
            . f e e f 2 e e f f 2 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 2 2 2 2 2 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 3) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . f f f f f f . . . . . . 
            . . . f 2 f e e e e f f . . . . 
            . . f 2 2 2 f e e e e f f . . . 
            . . f e e e e f f e e e f . . . 
            . f e 2 2 2 2 e e f f f f . . . 
            . f 2 e f f f f 2 2 2 e f . . . 
            . f f f e e e f f f f f f f . . 
            . f e e 4 4 f b e 4 4 e f f . . 
            . . f e d d f 1 4 d 4 e e f . . 
            . . . f d d d e e e e e f . . . 
            . . . f e 4 e d d 4 f . . . . . 
            . . . f 2 2 e d d e f . . . . . 
            . . f f 5 5 f e e f f f . . . . 
            . . f f f f f f f f f f . . . . 
            . . . f f f . . . f f . . . . . 
            `],
        200,
        true
        )
    } else if (num == 4) {
        animation.runImageAnimation(
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)),
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f f f . . . . 
            . . . . f f e e e e f 2 f . . . 
            . . . f f e e e e f 2 2 2 f . . 
            . . . f e e e f f e e e e f . . 
            . . . f f f f e e 2 2 2 2 e f . 
            . . . f e 2 2 2 f f f f e 2 f . 
            . . f f f f f f f e e e f f f . 
            . . f f e 4 4 e b f 4 4 e e f . 
            . . f e e 4 d 4 1 f d d e f . . 
            . . . f e e e e e d d d f . . . 
            . . . . . f 4 d d e 4 e f . . . 
            . . . . . f e d d e 2 2 f . . . 
            . . . . f f f e e f 5 5 f f . . 
            . . . . f f f f f f f f f f . . 
            . . . . . f f . . . f f f . . . 
            `],
        200,
        true
        )
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprites.destroy(otherSprite, effects.spray, 500)
    sprites.destroy(sprite, effects.spray, 500)
    zombiesleft += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spedpowerup, function (sprite, otherSprite) {
    controller.moveSprite(sprite, 130, 130)
    sprites.destroy(otherSprite)
    music.play(music.melodyPlayable(music.magicWand), music.PlaybackMode.UntilDone)
})
let bullet4: Sprite = null
let bullet2: Sprite = null
let bullet3: Sprite = null
let shield4: Sprite = null
let shield3: Sprite = null
let shield2: Sprite = null
let bullet1: Sprite = null
let number = ""
let dead3 = ""
let firevariable = ""
let REALfireratelist: string[] = []
let BadGuy2: Sprite = null
let BadGuy1: Sprite = null
let ShieldPowerupList: string[] = []
let shieldvariable = ""
let shield1: Sprite = null
let GAMEMODE2 = ""
let statusbar: StatusBarSprite = null
let p4shield = 0
let p3shield = 0
let p2shield = 0
let extravarforshield = ""
let fakeshieldlist: string[] = []
let wave = 0
let list: Sprite[] = []
let p1shield = 0
let shieldd: Sprite = null
let fireratepowerup: Sprite = null
let speedsprite: Sprite = null
let setspeedsy = 0
let setspeedsx = 0
let map = 0
let dead2 = ""
let dead1 = ""
let zombiesleft = 0
let direction4 = 0
let direction3 = 0
let direction2 = 0
let direction1 = 0
let playerspeed = 0
let p1firerate = 0
let bulletbuffer4 = 0
let bulletbuffer1 = 0
bulletbuffer1 = 12
let bulletbuffer2 = 12
let bulletbuffer3 = 12
bulletbuffer4 = 12
let bulletspeed = 135
game.setGameOverEffect(true, effects.confetti)
p1firerate = 700
let p2firerate = 700
let p3firerate = 700
let p4firerate = 700
playerspeed = 80
let players_left = 4
direction1 = 0
direction2 = 0
direction3 = 0
direction4 = 0
GAMEMODE()
forever(function () {
    if (GAMEMODE2 == "m") {
        info.setScore(players_left)
        if (players_left == 1) {
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
            dead1 = convertToText(list[0])
            dead2 = convertToText(list[1])
            dead3 = convertToText(list[2])
            number = "" + dead1.substr(0, 1) + dead2.substr(0, 1) + dead3.substr(0, 1)
            if (!(number.includes("2"))) {
                game.setGameOverMessage(true, "Player 2 Wins")
                game.gameOver(true)
            } else if (!(number.includes("3"))) {
                game.setGameOverMessage(true, "Player 3 Wins")
                game.gameOver(true)
            } else if (!(number.includes("4"))) {
                game.setGameOverMessage(true, "Player 4 Wins")
                game.gameOver(true)
            } else {
                game.setGameOverMessage(true, "Player 1 Wins")
                game.gameOver(true)
            }
        }
    } else {
        info.setScore(zombiesleft)
    }
})
forever(function () {
    if (players_left == 3) {
        dead1 = convertToText(list[0])
        dead1 = dead1.substr(0, 1)
    } else if (players_left == 2) {
        dead2 = convertToText(list[1])
        dead2 = dead2.substr(0, 1)
    }
})
forever(function () {
    if (!(dead1 == "1" || dead2 == "1")) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            if (direction1 == 0) {
                bullet1 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . 5 5 5 5 4 5 5 . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x + bulletbuffer1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
                bullet1.setVelocity(bulletspeed, 0)
                pause(p1firerate)
            } else if (direction1 == 1) {
                if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.One), mp.MultiplayerButton.A)) {
                    bullet1 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 4 4 4 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    bullet1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y + bulletbuffer1)
                    bullet1.setVelocity(0, bulletspeed)
                    pause(p1firerate)
                }
            } else if (direction1 == 2) {
                bullet1 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . 5 5 4 5 5 5 5 . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x + -1 * bulletbuffer1, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
                bullet1.setVelocity(-1 * bulletspeed, 0)
                pause(p1firerate)
            } else {
                bullet1 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 4 4 4 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y + -1 * bulletbuffer1)
                bullet1.setVelocity(0, -1 * bulletspeed)
                pause(p1firerate)
            }
        }
    }
})
forever(function () {
    if (shieldvariable.includes("1")) {
        p1shield = 1
        bulletbuffer1 = 22
        shield1 = sprites.create(img`
            ...........99999999999...........
            ........99999999999999999........
            .......9999111111111119999.......
            ......99911...........11999......
            ....99911...............11999....
            ....991...................199....
            ...991.....................199...
            ..991.......................199..
            .9991.......................1999.
            .991.........................199.
            .991.........................199.
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            .991.........................199.
            .991.........................199.
            .9991.......................1999.
            ..991.......................199..
            ...991.....................199...
            ....991...................199....
            ....99911...............11999....
            ......99911...........11999......
            .......9999111111111119999.......
            ........99999999999999999........
            ...........99999999999...........
            `, SpriteKind.shield)
        shieldvariable = ""
    }
    if (shieldvariable.includes("2")) {
        p2shield = 1
        bulletbuffer2 = 22
        shield2 = sprites.create(img`
            ...........99999999999...........
            ........99999999999999999........
            .......9999111111111119999.......
            ......99911...........11999......
            ....99911...............11999....
            ....991...................199....
            ...991.....................199...
            ..991.......................199..
            .9991.......................1999.
            .991.........................199.
            .991.........................199.
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            .991.........................199.
            .991.........................199.
            .9991.......................1999.
            ..991.......................199..
            ...991.....................199...
            ....991...................199....
            ....99911...............11999....
            ......99911...........11999......
            .......9999111111111119999.......
            ........99999999999999999........
            ...........99999999999...........
            `, SpriteKind.shield)
        shieldvariable = ""
    }
    if (convertToText(shieldvariable).includes("3")) {
        p3shield = 1
        bulletbuffer3 = 22
        shield3 = sprites.create(img`
            ...........99999999999...........
            ........99999999999999999........
            .......9999111111111119999.......
            ......99911...........11999......
            ....99911...............11999....
            ....991...................199....
            ...991.....................199...
            ..991.......................199..
            .9991.......................1999.
            .991.........................199.
            .991.........................199.
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            .991.........................199.
            .991.........................199.
            .9991.......................1999.
            ..991.......................199..
            ...991.....................199...
            ....991...................199....
            ....99911...............11999....
            ......99911...........11999......
            .......9999111111111119999.......
            ........99999999999999999........
            ...........99999999999...........
            `, SpriteKind.shield)
        shieldvariable = ""
    }
    if (convertToText(shieldvariable).includes("4")) {
        p4shield = 1
        bulletbuffer4 = 22
        shield4 = sprites.create(img`
            ...........99999999999...........
            ........99999999999999999........
            .......9999111111111119999.......
            ......99911...........11999......
            ....99911...............11999....
            ....991...................199....
            ...991.....................199...
            ..991.......................199..
            .9991.......................1999.
            .991.........................199.
            .991.........................199.
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            991...........................199
            .991.........................199.
            .991.........................199.
            .9991.......................1999.
            ..991.......................199..
            ...991.....................199...
            ....991...................199....
            ....99911...............11999....
            ......99911...........11999......
            .......9999111111111119999.......
            ........99999999999999999........
            ...........99999999999...........
            `, SpriteKind.shield)
        shieldvariable = ""
    }
})
forever(function () {
    if (firevariable.includes("1")) {
        p1firerate = 100
    }
    if (firevariable.includes("2")) {
        p2firerate = 100
    }
    if (convertToText(firevariable).includes("3")) {
        p3firerate = 100
    }
    if (convertToText(firevariable).includes("4")) {
        p4firerate = 100
    }
})
forever(function () {
    if (!(dead1 == "3" || dead2 == "3")) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            if (direction3 == 0) {
                bullet3 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . 5 5 5 5 4 5 5 . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x + bulletbuffer2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
                bullet3.setVelocity(bulletspeed, 0)
                pause(p3firerate)
            } else if (direction3 == 1) {
                if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Three), mp.MultiplayerButton.A)) {
                    bullet3 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 4 4 4 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    bullet3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y + bulletbuffer2)
                    bullet3.setVelocity(0, bulletspeed)
                    pause(p3firerate)
                }
            } else if (direction3 == 2) {
                bullet3 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . 5 5 4 5 5 5 5 . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x + -1 * bulletbuffer2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
                bullet3.setVelocity(-1 * bulletspeed, 0)
                pause(p3firerate)
            } else {
                bullet3 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 4 4 4 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y + -1 * bulletbuffer2)
                bullet3.setVelocity(0, -1 * bulletspeed)
                pause(p3firerate)
            }
        }
    }
})
forever(function () {
    if (!(dead1 == "2" || dead2 == "2")) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            if (direction2 == 0) {
                bullet2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . 5 5 5 5 4 5 5 . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x + bulletbuffer2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
                bullet2.setVelocity(bulletspeed, 0)
                pause(p2firerate)
            } else if (direction2 == 1) {
                if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Two), mp.MultiplayerButton.A)) {
                    bullet2 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 4 4 4 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    bullet2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y + bulletbuffer2)
                    bullet2.setVelocity(0, bulletspeed)
                    pause(p2firerate)
                }
            } else if (direction2 == 2) {
                bullet2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . 5 5 4 5 5 5 5 . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x + -1 * bulletbuffer2, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
                bullet2.setVelocity(-1 * bulletspeed, 0)
                pause(p2firerate)
            } else {
                bullet2 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 4 4 4 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y + -1 * bulletbuffer2)
                bullet2.setVelocity(0, -1 * bulletspeed)
                pause(p2firerate)
            }
        }
    }
})
forever(function () {
    if (!(dead1 == "4" || dead2 == "4")) {
        if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
            music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
            if (direction4 == 0) {
                bullet4 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . 5 5 5 5 4 5 5 . . . . 
                    . . . . . 5 5 5 5 4 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x + bulletbuffer4, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
                bullet4.setVelocity(bulletspeed, 0)
                pause(p4firerate)
            } else if (direction4 == 1) {
                if (mp.isButtonPressed(mp.playerSelector(mp.PlayerNumber.Four), mp.MultiplayerButton.A)) {
                    bullet4 = sprites.create(img`
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . 4 4 4 . . . . . . 
                        . . . . . . . 5 5 5 . . . . . . 
                        . . . . . . . . 5 . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        . . . . . . . . . . . . . . . . 
                        `, SpriteKind.Projectile)
                    bullet4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y + bulletbuffer4)
                    bullet4.setVelocity(0, bulletspeed)
                    pause(p4firerate)
                }
            } else if (direction4 == 2) {
                bullet4 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . 5 5 4 5 5 5 5 . . . . . 
                    . . . . . 5 4 5 5 5 5 . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x + -1 * bulletbuffer4, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
                bullet4.setVelocity(-1 * bulletspeed, 0)
                pause(p4firerate)
            } else {
                bullet4 = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . 5 . . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 4 4 4 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . 5 5 5 . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Projectile)
                bullet4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y + -1 * bulletbuffer4)
                bullet4.setVelocity(0, -1 * bulletspeed)
                pause(p4firerate)
            }
        }
    }
})
forever(function () {
    if (p1shield == 1) {
        shield1.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).y)
    }
    if (p2shield == 1) {
        shield2.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).y)
    }
    if (p3shield == 1) {
        shield3.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).y)
    }
    if (p4shield == 1) {
        shield4.setPosition(mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).x, mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Four)).y)
    }
})
forever(function () {
    if (GAMEMODE2 == "z") {
        if (zombiesleft == 0) {
            if (wave == 3) {
                Clearpowerup()
                game.splash("Wave #" + wave)
                ZombieMAPWHICH(3)
            } else if (wave == 5) {
                Clearpowerup()
                game.splash("Wave #" + wave)
                ZombieMAPWHICH(4)
            } else if (wave == 7) {
                Clearpowerup()
                game.splash("Wave #" + wave)
                ZombieMAPWHICH(2)
            } else if (wave == 9) {
                Clearpowerup()
                game.splash("Wave #" + wave)
                ZombieMAPWHICH(5)
            } else if (wave == 11) {
                Clearpowerup()
                info.setScore(parseFloat("123"))
                game.setGameOverMessage(true, "Congrats, you survived!")
                game.gameOver(true)
            } else {
                game.splash("Wave #" + wave)
            }
            Start(wave)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (GAMEMODE2 == "z") {
        if (100 > statusbar.value) {
            statusbar.value += 0.5
        }
    }
})
