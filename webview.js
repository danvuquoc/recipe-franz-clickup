module.exports = (Franz) => {
  const getNotifications = function getNotifications() {
    let counter = document.querySelector('.cu-unseen-notifications-counter__body');
    if (counter !== null) {
      Franz.setBadge(parseInt(counter.innerText));
    } else {
      Franz.setBadge(0);
    }
  };
  Franz.loop(getNotifications);
};
