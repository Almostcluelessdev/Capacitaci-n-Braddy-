document.addEventListener("DOMContentLoaded", () => {
  initTrainingResources();
});

function initTrainingResources() {
  const buttons = document.querySelectorAll(".mark-resource");
  const progressElement = document.getElementById("resource-progress");
  const resetButton = document.getElementById("reset-resources");

  if (!buttons.length) return;

  buttons.forEach((button) => {
    const resourceId = button.dataset.resourceId;
    const storageKey = `resource-${resourceId}-completed`;

    if (localStorage.getItem(storageKey) === "true") {
      setCompletedState(button);
    }

    button.addEventListener("click", () => {
      localStorage.setItem(storageKey, "true");
      setCompletedState(button);
      updateResourceProgress(buttons, progressElement);
    });
  });

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      buttons.forEach((button) => {
        const resourceId = button.dataset.resourceId;
        const storageKey = `resource-${resourceId}-completed`;

        localStorage.removeItem(storageKey);
        button.classList.remove("completed");

        if (resourceId.includes("video")) {
          button.textContent = "Marcar video como visto";
        } else {
          button.textContent = "Marcar como visitado";
        }
      });

      updateResourceProgress(buttons, progressElement);
    });
  }

  updateResourceProgress(buttons, progressElement);
}

function setCompletedState(button) {
  button.classList.add("completed");
  button.textContent = "Completado";
}

function updateResourceProgress(buttons, progressElement) {
  if (!progressElement) return;

  const completed = Array.from(buttons).filter((button) => {
    const resourceId = button.dataset.resourceId;
    return localStorage.getItem(`resource-${resourceId}-completed`) === "true";
  }).length;

  progressElement.textContent = `${completed}/${buttons.length}`;
}