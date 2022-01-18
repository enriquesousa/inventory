<template>
<div>
    <div>
        <router-link to="/store-employee" class="btn btn-primary">Añadir Empleado</router-link>
    </div>
    <div class="row justify-content-center">
        <div class="col-xl-12 col-lg-12 col-md-12">
            <div class="card shadow-sm my-5">
                <div class="card-body p-0">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="login-form">
                                <div class="text-center">
                                    <h1 class="h4 text-gray-900 mb-4">Lista Empleados</h1>
                                </div>
                                






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
    
  }
  
</script>

<style>

</style>
