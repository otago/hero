export default () => {
  const buttonPrevious = document.getElementsByClassName('op__hero--controls-previous')[0];
  const buttonNext = document.getElementsByClassName('op__hero--controls-next')[0];
  const heroItemContainer = document.getElementsByClassName('op__hero--items')[0];
  const heroItemCount = heroItemContainer.children.length;

  let currentPosition = 0;

  const getUpdatedCurrentPosition = (desiredPosition) => {
    if (desiredPosition < 0) {
      currentPosition = 0;
    } else {
      currentPosition = desiredPosition < heroItemCount ? desiredPosition : heroItemCount - 1;
    }
    return currentPosition;
  };

  const moveToPosition = (newPosition) => {
    heroItemContainer.style.left = `-${newPosition * 100}%`;
  };

  buttonPrevious.addEventListener('click', () => {
    moveToPosition(getUpdatedCurrentPosition((currentPosition - 1)));
  });

  buttonNext.addEventListener('click', () => {
    moveToPosition(getUpdatedCurrentPosition((currentPosition + 1)));
  });
};
