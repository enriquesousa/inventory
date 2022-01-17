<template>
<div>
    <div>
        <router-link to="" class="btn btn-primary">Todos los Empleados</router-link>
    </div>
    <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Añadir Empleado</h1>
                                </div>
                                <form class="user" @submit.prevent="signup">

                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Entre Nombre" v-model="form.name">
                                            </div>
                                            <div class="col-md-6">
                                                <input type="email" class="form-control" id="exampleInputFirstName" placeholder="Entre Email" v-model="form.email">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Entre Dirección" v-model="form.address">
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Entre Salario" v-model="form.salary">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input type="date" class="form-control" id="exampleInputFirstName" placeholder="Entre Fecha de Inicio" v-model="form.joining_date">
                                            </div>
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Entre Nid" v-model="form.nid">
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input type="text" class="form-control" id="exampleInputFirstName" placeholder="Entre Teléfono" v-model="form.phone">
                                            </div>
                                            <div class="col-md-6">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <div class="form-row">
                                            <div class="col-md-6">
                                                <input type="file" class="custom-file-input" id="customFile">
                                                <label class="custom-file-label" for="customFile">Choose file</label>
                                            </div>
                                            <div class="col-md-6">
                                                <img src="form.photo" style="height: 40px; width: 40px;">

                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block">Añadir</button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script type="text/javascript">

  export default {

    created(){
      if (!User.loggedIn()){
        this.$router.push({ name: 'home'})
      }
    },

    data(){
      return {
        form:{
          name: null,
          email: null,
          password: null,
          confirm_password: null
        },
        errors:{

        }
      }
    },
    
  }
  
</script>

<style>

</style>
