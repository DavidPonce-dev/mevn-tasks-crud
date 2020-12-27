<template>
  <div class="container-fluid">
    <nav class="navbar navbar-dark bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">MEVN stack</a>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col-md-5">
          <AddTaskForm />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTaskForm from './components/AddTaskForm.vue'
export default {
  components: {
    AddTaskForm
  }
}
</script>

<style>
</style>