document.addEventListener("DOMContentLoaded", () => {
  const isAddPage = document.getElementById("add-task-button") !== null;
  const isDashboard = document.getElementById("task-list") !== null;

  // ========== ADD TASK PAGE ==========
  if (isAddPage) {
    const addBtn = document.getElementById("add-task-button");

    addBtn.addEventListener("click", function () {
      const task = document.getElementById("new-task-input").value.trim();
      const date = document.getElementById("due-date-input").value;
      const time = document.getElementById("due-time-input").value;

      if (task === "") {
        alert("Task cannot be empty.");
        return;
      }

      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

      tasks.push({
        id: Date.now(),
        title: task,
        dueDate: date,
        dueTime: time,
        completed: false,
      });

      localStorage.setItem("tasks", JSON.stringify(tasks));

      window.location.href = "dashboard.html";
    });
  }

  // ========== DASHBOARD PAGE ==========
  if (isDashboard) {
    const taskList = document.getElementById("task-list");
    const taskCount = document.getElementById("task-count");
    const clearBtn = document.getElementById("clear-completed-btn");
    const completeBtn = document.getElementById("complete-btn");

    function loadTasks() {
      taskList.innerHTML = "";
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      let remaining = 0;

      tasks.forEach((task) => {
        const li = document.createElement("li");

        li.innerHTML = `
          <input type="checkbox" class="complete-checkbox" data-id="${task.id}" ${task.completed ? "checked" : ""}>
          <span style="text-decoration: ${task.completed ? "line-through" : "none"};">
            ${task.title} (${task.dueDate} ${task.dueTime})
          </span>
        `;

        taskList.appendChild(li);

        if (!task.completed) remaining++;
      });

      taskCount.textContent = `${remaining} task(s) remaining`;
    }

    loadTasks();

    // Handle checkbox toggle
    taskList.addEventListener("change", function (e) {
      if (e.target.classList.contains("complete-checkbox")) {
        let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        const taskId = parseInt(e.target.getAttribute("data-id"));

        tasks = tasks.map((t) => {
          if (t.id === taskId) t.completed = e.target.checked;
          return t;
        });

        localStorage.setItem("tasks", JSON.stringify(tasks));
        loadTasks();
      }
    });

    // Clear completed tasks
    clearBtn.addEventListener("click", function () {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.filter((task) => !task.completed);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    });

    // Mark all tasks as completed
    completeBtn.addEventListener("click", function () {
      let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
      tasks = tasks.map((task) => {
        task.completed = true;
        return task;
      });
      localStorage.setItem("tasks", JSON.stringify(tasks));
      loadTasks();
    });
  }
});
