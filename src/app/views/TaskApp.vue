<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <div class="card">
            <div class="card-body">
              <form @submit.prevent="submitTask">
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
                    v-if="edit == ''"
                  >
                    Enviar
                  </button>
                  <div class="row w-100 m-0" v-else>
                    <button type="submit" class="btn btn-info col-10">
                      Actualizar
                    </button>
                    <button
                      class="btn btn-danger col-2"
                      @click="cleanData"
                    >
                      X
                    </button>
                  </div>
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
                  <button
                    class="btn btn-info w-100"
                    @click="editTask(task)"
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    class="btn btn-danger w-100"
                    @click="deleteTask(task._id)"
                  >
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
import Task from './TaskApp/Task'
export default {
  data() {
    return {
      tasks: [],
      task: new Task(),
      edit: "",
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
    condSubmit() {
      if (this.edit != "") {
        return fetch("/api/tasks/" + this.edit, {
          method: "PUT",
          body: JSON.stringify(this.task),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        });
      } else {
        return fetch("/api/tasks", {
          method: "POST",
          body: JSON.stringify(this.task),
          headers: {
            Accept: "application/json",
            "Content-type": "application/json",
          },
        });
      }
    },
    cleanData(){
      this.edit = "";
      this.task = new Task();
    },
    submitTask() {
      this.condSubmit()
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.cleanData();
        this.getTasks();
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
      })
      .then(res => res.json())
      .then((data) => {
        console.log(data)
        this.getTasks();
      });
    },
    editTask(task) {
      this.task = new Task(task.title, task.description);
      this.edit = task._id;
    },
  },
};
</script>

<style>
</style>