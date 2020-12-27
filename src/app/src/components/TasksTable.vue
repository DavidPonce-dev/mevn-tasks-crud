<template>
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
          <button class="btn btn-info" @click="editTask(task._id)">
            Edit
          </button>
        </td>
        <td>
          <button class="btn btn-danger" @click="deleteTask(task._id)">
            Eliminar
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    this.getTasks();
  },
  methods: {
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
    editTask(_id){
      console.log(_id)
    }
  },
};
</script>

<style>
</style>