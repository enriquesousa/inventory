class Notification{

    success(){
        new Noty({
            type: 'success',
            layout: 'topRight',
            text: 'Successfully Done!',
            timeout: 1000,
        }).show();
    }

    alert(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'are you Sure?',
            timeout: 1000,
        }).show();
    }

    error(){
        new Noty({
            type: 'alert',
            layout: 'topRight',
            text: 'Something Went Wrong!',
            timeout: 1000,
        }).show();
    }

    warning(){
        new Noty({
            type: 'warning',
            layout: 'topRight',
            text: 'Opps Cuidado!',
            timeout: 1000,
        }).show();
    }

    image_validation(){
        new Noty({
            type: 'error',
            layout: 'topRight',
            text: 'Solo imágenes menores a 1Mb',
            timeout: 1000,
        }).show();
    }

}

export default Notification = new Notification()