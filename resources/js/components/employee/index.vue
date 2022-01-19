<template>
<div>

    <div>
        <router-link to="/store-employee" class="btn btn-primary">Añadir Empleado</router-link>
    </div>
    <br>

    <!-- Begin Row Simple Table -->
    <div class="row">
        <div class="col-lg-12 mb-4">
            <!-- Simple Tables -->
            <div class="card">
                <div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                    <h6 class="m-0 font-weight-bold text-primary">Lista de Empleados</h6>
                </div>
                <div class="table-responsive">
                    <table class="table align-items-center table-flush">
                        <thead class="thead-light">
                            <tr>
                                <th>Nombre</th>
                                <th>Foto</th>
                                <th>Teléfono</th>
                                <th>Salario</th>
                                <th>Fecha Inicio</th>
                                <th>Acción</th>
                            </tr>
                        </thead>
                        <tbody>

                            <tr v-for="employee in employees" :key="employee.id">
                                <td>{{ employee.name }}</td>
                                <td> <img :src="employee.photo" id="em_photo"></td>
                                <td>{{ employee.phone }}</td>
                                <td>{{ employee.salary }}</td>
                                <td>{{ employee.joining_date }}</td>
                                <td>
                                    <a href="#" class="btn btn-sm btn-primary">Editar</a>
                                    <a href="#" class="btn btn-sm btn-danger">Borrar</a>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
                <div class="card-footer"></div>
            </div>
        </div>
    </div>
    <!-- End Row Simple Table -->

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
    return{
        employees:[]
    }
},

methods:{
    allEmployee(){
        axios.get('/api/employee')
        .then(({data}) => (this.employees = data))
        .catch()
    }
},

created(){
    this.allEmployee();
}

}
</script>

<style type="text/css">
    #em_photo{
        height: 40px;
        width: 40px;
    }
</style>
