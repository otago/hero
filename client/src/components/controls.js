export default () => {
  const buttonPrevious = document.getElementsByClassName('op__hero--controls-previous')[0];
  const buttonNext = document.getElementsByClassName('op__hero--controls-next')[0];
  const heroItemContainer = document.getElementsByClassName('op__hero--items')[0];
  const heroItemCount = heroItemContainer.children.length;
  const swipeThreshold = 100;
  const autoScrollDelay = 4000;

  let mouseDown = false;
  let currentPosition = 0;
  let startingCoords = [0, 0];
  let userHasInteractedWithTheSlider = false;

  // Slides
  const getUpdatedCurrentPosition = (desiredPosition) => {
    if (desiredPosition < 0) {
      currentPosition = 0;
    } else {
      currentPosition = desiredPosition < heroItemCount ? desiredPosition : 0;
    }
    return currentPosition;
  };
  const getPositionPercentage = (position) => `-${position * 100}%`;
  const moveToPosition = (newPosition, offset = 0) => {
    if (offset !== 0) {
      heroItemContainer.style.left = `calc(${getPositionPercentage(newPosition)} - ${offset}px)`;
    } else {
      heroItemContainer.style.left = getPositionPercentage(newPosition);
    }
  };

  // Controls
  const goSame = () => moveToPosition(getUpdatedCurrentPosition((currentPosition)));
  const goPrevious = () => {
    userHasInteractedWithTheSlider = true;
    moveToPosition(getUpdatedCurrentPosition((currentPosition - 1)));
  };
  const goNext = (auto = false) => {
    if (!auto) {
      userHasInteractedWithTheSlider = true;
    }
    moveToPosition(getUpdatedCurrentPosition((currentPosition + 1)));
  };

  buttonPrevious.addEventListener('click', () => goPrevious());
  buttonNext.addEventListener('click', () => goNext());

  // Dragging
  let lastCoords = null;

  const getOffsetCoords = (coords) => [
    startingCoords[0] - coords[0],
    startingCoords[1] - coords[1]
  ];

  const getCoords = (e) => {
    if (e.touches && e.touches.length) {
      return [
        e.touches[0].clientX,
        e.touches[0].clientY
      ];
    }
    return [
      e.clientX,
      e.clientY
    ];
  };

  const handleDown = (e) => {
    if (!e.touches) {
      e.preventDefault();
    }
    startingCoords = getCoords(e);
    heroItemContainer.classList.add('dragging');
    mouseDown = true;
  };

  const handleMove = (e) => {
    if (mouseDown) {
      if (!e.touches) {
        e.preventDefault();
      }
      lastCoords = getCoords(e);
      const coords = getOffsetCoords(getCoords(e));
      moveToPosition(currentPosition, coords[0]);
    }
  };

  const handleUp = (e) => {
    if (!e.touches) {
      e.preventDefault();
    }
    heroItemContainer.classList.remove('dragging');
    mouseDown = false;
    const coords = (e.touches && !e.touches.length) ?
      getOffsetCoords(lastCoords) :
      getOffsetCoords(getCoords(e));
    if (Math.abs(coords[0]) > swipeThreshold) {
      if (coords[0] > 0) {
        goNext();
      } else {
        goPrevious();
      }
    } else {
      goSame();
    }
  };

  heroItemContainer.addEventListener('mousedown', (e) => handleDown(e));
  heroItemContainer.addEventListener('touchstart', (e) => handleDown(e));

  heroItemContainer.addEventListener('mousemove', (e) => handleMove(e));
  heroItemContainer.addEventListener('touchmove', (e) => handleMove(e));

  heroItemContainer.addEventListener('mouseup', (e) => handleUp(e));
  heroItemContainer.addEventListener('touchend', (e) => handleUp(e));

  const scheduleNextSlide = () => {
    setTimeout(() => {
      if (!userHasInteractedWithTheSlider) {
        goNext(true);
        scheduleNextSlide();
      }
    }, autoScrollDelay);
  };

  scheduleNextSlide();
};
