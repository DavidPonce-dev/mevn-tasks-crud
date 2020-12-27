<template>
  <div class="card">
    <div class="card-body">
      <form @submit.prevent="detonarSubmit">
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
          <button type="submit" class="btn btn-success">Enviar</button>
        </div>
      </form>
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
    };
  },
  methods: {
    detonarSubmit() {
      fetch("/api/tasks", {
        method: "POST",
        body: JSON.stringify(this.task),
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => console.log(data));

      this.task.title = "";
      this.task.description = "";
    },
  },
};
</script>

<style>
</style>