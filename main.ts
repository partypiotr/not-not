let _3rr0r: Sprite = null
let mySprite: Sprite = null
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.over(true, effects.melt)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    _3rr0r = sprites.create(img`
. . 7 7 7 7 7 7 7 7 . . . . . . 
7 7 5 7 7 7 7 7 7 f f f 2 2 2 . 
7 6 6 5 5 9 9 9 9 6 6 6 6 . 2 2 
7 7 5 5 9 9 6 6 9 6 6 9 9 . 2 . 
7 . 5 5 9 9 9 9 9 9 9 6 2 2 . . 
2 7 5 2 9 9 9 9 9 6 6 2 f . . . 
4 7 4 7 2 2 4 2 2 2 . 2 f . . . 
7 7 4 7 6 2 2 9 9 6 d . . . . . 
7 7 7 7 9 2 2 2 9 d d d . . . . 
7 7 9 9 9 2 2 9 2 2 . . . . . . 
. . . 4 2 9 9 9 9 2 . . . 3 3 . 
9 9 9 9 9 9 9 9 . . . 3 2 2 2 2 
. 9 e e e 9 9 9 . . 3 2 9 9 9 . 
9 9 e e 9 9 9 . . 3 2 3 2 3 3 . 
. . 9 9 9 9 9 9 9 . . . . . . . 
. 9 9 9 9 9 9 9 . . . . . . . . 
`, SpriteKind.Player)
    _3rr0r.follow(mySprite)
    mySprite.destroy()
    pause(5000)
    game.over(false, effects.melt)
})
game.onUpdate(function () {
    mySprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . 
. . . . . 1 3 3 1 . . . . . . . 
. . . . . 1 3 3 1 . . . . . . . 
. . . . . 1 1 1 1 . . . . . . . 
. . . . . 1 . . 1 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
})
