/**The Game Rules**/

$(function () {
    let colors = $('#colors li');
    let start = $('#start');
    let gameState = 'waiting';
    let gameSequence = new Array();
    let level = 1;
    let flashNo;
    let clickedNo;
    let setupLightSquence = function () {
        let randomNum = Math.floor(Math.random() * 4);
        gameSequence[level - 1] = randomNum;
        showLightSquence();
    };
    let lightOn = function (no) {
        colors.eq(gameSequence[no]).addClass('on').fadeTo('fast', 0.5);
    };
    let lightOff = function () {
        colors.removeClass('on').fadeTo('fast', 1);
    };
    let showLightSquence = function () {
        lightOff();

        if (flashNo < level) {
            var on = setTimeout(function () {
                let off = setTimeout(function () {
                    showLightSquence();
                    flashNo++;
                }, 500);
                lightOn(flashNo);
            }, 500);
        } else {
            gameState = 'playing';
            $('body').addClass('playing');
            start.text('Your turn...');
            clearTimeout(on);
        }
    };

    colors.click(function () {
        if (gameState == 'playing') {
            let selectedSquare = $(this).index();

            if (gameSequence[clickedNo] == selectedSquare) {
                if (clickedNo == level - 1) {
                    gameState = 'waiting';
                    $('body').removeClass('playing');
                    start.text('WELLDONE. Go to the next level >');
                    level++;
                }

                lightOn(clickedNo);
                let off = setTimeout(function () {
                    lightOff();
                    clickedNo++;
                }, 200);
            } else {
                gameState = 'waiting';
                $('body').removeClass('playing');
                start.text('GAME OVER. Try again?');
                $('body').removeClass('playing').addClass('game-over');
                gameSequence = new Array();

                level = 1;
            }
        }
    });

    let init = function () {
        $('#colors li').animate({ left: '50px' }, 500).animate({ left: '0px' }, 500);
        $('#level').text('Level ' + level);
        flashNo = 0;
        clickedNo = 0;
        $(this).text('Simon says...');
        $('body').removeClass('game-over');
        setupLightSquence();
    }
    start.click(init);
});