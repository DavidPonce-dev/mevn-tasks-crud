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
          <AddTaskForm />
        </div>
        <div class="col-md-7">
          <TasksTable />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AddTaskForm from './components/AddTaskForm.vue'
import TasksTable from './components/TasksTable.vue'
export default {
  components: {
    AddTaskForm,
    TaskTable
  }
}
</script>

<style>
</style>