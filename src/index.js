function scrollToElementWithOffset(targetId, offset) {
  const targetElement = document.getElementById(targetId);
  if (targetElement) {
    const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY;
    const adjustedPosition = targetPosition - offset;
    window.scrollTo(0, adjustedPosition);
  }
}
