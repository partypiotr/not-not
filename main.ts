let not_not = 0
if (not_not == 10) {
    game.over(true, effects.slash)
}
forever(function () {
    not_not += 1
    pause(1000)
})
