<template>
  <div>
    <nav class="navbar navbar-dark bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">MEVN stack</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="addTask">
                <div class="form-group">
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Ingrese una tarea"
                    v-model="task.title"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    cols="30"
                    rows="10"
                    class="form-control"
                    placeholder="Ingrese una descripcion"
                    v-model="task.description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <button
                    type="submit"
                    class="btn btn-success w-100"
                    v-if="!edit"
                    >Enviar</button>
                  <button
                    type="submit"
                    class="btn btn-info w-100"
                    v-else
                  >Actualizar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-md-7">
          <table class="table table-bordered">
            <thead>
              <tr>
                <th>Task</th>
                <th>Descripcion</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task of tasks" :key="task._id">
                <td>{{ task.title }}</td>
                <td>{{ task.description }}</td>
                <td>
                  <button class="btn btn-info mx-auto" @click="editTask(task._id)">
                    Edit
                  </button>
                </td>
                <td>
                  <button class="btn btn-danger mx-auto" @click="deleteTask(task._id)">
                    Eliminar
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      task: {
        title: "",
        description: "",
      },
      tasks: [],
      edit: false,
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    addTask() {
      fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(this.task),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          this.task.title = "";
          this.task.description = "";

          this.getTasks()

          console.log(data);
        });
    },
    getTasks() {
      fetch("api/tasks")
        .then((res) => res.json())
        .then((data) => (this.tasks = data));
    },
    deleteTask(_id) {
      fetch("api/tasks/" + _id, {
        method: "DELETE",
      }).then(() => {
        this.getTasks();
      });
    },
    editTask(_id) {
      console.log(_id);
    },
  },
};
</script>

<style>
</style>