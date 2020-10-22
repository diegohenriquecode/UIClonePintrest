const grids = document.querySelectorAll('.grid');
const grids = document.querySelectorAll('.heading .wrapper .text');

function enterScreen(index) {
    const grid = grids[index]
    const heading = headings[index]
    const gridColumns = grid.querySelectorAll('.column')

    grid.classList.add('active')

    gridColumns.forEach(element => {
        element.classList.remove('animate-before')
    })
}
function exitScreen(index, exitDelay) {}

function setUpAnimationCycle({
    initialScreenIndex, 
    timePerScreen, 
    exitDelay
}) {
    enterScreen(initialScreenIndex)
}

setUpAnimationCycle({
    initialScreenIndex: 0,
    timePerScreen: 2000,
    exitDelay: 200 * 7
})